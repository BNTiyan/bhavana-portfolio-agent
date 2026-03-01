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
                    Real-time visibility into my development activity, tech stack distribution, and repository impact.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* GitHub Stats Card */}
                <div className="bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden shadow-sm hover:border-purple-300 dark:hover:border-purple-800 transition-all duration-300">
                    <div className="p-4 border-b border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 flex justify-between items-center">
                        <span className="text-sm font-bold text-zinc-700 dark:text-zinc-200 flex items-center gap-2">
                            <Star size={16} className="text-amber-500" /> GitHub Profile Stats
                        </span>
                    </div>
                    <div className="p-4 flex justify-center">
                        <img
                            src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=transparent&hide_border=true&title_color=a855f7&icon_color=a855f7&text_color=71717a&bg_color=00000000&count_private=true`}
                            alt="GitHub Stats"
                            className="w-full h-auto dark:invert-[0.05]"
                        />
                    </div>
                </div>

                {/* Top Languages Card */}
                <div className="bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden shadow-sm hover:border-purple-300 dark:hover:border-purple-800 transition-all duration-300">
                    <div className="p-4 border-b border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 flex justify-between items-center">
                        <span className="text-sm font-bold text-zinc-700 dark:text-zinc-200 flex items-center gap-2">
                            <Code2 size={16} className="text-blue-500" /> Language Distribution
                        </span>
                    </div>
                    <div className="p-4 flex justify-center">
                        <img
                            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=transparent&hide_border=true&title_color=a855f7&text_color=71717a&bg_color=00000000&langs_count=8`}
                            alt="Top Languages"
                            className="w-full h-auto dark:invert-[0.05]"
                        />
                    </div>
                </div>

                {/* Highlighted Project (LLM/ML) */}
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
                            Intelligent job application agent that scrapes 25+ company pages, analyzes descriptions, and auto-fills portals using Gemini/GPT-4.
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
                        className="flex items-center justify-center gap-2 w-full bg-white text-purple-700 py-2.5 rounded-xl font-bold text-sm hover:bg-purple-50 transition-all shadow-xl group/btn"
                    >
                        <Github size={16} /> View Documentation
                    </a>
                </div>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Tech Stack Proficiency Visualization */}
                <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 rounded-2xl flex flex-col h-full">
                    <div className="flex justify-between items-start mb-6">
                        <div>
                            <h3 className="text-lg font-bold flex items-center gap-2 text-zinc-900 dark:text-white">
                                <Terminal size={18} className="text-purple-500" /> Mastery Matrix
                            </h3>
                            <p className="text-[11px] text-zinc-500 mt-1 uppercase tracking-wider font-semibold">Skill Progression & Depth</p>
                        </div>
                        <div className="flex gap-2">
                            <span className="flex items-center gap-1.5 text-[9px] font-bold text-zinc-400">
                                <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span> ADVANCED
                            </span>
                            <span className="flex items-center gap-1.5 text-[9px] font-bold text-zinc-400">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span> STRATEGIC
                            </span>
                        </div>
                    </div>

                    <div className="space-y-6 flex-1">
                        {/* Advanced Section */}
                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Advanced Core</span>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                                {[
                                    { name: 'Python', level: 95, color: 'bg-purple-600' },
                                    { name: 'LLM & AI Integration', level: 92, color: 'bg-purple-500' },
                                    { name: 'MLOps Pipelines', level: 88, color: 'bg-purple-500' },
                                    { name: 'SQL & Data Engineering', level: 90, color: 'bg-purple-400' },
                                ].map((skill) => (
                                    <div key={skill.name} className="space-y-1.5">
                                        <div className="flex justify-between text-[11px] font-medium text-zinc-600 dark:text-zinc-300">
                                            <span>{skill.name}</span>
                                            <span className="text-purple-500 font-bold">{skill.level}%</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-zinc-100 dark:bg-zinc-800/50 rounded-full overflow-hidden">
                                            <div className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out`} style={{ width: `${skill.level}%` }} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Intermediate Section */}
                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Strategic Intermediate</span>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                                {[
                                    { name: 'React / Next.js', level: 78, color: 'bg-blue-500' },
                                    { name: 'Cloud Infra (AWS/GCP)', level: 82, color: 'bg-blue-500' },
                                    { name: 'Docker / Kubernetes', level: 75, color: 'bg-blue-400' },
                                    { name: 'Computer Vision', level: 70, color: 'bg-blue-400' },
                                ].map((skill) => (
                                    <div key={skill.name} className="space-y-1.5">
                                        <div className="flex justify-between text-[11px] font-medium text-zinc-600 dark:text-zinc-300">
                                            <span>{skill.name}</span>
                                            <span className="text-blue-500 font-bold">{skill.level}%</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-zinc-100 dark:bg-zinc-800/50 rounded-full overflow-hidden">
                                            <div className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out`} style={{ width: `${skill.level}%` }} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contribution Streak or Activity */}
                <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-4 rounded-2xl flex flex-col justify-center items-center">
                    <img
                        src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=transparent&hide_border=true&stroke=a855f7&ring=a855f7&fire=a855f7&currStreakNum=a855f7&sideNums=71717a&sideLabels=71717a&dates=71717a`}
                        alt="GitHub Streak"
                        className="w-full h-auto dark:invert-[0.05]"
                    />
                </div>
            </div>
        </section>
    );
};

export default GitHubStats;
