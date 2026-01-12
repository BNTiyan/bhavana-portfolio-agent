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
  Briefcase,
  GraduationCap,
  Database,
  Cpu,
  Building2,
  Shield,
  Rocket,
  TrendingUp,
  Code2,
  Brain
} from 'lucide-react';
import { cn } from '@/lib/utils';

type PhaseStatus = 'completed' | 'current' | 'upcoming';
type PhaseType = 'education' | 'work';

interface RoadmapPhase {
  id: number;
  title: string;
  organization: string;
  location: string;
  period: string;
  type: PhaseType;
  status: PhaseStatus;
  description: string;
  skills: string[];
  skillsGained: string;
  icon: React.ElementType;
}

const PHASES: RoadmapPhase[] = [
  {
    id: 1,
    title: "Bachelor of Technology",
    organization: "Sree Vidyanikethan Engineering College",
    location: "Tirupati, India",
    period: "2010 - 2014",
    type: 'education',
    status: 'completed',
    icon: GraduationCap,
    description: "Computer Science foundation with focus on programming fundamentals, algorithms, and software engineering principles.",
    skills: ["C++", "Java", "Data Structures", "Algorithms", "DBMS"],
    skillsGained: "Strong CS fundamentals and problem-solving approach"
  },
  {
    id: 2,
    title: "Senior Software Engineer",
    organization: "Tata Consultancy Services",
    location: "Hyderabad, India",
    period: "2014 - 2018",
    type: 'work',
    status: 'completed',
    icon: Server,
    description: "Automated telecom component deployment and validation using Python and Jenkins. Reduced manual testing effort by 40%.",
    skills: ["Python", "Linux", "Jenkins", "Docker"],
    skillsGained: "Enterprise automation and DevOps fundamentals"
  },
  {
    id: 3,
    title: "Python Developer & Data Analyst",
    organization: "Teradata India",
    location: "Hyderabad, India",
    period: "2018 - 2019",
    type: 'work',
    status: 'completed',
    icon: Database,
    description: "Designed APIs for PYTERADATA, bridging Python with enterprise SQL analytics. Enhanced data engineering skills.",
    skills: ["Python", "SQL", "APIs", "Data Analytics", "Test Automation"],
    skillsGained: "Data engineering, API design, enterprise data systems"
  },
  {
    id: 4,
    title: "Scrum Master & Tool Architect",
    organization: "Continental Automotive",
    location: "Bangalore, India",
    period: "2019 - 2021",
    type: 'work',
    status: 'completed',
    icon: Cpu,
    description: "Led ADAS camera object detection projects. Built computer vision solutions with Kalman filters and 3D mapping. Created AWS-powered dashboards.",
    skills: ["Python", "C++", "OpenCV", "AWS Lambda", "React", "Django", "Flask"],
    skillsGained: "Computer vision, automotive ADAS, AWS cloud architecture"
  },
  {
    id: 5,
    title: "Master of Computer Science",
    organization: "University of Georgia",
    location: "Athens, Georgia, USA",
    period: "2021 - 2023",
    type: 'education',
    status: 'completed',
    icon: GraduationCap,
    description: "Thesis research on computational trust for human-robot collaboration. Published in IEEE Xplore. GPA: 3.7/4.0",
    skills: ["Machine Learning", "PyTorch", "TensorFlow", "Research", "Trust Modeling"],
    skillsGained: "ML/AI research, academic publishing, deep learning"
  },
  id: 6,
  title: "MLOps Engineer",
  organization: "Robert Bosch",
  location: "Michigan, USA",
  period: "Aug 2024 - May 2025",
  type: 'work',
  status: 'completed',
  icon: Building2,
  description: "Designed MLOps analytics framework for PR health signals. Built automated data ingestion pipelines and operational dashboards.",
  skills: ["MLOps", "Python", "Data pipelines", "Dashboards", "Monitoring"],
  skillsGained: "MLOps architecture, data engineering, operational analytics"
  },
{
  id: 7,
    title: "Senior Software Engineer",
      organization: "Robert Bosch",
        location: "Michigan, USA",
          period: "Aug 2023 - Aug 2024",
            type: 'work',
            {
              id: 6,
              title: "MLOps Engineer",
              organization: "Robert Bosch",
              location: "Michigan, USA",
              period: "Aug 2024 - May 2025",
              type: 'work',
              status: 'completed',
              icon: Building2,
              description: "Designed MLOps analytics framework for PR health signals. Built automated data ingestion pipelines and operational dashboards.",
              skills: ["MLOps", "Python", "Data pipelines", "Dashboards", "Monitoring"],
              skillsGained: "MLOps architecture, data engineering, operational analytics"
            },
            {
              id: 7,
              title: "Senior Software Engineer",
              organization: "Robert Bosch",
              location: "Michigan, USA",
              period: "Aug 2023 - Aug 2024",
              type: 'work',
              status: 'completed',
              icon: Building2,
              description: "Led config-driven orchestration framework design. Automated Azure pipelines for safe software integration and release compliance.",
              skills: ["CI/CD", "Azure Pipelines", "Python", "System Design", "Orchestration"],
              skillsGained: "CI/CD automation, system integration, compliance"
            },
            {
              id: 8,
              title: "Cybersecurity AI Analyst",
              organization: "Rivian Automotive",
              location: "Remote, USA",
              period: "2025 - Present",
              type: 'work',
              status: 'current',
              icon: Shield,
              description: "Leading AI governance and MLOps initiatives. Architected 'Beacon' AI-assisted SAST platform using Vertex AI. Building security automation at scale.",
              skills: ["Vertex AI", "Gemini", "GraphQL", "Databricks", "Hex", "GitLab CI/CD"],
              skillsGained: "AI security, LLM integration, enterprise MLOps"
            },
            {
              id: 9,
              title: "Technical Leadership",
              organization: "Future Growth",
              location: "USA",
              period: "Next Chapter",
              type: 'work',
              status: 'upcoming',
              icon: Rocket,
              description: "Seeking senior engineering roles to drive AI/ML strategy, build high-performing teams, and deliver impactful products at scale.",
              skills: ["Team Leadership", "Architecture", "Strategy", "Mentoring"],
              skillsGained: "Technical leadership combining ML + automotive + security expertise"
            }
];

  // Common themes across career
  const SKILL_PROGRESSION = [
    {
      theme: "Automation & CI/CD",
      icon: TrendingUp,
      journey: "Jenkins @ TCS → Azure Pipelines @ Bosch → GitLab CI @ Rivian",
      description: "Consistent focus on automating deployments and reducing manual effort"
    },
    {
      theme: "Python Expertise",
      icon: Code2,
      journey: "Scripting @ TCS → APIs @ Teradata → ML @ UGA → AI @ Rivian",
      description: "Python as core language, evolving from scripting to ML/AI applications"
    },
    {
      theme: "Data & ML",
      icon: Brain,
      journey: "SQL @ Teradata → Computer Vision @ Continental → Deep Learning @ UGA → LLMs @ Rivian",
      description: "Progressive deepening of ML skills from analytics to cutting-edge AI"
    },
    {
      theme: "Cloud Architecture",
      icon: Database,
      journey: "AWS Lambda @ Continental → Azure @ Bosch → Vertex AI @ Rivian",
      description: "Multi-cloud experience across AWS, Azure, and Google Cloud"
    }
  ];

  const StatusIcon = ({ status }: { status: PhaseStatus }) => {
    if (status === 'completed') {
      return <CheckCircle2 className="w-5 h-5 text-purple-600 dark:text-purple-400" />;
    }
    if (status === 'current') {
      return (
        <div className="relative flex items-center justify-center">
          <div className="absolute w-full h-full bg-purple-400/30 rounded-full animate-ping" />
          <Loader2 className="w-5 h-5 text-purple-600 dark:text-purple-400 animate-spin relative z-10" />
        </div>
      );
    }
    return <Circle className="w-5 h-5 text-zinc-300 dark:text-zinc-700" />;
  };

  const PhaseCard = ({ phase, isLast }: { phase: RoadmapPhase; isLast: boolean }) => {
    const isActive = phase.status === 'current';
    const isCompleted = phase.status === 'completed';
    const isEducation = phase.type === 'education';

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
          {!isLast && (
            <div className={cn(
              "w-0.5 flex-1 min-h-[40px]",
              isCompleted ? "bg-purple-300 dark:bg-purple-700" : "bg-zinc-200 dark:bg-zinc-800"
            )} />
          )}
        </div>

        {/* MOBILE Timeline */}
        <div className="md:hidden absolute left-2 top-0 h-full w-px bg-zinc-200 dark:bg-zinc-800">
          <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-white dark:bg-zinc-950 py-2">
            <StatusIcon status={phase.status} />
          </div>
        </div>

        <div className={cn(
          "flex-1 pb-8 group",
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
                  <h3 className={cn(
                    "text-lg font-bold",
                    isActive ? "text-zinc-900 dark:text-white" : "text-zinc-700 dark:text-zinc-300"
                  )}>
                    {phase.title}
                  </h3>
                </div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                  {phase.title}
                </h3>
                <p className="text-sm font-medium text-purple-600 dark:text-purple-400">
                  {phase.organization}
                </p>
              </div>
              <div className="text-right text-xs text-zinc-500">
                <div className="font-semibold">{phase.period}</div>
                <div>{phase.location}</div>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">
              {phase.description}
            </p>



            {/* Skills Gained */}
            <div className="flex items-start gap-2 pt-3 border-t border-zinc-100 dark:border-zinc-800">
              <TrendingUp size={14} className="text-emerald-500 shrink-0 mt-0.5" />
              <span className="text-xs text-zinc-600 dark:text-zinc-400">
                <strong className="text-emerald-600 dark:text-emerald-400">Skills Gained:</strong> {phase.skillsGained}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const Roadmap = () => {
    return (
      <section id="roadmap" className="py-16 relative overflow-hidden scroll-mt-24">
        <div className="max-w-4xl mx-auto px-6">

          {/* Header */}
          <div className="text-center mb-20 space-y-8">

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300 text-xs font-medium uppercase tracking-wide">
              <Milestone size={12} /> Career Journey
            </div>

            <h2 className="text-3xl md:text-4xl font-black text-zinc-900 dark:text-white tracking-tight leading-tight mb-4">
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
