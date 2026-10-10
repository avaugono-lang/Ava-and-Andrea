const TOKEN_KEY = 'gymtrack_api_token';

export function getToken() {
  return sessionStorage.getItem(TOKEN_KEY);
}

const STATUS_KEY = 'gymtrack_account_status';
const DUE_KEY = 'gymtrack_payment_due';
const DEV_KEY = 'gymtrack_dev_match';
const UNTIL_KEY = 'gymtrack_access_until';

export function setToken(token: string | null) {
  if (token) sessionStorage.setItem(TOKEN_KEY, token);
  else sessionStorage.removeItem(TOKEN_KEY);
}

export function setAccess(status: string, payment: PaymentInstructions | null, devMatch = false, periodEnd: string | null = null) {
  sessionStorage.setItem(STATUS_KEY, status);
  if (status !== 'paid' && status !== 'active' && payment) sessionStorage.setItem(DUE_KEY, JSON.stringify(payment));
  else sessionStorage.removeItem(DUE_KEY);
  sessionStorage.setItem(DEV_KEY, devMatch ? '1' : '0');
  if (periodEnd) sessionStorage.setItem(UNTIL_KEY, periodEnd);
  else sessionStorage.removeItem(UNTIL_KEY);
}

export function readAccess(): { status: string | null; payment: PaymentInstructions | null; devMatch: boolean } {
  const raw = sessionStorage.getItem(DUE_KEY);
  let payment: PaymentInstructions | null = null;
  try {
    payment = raw ? JSON.parse(raw) as PaymentInstructions : null;
  } catch {
    payment = null;
  }
  const until = sessionStorage.getItem(UNTIL_KEY);
  const expired = Boolean(until) && Date.parse(until) <= Date.now();
  return {
    status: expired ? 'locked' : sessionStorage.getItem(STATUS_KEY),
    payment,
    devMatch: sessionStorage.getItem(DEV_KEY) === '1',
  };
}

export function clearAccess() {
  sessionStorage.removeItem(STATUS_KEY);
  sessionStorage.removeItem(DUE_KEY);
  sessionStorage.removeItem(DEV_KEY);
  sessionStorage.removeItem(UNTIL_KEY);
  setToken(null);
}

export interface PaymentInstructions {
  reference: string;
  amount: number;
  status: string;
  studentCount: number;
  accountName: string;
  accountNumber: string;
}

export interface ApiUser {
  id: string;
  email: string;
  name: string;
  username: string;
  role: 'CLUB_ADMIN' | 'COACH' | 'GYMNAST' | 'PARENT';
  level: number | null;
  clubId: string | null;
  clubName: string | null;
  status: string;
  access?: 'trial' | 'paid' | 'locked';
  periodEnd?: string | null;
}

async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
  const token = getToken();
  const response = await fetch(path, {
    ...options,
    headers: {
      'content-type': 'application/json',
      ...(token ? { authorization: `Bearer ${token}` } : {}),
      ...(options.headers ?? {}),
    },
  });
  const body = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw Object.assign(new Error(body.code || 'ERROR'), { status: response.status, body });
  }
  return body as T;
}

export const gymApi = {
  registerClub: (input: { clubName: string; city: string; adminName: string; email: string; password: string; phone?: string }) =>
    request<{ token: string; user: ApiUser; payment: PaymentInstructions }>('/api/auth/register-club', { method: 'POST', body: JSON.stringify(input) }),
  signupStudent: (input: { name: string; email: string; password: string; phone?: string; level?: number; dateOfBirth: string }) =>
    request<{ token: string; user: ApiUser; payment: PaymentInstructions; devMatch: boolean }>('/api/auth/signup-student', { method: 'POST', body: JSON.stringify(input) }),
  login: (email: string, password: string) =>
    request<{ token: string; user: ApiUser; payment: PaymentInstructions | null }>('/api/auth/login', { method: 'POST', body: JSON.stringify({ email, password }) }),
  me: () => request<{ user: ApiUser; payment: PaymentInstructions | null }>('/api/me'),
  addStudents: (students: { name: string; email: string; password: string; dateOfBirth: string; level?: number }[]) =>
    request<{ payment: PaymentInstructions; devMatch: boolean }>('/api/clubs/students', { method: 'POST', body: JSON.stringify({ students }) }),
  devMatch: (reference: string, amount: number) =>
    request('/api/payments/dev-match', { method: 'POST', body: JSON.stringify({ reference, amount }) }),
  acceptParent: (studentId: string, parentEmail: string) =>
    request(`/api/students/${studentId}/parent`, { method: 'POST', body: JSON.stringify({ parentEmail }) }),
  events: (q: string) => request<{ featured: { id: string; name: string } | null }>(`/api/events?q=${encodeURIComponent(q)}`),
  clubs: (lat?: number, lng?: number) =>
    request<{ clubs: { id: string; name: string; city: string; km?: number }[] }>(
      `/api/clubs${lat !== undefined && lng !== undefined ? `?lat=${lat}&lng=${lng}` : ''}`,
    ),
  inspo: (category: string) => request<{ posts: InspoPost[] }>(`/api/inspo?category=${encodeURIComponent(category)}`),
  createInspo: (input: Record<string, unknown>) => request<{ post: InspoPost }>('/api/inspo', { method: 'POST', body: JSON.stringify(input) }),
  like: (id: string) => request(`/api/inspo/${id}/like`, { method: 'POST' }),
  comment: (id: string, text: string) => request(`/api/inspo/${id}/comments`, { method: 'POST', body: JSON.stringify({ text }) }),
  save: (id: string) => request(`/api/inspo/${id}/save`, { method: 'POST' }),
  saved: () => request<{ posts: InspoPost[] }>('/api/inspo/saved'),
  follow: (userId: string) => request('/api/follows', { method: 'POST', body: JSON.stringify({ userId }) }),
  notifications: () => request<{ notifications: { id: string; kind: string }[] }>('/api/notifications'),
};

export interface InspoPost {
  id: string;
  authorId: string;
  videoUrl: string;
  caption: string;
  skill: string;
  category: string;
  clubName: string | null;
  authorName: string;
  username: string;
  age: number | null;
  level: number | null;
  likes: number;
  liked: boolean;
  saved: boolean;
  hashtags: string[];
  visibility: string;
  comments: { id: string; text: string; authorName: string }[];
}
