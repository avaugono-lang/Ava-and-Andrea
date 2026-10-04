import React, { useState } from 'react';
import { useGym } from '../context/GymContext';
import { USAGLevel } from '../types';
import { gymApi, PaymentInstructions, setToken } from '../services/gymApi';
import { Sparkles } from 'lucide-react';

type Mode = 'login' | 'student' | 'club';
type GuestTab = 'events' | 'clubs' | 'community';

export const AuthScreen: React.FC<{ onBrowse: (tab: GuestTab) => void }> = ({ onBrowse }) => {
  const { loginUser } = useGym();
  const [mode, setMode] = useState<Mode>('login');
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [payment, setPayment] = useState<PaymentInstructions | null>(null);
  const [devMatch, setDevMatch] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('2014-01-01');
  const [level, setLevel] = useState<USAGLevel>(1);
  const [clubName, setClubName] = useState('');
  const [city, setCity] = useState('Lagos');

  const enter = (user: { name: string; email: string; level: number | null; role: 'CLUB_ADMIN' | 'COACH' | 'GYMNAST' | 'PARENT'; clubName: string | null }) => {
    loginUser(user.email, user.name, (user.level ?? 1) as USAGLevel, user.role === 'CLUB_ADMIN' || user.role === 'COACH' ? user.role : 'GYMNAST');
  };

  const onLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setBusy(true);
    setError(null);
    try {
      const result = await gymApi.login(email, password);
      setToken(result.token);
      enter(result.user);
    } catch (err) {
      const body = (err as { body?: { code?: string; payment?: PaymentInstructions } }).body;
      if (body?.code === 'PAYMENT_REQUIRED' && body.payment) {
        setPayment(body.payment);
        setDevMatch(true);
        return;
      }
      setError('Email or password is wrong.');
    } finally {
      setBusy(false);
    }
  };

  const onStudent = async (event: React.FormEvent) => {
    event.preventDefault();
    setBusy(true);
    setError(null);
    try {
      const result = await gymApi.signupStudent({ name, email, password, phone, level, dateOfBirth });
      setPayment(result.payment);
      setDevMatch(result.devMatch);
    } catch {
      setError('That email is already registered, or a field is missing.');
    } finally {
      setBusy(false);
    }
  };

  const onClub = async (event: React.FormEvent) => {
    event.preventDefault();
    setBusy(true);
    setError(null);
    try {
      const result = await gymApi.registerClub({ clubName, city, adminName: name, email, password, phone });
      setToken(result.token);
      enter(result.user);
    } catch {
      setError('Could not create the club. Try a different email.');
    } finally {
      setBusy(false);
    }
  };

  const confirmDevPayment = async () => {
    if (!payment) return;
    setBusy(true);
    try {
      await gymApi.devMatch(payment.reference, payment.amount);
      const result = await gymApi.login(email, password);
      setToken(result.token);
      enter(result.user);
    } catch {
      setError('The transfer has not matched yet.');
    } finally {
      setBusy(false);
    }
  };

  if (payment) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#fff0f5] via-[#fffdf0] to-[#fef9c3] flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-3xl p-6 border border-[#fce7f3] space-y-4">
          <h1 className="text-2xl font-black">Pay ₦{payment.amount.toLocaleString()} to finish signup</h1>
          <p className="text-sm text-[#6b555c]">Transfer the amount to GymTrack’s Spend Management account. The account stays pending until the reference matches.</p>
          <dl className="text-sm space-y-2">
            <div className="flex justify-between"><dt>Account</dt><dd className="font-bold">{payment.accountName}</dd></div>
            <div className="flex justify-between"><dt>Number</dt><dd className="font-bold">{payment.accountNumber}</dd></div>
            <div className="flex justify-between"><dt>Reference</dt><dd className="font-bold">{payment.reference}</dd></div>
            <div className="flex justify-between"><dt>Students</dt><dd className="font-bold">{payment.studentCount}</dd></div>
          </dl>
          {error && <p className="text-sm text-red-600">{error}</p>}
          {devMatch && (
            <button type="button" disabled={busy} onClick={confirmDevPayment} className="w-full py-3 rounded-full bg-[#ec4899] text-white font-bold">
              Simulate transfer match
            </button>
          )}
          <button type="button" onClick={() => setPayment(null)} className="w-full py-2 text-sm text-[#6b555c]">Back</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fff0f5] via-[#fffdf0] to-[#fef9c3] flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-white/95 rounded-3xl p-6 border border-[#fce7f3] space-y-4">
        <div className="text-center">
          <h1 className="text-2xl font-black">GymTrack</h1>
          <p className="inline-flex items-center gap-1 text-[11px] font-bold text-[#854d0e] bg-[#fef9c3] border border-[#fef08a] rounded-full px-3 py-1 mt-2">
            <Sparkles className="w-3.5 h-3.5 text-[#db2777]" /> Train. Improve. Level Up.
          </p>
        </div>
        <div className="flex p-1 bg-[#fff5f8] rounded-full text-xs font-bold">
          {([['login', 'Log in'], ['student', 'Student'], ['club', 'Club']] as const).map(([id, label]) => (
            <button key={id} type="button" onClick={() => { setMode(id); setError(null); }} className={`flex-1 py-2 rounded-full ${mode === id ? 'bg-[#ec4899] text-white' : 'text-[#6b555c]'}`}>
              {label}
            </button>
          ))}
        </div>
        <form onSubmit={mode === 'login' ? onLogin : mode === 'student' ? onStudent : onClub} className="space-y-3">
          {mode !== 'login' && <input required value={name} onChange={(e) => setName(e.target.value)} placeholder={mode === 'club' ? 'Your name' : 'Student name'} className="w-full rounded-2xl border border-[#fce7f3] px-3 py-2 text-sm" />}
          {mode === 'club' && <input required value={clubName} onChange={(e) => setClubName(e.target.value)} placeholder="Club name" className="w-full rounded-2xl border border-[#fce7f3] px-3 py-2 text-sm" />}
          {mode === 'club' && <input required value={city} onChange={(e) => setCity(e.target.value)} placeholder="City" className="w-full rounded-2xl border border-[#fce7f3] px-3 py-2 text-sm" />}
          {mode === 'student' && <input required type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} className="w-full rounded-2xl border border-[#fce7f3] px-3 py-2 text-sm" />}
          {mode === 'student' && (
            <select value={level} onChange={(e) => setLevel(Number(e.target.value) as USAGLevel)} className="w-full rounded-2xl border border-[#fce7f3] px-3 py-2 text-sm">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => <option key={n} value={n}>Level {n}</option>)}
            </select>
          )}
          {mode !== 'login' && <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" className="w-full rounded-2xl border border-[#fce7f3] px-3 py-2 text-sm" />}
          <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full rounded-2xl border border-[#fce7f3] px-3 py-2 text-sm" />
          <input required type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="w-full rounded-2xl border border-[#fce7f3] px-3 py-2 text-sm" />
          {mode === 'student' && <p className="text-xs text-[#6b555c]">Signup includes the first month: ₦1,000. You are not placed in a club until one adds you.</p>}
          {mode === 'club' && <p className="text-xs text-[#6b555c]">The office login is free. Each student you add costs ₦1,000 before they can train.</p>}
          {error && <p className="text-sm text-red-600">{error}</p>}
          <button disabled={busy} className="w-full py-3 rounded-full bg-[#ec4899] text-white font-bold">{busy ? 'Please wait…' : mode === 'login' ? 'Log in' : 'Continue'}</button>
        </form>
        <div className="flex justify-between text-xs font-bold text-[#db2777]">
          <button type="button" onClick={() => onBrowse('events')}>Find an Event</button>
          <button type="button" onClick={() => onBrowse('clubs')}>Find a Club</button>
          <button type="button" onClick={() => onBrowse('community')}>Inspo</button>
        </div>
      </div>
    </div>
  );
};
