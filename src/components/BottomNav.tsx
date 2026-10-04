import React from 'react';
import { useGym } from '../context/GymContext';
import { 
  Home, 
  Dumbbell, 
  TrendingUp, 
  Trophy, 
  Building2, 
  BarChart3, 
  User 
} from 'lucide-react';
import { NavigationTab } from '../types';

export const BottomNav: React.FC = () => {
  const { currentTab, setCurrentTab, userRole } = useGym();

  const isCoachOrAdmin = userRole === 'COACH' || userRole === 'CLUB_ADMIN';

  // Role-tailored navigation items
  const gymnastNavItems = [
    { id: 'home' as NavigationTab, label: 'Home', icon: Home },
    { id: 'skills' as NavigationTab, label: 'Skills', icon: Dumbbell },
    { id: 'competitions' as NavigationTab, label: 'Meets', icon: Trophy },
    { id: 'clubs' as NavigationTab, label: 'Clubs', icon: Building2 },
    { id: 'progress' as NavigationTab, label: 'Progress', icon: TrendingUp },
  ];

  const coachNavItems = [
    { id: 'dashboard' as NavigationTab, label: 'Dashboard', icon: BarChart3 },
    { id: 'skills' as NavigationTab, label: 'Curriculum', icon: Dumbbell },
    { id: 'competitions' as NavigationTab, label: 'Meets', icon: Trophy },
    { id: 'clubs' as NavigationTab, label: 'Clubs', icon: Building2 },
    { id: 'profile' as NavigationTab, label: 'Profile', icon: User },
  ];

  const navItems = isCoachOrAdmin ? coachNavItems : gymnastNavItems;

  return (
    <div className="fixed bottom-0 w-full z-40 pb-safe pointer-events-none px-3 mb-2">
      <nav className="pointer-events-auto max-w-md mx-auto h-16 bg-white/95 backdrop-blur-xl border border-[#fce7f3] rounded-full shadow-[0_16px_36px_-6px_rgba(244,114,182,0.18),0_4px_12px_-2px_rgba(15,23,42,0.06)] flex items-center justify-around px-2">
        {navItems.map((item) => {
          const isActive = currentTab === item.id || (item.id === 'competitions' && currentTab === 'events');
          const IconComponent = item.icon;
          return (
            <button
              key={item.id}
              id={`nav-tab-${item.id}`}
              onClick={() => setCurrentTab(item.id)}
              className={`flex flex-col items-center justify-center min-w-[42px] min-h-[44px] px-2.5 py-1 rounded-full transition-all duration-200 ${
                isActive
                  ? 'bg-gradient-to-r from-[#ec4899] to-[#f472b6] text-white shadow-[0_6px_18px_-2px_rgba(236,72,153,0.35)] scale-105'
                  : 'text-[#6b555c] hover:text-[#db2777] active:scale-95'
              }`}
            >
              <IconComponent className="w-5 h-5 shrink-0" />
              <span className="text-[10px] font-semibold mt-0.5 leading-tight">
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};
