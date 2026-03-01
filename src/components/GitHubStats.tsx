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
                {/* GitHub Stats Card */}
                <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden shadow-sm hover:border-purple-300 dark:hover:border-purple-800 transition-all duration-300 group">
                    <div className="p-4 border-b border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 flex justify-between items-center">
                        <span className="text-sm font-bold text-zinc-700 dark:text-zinc-200 flex items-center gap-2">
                            <Star size={16} className="text-amber-500" /> Repository Metrics
                        </span>
                    </div>
                    <div className="p-4 flex justify-center bg-zinc-50 dark:bg-zinc-900/50">
                        <img
                            src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=dark&hide_border=true&title_color=a855f7&icon_color=a855f7&bg_color=18181b`}
                            alt="GitHub Stats"
                            className="w-full h-auto rounded-lg shadow-inner"
                        />
                    </div>
                </div>

                {/* Top Languages Card */}
                <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden shadow-sm hover:border-purple-300 dark:hover:border-purple-800 transition-all duration-300">
                    <div className="p-4 border-b border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 flex justify-between items-center">
                        <span className="text-sm font-bold text-zinc-700 dark:text-zinc-200 flex items-center gap-2">
                            <Code2 size={16} className="text-blue-500" /> Language Distribution
                        </span>
                    </div>
                    <div className="p-4 flex justify-center bg-zinc-50 dark:bg-zinc-900/50">
                        <img
                            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=dark&hide_border=true&title_color=a855f7&bg_color=18181b&langs_count=10`}
                            alt="Top Languages"
                            className="w-full h-auto rounded-lg shadow-inner"
                        />
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
                        <p className="text-purple-100/60 text-[10px] font-mono mb-3">5,000+ Lines of Python Code</p>
                        <p className="text-purple-100/90 text-sm leading-relaxed mb-4">
                            AI job application agent that scrapes 25+ company pages and auto-fills portals using LLMs.
                        </p>

                        <div className="grid grid-cols-2 gap-3 mb-6">
                            <div className="bg-white/5 rounded-lg p-2 border border-white/10">
                                <div className="text-white text-lg font-bold">76</div>
                                <div className="text-purple-200/60 text-[9px] uppercase font-bold tracking-tight">Jobs Matched</div>
                            </div>
                            <div className="bg-white/5 rounded-lg p-2 border border-white/10">
                                <div className="text-white text-lg font-bold">~90m</div>
                                <div className="text-purple-200/60 text-[9px] uppercase font-bold tracking-tight">Execution Time</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                        {['Selenium', 'Playwright', 'LLMs', 'ATS Scorer'].map(tag => (
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
                            <p className="text-[11px] text-zinc-500 mt-1 uppercase tracking-widest font-bold opacity-60">Full-Stack Tech Hierarchy</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Advanced Section */}
                        <div className="space-y-4">
                            <h4 className="text-[10px] font-bold text-purple-500 uppercase tracking-widest border-b border-purple-500/20 pb-2">Core Proficiency</h4>
                            {[
                                { name: 'Python (Expert)', level: 95 },
                                { name: 'LLM & AI Ops', level: 92 },
                                { name: 'ML/DL Pipelines', level: 88 },
                                { name: 'SQL Architecture', level: 90 },
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
                            <h4 className="text-[10px] font-bold text-blue-500 uppercase tracking-widest border-b border-blue-500/20 pb-2">Frameworks</h4>
                            {[
                                { name: 'React / Next.js', level: 85 },
                                { name: 'Django / FastAPI', level: 88 },
                                { name: 'GraphQL / REST', level: 90 },
                                { name: 'Dash / Plotly', level: 92 },
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
                                { name: 'AWS Cloud', level: 82 },
                                { name: 'Google Vertex AI', level: 90 },
                                { name: 'Docker / K8s', level: 75 },
                                { name: 'CI/CD (GitLab)', level: 88 },
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

                {/* Right: GitHub Activity Column */}
                <div className="flex flex-col gap-6">
                    <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 rounded-2xl flex-1 flex flex-col justify-center items-center group hover:border-purple-500/50 transition-colors">
                        <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-4">Development Streak</span>
                        <img
                            src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=dark&hide_border=true&stroke=a855f7&ring=a855f7&fire=a855f7&currStreakNum=ffffff&sideNums=ffffff&sideLabels=a855f7&dates=71717a&bg_color=18181b`}
                            alt="GitHub Streak"
                            className="w-full h-auto rounded-lg"
                        />
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
