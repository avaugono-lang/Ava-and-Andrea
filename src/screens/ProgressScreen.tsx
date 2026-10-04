import React, { useState } from 'react';
import { useGym } from '../context/GymContext';
import { Award, CheckCircle2, Unlock, Gauge, Flame, Sparkles, Lock, Trophy, Flag, ShieldCheck, CheckCheck, ChevronDown, ChevronUp, Circle, Dumbbell, Star } from 'lucide-react';

export const ProgressScreen: React.FC = () => {
  const { user, badges, awardXp } = useGym();
  const [expandedL13, setExpandedL13] = useState(false);
  const [coachRequestSent, setCoachRequestSent] = useState(false);

  const unlockedBadges = badges.filter((b) => b.unlocked);

  const handleRequestCoachEval = () => {
    setCoachRequestSent(true);
    awardXp(30, 'Requested Level 4 Move-Up Evaluation with Coach Sarah!');
    setTimeout(() => setCoachRequestSent(false), 4000);
  };

  return (
    <div className="flex flex-col w-full max-w-2xl mx-auto px-4 space-y-6 pt-2 pb-12">
      {/* Page Title: My Progress Report */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-[#1f1619] tracking-tight">My Progress Report</h1>
          <p className="text-xs text-[#6b555c]">Vault & Floor Event Tracker • USAG Level {user.level}</p>
        </div>
        <span className="px-3 py-1 bg-[#fff5f8] border border-[#fce7f3] text-[#db2777] rounded-full text-xs font-bold flex items-center gap-1.5 shrink-0">
          <Flame className="w-3.5 h-3.5" />
          <span>Vault & Floor</span>
        </span>
      </div>

      {/* Level Banner Card in Light Pink & Light Yellow */}
      <div className="w-full bg-white rounded-3xl p-6 shadow-[0_8px_24px_-4px_rgba(244,114,182,0.1)] border border-[#fce7f3] relative overflow-hidden">
        <div className="absolute -right-8 -top-8 w-36 h-36 bg-gradient-to-br from-[#fce7f3] via-[#fef9c3] to-transparent rounded-full blur-2xl opacity-70 pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#fef9c3] text-[#db2777] border border-[#fef08a] shadow-xs mb-2">
            <Trophy className="w-7 h-7" />
          </div>

          <div className="flex items-center gap-1.5 mt-1">
            <ShieldCheck className="w-4 h-4 text-[#db2777]" />
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#db2777]">
              Official USAG Progression
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1f1619] mt-1 tracking-tight">
            USAG Level {user.level}
          </h1>

          <p className="text-xs text-[#6b555c] max-w-[280px] mt-1 leading-relaxed">
            Compulsory Competitive Division • Northern Region Circuit
          </p>

          {/* Level Progress Bar */}
          <div className="w-full bg-[#fef9c3]/70 rounded-full h-3 mt-4 p-0.5 flex items-center relative overflow-hidden border border-[#fef08a]/60">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#ec4899] via-[#f43f5e] to-[#f59e0b] transition-all duration-700 shadow-2xs"
              style={{ width: '85%' }}
            />
          </div>

          <div className="w-full flex justify-between items-center mt-1.5 px-1">
            <span className="text-[10px] font-bold uppercase text-[#6b555c]">Level {user.level} Progress</span>
            <span className="text-xs font-bold text-[#db2777]">
              85% to Level {Math.min(10, user.level + 1)}
            </span>
          </div>
        </div>
      </div>

      {/* Metric Scores Bento Grid (2x2) */}
      <div className="grid grid-cols-2 gap-3">
        {/* Stat 1: Current Stage */}
        <div className="bg-white p-4 rounded-3xl border border-[#fce7f3] shadow-2xs flex flex-col justify-between">
          <div className="flex items-center justify-between text-[#ec4899]">
            <span className="text-[10px] font-bold uppercase text-[#6b555c]">Current Stage</span>
            <Award className="w-5 h-5 text-[#ec4899]" />
          </div>
          <div className="mt-3">
            <div className="text-lg font-extrabold text-[#1f1619]">Level {user.level}</div>
            <div className="text-xs text-[#6b555c]">Vault & Floor Team</div>
          </div>
        </div>

        {/* Stat 2: Mastered Skills */}
        <div className="bg-white p-4 rounded-3xl border border-[#fce7f3] shadow-2xs flex flex-col justify-between">
          <div className="flex items-center justify-between text-[#d97706]">
            <span className="text-[10px] font-bold uppercase text-[#6b555c]">Mastered</span>
            <CheckCircle2 className="w-5 h-5 text-[#d97706]" />
          </div>
          <div className="mt-3">
            <div className="text-lg font-extrabold text-[#1f1619]">12 Skills</div>
            <div className="text-xs text-[#6b555c]">Vault & Floor Focus</div>
          </div>
        </div>

        {/* Stat 3: To Unlock */}
        <div className="bg-white p-4 rounded-3xl border border-[#fce7f3] shadow-2xs flex flex-col justify-between">
          <div className="flex items-center justify-between text-[#db2777]">
            <span className="text-[10px] font-bold uppercase text-[#6b555c]">To Unlock</span>
            <Unlock className="w-5 h-5 text-[#db2777]" />
          </div>
          <div className="mt-3">
            <div className="text-lg font-extrabold text-[#db2777]">3 Skills Left</div>
            <div className="text-xs text-[#6b555c]">Level 4 Complete</div>
          </div>
        </div>

        {/* Stat 4: Readiness */}
        <div className="bg-white p-4 rounded-3xl border border-[#fce7f3] shadow-2xs flex flex-col justify-between">
          <div className="flex items-center justify-between text-[#ca8a04]">
            <span className="text-[10px] font-bold uppercase text-[#6b555c]">Readiness</span>
            <Gauge className="w-5 h-5 text-[#ca8a04]" />
          </div>
          <div className="mt-3">
            <div className="text-lg font-extrabold text-[#1f1619]">85%</div>
            <div className="text-xs text-[#6b555c]">L5 Move-Up Score</div>
          </div>
        </div>
      </div>

      {/* Interactive Stepped Journey Timeline */}
      <div className="flex flex-col space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <h2 className="text-lg font-bold text-[#1f1619]">Path to Elite (USAG 1–10)</h2>
            <span className="text-xs text-[#6b555c]">Tap a level node to inspect technical requirements</span>
          </div>
          <span className="text-[10px] font-extrabold bg-[#fef9c3] text-[#854d0e] border border-[#fef08a] px-2.5 py-1 rounded-full uppercase">
            10 Levels
          </span>
        </div>

        <div className="relative pl-6 space-y-4 before:content-[''] before:absolute before:left-2.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-[#fce7f3]">
          {/* Level 1-3 Completed Node */}
          <div
            id="node-levels-1-3"
            onClick={() => setExpandedL13(!expandedL13)}
            className="relative cursor-pointer transition-all duration-200"
          >
            <div className="absolute -left-6 top-1.5 w-6 h-6 rounded-full bg-[#fef08a] text-[#854d0e] border border-[#facc15] flex items-center justify-center shadow-xs">
              <CheckCheck className="w-3.5 h-3.5" />
            </div>
            <div className="bg-white p-4 rounded-2xl border border-[#fce7f3] shadow-2xs hover:shadow-xs transition-shadow">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold bg-[#fef9c3] text-[#854d0e] px-2 py-0.5 rounded-full border border-[#fef08a]">
                    Completed
                  </span>
                  <h3 className="text-sm font-bold text-[#1f1619]">Levels 1 – 3 Foundations</h3>
                </div>
                {expandedL13 ? <ChevronUp className="w-5 h-5 text-[#6b555c]" /> : <ChevronDown className="w-5 h-5 text-[#6b555c]" />}
              </div>
              <p className="text-xs text-[#6b555c] mt-1">
                36 core skills certified: cartwheels, bridge kickovers, glide kips intro, handstands.
              </p>
              {expandedL13 && (
                <div className="mt-3 pt-2 border-t border-[#fce7f3] flex flex-wrap gap-1.5">
                  <span className="text-[11px] bg-[#fff5f8] border border-[#fce7f3] px-2.5 py-0.5 rounded-full text-[#6b555c] font-medium">
                    Level 1: Novice • 100%
                  </span>
                  <span className="text-[11px] bg-[#fff5f8] border border-[#fce7f3] px-2.5 py-0.5 rounded-full text-[#6b555c] font-medium">
                    Level 2: Developmental • 100%
                  </span>
                  <span className="text-[11px] bg-[#fff5f8] border border-[#fce7f3] px-2.5 py-0.5 rounded-full text-[#6b555c] font-medium">
                    Level 3: Compulsory Intro • 100%
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Current Active: Level 4 */}
          <div className="relative">
            <div className="absolute -left-6 top-2 w-6 h-6 rounded-full bg-[#ec4899] text-white flex items-center justify-center shadow-[0_0_12px_rgba(236,72,153,0.5)] ring-4 ring-[#fce7f3] animate-pulse">
              <Flag className="w-3.5 h-3.5 fill-current" />
            </div>
            <div className="bg-gradient-to-br from-white to-[#fffdf0] p-4 rounded-2xl border border-[#fce7f3] shadow-[0_8px_24px_-4px_rgba(244,114,182,0.15)]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold bg-[#ec4899] text-white px-2 py-0.5 rounded-full uppercase">
                    Current Active
                  </span>
                  <h3 className="text-sm font-bold text-[#1f1619]">Level 4 Compulsory</h3>
                </div>
                <span className="text-[11px] font-extrabold text-[#db2777]">Vault & Floor Active</span>
              </div>
              <p className="text-xs text-[#6b555c] mt-1">
                First required USAG competitive team level. Requires certified Handspring on vault & Back Handspring on floor.
              </p>

              {/* Skills checklist snippet */}
              <div className="mt-3 space-y-1.5">
                <div className="flex items-center justify-between text-xs bg-white p-2 rounded-xl border border-[#fce7f3]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="font-semibold text-[#1f1619]">Floor: Back Handspring (Solid)</span>
                  </div>
                  <span className="text-[10px] font-bold text-[#db2777] bg-[#fce7f3] px-1.5 py-0.5 rounded">
                    Mastered
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs bg-white p-2 rounded-xl border border-[#fce7f3]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="font-semibold text-[#1f1619]">Vault: Handstand Flatback onto Mat Stack</span>
                  </div>
                  <span className="text-[10px] font-bold text-[#db2777] bg-[#fce7f3] px-1.5 py-0.5 rounded">
                    Mastered
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs bg-white p-2 rounded-xl border border-[#fce7f3]">
                  <div className="flex items-center gap-2">
                    <Circle className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span className="font-semibold text-[#1f1619]">Floor: Round-off Back Handspring Series</span>
                  </div>
                  <span className="text-[10px] font-bold text-[#854d0e] bg-[#fef9c3] px-1.5 py-0.5 rounded">
                    In Progress
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs bg-white p-2 rounded-xl border border-[#fce7f3]">
                  <div className="flex items-center gap-2">
                    <Circle className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                    <span className="font-semibold text-[#1f1619]">Vault: Front Handspring Table Repulsion</span>
                  </div>
                  <span className="text-[10px] font-bold text-[#6b555c] bg-[#fff5f8] px-1.5 py-0.5 rounded">
                    In Progress
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Locked Level 5 */}
          <div className="relative">
            <div className="absolute -left-6 top-2 w-6 h-6 rounded-full bg-[#fce7f3] text-[#6b555c] flex items-center justify-center shadow-xs">
              <Lock className="w-3.5 h-3.5 text-[#ec4899]" />
            </div>
            <div className="bg-white p-4 rounded-2xl border border-[#fce7f3] shadow-xs">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold bg-[#fff5f8] text-[#6b555c] px-2 py-0.5 rounded-full">
                    Next Target
                  </span>
                  <h3 className="text-sm font-bold text-[#1f1619]">Level 5 Compulsory Peak</h3>
                </div>
                <span className="text-xs font-bold text-[#db2777]">85% Complete</span>
              </div>
              <p className="text-xs text-[#6b555c] mt-1">
                Front handspring over competition vault table, back tuck on floor, accelerated sprint hurdle punch.
              </p>
            </div>
          </div>

          {/* Locked Level 6-7 */}
          <div className="relative">
            <div className="absolute -left-6 top-2 w-6 h-6 rounded-full bg-[#fce7f3] text-[#6b555c] flex items-center justify-center shadow-xs">
              <Lock className="w-3.5 h-3.5 text-gray-400" />
            </div>
            <div className="bg-white p-4 rounded-2xl border border-[#fce7f3] shadow-xs opacity-75">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold bg-[#fff5f8] text-[#6b555c] px-2 py-0.5 rounded-full">
                    Future Horizon
                  </span>
                  <h3 className="text-sm font-bold text-[#1f1619]">Levels 6 – 7 Optionals Gateway</h3>
                </div>
                <Lock className="w-4 h-4 text-gray-400" />
              </div>
              <p className="text-xs text-[#6b555c] mt-1">
                Customized floor choreography & music. Front handspring half-offs on vault, layout saltos on floor.
              </p>
            </div>
          </div>

          {/* Locked Level 8-10 */}
          <div className="relative">
            <div className="absolute -left-6 top-2 w-6 h-6 rounded-full bg-[#fce7f3] text-[#6b555c] flex items-center justify-center shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            </div>
            <div className="bg-white p-4 rounded-2xl border border-[#fce7f3] shadow-xs opacity-60">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold bg-[#fff5f8] text-[#6b555c] px-2 py-0.5 rounded-full">
                    NCAA • Elite
                  </span>
                  <h3 className="text-sm font-bold text-[#1f1619]">Levels 8 – 10 Senior Elite Track</h3>
                </div>
                <Lock className="w-4 h-4 text-gray-400" />
              </div>
              <p className="text-xs text-[#6b555c] mt-1">
                Tsukahara / Yurchenko vaults, double-backs on floor, collegiate recruiting showcase level.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Gymnast Showcase Badges */}
      <div className="flex flex-col space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <h2 className="text-lg font-bold text-[#1f1619]">Gymnast Showcase Badges</h2>
            <span className="text-xs text-[#6b555c]">Earned milestones & apparatus mastery awards</span>
          </div>
          <span className="text-[10px] font-extrabold bg-[#fef9c3] text-[#854d0e] border border-[#fef08a] px-2.5 py-1 rounded-full uppercase">
            {unlockedBadges.length} Unlocked
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {badges.map((badge) => (
            <div
              key={badge.id}
              id={`badge-${badge.id}`}
              className={`p-4 rounded-2xl border flex flex-col items-center text-center relative overflow-hidden transition-all ${
                badge.unlocked
                  ? 'bg-white border-[#fce7f3] shadow-2xs'
                  : 'bg-gray-50/70 border-gray-200 opacity-60'
              }`}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-2 shadow-xs text-white"
                style={{ backgroundColor: badge.unlocked ? badge.accentColor : '#9ca3af' }}
              >
                <Award className="w-6 h-6 fill-current" />
              </div>
              <h4 className="text-xs font-bold text-[#1f1619]">{badge.title}</h4>
              <span className="text-[10px] font-bold text-[#db2777] mt-0.5">
                {badge.subtitle}
              </span>
              <p className="text-[11px] text-[#6b555c] mt-1 line-clamp-2 leading-tight">
                {badge.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Motivational Footer Call to Action in Light Pink & Light Yellow */}
      <div className="bg-gradient-to-r from-[#ec4899] via-[#f472b6] to-[#f59e0b] text-white rounded-3xl p-6 shadow-[0_12px_28px_rgba(244,114,182,0.3)] flex flex-col items-center text-center space-y-3">
        <Trophy className="w-8 h-8 text-white animate-bounce" />
        <h3 className="text-lg font-bold text-white">Ready to Test Out of Level 4?</h3>
        <p className="text-xs text-white/90 max-w-xs leading-relaxed">
          Schedule a coach evaluation for your Kip transition and mat-stack vault routine.
        </p>
        <button
          id="btn-progress-request-eval"
          onClick={handleRequestCoachEval}
          className="mt-1 px-6 py-2.5 bg-white text-[#db2777] rounded-full font-bold text-xs shadow-md hover:bg-[#fff5f8] transition-all active:scale-95"
        >
          {coachRequestSent ? 'Evaluation Request Sent to Coach! ✓' : 'Request Coach Evaluation'}
        </button>
      </div>
    </div>
  );
};
