"use client";

import React from 'react';
import { 
  CheckCircle2, 
  Circle, 
  Loader2, 
  Milestone, 
  Layers,
  Server,
  LayoutTemplate,
  Briefcase
} from 'lucide-react';
import { cn } from '@/lib/utils';

type PhaseStatus = 'completed' | 'current' | 'upcoming';

interface RoadmapPhase {
  id: number;
  title: string;
  subtitle: string;
  status: PhaseStatus;
  description: string;
  goal: string;
  stakeholder: string;
  icon: React.ElementType;
}

const PHASES: RoadmapPhase[] = [
  {
    id: 1,
    title: "Phase 1: Academic Foundation",
    subtitle: "Education & Research",
    status: 'completed',
    stakeholder: "Academic",
    icon: LayoutTemplate,
    description: "Master's in Computer Science from University of Georgia with thesis research on computational trust for human-robot collaboration. Published in IEEE Xplore.",
    goal: "Strong theoretical foundation in ML, computer vision, and safety-critical systems."
  },
  {
    id: 2,
    title: "Phase 2: Industry Application",
    subtitle: "Automotive & Safety",
    status: 'completed',
    stakeholder: "Engineering Teams",
    icon: Server,
    description: "Applied ML and safety engineering at Bosch and Continental. Built ADAS systems, automated CI/CD pipelines, and ensured ISO 26262 compliance.",
    goal: "End-to-end experience in automotive software development and safety certification."
  },
  {
    id: 3,
    title: "Phase 3: AI Security & Governance",
    subtitle: "Current Focus",
    status: 'current',
    stakeholder: "Security Teams",
    icon: Layers,
    description: "Leading AI governance and MLOps initiatives at Rivian. Architected 'Beacon' AI-assisted SAST platform using Vertex AI for automated security scanning.",
    goal: "Scaling AI-driven security tooling across enterprise CI/CD pipelines."
  },
  {
    id: 4,
    title: "Phase 4: Leadership & Innovation",
    subtitle: "Future Growth",
    status: 'upcoming',
    stakeholder: "Organizations",
    icon: Briefcase,
    description: "Seeking senior engineering roles where I can drive AI/ML strategy, build high-performing teams, and deliver impactful products.",
    goal: "Technical leadership combining ML expertise with automotive/security domain knowledge."
  }
];

const StatusIcon = ({ status }: { status: PhaseStatus }) => {
  if (status === 'completed') {
    return <CheckCircle2 className="w-6 h-6 text-purple-600 dark:text-purple-400 fill-purple-50 dark:fill-purple-900/20" />;
  }
  if (status === 'current') {
    return (
      <div className="relative flex items-center justify-center">
        <div className="absolute w-full h-full bg-purple-400/30 rounded-full animate-ping" />
        <Loader2 className="w-6 h-6 text-purple-600 dark:text-purple-400 animate-spin relative z-10" />
      </div>
    );
  }
  return <Circle className="w-6 h-6 text-zinc-300 dark:text-zinc-700" />;
};

const PhaseCard = ({ phase, isLast }: { phase: RoadmapPhase; isLast: boolean }) => {
  const isActive = phase.status === 'current';
  const isCompleted = phase.status === 'completed';

  return (
    <div className="relative pl-8 md:pl-0">
      
      {/* DESKTOP Timeline */}
      <div className="hidden md:flex flex-col items-center absolute left-[50%] -translate-x-1/2 h-full top-0">
        <div className={cn(
          "w-px h-8 bg-zinc-200 dark:bg-zinc-800",
          phase.id === 1 && "opacity-0"
        )} />
        <div className="bg-white dark:bg-zinc-950 p-2 z-10">
          <StatusIcon status={phase.status} />
        </div>
        <div className={cn(
          "w-px flex-1 bg-zinc-200 dark:bg-zinc-800",
          isLast && "opacity-0"
        )} />
      </div>

      {/* MOBILE Timeline */}
      <div className="md:hidden absolute left-2 top-0 h-full w-px bg-zinc-200 dark:bg-zinc-800">
        <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-white dark:bg-zinc-950 py-2">
           <StatusIcon status={phase.status} />
        </div>
      </div>

      <div className={cn(
        "md:flex items-center justify-between gap-12 py-8 group",
        phase.id % 2 === 0 ? "md:flex-row-reverse" : ""
      )}>
        
        {/* Card */}
        <div className="flex-1 ml-6 md:ml-0">
          <div className={cn(
            "p-6 rounded-2xl border transition-all duration-300 relative overflow-hidden",
            isActive 
              ? "bg-white dark:bg-zinc-900 border-purple-500 shadow-xl shadow-purple-500/10 scale-[1.02]" 
              : isCompleted
                ? "bg-zinc-50 dark:bg-zinc-900/50 border-purple-200 dark:border-purple-900/30 opacity-90 hover:opacity-100"
                : "bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 opacity-60 grayscale hover:grayscale-0 transition-all"
          )}>
            
            {isActive && (
              <div className="absolute top-0 left-0 w-1 h-full bg-purple-500" />
            )}

            <div className="flex justify-between items-start mb-4">
              <div>
                 <span className={cn(
                   "text-[10px] font-bold uppercase tracking-widest mb-1 block",
                   isActive || isCompleted ? "text-purple-600 dark:text-purple-400" : "text-zinc-400"
                 )}>
                   {phase.subtitle}
                 </span>
                 <h3 className={cn(
                   "text-lg font-bold",
                   isActive ? "text-zinc-900 dark:text-white" : "text-zinc-700 dark:text-zinc-300"
                 )}>
                   {phase.title}
                 </h3>
              </div>
              <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800">
                <phase.icon size={18} className={cn(
                  isActive || isCompleted ? "text-purple-600" : "text-zinc-400"
                )} />
              </div>
            </div>

            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
              {phase.description}
            </p>

            <div className={cn(
              "rounded-lg p-3 text-xs border",
              isActive 
                ? "bg-purple-50/50 dark:bg-purple-900/10 border-purple-100 dark:border-purple-800 text-purple-800 dark:text-purple-200"
                : "bg-zinc-100 dark:bg-zinc-800/50 border-zinc-200 dark:border-zinc-700 text-zinc-500"
            )}>
              <span className="font-bold block mb-1 uppercase text-[10px] opacity-70">
                Primary Goal
              </span>
              {phase.goal}
            </div>

            <div className="mt-4 flex items-center gap-2">
              <span className="text-[10px] text-zinc-400 uppercase font-medium">Target:</span>
              <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                {phase.stakeholder}
              </span>
            </div>

          </div>
        </div>

        <div className="flex-1 hidden md:flex flex-col justify-center items-center text-center opacity-50">
        </div>

      </div>
    </div>
  );
};

const Roadmap = () => {
  return (
    <section id="roadmap" className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-20 space-y-8">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300 text-xs font-medium uppercase tracking-wide">
             <Milestone size={12} /> Career Journey
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-white tracking-tight leading-tight">
            From Academia to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Industry Leader</span>
          </h2>

          <div className="max-w-3xl mx-auto relative group perspective-1000">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/10 to-indigo-600/10 dark:from-purple-600/20 dark:to-indigo-600/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            <div className="relative bg-white dark:bg-zinc-900/50 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 p-8 rounded-2xl shadow-sm">
                <div className="flex items justify-center gap-2 mb-6 opacity-50">
                    <div className="h-px w-8 bg-zinc-300 dark:bg-zinc-700"></div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                      Engineering Philosophy
                    </span>
                    <div className="h-px w-8 bg-zinc-300 dark:bg-zinc-700"></div>
                </div>

                <div className="text-sm text-left md:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed space-y-4">
                  <p>
                    Building <strong className="text-zinc-900 dark:text-white font-semibold">secure, scalable AI/ML systems</strong> that bridge the gap between cutting-edge research and production-ready solutions.
                  </p>
                  <p>
                    From automotive safety systems to cybersecurity AI, I focus on delivering <span className="text-purple-600 dark:text-purple-400 font-medium">measurable impact</span> through robust engineering practices and cross-functional collaboration.
                  </p>
                </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {PHASES.map((phase, index) => (
            <PhaseCard 
              key={phase.id} 
              phase={phase} 
              isLast={index === PHASES.length - 1} 
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Roadmap;

