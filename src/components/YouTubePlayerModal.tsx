import React, { useState } from 'react';
import { Skill } from '../types';
import { X, CheckCircle2, Play, ExternalLink, Info, Shield, Flame } from 'lucide-react';

interface YouTubePlayerModalProps {
  skill: Skill | null;
  onClose: () => void;
}

export const YouTubePlayerModal: React.FC<YouTubePlayerModalProps> = ({ skill, onClose }) => {
  const [useNoCookie, setUseNoCookie] = useState(false);

  if (!skill || !skill.tutorial) return null;

  const { tutorial } = skill;
  const domain = useNoCookie ? 'https://www.youtube-nocookie.com' : 'https://www.youtube.com';
  const embedUrl = `${domain}/embed/${tutorial.videoId}?autoplay=1&rel=0&playsinline=1&modestbranding=1`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-[#1f1619] rounded-3xl overflow-hidden shadow-2xl border border-[#fce7f3]/20 flex flex-col max-h-[94vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10 bg-[#2b1f24]">
          <div className="flex items-center gap-2 min-w-0">
            <span className="px-2 py-0.5 rounded-full bg-[#ec4899] text-white text-[10px] font-extrabold uppercase tracking-wider">
              Lvl {skill.level} • {skill.category}
            </span>
            <h3 className="text-sm font-bold text-white truncate">
              {skill.name}
            </h3>
          </div>
          <button
            id="btn-close-youtube-modal"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 text-white/80 hover:text-white hover:bg-white/20 flex items-center justify-center transition-colors shrink-0"
            aria-label="Close tutorial player"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Video Player Container (16:9 Aspect Ratio) */}
        <div className="relative w-full bg-black aspect-video flex items-center justify-center">
          <iframe
            key={`${tutorial.videoId}_${useNoCookie ? 'nocookie' : 'standard'}`}
            src={embedUrl}
            title={tutorial.title}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        {/* Video Info & Coaching Context */}
        <div className="p-5 space-y-3.5 overflow-y-auto bg-[#1f1619] text-white">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="min-w-0">
              <h4 className="text-base font-bold text-white leading-snug">
                {tutorial.title}
              </h4>
              <div className="flex flex-wrap items-center gap-2 mt-1">
                <CheckCircle2 className="w-4 h-4 text-[#facc15] shrink-0" />
                <span className="text-xs font-semibold text-[#fce7f3]/90">
                  {tutorial.channelName}
                </span>
                <span className="text-[11px] text-white/50">• Individual Skill Tutorial</span>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <a
                href={tutorial.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="btn-open-youtube-direct"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full bg-[#ef4444] hover:bg-[#dc2626] text-white text-xs font-bold transition-all shadow-md shadow-red-500/20"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Watch on YouTube</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Fallback tip if user browser blocks iframe playback */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white/70">
            <div className="flex items-center gap-2">
              <Info className="w-4 h-4 text-amber-400 shrink-0" />
              <span>If player shows "Unavailable" in your browser iframe:</span>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => setUseNoCookie(!useNoCookie)}
                className="text-[11px] font-medium text-[#fce7f3] underline hover:text-white"
              >
                Switch to {useNoCookie ? 'standard player' : 'no-cookie player'}
              </button>
              <span className="text-white/30">•</span>
              <a
                href={tutorial.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-bold text-pink-400 hover:text-pink-300 underline"
              >
                Open directly ↗
              </a>
            </div>
          </div>

          {/* Skill Coaching Technique & Written Tutorial */}
          {skill.writtenTutorial ? (
            <div className="space-y-3 p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-black text-[#facc15] uppercase tracking-wide">
                  <Flame className="w-4 h-4 shrink-0" />
                  <span>Official Coaching Breakdown</span>
                </div>
                <span className="text-[10px] text-pink-300 font-bold">
                  {skill.officialRef || `Level ${skill.level} Standard`}
                </span>
              </div>

              {/* Steps */}
              <div className="space-y-1.5">
                <span className="text-[11px] font-bold text-white/90">Execution Steps:</span>
                {skill.writtenTutorial.steps.map((step, sIdx) => (
                  <div key={sIdx} className="flex items-start gap-2 text-xs text-white/80">
                    <span className="w-4 h-4 rounded-full bg-[#ec4899] text-white text-[9px] font-black flex items-center justify-center shrink-0 mt-0.5">
                      {sIdx + 1}
                    </span>
                    <span className="leading-snug">{step}</span>
                  </div>
                ))}
              </div>

              {/* Key Coaching Cues */}
              {skill.writtenTutorial.keyCoachingCues.length > 0 && (
                <div className="pt-1">
                  <span className="text-[11px] font-bold text-[#facc15] block mb-1">Key Coaching Cues:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {skill.writtenTutorial.keyCoachingCues.map((cue, cIdx) => (
                      <span key={cIdx} className="px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-200 border border-amber-400/30 text-[10px] font-semibold">
                        💡 {cue}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Common Faults */}
              {skill.writtenTutorial.commonFaults.length > 0 && (
                <div className="pt-1">
                  <span className="text-[11px] font-bold text-red-400 block mb-1">Deductions to Avoid:</span>
                  <ul className="text-[11px] text-white/70 space-y-0.5 list-disc list-inside">
                    {skill.writtenTutorial.commonFaults.map((fault, fIdx) => (
                      <li key={fIdx}>{fault}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-bold text-[#facc15]">
                <Flame className="w-4 h-4 shrink-0" />
                <span>USAG Technique Focus for {skill.name}</span>
              </div>
              <p className="text-xs text-[#fce7f3]/80 leading-relaxed">
                {skill.description}
              </p>
            </div>
          )}

          {/* Training Safety & Form Checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-white/70">
            <div className="flex items-center gap-2 p-2 rounded-xl bg-white/5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Focus on toe point & locked posture</span>
            </div>
            <div className="flex items-center gap-2 p-2 rounded-xl bg-white/5">
              <Shield className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Use proper safety mats and spotter</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
