'use client';

import React, { useState, useEffect } from 'react';
import { 
  Users, Mail, ArrowRight,  
  Workflow, ClipboardCheck, Bot, PiggyBank, 
  BookOpenCheck, Copyright, GitFork, Globe, Linkedin, Github, 
  CheckCircle2, GraduationCap, FileText, ExternalLink,
  Code2, Database, Cloud, Shield, Brain, BarChart3, Terminal, Cpu,
  Presentation
} from 'lucide-react';

import HeroSection from '@/components/HeroSection';
import ArchitectureDiagram from "@/components/ArchitectureDiagram";
import ProjectDeepDive from '@/components/ProjectDeepDive';
import Badge from '@/components/Badge';
import ImpactMetric from '@/components/ImpactMetric';
import { BentoGrid, BentoCard } from '@/components/BentoGrid';
import Roadmap from '@/components/Roadmap';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-white dark:bg-black bg-grid-pattern font-sans text-zinc-900 dark:text-zinc-100 selection:bg-purple-500/20">
      
      {/* HEADER */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-black/80 border-b border-zinc-200 dark:border-zinc-800 transition-all duration-300 supports-[backdrop-filter]:bg-white/60">
        <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
          
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-bold text-xl tracking-tighter flex items-center gap-2 group cursor-pointer select-none"
            role="button"
            aria-label="Scroll to top"
            tabIndex={0}
          >
            BHAVANA<span className="text-purple-600 dark:text-purple-500 group-hover:text-purple-700 transition-colors duration-300">NARE</span>
          </div>
          
          <nav className="hidden sm:flex gap-8 text-sm font-medium text-zinc-500 dark:text-zinc-400">
            {[
              { label: 'Live Agent', href: '#agent' },
              { label: 'Impact', href: '#impact' },
              { label: 'Skills', href: '#skills' },
              { label: 'Projects', href: '#projects' },
              { label: 'Profile', href: '#about' },
              { label: 'Journey', href: '#roadmap' },
            ].map((link) => (
              <a 
                key={link.href}
                href={link.href} 
                className="hover:text-purple-600 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded-sm"
              >
                {link.label}
              </a>
            ))}
            <a 
              href="/presentation.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-purple-600 transition-colors duration-200"
            >
              <Presentation size={14} />
              Slides
            </a>
          </nav>
          
          <a 
            href="mailto:n.bhavana.reddy5@gmail.com" 
            className="flex items-center gap-2 text-xs bg-purple-600 text-white dark:bg-purple-500 px-4 py-2 rounded-full font-bold 
                       hover:bg-purple-700 dark:hover:bg-purple-400 hover:scale-105 active:scale-95 
                       transition-all duration-200 shadow-sm hover:shadow-purple-500/25 group 
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-purple-600"
          >
            Contact
            <ArrowRight size={16} className="opacity-75 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* HERO */}
        <HeroSection />

        {/* IMPACT KPIs */}
        <section id="impact" className="mb-4 scroll-mt-24">
          <div className="relative rounded-2xl bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-sm">
            <div className="absolute top-0 left-0 w-1 h-full bg-purple-500"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-zinc-200 dark:divide-zinc-800">
              
              <ImpactMetric 
                value={70} suffix="%" label="Effort Reduction" 
                subtext={
                  <div className="flex flex-col gap-1.5 w-full mt-2">
                    <div className="flex items-center justify-center md:justify-start gap-2">
                      <Workflow size={14} className="text-emerald-500 shrink-0" />
                      <span className="text-xs text-zinc-600 dark:text-zinc-400">Automated CI/CD Pipelines</span>
                    </div>
                    <div className="flex items-center justify-center md:justify-start gap-2">
                      <ClipboardCheck size={14} className="text-emerald-500 shrink-0" />
                      <span className="text-xs text-zinc-600 dark:text-zinc-400">Jenkins & Docker Automation</span>
                    </div>
                  </div>
                }
              />

              <ImpactMetric 
                value={30} prefix=">" suffix="%" label="False Positives Cut" 
                subtext={
                  <div className="flex flex-col gap-1.5 w-full mt-2">
                    <div className="flex items-center justify-center md:justify-start gap-2">
                      <Bot size={14} className="text-emerald-500 shrink-0" />
                      <span className="text-xs text-zinc-600 dark:text-zinc-400">AI-assisted SAST (Beacon)</span>
                    </div>
                    <div className="flex items-center justify-center md:justify-start gap-2">
                      <PiggyBank size={14} className="text-emerald-500 shrink-0" />
                      <span className="text-xs text-zinc-600 dark:text-zinc-400">Vertex AI + Databricks</span>
                    </div>
                  </div>
                }
              />

              <ImpactMetric 
                value={1} suffix="K req/s" label="Dashboard Scale" 
                subtext={
                  <div className="flex flex-col gap-1.5 w-full mt-2">
                    <div className="flex items-center justify-center md:justify-start gap-2">
                      <BookOpenCheck size={14} className="text-emerald-500 shrink-0" />
                      <span className="text-xs text-zinc-600 dark:text-zinc-400">Flask + React + SageMaker</span>
                    </div>
                    <div className="flex items-center justify-center md:justify-start gap-2">
                      <Copyright size={14} className="text-emerald-500 shrink-0" />
                      <span className="text-xs text-zinc-600 dark:text-zinc-400">Containerized with Docker</span>
                    </div>
                  </div>
                }
              />

              <ImpactMetric 
                value={11} suffix="+" label="Years Experience" 
                subtext={
                  <div className="flex flex-col gap-1.5 w-full mt-2">
                    <div className="flex items-center justify-center md:justify-start gap-2">
                      <GitFork size={14} className="text-emerald-500 shrink-0" />
                      <span className="text-xs text-zinc-600 dark:text-zinc-400">TCS → Continental → Bosch → Rivian</span>
                    </div>
                  </div>
                }
              />
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="py-12 scroll-mt-24">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2">Technical Skills</h2>
            <p className="text-zinc-500 dark:text-zinc-400">Technologies and tools I work with</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Programming Languages */}
            <div className="bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 hover:border-purple-300 dark:hover:border-purple-800 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                  <Code2 size={20} className="text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="font-bold text-zinc-900 dark:text-white">Languages</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Python', 'C++', 'JavaScript', 'Java', 'SQL', 'Shell'].map((skill) => (
                  <span key={skill} className="px-2.5 py-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded-full text-zinc-700 dark:text-zinc-300 font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* AI/ML */}
            <div className="bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 hover:border-purple-300 dark:hover:border-purple-800 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <Brain size={20} className="text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-bold text-zinc-900 dark:text-white">AI/ML</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['PyTorch', 'TensorFlow', 'scikit-learn', 'OpenCV', 'Pandas', 'NumPy', 'MLFlow'].map((skill) => (
                  <span key={skill} className="px-2.5 py-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded-full text-zinc-700 dark:text-zinc-300 font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Cloud & DevOps */}
            <div className="bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 hover:border-purple-300 dark:hover:border-purple-800 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-amber-100 dark:bg-amber-900/30 rounded-lg">
                  <Cloud size={20} className="text-amber-600 dark:text-amber-400" />
                </div>
                <h3 className="font-bold text-zinc-900 dark:text-white">Cloud & DevOps</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'CI/CD'].map((skill) => (
                  <span key={skill} className="px-2.5 py-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded-full text-zinc-700 dark:text-zinc-300 font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Data */}
            <div className="bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 hover:border-purple-300 dark:hover:border-purple-800 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                  <Database size={20} className="text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="font-bold text-zinc-900 dark:text-white">Data</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['PostgreSQL', 'DynamoDB', 'GraphQL', 'Databricks', 'Hex', 'SQL'].map((skill) => (
                  <span key={skill} className="px-2.5 py-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded-full text-zinc-700 dark:text-zinc-300 font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Frameworks */}
            <div className="bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 hover:border-purple-300 dark:hover:border-purple-800 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-rose-100 dark:bg-rose-900/30 rounded-lg">
                  <Terminal size={20} className="text-rose-600 dark:text-rose-400" />
                </div>
                <h3 className="font-bold text-zinc-900 dark:text-white">Frameworks</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Django', 'Flask', 'React', 'FastAPI', 'REST APIs', 'GraphQL'].map((skill) => (
                  <span key={skill} className="px-2.5 py-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded-full text-zinc-700 dark:text-zinc-300 font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Security */}
            <div className="bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 hover:border-purple-300 dark:hover:border-purple-800 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg">
                  <Shield size={20} className="text-red-600 dark:text-red-400" />
                </div>
                <h3 className="font-bold text-zinc-900 dark:text-white">Security</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['SAST', 'ISO 26262', 'ISO 21434', 'Vertex AI', 'Vulnerability Scanning'].map((skill) => (
                  <span key={skill} className="px-2.5 py-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded-full text-zinc-700 dark:text-zinc-300 font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Visualization */}
            <div className="bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 hover:border-purple-300 dark:hover:border-purple-800 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
                  <BarChart3 size={20} className="text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="font-bold text-zinc-900 dark:text-white">Visualization</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Plotly', 'Dash', 'Matplotlib', 'Tableau', 'Hex Dashboards'].map((skill) => (
                  <span key={skill} className="px-2.5 py-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded-full text-zinc-700 dark:text-zinc-300 font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 hover:border-purple-300 dark:hover:border-purple-800 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg">
                  <Cpu size={20} className="text-cyan-600 dark:text-cyan-400" />
                </div>
                <h3 className="font-bold text-zinc-900 dark:text-white">Tools</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Git', 'GitLab', 'Bitbucket', 'JIRA', 'Confluence', 'SonarQube'].map((skill) => (
                  <span key={skill} className="px-2.5 py-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded-full text-zinc-700 dark:text-zinc-300 font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* PROFESSIONAL SUMMARY HIGHLIGHT */}
        <section className="py-8 mb-8">
          <div className="relative bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/10 border border-purple-200 dark:border-purple-800 rounded-2xl p-8 overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-purple-500"></div>
            
            <div className="max-w-4xl">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">Professional Summary</h2>
              
              <div className="space-y-4 text-zinc-700 dark:text-zinc-300">
                <p className="text-lg leading-relaxed">
                  <strong className="text-purple-700 dark:text-purple-400">Software Engineer</strong> with <strong>11+ years</strong> of experience building secure, scalable AI/ML systems. 
                  Specializing in <strong>MLOps</strong>, <strong>Cloud Security</strong>, and <strong>full-stack development</strong>.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 pt-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-purple-500 shrink-0 mt-1" size={18} />
                    <span>Lead <strong>AI governance initiatives</strong> using Databricks, Vertex AI, and GitLab to secure developer platforms</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-purple-500 shrink-0 mt-1" size={18} />
                    <span>Architect <strong>data pipelines</strong> on DynamoDB, PostgreSQL, and AWS serverless services</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-purple-500 shrink-0 mt-1" size={18} />
                    <span>Deploy <strong>AI/ML solutions</strong> integrating PyTorch, TensorFlow, and OpenCV for production</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-purple-500 shrink-0 mt-1" size={18} />
                    <span>Ensure compliance with <strong>ISO 26262</strong> (Functional Safety) and <strong>ISO 21434</strong> (Cybersecurity)</span>
                  </div>
                </div>
                
                <div className="pt-4 flex items-center gap-4 flex-wrap">
                  <span className="text-sm text-zinc-500 dark:text-zinc-400">Published Research:</span>
                  <a 
                    href="https://ieeexplore.ieee.org/document/11127674" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:underline font-medium"
                  >
                    <FileText size={16} />
                    IEEE Xplore: Computational Trust for Human-Robot Teams
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ARCHITECTURE */}
        <div id="projects" className="mt-0 scroll-mt-24">
           <ArchitectureDiagram />
        </div>

        {/* PROJECTS */}
        <BentoGrid className="pb-12">
          <BentoCard colSpan={2} noFade={true} id="proj-1" className="mb-4 scroll-mt-24">
             <ProjectDeepDive 
              title="Beacon: AI-Assisted SAST Platform"
              role="Cybersecurity AI Analyst @ Rivian"
              problem="Manual security scanning generated high false positive rates, slowing down developer velocity and creating alert fatigue in regulated product teams."
              solution="Architected 'Beacon' using Google Vertex AI (Gemini 2.5 Pro) to deliver exploitable security findings directly in CI/CD pipelines with context-aware prompt orchestration."
              parameters={['Jira Context', 'Databricks Feedback', 'Severity Scoring', 'GitLab MR Comments']}
              tags={['Python', 'Vertex AI', 'GraphQL', 'Databricks', 'Hex', 'GitLab CI/CD']}
              kpis={['Cut false positives >30%', 'Parallel monorepo scanning', 'Automated MR workflows']}
            />
          </BentoCard>

          <BentoCard colSpan={2} noFade={true} id="proj-2">
             <ProjectDeepDive 
              title="PR Statistics Dashboard"
              role="Product Owner @ Robert Bosch"
              problem="Engineering teams lacked visibility into code review SLAs and bottlenecks, leading to delayed releases and unpredictable delivery timelines."
              solution="Built a Flask + React dashboard integrated with AWS SageMaker to forecast review SLAs, containerized with Docker and scaling to 1K req/sec."
              parameters={['Review Time', 'Reviewer Load', 'PR Size', 'Team Velocity']}
              tags={['Flask', 'React', 'AWS SageMaker', 'Docker', 'Azure Pipelines']}
              kpis={['70% reduction in manual validation', 'Real-time SLA forecasting', 'Cross-team visibility']}
            />
          </BentoCard>
        </BentoGrid>

        {/* ABOUT */}
        <section id="about" className="mb-4 scroll-mt-24">
          <div className="grid md:grid-cols-3 gap-6">
            
            {/* Left: Profile */}
            <div className="md:col-span-1">
              <div className="bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 p-6 rounded-2xl shadow-sm h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-zinc-900 dark:text-white">
                    <Users className="text-purple-600" /> About Me
                  </h3>
                  <div className="mb-4">
                    <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                      I am a Software Engineer with expertise in MLOps, Cloud Security, and AI/ML pipelines. 
                      I build secure, scalable systems that bridge cutting-edge research with production-ready solutions.
                    </p>
                  </div>
                  <div className="flex gap-2 flex-wrap content-start mb-6">
                    <a 
                      href="mailto:n.bhavana.reddy5@gmail.com" 
                      className="hover:opacity-80 transition-opacity"
                      aria-label="Email Bhavana"
                    >
                      <Badge color="green" pulse icon={Globe}>n.bhavana.reddy5@gmail.com</Badge>
                    </a>
                  </div>
                  
                  {/* Links */}
                  <div className="flex flex-col gap-3 mb-6">
                    <a 
                      href="https://www.linkedin.com/in/bhavana-nare-60657385/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-300 hover:text-purple-600 transition-colors"
                    >
                      <Linkedin size={16} /> LinkedIn Profile <ExternalLink size={12} className="opacity-50" />
                    </a>
                    <a 
                      href="https://github.com/Bhavana5N" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-300 hover:text-purple-600 transition-colors"
                    >
                      <Github size={16} /> GitHub Profile <ExternalLink size={12} className="opacity-50" />
                    </a>
                    <a 
                      href="https://ieeexplore.ieee.org/document/11127674" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-300 hover:text-purple-600 transition-colors"
                    >
                      <FileText size={16} /> IEEE Publication <ExternalLink size={12} className="opacity-50" />
                    </a>
                    <a 
                      href="/presentation.html" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-300 hover:text-purple-600 transition-colors"
                    >
                      <Presentation size={16} /> Project Slides <ExternalLink size={12} className="opacity-50" />
                    </a>
                  </div>

                  {/* Presentation CTA */}
                  <a 
                    href="/presentation.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white text-center py-3 px-4 rounded-xl font-semibold text-sm mb-6 transition-all hover:shadow-lg hover:shadow-purple-500/25 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <Presentation size={18} />
                      View Full Presentation
                      <ArrowRight size={16} />
                    </span>
                  </a>
                </div>

                {/* Education */}
                <div className="border-t border-zinc-100 dark:border-zinc-800 pt-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-2">
                    <GraduationCap size={14} /> Education
                  </h4>
                  <div className="space-y-2">
                    <div className="text-sm">
                      <p className="font-semibold text-zinc-800 dark:text-zinc-200">MS Computer Science</p>
                      <p className="text-xs text-zinc-500">University of Georgia • GPA 3.7/4.0</p>
                    </div>
                    <div className="text-sm">
                      <p className="font-semibold text-zinc-800 dark:text-zinc-200">BTech Computer Science</p>
                      <p className="text-xs text-zinc-500">SVEC Tirupati • GPA 7.9/10</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right: Summary */}
            <div className="md:col-span-2">
              <div className="bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 p-6 rounded-2xl shadow-sm h-full">
                <h3 className="text-xl font-bold mb-4 text-zinc-900 dark:text-white">Professional Summary</h3>
                
                <ul className="space-y-3 text-sm text-zinc-600 dark:text-zinc-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-purple-500 shrink-0 mt-0.5" />
                    <span>Proficient in <strong>Python, C++, JavaScript, Django, Flask, React JS</strong>, and cloud services across AWS and Azure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-purple-500 shrink-0 mt-0.5" />
                    <span>Lead <strong>AI governance and MLOps initiatives</strong> using Databricks, Hex, GitLab, and Vertex AI to secure developer platforms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-purple-500 shrink-0 mt-0.5" />
                    <span>Deploy robust <strong>AI/ML solutions</strong> integrating PyTorch, TensorFlow, scikit-learn, and OpenCV</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-purple-500 shrink-0 mt-0.5" />
                    <span>Architect <strong>data pipelines</strong> on DynamoDB, PostgreSQL, and AWS serverless services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-purple-500 shrink-0 mt-0.5" />
                    <span>Ensure compliance with <strong>ISO 26262 functional safety</strong> and <strong>ISO 21434 cybersecurity</strong> standards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-purple-500 shrink-0 mt-0.5" />
                    <span>Published <strong>IEEE Xplore research</strong> on computational trust for human-robot collaboration</span>
                  </li>
                </ul>

                {/* CTA */}
                <div className="mt-8 pt-6 border-t border-zinc-100 dark:border-zinc-800">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge color="green" pulse>AVAILABLE FOR HIRE</Badge>
                  </div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                    Looking for senior engineering roles in <strong>AI/ML Engineering</strong>, <strong>MLOps</strong>, or <strong>Cloud Security</strong>.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['AI/ML Engineer', 'MLOps Engineer', 'Security Engineer', 'Senior Software Engineer'].map((role) => (
                      <span key={role} className="px-3 py-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded-full text-zinc-700 dark:text-zinc-300">
                        {role}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ROADMAP */}
        <Roadmap />

        {/* FOOTER */}
        <footer className="py-12 border-t border-zinc-200 dark:border-zinc-800 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <a href="https://github.com/Bhavana5N" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-purple-600 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/bhavana-nare-60657385/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-purple-600 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:n.bhavana.reddy5@gmail.com" className="text-zinc-400 hover:text-purple-600 transition-colors">
                <Mail size={20} />
              </a>
            </div>
            <p className="text-sm text-zinc-400">
              © {new Date().getFullYear()} Bhavana Nare. Built with Next.js.
            </p>
          </div>
        </footer>

      </main>
    </div>
  );
}

