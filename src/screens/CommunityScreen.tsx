import React, { useState } from 'react';
import { useGym } from '../context/GymContext';
import { ApparatusCategory } from '../types';
import { 
  Plus, 
  Heart, 
  MessageCircle, 
  Send, 
  X, 
  Sparkles, 
  Upload, 
  ShieldCheck, 
  Share2 
} from 'lucide-react';

export const CommunityScreen: React.FC = () => {
  const { communityPosts, addCommunityPost, reactToPost, addCommentToPost } = useGym();
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newApparatus, setNewApparatus] = useState<ApparatusCategory>('FLOOR');
  const [activeCommentPostId, setActiveCommentPostId] = useState<string | null>(null);
  const [commentInput, setCommentInput] = useState('');

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;
    addCommunityPost(newTitle, newDescription, newApparatus);
    setNewTitle('');
    setNewDescription('');
    setShowUploadModal(false);
  };

  const handleSendComment = (postId: string, text?: string) => {
    const finalComment = text || commentInput;
    if (!finalComment.trim()) return;
    addCommentToPost(postId, finalComment);
    setCommentInput('');
  };

  return (
    <div className="flex flex-col w-full max-w-2xl mx-auto px-4 space-y-5 pt-2 pb-16">
      {/* Screen Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ec4899] animate-pulse" />
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#854d0e] bg-[#fef9c3] border border-[#fef08a] px-2.5 py-0.5 rounded-full">
              African & Global Gymnasts
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1f1619] tracking-tight mt-1">
            Be Inspired ✨
          </h1>
          <p className="text-xs text-[#6b555c]">
            Share routine clips, cheer on teammates, and celebrate new skills
          </p>
        </div>

        <button
          id="btn-community-share-routine"
          onClick={() => setShowUploadModal(true)}
          className="px-4 py-2.5 rounded-full bg-gradient-to-r from-[#ec4899] to-[#f472b6] text-white text-xs font-bold shadow-md shadow-pink-500/20 active:scale-95 transition-all flex items-center gap-1.5 hover:opacity-95"
        >
          <Plus className="w-4 h-4" />
          <span>Share Routine</span>
        </button>
      </div>

      {/* Safety & Positive Community Guidelines Banner */}
      <div className="p-3.5 rounded-2xl bg-[#fffdf0] border border-[#fef08a] flex items-start gap-3 shadow-2xs">
        <Heart className="w-5 h-5 text-[#db2777] shrink-0 mt-0.5 fill-[#db2777]/20" />
        <div className="text-xs text-[#854d0e] space-y-0.5">
          <p className="font-extrabold">Positive Gymnastics Space</p>
          <p className="text-[11px] text-[#6b555c] leading-tight">
            Keep all feedback encouraging and constructive. We champion every gymnast's growth, safety, and sportsmanship.
          </p>
        </div>
      </div>

      {/* Community Posts Feed */}
      <div className="flex flex-col space-y-4">
        {communityPosts.map((post) => {
          const isCommenting = activeCommentPostId === post.id;

          return (
            <article
              key={post.id}
              id={`community-post-${post.id}`}
              className="bg-white rounded-3xl border border-[#fce7f3] shadow-[0_8px_24px_-4px_rgba(244,114,182,0.08)] overflow-hidden"
            >
              {/* Post Author Info */}
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={post.authorAvatar}
                    alt={post.authorName}
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-[#ec4899]/30"
                  />
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h3 className="text-sm font-bold text-[#1f1619] leading-tight">
                        {post.authorName}
                      </h3>
                      <span className="px-2 py-0.2 bg-[#fef9c3] text-[#854d0e] border border-[#fef08a] text-[10px] font-bold rounded-full">
                        Lvl {post.authorLevel}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#6b555c] mt-0.5">
                      {post.authorClub} • {post.date}
                    </p>
                  </div>
                </div>

                <span className="px-2.5 py-0.5 rounded-full bg-[#fff5f8] border border-[#fce7f3] text-[10px] font-bold text-[#db2777] uppercase tracking-wider">
                  {post.apparatus === 'VAULT' ? '🚀 Vault' : '✨ Floor'}
                </span>
              </div>

              {/* Video Player */}
              <div className="relative w-full aspect-video bg-black overflow-hidden">
                <video
                  src={post.videoUrl}
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Post Content */}
              <div className="p-4 space-y-3">
                <div>
                  <h4 className="text-sm font-bold text-[#1f1619] leading-snug">
                    {post.title}
                  </h4>
                  <p className="text-xs text-[#6b555c] mt-1 leading-relaxed">
                    {post.description}
                  </p>
                </div>

                {/* Reaction Buttons */}
                <div className="flex items-center gap-1.5 pt-1 border-t border-[#fce7f3]">
                  <button
                    onClick={() => reactToPost(post.id, 'heart')}
                    className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all flex items-center gap-1 ${
                      post.userReactions.heart
                        ? 'bg-[#fce7f3] text-[#db2777] scale-105'
                        : 'bg-[#fff5f8] text-[#6b555c] hover:bg-[#fce7f3]'
                    }`}
                  >
                    <span>❤️</span>
                    <span>{post.reactions.heart}</span>
                  </button>

                  <button
                    onClick={() => reactToPost(post.id, 'star')}
                    className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all flex items-center gap-1 ${
                      post.userReactions.star
                        ? 'bg-[#fef9c3] text-[#854d0e] scale-105'
                        : 'bg-[#fffdf0] text-[#6b555c] hover:bg-[#fef9c3]'
                    }`}
                  >
                    <span>⭐</span>
                    <span>{post.reactions.star}</span>
                  </button>

                  <button
                    onClick={() => reactToPost(post.id, 'clap')}
                    className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all flex items-center gap-1 ${
                      post.userReactions.clap
                        ? 'bg-[#fef9c3] text-[#854d0e] scale-105'
                        : 'bg-[#fffdf0] text-[#6b555c] hover:bg-[#fef9c3]'
                    }`}
                  >
                    <span>👏</span>
                    <span>{post.reactions.clap}</span>
                  </button>

                  <button
                    onClick={() => reactToPost(post.id, 'fire')}
                    className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all flex items-center gap-1 ${
                      post.userReactions.fire
                        ? 'bg-orange-100 text-orange-700 scale-105'
                        : 'bg-[#fff5f8] text-[#6b555c] hover:bg-orange-50'
                    }`}
                  >
                    <span>🔥</span>
                    <span>{post.reactions.fire}</span>
                  </button>

                  <button
                    id={`btn-toggle-comments-${post.id}`}
                    onClick={() => setActiveCommentPostId(isCommenting ? null : post.id)}
                    className="ml-auto text-xs font-bold text-[#db2777] flex items-center gap-1 hover:underline"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{post.comments.length} Cheers</span>
                  </button>
                </div>

                {/* Quick Encouragement Chips */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {['Pointed toes! ✨', 'Solid stick! 👏', 'Amazing form! 🔥', 'Keep it up! 💪'].map((quick) => (
                    <button
                      key={quick}
                      onClick={() => handleSendComment(post.id, quick)}
                      className="text-[11px] px-2.5 py-1 rounded-full bg-[#fffdf0] text-[#854d0e] border border-[#fef08a] hover:bg-[#fef9c3] transition-colors font-medium"
                    >
                      {quick}
                    </button>
                  ))}
                </div>

                {/* Comments List & Input */}
                {post.comments.length > 0 && (
                  <div className="space-y-2 pt-2 border-t border-[#fce7f3]">
                    {post.comments.map((comment) => (
                      <div key={comment.id} className="flex items-start gap-2 text-xs">
                        <img
                          src={comment.avatar}
                          alt={comment.author}
                          className="w-6 h-6 rounded-full object-cover shrink-0 mt-0.5 ring-1 ring-pink-200"
                        />
                        <div className="bg-[#fffdf0] px-3 py-1.5 rounded-2xl border border-[#fef08a] flex-1">
                          <div className="flex items-baseline justify-between">
                            <span className="font-bold text-[#1f1619]">{comment.author}</span>
                            <span className="text-[10px] text-[#6b555c]">{comment.timeAgo}</span>
                          </div>
                          <p className="text-[#6b555c] mt-0.5">{comment.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Custom Comment Field */}
                <div className="flex items-center gap-2 pt-2">
                  <input
                    type="text"
                    id={`input-comment-${post.id}`}
                    value={activeCommentPostId === post.id ? commentInput : ''}
                    onFocus={() => setActiveCommentPostId(post.id)}
                    onChange={(e) => setCommentInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') handleSendComment(post.id);
                    }}
                    placeholder="Write positive encouragement..."
                    className="flex-1 px-4 py-2 rounded-full bg-[#fff5f8] border border-[#fce7f3] text-xs text-[#1f1619] placeholder:text-[#6b555c]/60 focus:outline-none focus:ring-1 focus:ring-[#ec4899]"
                  />
                  <button
                    id={`btn-send-comment-${post.id}`}
                    onClick={() => handleSendComment(post.id)}
                    className="p-2 rounded-full bg-[#ec4899] text-white hover:bg-[#db2777] active:scale-95 transition-transform"
                    title="Send Cheer"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Upload Routine Video Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1f1619]/60 backdrop-blur-xs p-4">
          <div className="w-full max-w-md bg-white rounded-3xl p-6 shadow-2xl space-y-4 border border-[#fce7f3]">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-lg text-[#1f1619]">Share Routine Video</h3>
              <button
                id="btn-community-modal-close"
                onClick={() => setShowUploadModal(false)}
                className="w-8 h-8 rounded-full bg-[#fff5f8] border border-[#fce7f3] flex items-center justify-center text-[#6b555c]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleCreatePost} className="space-y-3">
              <div>
                <label className="text-xs font-bold text-[#1f1619] block mb-1">
                  Routine Title
                </label>
                <input
                  type="text"
                  required
                  id="input-routine-title"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="e.g. Clean Floor Routine Pass 🤸"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#fce7f3] text-xs focus:ring-2 focus:ring-pink-300 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-[#1f1619] block mb-1">
                  Apparatus
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {(['VAULT', 'BARS', 'BEAM', 'FLOOR'] as ApparatusCategory[]).map((app) => (
                    <button
                      type="button"
                      key={app}
                      id={`btn-routine-apparatus-${app.toLowerCase()}`}
                      onClick={() => setNewApparatus(app)}
                      className={`py-2.5 rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-1.5 ${
                        newApparatus === app
                          ? 'bg-[#ec4899] text-white shadow-2xs'
                          : 'bg-[#fff5f8] border border-[#fce7f3] text-[#6b555c]'
                      }`}
                    >
                      <span>
                        {app === 'VAULT'
                          ? '🚀 Vault'
                          : app === 'BARS'
                          ? '⚡ Bars'
                          : app === 'BEAM'
                          ? '⚖️ Beam'
                          : '✨ Floor'}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-[#1f1619] block mb-1">
                  Description / Practice Notes
                </label>
                <textarea
                  rows={3}
                  id="input-routine-description"
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                  placeholder="Tell teammates what drill you worked on or what cue helped..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#fce7f3] text-xs focus:ring-2 focus:ring-pink-300 focus:outline-none"
                />
              </div>

              <div className="pt-2 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setShowUploadModal(false)}
                  className="flex-1 py-2.5 rounded-full bg-[#fff5f8] border border-[#fce7f3] text-xs font-bold text-[#6b555c]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  id="btn-submit-community-post"
                  className="flex-1 py-2.5 rounded-full bg-gradient-to-r from-[#ec4899] to-[#f472b6] text-white text-xs font-bold shadow-md shadow-pink-500/20"
                >
                  Post to Community
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
