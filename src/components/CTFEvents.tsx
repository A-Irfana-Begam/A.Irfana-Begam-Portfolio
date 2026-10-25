import React, { useState } from 'react';
import { Flag, Trophy, Shield, Info, Sparkles } from 'lucide-react';

interface CTFEvent {
  id: string;
  shortName: string;
  fullName: string;
  institution: string;
  tag: string;
  renderMark: () => React.ReactNode;
}

const ctfEvents: CTFEvent[] = [
  {
    id: 'encipherx',
    shortName: 'EncipherX 4.0',
    fullName: 'EncipherX 4.0',
    institution: 'St. Vincent Pallotti College of Engineering and Technology',
    tag: 'Cryptographic CTF',
    renderMark: () => (
      <svg viewBox="0 0 48 48" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="20" stroke="#e6007a" strokeWidth="2" strokeDasharray="4 2" />
        <circle cx="24" cy="24" r="14" stroke="#ff4d97" strokeWidth="1.5" />
        <path d="M18 18L30 30M30 18L18 30" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="24" cy="24" r="3" fill="#ff2e8a" />
      </svg>
    ),
  },
  {
    id: 'crest',
    shortName: 'CREST CTF 2026',
    fullName: 'CREST CTF 2026',
    institution: 'Pimpri Chinchwad University',
    tag: 'Security Contest',
    renderMark: () => (
      <svg viewBox="0 0 48 48" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M24 6L38 12V24C38 32.5 32 39.5 24 42C16 39.5 10 32.5 10 24V12L24 6Z"
          fill="#270719"
          stroke="#ff2e8a"
          strokeWidth="2"
        />
        <path d="M19 20L24 16L29 20L27 27H21L19 20Z" fill="#ff4d97" />
        <circle cx="24" cy="24" r="2" fill="#ffffff" />
      </svg>
    ),
  },
  {
    id: 'signal',
    shortName: 'Signal Processing CTF',
    fullName: 'Signal Processing Based Virtual CTF',
    institution: 'BMS Institute of Technology and Management',
    tag: 'Virtual Challenge',
    renderMark: () => (
      <svg viewBox="0 0 48 48" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="8" width="36" height="32" rx="8" fill="#200514" stroke="#e6007a" strokeWidth="1.8" />
        <path
          d="M10 24C14 24 16 14 20 14C24 14 26 34 30 34C34 34 36 24 38 24"
          stroke="#ff4d97"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <circle cx="20" cy="14" r="2.5" fill="#ffffff" />
        <circle cx="30" cy="34" r="2.5" fill="#ff2e8a" />
      </svg>
    ),
  },
  {
    id: 'crackin',
    shortName: 'CRACK-IN 2.0 CTF',
    fullName: 'CRACK-IN 2.0 CTF',
    institution: 'Gyan Ganga Institute of Technology and Sciences',
    tag: 'Defensive & Offensive',
    renderMark: () => (
      <svg viewBox="0 0 48 48" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="24,6 40,16 40,32 24,42 8,32 8,16" stroke="#ff2e8a" strokeWidth="2" fill="#25071a" />
        <path d="M18 24L24 18L30 24L24 30Z" stroke="#ff4d97" strokeWidth="2" />
        <circle cx="24" cy="24" r="2.5" fill="#ffffff" />
      </svg>
    ),
  },
  {
    id: 'cybergeek',
    shortName: 'CyberGeek CTF',
    fullName: 'CyberGeek CTF',
    institution: 'GeekHaven, IIIT Allahabad',
    tag: 'Collegiate CTF',
    renderMark: () => (
      <svg viewBox="0 0 48 48" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="18" fill="#240618" stroke="#e6007a" strokeWidth="2" />
        <path d="M15 20L21 24L15 28" stroke="#ff4d97" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="24" y1="28" x2="33" y2="28" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    ),
  },
];

export const CTFEvents: React.FC = () => {
  const [selectedEventId, setSelectedEventId] = useState<string>(ctfEvents[0].id);

  const activeEvent = ctfEvents.find((e) => e.id === selectedEventId) || ctfEvents[0];

  return (
    <section id="ctf-events" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#ff4d97] mb-2.5">
            <span className="w-2 h-[2px] bg-[#ff2e8a]" />
            <span>Cybersecurity Engagement</span>
            <span className="w-2 h-[2px] bg-[#ff2e8a]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-['Outfit'] font-bold text-white tracking-tight">
            CTF Events
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#d89bb2] max-w-xl mx-auto">
            Hands-on Capture The Flag competitions and cybersecurity events.
          </p>
        </div>

        {/* Compact Responsive Marks Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 mb-8">
          {ctfEvents.map((event) => {
            const isSelected = selectedEventId === event.id;
            return (
              <button
                key={event.id}
                type="button"
                onClick={() => setSelectedEventId(event.id)}
                className={`relative flex flex-col items-center text-center p-4 rounded-2xl transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff4d97] ${
                  isSelected
                    ? 'bg-[#310a22] border-2 border-[#ff2e8a] shadow-[0_6px_20px_rgba(230,0,122,0.3)] scale-[1.02]'
                    : 'bg-[#1b0512]/80 hover:bg-[#27081b] border border-[#e6007a]/25 hover:border-[#e6007a]/60 shadow-sm'
                }`}
                aria-pressed={isSelected}
              >
                {/* Decorative Visual Mark */}
                <div className="w-14 h-14 rounded-xl bg-[#200515] border border-[#e6007a]/30 flex items-center justify-center mb-3">
                  {event.renderMark()}
                </div>

                {/* Short Event Name Prominently */}
                <span className="text-xs sm:text-sm font-['Outfit'] font-bold text-white tracking-tight line-clamp-2">
                  {event.shortName}
                </span>

                {/* Micro Category indicator */}
                <span className="mt-1 text-[10px] text-[#ff4d97] font-medium tracking-wide">
                  {event.tag}
                </span>

                {/* Active Indicator Pip */}
                {isSelected && (
                  <span className="absolute -bottom-1 w-2.5 h-1 bg-[#ff2e8a] rounded-full shadow-[0_0_8px_#ff2e8a]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Event Focused Card (Reveals Institution cleanly without clutter) */}
        <div className="p-6 sm:p-7 rounded-2xl bg-[#210617]/90 border border-[#e6007a]/35 shadow-[0_8px_30px_rgb(0,0,0,0.4)] backdrop-blur-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 transition-all">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#2e0920] border border-[#ff2e8a]/40 flex items-center justify-center shrink-0">
              {activeEvent.renderMark()}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-semibold text-[#ff4d97] tracking-wider uppercase">
                  Selected Event Details
                </span>
                <span className="text-[#6d1b43]">&bull;</span>
                <span className="text-xs text-[#d89bb2]">{activeEvent.tag}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-['Outfit'] font-bold text-white">
                {activeEvent.fullName}
              </h3>
              <p className="text-xs sm:text-sm text-[#f2c4d7] mt-1 font-medium">
                Host / Institution: <span className="text-white font-semibold">{activeEvent.institution}</span>
              </p>
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-2 text-xs text-[#d89bb2] bg-[#16030e]/60 px-3.5 py-2 rounded-xl border border-[#e6007a]/20">
            <Flag className="w-3.5 h-3.5 text-[#ff2e8a]" />
            <span>CTF Challenge Event</span>
          </div>
        </div>

        {/* Note on decorative identifiers per guidelines */}
        <div className="mt-4 text-center">
          <span className="text-[11px] text-[#a8637b] inline-flex items-center gap-1.5">
            <Info className="w-3 h-3 text-[#ff4d97]" />
            <span>Abstract icons displayed above are custom decorative event identifiers.</span>
          </span>
        </div>
      </div>
    </section>
  );
};
