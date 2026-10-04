import React, { useState } from 'react';
import { 
  X, 
  Search, 
  Play, 
  BookOpen, 
  CheckCircle2, 
  AlertCircle, 
  ExternalLink, 
  Award, 
  Filter, 
  ChevronRight, 
  Layers, 
  Check, 
  Info,
  Sparkles,
  ArrowRight,
  Download,
  FileText,
  FileSpreadsheet,
  Copy,
  CheckCheck,
  Link as LinkIcon,
  Share2
} from 'lucide-react';
import { SKILLS_GAP_REVIEW_DATA, SKILLS_TIER_SUMMARY } from '../data/skillsReviewData';
import { SkillsGapReviewItem, ApparatusCategory } from '../types';

interface SkillsGapReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectSkillForPractice?: (skillName: string, level: number) => void;
}

export const SkillsGapReviewModal: React.FC<SkillsGapReviewModalProps> = ({
  isOpen,
  onClose,
  onSelectSkillForPractice,
}) => {
  const [selectedTier, setSelectedTier] = useState<'ALL' | 'SILVER' | 'GOLD' | 'PLATINUM'>('ALL');
  const [selectedApparatus, setSelectedApparatus] = useState<'ALL' | ApparatusCategory>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTutorialItem, setActiveTutorialItem] = useState<SkillsGapReviewItem | null>(null);
  const [activeVideoItem, setActiveVideoItem] = useState<SkillsGapReviewItem | null>(null);
  const [viewMode, setViewMode] = useState<'table' | 'cards'>('table');
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  const handleCopyLink = (path: string, label: string) => {
    try {
      const fullUrl = path.startsWith('http') ? path : `${window.location.origin}${path}`;
      navigator.clipboard.writeText(fullUrl);
      setCopiedLink(label);
      setTimeout(() => setCopiedLink(null), 3000);
    } catch {
      // Fallback
    }
  };

  if (!isOpen) return null;

  // Filter skills according to tier, apparatus, and search query
  const filteredSkills = SKILLS_GAP_REVIEW_DATA.filter((item) => {
    if (selectedTier !== 'ALL' && item.tier !== selectedTier) return false;
    if (selectedApparatus !== 'ALL' && item.apparatus !== selectedApparatus) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = item.name.toLowerCase().includes(q);
      const matchDesc = item.shortDescription.toLowerCase().includes(q);
      const matchApp = item.categoryName.toLowerCase().includes(q);
      const matchCode = item.elementCode.toLowerCase().includes(q);
      const matchCues = item.writtenTutorial.keyCoachingCues.some((c) => c.toLowerCase().includes(q));
      return matchName || matchDesc || matchApp || matchCode || matchCues;
    }
    return true;
  });

  const getTierBadge = (tier: 'SILVER' | 'GOLD' | 'PLATINUM') => {
    switch (tier) {
      case 'SILVER':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-800 border border-slate-300 text-[10px] font-black tracking-wide uppercase">
            🥈 Silver (L3)
          </span>
        );
      case 'GOLD':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-[10px] font-black tracking-wide uppercase">
            🥇 Gold (L4-5)
          </span>
        );
      case 'PLATINUM':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-cyan-100 text-cyan-900 border border-cyan-300 text-[10px] font-black tracking-wide uppercase">
            💎 Platinum (L6-7)
          </span>
        );
    }
  };

  const getApparatusIcon = (app: ApparatusCategory) => {
    switch (app) {
      case 'VAULT':
        return '🚀 Vault';
      case 'BARS':
        return '⚡ Uneven Bars';
      case 'BEAM':
        return '⚖️ Balance Beam';
      case 'FLOOR':
        return '✨ Floor Exercise';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-6xl max-h-[92vh] bg-white rounded-3xl shadow-2xl border border-pink-200 flex flex-col overflow-hidden text-[#1f1619]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 sm:px-7 py-4 border-b border-[#fce7f3] bg-gradient-to-r from-[#fff5f8] via-[#fffdf0] to-[#fce7f3]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#ec4899] text-white flex items-center justify-center font-black shadow-xs">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-base sm:text-xl font-black text-[#1f1619] tracking-tight">
                  Silver, Gold & Platinum Skills Review & Gap Analysis
                </h2>
                <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black border border-emerald-300">
                  All Gaps Resolved (Tutorial + Video)
                </span>
              </div>
              <p className="text-xs text-[#6b555c]">
                Official USAG Xcel & DP curriculum comparison vs current Gymtrack platform coverage
              </p>
            </div>
          </div>

          <button
            id="btn-close-gap-review-modal"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white hover:bg-pink-100 text-gray-700 flex items-center justify-center transition-colors border border-pink-200 shrink-0 shadow-2xs"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Top Summary Stat Cards */}
        <div className="px-5 sm:px-7 py-3 bg-[#fff9fb] border-b border-[#fce7f3] grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
          <div className="bg-white p-2.5 rounded-2xl border border-pink-100 shadow-2xs flex items-center gap-2.5">
            <span className="text-2xl">📋</span>
            <div>
              <span className="block font-black text-sm text-[#1f1619]">{SKILLS_TIER_SUMMARY.totalSkillsReviewed} Skills</span>
              <span className="text-[11px] text-[#6b555c]">Total Core Elements</span>
            </div>
          </div>

          <div className="bg-white p-2.5 rounded-2xl border border-pink-100 shadow-2xs flex items-center gap-2.5">
            <span className="text-2xl">🥈</span>
            <div>
              <span className="block font-black text-sm text-slate-800">{SKILLS_TIER_SUMMARY.silverCount} Silver</span>
              <span className="text-[11px] text-[#6b555c]">L3 Benchmarks</span>
            </div>
          </div>

          <div className="bg-white p-2.5 rounded-2xl border border-pink-100 shadow-2xs flex items-center gap-2.5">
            <span className="text-2xl">🥇</span>
            <div>
              <span className="block font-black text-sm text-amber-800">{SKILLS_TIER_SUMMARY.goldCount} Gold</span>
              <span className="text-[11px] text-[#6b555c]">L4-5 Progression</span>
            </div>
          </div>

          <div className="bg-white p-2.5 rounded-2xl border border-pink-100 shadow-2xs flex items-center gap-2.5">
            <span className="text-2xl">💎</span>
            <div>
              <span className="block font-black text-sm text-cyan-800">{SKILLS_TIER_SUMMARY.platinumCount} Platinum</span>
              <span className="text-[11px] text-[#6b555c]">L6-7 Advanced</span>
            </div>
          </div>
        </div>

        {/* Filters and Search Bar */}
        <div className="p-4 sm:px-7 border-b border-[#fce7f3] bg-white flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          {/* Tier Tabs */}
          <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0 no-scrollbar">
            {(['ALL', 'SILVER', 'GOLD', 'PLATINUM'] as const).map((tier) => (
              <button
                key={tier}
                id={`btn-filter-tier-${tier.toLowerCase()}`}
                onClick={() => setSelectedTier(tier)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
                  selectedTier === tier
                    ? 'bg-[#ec4899] text-white shadow-2xs font-extrabold'
                    : 'bg-[#fff5f8] text-[#6b555c] hover:text-[#1f1619] border border-pink-100'
                }`}
              >
                {tier === 'ALL' ? 'All Tiers (31)' : tier === 'SILVER' ? '🥈 Silver (11)' : tier === 'GOLD' ? '🥇 Gold (11)' : '💎 Platinum (9)'}
              </button>
            ))}
          </div>

          {/* Apparatus & Search */}
          <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
            <div className="relative flex-1 sm:w-48">
              <Search className="w-3.5 h-3.5 text-[#ec4899] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search skills or cues..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-[#fff5f8] border border-pink-200 text-xs focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>

            {/* Apparatus Selector */}
            <select
              value={selectedApparatus}
              onChange={(e) => setSelectedApparatus(e.target.value as any)}
              className="py-1.5 px-3 rounded-xl bg-[#fff5f8] border border-pink-200 text-xs font-bold text-[#1f1619] focus:outline-none"
            >
              <option value="ALL">All Apparatus (4)</option>
              <option value="VAULT">🚀 Vault</option>
              <option value="BARS">⚡ Uneven Bars</option>
              <option value="BEAM">⚖️ Balance Beam</option>
              <option value="FLOOR">✨ Floor Exercise</option>
            </select>

            {/* View Mode Toggle */}
            <div className="hidden sm:flex items-center bg-[#fff5f8] p-0.5 rounded-xl border border-pink-200">
              <button
                onClick={() => setViewMode('table')}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                  viewMode === 'table' ? 'bg-white text-[#db2777] shadow-2xs' : 'text-[#6b555c]'
                }`}
              >
                Table
              </button>
              <button
                onClick={() => setViewMode('cards')}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                  viewMode === 'cards' ? 'bg-white text-[#db2777] shadow-2xs' : 'text-[#6b555c]'
                }`}
              >
                Cards
              </button>
            </div>
          </div>
        </div>

        {/* Clickable Export Links & Action Bar */}
        <div className="px-5 sm:px-7 py-2.5 bg-gradient-to-r from-pink-50 via-rose-50 to-amber-50 border-b border-pink-200 space-y-2 text-xs">
          <div className="flex flex-wrap items-center justify-between gap-2.5">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-[#1f1619] flex items-center gap-1.5">
                <Download className="w-4 h-4 text-[#ec4899]" />
                <span>Export & Clickable Links:</span>
              </span>
              <span className="text-[11px] text-[#6b555c] hidden md:inline">
                Click to download spreadsheets or open standalone interactive report
              </span>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              {/* Clickable Link 1: Gap Analysis CSV */}
              <div className="inline-flex items-center rounded-xl bg-white border border-pink-300 shadow-2xs overflow-hidden">
                <a
                  href="/gymtrack_skills_gap_analysis.csv"
                  download="gymtrack_skills_gap_analysis.csv"
                  id="link-download-gap-csv"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 hover:bg-pink-100 text-[#db2777] font-bold transition-all text-xs"
                  title="Download Gap Analysis Table with video links as CSV"
                >
                  <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Gap Table (CSV)</span>
                  <Download className="w-3 h-3 text-[#db2777]" />
                </a>
                <button
                  type="button"
                  onClick={() => handleCopyLink('/gymtrack_skills_gap_analysis.csv', 'Gap Table (CSV)')}
                  className="px-2 py-1.5 border-l border-pink-200 hover:bg-pink-100 text-gray-500 hover:text-pink-600 transition-colors"
                  title="Copy direct download link"
                >
                  {copiedLink === 'Gap Table (CSV)' ? (
                    <CheckCheck className="w-3.5 h-3.5 text-emerald-600" />
                  ) : (
                    <Copy className="w-3 h-3" />
                  )}
                </button>
              </div>

              {/* Clickable Link 2: Comprehensive Skills Curriculum CSV */}
              <div className="inline-flex items-center rounded-xl bg-white border border-slate-300 shadow-2xs overflow-hidden">
                <a
                  href="/gymtrack_comprehensive_skills_curriculum.csv"
                  download="gymtrack_comprehensive_skills_curriculum.csv"
                  id="link-download-curriculum-csv"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 hover:bg-pink-100 text-slate-800 font-bold transition-all text-xs"
                  title="Download All Aligned Skills across L1-10 with video tutorials as CSV"
                >
                  <FileSpreadsheet className="w-3.5 h-3.5 text-blue-600" />
                  <span>All Skills (CSV)</span>
                  <Download className="w-3 h-3 text-slate-600" />
                </a>
                <button
                  type="button"
                  onClick={() => handleCopyLink('/gymtrack_comprehensive_skills_curriculum.csv', 'All Skills (CSV)')}
                  className="px-2 py-1.5 border-l border-slate-200 hover:bg-slate-100 text-gray-500 hover:text-slate-800 transition-colors"
                  title="Copy direct download link"
                >
                  {copiedLink === 'All Skills (CSV)' ? (
                    <CheckCheck className="w-3.5 h-3.5 text-emerald-600" />
                  ) : (
                    <Copy className="w-3 h-3" />
                  )}
                </button>
              </div>

              {/* Clickable Link 3: Interactive HTML Standalone Page */}
              <div className="inline-flex items-center rounded-xl bg-[#ec4899] shadow-xs overflow-hidden text-white">
                <a
                  href="/gymtrack_skills_gap_analysis.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="link-open-standalone-html"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 hover:bg-[#db2777] font-black transition-all text-xs text-white"
                  title="Open full interactive HTML report in new tab"
                >
                  <FileText className="w-3.5 h-3.5 text-white" />
                  <span>Interactive Report (HTML)</span>
                  <ExternalLink className="w-3 h-3 text-white" />
                </a>
                <button
                  type="button"
                  onClick={() => handleCopyLink('/gymtrack_skills_gap_analysis.html', 'HTML Report')}
                  className="px-2 py-1.5 border-l border-pink-400 hover:bg-[#db2777] text-pink-100 hover:text-white transition-colors"
                  title="Copy link to interactive HTML report"
                >
                  {copiedLink === 'HTML Report' ? (
                    <CheckCheck className="w-3.5 h-3.5 text-white" />
                  ) : (
                    <Copy className="w-3 h-3" />
                  )}
                </button>
              </div>

              {/* Clickable Link 4: JSON Data */}
              <a
                href="/gymtrack_comprehensive_skills_curriculum.json"
                download="gymtrack_comprehensive_skills_curriculum.json"
                id="link-download-curriculum-json"
                className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-white hover:bg-gray-100 text-gray-700 border border-gray-300 font-bold transition-all text-xs"
                title="Download raw curriculum JSON"
              >
                <span>JSON</span>
                <Download className="w-3 h-3 text-gray-500" />
              </a>
            </div>
          </div>

          {/* Copyable Share URL Bar */}
          <div className="flex items-center justify-between gap-2 pt-1 border-t border-pink-200/60 text-[11px]">
            <div className="flex items-center gap-1.5 text-[#6b555c] overflow-hidden">
              <LinkIcon className="w-3.5 h-3.5 text-[#ec4899] shrink-0" />
              <span className="font-semibold shrink-0">Clickable Link:</span>
              <a
                href="/gymtrack_skills_gap_analysis.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#db2777] hover:underline font-mono truncate max-w-sm sm:max-w-md md:max-w-lg"
              >
                {typeof window !== 'undefined' ? `${window.location.origin}/gymtrack_skills_gap_analysis.html` : '/gymtrack_skills_gap_analysis.html'}
              </a>
            </div>

            <button
              onClick={() => handleCopyLink('/gymtrack_skills_gap_analysis.html', 'Direct Link')}
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-white hover:bg-pink-100 text-[#db2777] border border-pink-200 font-bold transition-all shrink-0"
            >
              {copiedLink === 'Direct Link' ? (
                <>
                  <CheckCheck className="w-3 h-3 text-emerald-600" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  <span>Copy Link</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Content Body: Table or Card View */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-slate-50/50">
          {filteredSkills.length === 0 ? (
            <div className="p-12 text-center bg-white rounded-3xl border border-pink-200 space-y-2">
              <Layers className="w-10 h-10 text-pink-400 mx-auto" />
              <h3 className="text-sm font-bold text-gray-800">No skills match your filters</h3>
              <p className="text-xs text-gray-500">Try clearing the search query or switching apparatus.</p>
            </div>
          ) : viewMode === 'table' ? (
            <div className="overflow-x-auto rounded-2xl border border-pink-200 bg-white shadow-xs">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-[#fff5f8] border-b border-pink-200 text-[#1f1619] font-black uppercase text-[10px] tracking-wider">
                    <th className="py-3 px-4">Level / Tier</th>
                    <th className="py-3 px-4">Apparatus</th>
                    <th className="py-3 px-4">Skill & Official Standard</th>
                    <th className="py-3 px-4">App Status</th>
                    <th className="py-3 px-4">Written Tutorial</th>
                    <th className="py-3 px-4">Video Demo</th>
                    <th className="py-3 px-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-pink-100">
                  {filteredSkills.map((item) => (
                    <tr key={item.id} className="hover:bg-pink-50/40 transition-colors">
                      {/* Tier */}
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        {getTierBadge(item.tier)}
                        <span className="block text-[10px] text-gray-500 mt-0.5">{item.usagEquivalent}</span>
                      </td>

                      {/* Apparatus */}
                      <td className="py-3.5 px-4 whitespace-nowrap font-bold text-gray-800">
                        {getApparatusIcon(item.apparatus)}
                      </td>

                      {/* Skill Name & Description */}
                      <td className="py-3.5 px-4 max-w-xs">
                        <div className="font-extrabold text-gray-900 text-sm">{item.name}</div>
                        <div className="text-[11px] text-pink-700 font-semibold">{item.elementCode} • Diff {item.difficulty}</div>
                        <div className="text-[11px] text-gray-600 line-clamp-2 mt-0.5">{item.shortDescription}</div>
                      </td>

                      {/* Status in App */}
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        {item.previousAppStatus === 'CAPTURED' ? (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-300 text-[10px] font-bold">
                            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                            <span>Previously Captured</span>
                          </span>
                        ) : (
                          <div className="space-y-0.5">
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-purple-50 text-purple-900 border border-purple-300 text-[10px] font-bold">
                              <Sparkles className="w-3 h-3 text-purple-600" />
                              <span>Gap Resolved ✓</span>
                            </span>
                            <span className="block text-[9px] text-purple-600 font-medium">Added to Curriculum</span>
                          </div>
                        )}
                      </td>

                      {/* Written Tutorial */}
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <button
                          onClick={() => setActiveTutorialItem(item)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-pink-50 hover:bg-pink-100 text-[#db2777] border border-pink-200 text-xs font-bold transition-colors"
                        >
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>Tutorial Cues ({item.writtenTutorial.steps.length})</span>
                        </button>
                      </td>

                      {/* Video */}
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <button
                          onClick={() => setActiveVideoItem(item)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 text-xs font-bold transition-colors"
                        >
                          <Play className="w-3.5 h-3.5 fill-current text-red-600" />
                          <span>Watch Video</span>
                        </button>
                      </td>

                      {/* Action */}
                      <td className="py-3.5 px-4 whitespace-nowrap text-right">
                        <button
                          onClick={() => {
                            if (onSelectSkillForPractice) {
                              const lvl = item.tier === 'SILVER' ? 3 : item.tier === 'GOLD' ? 4 : 6;
                              onSelectSkillForPractice(item.name, lvl);
                            }
                            onClose();
                          }}
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-[#ec4899] hover:bg-[#db2777] text-white text-xs font-bold transition-all shadow-2xs"
                        >
                          <span>Practice</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            /* Cards View for Mobile/Tablet */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredSkills.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-3xl p-5 border border-pink-200 shadow-xs flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      {getTierBadge(item.tier)}
                      <span className="text-xs font-bold text-gray-700">{getApparatusIcon(item.apparatus)}</span>
                    </div>

                    <div>
                      <h4 className="font-black text-gray-900 text-base">{item.name}</h4>
                      <p className="text-[11px] font-semibold text-pink-700">{item.elementCode} • Diff {item.difficulty}</p>
                      <p className="text-xs text-gray-600 mt-1 leading-relaxed">{item.shortDescription}</p>
                    </div>

                    {/* Status Badge */}
                    <div className="pt-1">
                      {item.previousAppStatus === 'CAPTURED' ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-300 text-[10px] font-bold">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                          <span>Platform Covered</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-900 border border-purple-300 text-[10px] font-bold">
                          <Sparkles className="w-3 h-3 text-purple-600" />
                          <span>Identified Gap → Resolved</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Dual Action Buttons */}
                  <div className="pt-2 border-t border-pink-100 flex items-center gap-2">
                    <button
                      onClick={() => setActiveTutorialItem(item)}
                      className="flex-1 py-2 px-3 rounded-xl bg-pink-50 hover:bg-pink-100 text-[#db2777] border border-pink-200 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Tutorial</span>
                    </button>
                    <button
                      onClick={() => setActiveVideoItem(item)}
                      className="flex-1 py-2 px-3 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow-2xs"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Video</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Info */}
        <div className="px-5 sm:px-7 py-3 border-t border-[#fce7f3] bg-[#fff5f8] flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2 text-gray-700">
            <Info className="w-4 h-4 text-[#ec4899] shrink-0" />
            <span>
              All 31 Silver, Gold, and Platinum standard elements now have verified video demonstrations and step-by-step coaching breakdown.
            </span>
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-[#1f1619] hover:bg-black text-white text-xs font-bold shadow-xs transition-colors shrink-0"
          >
            Close Review
          </button>
        </div>

        {/* SUB-MODAL 1: WRITTEN TUTORIAL VIEWER */}
        {activeTutorialItem && (
          <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in">
            <div className="relative w-full max-w-xl bg-white rounded-3xl p-6 shadow-2xl border border-pink-200 space-y-4 max-h-[90vh] overflow-y-auto">
              <div className="flex items-start justify-between gap-3 border-b border-pink-100 pb-3">
                <div>
                  <div className="flex items-center gap-2">
                    {getTierBadge(activeTutorialItem.tier)}
                    <span className="text-xs font-bold text-gray-600">{getApparatusIcon(activeTutorialItem.apparatus)}</span>
                  </div>
                  <h3 className="text-lg font-black text-gray-900 mt-1">{activeTutorialItem.name}</h3>
                  <p className="text-xs text-pink-700 font-semibold">{activeTutorialItem.elementCode} • {activeTutorialItem.usagEquivalent}</p>
                </div>
                <button
                  onClick={() => setActiveTutorialItem(null)}
                  className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Step-by-Step Execution */}
              <div className="space-y-2">
                <h4 className="text-xs font-black uppercase tracking-wider text-pink-700 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Step-by-Step Technical Execution</span>
                </h4>
                <div className="space-y-2">
                  {activeTutorialItem.writtenTutorial.steps.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-gray-800 bg-pink-50/50 p-2.5 rounded-xl border border-pink-100">
                      <span className="w-5 h-5 rounded-full bg-[#ec4899] text-white font-black text-[10px] flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <span className="leading-relaxed">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Coaching Cues */}
              <div className="space-y-2">
                <h4 className="text-xs font-black uppercase tracking-wider text-amber-800 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <span>Key Coaching Cues</span>
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeTutorialItem.writtenTutorial.keyCoachingCues.map((cue, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200 text-xs font-bold">
                      💡 {cue}
                    </span>
                  ))}
                </div>
              </div>

              {/* Common Faults */}
              <div className="space-y-2">
                <h4 className="text-xs font-black uppercase tracking-wider text-red-700 flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 text-red-600" />
                  <span>Common Deductions & Errors to Avoid</span>
                </h4>
                <ul className="space-y-1 text-xs text-gray-700 list-disc list-inside bg-red-50/40 p-3 rounded-2xl border border-red-100">
                  {activeTutorialItem.writtenTutorial.commonFaults.map((fault, idx) => (
                    <li key={idx} className="leading-relaxed">{fault}</li>
                  ))}
                </ul>
              </div>

              {/* Prerequisites */}
              {activeTutorialItem.writtenTutorial.prerequisites && (
                <div className="text-xs text-gray-600 bg-gray-50 p-2.5 rounded-xl">
                  <span className="font-bold text-gray-800">Prerequisites: </span>
                  {activeTutorialItem.writtenTutorial.prerequisites.join(' • ')}
                </div>
              )}

              {/* Direct Video Trigger inside Tutorial Modal */}
              <div className="pt-2 flex items-center justify-end gap-2 border-t border-pink-100">
                <button
                  onClick={() => {
                    const itm = activeTutorialItem;
                    setActiveTutorialItem(null);
                    setActiveVideoItem(itm);
                  }}
                  className="px-4 py-2 rounded-full bg-red-600 hover:bg-red-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-2xs"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Watch Video Demonstration</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* SUB-MODAL 2: VIDEO PLAYER VIEWER */}
        {activeVideoItem && (
          <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-in fade-in">
            <div className="relative w-full max-w-2xl bg-[#1f1619] rounded-3xl overflow-hidden shadow-2xl border border-pink-200/20 text-white flex flex-col max-h-[92vh]">
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-[#2b1f24]">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-full bg-[#ec4899] text-white text-[10px] font-black uppercase">
                    {activeVideoItem.tier}
                  </span>
                  <h4 className="text-sm font-bold text-white truncate">{activeVideoItem.name}</h4>
                </div>
                <button
                  onClick={() => setActiveVideoItem(null)}
                  className="w-8 h-8 rounded-full bg-white/10 text-white hover:bg-white/20 flex items-center justify-center"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* 16:9 Video Container */}
              <div className="relative w-full bg-black aspect-video flex items-center justify-center">
                <iframe
                  src={`${activeVideoItem.videoTutorial.embedUrl}?autoplay=1&rel=0&playsinline=1`}
                  title={activeVideoItem.videoTutorial.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Info & Direct Link */}
              <div className="p-4 bg-[#1f1619] space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h5 className="text-sm font-bold text-white">{activeVideoItem.videoTutorial.title}</h5>
                    <p className="text-xs text-pink-300 font-semibold">{activeVideoItem.videoTutorial.channelName}</p>
                  </div>
                  <a
                    href={activeVideoItem.videoTutorial.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-red-600 hover:bg-red-700 text-white text-xs font-bold shrink-0 shadow-2xs"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>Open on YouTube</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-white/10 text-xs">
                  <button
                    onClick={() => {
                      const itm = activeVideoItem;
                      setActiveVideoItem(null);
                      setActiveTutorialItem(itm);
                    }}
                    className="text-pink-300 hover:text-white underline font-bold flex items-center gap-1"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>View Written Tutorial Breakdown</span>
                  </button>

                  <button
                    onClick={() => setActiveVideoItem(null)}
                    className="px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold"
                  >
                    Done
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
