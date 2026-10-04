import React, { useEffect, useState } from 'react';
import { gymApi, InspoPost } from '../services/gymApi';
import { Heart, MessageCircle, Bookmark, Share2, Plus } from 'lucide-react';

const CATEGORIES = ['All', 'Floor', 'Vault', 'Bars', 'Beam', 'Tumbling', 'Flexibility', 'Strength', 'Skills', 'Training', 'Competitions', 'Challenges', 'Progress'];

export const InspoScreen: React.FC = () => {
  const [category, setCategory] = useState('All');
  const [posts, setPosts] = useState<InspoPost[]>([]);
  const [savedOnly, setSavedOnly] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState({
    skill: 'Back handspring',
    category: 'Floor',
    clubTag: 'Solynta Gymnastics Club',
    caption: '',
    hashtags: '#handspring',
    visibility: 'everyone',
    showAge: false,
    showLevel: false,
    videoUrl: '',
  });

  const load = async (next = category, saved = savedOnly) => {
    if (saved) {
      const result = await gymApi.saved();
      setPosts(result.posts);
      return;
    }
    const result = await gymApi.inspo(next);
    setPosts(result.posts);
  };

  useEffect(() => {
    load().catch(() => setPosts([]));
  }, [category, savedOnly]);

  const upload = async (event: React.FormEvent) => {
    event.preventDefault();
    setNotice(null);
    try {
      await gymApi.createInspo({
        ...draft,
        hashtags: draft.hashtags.split(/\s+/).filter(Boolean),
        videoUrl: draft.videoUrl || 'recorded-clip.mp4',
      });
      setOpen(false);
      await load();
    } catch (err) {
      const code = (err as { body?: { code?: string } }).body?.code;
      setNotice(code === 'PARENT_REQUIRED' ? 'A parent must accept before this video can be published.' : 'Sign in with a paid account to upload.');
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 pb-16 space-y-4">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-3xl font-black">Inspo</h1>
          <p className="text-xs text-[#6b555c]">Gymnastics videos from gymnasts. Comments are for encouragement.</p>
        </div>
        <button type="button" onClick={() => setOpen(true)} className="px-4 py-2 rounded-full bg-[#ec4899] text-white font-bold text-sm flex items-center gap-1">
          <Plus className="w-4 h-4" /> Upload Video
        </button>
      </div>
      <div className="flex gap-2 overflow-x-auto pb-1">
        {CATEGORIES.map((item) => (
          <button key={item} type="button" onClick={() => { setSavedOnly(false); setCategory(item); }} className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap ${category === item && !savedOnly ? 'bg-[#1f1619] text-white' : 'bg-white border border-[#fce7f3]'}`}>
            {item}
          </button>
        ))}
        <button type="button" onClick={() => setSavedOnly(true)} className={`px-3 py-1 rounded-full text-xs font-bold ${savedOnly ? 'bg-[#1f1619] text-white' : 'bg-white border border-[#fce7f3]'}`}>Saved</button>
      </div>
      {notice && <p className="text-sm text-red-600">{notice}</p>}
      {posts.map((post) => (
        <article key={post.id} className="bg-white rounded-3xl border border-[#fce7f3] overflow-hidden">
          <div className="bg-[#1f1619] text-white aspect-video flex items-center justify-center text-sm">{post.skill}</div>
          <div className="p-4 space-y-2">
            <p className="font-black">{post.authorName} <span className="font-medium text-[#6b555c]">@{post.username}</span></p>
            <p className="text-xs text-[#6b555c]">{post.clubName}{post.level ? ` · Level ${post.level}` : ''}{post.age ? ` · Age ${post.age}` : ''}</p>
            <p className="text-sm">{post.caption}</p>
            <p className="text-xs text-[#db2777]">{post.hashtags.join(' ')}</p>
            <div className="flex gap-3 text-sm">
              <button type="button" onClick={() => gymApi.like(post.id).then(() => load())} className="flex items-center gap-1"><Heart className="w-4 h-4" /> {post.likes}</button>
              <span className="flex items-center gap-1"><MessageCircle className="w-4 h-4" /> {post.comments.length}</span>
              <button type="button" onClick={() => gymApi.save(post.id).then(() => load())} className="flex items-center gap-1"><Bookmark className="w-4 h-4" /> Save</button>
              <button type="button" onClick={() => navigator.share?.({ title: post.skill, text: post.caption }).catch(() => undefined)} className="flex items-center gap-1"><Share2 className="w-4 h-4" /> Share</button>
              <button type="button" onClick={() => gymApi.follow(post.authorId).catch(() => undefined)} className="text-xs font-bold">Follow</button>
            </div>
            {post.comments.map((comment) => (
              <p key={comment.id} className="text-sm"><strong>{comment.authorName}: </strong>{comment.text}</p>
            ))}
            <form onSubmit={(event) => { event.preventDefault(); const text = new FormData(event.currentTarget).get('text'); gymApi.comment(post.id, String(text || '')).then(() => load()); event.currentTarget.reset(); }} className="flex gap-2">
              <input name="text" placeholder="Encourage them" className="flex-1 rounded-full border border-[#fce7f3] px-3 py-1 text-sm" />
              <button className="text-sm font-bold text-[#db2777]">Comment</button>
            </form>
          </div>
        </article>
      ))}
      {open && (
        <form onSubmit={upload} className="fixed inset-0 bg-black/40 flex items-end sm:items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl p-4 w-full max-w-md space-y-2">
            <h2 className="font-black text-lg">Upload Video</h2>
            <input value={draft.skill} onChange={(e) => setDraft({ ...draft, skill: e.target.value })} placeholder="Skill" className="w-full rounded-2xl border px-3 py-2 text-sm" />
            <select value={draft.category} onChange={(e) => setDraft({ ...draft, category: e.target.value })} className="w-full rounded-2xl border px-3 py-2 text-sm">
              {CATEGORIES.filter((item) => item !== 'All').map((item) => <option key={item}>{item}</option>)}
            </select>
            <input value={draft.clubTag} onChange={(e) => setDraft({ ...draft, clubTag: e.target.value })} placeholder="Club" className="w-full rounded-2xl border px-3 py-2 text-sm" />
            <input value={draft.hashtags} onChange={(e) => setDraft({ ...draft, hashtags: e.target.value })} placeholder="#hashtags" className="w-full rounded-2xl border px-3 py-2 text-sm" />
            <textarea value={draft.caption} onChange={(e) => setDraft({ ...draft, caption: e.target.value })} placeholder="Caption" className="w-full rounded-2xl border px-3 py-2 text-sm" />
            <select value={draft.visibility} onChange={(e) => setDraft({ ...draft, visibility: e.target.value })} className="w-full rounded-2xl border px-3 py-2 text-sm">
              <option value="everyone">Everyone</option>
              <option value="followers">Followers</option>
              <option value="club">My club</option>
            </select>
            <label className="text-xs flex gap-2"><input type="checkbox" checked={draft.showLevel} onChange={(e) => setDraft({ ...draft, showLevel: e.target.checked })} /> Show level</label>
            <label className="text-xs flex gap-2"><input type="checkbox" checked={draft.showAge} onChange={(e) => setDraft({ ...draft, showAge: e.target.checked })} /> Show age</label>
            <input type="file" accept="video/*" capture="environment" onChange={(e) => setDraft({ ...draft, videoUrl: e.target.files?.[0]?.name || '' })} className="text-xs" />
            <div className="flex gap-2">
              <button className="flex-1 py-2 rounded-full bg-[#ec4899] text-white font-bold">Post</button>
              <button type="button" onClick={() => setOpen(false)} className="flex-1 py-2 rounded-full border">Cancel</button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};
