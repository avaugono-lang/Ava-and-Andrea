import express, { NextFunction, Request, Response } from 'express';
import os from 'os';
import path from 'path';
import { GymStore, INSPO_CATEGORIES, openStore } from './store.ts';

interface AuthedRequest extends Request {
  gymUser?: ReturnType<GymStore['userByToken']>;
}

function bearer(req: Request) {
  const header = req.header('authorization') || '';
  return header.toLowerCase().startsWith('bearer ') ? header.slice(7).trim() : undefined;
}

function asyncRoute(handler: (req: AuthedRequest, res: Response) => Promise<void> | void) {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(handler(req as AuthedRequest, res)).catch(next);
  };
}

export function createApp(options?: { dbPath?: string; webhookSecret?: string; devMatch?: boolean }) {
  const dbPath = options?.dbPath || process.env.GYMTRACK_DB || path.join(process.cwd(), 'data', 'gymtrack.json');
  const store = openStore(dbPath);
  const webhookSecret = options?.webhookSecret ?? process.env.GYMTRACK_WEBHOOK_SECRET ?? 'dev-webhook-secret';
  const devMatch = options?.devMatch ?? (process.env.GYMTRACK_DEV_MATCH !== '0' && process.env.NODE_ENV !== 'production');
  const app = express();
  app.use(express.json({ limit: '1mb' }));

  function requireUser(req: AuthedRequest, res: Response) {
    const user = store.userByToken(bearer(req));
    if (!user || user.status !== 'active') {
      res.status(401).json({ code: 'UNAUTHORIZED' });
      return null;
    }
    return user;
  }

  app.get('/api/health', (_req, res) => {
    res.json({ ok: true });
  });

  app.post('/api/auth/register-club', asyncRoute((req, res) => {
    const { clubName, city, adminName, email, password, phone } = req.body ?? {};
    if (!clubName || !city || !adminName || !email || !password) {
      res.status(400).json({ code: 'MISSING' });
      return;
    }
    try {
      res.status(201).json(store.registerClub({ clubName, city, adminName, email, password, phone }));
    } catch (error) {
      const message = error instanceof Error ? error.message : '';
      res.status(message === 'EMAIL_TAKEN' ? 409 : 400).json({ code: message || 'ERROR' });
    }
  }));

  app.post('/api/auth/signup-student', asyncRoute((req, res) => {
    const { name, email, password, phone, level, dateOfBirth } = req.body ?? {};
    if (!name || !email || !password || !dateOfBirth) {
      res.status(400).json({ code: 'MISSING' });
      return;
    }
    try {
      const result = store.signupStudent({ name, email, password, phone, level, dateOfBirth });
      res.status(201).json({ ...result, devMatch });
    } catch (error) {
      const message = error instanceof Error ? error.message : '';
      res.status(message.startsWith('EMAIL_TAKEN') ? 409 : 400).json({ code: message || 'ERROR' });
    }
  }));

  app.post('/api/auth/login', asyncRoute((req, res) => {
    try {
      res.json(store.login(req.body?.email ?? '', req.body?.password ?? ''));
    } catch (error) {
      const payment = (error as { payment?: unknown }).payment;
      const message = error instanceof Error ? error.message : '';
      if (message === 'PAYMENT_REQUIRED') {
        res.status(403).json({ code: 'PAYMENT_REQUIRED', payment });
        return;
      }
      res.status(401).json({ code: 'INVALID' });
    }
  }));

  app.get('/api/me', asyncRoute((req, res) => {
    const user = requireUser(req, res);
    if (!user) return;
    res.json({ user: store.publicUser(user) });
  }));

  app.post('/api/clubs/students', asyncRoute((req, res) => {
    const admin = requireUser(req, res);
    if (!admin) return;
    try {
      const result = store.signupClubStudents(admin, req.body?.students ?? []);
      res.status(201).json({ ...result, devMatch });
    } catch (error) {
      const message = error instanceof Error ? error.message : '';
      const status = message === 'FORBIDDEN' ? 403 : message.startsWith('EMAIL_TAKEN') ? 409 : 400;
      res.status(status).json({ code: message || 'ERROR' });
    }
  }));

  app.post('/api/clubs/allocate', asyncRoute((req, res) => {
    const admin = requireUser(req, res);
    if (!admin) return;
    try {
      res.json({ student: store.allocatePaidStudent(admin, req.body?.studentId) });
    } catch (error) {
      const message = error instanceof Error ? error.message : '';
      res.status(message === 'FORBIDDEN' ? 403 : 400).json({ code: message || 'ERROR' });
    }
  }));

  app.post('/api/payments/webhook', asyncRoute((req, res) => {
    if (req.header('x-gymtrack-webhook-secret') !== webhookSecret) {
      res.status(401).json({ code: 'UNAUTHORIZED' });
      return;
    }
    const { reference, amount, transferId } = req.body ?? {};
    try {
      res.json(store.matchPayment(reference, Number(amount), transferId));
    } catch (error) {
      const message = error instanceof Error ? error.message : '';
      res.status(message === 'NOT_FOUND' ? 404 : 400).json({ code: message || 'ERROR' });
    }
  }));

  app.post('/api/payments/dev-match', asyncRoute((req, res) => {
    if (!devMatch) {
      res.status(404).json({ code: 'NOT_FOUND' });
      return;
    }
    const { reference, amount } = req.body ?? {};
    try {
      res.json(store.matchPayment(reference, Number(amount), `dev-${reference}`));
    } catch (error) {
      const message = error instanceof Error ? error.message : '';
      res.status(400).json({ code: message || 'ERROR' });
    }
  }));

  app.post('/api/students/:id/parent', asyncRoute((req, res) => {
    try {
      res.json(store.acceptParent(req.params.id, req.body?.parentEmail ?? ''));
    } catch {
      res.status(404).json({ code: 'NOT_FOUND' });
    }
  }));

  app.get('/api/events', asyncRoute((req, res) => {
    res.json(store.events(String(req.query.q ?? '')));
  }));

  app.get('/api/clubs', asyncRoute((req, res) => {
    const lat = req.query.lat === undefined ? undefined : Number(req.query.lat);
    const lng = req.query.lng === undefined ? undefined : Number(req.query.lng);
    res.json({
      clubs: store.clubs({
        q: String(req.query.q ?? ''),
        lat: Number.isFinite(lat) ? lat : undefined,
        lng: Number.isFinite(lng) ? lng : undefined,
      }),
    });
  }));

  app.get('/api/inspo/categories', (_req, res) => {
    res.json({ categories: INSPO_CATEGORIES });
  });

  app.get('/api/inspo', asyncRoute((req, res) => {
    const viewer = store.userByToken(bearer(req));
    res.json({ posts: store.listPosts(viewer, String(req.query.category ?? 'All')) });
  }));

  app.post('/api/inspo', asyncRoute((req, res) => {
    const user = requireUser(req, res);
    if (!user) return;
    try {
      res.status(201).json({ post: store.createPost(user, req.body ?? {}) });
    } catch (error) {
      const message = error instanceof Error ? error.message : '';
      res.status(message === 'PARENT_REQUIRED' || message === 'PAYMENT_REQUIRED' ? 403 : 400).json({ code: message || 'ERROR' });
    }
  }));

  app.post('/api/inspo/:id/like', asyncRoute((req, res) => {
    const user = requireUser(req, res);
    if (!user) return;
    try {
      res.json({ post: store.like(user, req.params.id) });
    } catch {
      res.status(404).json({ code: 'NOT_FOUND' });
    }
  }));

  app.post('/api/inspo/:id/comments', asyncRoute((req, res) => {
    const user = requireUser(req, res);
    if (!user) return;
    if (!req.body?.text?.trim()) {
      res.status(400).json({ code: 'MISSING' });
      return;
    }
    try {
      res.status(201).json({ post: store.comment(user, req.params.id, req.body.text, req.body.parentCommentId ?? null) });
    } catch {
      res.status(404).json({ code: 'NOT_FOUND' });
    }
  }));

  app.post('/api/inspo/:id/save', asyncRoute((req, res) => {
    const user = requireUser(req, res);
    if (!user) return;
    try {
      res.json({ post: store.savePost(user, req.params.id) });
    } catch {
      res.status(404).json({ code: 'NOT_FOUND' });
    }
  }));

  app.get('/api/inspo/saved', asyncRoute((req, res) => {
    const user = requireUser(req, res);
    if (!user) return;
    res.json({ posts: store.savedPosts(user) });
  }));

  app.post('/api/follows', asyncRoute((req, res) => {
    const user = requireUser(req, res);
    if (!user) return;
    try {
      res.status(201).json(store.follow(user, { userId: req.body?.userId, clubId: req.body?.clubId }));
    } catch {
      res.status(400).json({ code: 'EMPTY' });
    }
  }));

  app.get('/api/notifications', asyncRoute((req, res) => {
    const user = requireUser(req, res);
    if (!user) return;
    res.json({ notifications: store.notifications(user) });
  }));

  app.use((error: unknown, _req: Request, res: Response, _next: NextFunction) => {
    console.error(error);
    res.status(500).json({ code: 'ERROR' });
  });

  return app;
}

export function tempDbPath(name: string) {
  return path.join(os.tmpdir(), `gymtrack-${name}-${Date.now()}.json`);
}
