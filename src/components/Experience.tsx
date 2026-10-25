import React from 'react';
import { Briefcase, Building2, Code2, ShieldAlert } from 'lucide-react';

interface ExperienceEntry {
  role: string;
  organization: string;
  description: string;
  icon: React.ReactNode;
}

const experiences: ExperienceEntry[] = [
  {
    role: 'Web Developer Intern',
    organization: 'Pratik Infotech',
    description: 'Worked with HTML, CSS, and JavaScript to build and improve web pages.',
    icon: <Code2 className="w-5 h-5 text-[#ff2e8a]" />,
  },
  {
    role: 'Cyber Security Intern',
    organization: 'CodeAlpha',
    description:
      'Participated in cybersecurity-related tasks and practical learning activities. Gained exposure to security concepts, threat analysis, and defensive security practices.',
    icon: <ShieldAlert className="w-5 h-5 text-[#ff4d97]" />,
  },
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#ff4d97] mb-2.5">
            <span className="w-2 h-[2px] bg-[#ff2e8a]" />
            <span>Practical Background</span>
            <span className="w-2 h-[2px] bg-[#ff2e8a]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-['Outfit'] font-bold text-white tracking-tight">
            Experience
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#d89bb2] max-w-lg mx-auto">
            Practical internships focused on frontend development and foundational cybersecurity practices.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Track Line */}
          <div
            className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-[2px] -translate-x-1/2 bg-gradient-to-b from-[#e6007a] via-[#ff2e8a]/40 to-transparent pointer-events-none"
            aria-hidden="true"
          />

          <div className="space-y-8 sm:space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={exp.organization}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Node Center Marker */}
                  <div
                    className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#200516] border-2 border-[#ff2e8a] flex items-center justify-center text-white shadow-[0_0_12px_rgba(255,46,138,0.5)] z-10"
                    aria-hidden="true"
                  >
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>

                  {/* Spacer for two-column desktop balance */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Card Content */}
                  <div
                    className={`pl-12 sm:pl-0 w-full sm:w-1/2 ${
                      isEven ? 'sm:pr-10' : 'sm:pl-10'
                    }`}
                  >
                    <div className="p-6 rounded-2xl bg-[#1b0512]/85 backdrop-blur-md border border-[#e6007a]/25 hover:border-[#e6007a]/55 shadow-md transition-all duration-300 group">
                      <div className="flex items-center gap-3 mb-2.5">
                        <div className="w-9 h-9 rounded-xl bg-[#2a071c] border border-[#e6007a]/30 flex items-center justify-center shrink-0">
                          {exp.icon}
                        </div>
                        <div>
                          <h3 className="text-base sm:text-lg font-['Outfit'] font-bold text-white group-hover:text-[#ff4d97] transition-colors">
                            {exp.role}
                          </h3>
                          <div className="flex items-center gap-1.5 text-xs font-medium text-[#f2c4d7]">
                            <Building2 className="w-3.5 h-3.5 text-[#ff2e8a]" />
                            <span>{exp.organization}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm text-[#d89bb2] leading-relaxed mt-3 pt-3 border-t border-[#e6007a]/15 font-normal">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
