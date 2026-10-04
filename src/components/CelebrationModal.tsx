import React from 'react';
import { useGym } from '../context/GymContext';
import { Trophy, Award, Sparkles } from 'lucide-react';

export const CelebrationModal: React.FC = () => {
  const { celebrationBadge, dismissCelebration } = useGym();

  if (!celebrationBadge) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1f1619]/60 backdrop-blur-xs animate-fade-in">
      <div className="relative w-full max-w-sm rounded-3xl bg-white p-6 shadow-2xl text-center space-y-4 border border-[#fce7f3] overflow-hidden">
        {/* Soft Pink & Yellow Ambient Glow */}
        <div className="absolute -top-12 -right-12 w-36 h-36 bg-[#f472b6]/20 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-36 h-36 bg-[#facc15]/25 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center">
          <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#ec4899] to-[#f59e0b] text-white flex items-center justify-center shadow-lg shadow-pink-400/25 mb-3 ring-4 ring-pink-100">
            <Trophy className="w-10 h-10 text-white fill-white/20" />
          </div>

          <span className="px-3 py-0.5 rounded-full bg-[#fef9c3] text-[#854d0e] border border-[#fef08a] text-xs font-extrabold uppercase tracking-wider">
            Achievement Unlocked!
          </span>

          <h3 className="text-xl font-extrabold text-[#1f1619] mt-2">
            {celebrationBadge.title}
          </h3>

          <p className="text-sm font-bold text-[#db2777] mt-0.5">
            {celebrationBadge.subtitle}
          </p>

          <p className="text-xs text-[#6b555c] mt-2 leading-relaxed">
            {celebrationBadge.description}
          </p>

          <div className="mt-4 p-2.5 rounded-2xl bg-[#fffbeb] border border-[#fef08a] w-full flex items-center justify-center gap-2">
            <Award className="w-5 h-5 text-[#db2777]" />
            <span className="text-sm font-extrabold text-[#854d0e]">
              +{celebrationBadge.xpReward} Bonus XP Earned
            </span>
          </div>

          <button
            onClick={dismissCelebration}
            className="w-full mt-5 py-3 rounded-full bg-gradient-to-r from-[#ec4899] via-[#f472b6] to-[#f59e0b] hover:from-[#db2777] hover:to-[#d97706] text-white font-bold text-sm shadow-md shadow-pink-400/20 active:scale-95 transition-all"
          >
            Claim & Keep Training! 🤸
          </button>
        </div>
      </div>
    </div>
  );
};
