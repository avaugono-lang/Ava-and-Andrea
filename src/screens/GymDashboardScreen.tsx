import React, { useState } from 'react';
import { useGym } from '../context/GymContext';
import { RosterGymnast, CompetitionResult, CoachNote, PracticeFocusArea, USAGLevel } from '../types';
import { 
  Building2, 
  Users, 
  Search, 
  Filter, 
  Plus, 
  Award, 
  Trophy, 
  CheckCircle2, 
  Clock, 
  TrendingUp, 
  Eye, 
  FileText, 
  AlertCircle, 
  Check, 
  X, 
  Edit3, 
  Play, 
  Calendar, 
  ChevronRight, 
  BarChart3, 
  Sparkles, 
  ShieldCheck, 
  Video,
  Target,
  Zap,
  ArrowUpRight
} from 'lucide-react';

export const GymDashboardScreen: React.FC = () => {
  const { 
    user, 
    rosterGymnasts, 
    addRosterGymnast, 
    addCompetitionResult, 
    addCoachNote, 
    addPracticeFocus, 
    updatePracticeFocusStatus, 
    reviewEvidenceSubmission,
    userRole,
    setUserRole,
    setCurrentTab
  } = useGym();

  const [searchQuery, setSearchQuery] = useState('');
  const [levelFilter, setLevelFilter] = useState<number | 'ALL'>('ALL');
  const [statusFilter, setStatusFilter] = useState<'ALL' | 'PENDING_REVIEW' | 'NEEDING_PRACTICE'>('ALL');
  
  // Active Gymnast Profile Modal
  const [activeGymnast, setActiveGymnast] = useState<RosterGymnast | null>(null);
  const [activeGymnastTab, setActiveGymnastTab] = useState<'SCORES' | 'CHARTS' | 'SKILLS' | 'EVIDENCE' | 'PRACTICE' | 'NOTES'>('SCORES');

  // Sub-modals inside Gymnast profile
  const [showAddScoreModal, setShowAddScoreModal] = useState(false);
  const [showAddNoteModal, setShowAddNoteModal] = useState(false);
  const [showAddPracticeModal, setShowAddPracticeModal] = useState(false);
  const [showAddGymnastModal, setShowAddGymnastModal] = useState(false);

  // New Score Form
  const [newMeetName, setNewMeetName] = useState('');
  const [newMeetDate, setNewMeetDate] = useState('');
  const [newMeetLevel, setNewMeetLevel] = useState<USAGLevel>(4);
  const [vaultScore, setVaultScore] = useState<string>('9.400');
  const [barsScore, setBarsScore] = useState<string>('9.200');
  const [beamScore, setBeamScore] = useState<string>('9.350');
  const [floorScore, setFloorScore] = useState<string>('9.500');
  const [meetPlace, setMeetPlace] = useState('2nd Place All-Around 🥈');
  const [meetNotes, setMeetNotes] = useState('Clean routine lines, solid landings.');

  // New Note Form
  const [noteCategory, setNoteCategory] = useState<CoachNote['category']>('Form & Execution');
  const [noteText, setNoteText] = useState('');

  // New Practice Drill Form
  const [practiceApparatus, setPracticeApparatus] = useState<PracticeFocusArea['apparatus']>('VAULT');
  const [practiceTitle, setPracticeTitle] = useState('');
  const [practiceDescription, setPracticeDescription] = useState('');
  const [practicePriority, setPracticePriority] = useState<PracticeFocusArea['priority']>('HIGH');

  // New Gymnast Form
  const [newGymnastName, setNewGymnastName] = useState('');
  const [newGymnastLevel, setNewGymnastLevel] = useState<USAGLevel>(4);
  const [newGymnastAge, setNewGymnastAge] = useState<number>(13);
  const [newGymnastEvents, setNewGymnastEvents] = useState<('VAULT' | 'BARS' | 'BEAM' | 'FLOOR')[]>(['VAULT', 'FLOOR']);

  // Evidence Review Form
  const [reviewingSubmissionId, setReviewingSubmissionId] = useState<string | null>(null);
  const [coachReviewFeedback, setCoachReviewFeedback] = useState('Form approved! Clean toe point and stable landing stick. Verified by Coach.');

  // Current Club Name
  const currentClubName = user.clubName || 'Lagos Flyers Gymnastics Club';

  // Filter roster
  const filteredRoster = rosterGymnasts.filter((gymnast) => {
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      const match = gymnast.name.toLowerCase().includes(q) || gymnast.clubName.toLowerCase().includes(q);
      if (!match) return false;
    }

    if (levelFilter !== 'ALL' && gymnast.level !== levelFilter) {
      return false;
    }

    if (statusFilter === 'PENDING_REVIEW') {
      const hasPending = gymnast.evidenceSubmissions.some((s) => s.status === 'AWAITING_REVIEW');
      if (!hasPending) return false;
    }

    if (statusFilter === 'NEEDING_PRACTICE') {
      const hasPractice = gymnast.practiceAreas.some((p) => p.status === 'IN_PROGRESS');
      if (!hasPractice) return false;
    }

    return true;
  });

  // Calculate overview statistics
  const totalGymnasts = rosterGymnasts.length;
  const pendingSubmissionsCount = rosterGymnasts.reduce(
    (acc, g) => acc + g.evidenceSubmissions.filter((s) => s.status === 'AWAITING_REVIEW').length, 
    0
  );
  const activePracticeCount = rosterGymnasts.reduce(
    (acc, g) => acc + g.practiceAreas.filter((p) => p.status === 'IN_PROGRESS').length, 
    0
  );
  const avgAllAround = rosterGymnasts.length > 0
    ? (rosterGymnasts.reduce((acc, g) => acc + g.personalBests.allAround.score, 0) / rosterGymnasts.length).toFixed(2)
    : '0.00';

  // Handle Save New Competition Score
  const handleSaveScore = (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeGymnast || !newMeetName.trim()) return;

    const v = parseFloat(vaultScore) || 0;
    const b = parseFloat(barsScore) || 0;
    const bm = parseFloat(beamScore) || 0;
    const f = parseFloat(floorScore) || 0;
    const aa = parseFloat((v + b + bm + f).toFixed(3));

    addCompetitionResult(activeGymnast.id, {
      meetName: newMeetName.trim(),
      date: newMeetDate || new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      level: newMeetLevel,
      vaultScore: v,
      barsScore: b,
      beamScore: bm,
      floorScore: f,
      allAroundScore: aa,
      place: meetPlace,
      notes: meetNotes,
    });

    // Refresh active gymnast reference
    const updated = rosterGymnasts.find((g) => g.id === activeGymnast.id);
    if (updated) setActiveGymnast(updated);

    setShowAddScoreModal(false);
    setNewMeetName('');
  };

  // Handle Save Coach Note
  const handleSaveNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeGymnast || !noteText.trim()) return;

    addCoachNote(activeGymnast.id, {
      coachName: user.fullName || 'Head Coach',
      category: noteCategory,
      text: noteText.trim(),
    });

    setShowAddNoteModal(false);
    setNoteText('');
  };

  // Handle Save Practice Focus
  const handleSavePractice = (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeGymnast || !practiceTitle.trim()) return;

    addPracticeFocus(activeGymnast.id, {
      apparatus: practiceApparatus,
      title: practiceTitle.trim(),
      description: practiceDescription.trim() || 'Focus on routine precision and landing freeze.',
      priority: practicePriority,
      status: 'IN_PROGRESS',
    });

    setShowAddPracticeModal(false);
    setPracticeTitle('');
    setPracticeDescription('');
  };

  // Handle Add Gymnast to Roster
  const handleCreateGymnast = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newGymnastName.trim()) return;

    addRosterGymnast({
      name: newGymnastName.trim(),
      level: newGymnastLevel,
      age: Number(newGymnastAge) || 12,
      clubName: currentClubName,
      eventsFocus: newGymnastEvents,
    });

    setShowAddGymnastModal(false);
    setNewGymnastName('');
  };

  // Handle Video Evidence Approval / Critique
  const handleReviewEvidence = (submissionId: string, status: 'APPROVED' | 'NEEDS_WORK') => {
    if (!activeGymnast) return;
    reviewEvidenceSubmission(activeGymnast.id, submissionId, status, coachReviewFeedback);
    setReviewingSubmissionId(null);
  };

  return (
    <div className="flex flex-col w-full max-w-5xl mx-auto px-4 sm:px-6 space-y-6 pt-2 pb-16">
      {/* 1. CLUB & COACH DASHBOARD HEADER */}
      <section className="bg-white rounded-3xl p-6 sm:p-7 border border-[#fce7f3] shadow-xs relative overflow-hidden space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#ec4899] to-[#db2777] text-white flex items-center justify-center shadow-md shrink-0">
              <Building2 className="w-7 h-7" />
            </div>

            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-xl sm:text-2xl font-black text-[#1f1619] tracking-tight">
                  {currentClubName}
                </h1>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] font-black flex items-center gap-1 shadow-2xs">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" />
                  <span>Verified Club</span>
                </span>
              </div>
              <p className="text-xs text-[#6b555c] mt-0.5">
                Head Coach Portal • Roster Management, Event Scores, Video Reviews & Progress Analytics
              </p>
            </div>
          </div>

          {/* Quick Header Actions: Add Gymnast & Role Switcher */}
          <div className="flex items-center gap-2 flex-wrap">
            <button
              id="btn-open-add-gymnast"
              onClick={() => setShowAddGymnastModal(true)}
              className="py-2.5 px-4 rounded-full bg-gradient-to-r from-[#ec4899] to-[#db2777] hover:opacity-95 text-white text-xs font-black shadow-md shadow-pink-500/25 flex items-center gap-1.5 active:scale-98 transition-all"
            >
              <Plus className="w-4 h-4" />
              <span>Add Gymnast</span>
            </button>

            {/* Quick Role Perspective Switcher */}
            <div className="flex items-center p-1 rounded-full bg-[#fff5f8] border border-[#fce7f3] text-xs font-bold">
              <button
                type="button"
                onClick={() => {
                  setUserRole('GYMNAST');
                  setCurrentTab('home');
                }}
                className={`py-1.5 px-3 rounded-full text-[11px] transition-all ${
                  userRole === 'GYMNAST'
                    ? 'bg-white text-[#db2777] shadow-xs font-black'
                    : 'text-[#6b555c] hover:text-[#1f1619]'
                }`}
              >
                🤸 Gymnast View
              </button>
              <button
                type="button"
                onClick={() => setUserRole('COACH')}
                className={`py-1.5 px-3 rounded-full text-[11px] transition-all ${
                  userRole !== 'GYMNAST'
                    ? 'bg-[#ec4899] text-white shadow-xs font-black'
                    : 'text-[#6b555c] hover:text-[#1f1619]'
                }`}
              >
                📋 Coach View
              </button>
            </div>
          </div>
        </div>

        {/* 4 Overview Statistics Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          <div className="p-3.5 rounded-2xl bg-[#fff9fb] border border-[#fce7f3] flex flex-col justify-between">
            <span className="text-[10px] font-black uppercase text-[#db2777] tracking-wider">
              Club Roster
            </span>
            <div className="flex items-baseline gap-1.5 mt-1">
              <span className="text-2xl font-black text-[#1f1619]">{totalGymnasts}</span>
              <span className="text-xs text-[#6b555c]">Athletes</span>
            </div>
            <span className="text-[10px] text-[#6b555c] mt-0.5">USAG Levels 3–7</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-[#fffdf0] border border-[#fef08a] flex flex-col justify-between">
            <span className="text-[10px] font-black uppercase text-[#854d0e] tracking-wider">
              Evidence Reviews
            </span>
            <div className="flex items-baseline gap-1.5 mt-1">
              <span className="text-2xl font-black text-[#854d0e]">{pendingSubmissionsCount}</span>
              <span className="text-xs text-[#854d0e]">Pending</span>
            </div>
            <span className="text-[10px] text-[#854d0e]">Videos to verify</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-[#f0fdf4] border border-emerald-200 flex flex-col justify-between">
            <span className="text-[10px] font-black uppercase text-emerald-800 tracking-wider">
              Practice Drills
            </span>
            <div className="flex items-baseline gap-1.5 mt-1">
              <span className="text-2xl font-black text-emerald-700">{activePracticeCount}</span>
              <span className="text-xs text-emerald-700">Active</span>
            </div>
            <span className="text-[10px] text-emerald-700">Areas under practice</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-[#fff5f8] border border-[#fce7f3] flex flex-col justify-between">
            <span className="text-[10px] font-black uppercase text-[#db2777] tracking-wider">
              Team All-Around Avg
            </span>
            <div className="flex items-baseline gap-1.5 mt-1">
              <span className="text-2xl font-black text-[#db2777]">{avgAllAround}</span>
              <span className="text-xs text-[#6b555c]">/ 40.0</span>
            </div>
            <span className="text-[10px] text-[#6b555c]">Vault, Bars, Beam, Floor</span>
          </div>
        </div>
      </section>

      {/* 2. ROSTER SEARCH & LEVEL FILTERS */}
      <div className="space-y-3">
        <div className="flex flex-col sm:flex-row gap-2.5">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              id="input-roster-search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search gymnast by name or level..."
              className="w-full pl-10 pr-9 py-2.5 rounded-2xl bg-white border border-[#fce7f3] text-xs font-semibold focus:ring-2 focus:ring-[#ec4899] focus:outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Quick Filter: Pending Reviews vs Needing Practice */}
          <div className="flex p-1 bg-[#fff5f8] rounded-2xl border border-[#fce7f3] text-xs font-bold shrink-0">
            <button
              onClick={() => setStatusFilter('ALL')}
              className={`py-2 px-3 rounded-xl transition-all ${
                statusFilter === 'ALL'
                  ? 'bg-white text-[#db2777] shadow-xs font-black'
                  : 'text-[#6b555c] hover:text-[#1f1619]'
              }`}
            >
              All Athletes ({rosterGymnasts.length})
            </button>
            <button
              onClick={() => setStatusFilter('PENDING_REVIEW')}
              className={`py-2 px-3 rounded-xl transition-all flex items-center gap-1 ${
                statusFilter === 'PENDING_REVIEW'
                  ? 'bg-white text-[#db2777] shadow-xs font-black'
                  : 'text-[#6b555c] hover:text-[#1f1619]'
              }`}
            >
              <Clock className="w-3.5 h-3.5 text-amber-500" />
              <span>Pending Reviews ({pendingSubmissionsCount})</span>
            </button>
          </div>
        </div>

        {/* Level Filter Bar */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
          <span className="text-[11px] font-bold text-[#6b555c] shrink-0 mr-1">USAG Level:</span>
          {(['ALL', 3, 4, 5, 6, 7] as const).map((lvl) => (
            <button
              key={lvl}
              onClick={() => setLevelFilter(lvl)}
              className={`py-1.5 px-3 rounded-xl text-xs font-bold transition-all shrink-0 ${
                levelFilter === lvl
                  ? 'bg-[#ec4899] text-white shadow-xs font-extrabold'
                  : 'bg-white text-[#6b555c] border border-[#fce7f3] hover:bg-[#fff5f8]'
              }`}
            >
              {lvl === 'ALL' ? 'All Levels' : `Level ${lvl}`}
            </button>
          ))}
        </div>
      </div>

      {/* 3. ROSTER GYMNAST CARDS GRID */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-black text-[#1f1619] tracking-tight">
            Gymnast Roster & Athlete Profiles ({filteredRoster.length})
          </h2>
          <span className="text-xs text-[#6b555c]">
            Tap any gymnast to inspect scores, charts, and video tests
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredRoster.map((gymnast) => {
            const pendingForGymnast = gymnast.evidenceSubmissions.filter((s) => s.status === 'AWAITING_REVIEW').length;
            const completionPct = Math.round((gymnast.completedSkillsCount / gymnast.totalSkillsCount) * 100);

            return (
              <article
                key={gymnast.id}
                id={`card-roster-gymnast-${gymnast.id}`}
                className="bg-white rounded-3xl border border-[#fce7f3] shadow-xs p-5 hover:border-pink-300 transition-all flex flex-col justify-between space-y-4 hover:shadow-md group"
              >
                <div>
                  {/* Gymnast Profile Header */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="relative shrink-0">
                        <img
                          src={gymnast.avatar}
                          alt={gymnast.name}
                          className="w-14 h-14 rounded-full object-cover ring-2 ring-[#ec4899]/30 border-2 border-white shadow-2xs"
                        />
                        <span className="absolute -bottom-1 -right-1 px-2 py-0.2 bg-[#ec4899] text-white text-[10px] font-black rounded-full border border-white">
                          L{gymnast.level}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-base font-black text-[#1f1619] group-hover:text-[#db2777] transition-colors">
                          {gymnast.name}
                        </h3>
                        <p className="text-xs text-[#6b555c]">
                          Age {gymnast.age} • USAG Level {gymnast.level}
                        </p>
                        <span className="text-[10px] text-[#db2777] font-semibold block mt-0.5">
                          {gymnast.eventsFocus.join(' • ')}
                        </span>
                      </div>
                    </div>

                    {pendingForGymnast > 0 && (
                      <span className="px-2 py-0.5 rounded-full bg-amber-50 border border-amber-300 text-amber-800 text-[10px] font-black flex items-center gap-1 animate-pulse shrink-0">
                        <Clock className="w-3 h-3 text-amber-600" />
                        <span>{pendingForGymnast} Video</span>
                      </span>
                    )}
                  </div>

                  {/* Skills Completion Progress */}
                  <div className="mt-3.5 space-y-1">
                    <div className="flex justify-between text-[11px] font-bold">
                      <span className="text-[#6b555c]">Curriculum Skills</span>
                      <span className="text-[#db2777]">{gymnast.completedSkillsCount} / {gymnast.totalSkillsCount} ({completionPct}%)</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-[#fff0f5] border border-[#fce7f3] overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#ec4899] to-[#f59e0b] transition-all"
                        style={{ width: `${completionPct}%` }}
                      />
                    </div>
                  </div>

                  {/* Personal Best Event Scores Quick Badges */}
                  <div className="mt-3 p-2.5 rounded-2xl bg-[#fffdf0] border border-[#fef08a] grid grid-cols-5 gap-1 text-center text-[10px]">
                    <div>
                      <span className="text-[#854d0e] font-bold block">VT</span>
                      <span className="font-black text-[#1f1619]">{gymnast.personalBests.vault.score.toFixed(2)}</span>
                    </div>
                    <div>
                      <span className="text-[#854d0e] font-bold block">UB</span>
                      <span className="font-black text-[#1f1619]">{gymnast.personalBests.bars.score.toFixed(2)}</span>
                    </div>
                    <div>
                      <span className="text-[#854d0e] font-bold block">BB</span>
                      <span className="font-black text-[#1f1619]">{gymnast.personalBests.beam.score.toFixed(2)}</span>
                    </div>
                    <div>
                      <span className="text-[#854d0e] font-bold block">FX</span>
                      <span className="font-black text-[#1f1619]">{gymnast.personalBests.floor.score.toFixed(2)}</span>
                    </div>
                    <div className="border-l border-amber-200">
                      <span className="text-[#db2777] font-black block">AA</span>
                      <span className="font-black text-[#db2777]">{gymnast.personalBests.allAround.score.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {/* Open Gymnast Details Action */}
                <button
                  id={`btn-manage-gymnast-${gymnast.id}`}
                  onClick={() => {
                    setActiveGymnast(gymnast);
                    setActiveGymnastTab('SCORES');
                  }}
                  className="w-full py-2.5 px-3 rounded-full bg-[#fff5f8] hover:bg-[#fce7f3] border border-[#fce7f3] text-[#db2777] text-xs font-black transition-all flex items-center justify-center gap-1.5 active:scale-98"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Performance History</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </article>
            );
          })}
        </div>
      </section>

      {/* 4. GYMNAST DETAILED PROFILE & PERFORMANCE MODAL */}
      {activeGymnast && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1f1619]/70 backdrop-blur-xs p-3 sm:p-4">
          <div className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-[#fce7f3] max-h-[94vh] overflow-y-auto flex flex-col justify-between animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header: Gymnast summary */}
            <div className="p-5 sm:p-6 bg-gradient-to-r from-[#fff5f8] via-[#fffdf0] to-white border-b border-[#fce7f3] rounded-t-3xl">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <img
                    src={activeGymnast.avatar}
                    alt={activeGymnast.name}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover ring-4 ring-[#ec4899]/30 border-2 border-white shadow-md shrink-0"
                  />
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-xl sm:text-2xl font-black text-[#1f1619]">
                        {activeGymnast.name}
                      </h3>
                      <span className="px-3 py-0.5 rounded-full bg-[#ec4899] text-white text-xs font-black">
                        USAG Level {activeGymnast.level}
                      </span>
                    </div>
                    <p className="text-xs text-[#6b555c] mt-0.5">
                      {activeGymnast.clubName} • Age {activeGymnast.age} • Events: {activeGymnast.eventsFocus.join(', ')}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setActiveGymnast(null)}
                  className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-white/80"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Personal Best Event Scores Banner */}
              <div className="mt-4 p-3 rounded-2xl bg-white border border-[#fce7f3] shadow-2xs grid grid-cols-5 gap-2 text-center text-xs">
                <div className="p-1.5 rounded-xl bg-[#fff9fb]">
                  <span className="text-[10px] font-black text-[#6b555c] block">Vault PB</span>
                  <span className="text-sm font-black text-[#1f1619]">{activeGymnast.personalBests.vault.score.toFixed(3)}</span>
                </div>
                <div className="p-1.5 rounded-xl bg-[#fff9fb]">
                  <span className="text-[10px] font-black text-[#6b555c] block">Bars PB</span>
                  <span className="text-sm font-black text-[#1f1619]">{activeGymnast.personalBests.bars.score.toFixed(3)}</span>
                </div>
                <div className="p-1.5 rounded-xl bg-[#fff9fb]">
                  <span className="text-[10px] font-black text-[#6b555c] block">Beam PB</span>
                  <span className="text-sm font-black text-[#1f1619]">{activeGymnast.personalBests.beam.score.toFixed(3)}</span>
                </div>
                <div className="p-1.5 rounded-xl bg-[#fff9fb]">
                  <span className="text-[10px] font-black text-[#6b555c] block">Floor PB</span>
                  <span className="text-sm font-black text-[#1f1619]">{activeGymnast.personalBests.floor.score.toFixed(3)}</span>
                </div>
                <div className="p-1.5 rounded-xl bg-[#fef9c3] border border-[#fef08a]">
                  <span className="text-[10px] font-black text-[#854d0e] block">All-Around 🏆</span>
                  <span className="text-sm font-black text-[#db2777]">{activeGymnast.personalBests.allAround.score.toFixed(3)}</span>
                </div>
              </div>

              {/* Tab Navigation inside modal */}
              <div className="flex p-1 bg-white/80 rounded-2xl border border-[#fce7f3] mt-4 overflow-x-auto no-scrollbar gap-1 text-xs font-bold">
                <button
                  onClick={() => setActiveGymnastTab('SCORES')}
                  className={`py-2 px-3 rounded-xl transition-all shrink-0 ${
                    activeGymnastTab === 'SCORES'
                      ? 'bg-[#ec4899] text-white shadow-xs font-black'
                      : 'text-[#6b555c] hover:text-[#1f1619]'
                  }`}
                >
                  🏅 Competition Scores ({activeGymnast.competitionHistory.length})
                </button>
                <button
                  onClick={() => setActiveGymnastTab('CHARTS')}
                  className={`py-2 px-3 rounded-xl transition-all shrink-0 ${
                    activeGymnastTab === 'CHARTS'
                      ? 'bg-[#ec4899] text-white shadow-xs font-black'
                      : 'text-[#6b555c] hover:text-[#1f1619]'
                  }`}
                >
                  📈 Progress Trend Charts
                </button>
                <button
                  onClick={() => setActiveGymnastTab('EVIDENCE')}
                  className={`py-2 px-3 rounded-xl transition-all shrink-0 flex items-center gap-1 ${
                    activeGymnastTab === 'EVIDENCE'
                      ? 'bg-[#ec4899] text-white shadow-xs font-black'
                      : 'text-[#6b555c] hover:text-[#1f1619]'
                  }`}
                >
                  <Video className="w-3.5 h-3.5" />
                  <span>Video Reviews ({activeGymnast.evidenceSubmissions.length})</span>
                </button>
                <button
                  onClick={() => setActiveGymnastTab('PRACTICE')}
                  className={`py-2 px-3 rounded-xl transition-all shrink-0 ${
                    activeGymnastTab === 'PRACTICE'
                      ? 'bg-[#ec4899] text-white shadow-xs font-black'
                      : 'text-[#6b555c] hover:text-[#1f1619]'
                  }`}
                >
                  🎯 Areas for Practice ({activeGymnast.practiceAreas.length})
                </button>
                <button
                  onClick={() => setActiveGymnastTab('NOTES')}
                  className={`py-2 px-3 rounded-xl transition-all shrink-0 ${
                    activeGymnastTab === 'NOTES'
                      ? 'bg-[#ec4899] text-white shadow-xs font-black'
                      : 'text-[#6b555c] hover:text-[#1f1619]'
                  }`}
                >
                  📝 Coach Notes ({activeGymnast.coachNotes.length})
                </button>
              </div>
            </div>

            {/* Modal Body: Active Tab Content */}
            <div className="p-5 sm:p-6 space-y-4 flex-1">
              {/* TAB 1: COMPETITION RESULTS & SCORES */}
              {activeGymnastTab === 'SCORES' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-base font-black text-[#1f1619]">
                        Recorded Meets & Event Scores
                      </h4>
                      <p className="text-xs text-[#6b555c]">
                        Vault, Uneven Bars, Balance Beam, Floor Exercise and All-Around tallies.
                      </p>
                    </div>

                    <button
                      id="btn-add-comp-score"
                      onClick={() => setShowAddScoreModal(true)}
                      className="py-2 px-3.5 rounded-full bg-[#fef9c3] hover:bg-[#fde047] border border-[#fef08a] text-[#854d0e] text-xs font-black shadow-xs flex items-center gap-1.5 transition-all"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Record New Score</span>
                    </button>
                  </div>

                  {activeGymnast.competitionHistory.length === 0 ? (
                    <div className="p-6 text-center bg-[#fff9fb] rounded-2xl border border-[#fce7f3] text-xs text-[#6b555c]">
                      No competition results logged yet. Tap "Record New Score" to log scores from recent meets!
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {activeGymnast.competitionHistory.map((meet) => (
                        <div
                          key={meet.id}
                          className="p-4 rounded-2xl bg-white border border-[#fce7f3] shadow-xs space-y-2.5"
                        >
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#fce7f3] pb-2">
                            <div>
                              <div className="flex items-center gap-2">
                                <h5 className="text-sm font-black text-[#1f1619]">{meet.meetName}</h5>
                                {meet.place && (
                                  <span className="px-2 py-0.5 rounded-full bg-[#fef9c3] text-[#854d0e] border border-[#fef08a] text-[10px] font-bold">
                                    {meet.place}
                                  </span>
                                )}
                              </div>
                              <span className="text-[11px] text-[#6b555c]">
                                {meet.date} • USAG Level {meet.level}
                              </span>
                            </div>

                            <div className="text-right">
                              <span className="text-xs text-[#6b555c] block">All-Around Total</span>
                              <span className="text-lg font-black text-[#db2777]">
                                {meet.allAroundScore.toFixed(3)}
                              </span>
                            </div>
                          </div>

                          {/* Event scores 4-box layout */}
                          <div className="grid grid-cols-4 gap-2 text-center text-xs">
                            <div className="p-2 rounded-xl bg-[#fff9fb] border border-pink-100">
                              <span className="text-[10px] text-[#6b555c] font-bold block">Vault</span>
                              <span className="text-xs font-black text-[#1f1619]">{meet.vaultScore.toFixed(3)}</span>
                            </div>
                            <div className="p-2 rounded-xl bg-[#fff9fb] border border-pink-100">
                              <span className="text-[10px] text-[#6b555c] font-bold block">Bars</span>
                              <span className="text-xs font-black text-[#1f1619]">{meet.barsScore.toFixed(3)}</span>
                            </div>
                            <div className="p-2 rounded-xl bg-[#fff9fb] border border-pink-100">
                              <span className="text-[10px] text-[#6b555c] font-bold block">Beam</span>
                              <span className="text-xs font-black text-[#1f1619]">{meet.beamScore.toFixed(3)}</span>
                            </div>
                            <div className="p-2 rounded-xl bg-[#fff9fb] border border-pink-100">
                              <span className="text-[10px] text-[#6b555c] font-bold block">Floor</span>
                              <span className="text-xs font-black text-[#1f1619]">{meet.floorScore.toFixed(3)}</span>
                            </div>
                          </div>

                          {meet.notes && (
                            <p className="text-[11px] text-[#6b555c] italic bg-[#fffdf0] p-2 rounded-xl border border-[#fef08a]">
                              "{meet.notes}"
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* TAB 2: PROGRESS CHARTS OVER TIME */}
              {activeGymnastTab === 'CHARTS' && (
                <div className="space-y-4">
                  <div>
                    <h4 className="text-base font-black text-[#1f1619]">
                      Performance Progression & Score Improvement
                    </h4>
                    <p className="text-xs text-[#6b555c]">
                      Visual score trajectory across competitive meets.
                    </p>
                  </div>

                  {activeGymnast.competitionHistory.length === 0 ? (
                    <div className="p-6 text-center bg-[#fff9fb] rounded-2xl border border-[#fce7f3] text-xs text-[#6b555c]">
                      Log at least one competition to generate visual trend charts.
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {/* Visual Chart Card */}
                      <div className="p-5 rounded-2xl bg-gradient-to-br from-[#fffdf0] via-white to-[#fff5f8] border border-[#fce7f3] space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-[#1f1619] flex items-center gap-1.5">
                            <TrendingUp className="w-4 h-4 text-[#db2777]" />
                            <span>All-Around Score Trajectory</span>
                          </span>
                          <span className="text-xs font-extrabold text-[#db2777]">
                            Current Peak: {activeGymnast.personalBests.allAround.score.toFixed(3)}
                          </span>
                        </div>

                        {/* Interactive Bar Chart Representation */}
                        <div className="h-44 flex items-end justify-around gap-2 pt-6 pb-2 border-b border-gray-200">
                          {activeGymnast.competitionHistory.slice().reverse().map((meet, idx) => {
                            const heightPct = Math.min(100, Math.max(30, ((meet.allAroundScore - 30) / 10) * 100));
                            return (
                              <div key={meet.id} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                                <span className="text-[10px] font-black text-[#db2777]">
                                  {meet.allAroundScore.toFixed(2)}
                                </span>
                                <div
                                  className="w-full max-w-[48px] rounded-t-xl bg-gradient-to-t from-[#ec4899] to-[#f472b6] shadow-2xs transition-all duration-500 hover:brightness-110"
                                  style={{ height: `${heightPct}%` }}
                                />
                                <span className="text-[9px] text-[#6b555c] truncate max-w-[70px] text-center">
                                  {meet.date.split(',')[0]}
                                </span>
                              </div>
                            );
                          })}
                        </div>

                        {/* Event breakdown averages */}
                        <div className="grid grid-cols-4 gap-2 text-center text-xs">
                          <div className="p-2.5 rounded-xl bg-white border border-[#fce7f3]">
                            <span className="text-[10px] text-[#6b555c] block font-bold">Vault Avg</span>
                            <span className="font-black text-[#1f1619]">
                              {(activeGymnast.competitionHistory.reduce((s, m) => s + m.vaultScore, 0) / activeGymnast.competitionHistory.length).toFixed(2)}
                            </span>
                          </div>
                          <div className="p-2.5 rounded-xl bg-white border border-[#fce7f3]">
                            <span className="text-[10px] text-[#6b555c] block font-bold">Bars Avg</span>
                            <span className="font-black text-[#1f1619]">
                              {(activeGymnast.competitionHistory.reduce((s, m) => s + m.barsScore, 0) / activeGymnast.competitionHistory.length).toFixed(2)}
                            </span>
                          </div>
                          <div className="p-2.5 rounded-xl bg-white border border-[#fce7f3]">
                            <span className="text-[10px] text-[#6b555c] block font-bold">Beam Avg</span>
                            <span className="font-black text-[#1f1619]">
                              {(activeGymnast.competitionHistory.reduce((s, m) => s + m.beamScore, 0) / activeGymnast.competitionHistory.length).toFixed(2)}
                            </span>
                          </div>
                          <div className="p-2.5 rounded-xl bg-white border border-[#fce7f3]">
                            <span className="text-[10px] text-[#6b555c] block font-bold">Floor Avg</span>
                            <span className="font-black text-[#1f1619]">
                              {(activeGymnast.competitionHistory.reduce((s, m) => s + m.floorScore, 0) / activeGymnast.competitionHistory.length).toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* TAB 3: VIDEO EVIDENCE SUBMISSIONS & COACH EVALUATION */}
              {activeGymnastTab === 'EVIDENCE' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-base font-black text-[#1f1619]">
                        Skill-Test Video Evidence Submissions
                      </h4>
                      <p className="text-xs text-[#6b555c]">
                        Review routines recorded by gymnast, stamp verified or assign drill corrections.
                      </p>
                    </div>
                  </div>

                  {activeGymnast.evidenceSubmissions.length === 0 ? (
                    <div className="p-6 text-center bg-[#fff9fb] rounded-2xl border border-[#fce7f3] text-xs text-[#6b555c]">
                      No video submissions uploaded by this gymnast yet.
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {activeGymnast.evidenceSubmissions.map((sub) => {
                        const isAwaiting = sub.status === 'AWAITING_REVIEW';
                        const isApproved = sub.status === 'APPROVED';

                        return (
                          <div
                            key={sub.id}
                            className={`p-4 rounded-2xl border transition-all ${
                              isAwaiting
                                ? 'bg-amber-50/20 border-amber-200'
                                : 'bg-white border-[#fce7f3]'
                            }`}
                          >
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                              <div className="space-y-1">
                                <div className="flex items-center gap-2">
                                  <h5 className="text-sm font-black text-[#1f1619]">
                                    {sub.skillName}
                                  </h5>
                                  <span
                                    className={`px-2 py-0.5 rounded-full text-[10px] font-black ${
                                      isApproved
                                        ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                                        : 'bg-amber-50 text-amber-800 border border-amber-200'
                                    }`}
                                  >
                                    {isApproved ? 'Approved & Stamped ✓' : 'Awaiting Review ⏳'}
                                  </span>
                                </div>
                                <div className="flex items-center gap-2 text-xs text-[#6b555c]">
                                  <Video className="w-3.5 h-3.5 text-[#ec4899]" />
                                  <span className="font-mono text-[11px] truncate max-w-xs">{sub.videoName}</span>
                                  <span>• Submitted {sub.submittedDate}</span>
                                </div>
                              </div>

                              {/* Review Action Trigger */}
                              {isAwaiting && (
                                <button
                                  onClick={() => setReviewingSubmissionId(sub.id)}
                                  className="py-2 px-3.5 rounded-full bg-[#ec4899] hover:bg-[#db2777] text-white text-xs font-bold transition-all shadow-xs shrink-0"
                                >
                                  Evaluate Video Routine
                                </button>
                              )}
                            </div>

                            {/* Coach Feedback Box */}
                            {sub.coachFeedback && (
                              <div className="mt-2.5 p-2.5 rounded-xl bg-[#fffdf0] border border-[#fef08a] text-xs text-[#854d0e]">
                                <strong>Coach Stamp Feedback:</strong> {sub.coachFeedback}
                              </div>
                            )}

                            {/* Active Evaluation Drawer */}
                            {reviewingSubmissionId === sub.id && (
                              <div className="mt-3 p-3.5 rounded-2xl bg-white border-2 border-[#ec4899] space-y-3 animate-in fade-in">
                                <label className="text-xs font-bold text-[#1f1619] block">
                                  Add Coach Critique & Evaluation Notes:
                                </label>
                                <textarea
                                  rows={2}
                                  value={coachReviewFeedback}
                                  onChange={(e) => setCoachReviewFeedback(e.target.value)}
                                  className="w-full px-3 py-2 rounded-xl border border-[#fce7f3] text-xs font-medium focus:ring-2 focus:ring-[#ec4899] focus:outline-none"
                                />

                                <div className="flex items-center justify-end gap-2">
                                  <button
                                    type="button"
                                    onClick={() => setReviewingSubmissionId(null)}
                                    className="py-1.5 px-3 rounded-full text-xs font-bold text-[#6b555c]"
                                  >
                                    Cancel
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => handleReviewEvidence(sub.id, 'NEEDS_WORK')}
                                    className="py-1.5 px-3.5 rounded-full bg-[#fff0f5] border border-pink-200 text-[#db2777] text-xs font-bold hover:bg-[#fce7f3]"
                                  >
                                    Needs Drill Practice
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => handleReviewEvidence(sub.id, 'APPROVED')}
                                    className="py-1.5 px-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black shadow-xs flex items-center gap-1"
                                  >
                                    <Check className="w-3.5 h-3.5" />
                                    <span>Approve & Verify Skill ✓</span>
                                  </button>
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}

              {/* TAB 4: AREAS NEEDING PRACTICE & ASSIGNED DRILLS */}
              {activeGymnastTab === 'PRACTICE' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-base font-black text-[#1f1619]">
                        Identified Practice Areas & Custom Drills
                      </h4>
                      <p className="text-xs text-[#6b555c]">
                        Assign apparatus drills to fix execution deductions before the next meet.
                      </p>
                    </div>

                    <button
                      id="btn-assign-practice-drill"
                      onClick={() => setShowAddPracticeModal(true)}
                      className="py-2 px-3.5 rounded-full bg-[#fef9c3] hover:bg-[#fde047] border border-[#fef08a] text-[#854d0e] text-xs font-black shadow-xs flex items-center gap-1.5 transition-all"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Assign Practice Drill</span>
                    </button>
                  </div>

                  {activeGymnast.practiceAreas.length === 0 ? (
                    <div className="p-6 text-center bg-[#fff9fb] rounded-2xl border border-[#fce7f3] text-xs text-[#6b555c]">
                      No active practice drills assigned. Tap above to assign a targeted drill.
                    </div>
                  ) : (
                    <div className="space-y-2.5">
                      {activeGymnast.practiceAreas.map((focus) => (
                        <div
                          key={focus.id}
                          className="p-3.5 rounded-2xl bg-white border border-[#fce7f3] shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                        >
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="px-2 py-0.2 rounded-md bg-[#fff0f5] text-[#db2777] font-black text-[10px] uppercase">
                                {focus.apparatus}
                              </span>
                              <h5 className="text-xs font-black text-[#1f1619]">
                                {focus.title}
                              </h5>
                              <span
                                className={`px-2 py-0.2 rounded-full text-[9px] font-black uppercase ${
                                  focus.priority === 'HIGH'
                                    ? 'bg-rose-50 text-rose-700 border border-rose-200'
                                    : 'bg-amber-50 text-amber-800 border border-amber-200'
                                }`}
                              >
                                {focus.priority} Priority
                              </span>
                            </div>
                            <p className="text-xs text-[#6b555c] leading-relaxed">
                              {focus.description}
                            </p>
                          </div>

                          {/* Status toggle buttons */}
                          <div className="flex items-center gap-1.5 shrink-0">
                            {(['IN_PROGRESS', 'IMPROVED', 'MASTERED'] as const).map((st) => (
                              <button
                                key={st}
                                onClick={() => updatePracticeFocusStatus(activeGymnast.id, focus.id, st)}
                                className={`py-1 px-2.5 rounded-lg text-[10px] font-bold transition-all border ${
                                  focus.status === st
                                    ? 'bg-emerald-600 text-white border-emerald-600 shadow-2xs'
                                    : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100'
                                }`}
                              >
                                {st === 'IN_PROGRESS' ? 'In Progress' : st === 'IMPROVED' ? 'Improved' : 'Mastered ✓'}
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* TAB 5: COACH COMMENTS & PERFORMANCE NOTES */}
              {activeGymnastTab === 'NOTES' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-base font-black text-[#1f1619]">
                        Coach Performance Critique & Notes
                      </h4>
                      <p className="text-xs text-[#6b555c]">
                        Log private training notes on execution, artistry, and readiness.
                      </p>
                    </div>

                    <button
                      id="btn-add-coach-note"
                      onClick={() => setShowAddNoteModal(true)}
                      className="py-2 px-3.5 rounded-full bg-[#fef9c3] hover:bg-[#fde047] border border-[#fef08a] text-[#854d0e] text-xs font-black shadow-xs flex items-center gap-1.5 transition-all"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add Performance Note</span>
                    </button>
                  </div>

                  {activeGymnast.coachNotes.length === 0 ? (
                    <div className="p-6 text-center bg-[#fff9fb] rounded-2xl border border-[#fce7f3] text-xs text-[#6b555c]">
                      No coach notes logged yet.
                    </div>
                  ) : (
                    <div className="space-y-2.5">
                      {activeGymnast.coachNotes.map((note) => (
                        <div
                          key={note.id}
                          className="p-3.5 rounded-2xl bg-[#fffdf0] border border-[#fef08a] space-y-1.5 shadow-2xs"
                        >
                          <div className="flex items-center justify-between text-xs">
                            <div className="flex items-center gap-2">
                              <span className="font-extrabold text-[#1f1619]">{note.coachName}</span>
                              <span className="px-2 py-0.2 rounded-md bg-white border border-[#fef08a] text-[10px] font-bold text-[#854d0e]">
                                {note.category}
                              </span>
                            </div>
                            <span className="text-[10px] text-[#6b555c]">{note.date}</span>
                          </div>
                          <p className="text-xs text-[#1f1619] leading-relaxed">
                            "{note.text}"
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-[#fce7f3] flex items-center justify-between bg-[#fff9fb] rounded-b-3xl">
              <span className="text-xs text-[#6b555c]">
                Roster Record ID: <strong className="font-mono">{activeGymnast.id}</strong>
              </span>

              <button
                onClick={() => setActiveGymnast(null)}
                className="py-2 px-5 rounded-full bg-[#1f1619] text-white text-xs font-bold hover:bg-[#33222a]"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 5. MODAL: RECORD NEW COMPETITION SCORE */}
      {showAddScoreModal && activeGymnast && (
        <div className="fixed inset-0 z-60 flex items-center justify-center bg-[#1f1619]/65 backdrop-blur-xs p-4">
          <div className="w-full max-w-md bg-white rounded-3xl p-6 shadow-2xl border border-[#fce7f3] space-y-4 animate-in fade-in">
            <div className="flex items-center justify-between border-b border-[#fce7f3] pb-3">
              <div>
                <h4 className="text-base font-black text-[#1f1619]">Record Meet Result</h4>
                <p className="text-xs text-[#6b555c]">For {activeGymnast.name} (L{activeGymnast.level})</p>
              </div>
              <button onClick={() => setShowAddScoreModal(false)} className="text-gray-400 hover:text-gray-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveScore} className="space-y-3.5">
              <div>
                <label className="text-xs font-bold text-[#1f1619] block mb-1">Competition / Meet Name *</label>
                <input
                  type="text"
                  required
                  value={newMeetName}
                  onChange={(e) => setNewMeetName(e.target.value)}
                  placeholder="e.g. Gymfest 3.0 Invitational"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#fce7f3] text-xs font-semibold focus:ring-2 focus:ring-[#ec4899] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <div>
                  <label className="text-xs font-bold text-[#1f1619] block mb-1">Meet Date</label>
                  <input
                    type="date"
                    value={newMeetDate}
                    onChange={(e) => setNewMeetDate(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-[#fce7f3] text-xs font-semibold focus:ring-2 focus:ring-[#ec4899] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-[#1f1619] block mb-1">Placement / Trophy</label>
                  <input
                    type="text"
                    value={meetPlace}
                    onChange={(e) => setMeetPlace(e.target.value)}
                    placeholder="1st Place Gold 🥇"
                    className="w-full px-3 py-2 rounded-xl border border-[#fce7f3] text-xs font-semibold focus:ring-2 focus:ring-[#ec4899] focus:outline-none"
                  />
                </div>
              </div>

              {/* Event Scores Breakdown */}
              <div className="p-3.5 rounded-2xl bg-[#fffdf0] border border-[#fef08a] space-y-2">
                <span className="text-[10px] font-black uppercase text-[#854d0e] block">
                  Event Scores (Max 10.0 per apparatus)
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <label className="text-[11px] font-bold text-[#1f1619] block">Vault Score</label>
                    <input
                      type="number"
                      step="0.025"
                      min="0"
                      max="10"
                      required
                      value={vaultScore}
                      onChange={(e) => setVaultScore(e.target.value)}
                      className="w-full px-3 py-1.5 rounded-lg border border-[#fef08a] text-xs font-black bg-white"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-bold text-[#1f1619] block">Uneven Bars</label>
                    <input
                      type="number"
                      step="0.025"
                      min="0"
                      max="10"
                      required
                      value={barsScore}
                      onChange={(e) => setBarsScore(e.target.value)}
                      className="w-full px-3 py-1.5 rounded-lg border border-[#fef08a] text-xs font-black bg-white"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-bold text-[#1f1619] block">Balance Beam</label>
                    <input
                      type="number"
                      step="0.025"
                      min="0"
                      max="10"
                      required
                      value={beamScore}
                      onChange={(e) => setBeamScore(e.target.value)}
                      className="w-full px-3 py-1.5 rounded-lg border border-[#fef08a] text-xs font-black bg-white"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-bold text-[#1f1619] block">Floor Exercise</label>
                    <input
                      type="number"
                      step="0.025"
                      min="0"
                      max="10"
                      required
                      value={floorScore}
                      onChange={(e) => setFloorScore(e.target.value)}
                      className="w-full px-3 py-1.5 rounded-lg border border-[#fef08a] text-xs font-black bg-white"
                    />
                  </div>
                </div>

                <div className="pt-2 border-t border-amber-200/80 flex items-center justify-between text-xs">
                  <span className="font-bold text-[#854d0e]">Computed All-Around:</span>
                  <span className="text-sm font-black text-[#db2777]">
                    {(
                      (parseFloat(vaultScore) || 0) +
                      (parseFloat(barsScore) || 0) +
                      (parseFloat(beamScore) || 0) +
                      (parseFloat(floorScore) || 0)
                    ).toFixed(3)}
                  </span>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-[#1f1619] block mb-1">Meet Routine Notes</label>
                <input
                  type="text"
                  value={meetNotes}
                  onChange={(e) => setMeetNotes(e.target.value)}
                  placeholder="e.g. Stuck vault, minor balance beam check on leap"
                  className="w-full px-3 py-2 rounded-xl border border-[#fce7f3] text-xs font-semibold focus:ring-2 focus:ring-[#ec4899] focus:outline-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowAddScoreModal(false)}
                  className="py-2 px-4 rounded-full text-xs font-bold text-[#6b555c]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="py-2.5 px-5 rounded-full bg-[#ec4899] hover:bg-[#db2777] text-white text-xs font-black shadow-md shadow-pink-500/25"
                >
                  Save Meet Score
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 6. MODAL: ASSIGN PRACTICE DRILL */}
      {showAddPracticeModal && activeGymnast && (
        <div className="fixed inset-0 z-60 flex items-center justify-center bg-[#1f1619]/65 backdrop-blur-xs p-4">
          <div className="w-full max-w-md bg-white rounded-3xl p-6 shadow-2xl border border-[#fce7f3] space-y-4 animate-in fade-in">
            <div className="flex items-center justify-between border-b border-[#fce7f3] pb-3">
              <div>
                <h4 className="text-base font-black text-[#1f1619]">Assign Practice Drill</h4>
                <p className="text-xs text-[#6b555c]">Targeted correction for {activeGymnast.name}</p>
              </div>
              <button onClick={() => setShowAddPracticeModal(false)} className="text-gray-400 hover:text-gray-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSavePractice} className="space-y-3.5">
              <div>
                <label className="text-xs font-bold text-[#1f1619] block mb-1">Target Apparatus</label>
                <div className="grid grid-cols-4 gap-2">
                  {(['VAULT', 'BARS', 'BEAM', 'FLOOR'] as const).map((app) => (
                    <button
                      key={app}
                      type="button"
                      onClick={() => setPracticeApparatus(app)}
                      className={`py-2 rounded-xl text-xs font-bold transition-all border ${
                        practiceApparatus === app
                          ? 'bg-[#ec4899] text-white border-[#ec4899] shadow-xs'
                          : 'bg-white text-[#6b555c] border-[#fce7f3]'
                      }`}
                    >
                      {app}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-[#1f1619] block mb-1">Drill / Focus Title *</label>
                <input
                  type="text"
                  required
                  value={practiceTitle}
                  onChange={(e) => setPracticeTitle(e.target.value)}
                  placeholder="e.g. Uneven Bars Cast to Handstand"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#fce7f3] text-xs font-semibold focus:ring-2 focus:ring-[#ec4899] focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-[#1f1619] block mb-1">Correction Instructions & Notes</label>
                <textarea
                  rows={2}
                  value={practiceDescription}
                  onChange={(e) => setPracticeDescription(e.target.value)}
                  placeholder="Keep arms locked, push toes back, freeze 2 seconds at top vertical."
                  className="w-full px-3 py-2 rounded-xl border border-[#fce7f3] text-xs font-medium focus:ring-2 focus:ring-[#ec4899] focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-[#1f1619] block mb-1">Priority Level</label>
                <div className="grid grid-cols-3 gap-2">
                  {(['HIGH', 'MEDIUM', 'REFINEMENT'] as const).map((pr) => (
                    <button
                      key={pr}
                      type="button"
                      onClick={() => setPracticePriority(pr)}
                      className={`py-2 rounded-xl text-xs font-bold transition-all border ${
                        practicePriority === pr
                          ? 'bg-[#fef9c3] text-[#854d0e] border-[#fef08a] ring-2 ring-amber-200'
                          : 'bg-white text-[#6b555c] border-[#fce7f3]'
                      }`}
                    >
                      {pr}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowAddPracticeModal(false)}
                  className="py-2 px-4 rounded-full text-xs font-bold text-[#6b555c]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="py-2.5 px-5 rounded-full bg-[#ec4899] hover:bg-[#db2777] text-white text-xs font-black shadow-md shadow-pink-500/25"
                >
                  Assign Drill
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 7. MODAL: ADD COACH NOTE */}
      {showAddNoteModal && activeGymnast && (
        <div className="fixed inset-0 z-60 flex items-center justify-center bg-[#1f1619]/65 backdrop-blur-xs p-4">
          <div className="w-full max-w-md bg-white rounded-3xl p-6 shadow-2xl border border-[#fce7f3] space-y-4 animate-in fade-in">
            <div className="flex items-center justify-between border-b border-[#fce7f3] pb-3">
              <div>
                <h4 className="text-base font-black text-[#1f1619]">Add Coach Performance Note</h4>
                <p className="text-xs text-[#6b555c]">Feedback for {activeGymnast.name}</p>
              </div>
              <button onClick={() => setShowAddNoteModal(false)} className="text-gray-400 hover:text-gray-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveNote} className="space-y-3.5">
              <div>
                <label className="text-xs font-bold text-[#1f1619] block mb-1">Category</label>
                <select
                  value={noteCategory}
                  onChange={(e) => setNoteCategory(e.target.value as CoachNote['category'])}
                  className="w-full px-3 py-2.5 rounded-xl border border-[#fce7f3] text-xs font-bold text-[#1f1619] focus:outline-none focus:ring-2 focus:ring-[#ec4899]"
                >
                  <option value="Form & Execution">Form & Execution</option>
                  <option value="Conditioning">Conditioning & Strength</option>
                  <option value="Artistry">Artistry & Choreography</option>
                  <option value="Competition Prep">Competition Prep</option>
                  <option value="Mental Focus">Mental Focus & Poise</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-[#1f1619] block mb-1">Observation / Performance Note *</label>
                <textarea
                  rows={3}
                  required
                  value={noteText}
                  onChange={(e) => setNoteText(e.target.value)}
                  placeholder="Record constructive coach critique, routine feedback, or milestone praise..."
                  className="w-full px-3 py-2 rounded-xl border border-[#fce7f3] text-xs font-medium focus:ring-2 focus:ring-[#ec4899] focus:outline-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowAddNoteModal(false)}
                  className="py-2 px-4 rounded-full text-xs font-bold text-[#6b555c]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="py-2.5 px-5 rounded-full bg-[#ec4899] hover:bg-[#db2777] text-white text-xs font-black shadow-md shadow-pink-500/25"
                >
                  Save Note
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 8. MODAL: ADD GYMNAST TO ROSTER */}
      {showAddGymnastModal && (
        <div className="fixed inset-0 z-60 flex items-center justify-center bg-[#1f1619]/65 backdrop-blur-xs p-4">
          <div className="w-full max-w-md bg-white rounded-3xl p-6 shadow-2xl border border-[#fce7f3] space-y-4 animate-in fade-in">
            <div className="flex items-center justify-between border-b border-[#fce7f3] pb-3">
              <div>
                <h4 className="text-base font-black text-[#1f1619]">Add Athlete to Club Roster</h4>
                <p className="text-xs text-[#6b555c]">Enroll a new gymnast into {currentClubName}</p>
              </div>
              <button onClick={() => setShowAddGymnastModal(false)} className="text-gray-400 hover:text-gray-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateGymnast} className="space-y-3.5">
              <div>
                <label className="text-xs font-bold text-[#1f1619] block mb-1">Gymnast Full Name *</label>
                <input
                  type="text"
                  required
                  value={newGymnastName}
                  onChange={(e) => setNewGymnastName(e.target.value)}
                  placeholder="e.g. Folake Adeniyi"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#fce7f3] text-xs font-semibold focus:ring-2 focus:ring-[#ec4899] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <div>
                  <label className="text-xs font-bold text-[#1f1619] block mb-1">Age</label>
                  <input
                    type="number"
                    min="4"
                    max="25"
                    value={newGymnastAge}
                    onChange={(e) => setNewGymnastAge(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-xl border border-[#fce7f3] text-xs font-semibold focus:ring-2 focus:ring-[#ec4899] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-[#1f1619] block mb-1">Starting USAG Level</label>
                  <select
                    value={newGymnastLevel}
                    onChange={(e) => setNewGymnastLevel(Number(e.target.value) as USAGLevel)}
                    className="w-full px-3 py-2 rounded-xl border border-[#fce7f3] text-xs font-bold text-[#1f1619] focus:outline-none focus:ring-2 focus:ring-[#ec4899]"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((l) => (
                      <option key={l} value={l}>Level {l}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-[#1f1619] block mb-1">Competitive Events Focus</label>
                <div className="grid grid-cols-4 gap-2">
                  {(['VAULT', 'BARS', 'BEAM', 'FLOOR'] as const).map((app) => {
                    const isSelected = newGymnastEvents.includes(app);
                    return (
                      <button
                        key={app}
                        type="button"
                        onClick={() => {
                          if (isSelected) {
                            if (newGymnastEvents.length > 1) {
                              setNewGymnastEvents(newGymnastEvents.filter((a) => a !== app));
                            }
                          } else {
                            setNewGymnastEvents([...newGymnastEvents, app]);
                          }
                        }}
                        className={`py-2 rounded-xl text-xs font-bold transition-all border ${
                          isSelected
                            ? 'bg-[#ec4899] text-white border-[#ec4899] shadow-xs'
                            : 'bg-white text-[#6b555c] border-[#fce7f3]'
                        }`}
                      >
                        {app}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowAddGymnastModal(false)}
                  className="py-2 px-4 rounded-full text-xs font-bold text-[#6b555c]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="py-2.5 px-5 rounded-full bg-[#ec4899] hover:bg-[#db2777] text-white text-xs font-black shadow-md shadow-pink-500/25"
                >
                  Enroll Athlete
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
