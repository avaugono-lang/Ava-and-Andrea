import React from 'react';
import { useGym } from '../context/GymContext';
import { Sparkles } from 'lucide-react';

export const XpToast: React.FC = () => {
  const { activeXpToast } = useGym();

  if (!activeXpToast) return null;

  return (
    <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#1f1619] text-[#fffdf0] border border-[#fef08a]/30 shadow-[0_12px_28px_rgba(244,114,182,0.3)] text-sm animate-bounce">
      <Sparkles className="w-5 h-5 text-[#facc15] fill-current" />
      <span className="font-extrabold text-[#f472b6]">+{activeXpToast.amount} XP</span>
      <span className="opacity-40 text-[#fef08a]">•</span>
      <span className="font-medium text-xs sm:text-sm">{activeXpToast.message}</span>
    </div>
  );
};
