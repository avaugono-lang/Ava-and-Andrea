import React, { useState } from 'react';
import { useGym } from '../context/GymContext';
import { USAGLevel } from '../types';
import { Sparkles, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';
import { ClubSelectDropdown } from '../components/ClubSelectDropdown';

export const AuthScreen: React.FC = () => {
  const { registerUser, loginUser } = useGym();
  // The login page is the first page the app shows
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [level, setLevel] = useState<USAGLevel>(4);
  const [agreedSafety, setAgreedSafety] = useState(true);

  // Gymnastics Club selection state
  const [club, setClub] = useState<string>('');
  const [customClub, setCustomClub] = useState<string>('');
  const [clubError, setClubError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isRegisterMode) {
      // Validate Gymnastics Club selection
      if (!club) {
        setClubError('Please select your gymnastics club (or choose "Not listed / Other")');
        return;
      }
      if (club === 'OTHER' && !customClub.trim()) {
        setClubError('Please enter your gymnastics club name to complete registration');
        return;
      }
      setClubError(null);

      const finalClub = club === 'OTHER' ? customClub.trim() : club.trim();
      registerUser(name, phone, email, level, finalClub);
    } else {
      loginUser(email || 'amara.gymnast@gymtrack.ng', name || 'Amara Okafor', level);
    }
  };

  const handleQuickDemo = () => {
    loginUser('amara.gymnast@gymtrack.ng', 'Amara Okafor', 4);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fff0f5] via-[#fffdf0] to-[#fef9c3] flex flex-col items-center justify-center p-4 selection:bg-[#ffe0ec] selection:text-[#db2777]">
      <div className="w-full max-w-md bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-[0_20px_45px_-12px_rgba(244,114,182,0.22)] border border-[#fce7f3] space-y-5">
        {/* Brand Header with Light Pink & Light Yellow Badges */}
        <div className="flex flex-col items-center text-center space-y-2">
          <div className="relative">
            <img
              alt="GymTrack Logo"
              className="h-16 w-auto object-contain drop-shadow-xs"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOakUShj4soIvWzlewKEr5TPOwCVFmkFYMlxPW4LzaY4PRaqOLrcBEKuKIjqVyC8UknxTIQEpJH_Qo4NMoqoazeSUiGcjfEx3_SqZwfRxesPHhYvkFeaLrjMapWMsO2NgpLpfgjc505l_ZxmVyqyP55zCUbrkLyEnc9xqVl_ACF4FHy6QINKJ09WrWHdl8472tD4XbqRVjwHA7_4pG3ScowG0ziAKFGsxNMwCWdyYc1kPpHPzdhWI"
            />
          </div>
          <h1 className="text-2xl font-black text-[#1f1619] tracking-tight">GymTrack</h1>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fef9c3] border border-[#fef08a] text-[11px] font-bold text-[#854d0e]">
            <Sparkles className="w-3.5 h-3.5 text-[#db2777]" />
            <span>Train. Improve. Level Up.</span>
          </div>
        </div>

        {/* Mode Toggle Pills (Login first) */}
        <div className="flex p-1 bg-[#fff5f8] rounded-full border border-[#fce7f3] text-xs font-bold">
          <button
            id="tab-auth-login"
            type="button"
            onClick={() => {
              setIsRegisterMode(false);
              setClubError(null);
            }}
            className={`flex-1 py-2 rounded-full transition-all ${
              !isRegisterMode
                ? 'bg-gradient-to-r from-[#ec4899] to-[#f472b6] text-white shadow-sm'
                : 'text-[#6b555c] hover:text-[#ec4899]'
            }`}
          >
            Log In
          </button>
          <button
            id="tab-auth-register"
            type="button"
            onClick={() => {
              setIsRegisterMode(true);
              setClubError(null);
            }}
            className={`flex-1 py-2 rounded-full transition-all ${
              isRegisterMode
                ? 'bg-gradient-to-r from-[#ec4899] to-[#f472b6] text-white shadow-sm'
                : 'text-[#6b555c] hover:text-[#ec4899]'
            }`}
          >
            Create Athlete Account
          </button>
        </div>

        {/* Auth Form */}
        <form onSubmit={handleSubmit} className="space-y-3.5">
          {isRegisterMode && (
            <div>
              <label className="text-xs font-bold text-[#1f1619] block mb-1">
                Gymnast Full Name <span className="text-[#db2777] font-black">*</span>
              </label>
              <input
                id="input-auth-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Amara Okafor"
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#fce7f3] bg-[#fffdfa] text-xs text-[#1f1619] focus:ring-2 focus:ring-pink-300 focus:border-pink-400 focus:outline-none transition-all"
              />
            </div>
          )}

          {/* Gymnastics Club Field (Dropdown + Searchable + Other option) */}
          {isRegisterMode && (
            <ClubSelectDropdown
              selectedClub={club}
              customClubName={customClub}
              onSelectClub={(c) => {
                setClub(c);
                setClubError(null);
              }}
              onChangeCustomClub={(name) => {
                setCustomClub(name);
                if (name.trim()) setClubError(null);
              }}
              error={clubError}
              required
            />
          )}

          <div>
            <label className="text-xs font-bold text-[#1f1619] block mb-1">
              Email Address <span className="text-[#db2777] font-black">*</span>
            </label>
            <input
              id="input-auth-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="amara.gymnast@gymtrack.ng"
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#fce7f3] bg-[#fffdfa] text-xs text-[#1f1619] focus:ring-2 focus:ring-pink-300 focus:border-pink-400 focus:outline-none transition-all"
            />
          </div>

          <div>
            <label className="text-xs font-bold text-[#1f1619] block mb-1">
              Password <span className="text-[#db2777] font-black">*</span>
            </label>
            <input
              id="input-auth-password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#fce7f3] bg-[#fffdfa] text-xs text-[#1f1619] focus:ring-2 focus:ring-pink-300 focus:border-pink-400 focus:outline-none transition-all"
            />
          </div>

          {isRegisterMode && (
            <div>
              <label className="text-xs font-bold text-[#1f1619] block mb-1">
                Phone Number <span className="text-[10px] text-[#6b555c] font-normal">(optional)</span>
              </label>
              <input
                id="input-auth-phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+234 802 334 5566"
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#fce7f3] bg-[#fffdfa] text-xs text-[#1f1619] focus:ring-2 focus:ring-pink-300 focus:border-pink-400 focus:outline-none transition-all"
              />
            </div>
          )}

          {isRegisterMode && (
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-xs font-bold text-[#1f1619] block">
                  Starting USAG Level (1–10) <span className="text-[#db2777] font-black">*</span>
                </label>
                <span className="text-[10px] font-extrabold text-[#db2777] bg-[#fff0f5] px-2 py-0.5 rounded-full border border-pink-200">
                  Level {level}
                </span>
              </div>
              <div className="grid grid-cols-5 gap-1.5">
                {([1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as USAGLevel[]).map((lvl) => (
                  <button
                    type="button"
                    key={lvl}
                    id={`btn-auth-level-${lvl}`}
                    onClick={() => setLevel(lvl)}
                    className={`py-2 rounded-xl text-xs font-bold transition-all ${
                      level === lvl
                        ? 'bg-[#ec4899] text-white shadow-xs font-black scale-102 ring-2 ring-pink-300'
                        : 'bg-[#fef9c3] text-[#854d0e] hover:bg-[#fde047]'
                    }`}
                  >
                    L{lvl}
                  </button>
                ))}
              </div>
            </div>
          )}

          {isRegisterMode && (
            <label className="flex items-start gap-2 pt-1 text-[11px] text-[#6b555c] cursor-pointer">
              <input
                id="checkbox-auth-safety"
                type="checkbox"
                required
                checked={agreedSafety}
                onChange={(e) => setAgreedSafety(e.target.checked)}
                className="mt-0.5 rounded text-[#ec4899] focus:ring-0"
              />
              <span>
                I agree to train safely under certified USAG coaching supervision.
              </span>
            </label>
          )}

          <button
            id="btn-auth-submit"
            type="submit"
            className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#ec4899] via-[#f472b6] to-[#f59e0b] hover:from-[#db2777] hover:to-[#d97706] text-white font-black text-xs shadow-md shadow-pink-400/20 active:scale-98 transition-all flex items-center justify-center gap-2"
          >
            <span>{isRegisterMode ? 'Create Gymnast Profile' : 'Sign In to GymTrack'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Quick Demo Athlete Button in Light Yellow */}
        <div className="pt-2 border-t border-[#fce7f3] text-center">
          <p className="text-[11px] text-[#6b555c] mb-2">Want to test without typing?</p>
          <button
            id="btn-auth-quick-demo"
            onClick={handleQuickDemo}
            className="w-full py-2.5 rounded-full bg-[#fef9c3] border border-[#fef08a] text-[#854d0e] text-xs font-bold hover:bg-[#fde047] transition-all flex items-center justify-center gap-2 shadow-xs"
          >
            <Zap className="w-4 h-4 text-[#db2777]" />
            <span>Quick Login: Amara Okafor (Lagos Flyers Gym)</span>
          </button>
        </div>
      </div>
    </div>
  );
};
