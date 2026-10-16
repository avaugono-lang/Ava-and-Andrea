import React, { useState } from 'react';
import { useGym } from '../context/GymContext';
import { matchingTutorial, skillIsRequired, skillsForLevel, submissionLabel } from '../lib/curriculum';
import { Skill, USAGLevel } from '../types';

export const ProgressScreen: React.FC = () => {
  const { user, skills, openSkill, submitSkillVideo, changeUserLevel, updateUserProfile, certificates } = useGym();
  const [panel, setPanel] = useState<'mastered' | 'unlock' | null>('unlock');
  const [message, setMessage] = useState<string | null>(null);
  const offersBars = user.offersBars !== false;
  const offersBeam = user.offersBeam !== false;
  const levelSkills = skillsForLevel(skills, user.level);
  const required = levelSkills.filter((skill) => skillIsRequired(skill, offersBars, offersBeam));
  const mastered = required.filter((skill) => skill.status === 'VERIFIED');
  const remaining = required.filter((skill) => skill.status !== 'VERIFIED');
  const ready = required.length > 0 && remaining.length === 0;
  const mine = certificates.filter((item) => item.gymnastName === user.fullName);

  const upload = (skill: Skill, file: File | undefined) => {
    if (!file) return;
    if (file.size > 6 * 1024 * 1024) {
      setMessage('That video is over 6 MB. A smaller clip can be stored. Larger clips need the video store.');
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const url = typeof reader.result === 'string' ? reader.result : undefined;
      submitSkillVideo(skill.id, file.name, url);
      setMessage(`${skill.name} is awaiting approval. This stays a private assessment.`);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6 space-y-8">
      <header>
        <h1 className="font-display text-3xl text-[#3E1B4A]">My Progress</h1>
        <p className="text-sm text-[#5C4A68] mt-1">Level {user.level} · {mastered.length} of {required.length} required skills approved</p>
      </header>

      <section className="grid grid-cols-2 gap-3">
        <button type="button" onClick={() => setPanel('mastered')} className={`text-left rounded-2xl border p-4 ${panel === 'mastered' ? 'bg-[#5C2A6E] text-white border-[#5C2A6E]' : 'bg-white border-[#E4D7EE]'}`}>
          <span className="block text-sm">Mastered</span>
          <span className="font-display text-3xl">{mastered.length}</span>
        </button>
        <button type="button" onClick={() => setPanel('unlock')} className={`text-left rounded-2xl border p-4 ${panel === 'unlock' ? 'bg-[#5C2A6E] text-white border-[#5C2A6E]' : 'bg-white border-[#E4D7EE]'}`}>
          <span className="block text-sm">To Unlock</span>
          <span className="font-display text-3xl">{remaining.length}</span>
        </button>
      </section>

      {panel === 'mastered' && (
        <section className="bg-white border border-[#E4D7EE] rounded-2xl p-4 space-y-2">
          <h2 className="font-display text-xl text-[#3E1B4A]">Mastered</h2>
          {mastered.length === 0 && <p className="text-sm text-[#5C4A68]">No approved skills at this level yet.</p>}
          {mastered.map((skill) => (
            <p key={skill.id} className="text-sm flex justify-between gap-3 border-b border-[#F4EEF8] py-2">
              <span>{skill.name}</span>
              <span className="text-[#5C2A6E]">Approved</span>
            </p>
          ))}
        </section>
      )}

      {panel === 'unlock' && (
        <section className="bg-white border border-[#E4D7EE] rounded-2xl p-4 space-y-2">
          <h2 className="font-display text-xl text-[#3E1B4A]">To Unlock</h2>
          {remaining.length === 0 && <p className="text-sm text-[#5C4A68]">Nothing left at this level.</p>}
          {remaining.map((skill) => (
            <div key={skill.id} className="flex items-center justify-between gap-3 border-b border-[#F4EEF8] py-2">
              <span className="text-sm">{skill.name}</span>
              <button type="button" onClick={() => openSkill(skill.id)} className="text-sm text-[#5C2A6E] shrink-0">
                {matchingTutorial(skill) ? 'Watch demonstration' : 'Demonstration unavailable'}
              </button>
            </div>
          ))}
        </section>
      )}

      <section className="space-y-3">
        <h2 className="font-display text-2xl text-[#3E1B4A]">Skills to submit</h2>
        <p className="text-sm text-[#5C4A68]">Upload a private video for each skill still to finish. Your club reviews it. It is not posted on Connect.</p>
        <div className="flex flex-wrap gap-4 text-sm">
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={!offersBars} onChange={(event) => updateUserProfile({ offersBars: !event.target.checked })} />
            Club has no uneven bars
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={!offersBeam} onChange={(event) => updateUserProfile({ offersBeam: !event.target.checked })} />
            Club has no beam
          </label>
        </div>
        {message && <p className="text-sm text-[#3E1B4A]">{message}</p>}
        <div className="space-y-3">
          {required.map((skill) => (
            <article key={skill.id} className="bg-white border border-[#E4D7EE] rounded-2xl p-4 space-y-2">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-[#241628]">{skill.name}</h3>
                <span className="text-xs text-[#5C2A6E] shrink-0">{submissionLabel(skill.status)}</span>
              </div>
              {skill.verifiedNote && skill.status === 'CHANGES_REQUIRED' && (
                <p className="text-sm text-[#5C4A68]">Club note: {skill.verifiedNote}</p>
              )}
              {skill.status !== 'VERIFIED' && (
                <label className="inline-block text-sm text-white bg-[#5C2A6E] rounded-full px-4 py-2 cursor-pointer">
                  Upload video
                  <input
                    type="file"
                    accept="video/*"
                    capture="environment"
                    className="hidden"
                    onChange={(event) => upload(skill, event.target.files?.[0])}
                  />
                </label>
              )}
              {skill.videoPreviewUrl?.startsWith('data:video') && (
                <video src={skill.videoPreviewUrl} controls className="w-full rounded-xl bg-black max-h-56" />
              )}
            </article>
          ))}
        </div>
        {ready && user.level < 10 && (
          <button
            type="button"
            onClick={() => changeUserLevel((user.level + 1) as USAGLevel)}
            className="px-4 py-2 rounded-full bg-[#5C2A6E] text-white text-sm"
          >
            Mark level {user.level} complete and move to level {user.level + 1}
          </button>
        )}
      </section>

      {mine.length > 0 && (
        <section className="space-y-2">
          <h2 className="font-display text-2xl text-[#3E1B4A]">Certificates</h2>
          {mine.map((item) => (
            <article key={item.id} className="bg-white border border-[#E4D7EE] rounded-2xl p-4">
              <p className="font-display text-xl text-[#3E1B4A]">Level {item.level}</p>
              <p className="text-sm text-[#5C4A68]">{item.note}</p>
            </article>
          ))}
        </section>
      )}
    </div>
  );
};
