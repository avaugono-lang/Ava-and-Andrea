import React, { useState } from 'react';
import { useGym } from '../context/GymContext';
import { SkillUploadModal } from '../components/SkillUploadModal';
import { YouTubePlayerModal } from '../components/YouTubePlayerModal';
import { YouTubeApiInfoModal } from '../components/YouTubeApiInfoModal';
import { SkillsGapReviewModal } from '../components/SkillsGapReviewModal';
import { ApparatusCategory, Skill, USAGLevel, SkillStatus } from '../types';
import { searchSkillTutorial } from '../services/youtubeService';
import { 
  Camera, 
  Images, 
  Video, 
  Play, 
  CheckCircle2, 
  Clock, 
  Search, 
  RefreshCw, 
  AlertCircle,
  Upload,
  ArrowRight,
  Layers,
  Sparkles,
  Zap,
  Circle,
  Award,
  Video as VideoIcon,
  ShieldCheck,
  Check,
  Info,
  BookOpen,
  Download,
  FileSpreadsheet,
  ExternalLink,
  Copy,
  CheckCheck,
  Link as LinkIcon,
  Share2,
  FileText,
  ChevronRight
} from 'lucide-react';

export const SkillsScreen: React.FC = () => {
  const { user, skills, awardXp, updateSkillTutorial } = useGym();
  const [selectedLevel, setSelectedLevel] = useState<number>(user.level || 4);
  const [selectedApparatus, setSelectedApparatus] = useState<ApparatusCategory | 'ALL'>('ALL');
  const [selectedSkillForUpload, setSelectedSkillForUpload] = useState<Skill | null>(null);
  const [uploadInitialSource, setUploadInitialSource] = useState<'camera' | 'photos' | null>(null);
  const [selectedSkillForPlayer, setSelectedSkillForPlayer] = useState<Skill | null>(null);
  const [showApiInfoModal, setShowApiInfoModal] = useState<boolean>(false);
  const [showGapReviewModal, setShowGapReviewModal] = useState<boolean>(false);
  const [expandedTutorialSkillId, setExpandedTutorialSkillId] = useState<string | null>(null);
  const [customApiKey, setCustomApiKey] = useState<string>(() => {
    return typeof window !== 'undefined' ? localStorage.getItem('gymtrack_custom_yt_key') || '' : '';
  });
  const [searchingSkillId, setSearchingSkillId] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  const handleOpenUpload = (skill: Skill, source?: 'camera' | 'photos') => {
    setSelectedSkillForUpload(skill);
    setUploadInitialSource(source || null);
  };

  const handleSaveApiKey = (key: string) => {
    setCustomApiKey(key);
    localStorage.setItem('gymtrack_custom_yt_key', key);
  };

  // Auto-open gap review modal if URL has #gap-analysis or query parameter
  React.useEffect(() => {
    const handleUrlTrigger = () => {
      if (typeof window === 'undefined') return;
      const hash = window.location.hash.toLowerCase();
      const search = window.location.search.toLowerCase();
      if (
        hash.includes('gap') ||
        hash.includes('curriculum') ||
        hash.includes('table') ||
        search.includes('gap') ||
        search.includes('curriculum')
      ) {
        setShowGapReviewModal(true);
      }
    };
    handleUrlTrigger();
    window.addEventListener('hashchange', handleUrlTrigger);
    return () => window.removeEventListener('hashchange', handleUrlTrigger);
  }, []);

  const handleCopyClickableLink = (url: string, label: string) => {
    try {
      const fullUrl = url.startsWith('http') ? url : `${window.location.origin}${url}`;
      navigator.clipboard.writeText(fullUrl);
      setCopiedLink(label);
      showToast(`Copied clickable link for ${label}!`);
      setTimeout(() => setCopiedLink(null), 3000);
    } catch {
      showToast(`Link: ${url}`);
    }
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Filter skills by level and apparatus
  const currentLevelSkills = skills.filter((s) => s.level === selectedLevel);
  const filteredSkills = currentLevelSkills.filter((s) => {
    if (selectedApparatus === 'ALL') return true;
    return s.category === selectedApparatus;
  });

  const verifiedCount = currentLevelSkills.filter((s) => s.status === 'VERIFIED').length;
  const totalCount = currentLevelSkills.length;
  const pendingCount = currentLevelSkills.filter((s) => s.status === 'AWAITING_VERIFICATION').length;
  const inProgressCount = currentLevelSkills.filter((s) => s.status === 'IN_PROGRESS').length;
  const notStartedCount = currentLevelSkills.filter((s) => s.status === 'NOT_COMPLETED').length;
  const remainingCount = totalCount - verifiedCount;
  const completionPercentage = totalCount > 0 ? Math.round((verifiedCount / totalCount) * 100) : 0;

  const countForCategory = (cat: ApparatusCategory) => {
    return currentLevelSkills.filter((s) => s.category === cat).length;
  };

  // Live YouTube search handler for a skill
  const handleSearchYouTube = async (skill: Skill) => {
    setSearchingSkillId(skill.id);
    try {
      const result = await searchSkillTutorial(
        skill.name,
        skill.level,
        skill.category,
        customApiKey || undefined
      );

      if (result.found && result.tutorial) {
        updateSkillTutorial(skill.id, result.tutorial);
        showToast(`Found individual tutorial for ${skill.name}! 🎬`);
      } else {
        showToast(result.message || `Opening YouTube search for ${skill.name}.`);
        const query = encodeURIComponent(`${skill.name} gymnastics tutorial`);
        window.open(`https://www.youtube.com/results?search_query=${query}`, '_blank');
      }
    } catch {
      const query = encodeURIComponent(`${skill.name} gymnastics tutorial`);
      window.open(`https://www.youtube.com/results?search_query=${query}`, '_blank');
    } finally {
      setSearchingSkillId(null);
    }
  };

  const handleOpenTutorial = (skill: Skill) => {
    if (skill.tutorial) {
      setSelectedSkillForPlayer(skill);
      awardXp(10, `Studied ${skill.name} Tutorial 🎥`);
    } else {
      handleSearchYouTube(skill);
    }
  };

  // Helper for clear visual status display
  const getStatusBadge = (status: SkillStatus) => {
    switch (status) {
      case 'VERIFIED':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-300 text-[11px] font-extrabold shadow-2xs">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>Completed ✓</span>
          </span>
        );
      case 'AWAITING_VERIFICATION':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-300 text-[11px] font-extrabold shadow-2xs">
            <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0 animate-pulse" />
            <span>Evidence Submitted – Awaiting Review</span>
          </span>
        );
      case 'IN_PROGRESS':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-800 border border-blue-200 text-[11px] font-extrabold shadow-2xs">
            <Zap className="w-3.5 h-3.5 text-blue-600 shrink-0" />
            <span>In Progress ⚡</span>
          </span>
        );
      case 'NOT_COMPLETED':
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 text-gray-700 border border-gray-200 text-[11px] font-bold">
            <Circle className="w-3 h-3 text-gray-400 shrink-0" />
            <span>Not Started</span>
          </span>
        );
    }
  };

  return (
    <div className="flex flex-col w-full max-w-3xl mx-auto px-4 sm:px-6 space-y-5 pt-2 pb-16">
      {/* Toast Feedback */}
      {toastMessage && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 px-4 py-2.5 bg-[#1f1619] text-[#fffdf0] rounded-full text-xs font-bold shadow-xl animate-bounce flex items-center gap-2 border border-[#fef08a]/30">
          <Sparkles className="w-4 h-4 text-[#facc15]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* 1. Level Summary Header Card */}
      <section className="relative w-full rounded-3xl bg-white p-5 sm:p-6 shadow-[0_8px_24px_-4px_rgba(244,114,182,0.12)] border border-[#fce7f3] overflow-hidden">
        <div className="absolute -right-6 -bottom-6 w-36 h-36 bg-[#fce7f3]/60 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -left-6 -top-6 w-32 h-32 bg-[#fef9c3]/50 rounded-full blur-xl pointer-events-none" />

        <div className="relative z-10 flex flex-col space-y-3.5">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-[#ec4899] text-white text-xs font-black uppercase tracking-wider shadow-2xs">
                USAG Level {selectedLevel}
              </span>
              {selectedLevel === user.level && (
                <span className="text-[11px] font-bold text-[#854d0e] bg-[#fef9c3] border border-[#fef08a] px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-current" />
                  <span>Your Active Curriculum</span>
                </span>
              )}
            </div>

            <div className="flex items-center gap-1.5 flex-wrap">
              {/* Silver, Gold & Platinum Gap Review Button */}
              <button
                id="btn-open-gap-review"
                onClick={() => setShowGapReviewModal(true)}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 hover:opacity-95 text-white text-xs font-black shadow-xs transition-all"
                title="View Silver, Gold & Platinum Standards Review & Comparison Table"
              >
                <Award className="w-3.5 h-3.5 text-amber-200 fill-current" />
                <span>Review Table & Gaps</span>
                <span className="px-1.5 py-0.2 rounded-full bg-white/20 text-[10px] font-extrabold">31</span>
              </button>

              {/* Clickable Download Gap Analysis CSV */}
              <a
                href="/gymtrack_skills_gap_analysis.csv"
                download="gymtrack_skills_gap_analysis.csv"
                id="btn-download-gap-csv-header"
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white hover:bg-pink-50 border border-pink-200 text-xs font-bold text-[#db2777] transition-colors shadow-2xs"
                title="Download Gap Analysis Spreadsheet (CSV)"
              >
                <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-600" />
                <span>Export CSV</span>
                <Download className="w-3 h-3" />
              </a>

              {/* Clickable Standalone Interactive HTML Report */}
              <a
                href="/gymtrack_skills_gap_analysis.html"
                target="_blank"
                rel="noopener noreferrer"
                id="btn-open-standalone-report-header"
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white hover:bg-pink-50 border border-pink-200 text-xs font-bold text-gray-700 transition-colors shadow-2xs"
                title="Open Printable HTML Gap Report in New Tab"
              >
                <span>Report ↗</span>
              </a>

              {/* YouTube API Setup Modal Trigger */}
              <button
                id="btn-open-yt-api-info"
                onClick={() => setShowApiInfoModal(true)}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#fff5f8] hover:bg-[#fce7f3] border border-[#fce7f3] text-xs font-bold text-[#db2777] transition-colors"
                title="YouTube Tutorial API Integration"
              >
                <VideoIcon className="w-3.5 h-3.5 text-red-600" />
                <span className="hidden sm:inline">Video Help</span>
                <Info className="w-3.5 h-3.5 text-[#db2777]" />
              </button>
            </div>
          </div>

          <div>
            <h1 className="text-xl sm:text-2xl font-black text-[#1f1619] tracking-tight">
              Level {selectedLevel} Required Skills & Curriculum
            </h1>
            <p className="text-xs sm:text-sm text-[#6b555c] mt-0.5">
              Practice each skill, study the coaching tutorial, and upload your video evidence for coach review.
            </p>
          </div>

          {/* Summary Progress Bar & Status Counts */}
          <div className="pt-1 space-y-2">
            <div className="flex items-center justify-between flex-wrap gap-2 text-xs">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fef9c3] text-[#854d0e] border border-[#fef08a] font-bold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{verifiedCount} of {totalCount} Skills Completed ✓</span>
              </div>
              <span className="text-[11px] font-extrabold text-[#db2777]">
                {completionPercentage}% Level Progress ({remainingCount} remaining)
              </span>
            </div>

            <div className="w-full h-3.5 rounded-full bg-[#fce7f3]/50 overflow-hidden p-0.5 border border-[#fce7f3]">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#ec4899] via-[#f43f5e] to-[#f59e0b] transition-all duration-700 shadow-2xs"
                style={{ width: `${Math.max(6, completionPercentage)}%` }}
              />
            </div>

            {/* Quick Status Pill Counters */}
            <div className="flex items-center gap-2 pt-1 flex-wrap text-[11px]">
              <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 font-bold">
                ✓ {verifiedCount} Completed
              </span>
              {pendingCount > 0 && (
                <span className="px-2 py-0.5 rounded-md bg-amber-50 text-amber-800 border border-amber-200 font-bold">
                  ⏳ {pendingCount} Under Review
                </span>
              )}
              {notStartedCount > 0 && (
                <span className="px-2 py-0.5 rounded-md bg-gray-100 text-gray-700 border border-gray-200 font-medium">
                  ○ {notStartedCount} To Learn
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* EXPORT TABLES & CLICKABLE LINKS SECTION */}
      <section className="rounded-3xl bg-white border border-pink-200 p-5 sm:p-6 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-pink-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#ec4899] to-amber-400 text-white flex items-center justify-center shadow-xs shrink-0">
              <Download className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-base font-black text-[#1f1619]">
                  Export Tables & Clickable Links
                </h3>
                <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black border border-emerald-300">
                  Ready to Share & Download
                </span>
              </div>
              <p className="text-xs text-[#6b555c]">
                Instant clickable links to view, download, and share the Gap Analysis Table and Comprehensive Skills List.
              </p>
            </div>
          </div>

          <button
            onClick={() => setShowGapReviewModal(true)}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#ec4899] hover:bg-[#db2777] text-white text-xs font-black shadow-xs transition-all shrink-0"
          >
            <Award className="w-4 h-4 text-amber-200 fill-current" />
            <span>Open Gap Analysis Table</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Two Clickable Link Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {/* Card 1: Gap Analysis Table */}
          <div className="p-4 rounded-2xl bg-[#fff9fb] border border-pink-200 flex flex-col justify-between space-y-3">
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-pink-100 text-[#db2777] text-[10px] font-extrabold uppercase">
                  📊 Gap Analysis Table
                </span>
                <span className="text-[11px] font-bold text-[#6b555c]">46 Evaluated Elements</span>
              </div>
              <h4 className="font-extrabold text-sm text-[#1f1619]">
                Silver, Gold & Platinum Standards Gap Table
              </h4>
              <p className="text-xs text-[#6b555c]">
                Official USAG comparison matrix across Vault, Uneven Bars, Balance Beam, and Floor Exercise with full video & coaching resolutions.
              </p>
            </div>

            <div className="pt-2 border-t border-pink-100/80 flex flex-wrap items-center gap-2">
              <a
                href="/gymtrack_skills_gap_analysis.csv"
                download="gymtrack_skills_gap_analysis.csv"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-pink-100 text-[#db2777] border border-pink-300 font-bold transition-all shadow-2xs text-xs"
                title="Download CSV spreadsheet"
              >
                <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-600" />
                <span>Download CSV</span>
                <Download className="w-3 h-3" />
              </a>

              <a
                href="/gymtrack_skills_gap_analysis.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-pink-100 text-slate-800 border border-slate-300 font-bold transition-all shadow-2xs text-xs"
                title="Open interactive standalone HTML report in new tab"
              >
                <FileText className="w-3.5 h-3.5 text-pink-600" />
                <span>Interactive Report ↗</span>
              </a>

              <button
                type="button"
                onClick={() => handleCopyClickableLink('/gymtrack_skills_gap_analysis.csv', 'Gap Analysis Table (CSV)')}
                className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-white hover:bg-gray-100 text-gray-700 border border-gray-200 text-xs font-semibold transition-all ml-auto"
                title="Copy clickable link URL to clipboard"
              >
                {copiedLink === 'Gap Analysis Table (CSV)' ? (
                  <>
                    <CheckCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-bold">Copied!</span>
                  </>
                ) : (
                  <>
                    <LinkIcon className="w-3.5 h-3.5 text-gray-500" />
                    <span>Copy Link</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Card 2: Comprehensive Skills List */}
          <div className="p-4 rounded-2xl bg-[#f8fafc] border border-slate-200 flex flex-col justify-between space-y-3">
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-200 text-slate-800 text-[10px] font-extrabold uppercase">
                  📋 Master Curriculum
                </span>
                <span className="text-[11px] font-bold text-[#6b555c]">All {skills.length} Aligned Skills</span>
              </div>
              <h4 className="font-extrabold text-sm text-[#1f1619]">
                Comprehensive Skills List & Video Syllabus
              </h4>
              <p className="text-xs text-[#6b555c]">
                Complete master database containing all 4 apparatus categories (Vault, Bars, Beam, Floor), difficulty ratings, XP points, and verified coaching videos.
              </p>
            </div>

            <div className="pt-2 border-t border-slate-200/80 flex flex-wrap items-center gap-2">
              <a
                href="/gymtrack_comprehensive_skills_curriculum.csv"
                download="gymtrack_comprehensive_skills_curriculum.csv"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 font-bold transition-all shadow-2xs text-xs"
                title="Download complete curriculum CSV"
              >
                <FileSpreadsheet className="w-3.5 h-3.5 text-blue-600" />
                <span>Download CSV</span>
                <Download className="w-3 h-3 text-slate-600" />
              </a>

              <a
                href="/gymtrack_comprehensive_skills_curriculum.json"
                download="gymtrack_comprehensive_skills_curriculum.json"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 font-bold transition-all shadow-2xs text-xs"
                title="Download full JSON dataset"
              >
                <Download className="w-3.5 h-3.5 text-gray-500" />
                <span>JSON</span>
              </a>

              <button
                type="button"
                onClick={() => handleCopyClickableLink('/gymtrack_comprehensive_skills_curriculum.csv', 'Comprehensive Skills List (CSV)')}
                className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-white hover:bg-gray-100 text-gray-700 border border-gray-200 text-xs font-semibold transition-all ml-auto"
                title="Copy clickable link URL to clipboard"
              >
                {copiedLink === 'Comprehensive Skills List (CSV)' ? (
                  <>
                    <CheckCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-bold">Copied!</span>
                  </>
                ) : (
                  <>
                    <LinkIcon className="w-3.5 h-3.5 text-gray-500" />
                    <span>Copy Link</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Shareable Clickable Link Quick Bar */}
        <div className="p-3 rounded-2xl bg-gradient-to-r from-pink-50 to-amber-50 border border-pink-200/70 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs">
          <div className="flex items-center gap-2">
            <Share2 className="w-4 h-4 text-[#ec4899] shrink-0" />
            <span className="font-bold text-[#1f1619]">Direct Clickable Share Link:</span>
            <code className="text-[11px] text-pink-700 bg-white px-2 py-0.5 rounded-lg border border-pink-200 font-mono hidden md:inline">
              {typeof window !== 'undefined' ? `${window.location.origin}/#gap-analysis` : '/#gap-analysis'}
            </code>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handleCopyClickableLink(`${window.location.origin}/#gap-analysis`, 'Direct Share Link')}
              className="inline-flex items-center gap-1 px-3 py-1 rounded-xl bg-white hover:bg-pink-100 text-[#db2777] border border-pink-300 font-bold shadow-2xs transition-all text-xs"
            >
              {copiedLink === 'Direct Share Link' ? (
                <>
                  <CheckCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Link Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#ec4899]" />
                  <span>Copy Clickable Link</span>
                </>
              )}
            </button>

            <a
              href="#gap-analysis"
              onClick={(e) => {
                e.preventDefault();
                setShowGapReviewModal(true);
              }}
              className="inline-flex items-center gap-1 px-3 py-1 rounded-xl bg-[#ec4899] hover:bg-[#db2777] text-white font-bold shadow-2xs transition-all text-xs"
            >
              <span>View Table Now</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* 2. PROMINENT INSTRUCTION SECTION ABOVE SKILLS (Requirement 5) */}
      <section className="rounded-3xl bg-gradient-to-r from-[#fce7f3] via-[#fff5f8] to-[#fffdf0] p-5 sm:p-6 border-2 border-[#f472b6] shadow-sm relative overflow-hidden">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-white border border-[#fce7f3] text-[#db2777] flex items-center justify-center shrink-0 shadow-xs">
            <Upload className="w-6 h-6 text-[#ec4899]" />
          </div>

          <div className="space-y-1.5 flex-1">
            <h2 className="text-base sm:text-lg font-black text-[#1f1619] leading-snug">
              Upload evidence of your skills to complete your current level and move to the next.
            </h2>
            <p className="text-xs sm:text-[13px] text-[#6b555c] leading-relaxed">
              Complete each skill by uploading a video of yourself performing it. Once your evidence is reviewed and approved, the skill will be marked as complete.
            </p>
          </div>
        </div>

        {/* 3. VISUAL LEVEL PROGRESSION ROADMAP (Requirement 8) */}
        <div className="mt-4 pt-3.5 border-t border-pink-200/80">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-extrabold text-[#db2777] uppercase tracking-wider flex items-center gap-1">
              <Award className="w-3.5 h-3.5" />
              <span>How You Progress Through Levels:</span>
            </span>
          </div>

          {/* Stepper Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center text-xs">
            <div className="bg-white/90 p-2.5 rounded-2xl border border-pink-100 shadow-2xs flex flex-col items-center">
              <span className="w-5 h-5 rounded-full bg-[#fce7f3] text-[#db2777] text-[10px] font-black flex items-center justify-center mb-1">
                1
              </span>
              <span className="font-bold text-[#1f1619] text-[11px] leading-tight">Learn Skill</span>
              <span className="text-[10px] text-[#6b555c]">Watch Tutorials</span>
            </div>

            <div className="bg-white/90 p-2.5 rounded-2xl border border-pink-100 shadow-2xs flex flex-col items-center">
              <span className="w-5 h-5 rounded-full bg-[#fce7f3] text-[#db2777] text-[10px] font-black flex items-center justify-center mb-1">
                2
              </span>
              <span className="font-bold text-[#1f1619] text-[11px] leading-tight">Perform & Record</span>
              <span className="text-[10px] text-[#6b555c]">In the gym</span>
            </div>

            <div className="bg-white/90 p-2.5 rounded-2xl border border-pink-100 shadow-2xs flex flex-col items-center">
              <span className="w-5 h-5 rounded-full bg-[#fce7f3] text-[#db2777] text-[10px] font-black flex items-center justify-center mb-1">
                3
              </span>
              <span className="font-bold text-[#1f1619] text-[11px] leading-tight">Submit Evidence</span>
              <span className="text-[10px] text-[#6b555c]">Upload Video</span>
            </div>

            <div className="bg-white/90 p-2.5 rounded-2xl border border-pink-100 shadow-2xs flex flex-col items-center">
              <span className="w-5 h-5 rounded-full bg-[#fce7f3] text-[#db2777] text-[10px] font-black flex items-center justify-center mb-1">
                4
              </span>
              <span className="font-bold text-[#1f1619] text-[11px] leading-tight">Coach Reviews</span>
              <span className="text-[10px] text-[#6b555c]">Approved ✓</span>
            </div>

            <div className="bg-white/90 p-2.5 rounded-2xl border border-amber-200 shadow-2xs flex flex-col items-center col-span-2 sm:col-span-1 bg-gradient-to-b from-[#fffdf0] to-[#fef9c3]">
              <span className="w-5 h-5 rounded-full bg-[#f59e0b] text-white text-[10px] font-black flex items-center justify-center mb-1">
                5
              </span>
              <span className="font-bold text-[#854d0e] text-[11px] leading-tight">Next Level!</span>
              <span className="text-[10px] text-[#854d0e] font-extrabold">Level {selectedLevel + 1} 🏆</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Level & Tier Selector Bar */}
      <div className="space-y-2">
        <div className="flex items-center justify-between px-1">
          <span className="text-xs font-bold text-[#1f1619] flex items-center gap-1.5">
            <Layers className="w-4 h-4 text-[#ec4899]" />
            <span>Select Curriculum Tier & Level:</span>
          </span>
          <button
            onClick={() => setShowGapReviewModal(true)}
            className="text-[11px] font-bold text-[#db2777] hover:underline flex items-center gap-1"
          >
            <span>Compare Silver, Gold & Platinum</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        {/* Quick Tier Jump Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
          <span className="text-[10px] font-black uppercase text-gray-400 shrink-0">Tiers:</span>
          <button
            onClick={() => setSelectedLevel(3)}
            className={`px-3 py-1 rounded-full text-xs font-black transition-all shrink-0 flex items-center gap-1 ${
              selectedLevel === 3
                ? 'bg-slate-800 text-white shadow-xs scale-102'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300'
            }`}
          >
            <span>🥈 Silver</span>
            <span className="text-[10px] opacity-80">(L3)</span>
          </button>

          <button
            onClick={() => setSelectedLevel(4)}
            className={`px-3 py-1 rounded-full text-xs font-black transition-all shrink-0 flex items-center gap-1 ${
              selectedLevel === 4 || selectedLevel === 5
                ? 'bg-amber-600 text-white shadow-xs scale-102'
                : 'bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300'
            }`}
          >
            <span>🥇 Gold</span>
            <span className="text-[10px] opacity-80">(L4-5)</span>
          </button>

          <button
            onClick={() => setSelectedLevel(6)}
            className={`px-3 py-1 rounded-full text-xs font-black transition-all shrink-0 flex items-center gap-1 ${
              selectedLevel === 6 || selectedLevel === 7
                ? 'bg-cyan-700 text-white shadow-xs scale-102'
                : 'bg-cyan-50 hover:bg-cyan-100 text-cyan-900 border border-cyan-300'
            }`}
          >
            <span>💎 Platinum</span>
            <span className="text-[10px] opacity-80">(L6-7)</span>
          </button>

          <button
            onClick={() => setSelectedLevel(1)}
            className={`px-3 py-1 rounded-full text-xs font-bold transition-all shrink-0 flex items-center gap-1 ${
              selectedLevel <= 2
                ? 'bg-orange-800 text-white shadow-xs'
                : 'bg-orange-50 hover:bg-orange-100 text-orange-900 border border-orange-200'
            }`}
          >
            <span>🥉 Bronze</span>
            <span className="text-[10px] opacity-80">(L1-2)</span>
          </button>
        </div>

        {/* Level Number Selector */}
        <div className="w-full overflow-x-auto no-scrollbar py-1">
          <div className="flex items-center gap-1.5 min-w-max">
            {([1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as USAGLevel[]).map((lvl) => {
              const isSelected = selectedLevel === lvl;
              const isUserLvl = user.level === lvl;
              const tierName = lvl <= 2 ? 'Bronze' : lvl === 3 ? 'Silver' : lvl <= 5 ? 'Gold' : lvl <= 7 ? 'Platinum' : 'Diamond';

              return (
                <button
                  key={lvl}
                  id={`btn-select-level-${lvl}`}
                  onClick={() => setSelectedLevel(lvl)}
                  className={`px-3 py-2 rounded-2xl text-xs font-bold transition-all flex flex-col items-center gap-0.5 ${
                    isSelected
                      ? 'bg-[#ec4899] text-white shadow-md shadow-pink-500/25 scale-102 font-extrabold'
                      : 'bg-white hover:bg-[#fff5f8] text-[#6b555c] border border-[#fce7f3]'
                  }`}
                >
                  <div className="flex items-center gap-1">
                    <span>Level {lvl}</span>
                    {isUserLvl && (
                      <span
                        className={`w-2 h-2 rounded-full ${isSelected ? 'bg-[#facc15]' : 'bg-[#ec4899]'}`}
                        title="Your current registered level"
                      />
                    )}
                  </div>
                  <span className={`text-[9px] uppercase font-bold tracking-tight ${isSelected ? 'text-pink-100' : 'text-gray-400'}`}>
                    {tierName}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 5. Apparatus Filter Tabs (All / Vault / Uneven Bars / Balance Beam / Floor Exercise) */}
      <div className="w-full flex p-1.5 rounded-2xl bg-[#fff5f8] border border-[#fce7f3] shadow-2xs overflow-x-auto no-scrollbar gap-1">
        {(['ALL', 'VAULT', 'BARS', 'BEAM', 'FLOOR'] as const).map((app) => {
          const isSelected = selectedApparatus === app;
          const count = app === 'ALL' ? currentLevelSkills.length : countForCategory(app);

          return (
            <button
              key={app}
              id={`btn-apparatus-${app.toLowerCase()}`}
              onClick={() => setSelectedApparatus(app)}
              className={`flex-1 min-w-[76px] flex items-center justify-center gap-1.5 py-2 px-2 rounded-xl text-xs font-bold transition-all ${
                isSelected
                  ? 'bg-white text-[#db2777] shadow-xs border border-[#fce7f3]'
                  : 'text-[#6b555c] hover:text-[#1f1619]'
              }`}
            >
              <span>
                {app === 'ALL'
                  ? 'All Events'
                  : app === 'VAULT'
                  ? '🚀 Vault'
                  : app === 'BARS'
                  ? '⚡ Bars'
                  : app === 'BEAM'
                  ? '⚖️ Beam'
                  : '✨ Floor'}
              </span>
              {count > 0 && (
                <span
                  className={`w-4 h-4 rounded-full text-[10px] font-bold flex items-center justify-center leading-none ${
                    isSelected ? 'bg-[#fef9c3] text-[#854d0e]' : 'bg-[#fce7f3] text-[#db2777]'
                  }`}
                >
                  {count}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* 6. Skills Cards List */}
      <div className="flex flex-col space-y-4">
        {filteredSkills.length === 0 ? (
          <div className="p-8 text-center bg-white rounded-3xl border border-[#fce7f3] space-y-2">
            <Layers className="w-10 h-10 text-[#f472b6] mx-auto" />
            <h3 className="text-sm font-bold text-[#1f1619]">No skills found for this filter</h3>
            <p className="text-xs text-[#6b555c]">Switch apparatus or select another level above.</p>
          </div>
        ) : (
          filteredSkills.map((skill) => {
            const isVerified = skill.status === 'VERIFIED';
            const isAwaiting = skill.status === 'AWAITING_VERIFICATION';
            const hasTutorial = !!skill.tutorial && skill.tutorialStatus !== 'NOT_FOUND';
            const isSearching = searchingSkillId === skill.id;

            return (
              <article
                key={skill.id}
                id={`card-skill-${skill.id}`}
                className={`w-full rounded-3xl bg-white p-5 shadow-[0_8px_24px_-4px_rgba(244,114,182,0.08)] border transition-all ${
                  isVerified
                    ? 'border-emerald-200 bg-emerald-50/10'
                    : isAwaiting
                    ? 'border-amber-200 bg-amber-50/10'
                    : 'border-[#fce7f3] hover:border-pink-300'
                }`}
              >
                {/* Header Row: Skill Name, Level, Status */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 mt-0.5 text-xl font-bold shadow-2xs ${
                        isVerified
                          ? 'bg-emerald-100 text-emerald-700'
                          : isAwaiting
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-[#fff0f5] text-[#ec4899]'
                      }`}
                    >
                      {skill.category === 'VAULT'
                        ? '🚀'
                        : skill.category === 'BARS'
                        ? '⚡'
                        : skill.category === 'BEAM'
                        ? '⚖️'
                        : '🤸'}
                    </div>

                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-base sm:text-lg font-black text-[#1f1619]">
                          {skill.name}
                        </h3>
                        {skill.xcelTier && (
                          <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-800 text-[10px] font-extrabold uppercase border border-slate-200">
                            {skill.xcelTier === 'SILVER'
                              ? '🥈 Silver'
                              : skill.xcelTier === 'GOLD'
                              ? '🥇 Gold'
                              : skill.xcelTier === 'PLATINUM'
                              ? '💎 Platinum'
                              : skill.xcelTier}
                          </span>
                        )}
                        {skill.difficulty && (
                          <span className="px-2 py-0.5 rounded-full bg-gray-100 text-gray-700 text-[10px] font-extrabold uppercase">
                            Difficulty {skill.difficulty}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-2 text-xs font-semibold text-[#db2777] mt-0.5 flex-wrap">
                        <span>
                          Level {skill.level} —{' '}
                          {skill.category === 'VAULT'
                            ? 'Vault'
                            : skill.category === 'BARS'
                            ? 'Uneven Bars'
                            : skill.category === 'BEAM'
                            ? 'Balance Beam'
                            : 'Floor Exercise'}
                        </span>
                        <span className="text-[#6b555c]">•</span>
                        <span className="text-amber-700 font-bold">+{skill.xpReward} XP</span>
                        {skill.officialRef && (
                          <>
                            <span className="text-[#6b555c]">•</span>
                            <span className="text-gray-500 text-[11px]">{skill.officialRef}</span>
                          </>
                        )}
                      </div>

                      <p className="text-xs text-[#6b555c] mt-1 leading-relaxed">
                        {skill.description}
                      </p>

                      {/* Expandable Step-by-Step Written Tutorial */}
                      {skill.writtenTutorial && (
                        <div className="mt-2">
                          <button
                            type="button"
                            onClick={() =>
                              setExpandedTutorialSkillId(
                                expandedTutorialSkillId === skill.id ? null : skill.id
                              )
                            }
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#db2777] hover:text-[#be185d] transition-colors"
                          >
                            <BookOpen className="w-3.5 h-3.5" />
                            <span>
                              {expandedTutorialSkillId === skill.id
                                ? 'Hide Coaching Guide ▲'
                                : 'Read Step-by-Step Coaching Guide ▼'}
                            </span>
                          </button>

                          {expandedTutorialSkillId === skill.id && (
                            <div className="mt-2 p-3.5 rounded-2xl bg-pink-50/70 border border-pink-200 text-xs space-y-2.5 animate-in fade-in duration-150">
                              <div>
                                <span className="font-extrabold text-[#db2777] uppercase text-[10px] tracking-wider block mb-1">
                                  Technical Execution Steps:
                                </span>
                                <div className="space-y-1">
                                  {skill.writtenTutorial.steps.map((st, sI) => (
                                    <div key={sI} className="flex items-start gap-2 text-gray-800">
                                      <span className="w-4 h-4 rounded-full bg-[#ec4899] text-white text-[9px] font-black flex items-center justify-center shrink-0 mt-0.5">
                                        {sI + 1}
                                      </span>
                                      <span className="leading-snug">{st}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              {skill.writtenTutorial.keyCoachingCues.length > 0 && (
                                <div>
                                  <span className="font-extrabold text-amber-800 uppercase text-[10px] tracking-wider block mb-1">
                                    Coaching Cues:
                                  </span>
                                  <div className="flex flex-wrap gap-1">
                                    {skill.writtenTutorial.keyCoachingCues.map((cue, cI) => (
                                      <span
                                        key={cI}
                                        className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-[10px] font-semibold"
                                      >
                                        💡 {cue}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {skill.writtenTutorial.commonFaults.length > 0 && (
                                <div>
                                  <span className="font-extrabold text-red-700 uppercase text-[10px] tracking-wider block mb-1">
                                    Common Faults to Avoid:
                                  </span>
                                  <ul className="list-disc list-inside text-[11px] text-gray-700 space-y-0.5">
                                    {skill.writtenTutorial.commonFaults.map((flt, fI) => (
                                      <li key={fI}>{flt}</li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Obvious Status Indicator (Requirement 7) */}
                  <div className="shrink-0 self-start sm:self-auto">
                    {getStatusBadge(skill.status)}
                  </div>
                </div>

                {/* YOUTUBE COACHING TUTORIAL PREVIEW */}
                <div className="mt-4 rounded-2xl border border-[#fce7f3] bg-[#fffdf0] p-3 sm:p-3.5">
                  {hasTutorial && skill.tutorial ? (
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="flex items-center gap-3 min-w-0">
                        <div
                          className="relative w-24 h-16 rounded-xl overflow-hidden bg-black shrink-0 cursor-pointer group shadow-xs"
                          onClick={() => handleOpenTutorial(skill)}
                          title={`Play ${skill.tutorial.title}`}
                        >
                          <img
                            src={skill.tutorial.thumbnail}
                            alt={skill.tutorial.title}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90 group-hover:opacity-100"
                          />
                          <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-colors">
                            <div className="w-7 h-7 rounded-full bg-red-600 text-white flex items-center justify-center shadow-md">
                              <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                            </div>
                          </div>
                        </div>

                        <div className="min-w-0">
                          <span className="inline-block px-1.5 py-0.2 rounded bg-[#fce7f3] text-[#db2777] font-extrabold text-[9px] uppercase tracking-wider">
                            Official Coaching Tutorial
                          </span>
                          <p className="text-xs font-bold text-[#1f1619] leading-tight line-clamp-2">
                            {skill.tutorial.title}
                          </p>
                          <p className="text-[11px] text-[#854d0e] flex items-center gap-1 mt-0.5">
                            <Check className="w-3 h-3 text-emerald-600 shrink-0" />
                            <span className="truncate">{skill.tutorial.channelName}</span>
                          </p>
                        </div>
                      </div>

                      <button
                        id={`btn-watch-tutorial-${skill.id}`}
                        onClick={() => handleOpenTutorial(skill)}
                        className="sm:hidden w-full py-2 px-3 rounded-full bg-red-600 text-white text-xs font-bold flex items-center justify-center gap-1.5"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>Watch Coaching Video</span>
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-1">
                      <div className="flex items-center gap-2 text-xs text-[#854d0e]">
                        <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                        <div>
                          <p className="font-bold">Coaching breakdown</p>
                          <p className="text-[11px] text-[#6b555c]">
                            Search gymnastics breakdown for {skill.name}
                          </p>
                        </div>
                      </div>

                      <button
                        id={`btn-search-youtube-${skill.id}`}
                        onClick={() => handleSearchYouTube(skill)}
                        disabled={isSearching}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#ec4899] hover:bg-[#db2777] text-white text-xs font-bold transition-all shadow-xs disabled:opacity-50 shrink-0"
                      >
                        {isSearching ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Search className="w-3.5 h-3.5" />}
                        <span>{isSearching ? 'Searching...' : 'Search Tutorial'}</span>
                      </button>
                    </div>
                  )}
                </div>

                {/* 7. DUAL ACTION BUTTONS (Requirement 6): [ Watch Tutorial ] [ Upload Evidence of Your Skills ] */}
                <div className="mt-4 pt-3.5 border-t border-[#fce7f3] flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                  {/* BUTTON 1: [ Watch Tutorial ] */}
                  <button
                    id={`btn-watch-tutorial-primary-${skill.id}`}
                    onClick={() => handleOpenTutorial(skill)}
                    className="flex-1 py-3 px-4 rounded-full bg-white hover:bg-[#fff5f8] border-2 border-red-500 text-red-600 text-xs font-extrabold flex items-center justify-center gap-2 shadow-2xs active:scale-98 transition-all"
                  >
                    <Play className="w-4 h-4 fill-current text-red-600 shrink-0" />
                    <span>Watch Tutorial</span>
                  </button>

                  {/* BUTTON 2: [ Upload Evidence of Your Skills ] - PROMINENT & EQUAL WEIGHT */}
                  <button
                    id={`btn-upload-evidence-${skill.id}`}
                    onClick={() => handleOpenUpload(skill)}
                    className="flex-1 py-3 px-4 rounded-full bg-gradient-to-r from-[#ec4899] to-[#db2777] hover:opacity-95 text-white text-xs font-black flex items-center justify-center gap-2 shadow-md shadow-pink-500/25 active:scale-98 transition-all"
                  >
                    <Upload className="w-4 h-4 shrink-0" />
                    <span>Upload Evidence of Your Skills</span>
                  </button>
                </div>

                {/* Sub-bar: Direct Camera/Photos Shortcuts & Status Advice */}
                <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs bg-[#fff9fb] p-2.5 rounded-2xl border border-[#fce7f3]">
                  {/* Status next step guidance */}
                  <div className="flex items-center gap-1.5 text-[11px] font-bold">
                    {isVerified ? (
                      <span className="text-emerald-700 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Mastered & Approved by {skill.verifiedBy || 'Coach'}</span>
                      </span>
                    ) : isAwaiting ? (
                      <span className="text-amber-800 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-amber-600" />
                        <span>Evidence submitted: "{skill.submittedVideoName || 'routine clip'}" — Coach Elena is reviewing</span>
                      </span>
                    ) : (
                      <span className="text-[#db2777] flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Next Step: Record your attempt and submit evidence above</span>
                      </span>
                    )}
                  </div>

                  {/* Fast Mobile Capture Shortcuts */}
                  <div className="flex items-center gap-1.5 ml-auto">
                    <button
                      id={`btn-quick-camera-${skill.id}`}
                      onClick={() => handleOpenUpload(skill, 'camera')}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white border border-[#fce7f3] text-[11px] font-bold text-[#db2777] hover:bg-[#fff0f5] shadow-2xs active:scale-95"
                      title="Direct camera capture"
                    >
                      <Camera className="w-3 h-3 text-[#db2777]" />
                      <span>Camera</span>
                    </button>
                    <button
                      id={`btn-quick-photos-${skill.id}`}
                      onClick={() => handleOpenUpload(skill, 'photos')}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white border border-[#fce7f3] text-[11px] font-bold text-[#854d0e] hover:bg-[#fffdf0] shadow-2xs active:scale-95"
                      title="Pick from photo library"
                    >
                      <Images className="w-3 h-3 text-[#854d0e]" />
                      <span>Photos</span>
                    </button>
                  </div>
                </div>
              </article>
            );
          })
        )}
      </div>

      {/* Video Player Modal */}
      <YouTubePlayerModal
        skill={selectedSkillForPlayer}
        onClose={() => setSelectedSkillForPlayer(null)}
      />

      {/* API Setup & Status Modal */}
      <YouTubeApiInfoModal
        isOpen={showApiInfoModal}
        onClose={() => setShowApiInfoModal(false)}
        customApiKey={customApiKey}
        onSaveCustomApiKey={handleSaveApiKey}
      />

      {/* Skill Video Upload Modal with Skill Selector and Confirmation */}
      <SkillUploadModal
        skill={selectedSkillForUpload}
        initialSource={uploadInitialSource}
        onClose={() => {
          setSelectedSkillForUpload(null);
          setUploadInitialSource(null);
        }}
      />

      {/* Silver, Gold & Platinum Standards Comparison & Gap Analysis Modal */}
      <SkillsGapReviewModal
        isOpen={showGapReviewModal}
        onClose={() => setShowGapReviewModal(false)}
        onSelectSkillForPractice={(skillName, level) => {
          setSelectedLevel(level);
          setShowGapReviewModal(false);
          showToast(`Jumped to Level ${level} to practice ${skillName}! 🤸`);
        }}
      />
    </div>
  );
};
