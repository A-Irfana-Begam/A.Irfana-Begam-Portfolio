import React, { useState } from 'react';
import { Code, Terminal, Shield, CheckCircle2 } from 'lucide-react';

interface SkillGroup {
  category: string;
  icon: React.ReactNode;
  description: string;
  skills: string[];
}

const skillGroups: SkillGroup[] = [
  {
    category: 'Web Development',
    icon: <Code className="w-5 h-5 text-[#ff2e8a]" />,
    description: 'Foundations of web application architecture, styling, and client-side interactions.',
    skills: ['Web Development'],
  },
  {
    category: 'Tools & Platforms',
    icon: <Terminal className="w-5 h-5 text-[#ff4d97]" />,
    description: 'Development environments, version control systems, and cloud management consoles.',
    skills: ['Git', 'GitHub', 'VS Code', 'Google Cloud Console'],
  },
  {
    category: 'Cybersecurity',
    icon: <Shield className="w-5 h-5 text-[#e6007a]" />,
    description: 'Defensive security principles, network protocols, and investigative challenge skills.',
    skills: ['Blue Team Fundamentals', 'Networking Fundamentals', 'CTF Basics'],
  },
];

export const Skills: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#ff4d97] mb-2.5">
            <span className="w-2 h-[2px] bg-[#ff2e8a]" />
            <span>Technical Capabilities</span>
            <span className="w-2 h-[2px] bg-[#ff2e8a]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-['Outfit'] font-bold text-white tracking-tight">
            Skills &amp; Knowledge Areas
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#d89bb2] max-w-xl mx-auto">
            Focused technical domains cultivated through practical projects and active learning.
          </p>
        </div>

        {/* 3 Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {skillGroups.map((group, index) => {
            const isHovered = activeCard === index;
            return (
              <div
                key={group.category}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
                className={`relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#1b0512]/80 backdrop-blur-md border transition-all duration-300 ${
                  isHovered
                    ? 'border-[#e6007a]/60 shadow-[0_12px_30px_-8px_rgba(230,0,122,0.3)] -translate-y-1'
                    : 'border-[#e6007a]/20 shadow-sm'
                }`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#2b071c] border border-[#e6007a]/30 flex items-center justify-center shrink-0">
                      {group.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-['Outfit'] font-semibold text-white tracking-tight">
                        {group.category}
                      </h3>
                      <span className="text-[11px] text-[#ff4d97] font-medium">
                        {group.skills.length} {group.skills.length === 1 ? 'Area' : 'Areas'}
                      </span>
                    </div>
                  </div>

                  {/* Category Description */}
                  <p className="text-xs text-[#d89bb2] mb-6 leading-relaxed">
                    {group.description}
                  </p>
                </div>

                {/* Skills Badges / Interactive List */}
                <div className="space-y-2.5 pt-4 border-t border-[#e6007a]/15">
                  {group.skills.map((skill) => (
                    <div
                      key={skill}
                      className="group/item flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-[#240618]/70 hover:bg-[#320822] border border-[#e6007a]/20 hover:border-[#ff2e8a]/50 transition-all duration-200"
                    >
                      <div className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#ff2e8a] shrink-0" />
                        <span className="text-xs sm:text-sm font-medium text-white group-hover/item:text-[#fff5f8]">
                          {skill}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
