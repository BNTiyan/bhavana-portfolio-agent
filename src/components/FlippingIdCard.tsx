'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  QrCode,
  Github,
  Linkedin,
  Mail,
  RotateCw,
  Sparkles,
  ExternalLink,
  Cpu,
  CheckCircle2,
  FileText
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function FlippingIdCard({ className }: { className?: string }) {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  return (
    <div className={cn('perspective-1000 select-none w-full max-w-[320px] mx-auto', className)}>
      {/* Lanyard Top Strap & Clip */}
      <div className="flex flex-col items-center">
        <div className="w-4 h-6 bg-gradient-to-b from-purple-700 to-indigo-800 rounded-t-sm shadow-sm" />
        <div className="w-10 h-3 bg-zinc-300 dark:bg-zinc-700 rounded-sm border border-zinc-400 dark:border-zinc-600 shadow-xs" />
        <div className="w-4 h-2 bg-zinc-400 dark:bg-zinc-600 rounded-b-md mb-1" />
      </div>

      {/* Flip Card Container */}
      <motion.div
        className="relative w-full h-[430px] cursor-pointer"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* ================= FRONT SIDE ================= */}
        <div
          className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white via-zinc-50 to-zinc-100 dark:from-zinc-900 dark:via-zinc-950 dark:to-black border-2 border-zinc-200 dark:border-zinc-800 p-5 shadow-2xl flex flex-col justify-between overflow-hidden"
          style={{ backfaceVisibility: 'hidden' }}
        >
          {/* Subtle Security Guilloche Background Pattern */}
          <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06] bg-[radial-gradient(#7c3aed_1px,transparent_1px)] [background-size:12px_12px] pointer-events-none" />

          {/* Holographic Header Bar */}
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-zinc-200 dark:border-zinc-800">
              <div className="flex items-center gap-1.5">
                <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-mono text-[10px] font-bold tracking-widest text-zinc-500 dark:text-zinc-400 uppercase">
                  STAFF PASS // 2026
                </span>
              </div>
              <span className="px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 text-[9px] font-mono font-bold border border-purple-200 dark:border-purple-800">
                LEVEL 4 AI
              </span>
            </div>

            {/* Photo Avatar Badge */}
            <div className="mt-4 flex flex-col items-center">
              <div className="relative group/avatar">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-600 p-1 shadow-lg">
                  <div className="w-full h-full rounded-xl bg-zinc-900 flex items-center justify-center text-white overflow-hidden relative">
                    {/* Portrait SVG */}
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-purple-900/40 to-black">
                      <span className="text-3xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-purple-300 to-indigo-200">
                        BN
                      </span>
                      <span className="text-[9px] font-mono text-purple-400 mt-0.5">
                        ENGINEER
                      </span>
                    </div>

                    {/* Security Watermark Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
                  </div>
                </div>

                <div className="absolute -bottom-1 -right-1 p-1 bg-white dark:bg-zinc-900 rounded-full shadow border border-zinc-200 dark:border-zinc-700">
                  <ShieldCheck size={14} className="text-purple-600 dark:text-purple-400" />
                </div>
              </div>

              {/* Name & Title */}
              <h4 className="mt-3 font-bold text-lg text-zinc-900 dark:text-white tracking-tight">
                Bhavana Nare
              </h4>
              <p className="text-xs text-purple-600 dark:text-purple-400 font-medium">
                AI Senior Advance Tech Developer
              </p>
              <p className="text-[11px] text-zinc-500 font-mono mt-0.5">
                ADP • Ex-Fannie Mae • Ex-Rivian
              </p>
            </div>
          </div>

          {/* Chip & Security Details */}
          <div className="mt-2 space-y-3">
            {/* Smart Card Chip Graphic */}
            <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800">
              <div className="flex items-center gap-2">
                <div className="w-7 h-5 rounded-sm bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200 border border-amber-500/40 flex items-center justify-center">
                  <div className="w-4 h-3 border border-amber-600/30 rounded-xs" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] font-mono text-zinc-400 uppercase leading-none">
                    BADGE ID
                  </span>
                  <span className="text-[10px] font-mono font-bold text-zinc-800 dark:text-zinc-200">
                    ADP-2026-AI
                  </span>
                </div>
              </div>
              <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                <CheckCircle2 size={12} /> VERIFIED
              </span>
            </div>

            {/* Simulated Barcode */}
            <div className="h-6 flex items-center justify-between px-2 opacity-60">
              {[2, 1, 3, 1, 4, 2, 1, 3, 2, 1, 4, 1, 2, 3, 1, 2, 1, 4, 2].map((w, i) => (
                <div
                  key={i}
                  className="bg-zinc-800 dark:bg-zinc-200 h-full rounded-xs"
                  style={{ width: `${w}px` }}
                />
              ))}
            </div>
          </div>

          {/* Flip Hint Footer */}
          <div className="pt-2 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-[10px] text-zinc-500">
            <span className="font-mono">USA BASED • HYBRID/REMOTE</span>
            <span className="text-purple-600 dark:text-purple-400 font-bold flex items-center gap-1 group-hover:underline">
              Flip Card <RotateCw size={10} className="animate-spin" style={{ animationDuration: '6s' }} />
            </span>
          </div>
        </div>

        {/* ================= BACK SIDE ================= */}
        <div
          className="absolute inset-0 rounded-2xl bg-zinc-950 text-white border-2 border-purple-500/40 p-5 shadow-2xl flex flex-col justify-between overflow-hidden"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          {/* Header */}
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
              <span className="font-mono text-[10px] text-purple-400 uppercase tracking-widest font-bold">
                ENGINEERING PROFILE
              </span>
              <span className="text-[9px] font-mono text-zinc-400">10+ YOE</span>
            </div>

            <div className="mt-3 space-y-2">
              <div className="text-xs font-bold text-zinc-200 uppercase tracking-wider text-[10px]">
                Core Competencies
              </div>
              <div className="flex flex-wrap gap-1.5">
                {[
                  'ADP Assist (GenAI Agents)',
                  'Upgrade Automation Tools',
                  'Agentic Workflows',
                  'Vertex AI (Gemini)',
                  'pgvector / RAG',
                  'Fannie Mae Cloud CI/CD',
                  'Python & Multi-Tool LLMs'
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4 space-y-2">
              <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                Direct Channels
              </div>
              <div className="space-y-1.5 text-xs font-mono">
                <a
                  href="mailto:n.bhavana.reddy5@gmail.com"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-2 p-1.5 rounded hover:bg-zinc-900 text-purple-300 transition-colors"
                >
                  <Mail size={12} className="shrink-0" />
                  <span className="truncate">n.bhavana.reddy5@gmail.com</span>
                </a>
                <a
                  href="https://github.com/BNTiyan"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-2 p-1.5 rounded hover:bg-zinc-900 text-purple-300 transition-colors"
                >
                  <Github size={12} className="shrink-0" />
                  <span>github.com/BNTiyan</span>
                  <ExternalLink size={10} className="ml-auto opacity-50" />
                </a>
                <a
                  href="https://www.linkedin.com/in/bhavana-nare-60657385/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-2 p-1.5 rounded hover:bg-zinc-900 text-purple-300 transition-colors"
                >
                  <Linkedin size={12} className="shrink-0" />
                  <span>linkedin.com/in/bhavana-nare</span>
                  <ExternalLink size={10} className="ml-auto opacity-50" />
                </a>
              </div>
            </div>
          </div>

          {/* Back Footer */}
          <div className="pt-3 border-t border-zinc-800 flex items-center justify-between">
            <a
              href="/docs/Bhavana.pdf"
              download="Bhavana_Nare_Resume.pdf"
              onClick={(e) => e.stopPropagation()}
              className="px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-bold text-[11px] flex items-center gap-1.5 shadow transition-all"
            >
              <FileText size={12} />
              Resume PDF
            </a>

            <span className="text-[10px] text-zinc-500 font-mono flex items-center gap-1">
              <RotateCw size={10} /> Tap to flip back
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
