import React, { useState } from 'react';
import { useGym } from '../context/GymContext';
import { 
  Award, 
  ShoppingBag, 
  Menu, 
  X, 
  Home, 
  Dumbbell, 
  Trophy, 
  Building2, 
  TrendingUp, 
  BarChart3, 
  User, 
  Sparkles, 
  ShieldCheck, 
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import { NavigationTab } from '../types';

export const Header: React.FC = () => {
  const { user, currentTab, setCurrentTab, cart, userRole, setUserRole } = useGym();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const getSubtext = () => {
    switch (currentTab) {
      case 'home': return 'Home';
      case 'skills': return 'Skills';
      case 'competitions':
      case 'events': return 'Competitions';
      case 'clubs': return 'Clubs';
      case 'progress': return 'My Progress';
      case 'dashboard': return 'Gym Dashboard';
      case 'community': return 'Be Inspired';
      case 'shop': return 'Pro Shop';
      case 'profile': return 'Profile';
      default: return 'GymTrack';
    }
  };

  const totalCartItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Desktop navigation items according to user role
  const isCoachOrAdmin = userRole === 'COACH' || userRole === 'CLUB_ADMIN';

  const handleNavClick = (tab: NavigationTab) => {
    setCurrentTab(tab);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 w-full z-40 pt-safe bg-white/95 backdrop-blur-xl border-b border-[#fce7f3] shadow-[0_2px_12px_rgba(244,114,182,0.08)]">
        <div className="max-w-6xl mx-auto h-[68px] sm:h-[72px] px-3 sm:px-6 flex items-center justify-between gap-2 sm:gap-4">
          {/* 1. Left: Mobile Hamburger & Logo */}
          <div className="flex items-center gap-1.5 sm:gap-3">
            {/* Hamburger Button (Mobile only) */}
            <button
              id="btn-mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-2xl text-[#1f1619] hover:bg-[#fff0f5] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center shrink-0"
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-6 h-6 text-[#1f1619]" />
            </button>

            {/* GymTrack Brand Logo */}
            <button
              id="btn-header-home"
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2 sm:gap-3 text-left focus:outline-none group shrink-0"
            >
              <img
                id="img-header-logo"
                alt="GymTrack Logo"
                className="h-11 sm:h-13 w-auto max-h-[52px] object-contain transition-transform group-hover:scale-105 shrink-0"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOakUShj4soIvWzlewKEr5TPOwCVFmkFYMlxPW4LzaY4PRaqOLrcBEKuKIjqVyC8UknxTIQEpJH_Qo4NMoqoazeSUiGcjfEx3_SqZwfRxesPHhYvkFeaLrjMapWMsO2NgpLpfgjc505l_ZxmVyqyP55zCUbrkLyEnc9xqVl_ACF4FHy6QINKJ09WrWHdl8472tD4XbqRVjwHA7_4pG3ScowG0ziAKFGsxNMwCWdyYc1kPpHPzdhWI"
              />
              <div className="flex flex-col justify-center">
                <span className="text-lg sm:text-[21px] font-black text-[#1f1619] leading-none tracking-tight">
                  GymTrack
                </span>
                <span className="text-[10px] sm:text-[11px] font-extrabold text-[#db2777] tracking-wider uppercase leading-tight mt-0.5">
                  {getSubtext()}
                </span>
              </div>
            </button>
          </div>

          {/* 2. Middle: Desktop Navigation Bar (Home | Skills | Competitions | Clubs | My Progress | Gym Dashboard | Profile) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 text-xs font-bold">
            <button
              id="nav-desktop-home"
              onClick={() => handleNavClick('home')}
              className={`px-3 py-1.5 rounded-full transition-all ${
                currentTab === 'home'
                  ? 'bg-[#fff0f5] text-[#db2777] font-black'
                  : 'text-[#6b555c] hover:text-[#1f1619] hover:bg-gray-50'
              }`}
            >
              Home
            </button>

            <button
              id="nav-desktop-skills"
              onClick={() => handleNavClick('skills')}
              className={`px-3 py-1.5 rounded-full transition-all ${
                currentTab === 'skills'
                  ? 'bg-[#fff0f5] text-[#db2777] font-black'
                  : 'text-[#6b555c] hover:text-[#1f1619] hover:bg-gray-50'
              }`}
            >
              Skills
            </button>

            <button
              id="nav-desktop-competitions"
              onClick={() => handleNavClick('competitions')}
              className={`px-3 py-1.5 rounded-full transition-all ${
                currentTab === 'competitions' || currentTab === 'events'
                  ? 'bg-[#fff0f5] text-[#db2777] font-black'
                  : 'text-[#6b555c] hover:text-[#1f1619] hover:bg-gray-50'
              }`}
            >
              Competitions
            </button>

            <button
              id="nav-desktop-clubs"
              onClick={() => handleNavClick('clubs')}
              className={`px-3 py-1.5 rounded-full transition-all flex items-center gap-1 ${
                currentTab === 'clubs'
                  ? 'bg-[#fff0f5] text-[#db2777] font-black'
                  : 'text-[#6b555c] hover:text-[#1f1619] hover:bg-gray-50'
              }`}
            >
              <span>Clubs</span>
            </button>

            {/* Gymnast Progress Tab */}
            <button
              id="nav-desktop-progress"
              onClick={() => handleNavClick('progress')}
              className={`px-3 py-1.5 rounded-full transition-all ${
                currentTab === 'progress'
                  ? 'bg-[#fff0f5] text-[#db2777] font-black'
                  : 'text-[#6b555c] hover:text-[#1f1619] hover:bg-gray-50'
              }`}
            >
              My Progress
            </button>

            {/* Dedicated Gym / Coach Dashboard Tab */}
            <button
              id="nav-desktop-dashboard"
              onClick={() => handleNavClick('dashboard')}
              className={`px-3 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
                currentTab === 'dashboard'
                  ? 'bg-gradient-to-r from-[#ec4899] to-[#db2777] text-white shadow-xs font-black'
                  : isCoachOrAdmin
                  ? 'bg-[#fef9c3] text-[#854d0e] border border-[#fef08a] font-extrabold hover:bg-[#fde047]'
                  : 'text-[#6b555c] hover:text-[#1f1619] hover:bg-gray-50'
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5" />
              <span>Gym Dashboard</span>
              {isCoachOrAdmin && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#ec4899] animate-pulse" />
              )}
            </button>
          </nav>

          {/* 3. Right: Role Switcher, Cart & Profile Avatar */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            {/* Quick Role Switcher Pill (Gymnast vs Coach) */}
            <div className="hidden md:flex items-center p-0.5 rounded-full bg-[#fff5f8] border border-[#fce7f3] text-[11px] font-bold">
              <button
                type="button"
                onClick={() => setUserRole('GYMNAST')}
                className={`px-2.5 py-1 rounded-full transition-all ${
                  userRole === 'GYMNAST'
                    ? 'bg-white text-[#db2777] shadow-2xs font-extrabold'
                    : 'text-[#6b555c] hover:text-[#1f1619]'
                }`}
                title="Switch to Athlete View"
              >
                Gymnast
              </button>
              <button
                type="button"
                onClick={() => {
                  setUserRole('COACH');
                  if (currentTab !== 'dashboard') setCurrentTab('dashboard');
                }}
                className={`px-2.5 py-1 rounded-full transition-all ${
                  isCoachOrAdmin
                    ? 'bg-[#ec4899] text-white shadow-2xs font-extrabold'
                    : 'text-[#6b555c] hover:text-[#1f1619]'
                }`}
                title="Switch to Coach / Club Admin View"
              >
                Coach
              </button>
            </div>

            {/* Quick Level Indicator */}
            <button
              id="btn-header-level-indicator"
              onClick={() => handleNavClick('progress')}
              className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#fef9c3] text-[#854d0e] border border-[#fef08a] text-xs font-bold hover:bg-[#fde047] transition-all shadow-2xs shrink-0"
            >
              <Award className="w-3.5 h-3.5 text-[#db2777] shrink-0" />
              <span className="whitespace-nowrap">USAG Lvl {user.level}</span>
            </button>

            {/* Cart Icon */}
            <button
              id="btn-header-cart"
              onClick={() => handleNavClick('shop')}
              className="relative p-2 rounded-full hover:bg-[#fff0f5] text-[#6b555c] transition-colors shrink-0 min-h-[42px] min-w-[42px] flex items-center justify-center"
              title="Open Pro Shop"
            >
              <ShoppingBag className="w-5 h-5 text-[#6b555c]" />
              {totalCartItems > 0 && (
                <span id="badge-header-cart-count" className="absolute top-1 right-1 min-w-[18px] h-[18px] px-1 bg-[#ec4899] text-white text-[10px] font-extrabold rounded-full flex items-center justify-center shadow-xs">
                  {totalCartItems}
                </span>
              )}
            </button>

            {/* User Profile Avatar - Prominent & Easily Tappable */}
            <button
              id="btn-header-profile"
              onClick={() => handleNavClick('profile')}
              className="min-h-[48px] min-w-[48px] flex items-center justify-center p-0.5 rounded-full hover:bg-[#fff0f5] transition-transform active:scale-95 relative shrink-0"
              title="Athlete Profile"
              aria-label={`View ${user.fullName} Profile`}
            >
              <img
                id="img-header-avatar"
                alt={user.fullName}
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full object-cover ring-2 ring-[#ec4899]/70 border-2 border-white shadow-xs"
                src={user.avatar}
              />
              <span id="badge-header-avatar-level" className="absolute bottom-0 right-0 w-5 h-5 bg-[#f59e0b] text-white text-[10px] font-black rounded-full flex items-center justify-center border-2 border-white shadow-xs">
                {user.level}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* 4. MOBILE SLIDE-OUT NAVIGATION MENU (Hamburger Drawer) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-[#1f1619]/60 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Menu */}
          <div className="relative w-full max-w-xs bg-white h-full shadow-2xl flex flex-col justify-between p-5 space-y-4 overflow-y-auto animate-in slide-in-from-left duration-200">
            <div className="space-y-4">
              {/* Drawer Top Bar */}
              <div className="flex items-center justify-between border-b border-[#fce7f3] pb-3">
                <div className="flex items-center gap-2.5">
                  <img
                    alt="GymTrack Logo"
                    className="h-10 w-auto object-contain"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOakUShj4soIvWzlewKEr5TPOwCVFmkFYMlxPW4LzaY4PRaqOLrcBEKuKIjqVyC8UknxTIQEpJH_Qo4NMoqoazeSUiGcjfEx3_SqZwfRxesPHhYvkFeaLrjMapWMsO2NgpLpfgjc505l_ZxmVyqyP55zCUbrkLyEnc9xqVl_ACF4FHy6QINKJ09WrWHdl8472tD4XbqRVjwHA7_4pG3ScowG0ziAKFGsxNMwCWdyYc1kPpHPzdhWI"
                  />
                  <div>
                    <span className="text-lg font-black text-[#1f1619] block leading-none">GymTrack</span>
                    <span className="text-[10px] text-[#db2777] font-bold tracking-wider uppercase">Menu</span>
                  </div>
                </div>

                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Gymnast / Coach User Mini Card */}
              <div className="p-3.5 rounded-2xl bg-gradient-to-r from-[#fff5f8] to-[#fffdf0] border border-[#fce7f3] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <img
                    src={user.avatar}
                    alt={user.fullName}
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-[#ec4899]"
                  />
                  <div>
                    <h4 className="text-xs font-black text-[#1f1619]">{user.fullName}</h4>
                    <span className="text-[10px] text-[#db2777] font-bold block">{user.clubName}</span>
                  </div>
                </div>

                <span className="px-2 py-0.5 rounded-full bg-[#fef9c3] text-[#854d0e] border border-[#fef08a] text-[10px] font-black">
                  Lvl {user.level}
                </span>
              </div>

              {/* Mobile Role Switcher */}
              <div className="space-y-1">
                <span className="text-[10px] font-black text-[#6b555c] uppercase tracking-wider block px-1">
                  Active Account Mode
                </span>
                <div className="grid grid-cols-2 p-1 bg-[#fff5f8] rounded-xl border border-[#fce7f3] text-xs font-bold">
                  <button
                    onClick={() => setUserRole('GYMNAST')}
                    className={`py-1.5 rounded-lg transition-all ${
                      userRole === 'GYMNAST'
                        ? 'bg-white text-[#db2777] shadow-xs font-black'
                        : 'text-[#6b555c]'
                    }`}
                  >
                    🤸 Gymnast
                  </button>
                  <button
                    onClick={() => {
                      setUserRole('COACH');
                      setCurrentTab('dashboard');
                    }}
                    className={`py-1.5 rounded-lg transition-all ${
                      isCoachOrAdmin
                        ? 'bg-[#ec4899] text-white shadow-xs font-black'
                        : 'text-[#6b555c]'
                    }`}
                  >
                    📋 Coach / Admin
                  </button>
                </div>
              </div>

              {/* Navigation Items Links List */}
              <div className="space-y-1 pt-1">
                <span className="text-[10px] font-black text-[#6b555c] uppercase tracking-wider block px-1 mb-1">
                  Navigation
                </span>

                <button
                  onClick={() => handleNavClick('home')}
                  className={`w-full py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-between transition-colors ${
                    currentTab === 'home' ? 'bg-[#fff0f5] text-[#db2777] font-black' : 'text-[#1f1619] hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Home className="w-4 h-4 text-[#ec4899]" />
                    <span>Home</span>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                </button>

                <button
                  onClick={() => handleNavClick('skills')}
                  className={`w-full py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-between transition-colors ${
                    currentTab === 'skills' ? 'bg-[#fff0f5] text-[#db2777] font-black' : 'text-[#1f1619] hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Dumbbell className="w-4 h-4 text-[#ec4899]" />
                    <span>Skills Curriculum</span>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                </button>

                <button
                  onClick={() => handleNavClick('competitions')}
                  className={`w-full py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-between transition-colors ${
                    currentTab === 'competitions' || currentTab === 'events' ? 'bg-[#fff0f5] text-[#db2777] font-black' : 'text-[#1f1619] hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Trophy className="w-4 h-4 text-[#f59e0b]" />
                    <span>Competitions & Meets</span>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                </button>

                <button
                  onClick={() => handleNavClick('clubs')}
                  className={`w-full py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-between transition-colors ${
                    currentTab === 'clubs' ? 'bg-[#fff0f5] text-[#db2777] font-black' : 'text-[#1f1619] hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Building2 className="w-4 h-4 text-[#db2777]" />
                    <span>Clubs & Registration</span>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                </button>

                <button
                  onClick={() => handleNavClick('progress')}
                  className={`w-full py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-between transition-colors ${
                    currentTab === 'progress' ? 'bg-[#fff0f5] text-[#db2777] font-black' : 'text-[#1f1619] hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-4 h-4 text-emerald-600" />
                    <span>My Progress & Stats</span>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                </button>

                <button
                  onClick={() => handleNavClick('dashboard')}
                  className={`w-full py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-between transition-colors ${
                    currentTab === 'dashboard' ? 'bg-[#fff0f5] text-[#db2777] font-black' : 'text-[#1f1619] hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <BarChart3 className="w-4 h-4 text-[#db2777]" />
                    <span>Gym / Coach Dashboard</span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-[#fef9c3] text-[#854d0e] text-[9px] font-black">
                    Coach
                  </span>
                </button>

                <button
                  onClick={() => handleNavClick('profile')}
                  className={`w-full py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-between transition-colors ${
                    currentTab === 'profile' ? 'bg-[#fff0f5] text-[#db2777] font-black' : 'text-[#1f1619] hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <User className="w-4 h-4 text-[#6b555c]" />
                    <span>Athlete Profile</span>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                </button>

                <button
                  onClick={() => handleNavClick('shop')}
                  className={`w-full py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-between transition-colors ${
                    currentTab === 'shop' ? 'bg-[#fff0f5] text-[#db2777] font-black' : 'text-[#1f1619] hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <ShoppingBag className="w-4 h-4 text-[#db2777]" />
                    <span>Pro Shop</span>
                  </div>
                  {totalCartItems > 0 && (
                    <span className="px-2 py-0.5 rounded-full bg-[#ec4899] text-white text-[10px] font-black">
                      {totalCartItems}
                    </span>
                  )}
                </button>
              </div>
            </div>

            {/* Drawer Bottom CTA: Register Club */}
            <div className="pt-3 border-t border-[#fce7f3] space-y-2">
              <button
                onClick={() => {
                  handleNavClick('clubs');
                }}
                className="w-full py-3 px-4 rounded-full bg-gradient-to-r from-[#ec4899] to-[#db2777] text-white text-xs font-black shadow-md flex items-center justify-center gap-2"
              >
                <Building2 className="w-4 h-4" />
                <span>Register Your Club</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
              <p className="text-[10px] text-[#6b555c] text-center">
                Fee: ₦75,000 / year • Accredited Platform
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
