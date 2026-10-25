import React from 'react';
import { ExternalLink, ShieldCheck, FileCheck2, ArrowUpRight } from 'lucide-react';

interface Project {
  title: string;
  url: string;
  description: string;
  category: string;
  artworkType: 'security' | 'campus';
}

const projects: Project[] = [
  {
    title: 'Web Security Assessment',
    url: 'https://cybercheckup.vercel.app/',
    description: 'A web security assessment project focused on presenting website security checks and findings.',
    category: 'Cybersecurity Assessment',
    artworkType: 'security',
  },
  {
    title: 'CampusCare — Student Leave Management System',
    url: 'https://student-leave-management-online.vercel.app/',
    description: 'A student leave management web application designed to simplify the leave request process.',
    category: 'Web Application',
    artworkType: 'campus',
  },
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-[#e6007a]/10 blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#ff4d97] mb-2.5">
            <span className="w-2 h-[2px] bg-[#ff2e8a]" />
            <span>Featured Work</span>
            <span className="w-2 h-[2px] bg-[#ff2e8a]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-['Outfit'] font-bold text-white tracking-tight">
            Projects
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#d89bb2] max-w-xl mx-auto">
            Practical applications built to explore secure web development and practical digital workflows.
          </p>
        </div>

        {/* 2 Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group flex flex-col justify-between rounded-3xl bg-[#1b0512]/80 backdrop-blur-md border border-[#e6007a]/25 hover:border-[#e6007a]/60 shadow-[0_8px_30px_rgb(0,0,0,0.35)] hover:shadow-[0_12px_40px_rgba(230,0,122,0.22)] transition-all duration-300 overflow-hidden"
            >
              {/* Abstract Graphic Header (Geometric artwork) */}
              <div className="relative h-48 sm:h-52 w-full bg-gradient-to-br from-[#2b081d] via-[#1d0614] to-[#12020a] border-b border-[#e6007a]/20 flex items-center justify-center p-6 overflow-hidden">
                {/* Visual Artwork according to project type */}
                {project.artworkType === 'security' ? (
                  <svg
                    viewBox="0 0 320 180"
                    className="w-full h-full max-w-[280px] transition-transform duration-500 group-hover:scale-105"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    {/* Concentric radar / security scan rings */}
                    <circle cx="160" cy="90" r="75" stroke="rgba(230,0,122,0.18)" strokeWidth="1" strokeDasharray="3 3" />
                    <circle cx="160" cy="90" r="50" stroke="rgba(255,77,151,0.25)" strokeWidth="1.2" />
                    <circle cx="160" cy="90" r="28" stroke="#e6007a" strokeWidth="1.5" />
                    
                    {/* Central shield node */}
                    <polygon
                      points="160,65 185,78 185,102 160,118 135,102 135,78"
                      fill="#250718"
                      stroke="#ff2e8a"
                      strokeWidth="2"
                    />
                    <circle cx="160" cy="91" r="5" fill="#ffffff" />

                    {/* Security check nodes */}
                    <circle cx="95" cy="55" r="4" fill="#ff4d97" />
                    <line x1="95" y1="55" x2="135" y2="78" stroke="rgba(230,0,122,0.4)" strokeWidth="1" strokeDasharray="2 2" />

                    <circle cx="225" cy="55" r="4" fill="#ff4d97" />
                    <line x1="225" y1="55" x2="185" y2="78" stroke="rgba(230,0,122,0.4)" strokeWidth="1" strokeDasharray="2 2" />

                    <circle cx="230" cy="125" r="4" fill="#e6007a" />
                    <line x1="230" y1="125" x2="185" y2="102" stroke="rgba(230,0,122,0.4)" strokeWidth="1" strokeDasharray="2 2" />

                    <circle cx="90" cy="125" r="4" fill="#e6007a" />
                    <line x1="90" y1="125" x2="135" y2="102" stroke="rgba(230,0,122,0.4)" strokeWidth="1" strokeDasharray="2 2" />
                  </svg>
                ) : (
                  <svg
                    viewBox="0 0 320 180"
                    className="w-full h-full max-w-[280px] transition-transform duration-500 group-hover:scale-105"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    {/* Abstract process flowchart and calendar mesh */}
                    <rect x="70" y="45" width="55" height="40" rx="8" fill="#250718" stroke="rgba(255,77,151,0.4)" strokeWidth="1.5" />
                    <rect x="195" y="45" width="55" height="40" rx="8" fill="#250718" stroke="rgba(255,77,151,0.4)" strokeWidth="1.5" />
                    <rect x="132" y="105" width="56" height="42" rx="8" fill="#320a22" stroke="#ff2e8a" strokeWidth="2" />

                    {/* Flow connectors */}
                    <path d="M 125 65 L 195 65" stroke="rgba(230,0,122,0.4)" strokeWidth="1.5" strokeDasharray="3 3" />
                    <path d="M 97 85 L 97 126 L 132 126" stroke="rgba(230,0,122,0.4)" strokeWidth="1.5" />
                    <path d="M 223 85 L 223 126 L 188 126" stroke="rgba(230,0,122,0.4)" strokeWidth="1.5" />

                    {/* Inner check / document icons */}
                    <circle cx="97.5" cy="65" r="7" fill="#ff4d97" fillOpacity="0.3" />
                    <circle cx="222.5" cy="65" r="7" fill="#ff4d97" fillOpacity="0.3" />
                    <circle cx="160" cy="126" r="8" fill="#e6007a" />
                    <polyline points="156,126 159,129 164,123" stroke="#ffffff" strokeWidth="2" fill="none" strokeLinecap="round" />
                  </svg>
                )}

                {/* Category label */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#16030e]/80 border border-[#e6007a]/30 text-[11px] font-medium text-[#f2c4d7] backdrop-blur-sm">
                  {project.category}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-['Outfit'] font-bold text-white mb-2.5 tracking-tight group-hover:text-[#ff4d97] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#d89bb2] leading-relaxed mb-6 font-normal">
                    {project.description}
                  </p>
                </div>

                {/* Two Action Buttons required: View Live Project & Open Project */}
                <div className="pt-4 border-t border-[#e6007a]/15 flex flex-col sm:flex-row items-center gap-3">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-[#e6007a] to-[#ff2e8a] rounded-xl hover:brightness-110 active:scale-98 transition-all shadow-[0_2px_12px_rgba(230,0,122,0.3)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff4d97]"
                  >
                    <span>View Live Project</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-[#f2c4d7] hover:text-white bg-[#250719]/80 hover:bg-[#340a23] border border-[#e6007a]/30 hover:border-[#e6007a]/60 rounded-xl active:scale-98 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e6007a]"
                  >
                    <span>Open Project</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#ff4d97]" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
