'use client';

import React from 'react';

export default function ArchitectureDiagram() {
  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="relative flex flex-col items-center space-y-8">
        
        {/* --- LEVEL 1: DATA INGESTION --- */}
        <div className="relative group w-full max-w-2xl">
          <div className="absolute inset-0 bg-purple-500/10 dark:bg-purple-500/5 rounded-2xl -m-4 blur-xl transition-all group-hover:bg-purple-500/20" />
          <div className="relative bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 shadow-sm flex flex-col sm:flex-row items-center gap-6">
            <div className="h-16 w-16 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center shrink-0 border border-purple-200 dark:border-purple-800">
              <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
              </svg>
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Data Ingestion & ETL</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                <strong>DynamoDB, PostgreSQL, AWS S3</strong> — scalable data pipelines
              </p>
            </div>
          </div>
        </div>

        {/* Arrow Down */}
        <div className="h-8 w-0.5 bg-zinc-300 dark:bg-zinc-700"></div>

        {/* --- LEVEL 2: ML/AI PROCESSING --- */}
        <div className="relative group w-full max-w-2xl">
          <div className="absolute inset-0 bg-blue-500/10 dark:bg-blue-500/5 rounded-2xl -m-4 blur-xl transition-all group-hover:bg-blue-500/20" />
          <div className="relative bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 shadow-sm flex flex-col sm:flex-row items-center gap-6">
            <div className="h-16 w-16 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center shrink-0 border border-blue-200 dark:border-blue-800">
              <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">ML/AI Processing</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                <strong>PyTorch, TensorFlow, Vertex AI</strong> — model training & inference
              </p>
            </div>
          </div>
        </div>

        {/* Arrow Down */}
        <div className="h-8 w-0.5 bg-zinc-300 dark:bg-zinc-700"></div>

        {/* --- LEVEL 3: SECURITY & GOVERNANCE --- */}
        <div className="relative group w-full max-w-2xl">
          <div className="absolute inset-0 bg-amber-500/10 dark:bg-amber-500/5 rounded-2xl -m-4 blur-xl transition-all group-hover:bg-amber-500/20" />
          <div className="relative bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 shadow-sm flex flex-col sm:flex-row items-center gap-6">
            <div className="h-16 w-16 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center shrink-0 border border-amber-200 dark:border-amber-800">
              <svg className="w-8 h-8 text-amber-600 dark:text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Security & Compliance</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                <strong>ISO 26262, ISO 21434, SAST</strong> — automated vulnerability scanning
              </p>
            </div>
          </div>
        </div>

        {/* Arrow Down */}
        <div className="h-8 w-0.5 bg-zinc-300 dark:bg-zinc-700"></div>

        {/* --- LEVEL 4: DEPLOYMENT --- */}
        <div className="relative group w-full max-w-2xl">
          <div className="absolute inset-0 bg-green-500/10 dark:bg-green-500/5 rounded-2xl -m-4 blur-xl transition-all group-hover:bg-green-500/20" />
          <div className="relative bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/10 border border-green-200 dark:border-green-800 rounded-xl p-6 shadow-sm flex flex-col sm:flex-row items-center gap-6">
            <div className="h-16 w-16 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center shrink-0 border border-green-200 dark:border-green-800">
              <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-bold text-green-900 dark:text-green-100">CI/CD & Deployment</h3>
              <p className="text-sm text-green-800 dark:text-green-300 mt-1">
                <strong>Docker, Kubernetes, Azure Pipelines</strong> — automated delivery
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

