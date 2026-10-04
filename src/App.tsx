import React, { useState } from 'react';
import { GymProvider, useGym } from './context/GymContext';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { XpToast } from './components/XpToast';
import { CelebrationModal } from './components/CelebrationModal';
import { HomeScreen } from './screens/HomeScreen';
import { SkillsScreen } from './screens/SkillsScreen';
import { ProgressScreen } from './screens/ProgressScreen';
import { EventsScreen } from './screens/EventsScreen';
import { ShopScreen } from './screens/ShopScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import { AuthScreen } from './screens/AuthScreen';
import { InspoScreen } from './screens/InspoScreen';
import { AddStudentsPanel } from './components/AddStudentsPanel';
import { ClubsScreen } from './screens/ClubsScreen';
import { GymDashboardScreen } from './screens/GymDashboardScreen';

const MainApp: React.FC = () => {
  const { user, currentTab, userRole } = useGym();
  const [guestTab, setGuestTab] = useState<'events' | 'clubs' | 'community' | null>(null);

  if (!user.isLoggedIn) {
    if (!guestTab) return <AuthScreen onBrowse={setGuestTab} />;
    return (
      <div className="min-h-screen bg-[#fff9fb] text-[#1f1619]">
        <div className="p-4">
          <button type="button" onClick={() => setGuestTab(null)} className="text-sm font-bold text-[#db2777]">Back to signup</button>
        </div>
        <main className="pb-10">
          {guestTab === 'events' && <EventsScreen />}
          {guestTab === 'clubs' && <ClubsScreen />}
          {guestTab === 'community' && <InspoScreen />}
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fff9fb] text-[#1f1619] flex flex-col font-sans selection:bg-[#fde68a] selection:text-[#db2777]">
      {/* Top Floating App Bar */}
      <Header />

      {/* Main Content Area with Header and Bottom Nav Offset */}
      <main className="flex-1 pt-[80px] sm:pt-[88px] pb-24">
        {currentTab === 'home' && <HomeScreen />}
        {currentTab === 'skills' && <SkillsScreen />}
        {currentTab === 'progress' && <ProgressScreen />}
        {(currentTab === 'competitions' || currentTab === 'events') && <EventsScreen />}
        {currentTab === 'clubs' && <ClubsScreen />}
        {currentTab === 'dashboard' && (
          <>
            {userRole === 'CLUB_ADMIN' && <AddStudentsPanel />}
            <GymDashboardScreen />
          </>
        )}
        {currentTab === 'community' && <InspoScreen />}
        {currentTab === 'shop' && <ShopScreen />}
        {currentTab === 'profile' && <ProfileScreen />}
      </main>

      {/* Floating Bottom Navigation */}
      <BottomNav />

      {/* Floating XP Reward Notification Toast */}
      <XpToast />

      {/* Achievement Unlocked Celebratory Modal */}
      <CelebrationModal />
    </div>
  );
};

export default function App() {
  return (
    <GymProvider>
      <MainApp />
    </GymProvider>
  );
}
