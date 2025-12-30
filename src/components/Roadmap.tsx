"use client";

import React from 'react';
import { 
  CheckCircle2, 
  Circle, 
  Loader2, 
  Milestone, 
  GraduationCap,
  Building2,
  Cpu,
  Database,
  Shield,
  Brain,
  Rocket,
  TrendingUp,
  Code2
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
    icon: Code2,
    description: "Started career automating telecom infrastructure deployment. Built CI/CD pipelines with Jenkins and Python automation frameworks.",
    skills: ["Python", "Linux", "Jenkins", "Shell Scripting", "SonarQube"],
    skillsGained: "Enterprise automation, CI/CD fundamentals, Linux expertise"
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
  {
    id: 6,
    title: "Senior Software Engineer & System Integrator",
    organization: "Robert Bosch",
    location: "Michigan, USA",
    period: "2023 - 2025",
    type: 'work',
    status: 'completed',
    icon: Building2,
    description: "Led safety-critical automotive software development. Built PR Statistics Dashboard with ML forecasting. Achieved ISO 26262 & ASPICE compliance.",
    skills: ["Azure", "Docker", "Kubernetes", "Django", "React", "AWS SageMaker", "ISO 26262"],
    skillsGained: "Functional safety, ML in production, cloud-native architecture"
  },
  {
    id: 7,
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
    id: 8,
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
    <div className="relative flex gap-4">
      {/* Timeline line */}
      <div className="flex flex-col items-center">
        <div className={cn(
          "w-10 h-10 rounded-full flex items-center justify-center shrink-0 border-2",
          isEducation 
            ? "bg-indigo-50 dark:bg-indigo-900/20 border-indigo-300 dark:border-indigo-700"
            : "bg-purple-50 dark:bg-purple-900/20 border-purple-300 dark:border-purple-700",
          isActive && "ring-4 ring-purple-200 dark:ring-purple-800"
        )}>
          <phase.icon size={18} className={cn(
            isEducation ? "text-indigo-600 dark:text-indigo-400" : "text-purple-600 dark:text-purple-400"
          )} />
        </div>
        {!isLast && (
          <div className={cn(
            "w-0.5 flex-1 min-h-[40px]",
            isCompleted ? "bg-purple-300 dark:bg-purple-700" : "bg-zinc-200 dark:bg-zinc-800"
          )} />
        )}
      </div>

      {/* Card */}
      <div className={cn(
        "flex-1 pb-8 group",
      )}>
        <div className={cn(
          "p-5 rounded-xl border transition-all duration-300",
          isActive 
            ? "bg-white dark:bg-zinc-900 border-purple-500 shadow-lg shadow-purple-500/10" 
            : isCompleted
              ? "bg-zinc-50 dark:bg-zinc-900/50 border-zinc-200 dark:border-zinc-800 hover:border-purple-300 dark:hover:border-purple-800"
              : "bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 opacity-70"
        )}>
          
          {/* Header */}
          <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className={cn(
                  "text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full",
                  isEducation 
                    ? "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300"
                    : "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300"
                )}>
                  {isEducation ? 'Education' : 'Work'}
                </span>
                <StatusIcon status={phase.status} />
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

          {/* Skills */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {phase.skills.map((skill) => (
              <span 
                key={skill}
                className="px-2 py-0.5 text-xs bg-zinc-100 dark:bg-zinc-800 rounded text-zinc-700 dark:text-zinc-300"
              >
                {skill}
              </span>
            ))}
          </div>

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
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300 text-xs font-medium uppercase tracking-wide mb-4">
            <Milestone size={12} /> Career Journey
          </div>

          <h2 className="text-3xl md:text-4xl font-black text-zinc-900 dark:text-white tracking-tight leading-tight mb-4">
            From Academia to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Industry Leader</span>
          </h2>

          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            11+ years of progressive growth across education and industry, building expertise in 
            <strong className="text-zinc-800 dark:text-zinc-200"> Python, ML/AI, Cloud Architecture, </strong> 
            and <strong className="text-zinc-800 dark:text-zinc-200">Security Engineering</strong>.
          </p>
        </div>

        {/* Skill Progression Themes */}
        <div className="mb-12 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/10 dark:to-indigo-900/10 border border-purple-200 dark:border-purple-800 rounded-2xl p-6">
          <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
            <TrendingUp size={20} className="text-purple-600" />
            Common Themes & Skill Evolution
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {SKILL_PROGRESSION.map((item) => (
              <div key={item.theme} className="bg-white dark:bg-zinc-900/50 rounded-lg p-4 border border-zinc-200 dark:border-zinc-800">
                <div className="flex items-center gap-2 mb-2">
                  <item.icon size={16} className="text-purple-600 dark:text-purple-400" />
                  <span className="font-semibold text-zinc-900 dark:text-white text-sm">{item.theme}</span>
                </div>
                <p className="text-xs text-purple-600 dark:text-purple-400 font-mono mb-1">{item.journey}</p>
                <p className="text-xs text-zinc-600 dark:text-zinc-400">{item.description}</p>
              </div>
            ))}
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
