'use client';

import React, { useState, useEffect, useRef, useId } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  RotateCcw,
  Maximize2,
  Minimize2,
  Radio,
  Subtitles,
  Sparkles,
  CheckCircle2,
  Cpu,
  Layers,
  Terminal,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { cn } from '@/lib/utils';

// Chapters matching Bhavana's career highlights
export interface VideoChapter {
  id: string;
  title: string;
  time: number; // in seconds
  caption: string;
  badge: string;
  codeSnippet?: string;
  keyMetric?: string;
}

const CHAPTERS: VideoChapter[] = [
  {
    id: 'intro',
    title: '01. ADP & Role',
    time: 0,
    badge: 'AI SENIOR DEV @ ADP',
    caption:
      "Hello! I'm Bhavana Nare — AI Senior Advance Tech Developer at ADP, where I build automation tools for system upgrades and develop autonomous agents for ADP Assist.",
    codeSnippet: 'const engineer = new ADPAgentDeveloper({ name: "Bhavana", role: "AI Senior Advance Tech Developer" });',
    keyMetric: 'ADP Assist & Upgrade Automation'
  },
  {
    id: 'rivian',
    title: '02. Fannie Mae & Rivian',
    time: 14,
    badge: 'FANNIE MAE & RIVIAN',
    caption:
      "Previously at Fannie Mae and Rivian, I engineered enterprise cloud systems and architected 'Beacon' using Vertex AI — cutting CI/CD security noise by over 70%.",
    codeSnippet: 'await beacon.triageMR({ model: "Gemini-2.5-Pro", rag: "pgvector" });',
    keyMetric: '70% Effort Cut // Fannie Mae (Sep 2026)'
  },
  {
    id: 'telemetry',
    title: '03. Bosch & ADAS',
    time: 30,
    badge: 'MLOPS & VISION',
    caption:
      'At Robert Bosch and Continental, I engineered real-time telemetry pipelines on AWS (EventBridge → Lambda → DynamoDB) and ML object detection for ADAS camera systems.',
    codeSnippet: 'telemetryStream.pipe(new RiskClassifier({ iso: "26262 / 21434" }));',
    keyMetric: '1K req/s Telemetry & EBA Safety'
  },
  {
    id: 'architecture',
    title: '04. Production MLOps',
    time: 46,
    badge: 'SYSTEM DESIGN',
    caption:
      'My focus is bridging high-complexity machine learning with rock-solid production reliability: sub-25s inference, automated CI/CD guardrails, and deterministic verification.',
    codeSnippet: 'inference.optimize({ latency: "90s -> 22s", pydanticValidation: true });',
    keyMetric: 'Sub-25s LLM Inference Latency'
  },
  {
    id: 'cta',
    title: '05. Connect & Explore',
    time: 60,
    badge: 'OPEN FOR ROLES',
    caption:
      'Explore my live GitHub daily stats, test my AI Resume Agent, or download my resume below. Looking forward to discussing senior AI/ML engineering roles!',
    codeSnippet: 'portfolio.onReady(() => hire({ role: "Staff / Senior ML Engineer" }));',
    keyMetric: 'Ready for Hybrid & Remote USA'
  }
];

const TOTAL_DURATION = 75; // 75 seconds total video duration

export default function TalkingHeroVideo({
  onSwitchToAgent,
  className
}: {
  onSwitchToAgent?: () => void;
  className?: string;
}) {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [showCaptions, setShowCaptions] = useState<boolean>(true);
  const [activeMode, setActiveMode] = useState<'avatar' | 'telemetry'>('avatar');
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isScrolledPast, setIsScrolledPast] = useState<boolean>(false);
  const [isDismissedPip, setIsDismissedPip] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const speechUtteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const timerIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const uniqueId = useId();

  // Find active chapter based on currentTime
  const currentChapterIndex = [...CHAPTERS]
    .reverse()
    .findIndex((chap) => currentTime >= chap.time);
  const activeChapter =
    currentChapterIndex !== -1
      ? CHAPTERS[CHAPTERS.length - 1 - currentChapterIndex]
      : CHAPTERS[0];

  // Observe scroll position for Floating PiP
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      // Scrolled past if top is above viewport and bottom is above 200px
      const past = rect.bottom < 150;
      setIsScrolledPast(past);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Web Speech API synthesis for speaking
  const speakCurrentChapter = (captionText: string) => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;

    window.speechSynthesis.cancel();
    if (isMuted) return;

    try {
      const utterance = new SpeechSynthesisUtterance(captionText);
      utterance.rate = 1.02 * playbackSpeed;
      utterance.pitch = 1.05;

      const voices = window.speechSynthesis.getVoices();
      // Try to pick a natural English female voice
      const preferredVoice = voices.find(
        (v) =>
          (v.name.includes('Samantha') ||
            v.name.includes('Karen') ||
            v.name.includes('Google US English') ||
            v.name.includes('Natural') ||
            v.name.includes('Victoria')) &&
          v.lang.startsWith('en')
      );
      if (preferredVoice) utterance.voice = preferredVoice;

      utterance.onend = () => {
        // finished speaking
      };

      speechUtteranceRef.current = utterance;
      window.speechSynthesis.speak(utterance);
    } catch {
      // Audio speech synthesis not supported or blocked
    }
  };

  // Playback timer ticker
  useEffect(() => {
    if (isPlaying) {
      timerIntervalRef.current = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= TOTAL_DURATION) {
            setIsPlaying(false);
            if (typeof window !== 'undefined') window.speechSynthesis?.cancel();
            return 0;
          }
          return Math.min(prev + 0.5 * playbackSpeed, TOTAL_DURATION);
        });
      }, 500);
    } else {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
      if (typeof window !== 'undefined') window.speechSynthesis?.cancel();
    }

    return () => {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    };
  }, [isPlaying, playbackSpeed]);

  // Voice narration triggers when chapter changes or when unmuted while playing
  useEffect(() => {
    if (isPlaying && !isMuted) {
      speakCurrentChapter(activeChapter.caption);
    } else if (isMuted && typeof window !== 'undefined') {
      window.speechSynthesis?.cancel();
    }
  }, [activeChapter.id, isMuted, isPlaying]);

  const togglePlay = () => {
    const nextState = !isPlaying;
    setIsPlaying(nextState);
    if (!nextState && typeof window !== 'undefined') {
      window.speechSynthesis?.cancel();
    }
  };

  const toggleMute = () => {
    const nextMute = !isMuted;
    setIsMuted(nextMute);
    if (nextMute && typeof window !== 'undefined') {
      window.speechSynthesis?.cancel();
    } else if (!nextMute && isPlaying) {
      speakCurrentChapter(activeChapter.caption);
    }
  };

  const handleSeek = (time: number) => {
    setCurrentTime(time);
    if (isPlaying && !isMuted) {
      const targetChapter = [...CHAPTERS]
        .reverse()
        .find((chap) => time >= chap.time) || CHAPTERS[0];
      speakCurrentChapter(targetChapter.caption);
    }
  };

  const handleRestart = () => {
    setCurrentTime(0);
    setIsPlaying(true);
    if (!isMuted) speakCurrentChapter(CHAPTERS[0].caption);
  };

  // Format seconds to mm:ss
  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <>
      {/* MAIN HERO VIDEO CARD */}
      <div
        ref={containerRef}
        id="hero-video"
        className={cn(
          'relative w-full rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-950 text-white overflow-hidden shadow-2xl transition-all duration-300 group',
          isFullscreen ? 'fixed inset-4 z-50 rounded-2xl flex flex-col justify-between max-w-6xl mx-auto' : '',
          className
        )}
      >
        {/* Subtle Ambient Backlight Glow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/30 via-indigo-600/20 to-emerald-500/20 blur-xl opacity-60 pointer-events-none" />

        {/* TOP VIDEO HUD OVERLAY */}
        <div className="relative z-20 flex items-center justify-between p-4 bg-gradient-to-b from-black/90 via-black/40 to-transparent border-b border-white/5">
          {/* Status Indicators */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-red-500/20 border border-red-500/40 text-[11px] font-mono font-bold text-red-400">
              <span
                className={cn(
                  'h-2 w-2 rounded-full bg-red-500',
                  isPlaying ? 'animate-ping' : 'opacity-70'
                )}
              />
              {isPlaying ? 'REC ● LIVE' : 'PAUSED'}
            </div>

            <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-zinc-300">
              <Radio size={12} className="text-purple-400 animate-pulse" />
              <span>4K • 60FPS</span>
            </div>

            <span className="hidden md:inline text-[11px] font-mono text-purple-300/80">
              {activeChapter.badge}
            </span>
          </div>

          {/* Mode Switcher & Timecode */}
          <div className="flex items-center gap-2">
            <div className="flex items-center bg-black/60 p-0.5 rounded-lg border border-white/10 text-xs">
              <button
                onClick={() => setActiveMode('avatar')}
                className={cn(
                  'px-2.5 py-1 rounded-md transition-all font-medium flex items-center gap-1',
                  activeMode === 'avatar'
                    ? 'bg-purple-600 text-white shadow-sm'
                    : 'text-zinc-400 hover:text-white'
                )}
              >
                <Sparkles size={12} /> Avatar
              </button>
              <button
                onClick={() => setActiveMode('telemetry')}
                className={cn(
                  'px-2.5 py-1 rounded-md transition-all font-medium flex items-center gap-1',
                  activeMode === 'telemetry'
                    ? 'bg-purple-600 text-white shadow-sm'
                    : 'text-zinc-400 hover:text-white'
                )}
              >
                <Terminal size={12} /> Telemetry
              </button>
            </div>

            {/* Current Timecode */}
            <span className="font-mono text-xs font-semibold text-zinc-300 px-2">
              {formatTime(currentTime)} / {formatTime(TOTAL_DURATION)}
            </span>

            {/* Fullscreen Button */}
            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
              title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
            >
              {isFullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
            </button>
          </div>
        </div>

        {/* MAIN VIDEO STAGE / ANIMATION CANVAS */}
        <div className="relative aspect-video w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-zinc-950 via-zinc-900 to-black select-none">
          {/* Background Grid & Scanline Effect */}
          <div className="absolute inset-0 bg-grid-pattern opacity-25" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.5)_51%)] bg-[length:100%_4px] pointer-events-none opacity-40" />

          {/* Holographic Concentric Rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              animate={{ rotate: isPlaying ? 360 : 0 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              className="w-96 h-96 rounded-full border border-purple-500/10 border-dashed"
            />
            <motion.div
              animate={{ rotate: isPlaying ? -360 : 0 }}
              transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
              className="w-80 h-80 rounded-full border border-indigo-500/15"
            />
          </div>

          {/* MODE A: TALKING AVATAR VIDEO */}
          {activeMode === 'avatar' && (
            <div className="relative z-10 flex flex-col items-center justify-center">
              {/* Dynamic Equalizer Rings behind avatar */}
              <motion.div
                animate={{
                  scale: isPlaying ? [1, 1.08, 1.02, 1.06, 1] : 1,
                  opacity: isPlaying ? [0.6, 0.9, 0.7] : 0.4
                }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute w-56 h-56 rounded-full bg-gradient-to-tr from-purple-600/30 via-indigo-600/20 to-emerald-500/20 blur-xl"
              />

              {/* Animated Avatar Graphic */}
              <div className="relative">
                {/* Glowing Outer Ring */}
                <div className="w-36 h-36 md:w-44 md:h-44 rounded-full p-1 bg-gradient-to-tr from-purple-500 via-indigo-500 to-emerald-400 shadow-xl shadow-purple-500/20">
                  <div className="w-full h-full rounded-full bg-zinc-950 flex items-center justify-center overflow-hidden relative border border-white/10">
                    {/* Stylized Animated Engineer Portrait */}
                    <svg
                      viewBox="0 0 200 200"
                      className="w-full h-full text-zinc-100"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Gradient Definitions */}
                      <defs>
                        <linearGradient id={`grad-suit-${uniqueId}`} x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#7c3aed" />
                          <stop offset="100%" stopColor="#312e81" />
                        </linearGradient>
                        <linearGradient id={`grad-hair-${uniqueId}`} x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#1e1b4b" />
                          <stop offset="100%" stopColor="#09090b" />
                        </linearGradient>
                      </defs>

                      {/* Suit / Shoulders */}
                      <path
                        d="M30 190 C30 145, 60 135, 100 135 C140 135, 170 145, 170 190 Z"
                        fill={`url(#grad-suit-${uniqueId})`}
                        stroke="#a855f7"
                        strokeWidth="1.5"
                      />

                      {/* Professional Lapel & Lanyard */}
                      <path d="M75 135 L90 190 M125 135 L110 190" stroke="#c084fc" strokeWidth="2" strokeDasharray="3 3" />
                      <rect x="92" y="160" width="16" height="24" rx="2" fill="#18181b" stroke="#a855f7" strokeWidth="1" />
                      <circle cx="100" cy="172" r="3" fill="#10b981" />

                      {/* Neck */}
                      <rect x="86" y="105" width="28" height="35" rx="6" fill="#fbd38d" />

                      {/* Head / Face */}
                      <ellipse cx="100" cy="85" rx="36" ry="42" fill="#fbd38d" />

                      {/* Hair - Back & Styling */}
                      <path
                        d="M62 80 C60 40, 140 40, 138 80 C145 110, 142 125, 132 135 C122 110, 128 85, 120 70 C105 60, 85 62, 76 75 C70 88, 72 115, 66 135 C58 120, 58 100, 62 80 Z"
                        fill={`url(#grad-hair-${uniqueId})`}
                      />

                      {/* Eyebrows */}
                      <path d="M78 68 Q88 64 94 68" stroke="#1e1b4b" strokeWidth="2.5" strokeLinecap="round" />
                      <path d="M106 68 Q112 64 122 68" stroke="#1e1b4b" strokeWidth="2.5" strokeLinecap="round" />

                      {/* Eyes with subtle natural blink animation */}
                      <motion.g
                        animate={
                          isPlaying
                            ? { scaleY: [1, 1, 0.1, 1, 1, 1, 1] }
                            : { scaleY: [1, 1, 1, 0.1, 1] }
                        }
                        transition={{ duration: 4, repeat: Infinity, times: [0, 0.45, 0.5, 0.55, 1] }}
                        style={{ transformOrigin: '100px 78px' }}
                      >
                        <ellipse cx="86" cy="78" rx="4.5" ry="3.5" fill="#1e1b4b" />
                        <ellipse cx="114" cy="78" rx="4.5" ry="3.5" fill="#1e1b4b" />
                        <circle cx="87.5" cy="76.5" r="1.2" fill="#ffffff" />
                        <circle cx="115.5" cy="76.5" r="1.2" fill="#ffffff" />
                      </motion.g>

                      {/* Stylish Engineer Glasses */}
                      <rect x="74" y="70" width="24" height="16" rx="4" fill="none" stroke="#6366f1" strokeWidth="2" opacity="0.85" />
                      <rect x="102" y="70" width="24" height="16" rx="4" fill="none" stroke="#6366f1" strokeWidth="2" opacity="0.85" />
                      <line x1="98" y1="76" x2="102" y2="76" stroke="#6366f1" strokeWidth="2" />
                      <line x1="74" y1="76" x2="68" y2="74" stroke="#6366f1" strokeWidth="2" />
                      <line x1="126" y1="76" x2="132" y2="74" stroke="#6366f1" strokeWidth="2" />
                      {/* Lens glare */}
                      <line x1="77" y1="73" x2="88" y2="83" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.5" />
                      <line x1="105" y1="73" x2="116" y2="83" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.5" />

                      {/* Nose */}
                      <path d="M100 80 L98 90 L102 91" stroke="#e2b775" strokeWidth="2" strokeLinecap="round" />

                      {/* Dynamic Speaking Mouth */}
                      {isPlaying ? (
                        <motion.ellipse
                          cx="100"
                          cy="104"
                          animate={{
                            rx: [3, 6, 4, 7, 3],
                            ry: [2, 5, 2, 6, 2]
                          }}
                          transition={{ duration: 0.35, repeat: Infinity, ease: 'easeInOut' }}
                          fill="#c53030"
                          stroke="#9b2c2c"
                          strokeWidth="1"
                        />
                      ) : (
                        <path d="M94 103 Q100 108 106 103" stroke="#b7791f" strokeWidth="2" strokeLinecap="round" fill="none" />
                      )}
                    </svg>

                    {/* Live Voice Equalizer Overlay on Avatar */}
                    <div className="absolute bottom-2 inset-x-0 flex justify-center items-end gap-1 h-5 pointer-events-none">
                      {[6, 12, 18, 24, 15, 9, 14, 20, 10, 5].map((height, i) => (
                        <motion.div
                          key={i}
                          animate={
                            isPlaying
                              ? {
                                  height: [
                                    `${height * 0.3}px`,
                                    `${height}px`,
                                    `${height * 0.5}px`
                                  ]
                                }
                              : { height: '3px' }
                          }
                          transition={{
                            duration: 0.4 + (i % 3) * 0.1,
                            repeat: Infinity,
                            ease: 'easeInOut'
                          }}
                          className="w-1 bg-purple-400/80 rounded-full"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating "AI Talking" badge */}
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -bottom-2 -right-2 px-2.5 py-0.5 rounded-full bg-purple-600 border border-purple-400 text-[10px] font-bold text-white shadow-lg flex items-center gap-1"
                >
                  <Sparkles size={10} />
                  <span>AI VIDEO</span>
                </motion.div>
              </div>

              {/* Speaker Title */}
              <div className="mt-3 text-center">
                <div className="font-bold text-sm tracking-tight text-white flex items-center justify-center gap-1.5">
                  Bhavana Nare
                  <CheckCircle2 size={14} className="text-purple-400 inline" />
                </div>
                <div className="text-[11px] font-mono text-zinc-400">
                  AI Platform & Infrastructure Engineer • ADP
                </div>
              </div>
            </div>
          )}

          {/* MODE B: LIVE TELEMETRY & SYSTEM DESIGN REEL */}
          {activeMode === 'telemetry' && (
            <div className="relative z-10 w-full max-w-lg p-4 font-mono text-xs">
              <div className="bg-black/80 rounded-xl border border-purple-500/30 p-4 shadow-2xl backdrop-blur-md">
                <div className="flex items-center justify-between pb-2 mb-3 border-b border-zinc-800 text-[10px] text-zinc-400 uppercase">
                  <span className="flex items-center gap-1.5 text-purple-400 font-bold">
                    <Terminal size={12} /> ADP Assist & Agent Upgrade Telemetry
                  </span>
                  <span className="text-emerald-400 font-bold">STATUS: STREAMING</span>
                </div>

                <div className="space-y-2 text-zinc-300">
                  <div className="flex items-center justify-between text-zinc-400">
                    <span>ACTIVE_CHAPTER:</span>
                    <span className="text-purple-300 font-bold">{activeChapter.title}</span>
                  </div>
                  <div className="flex items-center justify-between text-zinc-400">
                    <span>KEY_METRIC:</span>
                    <span className="text-emerald-400 font-bold">{activeChapter.keyMetric}</span>
                  </div>
                  <div className="mt-3 p-2.5 bg-zinc-900/90 rounded border border-zinc-800 font-mono text-purple-200 text-[11px] overflow-x-auto">
                    <code>{activeChapter.codeSnippet}</code>
                  </div>
                </div>

                {/* Animated Pipeline Stage Indicators */}
                <div className="grid grid-cols-4 gap-2 mt-4 text-center text-[10px]">
                  {[
                    { label: 'INGEST', ok: true },
                    { label: 'FILTER', ok: true },
                    { label: 'RAG LLM', ok: isPlaying },
                    { label: 'DISPATCH', ok: isPlaying }
                  ].map((st, i) => (
                    <div
                      key={i}
                      className={cn(
                        'p-1.5 rounded border transition-colors',
                        st.ok
                          ? 'bg-purple-950/60 border-purple-500/40 text-purple-200'
                          : 'bg-zinc-900 border-zinc-800 text-zinc-600'
                      )}
                    >
                      <div className="font-bold">{st.label}</div>
                      <div className="text-[9px] text-emerald-400">
                        {st.ok ? 'ONLINE' : 'IDLE'}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* LARGE PLAY / PAUSE CLICKABLE OVERLAY */}
          <button
            onClick={togglePlay}
            className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/40 transition-colors group/play z-10"
            aria-label={isPlaying ? 'Pause Video' : 'Play Video'}
          >
            {!isPlaying && (
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                className="w-16 h-16 rounded-full bg-purple-600/90 hover:bg-purple-500 text-white flex items-center justify-center shadow-2xl backdrop-blur-md border border-white/20 transition-all cursor-pointer"
              >
                <Play size={28} className="translate-x-0.5 fill-current" />
              </motion.div>
            )}
          </button>

          {/* REAL-TIME DYNAMIC SUBTITLES / CAPTIONS */}
          {showCaptions && (
            <div className="absolute bottom-4 inset-x-4 md:inset-x-8 z-20 pointer-events-none">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeChapter.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="bg-black/85 backdrop-blur-md rounded-xl p-3 border border-white/10 text-center shadow-xl"
                >
                  <p className="text-xs sm:text-sm font-medium text-white leading-relaxed">
                    &ldquo;{activeChapter.caption}&rdquo;
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          )}
        </div>

        {/* PROGRESS SCRUBBER BAR */}
        <div
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const clickPos = (e.clientX - rect.left) / rect.width;
            handleSeek(clickPos * TOTAL_DURATION);
          }}
          className="relative h-2 w-full bg-zinc-800 hover:h-3 cursor-pointer transition-all group/scrubber"
        >
          {/* Chapter Markers */}
          {CHAPTERS.map((chap) => (
            <div
              key={chap.id}
              style={{ left: `${(chap.time / TOTAL_DURATION) * 100}%` }}
              className="absolute top-0 bottom-0 w-0.5 bg-white/30 z-10"
              title={chap.title}
            />
          ))}

          {/* Filled Progress */}
          <div
            className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 relative transition-all"
            style={{ width: `${(currentTime / TOTAL_DURATION) * 100}%` }}
          >
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-white shadow-md border-2 border-purple-600 scale-0 group-hover/scrubber:scale-100 transition-transform" />
          </div>
        </div>

        {/* BOTTOM VIDEO CONTROLS DOCK */}
        <div className="p-3 bg-zinc-950 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-3 text-xs">
          {/* Left Controls: Play, Sound, Restart, Chapters */}
          <div className="flex items-center gap-2">
            <button
              onClick={togglePlay}
              className="p-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-medium transition-all flex items-center gap-1.5"
            >
              {isPlaying ? <Pause size={14} /> : <Play size={14} className="fill-current" />}
              <span>{isPlaying ? 'Pause' : 'Play Intro'}</span>
            </button>

            {/* Audio Toggle with Speech Narration */}
            <button
              onClick={toggleMute}
              className={cn(
                'p-2 rounded-lg border transition-all flex items-center gap-1.5 font-medium',
                isMuted
                  ? 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white'
                  : 'bg-emerald-950/80 border-emerald-500/50 text-emerald-300'
              )}
              title={isMuted ? 'Click to enable voice intro' : 'Mute voice intro'}
            >
              {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
              <span>{isMuted ? 'Unmute Voice' : 'Voice Active'}</span>
            </button>

            <button
              onClick={handleRestart}
              className="p-2 rounded-lg hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
              title="Restart Video"
            >
              <RotateCcw size={14} />
            </button>
          </div>

          {/* Chapter Quick Jump Pills */}
          <div className="hidden lg:flex items-center gap-1 overflow-x-auto max-w-md py-1">
            {CHAPTERS.map((chap) => {
              const isActive = activeChapter.id === chap.id;
              return (
                <button
                  key={chap.id}
                  onClick={() => handleSeek(chap.time)}
                  className={cn(
                    'px-2 py-1 rounded text-[11px] whitespace-nowrap transition-all font-mono',
                    isActive
                      ? 'bg-purple-500/20 text-purple-300 font-bold border border-purple-500/40'
                      : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900'
                  )}
                >
                  {chap.title}
                </button>
              );
            })}
          </div>

          {/* Right Controls: CC Toggle, Speed, and Switch to AI Agent */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowCaptions(!showCaptions)}
              className={cn(
                'px-2 py-1 rounded text-[11px] font-mono border transition-colors',
                showCaptions
                  ? 'bg-white/10 text-white border-white/20'
                  : 'text-zinc-500 border-transparent hover:text-zinc-400'
              )}
            >
              <Subtitles size={12} className="inline mr-1" />
              CC
            </button>

            {/* Playback Speed selector */}
            <button
              onClick={() => {
                const speeds = [1, 1.25, 1.5];
                const nextIdx = (speeds.indexOf(playbackSpeed) + 1) % speeds.length;
                setPlaybackSpeed(speeds[nextIdx]);
              }}
              className="px-2 py-1 rounded bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-300 hover:text-white"
            >
              {playbackSpeed}x
            </button>

            {onSwitchToAgent && (
              <button
                onClick={onSwitchToAgent}
                className="hidden sm:flex items-center gap-1 px-3 py-1 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-purple-500/50 rounded-lg text-purple-300 text-[11px] font-bold transition-all"
              >
                <Cpu size={12} />
                <span>Ask AI Agent</span>
                <ArrowRight size={12} />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* FLOATING PICTURE-IN-PICTURE (PiP) DOCK WHEN SCROLLED PAST */}
      {isScrolledPast && !isDismissedPip && !isFullscreen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 30 }}
          className="fixed bottom-6 right-6 z-50 w-72 md:w-80 rounded-2xl bg-zinc-950 border border-purple-500/40 p-3 shadow-2xl backdrop-blur-xl text-white overflow-hidden"
        >
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-zinc-800">
            <div className="flex items-center gap-1.5 text-xs font-bold text-purple-400">
              <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
              <span>Bhavana Nare • Video Intro</span>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={() => {
                  containerRef.current?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-zinc-400 hover:text-white p-1"
                title="Scroll back to Video"
              >
                <Maximize2 size={12} />
              </button>
              <button
                onClick={() => setIsDismissedPip(true)}
                className="text-zinc-400 hover:text-white p-1 text-xs font-bold"
                title="Close floating player"
              >
                ✕
              </button>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={togglePlay}
              className="w-10 h-10 rounded-full bg-purple-600 hover:bg-purple-500 flex items-center justify-center shrink-0 shadow-lg text-white"
            >
              {isPlaying ? <Pause size={16} /> : <Play size={16} className="translate-x-0.5 fill-current" />}
            </button>

            <div className="flex-1 min-w-0">
              <div className="text-[11px] font-bold truncate text-white">
                {activeChapter.title}
              </div>
              <div className="text-[10px] text-zinc-400 truncate">
                {activeChapter.keyMetric}
              </div>
            </div>

            <button
              onClick={toggleMute}
              className={cn(
                'p-2 rounded-lg border text-xs',
                isMuted
                  ? 'border-zinc-800 text-zinc-500 hover:text-zinc-300'
                  : 'border-emerald-500/40 text-emerald-400 bg-emerald-950/40'
              )}
            >
              {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
}
