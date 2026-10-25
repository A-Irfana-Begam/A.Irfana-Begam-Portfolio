import React from 'react';
import { Shield, Globe, Cloud, Sparkles, BookOpen, Layers } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background glow accent */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 rounded-full bg-[#9e0c52]/10 blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#ff4d97] mb-2.5">
            <span className="w-2 h-[2px] bg-[#ff2e8a]" />
            <span>Profile &amp; Focus</span>
            <span className="w-2 h-[2px] bg-[#ff2e8a]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-['Outfit'] font-bold text-white tracking-tight">
            About Me
          </h2>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Abstract Geometric Graphic (No photo) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm aspect-square rounded-3xl bg-gradient-to-br from-[#260618] via-[#1a0410] to-[#14020b] border border-[#e6007a]/25 p-7 flex flex-col justify-between shadow-[0_10px_35px_-5px_rgba(230,0,122,0.15)] group hover:border-[#e6007a]/50 transition-all duration-300">
              {/* Abstract decorative SVG vector art */}
              <div className="relative w-full h-full flex items-center justify-center">
                <svg
                  viewBox="0 0 240 240"
                  className="w-full h-full max-w-[220px]"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  {/* Outer geometric shield contour */}
                  <polygon
                    points="120,20 200,60 200,140 120,215 40,140 40,60"
                    stroke="rgba(230, 0, 122, 0.3)"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    fill="rgba(230, 0, 122, 0.03)"
                  />
                  {/* Concentric inner nodes */}
                  <circle
                    cx="120"
                    cy="115"
                    r="58"
                    stroke="rgba(255, 77, 151, 0.4)"
                    strokeWidth="1.5"
                  />
                  <circle
                    cx="120"
                    cy="115"
                    r="34"
                    stroke="#e6007a"
                    strokeWidth="2"
                    strokeDasharray="6 3"
                  />

                  {/* Connecting lines */}
                  <line x1="120" y1="20" x2="120" y2="215" stroke="rgba(230,0,122,0.2)" strokeWidth="1" />
                  <line x1="40" y1="100" x2="200" y2="100" stroke="rgba(230,0,122,0.2)" strokeWidth="1" />

                  {/* Core symbol center */}
                  <circle cx="120" cy="115" r="14" fill="#2d061c" stroke="#ff2e8a" strokeWidth="2.5" />
                  <circle cx="120" cy="115" r="4" fill="#ffffff" />

                  {/* Peripheral node points */}
                  <circle cx="120" cy="57" r="5" fill="#ff4d97" />
                  <circle cx="168" cy="144" r="5" fill="#e6007a" />
                  <circle cx="72" cy="144" r="5" fill="#e6007a" />
                </svg>

                {/* Subtle floating labels */}
                <div className="absolute top-3 left-3 text-[11px] font-medium text-[#f2c4d7]/90 tracking-wide font-['Outfit']">
                  B.E. CSE
                </div>
                <div className="absolute bottom-3 right-3 text-[11px] font-medium text-[#ff4d97] tracking-wide font-['Outfit']">
                  Learner &bull; Builder
                </div>
              </div>

              {/* Bottom bar inside card */}
              <div className="pt-3 border-t border-[#e6007a]/15 text-center text-xs text-[#d89bb2]">
                Cybersecurity &bull; Web &bull; Cloud
              </div>
            </div>
          </div>

          {/* Right Column: Statement & Core Pillars */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Exact Introduction Quote Box */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#1f0614]/85 border border-[#e6007a]/25 backdrop-blur-md shadow-sm mb-6">
              <p className="text-base sm:text-lg text-[#fff5f8] leading-relaxed font-normal">
                &ldquo;I&apos;m a B.E. Computer Science and Engineering student who is interested in exploring technology, developing creative ideas, and building practical projects. I&apos;m interested in Cybersecurity, Web Development, and Cloud Computing, and I like learning new tools and technologies through hands-on experiences. I believe every project is an opportunity to learn, improve, and turn ideas into something meaningful.&rdquo;
              </p>
            </div>

            {/* Interest Triad (Clean, unboxed cards without pill cliches) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              <div className="p-4 rounded-xl bg-[#1b0512]/60 border border-[#e6007a]/20 hover:border-[#e6007a]/45 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-[#2e091e] flex items-center justify-center text-[#ff4d97] mb-2.5">
                  <Shield className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">Cybersecurity</h3>
                <p className="text-xs text-[#d89bb2] leading-normal">
                  Hands-on learning in blue team practices, network defense, and CTF challenges.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#1b0512]/60 border border-[#e6007a]/20 hover:border-[#e6007a]/45 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-[#2e091e] flex items-center justify-center text-[#ff4d97] mb-2.5">
                  <Globe className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">Web Development</h3>
                <p className="text-xs text-[#d89bb2] leading-normal">
                  Creating responsive, user-friendly, and secure web application interfaces.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#1b0512]/60 border border-[#e6007a]/20 hover:border-[#e6007a]/45 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-[#2e091e] flex items-center justify-center text-[#ff4d97] mb-2.5">
                  <Cloud className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">Cloud Computing</h3>
                <p className="text-xs text-[#d89bb2] leading-normal">
                  Exploring cloud infrastructure concepts and cloud platform administration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
