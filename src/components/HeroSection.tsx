'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Github,
  FileText,
  Cpu,
  TrendingUp,
  TrendingDown,
  ShieldCheck,
  Linkedin,
  Briefcase,
  Play,
  Bot,
  Video,
  CreditCard,
  Sparkles,
  ArrowRight
} from 'lucide-react';

import Badge from '@/components/Badge';
import SystemStatusTicker from '@/components/SystemStatusTicker';
import AiGenerator from '@/components/AiGenerator';
import TrustBadge from '@/components/TrustBadge';
import TalkingHeroVideo from '@/components/TalkingHeroVideo';
import FlippingIdCard from '@/components/FlippingIdCard';
import { cn } from '@/lib/utils';

type HeroTab = 'video' | 'agent' | 'idcard';

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState<HeroTab>('video');

  return (
    <section className="mb-8 pt-4">
      <SystemStatusTicker />

      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start mt-6">
        {/* LEFT COL: Bio, Credentials & Primary CTAs (5 cols on lg) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex flex-col justify-center"
        >
          {/* Top Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <Badge color="green" pulse href="mailto:n.bhavana.reddy5@gmail.com">
              OPEN TO HYBRID & REMOTE
            </Badge>
            <Badge color="zinc">USA Based</Badge>
            <button
              onClick={() => setActiveTab('video')}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/30 hover:bg-purple-500/20 transition-all cursor-pointer"
            >
              <Play size={10} className="fill-current" />
              <span>Video Intro (1:15)</span>
            </button>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 text-zinc-900 dark:text-white leading-[1.1]">
            Senior Software<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-500">
              Engineer
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xl mb-6">
            MLOps & AI Security expert building secure, scalable AI/ML systems for automotive and enterprise.
          </p>

          {/* Trust Signals */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-8">
            {[
              { label: 'MLOps', icon: TrendingUp, variant: 'success' as const },
              { label: 'AI/ML', icon: Briefcase, variant: 'innovation' as const },
              { label: 'Security', icon: TrendingDown, variant: 'risk' as const },
              { label: 'ISO 26262', icon: ShieldCheck, variant: 'compliance' as const },
              { label: 'ISO 21434', icon: ShieldCheck, variant: 'compliance' as const },
            ].map((badge) => (
              <TrustBadge
                key={badge.label}
                label={badge.label}
                icon={badge.icon}
                variant={badge.variant}
              />
            ))}
          </div>

          {/* Interactive Hero Showcase Quick Switcher (Mobile & Desktop helper) */}
          <div className="p-1.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center gap-1 mb-8 w-fit text-xs font-semibold">
            <button
              onClick={() => setActiveTab('video')}
              className={cn(
                'px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5',
                activeTab === 'video'
                  ? 'bg-purple-600 text-white shadow-sm font-bold'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
              )}
            >
              <Video size={13} />
              <span>Video Animation</span>
            </button>
            <button
              onClick={() => setActiveTab('agent')}
              className={cn(
                'px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5',
                activeTab === 'agent'
                  ? 'bg-purple-600 text-white shadow-sm font-bold'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
              )}
            >
              <Bot size={13} />
              <span>AI Resume Agent</span>
            </button>
            <button
              onClick={() => setActiveTab('idcard')}
              className={cn(
                'px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5',
                activeTab === 'idcard'
                  ? 'bg-purple-600 text-white shadow-sm font-bold'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
              )}
            >
              <CreditCard size={13} />
              <span>3D Staff Badge</span>
            </button>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3">
            <a
              href="https://github.com/BNTiyan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-medium transition-all shadow-md shadow-purple-500/20 hover:shadow-purple-500/40 hover:scale-[1.02] active:scale-95 text-sm"
            >
              <Github size={18} /> View GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/bhavana-nare-60657385/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-all shadow-md shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-95 text-sm"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
            <a
              href="/docs/Bhavana.pdf"
              download="Bhavana_Nare_Resume.pdf"
              className="flex items-center gap-2 px-5 py-2.5 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-900 dark:text-white rounded-xl font-medium transition-all border border-zinc-200 dark:border-zinc-700 hover:scale-[1.02] active:scale-95 text-sm"
            >
              <FileText size={18} /> Resume PDF
            </a>
          </div>
        </motion.div>

        {/* RIGHT COL: Interactive Video Animation / AI Agent / ID Card (7 cols on lg) */}
        <motion.div
          id="agent"
          className="lg:col-span-7 w-full scroll-mt-24"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* TAB 1: TALKING HERO VIDEO ANIMATION */}
          {activeTab === 'video' && (
            <motion.div
              key="video-tab"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <TalkingHeroVideo onSwitchToAgent={() => setActiveTab('agent')} />
            </motion.div>
          )}

          {/* TAB 2: AI RESUME AGENT (RAG Chat) */}
          {activeTab === 'agent' && (
            <motion.div
              key="agent-tab"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="relative h-[480px] w-full"
            >
              {/* Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-emerald-500 rounded-2xl blur opacity-20 animate-pulse" />

              {/* Card */}
              <div className="relative bg-white dark:bg-black rounded-2xl border border-zinc-200 dark:border-zinc-800 h-full p-4 shadow-2xl flex flex-col">
                {/* Header */}
                <div className="flex justify-between items-start mb-3 border-b border-zinc-100 dark:border-zinc-800 pb-3">
                  <div className="flex gap-3">
                    <div className="mt-1 shrink-0 p-1.5 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400">
                      <Cpu size={18} />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-sm text-zinc-900 dark:text-zinc-100">
                        Resume RAG Agent
                      </span>
                      <div className="text-[11px] leading-tight text-zinc-500 dark:text-zinc-400 mt-0.5">
                        <span>Powered by Gemini & Databricks telemetry. </span>
                        <a
                          href="https://github.com/BNTiyan"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-600 dark:text-purple-400 hover:underline transition-all font-medium inline-flex items-center gap-1"
                        >
                          See source
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setActiveTab('video')}
                      className="px-2 py-1 rounded bg-zinc-100 dark:bg-zinc-800 text-[11px] font-mono text-zinc-600 dark:text-zinc-300 hover:text-purple-600 flex items-center gap-1"
                    >
                      <Video size={11} /> Watch Video
                    </button>
                    <Badge color="green">Online</Badge>
                  </div>
                </div>

                {/* Chat */}
                <div className="flex-1 overflow-hidden relative rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                  <div className="absolute inset-0 overflow-auto custom-scrollbar">
                    <AiGenerator />
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 3: 3D FLIPPING ID CARD */}
          {activeTab === 'idcard' && (
            <motion.div
              key="idcard-tab"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="py-4 flex flex-col items-center justify-center min-h-[460px] bg-zinc-50 dark:bg-zinc-900/40 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6"
            >
              <div className="text-center mb-2">
                <span className="text-[10px] font-mono uppercase text-purple-600 dark:text-purple-400 font-bold tracking-widest">
                  Tactile 3D Conference Pass
                </span>
                <p className="text-xs text-zinc-500">
                  Click or tap the badge to flip between credentials and quick contacts.
                </p>
              </div>

              <FlippingIdCard />
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
