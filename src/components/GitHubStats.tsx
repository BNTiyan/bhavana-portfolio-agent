'use client';

import React from 'react';
import { Github, Star, GitFork, Code2, Brain, Cpu, Terminal } from 'lucide-react';
import { BentoCard } from './BentoGrid';

const GitHubStats = () => {
    const username = 'BNTiyan';

    return (
        <section id="github-stats" className="py-12 scroll-mt-24">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2 flex items-center justify-center gap-3">
                    <Github className="text-purple-600" size={32} />
                    Open Source Analytics
                </h2>
                <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">
                    Real-time visibility into development activity, tech stack distribution, and repository impact.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Local GitHub Stats Card */}
                <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden shadow-sm hover:border-purple-300 dark:hover:border-purple-800 transition-all duration-300 group">
                    <div className="p-4 border-b border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 flex justify-between items-center">
                        <span className="text-sm font-bold text-zinc-700 dark:text-zinc-200 flex items-center gap-2">
                            <Star size={16} className="text-amber-500" /> Repository Metrics
                        </span>
                    </div>
                    <div className="p-6 flex flex-col justify-between bg-zinc-50 dark:bg-zinc-900/50 min-h-[280px]">
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { label: 'Public Repos', value: '42', icon: <Github size={14} className="text-purple-500" /> },
                                { label: 'Total Stars', value: '128', icon: <Star size={14} className="text-amber-500" /> },
                                { label: 'Commits (2024)', value: '1.2k+', icon: <Terminal size={14} className="text-emerald-500" /> },
                                { label: 'Pull Requests', value: '340', icon: <GitFork size={14} className="text-blue-500" /> },
                            ].map((stat) => (
                                <div key={stat.label} className="bg-white dark:bg-zinc-800/50 p-3 rounded-xl border border-zinc-100 dark:border-zinc-700/50 shadow-xs">
                                    <div className="flex items-center gap-2 mb-1">
                                        {stat.icon}
                                        <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">{stat.label}</span>
                                    </div>
                                    <div className="text-xl font-black text-zinc-900 dark:text-white">{stat.value}</div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-4 p-3 bg-purple-500/10 rounded-xl border border-purple-500/20 text-center">
                            <div className="text-xs font-bold text-purple-600 dark:text-purple-400">Top 5% Contributor in AI/ML Repos</div>
                        </div>
                    </div>
                </div>

                {/* Local Language Distribution Card */}
                <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden shadow-sm hover:border-purple-300 dark:hover:border-purple-800 transition-all duration-300">
                    <div className="p-4 border-b border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 flex justify-between items-center">
                        <span className="text-sm font-bold text-zinc-700 dark:text-zinc-200 flex items-center gap-2">
                            <Code2 size={16} className="text-blue-500" /> Language Distribution
                        </span>
                    </div>
                    <div className="p-6 bg-zinc-50 dark:bg-zinc-900/50 min-h-[280px] flex flex-col justify-center">
                        <div className="space-y-4">
                            {[
                                { name: 'Python', percent: 65, color: 'bg-blue-500' },
                                { name: 'JavaScript / TS', percent: 15, color: 'bg-yellow-500' },
                                { name: 'Java', percent: 10, color: 'bg-orange-600' },
                                { name: 'C++', percent: 5, color: 'bg-pink-600' },
                                { name: 'Shell/Bash', percent: 3, color: 'bg-zinc-500' },
                                { name: 'Other', percent: 2, color: 'bg-zinc-300' },
                            ].map((lang) => (
                                <div key={lang.name} className="space-y-1">
                                    <div className="flex justify-between text-[11px] font-bold text-zinc-600 dark:text-zinc-400 uppercase">
                                        <span>{lang.name}</span>
                                        <span>{lang.percent}%</span>
                                    </div>
                                    <div className="h-2 w-full bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                                        <div
                                            className={`h-full ${lang.color} rounded-full transition-all duration-1000 ease-in-out`}
                                            style={{ width: `${lang.percent}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Highlighted Project (resume_py) */}
                <div className="relative bg-gradient-to-br from-purple-600 to-indigo-700 rounded-2xl overflow-hidden shadow-lg p-6 flex flex-col justify-between group">
                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-500">
                        <Brain size={120} />
                    </div>

                    <div>
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2 text-purple-200">
                                <div className="p-1.5 bg-white/20 rounded-lg backdrop-blur-md">
                                    <Cpu size={16} />
                                </div>
                                <span className="text-xs font-bold uppercase tracking-wider">Featured Open Source</span>
                            </div>
                            <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 text-[10px] font-bold rounded border border-emerald-500/30">
                                ACTIVE
                            </span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-1">resume_py</h3>
                        <p className="text-purple-100/60 text-[10px] font-mono mb-3 uppercase tracking-tight">Agentic Architecture • 5,000+ LOC</p>
                        <p className="text-purple-100/90 text-sm leading-relaxed mb-4">
                            Intelligent job application agent that scrapes 25+ company pages, targeting Hybrid/Remote roles in the USA and auto-filling portals using LLM reasoning.
                        </p>

                        <div className="grid grid-cols-2 gap-3 mb-6">
                            <div className="bg-white/5 rounded-lg p-2 border border-white/10 text-center">
                                <div className="text-white text-lg font-bold">25+</div>
                                <div className="text-purple-200/60 text-[9px] uppercase font-bold tracking-tight">Selenium Portals</div>
                            </div>
                            <div className="bg-white/5 rounded-lg p-2 border border-white/10 text-center">
                                <div className="text-white text-lg font-bold">76</div>
                                <div className="text-purple-200/60 text-[9px] uppercase font-bold tracking-tight">Jobs Matched</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                        {['Selenium', 'Playwright', 'RAG', 'Agentic Workflow'].map(tag => (
                            <span key={tag} className="px-1.5 py-0.5 bg-white/10 backdrop-blur-md rounded text-[9px] font-bold text-white border border-white/20">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <a
                        href={`https://github.com/${username}/resume_py`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full bg-white text-purple-700 py-3 rounded-xl font-bold text-sm hover:bg-purple-50 transition-all shadow-xl group/btn"
                    >
                        <Github size={16} /> View Documentation
                    </a>
                </div>
            </div>

            <div className="mt-8 grid grid-cols-1 xl:grid-cols-3 gap-6">
                {/* Mastery Matrix (2/3 width on desktop) */}
                <div className="xl:col-span-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 rounded-2xl shadow-sm">
                    <div className="flex justify-between items-start mb-8">
                        <div>
                            <h3 className="text-xl font-bold flex items-center gap-2 text-zinc-900 dark:text-white">
                                <Terminal size={20} className="text-purple-500" /> Mastery Matrix
                            </h3>
                            <p className="text-[11px] text-zinc-500 mt-1 uppercase tracking-widest font-bold opacity-60">Architectural & Framework Expertise</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Advanced Section */}
                        <div className="space-y-4">
                            <h4 className="text-[10px] font-bold text-purple-500 uppercase tracking-widest border-b border-purple-500/20 pb-2">Architecture Patterns</h4>
                            {[
                                { name: 'RAG Systems', level: 95 },
                                { name: 'Agentic Workflows', level: 92 },
                                { name: 'Microservices (AWS)', level: 90 },
                                { name: 'Event-Driven Arch', level: 88 },
                            ].map((skill) => (
                                <div key={skill.name} className="space-y-1.5">
                                    <div className="flex justify-between text-[11px] font-bold text-zinc-600 dark:text-zinc-300">
                                        <span>{skill.name}</span>
                                        <span>{skill.level}%</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-zinc-100 dark:bg-zinc-800/50 rounded-full overflow-hidden">
                                        <div className={`h-full bg-purple-500 rounded-full`} style={{ width: `${skill.level}%` }} />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Frameworks Section */}
                        <div className="space-y-4">
                            <h4 className="text-[10px] font-bold text-blue-500 uppercase tracking-widest border-b border-blue-500/20 pb-2">Top Frameworks</h4>
                            {[
                                { name: 'FastAPI / Django', level: 94 },
                                { name: 'React / Next.js', level: 85 },
                                { name: 'PyTorch / YOLO', level: 90 },
                                { name: 'Selenium / Playwright', level: 96 },
                            ].map((skill) => (
                                <div key={skill.name} className="space-y-1.5">
                                    <div className="flex justify-between text-[11px] font-bold text-zinc-600 dark:text-zinc-300">
                                        <span>{skill.name}</span>
                                        <span>{skill.level}%</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-zinc-100 dark:bg-zinc-800/50 rounded-full overflow-hidden">
                                        <div className={`h-full bg-blue-500 rounded-full`} style={{ width: `${skill.level}%` }} />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Infrastructure Section */}
                        <div className="space-y-4">
                            <h4 className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest border-b border-emerald-500/20 pb-2">Infrastructure</h4>
                            {[
                                { name: 'AWS Cloud (Expert)', level: 85 },
                                { name: 'Google Vertex AI', level: 90 },
                                { name: 'Docker / K8s', level: 78 },
                                { name: 'GitLab/GitHub CI', level: 92 },
                            ].map((skill) => (
                                <div key={skill.name} className="space-y-1.5">
                                    <div className="flex justify-between text-[11px] font-bold text-zinc-600 dark:text-zinc-300">
                                        <span>{skill.name}</span>
                                        <span>{skill.level}%</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-zinc-100 dark:bg-zinc-800/50 rounded-full overflow-hidden">
                                        <div className={`h-full bg-emerald-500 rounded-full`} style={{ width: `${skill.level}%` }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right: Manual Contribution Dashboard */}
                <div className="flex flex-col gap-6">
                    <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 rounded-2xl flex-1 flex flex-col justify-between group hover:border-purple-500/50 transition-colors">
                        <div>
                            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-4 block">Contribution Activity</span>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-500 font-bold text-xs">+14</div>
                                    <div className="text-xs text-zinc-500 dark:text-zinc-400">Repositories contributed to in 2024</div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-500 font-bold text-xs">🚀</div>
                                    <div className="text-xs text-zinc-500 dark:text-zinc-400">12 Major open-source releases merged</div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-500 font-bold text-xs">99%</div>
                                    <div className="text-xs text-zinc-500 dark:text-zinc-400">Code review response rate (Top Tier)</div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-zinc-100 dark:border-zinc-800 flex justify-between items-end">
                            <div className="text-[9px] font-bold text-zinc-400 uppercase tracking-tighter">Availability</div>
                            <div className="flex items-center gap-1.5">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                                <span className="text-[11px] font-bold text-emerald-500">OPEN FOR COLLAB</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 p-6 rounded-2xl flex-1 text-center flex flex-col justify-center">
                        <div className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mb-2">Portfolio Analytics</div>
                        <div className="text-3xl font-black text-white">5,000+</div>
                        <div className="text-purple-400 text-xs font-bold">Lines of Code Deployed</div>
                        <div className="mt-4 flex justify-center gap-1">
                            {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-1 h-3 bg-purple-500/30 rounded-full animate-pulse" style={{ animationDelay: `${i * 100}ms` }} />)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GitHubStats;
