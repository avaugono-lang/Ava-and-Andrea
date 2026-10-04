import React, { useState } from 'react';
import { useGym } from '../context/GymContext';
import { WorkoutModal } from '../components/WorkoutModal';
import { Workout } from '../types';
import { 
  MapPin, 
  User, 
  Sparkles, 
  ChevronRight, 
  Flame, 
  CheckCircle2, 
  Dumbbell, 
  Clock, 
  ArrowRight,
  Play,
  Award,
  Video,
  Calendar,
  Layers,
  Zap,
  Target
} from 'lucide-react';

export const HomeScreen: React.FC = () => {
  const { user, workouts, skills, events, setCurrentTab } = useGym();
  const [activeWorkout, setActiveWorkout] = useState<Workout | null>(null);

  // Vault & Floor skills breakdown
  const vaultSkills = skills.filter((s) => s.category === 'VAULT');
  const floorSkills = skills.filter((s) => s.category === 'FLOOR');
  const masteredSkills = skills.filter((s) => s.status === 'VERIFIED');
  const inProgressSkills = skills.filter((s) => s.status === 'IN_PROGRESS' || s.status === 'AWAITING_VERIFICATION');

  // Real upcoming events (not completed, sorted by nearest date)
  const upcomingEvents = events
    .filter((e) => !e.isCompleted)
    .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime())
    .slice(0, 3);

  // First name extraction for warm welcome
  const firstName = user.fullName.split(' ')[0] || user.fullName;

  return (
    <div className="flex flex-col w-full max-w-3xl mx-auto px-4 sm:px-6 space-y-6 pt-2 pb-16">
      {/* 1. WELCOME BACK ATHLETE HEADER */}
      <section className="bg-white rounded-3xl p-5 sm:p-7 border border-[#fce7f3] shadow-xs relative overflow-hidden">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 sm:gap-5">
            {/* Gymnast Profile Photo - Prominent (Requirement 2) */}
            <div className="relative shrink-0">
              <div className="w-18 h-18 sm:w-22 sm:h-22 rounded-full overflow-hidden ring-4 ring-[#fce7f3] border-2 border-white shadow-md bg-[#fff0f5]">
                <img
                  src={user.avatar}
                  alt={user.fullName}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="absolute -bottom-1 -right-1 px-2.5 py-0.5 bg-gradient-to-r from-[#ec4899] to-[#db2777] text-white text-[11px] font-black rounded-full border-2 border-white shadow-xs flex items-center gap-0.5">
                <span>L{user.level}</span>
              </span>
            </div>

            <div className="flex flex-col justify-center">
              <div className="inline-flex items-center gap-1.5 bg-[#fef9c3] border border-[#fef08a] px-3 py-0.5 rounded-full w-fit mb-1 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#ec4899] animate-pulse" />
                <span className="text-[10px] sm:text-[11px] font-black text-[#854d0e] uppercase tracking-wider">
                  Artistic Gymnast • Vault & Floor
                </span>
              </div>

              <h1 className="text-xl sm:text-2xl font-black text-[#1f1619] tracking-tight">
                Welcome back, {firstName}! 👋
              </h1>

              <span className="text-xs font-bold text-[#6b555c] flex items-center gap-1.5 mt-0.5">
                <MapPin className="w-3.5 h-3.5 text-[#ec4899] shrink-0" />
                <span>{user.clubName}</span>
              </span>
            </div>
          </div>

          <button
            id="btn-home-profile"
            onClick={() => setCurrentTab('profile')}
            className="p-3 rounded-full bg-[#fff0f5] border border-[#fce7f3] text-[#db2777] hover:bg-[#fce7f3] transition-colors self-start shrink-0 min-h-[44px] min-w-[44px] flex items-center justify-center"
            title="Edit Athlete Profile"
            aria-label="View and Edit Profile"
          >
            <User className="w-5 h-5" />
          </button>
        </div>

        {/* Daily Motivation Card - True Gymnastics Focus (Requirement 12) */}
        <div className="mt-4 p-4 rounded-2xl bg-[#fffdf0] border border-[#fef08a] flex items-center gap-3.5 shadow-2xs">
          <div className="w-10 h-10 shrink-0 rounded-2xl bg-[#fef9c3] border border-[#fef08a] flex items-center justify-center text-[#854d0e] shadow-2xs">
            <Sparkles className="w-5 h-5 text-[#db2777]" />
          </div>
          <div>
            <span className="text-[10px] font-black uppercase tracking-wider text-[#db2777] block">
              Gymnast Daily Focus
            </span>
            <p className="text-xs sm:text-[13px] font-bold text-[#1f1619] italic leading-snug">
              "Strong run, aggressive board punch, tight hollow-body flight, and freeze your landing stick."
            </p>
          </div>
        </div>
      </section>

      {/* 2. YOUR PROGRESS SUMMARY */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-[#db2777]" />
            <h2 className="text-lg font-black text-[#1f1619] tracking-tight">Your Gymnastics Progress</h2>
          </div>
          <button
            id="btn-home-progress-detail"
            onClick={() => setCurrentTab('progress')}
            className="text-xs font-bold text-[#db2777] hover:underline flex items-center gap-0.5"
          >
            <span>Full Stats</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="rounded-3xl bg-gradient-to-br from-[#fce7f3] via-[#fffdf0] to-[#fef9c3] p-5 sm:p-6 border border-[#fce7f3] shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-[#9d174d]">
                Active Athlete Level
              </span>
              <h3 className="text-lg sm:text-xl font-black text-[#1f1619]">
                USAG Level {user.level} Gymnast
              </h3>
            </div>
            <div className="px-3.5 py-1.5 rounded-full bg-white border border-pink-100 text-xs font-black text-[#db2777] shadow-2xs">
              {user.xp.toLocaleString()} XP
            </div>
          </div>

          {/* XP Progress Bar */}
          <div className="space-y-1.5">
            <div className="h-3.5 w-full bg-white/80 rounded-full overflow-hidden p-0.5 shadow-inner">
              <div
                className="h-full bg-gradient-to-r from-[#ec4899] to-[#f59e0b] rounded-full transition-all duration-700 shadow-2xs"
                style={{ width: `${Math.min(100, (user.xp / user.nextLevelXpGoal) * 100)}%` }}
              />
            </div>
            <div className="flex justify-between text-xs font-bold text-[#6b555c]">
              <span>{user.xp.toLocaleString()} XP</span>
              <span className="text-[#854d0e]">Level Goal: {user.nextLevelXpGoal.toLocaleString()} XP</span>
            </div>
          </div>

          {/* 4 Stat Cards */}
          <div className="grid grid-cols-4 gap-2.5 pt-1 text-center">
            <div className="p-3 bg-white/95 rounded-2xl border border-[#fce7f3] flex flex-col items-center justify-center shadow-2xs">
              <span className="text-base font-black text-[#db2777]">L{user.level}</span>
              <span className="text-[10px] font-bold text-[#6b555c] uppercase">Level</span>
            </div>

            <div className="p-3 bg-white/95 rounded-2xl border border-[#fce7f3] flex flex-col items-center justify-center shadow-2xs">
              <div className="flex items-center gap-1 text-[#e11d48] justify-center">
                <Flame className="w-3.5 h-3.5 fill-current" />
                <span className="text-sm font-black">{user.dayStreak}</span>
              </div>
              <span className="text-[10px] font-bold text-[#6b555c] uppercase">Streak</span>
            </div>

            <div className="p-3 bg-white/95 rounded-2xl border border-[#fce7f3] flex flex-col items-center justify-center shadow-2xs">
              <div className="flex items-center gap-1 text-[#d97706] justify-center">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span className="text-sm font-black">{masteredSkills.length}</span>
              </div>
              <span className="text-[10px] font-bold text-[#6b555c] uppercase">Mastered</span>
            </div>

            <div className="p-3 bg-white/95 rounded-2xl border border-[#fce7f3] flex flex-col items-center justify-center shadow-2xs">
              <div className="flex items-center gap-1 text-[#2563eb] justify-center">
                <Zap className="w-3.5 h-3.5" />
                <span className="text-sm font-black">{inProgressSkills.length}</span>
              </div>
              <span className="text-[10px] font-bold text-[#6b555c] uppercase">Working On</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. GYMNASTICS CONDITIONING WORKOUTS (Requirement 12: pure gymnastics training!) */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg">🤸‍♀️</span>
            <h2 className="text-lg font-black text-[#1f1619] tracking-tight">
              Gymnast Conditioning & Drills
            </h2>
            <span className="px-2.5 py-0.5 rounded-full bg-[#fce7f3] text-[#db2777] text-[10px] font-extrabold uppercase">
              Vault & Floor Specific
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {workouts.map((workout) => (
            <article
              key={workout.id}
              id={`card-workout-${workout.id}`}
              className="bg-white rounded-3xl border border-[#fce7f3] shadow-xs overflow-hidden flex flex-col justify-between hover:border-pink-300 transition-all"
            >
              <div className="relative w-full h-40 bg-black overflow-hidden group cursor-pointer" onClick={() => setActiveWorkout(workout)}>
                <img
                  src={workout.image}
                  alt={workout.title}
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#fef9c3] text-[#854d0e] border border-[#fef08a] text-[10px] font-black uppercase tracking-wide">
                    {workout.category === 'STRENGTH' ? '💪 Gymnast Strength' : '🧘‍♀️ Flexibility & Lines'}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#ec4899] text-white text-[10px] font-bold">
                    +{workout.xpReward} XP
                  </span>
                </div>

                <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white">
                  <span className="text-xs font-bold flex items-center gap-1 text-[#fef08a]">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{workout.durationMin} mins • {workout.intensity}</span>
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#ec4899] text-white flex items-center justify-center shadow-md shadow-pink-500/30">
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-black text-[#1f1619]">{workout.title}</h3>
                  <p className="text-xs text-[#6b555c] line-clamp-2 mt-1 leading-relaxed">
                    {workout.description}
                  </p>

                  {/* Highlights Bullets Preview */}
                  {workout.highlights && (
                    <div className="mt-2.5 flex flex-wrap gap-1">
                      {workout.highlights.slice(0, 3).map((h, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded-full bg-[#fffdf0] border border-[#fef08a] text-[#854d0e] text-[10px] font-medium"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-2 flex items-center gap-2">
                  <button
                    id={`btn-home-start-workout-${workout.id}`}
                    onClick={() => setActiveWorkout(workout)}
                    className="flex-1 py-2.5 px-3 rounded-full bg-[#fef9c3] border border-[#fef08a] text-[#854d0e] text-xs font-bold hover:bg-[#fde047] transition-colors flex items-center justify-center gap-1.5 shadow-2xs active:scale-98"
                  >
                    <Play className="w-3.5 h-3.5 fill-current text-[#db2777]" />
                    <span>Start Routine</span>
                  </button>

                  <button
                    id={`btn-home-complete-workout-${workout.id}`}
                    onClick={() => setActiveWorkout(workout)}
                    className={`px-4 py-2.5 rounded-full text-xs font-bold transition-all ${
                      workout.completedToday
                        ? 'bg-[#fce7f3] text-[#db2777] border border-pink-200'
                        : 'bg-[#ec4899] text-white hover:bg-[#db2777] shadow-2xs'
                    }`}
                  >
                    {workout.completedToday ? 'Done ✓' : 'Details'}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 4. CONTINUE LEARNING SECTION (Vault & Floor) */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Target className="w-5 h-5 text-[#db2777]" />
            <h2 className="text-lg font-black text-[#1f1619] tracking-tight">
              Continue Learning
            </h2>
            <span className="text-xs text-[#6b555c]">Vault & Floor</span>
          </div>
          <button
            id="btn-home-all-skills"
            onClick={() => setCurrentTab('skills')}
            className="text-xs font-bold text-[#db2777] hover:underline flex items-center gap-0.5"
          >
            <span>All Skills</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {/* Vault Learning Card */}
          <div
            id="card-continue-vault"
            onClick={() => setCurrentTab('skills')}
            className="p-4 sm:p-5 rounded-3xl bg-white border border-[#fce7f3] shadow-xs cursor-pointer hover:border-pink-300 transition-all flex items-center justify-between group"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#fff5f8] border border-[#fce7f3] flex items-center justify-center text-xl group-hover:scale-105 transition-transform shadow-2xs">
                🚀
              </div>
              <div>
                <span className="text-[10px] font-black uppercase text-[#db2777] tracking-wider">
                  Apparatus 1
                </span>
                <h3 className="text-sm font-black text-[#1f1619]">Vault Drills & Board Punch</h3>
                <span className="text-xs text-[#6b555c]">
                  {vaultSkills.filter((s) => s.status === 'VERIFIED').length} of {vaultSkills.length} Verified
                </span>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-[#db2777] group-hover:translate-x-1 transition-transform" />
          </div>

          {/* Floor Learning Card */}
          <div
            id="card-continue-floor"
            onClick={() => setCurrentTab('skills')}
            className="p-4 sm:p-5 rounded-3xl bg-white border border-[#fce7f3] shadow-xs cursor-pointer hover:border-pink-300 transition-all flex items-center justify-between group"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#fffdf0] border border-[#fef08a] flex items-center justify-center text-xl group-hover:scale-105 transition-transform shadow-2xs">
                ✨
              </div>
              <div>
                <span className="text-[10px] font-black uppercase text-[#854d0e] tracking-wider">
                  Apparatus 2
                </span>
                <h3 className="text-sm font-black text-[#1f1619]">Floor Tumbling & Leaps</h3>
                <span className="text-xs text-[#6b555c]">
                  {floorSkills.filter((s) => s.status === 'VERIFIED').length} of {floorSkills.length} Verified
                </span>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-[#db2777] group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </section>

      {/* 5. UPCOMING LOCAL & FEATURED EVENTS (with Gymfest 3.0 callout) */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-[#db2777]" />
            <h2 className="text-lg font-black text-[#1f1619] tracking-tight">
              Upcoming Competitions
            </h2>
          </div>
          <button
            id="btn-home-see-all-events"
            onClick={() => setCurrentTab('events')}
            className="text-xs font-bold text-[#db2777] hover:underline flex items-center gap-0.5"
          >
            <span>See All Meets</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="space-y-2.5">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              id={`home-event-${event.id}`}
              onClick={() => setCurrentTab('events')}
              className="p-3.5 sm:p-4 rounded-2xl bg-white border border-[#fce7f3] shadow-xs cursor-pointer hover:border-pink-300 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 group"
            >
              <div className="flex items-start gap-3">
                <div className="w-13 h-13 rounded-xl bg-[#fce7f3] overflow-hidden shrink-0 border border-[#fce7f3]">
                  <img
                    src={event.image}
                    alt={event.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="space-y-0.5">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-[10px] font-black uppercase px-2 py-0.2 rounded-full bg-[#fef9c3] text-[#854d0e] border border-[#fef08a]">
                      {event.eventLevel}
                    </span>
                    <span className="text-[10px] font-bold text-[#db2777]">
                      {event.country === 'Nigeria' ? '🇳🇬 Nigeria' : event.country}
                    </span>
                  </div>
                  <h3 className="text-sm font-black text-[#1f1619] leading-snug group-hover:text-[#db2777] transition-colors">
                    {event.name}
                  </h3>
                  <div className="flex items-center gap-2 text-[11px] text-[#6b555c]">
                    <span>📅 {event.dateDisplay}</span>
                    <span>•</span>
                    <span className="truncate">{event.venue}, {event.city}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1 text-xs font-bold text-[#db2777] self-end sm:self-center shrink-0">
                <span>View Event</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. GYM MANAGEMENT & CLUB ACCREDITATION PORTAL */}
      <section className="rounded-3xl bg-gradient-to-r from-[#1f1619] via-[#2a1720] to-[#1f1619] p-5 sm:p-6 text-white space-y-3.5 shadow-md border border-[#ec4899]/30">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-[#ec4899] text-white text-[10px] font-black uppercase">
                Coach & Club Hub
              </span>
              <span className="text-[11px] text-[#fef08a] font-bold">Official Federation Portal</span>
            </div>
            <h3 className="text-base sm:text-lg font-black text-white">
              Gym Management & Team Analytics
            </h3>
            <p className="text-xs text-gray-300">
              Manage gymnasts, track event scores across Vault, Bars, Beam & Floor, review routine videos, and register official clubs.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              id="btn-home-goto-dashboard"
              onClick={() => setCurrentTab('dashboard')}
              className="py-2.5 px-4 rounded-full bg-white hover:bg-gray-100 text-[#1f1619] text-xs font-black shadow-xs transition-all flex items-center gap-1.5"
            >
              <span>Gym Dashboard</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              id="btn-home-goto-clubs"
              onClick={() => setCurrentTab('clubs')}
              className="py-2.5 px-4 rounded-full bg-gradient-to-r from-[#ec4899] to-[#db2777] text-white text-xs font-black shadow-xs transition-all flex items-center gap-1.5"
            >
              <span>Register Club</span>
            </button>
          </div>
        </div>
      </section>

      {/* Workout Detail & Player Modal */}
      <WorkoutModal
        workout={activeWorkout}
        onClose={() => setActiveWorkout(null)}
      />
    </div>
  );
};
