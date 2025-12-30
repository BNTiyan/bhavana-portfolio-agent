"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  FileText, 
  Cpu, 
  TrendingUp, 
  TrendingDown,
  ShieldCheck,
  Linkedin,
  Briefcase,
} from 'lucide-react';

import Badge from '@/components/Badge'; 
import SystemStatusTicker from '@/components/SystemStatusTicker';
import AiGenerator from '@/components/AiGenerator'; 
import TrustBadge from '@/components/TrustBadge'; 

const HeroSection = () => {
  return (
    <section className="mb-8 pt-4">
      <SystemStatusTicker />

      <div className="grid lg:grid-cols-2 gap-12 items-center mt-8">
        
        {/* LEFT COL */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center h-full"
        >
            {/* Badges */}
            <div className="flex items-center gap-2 mb-4">
              <Badge 
                color="green" 
                pulse 
                href="mailto:n.bhavana.reddy5@gmail.com"
              >
                AVAILABLE FOR HIRE
              </Badge>
              <Badge color="zinc">Remote, USA</Badge>
            </div>               
            
            {/* Title */}
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4 text-zinc-900 dark:text-white leading-[1.1]">
              Senior Staff<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-500">
                Engineer
              </span>
            </h1>
            
            <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xl mb-6">
              MLOps & AI Security expert building secure, scalable AI/ML systems for automotive and enterprise.
            </p>
            
            {/* Trust Signals */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
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

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mt-auto">
              <a 
                href="https://github.com/Bhavana5N" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-all shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 hover:scale-[1.02] active:scale-95"
              >
                 <Github size={20} /> View GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/bhavana-nare-60657385/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-95"
              >
                 <Linkedin size={20} /> LinkedIn
              </a>
              <a 
                href="/docs/Bhavana.pdf" 
                download="Bhavana_Nare_Resume.pdf"
                className="flex items-center gap-2 px-6 py-3 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-900 dark:text-white rounded-lg font-medium transition-all border border-zinc-200 dark:border-zinc-700 hover:scale-[1.02] active:scale-95"
              >
                 <FileText size={20} /> Download Resume
              </a>
            </div>
        </motion.div>

        {/* RIGHT COL: Agent Card */}
        <motion.div 
          id="agent"
          className="relative hidden lg:block h-full min-h-[400px] scroll-mt-32"
          initial={{ opacity: 0, scale: 0.98 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8 }}
        >
           {/* Glow */}
           <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-emerald-500 rounded-2xl blur opacity-20 animate-pulse"></div>
           
           {/* Card */}
           <div className="relative bg-white dark:bg-black rounded-xl border border-zinc-200 dark:border-zinc-800 h-full p-4 shadow-2xl flex flex-col">
              
              {/* Header */}
              <div className="flex justify-between items-start mb-4 border-b border-zinc-100 dark:border-zinc-800 pb-3">
                <div className="flex gap-3">
                  <div className="mt-2 shrink-0">
                     <Cpu size={20} className="text-purple-600 dark:text-purple-400" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-sm text-zinc-900 dark:text-zinc-100">
                      Resume RAG Agent
                    </span>
                    <div className="text-[11px] leading-tight text-zinc-500 dark:text-zinc-400 mt-1">
                      <span>Powered by Gemini. </span>
                      <a 
                        href="https://github.com/Bhavana5N" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-purple-600 dark:text-purple-400 hover:underline decoration-purple-600/30 transition-all font-medium inline-flex items-center gap-1"
                      >
                        See source
                      </a>
                    </div>
                  </div>
                </div>
                <Badge color="green">Online</Badge>
              </div>

              {/* Chat */}
              <div className="flex-1 overflow-hidden relative rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                  <div className="absolute inset-0 overflow-auto custom-scrollbar">
                     <AiGenerator /> 
                  </div>
              </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

