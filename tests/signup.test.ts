import assert from 'node:assert/strict';
import { once } from 'node:events';
import type { AddressInfo } from 'node:net';
import test from 'node:test';
import { createApp } from '../server/createApp.ts';

async function start() {
  const app = await createApp({
    dbPath: `data/test-${Date.now()}-${Math.random()}.json`,
    webhookSecret: 'test-secret',
    devMatch: false,
  });
  const server = app.listen(0);
  await once(server, 'listening');
  const port = (server.address() as AddressInfo).port;
  return {
    server,
    base: `http://127.0.0.1:${port}`,
  };
}

async function json(response: Response) {
  return { status: response.status, body: await response.json() };
}

test('club signup allocates paid students and a direct signup has no club', async () => {
  const { server, base } = await start();
  try {
    const club = await json(await fetch(`${base}/api/auth/register-club`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        clubName: 'Solynta Gymnastics Club',
        city: 'Lagos',
        adminName: 'Coach Ada',
        email: 'ada@solynta.test',
        password: 'correct-horse',
      }),
    }));
    assert.equal(club.status, 201);
    const token = club.body.token as string;

    const batch = await json(await fetch(`${base}/api/clubs/students`, {
      method: 'POST',
      headers: { 'content-type': 'application/json', authorization: `Bearer ${token}` },
      body: JSON.stringify({
        students: [
          { name: 'Ava', email: 'ava@gym.test', password: 'ava-pass-1', dateOfBirth: '2014-04-01', level: 3 },
          { name: 'Andrea', email: 'andrea@gym.test', password: 'andrea-pass-1', dateOfBirth: '2016-08-02', level: 2 },
        ],
      }),
    }));
    assert.equal(batch.status, 201);
    assert.equal(batch.body.payment.amount, 2000);

    const tooSoon = await json(await fetch(`${base}/api/auth/login`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ email: 'ava@gym.test', password: 'ava-pass-1' }),
    }));
    assert.equal(tooSoon.status, 403);
    assert.equal(tooSoon.body.code, 'PAYMENT_REQUIRED');

    const paid = await json(await fetch(`${base}/api/payments/webhook`, {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'x-gymtrack-webhook-secret': 'test-secret' },
      body: JSON.stringify({ reference: batch.body.payment.reference, amount: 2000, transferId: 'soly-1' }),
    }));
    assert.equal(paid.status, 200);

    const replay = await json(await fetch(`${base}/api/payments/webhook`, {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'x-gymtrack-webhook-secret': 'test-secret' },
      body: JSON.stringify({ reference: batch.body.payment.reference, amount: 2000, transferId: 'soly-1' }),
    }));
    assert.equal(replay.body.alreadyPaid, true);

    const ava = await json(await fetch(`${base}/api/auth/login`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ email: 'ava@gym.test', password: 'wrong-pass' }),
    }));
    assert.equal(ava.status, 401);

    const avaOk = await json(await fetch(`${base}/api/auth/login`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ email: 'ava@gym.test', password: 'ava-pass-1' }),
    }));
    assert.equal(avaOk.body.user.clubName, 'Solynta Gymnastics Club');

    const solo = await json(await fetch(`${base}/api/auth/signup-student`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        name: 'Kemi',
        email: 'kemi@gym.test',
        password: 'kemi-pass-1',
        dateOfBirth: '2015-01-01',
        level: 4,
      }),
    }));
    assert.equal(solo.body.payment.amount, 1000);
    await fetch(`${base}/api/payments/webhook`, {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'x-gymtrack-webhook-secret': 'test-secret' },
      body: JSON.stringify({ reference: solo.body.payment.reference, amount: 1000, transferId: 'soly-2' }),
    });
    const kemi = await json(await fetch(`${base}/api/auth/login`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ email: 'kemi@gym.test', password: 'kemi-pass-1' }),
    }));
    assert.equal(kemi.body.user.clubId, null);

    const events = await json(await fetch(`${base}/api/events?q=vault`));
    assert.equal(events.body.featured.id, 'ev_gymfest_3');
    const clubs = await json(await fetch(`${base}/api/clubs?lat=6.45&lng=3.4`));
    assert.equal(clubs.body.clubs[0].city, 'Lagos');
  } finally {
    server.close();
  }
});

test('inspo hides club videos and waits for a parent before a child publishes', async () => {
  const { server, base } = await start();
  try {
    const club = await json(await fetch(`${base}/api/auth/register-club`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        clubName: 'Solynta Gymnastics Club',
        city: 'Lagos',
        adminName: 'Coach Ada',
        email: 'ada2@solynta.test',
        password: 'correct-horse',
      }),
    }));
    const other = await json(await fetch(`${base}/api/auth/register-club`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        clubName: 'Abuja Bars',
        city: 'Abuja',
        adminName: 'Coach Tobi',
        email: 'tobi@abuja.test',
        password: 'correct-horse',
      }),
    }));
    const batch = await json(await fetch(`${base}/api/clubs/students`, {
      method: 'POST',
      headers: { 'content-type': 'application/json', authorization: `Bearer ${club.body.token}` },
      body: JSON.stringify({
        students: [{ name: 'Ava', email: 'ava2@gym.test', password: 'ava-pass-1', dateOfBirth: '2014-04-01', level: 3 }],
      }),
    }));
    await fetch(`${base}/api/payments/webhook`, {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'x-gymtrack-webhook-secret': 'test-secret' },
      body: JSON.stringify({ reference: batch.body.payment.reference, amount: 1000, transferId: 'soly-3' }),
    });
    const ava = await json(await fetch(`${base}/api/auth/login`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ email: 'ava2@gym.test', password: 'ava-pass-1' }),
    }));
    const blocked = await json(await fetch(`${base}/api/inspo`, {
      method: 'POST',
      headers: { 'content-type': 'application/json', authorization: `Bearer ${ava.body.token}` },
      body: JSON.stringify({
        videoUrl: 'clip.mp4',
        caption: 'Stuck the landing',
        skill: 'Back handspring',
        category: 'Floor',
        clubTag: 'Solynta Gymnastics Club',
        hashtags: ['#handspring'],
        visibility: 'club',
        showLevel: true,
      }),
    }));
    assert.equal(blocked.status, 403);
    assert.equal(blocked.body.code, 'PARENT_REQUIRED');

    await fetch(`${base}/api/students/${ava.body.user.id}/parent`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ parentEmail: 'mum@gym.test' }),
    });
    const posted = await json(await fetch(`${base}/api/inspo`, {
      method: 'POST',
      headers: { 'content-type': 'application/json', authorization: `Bearer ${ava.body.token}` },
      body: JSON.stringify({
        videoUrl: 'clip.mp4',
        caption: 'Stuck the landing',
        skill: 'Back handspring',
        category: 'Floor',
        clubTag: 'Solynta Gymnastics Club',
        hashtags: ['#handspring'],
        visibility: 'club',
        showLevel: true,
      }),
    }));
    assert.equal(posted.status, 201);
    assert.equal(posted.body.post.level, 3);

    const outsider = await json(await fetch(`${base}/api/inspo`, {
      headers: { authorization: `Bearer ${other.body.token}` },
    }));
    assert.equal(outsider.body.posts.length, 0);

    const mine = await json(await fetch(`${base}/api/inspo?category=Floor`, {
      headers: { authorization: `Bearer ${ava.body.token}` },
    }));
    assert.equal(mine.body.posts.length, 1);

    await fetch(`${base}/api/inspo/${posted.body.post.id}/save`, {
      method: 'POST',
      headers: { authorization: `Bearer ${ava.body.token}` },
    });
    const saved = await json(await fetch(`${base}/api/inspo/saved`, {
      headers: { authorization: `Bearer ${ava.body.token}` },
    }));
    assert.equal(saved.body.posts.length, 1);
  } finally {
    server.close();
  }
});
