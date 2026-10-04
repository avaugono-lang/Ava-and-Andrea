import React, { useState } from 'react';
import { useGym } from '../context/GymContext';
import { Workout } from '../types';
import { Clock, X, Play, CheckCircle2, Circle, Sparkles, ShieldCheck } from 'lucide-react';

interface Props {
  workout: Workout | null;
  onClose: () => void;
}

export const WorkoutModal: React.FC<Props> = ({ workout, onClose }) => {
  const { completeWorkout } = useGym();
  const [isPlaying, setIsPlaying] = useState(false);
  const [completedDrills, setCompletedDrills] = useState<Record<number, boolean>>({});

  if (!workout) return null;

  const toggleDrill = (index: number) => {
    setCompletedDrills((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleMarkComplete = () => {
    completeWorkout(workout.id);
  };

  const getYouTubeId = (url: string) => {
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
    return match ? match[1] : null;
  };

  const ytId = getYouTubeId(workout.videoUrl);
  const embedUrl = ytId ? `https://www.youtube-nocookie.com/embed/${ytId}?autoplay=1&rel=0` : null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-[#1f1619]/60 backdrop-blur-xs p-0 sm:p-4">
      <div className="w-full max-w-xl bg-white rounded-t-3xl sm:rounded-3xl p-5 sm:p-6 shadow-2xl space-y-4 border border-[#fce7f3] max-h-[92vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-[#fef9c3] text-[#854d0e] border border-[#fef08a] text-xs font-extrabold uppercase tracking-wider flex items-center gap-1">
              <span>{workout.category === 'STRENGTH' ? '💪' : '🧘‍♀️'}</span>
              <span>{workout.title} Routine</span>
            </span>
            <span className="text-xs text-[#6b555c] flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#db2777]" />
              <span>{workout.durationMin} mins • {workout.intensity}</span>
            </span>
          </div>
          <button
            id="btn-workout-modal-close"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#fff5f8] border border-[#fce7f3] flex items-center justify-center text-[#6b555c] hover:text-[#1f1619] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Video Player Card */}
        <div className="relative w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-inner flex items-center justify-center group">
          {isPlaying ? (
            embedUrl ? (
              <iframe
                src={embedUrl}
                title={workout.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <video
                src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            )
          ) : (
            <>
              <img
                src={workout.image}
                alt={workout.title}
                className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
              <button
                id="btn-workout-play-video"
                onClick={() => setIsPlaying(true)}
                className="relative z-10 w-16 h-16 rounded-full bg-[#ec4899] text-white flex items-center justify-center shadow-xl shadow-pink-500/40 hover:scale-110 active:scale-95 transition-all"
                title="Play Coaching Video"
              >
                <Play className="w-7 h-7 fill-current ml-0.5" />
              </button>
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs">
                <span className="text-[#fef08a] font-bold flex items-center gap-1">
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Tap to play video tutorial</span>
                </span>
                <a
                  href={workout.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white underline text-[11px]"
                  onClick={(e) => e.stopPropagation()}
                >
                  Watch on YouTube ↗
                </a>
              </div>
            </>
          )}
        </div>

        {/* Title & Description */}
        <div>
          <h2 className="text-xl font-extrabold text-[#1f1619] flex items-center gap-2">
            <span>{workout.category === 'STRENGTH' ? '💪' : '🧘‍♀️'}</span>
            <span>{workout.title} Training for Gymnasts</span>
          </h2>
          <p className="text-xs text-[#6b555c] mt-1 leading-relaxed">
            {workout.description}
          </p>
        </div>

        {/* Workout Focus Areas (Bullet Highlights) */}
        {workout.highlights && workout.highlights.length > 0 && (
          <div className="p-3.5 rounded-2xl bg-[#fffdf0] border border-[#fef08a] space-y-2">
            <h3 className="text-xs font-bold text-[#854d0e] uppercase tracking-wide flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#db2777]" />
              <span>Training Focus Areas</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
              {workout.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-[#1f1619] font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ec4899] shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Drill Progression Checklist */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-bold text-[#1f1619]">
            <span>Routine Exercises & Drills</span>
            <span className="text-[#db2777]">
              {Object.values(completedDrills).filter(Boolean).length}/{workout.exercises.length} Completed
            </span>
          </div>
          <div className="space-y-1.5">
            {workout.exercises.map((drill, idx) => {
              const isChecked = !!completedDrills[idx];
              return (
                <div
                  key={idx}
                  id={`drill-item-${idx}`}
                  onClick={() => toggleDrill(idx)}
                  className={`p-3 rounded-2xl border flex items-center justify-between cursor-pointer transition-colors ${
                    isChecked
                      ? 'bg-[#fce7f3]/80 border-pink-200 text-[#db2777]'
                      : 'bg-white border-[#fce7f3] text-[#1f1619] hover:bg-[#fff9fb]'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    {isChecked ? (
                      <CheckCircle2 className="w-5 h-5 text-[#db2777] shrink-0" />
                    ) : (
                      <Circle className="w-5 h-5 text-gray-400 shrink-0" />
                    )}
                    <span className="text-xs font-semibold">{drill}</span>
                  </div>
                  <span className="text-[10px] text-[#6b555c] shrink-0 font-medium">Drill #{idx + 1}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-2">
          {workout.completedToday ? (
            <div className="w-full py-3.5 rounded-full bg-[#fef9c3] border border-[#fef08a] text-[#854d0e] text-center font-bold text-xs flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#db2777]" />
              <span>Routine Completed for Today (+{workout.xpReward} XP Awarded)</span>
            </div>
          ) : (
            <button
              id="btn-workout-mark-complete"
              onClick={handleMarkComplete}
              className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#ec4899] to-[#db2777] text-white font-bold text-sm shadow-lg shadow-pink-500/25 active:scale-98 transition-all flex items-center justify-center gap-2"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Complete Routine (+{workout.xpReward} XP)</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
