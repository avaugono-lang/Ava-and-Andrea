import React, { useState, useEffect } from 'react';
import { checkYouTubeApiStatus } from '../services/youtubeService';
import { Video, X, CheckCircle2, Info, HelpCircle, AlertCircle, Sparkles } from 'lucide-react';

interface YouTubeApiInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  customApiKey: string;
  onSaveCustomApiKey: (key: string) => void;
}

export const YouTubeApiInfoModal: React.FC<YouTubeApiInfoModalProps> = ({
  isOpen,
  onClose,
  customApiKey,
  onSaveCustomApiKey,
}) => {
  const [serverStatus, setServerStatus] = useState<{ hasApiKey: boolean } | null>(null);
  const [testKeyInput, setTestKeyInput] = useState(customApiKey);
  const [testResult, setTestResult] = useState<{ success: boolean; message: string } | null>(null);
  const [testing, setTesting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      checkYouTubeApiStatus().then(setServerStatus);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleTestKey = async () => {
    setTesting(true);
    setTestResult(null);

    try {
      const res = await fetch('/api/youtube/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-youtube-api-key': testKeyInput.trim(),
        },
        body: JSON.stringify({
          skillName: 'Cartwheel',
          level: 1,
          category: 'FLOOR',
          apiKey: testKeyInput.trim(),
        }),
      });

      const data = await res.json();
      if (data.found && data.tutorial) {
        setTestResult({
          success: true,
          message: `Success! Found: "${data.tutorial.title}" by ${data.tutorial.channelName}`,
        });
        onSaveCustomApiKey(testKeyInput.trim());
      } else {
        setTestResult({
          success: false,
          message: data.message || 'API request succeeded but no matching video was found.',
        });
      }
    } catch (err: any) {
      setTestResult({
        success: false,
        message: err.message || 'Failed to reach search service.',
      });
    } finally {
      setTesting(false);
    }
  };

  const isConfigured = !!serverStatus?.hasApiKey || !!customApiKey;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl border border-[#fce7f3] flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#fce7f3] bg-[#fff5f8]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center shadow-xs">
              <Video className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="text-base font-extrabold text-[#1f1619]">
                YouTube Tutorial System
              </h3>
              <p className="text-[11px] text-[#6b555c]">
                Google YouTube Data API v3 Setup & Status
              </p>
            </div>
          </div>
          <button
            id="btn-close-api-info-modal"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-black/5 hover:bg-black/10 text-[#6b555c] flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 space-y-4 overflow-y-auto text-[#1f1619]">
          {/* Status Alert Banner */}
          <div
            className={`p-3.5 rounded-2xl border flex items-start gap-3 ${
              isConfigured
                ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
                : 'bg-amber-50 border-amber-200 text-amber-950'
            }`}
          >
            {isConfigured ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            ) : (
              <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            )}
            <div className="text-xs space-y-1">
              <p className="font-bold">
                {isConfigured
                  ? 'YouTube Data API Active & Ready'
                  : 'Automated Verified Pipeline Ready'}
              </p>
              <p className="text-[#6b555c] leading-relaxed">
                {isConfigured
                  ? 'Your app is querying YouTube Data API v3 in real-time to find individual skill tutorials.'
                  : 'Skills use authentic verified coaching videos from GymnasticsHQ, CBBC Gym Stars, and Nick Ruddock. To enable direct live API queries, add your YouTube Data API v3 key below.'}
              </p>
            </div>
          </div>

          {/* Setup Instructions */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#854d0e] flex items-center gap-1.5">
              <HelpCircle className="w-4 h-4 text-amber-600" />
              <span>API Enablement Instructions</span>
            </h4>

            <div className="space-y-2 text-xs text-[#4a3b40] bg-[#fffdf0] p-3.5 rounded-2xl border border-[#fef08a]">
              <div className="flex gap-2">
                <span className="font-bold text-[#ec4899]">1.</span>
                <span>
                  <strong>Service to Enable:</strong> In{' '}
                  <a
                    href="https://console.cloud.google.com/apis/library/youtube.googleapis.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#db2777] underline font-semibold"
                  >
                    Google Cloud Console
                  </a>
                  , enable <strong>YouTube Data API v3</strong>.
                </span>
              </div>
              <div className="flex gap-2">
                <span className="font-bold text-[#ec4899]">2.</span>
                <span>
                  <strong>Generate Key:</strong> Go to <em>APIs & Services &gt; Credentials</em> and click{' '}
                  <em>Create Credentials &gt; API Key</em>.
                </span>
              </div>
              <div className="flex gap-2">
                <span className="font-bold text-[#ec4899]">3.</span>
                <span>
                  <strong>Where to Add Key:</strong> In your app root, add{' '}
                  <code className="px-1.5 py-0.5 rounded bg-black/5 text-[#db2777] font-mono text-[11px]">
                    YOUTUBE_API_KEY=AIzaSy...
                  </code>{' '}
                  in <code>.env</code> or AI Studio Secrets panel.
                </span>
              </div>
            </div>
          </div>

          {/* In-app Key Tester */}
          <div className="p-3.5 rounded-2xl bg-[#fff5f8] border border-[#fce7f3] space-y-2.5">
            <label className="block text-xs font-bold text-[#1f1619]">
              Test or Enter API Key for this Session:
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={testKeyInput}
                onChange={(e) => setTestKeyInput(e.target.value)}
                placeholder="AIzaSy..."
                className="flex-1 px-3 py-2 text-xs rounded-xl bg-white border border-[#fce7f3] focus:outline-hidden focus:border-[#ec4899] font-mono"
              />
              <button
                id="btn-test-youtube-api-key"
                onClick={handleTestKey}
                disabled={testing || !testKeyInput.trim()}
                className="px-4 py-2 rounded-xl bg-[#ec4899] hover:bg-[#db2777] text-white text-xs font-bold disabled:opacity-50 transition-colors shadow-xs"
              >
                {testing ? 'Testing...' : 'Test & Save'}
              </button>
            </div>

            {testResult && (
              <div
                className={`p-2.5 rounded-xl text-xs flex items-center gap-2 ${
                  testResult.success
                    ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}
              >
                {testResult.success ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                ) : (
                  <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                )}
                <span>{testResult.message}</span>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-3 border-t border-[#fce7f3] bg-[#fffdf0] flex justify-end">
          <button
            id="btn-done-api-modal"
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-[#1f1619] text-white text-xs font-bold hover:bg-[#332228] transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
