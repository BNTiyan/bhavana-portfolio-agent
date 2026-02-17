import React from 'react';
import { FileText, ExternalLink, Download, Calendar, Award } from 'lucide-react';
import Badge from '@/components/Badge';

interface Publication {
  name: string;
  publisher: string;
  releaseDate: string;
  url: string;
  summary: string;
  skills?: string[];
}

interface PublicationsProps {
  publications: Publication[];
}

const Publications: React.FC<PublicationsProps> = ({ publications }) => {
  if (!publications || publications.length === 0) return null;

  return (
    <section id="publications" className="py-12 scroll-mt-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4 flex items-center justify-center gap-3">
          <FileText className="text-purple-600" size={32} />
          Publications & Research
        </h2>
        <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">
          Academic and industrial research papers, technical reports, and whitepapers.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {publications.map((pub, index) => (
          <div
            key={index}
            className="group relative bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <FileText size={100} className="text-purple-600" />
            </div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-4">
                <div className="flex justify-between items-start gap-4 mb-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-purple-100/50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
                    <Award size={12} />
                    {pub.publisher}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400 shrink-0">
                    <Calendar size={12} />
                    {pub.releaseDate}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-zinc-900 dark:text-white leading-tight mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  <a href={pub.url} target="_blank" rel="noopener noreferrer" className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    {pub.name}
                  </a>
                </h3>

                <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6">
                  {pub.summary}
                </p>
              </div>

              <div className="mt-auto">
                {pub.skills && pub.skills.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {pub.skills.map((skill) => (
                      <Badge key={skill} color="blue">{skill}</Badge>
                    ))}
                  </div>
                )}

                <div className="flex items-center gap-4">
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-semibold text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors z-20"
                  >
                    {pub.url.endsWith('.pdf') ? <Download size={16} /> : <ExternalLink size={16} />}
                    {pub.url.endsWith('.pdf') ? 'Download PDF' : 'Read Paper'}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Publications;
