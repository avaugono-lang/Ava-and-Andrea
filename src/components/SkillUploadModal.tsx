import React, { useState, useRef, useEffect } from 'react';
import { useGym } from '../context/GymContext';
import { Skill } from '../types';
import {
  Camera,
  Images,
  Video,
  X,
  ShieldAlert,
  Clock,
  RotateCcw,
  Upload,
  CheckCircle2,
  AlertTriangle,
  Smartphone,
  Lightbulb,
  UserCheck,
  Flame,
  Film
} from 'lucide-react';

interface Props {
  skill: Skill | null;
  initialSource?: 'camera' | 'photos' | null;
  onClose: () => void;
}

export const SkillUploadModal: React.FC<Props> = ({ skill, initialSource, onClose }) => {
  const { submitSkillVideo, verifySkill } = useGym();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [videoSourceType, setVideoSourceType] = useState<'camera' | 'photos' | null>(initialSource || null);
  const [submitting, setSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  // In-app Live Camera state
  const [isLiveCameraActive, setIsLiveCameraActive] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [recordingSeconds, setRecordingSeconds] = useState(0);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const [countdown, setCountdown] = useState<number | null>(null);

  const nativeCameraInputRef = useRef<HTMLInputElement>(null);
  const photosInputRef = useRef<HTMLInputElement>(null);
  const liveVideoPreviewRef = useRef<HTMLVideoElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);
  const recordedChunksRef = useRef<Blob[]>([]);
  const recordingTimerRef = useRef<number | null>(null);

  // Stop camera tracks cleanly
  const stopLiveCameraStream = () => {
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach((track) => track.stop());
      mediaStreamRef.current = null;
    }
    if (recordingTimerRef.current) {
      clearInterval(recordingTimerRef.current);
      recordingTimerRef.current = null;
    }
    setIsLiveCameraActive(false);
    setIsRecording(false);
    setRecordingSeconds(0);
    setCountdown(null);
  };

  // Cleanup on unmount or skill change
  useEffect(() => {
    return () => {
      stopLiveCameraStream();
    };
  }, []);

  // Handle initialSource on open
  useEffect(() => {
    if (!skill) return;

    if (initialSource === 'camera') {
      // Trigger native camera capture input after short mount delay
      const timer = setTimeout(() => {
        nativeCameraInputRef.current?.click();
      }, 150);
      return () => clearTimeout(timer);
    } else if (initialSource === 'photos') {
      // Trigger photos library picker after short mount delay
      const timer = setTimeout(() => {
        photosInputRef.current?.click();
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [skill, initialSource]);

  if (!skill) return null;

  // Handle file selected from either native camera or photos picker
  const handleFilePicked = (e: React.ChangeEvent<HTMLInputElement>, source: 'camera' | 'photos') => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      setVideoSourceType(source);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      stopLiveCameraStream();
    }
  };

  // Start in-app webcam / live camera
  const startLiveInAppCamera = async () => {
    setCameraError(null);
    try {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        throw new Error('In-app live camera is not supported in this browser. Please use the Device Camera button instead.');
      }

      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'user', width: { ideal: 1280 }, height: { ideal: 720 } },
        audio: true,
      });

      mediaStreamRef.current = stream;
      setIsLiveCameraActive(true);
      setVideoSourceType('camera');

      // Wait a tick for ref to bind
      setTimeout(() => {
        if (liveVideoPreviewRef.current) {
          liveVideoPreviewRef.current.srcObject = stream;
          liveVideoPreviewRef.current.play().catch(() => {});
        }
      }, 100);
    } catch (err: any) {
      console.warn('Live camera error:', err);
      setCameraError(err.message || 'Unable to access camera. Please check permissions or use the Device Camera option.');
      // Fallback to native camera input
      nativeCameraInputRef.current?.click();
    }
  };

  // Start recording live video
  const startRecordingLiveVideo = () => {
    if (!mediaStreamRef.current) return;
    setCountdown(3);

    let count = 3;
    const countInterval = setInterval(() => {
      count -= 1;
      if (count > 0) {
        setCountdown(count);
      } else {
        clearInterval(countInterval);
        setCountdown(null);
        beginMediaRecording();
      }
    }, 1000);
  };

  const beginMediaRecording = () => {
    if (!mediaStreamRef.current) return;
    recordedChunksRef.current = [];

    const options = MediaRecorder.isTypeSupported('video/webm;codecs=vp9,opus')
      ? { mimeType: 'video/webm;codecs=vp9,opus' }
      : MediaRecorder.isTypeSupported('video/webm')
      ? { mimeType: 'video/webm' }
      : MediaRecorder.isTypeSupported('video/mp4')
      ? { mimeType: 'video/mp4' }
      : undefined;

    try {
      const recorder = new MediaRecorder(mediaStreamRef.current, options);
      mediaRecorderRef.current = recorder;

      recorder.ondataavailable = (event) => {
        if (event.data && event.data.size > 0) {
          recordedChunksRef.current.push(event.data);
        }
      };

      recorder.onstop = () => {
        const mimeType = recorder.mimeType || 'video/webm';
        const blob = new Blob(recordedChunksRef.current, { type: mimeType });
        const fileName = `${skill.name.toLowerCase().replace(/\s+/g, '_')}_camera_routine.webm`;
        const file = new File([blob], fileName, { type: mimeType });
        const url = URL.createObjectURL(blob);

        setSelectedFile(file);
        setPreviewUrl(url);
        setVideoSourceType('camera');
        stopLiveCameraStream();
      };

      recorder.start(500);
      setIsRecording(true);
      setRecordingSeconds(0);

      recordingTimerRef.current = window.setInterval(() => {
        setRecordingSeconds((prev) => {
          if (prev >= 60) {
            // Max 60 seconds routine
            stopRecordingLiveVideo();
            return 60;
          }
          return prev + 1;
        });
      }, 1000);
    } catch (err: any) {
      setCameraError('Recording failed to initialize. Try using the Device Camera button.');
    }
  };

  const stopRecordingLiveVideo = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      mediaRecorderRef.current.stop();
    }
    if (recordingTimerRef.current) {
      clearInterval(recordingTimerRef.current);
      recordingTimerRef.current = null;
    }
    setIsRecording(false);
  };

  const handleResetFile = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    setVideoSourceType(null);
    stopLiveCameraStream();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      const fileName = selectedFile
        ? selectedFile.name
        : `${skill.name.toLowerCase().replace(/\s+/g, '_')}_routine.mp4`;
      submitSkillVideo(skill.id, fileName, previewUrl || undefined);
      setSubmitting(false);
      setSubmittedSuccess(true);
    }, 700);
  };

  const handleSimulateCoachApprove = () => {
    verifySkill(skill.id, 'Coach Sarah');
    onClose();
  };

  // Drag and drop handler
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setSelectedFile(file);
      setVideoSourceType('photos');
      setPreviewUrl(URL.createObjectURL(file));
      stopLiveCameraStream();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-[#1f1619]/70 backdrop-blur-xs transition-opacity p-0 sm:p-4">
      <div
        className="w-full max-w-lg bg-white rounded-t-3xl sm:rounded-3xl p-5 sm:p-6 shadow-2xl space-y-4 border border-[#fce7f3] max-h-[94vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile handle indicator */}
        <div className="w-12 h-1.5 bg-[#fce7f3] rounded-full mx-auto sm:hidden" />

        {/* Hidden Native File Inputs */}
        {/* 1. Camera Input with capture="environment" to launch Camera directly */}
        <input
          type="file"
          ref={nativeCameraInputRef}
          accept="video/*"
          capture="environment"
          className="hidden"
          onChange={(e) => handleFilePicked(e, 'camera')}
        />

        {/* 2. Photos & Gallery Input */}
        <input
          type="file"
          ref={photosInputRef}
          accept="video/*,image/*"
          className="hidden"
          onChange={(e) => handleFilePicked(e, 'photos')}
        />

        {/* Header */}
        <div className="flex items-center justify-between pb-2 border-b border-[#fce7f3]">
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-extrabold text-[#db2777] uppercase tracking-wider">
                USAG Level {skill.level} • {skill.category}
              </span>
            </div>
            <h4 className="text-lg sm:text-xl font-black text-[#1f1619] leading-tight mt-0.5">
              Submit Video for {skill.name}
            </h4>
          </div>
          <button
            id="btn-upload-modal-close"
            onClick={() => {
              stopLiveCameraStream();
              onClose();
            }}
            className="w-8 h-8 rounded-full bg-[#fff5f8] border border-[#fce7f3] flex items-center justify-center text-[#6b555c] hover:text-[#1f1619] transition-colors shrink-0"
            aria-label="Close upload modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Skill Details Badge */}
        <div className="p-3 rounded-2xl bg-[#fffdf0] border border-[#fef08a] flex items-center justify-between shadow-2xs">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#fef9c3] text-[#854d0e] flex items-center justify-center font-bold shrink-0">
              <Flame className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-extrabold text-[#1f1619]">{skill.name}</p>
              <p className="text-[11px] text-[#854d0e]">Record or upload 5–30s routine clip</p>
            </div>
          </div>
          <span className="px-2.5 py-1 rounded-full bg-[#fef9c3] text-[#854d0e] border border-[#fef08a] text-xs font-bold shrink-0">
            +{skill.xpReward} XP
          </span>
        </div>

        {submittedSuccess ? (
          /* Success Screen with Coach Evaluation Simulator */
          <div className="py-4 text-center space-y-3">
            <div className="w-16 h-16 rounded-full bg-[#fce7f3] text-[#db2777] border border-[#fbcfe8] flex items-center justify-center mx-auto shadow-inner animate-in zoom-in-75">
              <Clock className="w-8 h-8" />
            </div>
            <h5 className="text-lg font-bold text-[#1f1619]">
              Video submitted for verification! ⏳
            </h5>
            <p className="text-xs text-[#6b555c] max-w-xs mx-auto leading-relaxed">
              Your {videoSourceType === 'camera' ? 'camera recording' : 'photo/video clip'} has been queued for evaluation. Once approved, status updates to <span className="font-bold text-[#db2777]">Verified</span> and <span className="font-bold text-[#854d0e]">+{skill.xpReward} XP</span> will be rewarded!
            </p>

            {/* Prototype Coach Evaluation Simulator */}
            <div className="mt-4 p-4 rounded-2xl bg-[#fffdf0] border border-[#fef08a] text-left space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#854d0e]">
                <CheckCircle2 className="w-4 h-4 text-[#db2777] shrink-0" />
                <span>Coach Verification Review</span>
              </div>
              <p className="text-[11px] text-[#6b555c]">
                You can test the coach approval flow immediately:
              </p>
              <button
                id="btn-simulate-coach-approve"
                onClick={handleSimulateCoachApprove}
                className="w-full py-2.5 px-4 rounded-full bg-gradient-to-r from-[#ec4899] via-[#f472b6] to-[#f59e0b] text-white font-bold text-xs shadow-md shadow-pink-500/20 hover:from-[#db2777] active:scale-95 transition-all flex items-center justify-center gap-1.5"
              >
                <UserCheck className="w-4 h-4 shrink-0" />
                <span>Approve as Coach Sarah (+{skill.xpReward} XP)</span>
              </button>
            </div>

            <button
              id="btn-upload-modal-done"
              onClick={onClose}
              className="w-full mt-3 py-2.5 rounded-full bg-[#fff5f8] border border-[#fce7f3] text-[#1f1619] text-xs font-bold hover:bg-[#fce7f3]"
            >
              Done
            </button>
          </div>
        ) : previewUrl ? (
          /* Video / Photo Preview & Confirmation */
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-[#1f1619]">
                <span className="flex items-center gap-1.5">
                  {videoSourceType === 'camera' ? (
                    <Video className="w-4 h-4 text-[#db2777] shrink-0" />
                  ) : (
                    <Images className="w-4 h-4 text-[#db2777] shrink-0" />
                  )}
                  <span>{videoSourceType === 'camera' ? 'Camera Recording Preview' : 'Selected from Photos'}</span>
                </span>
                <button
                  type="button"
                  id="btn-retake-video"
                  onClick={handleResetFile}
                  className="text-[11px] font-bold text-[#db2777] hover:underline flex items-center gap-1"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Retake / Change</span>
                </button>
              </div>

              {/* Video Player Preview */}
              <div className="relative w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-inner flex items-center justify-center border border-black/10">
                <video
                  src={previewUrl}
                  controls
                  playsInline
                  autoPlay
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="flex items-center justify-between px-2 text-[11px] text-[#6b555c]">
                <span className="truncate max-w-[200px] font-medium">
                  {selectedFile?.name || 'routine_clip.mp4'}
                </span>
                {selectedFile && (
                  <span className="font-bold text-[#db2777]">
                    {Math.round(selectedFile.size / 1024)} KB
                  </span>
                )}
              </div>
            </div>

            {/* Safety & Form Notice */}
            <div className="p-3 rounded-xl bg-[#fffdf0] border border-[#fef08a] text-[#854d0e] text-[11px] flex items-start gap-2">
              <ShieldAlert className="w-4 h-4 text-[#db2777] shrink-0 mt-0.5" />
              <p className="leading-snug">
                <strong>Gymnastics Safety:</strong> Make sure landing area has safety mats and a qualified coach or spotter is present.
              </p>
            </div>

            <button
              type="submit"
              id="btn-upload-submit-video"
              disabled={submitting}
              className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#ec4899] via-[#f472b6] to-[#f59e0b] hover:from-[#db2777] hover:to-[#d97706] text-white font-bold text-sm shadow-lg shadow-pink-500/20 active:scale-98 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <Upload className="w-4 h-4" />
              <span>{submitting ? 'Submitting Clip...' : 'Submit Video for Verification'}</span>
            </button>
          </form>
        ) : isLiveCameraActive ? (
          /* Live Webcam / Camera Stream & In-App Recorder */
          <div className="space-y-3">
            <div className="relative w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-md flex items-center justify-center">
              <video
                ref={liveVideoPreviewRef}
                autoPlay
                playsInline
                muted
                className="w-full h-full object-cover"
              />

              {/* Countdown overlay */}
              {countdown !== null && (
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center animate-in fade-in">
                  <span className="text-7xl font-black text-white animate-ping">
                    {countdown}
                  </span>
                </div>
              )}

              {/* Recording indicator & timer */}
              {isRecording && (
                <div className="absolute top-3 left-3 flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/90 text-white text-xs font-bold shadow-md">
                  <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
                  <span>REC {String(Math.floor(recordingSeconds / 60)).padStart(2, '0')}:{String(recordingSeconds % 60).padStart(2, '0')}</span>
                </div>
              )}

              {/* Switch to native device camera */}
              <button
                type="button"
                onClick={() => nativeCameraInputRef.current?.click()}
                className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/60 hover:bg-black/80 text-white text-[10px] font-bold backdrop-blur-xs flex items-center gap-1.5"
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>Device Camera</span>
              </button>
            </div>

            {/* Recorder Controls */}
            <div className="flex items-center justify-center gap-3 pt-1">
              {!isRecording ? (
                <button
                  type="button"
                  id="btn-start-recording"
                  onClick={startRecordingLiveVideo}
                  disabled={countdown !== null}
                  className="flex-1 py-3 px-4 rounded-full bg-red-600 hover:bg-red-500 text-white font-bold text-xs shadow-md shadow-red-600/30 flex items-center justify-center gap-2 active:scale-95 transition-all"
                >
                  <span className="w-3.5 h-3.5 rounded-full bg-white" />
                  <span>Start Recording (Max 60s)</span>
                </button>
              ) : (
                <button
                  type="button"
                  id="btn-stop-recording"
                  onClick={stopRecordingLiveVideo}
                  className="flex-1 py-3 px-4 rounded-full bg-black hover:bg-gray-900 text-white font-bold text-xs shadow-md flex items-center justify-center gap-2 active:scale-95 transition-all border border-white/20"
                >
                  <span className="w-3.5 h-3.5 rounded-xs bg-red-500" />
                  <span>Stop & Use Video</span>
                </button>
              )}

              <button
                type="button"
                id="btn-cancel-live-camera"
                onClick={stopLiveCameraStream}
                className="py-3 px-4 rounded-full bg-[#fff5f8] hover:bg-[#fce7f3] text-[#db2777] font-bold text-xs border border-[#fce7f3]"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          /* Primary Source Selection: Camera or Photos */
          <div className="space-y-4">
            {cameraError && (
              <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                <span className="flex-1">{cameraError}</span>
              </div>
            )}

            <p className="text-xs font-semibold text-[#6b555c] text-center">
              Choose how you want to upload your {skill.name} clip:
            </p>

            {/* TWO BIG PRIMARY ACTIONS: CAMERA vs PHOTOS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {/* OPTION 1: CAMERA */}
              <div
                id="card-upload-camera"
                onClick={() => nativeCameraInputRef.current?.click()}
                className="group relative p-5 rounded-2xl border-2 border-[#fbcfe8] hover:border-[#ec4899] bg-[#fff5f8] hover:bg-[#fdf2f8] transition-all cursor-pointer flex flex-col items-center text-center space-y-3 shadow-xs active:scale-98"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#ec4899] to-[#f472b6] text-white flex items-center justify-center shadow-md shadow-pink-500/25 group-hover:scale-105 transition-transform">
                  <Camera className="w-7 h-7" />
                </div>
                <div>
                  <h5 className="text-sm font-extrabold text-[#1f1619]">
                    Camera
                  </h5>
                  <p className="text-[11px] text-[#6b555c] mt-0.5 leading-snug">
                    Record your routine directly using your device camera
                  </p>
                </div>
                <div className="w-full flex flex-col gap-1.5 pt-1">
                  <span className="inline-flex items-center justify-center gap-1.5 w-full py-2 px-3 rounded-full bg-[#ec4899] group-hover:bg-[#db2777] text-white text-xs font-bold shadow-xs">
                    <Video className="w-4 h-4" />
                    <span>Open Camera</span>
                  </span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      startLiveInAppCamera();
                    }}
                    className="text-[10px] font-bold text-[#db2777] hover:underline pt-0.5"
                  >
                    Or use Live Webcam Recorder ↗
                  </button>
                </div>
              </div>

              {/* OPTION 2: PHOTOS / GALLERY */}
              <div
                id="card-upload-photos"
                onClick={() => photosInputRef.current?.click()}
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleDrop}
                className="group relative p-5 rounded-2xl border-2 border-[#fef08a] hover:border-[#facc15] bg-[#fffdf0] hover:bg-[#fefce8] transition-all cursor-pointer flex flex-col items-center text-center space-y-3 shadow-xs active:scale-98"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#f59e0b] to-[#facc15] text-[#78350f] flex items-center justify-center shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
                  <Images className="w-7 h-7" />
                </div>
                <div>
                  <h5 className="text-sm font-extrabold text-[#1f1619]">
                    Photos & Library
                  </h5>
                  <p className="text-[11px] text-[#6b555c] mt-0.5 leading-snug">
                    Choose a saved video or photo from your camera roll or files
                  </p>
                </div>
                <div className="w-full pt-1">
                  <span className="inline-flex items-center justify-center gap-1.5 w-full py-2 px-3 rounded-full bg-[#fef08a] group-hover:bg-[#fde047] text-[#854d0e] text-xs font-bold border border-[#fef08a] shadow-xs">
                    <Images className="w-4 h-4" />
                    <span>Choose from Photos</span>
                  </span>
                  <p className="text-[10px] text-[#854d0e]/80 text-center mt-1.5">
                    Or drag & drop video file here
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Tips */}
            <div className="p-3 rounded-xl bg-[#fff5f8] border border-[#fce7f3] text-[11px] text-[#6b555c] space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-[#db2777]">
                <Lightbulb className="w-3.5 h-3.5 shrink-0" />
                <span>Coaching Video Tips</span>
              </div>
              <p>
                • Keep clip between 5 and 30 seconds focusing on the full skill.
              </p>
              <p>
                • Position camera to capture takeoff, body line, and landing.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
