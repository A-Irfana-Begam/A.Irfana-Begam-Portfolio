import React from 'react';
import { ArrowUp, Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-[#e6007a]/20 bg-[#12020a] py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand identity */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#270617] border border-[#e6007a]/30 flex items-center justify-center text-[#ff4d97]">
            <Shield className="w-4 h-4" />
          </div>
          <div>
            <span className="font-['Outfit'] font-bold text-white text-base tracking-tight">
              A. Irfana Begam
            </span>
            <p className="text-xs text-[#a8637b]">
              B.E. Computer Science and Engineering
            </p>
          </div>
        </div>

        {/* Quiet copyright */}
        <div className="text-xs text-[#d89bb2] text-center md:text-left">
          &copy; {new Date().getFullYear()} A. Irfana Begam. Built with focused engineering &amp; design.
        </div>

        {/* Back to top button */}
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#200514] hover:bg-[#2f071e] border border-[#e6007a]/25 hover:border-[#e6007a]/50 text-xs text-[#f2c4d7] hover:text-white transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff4d97]"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3.5 h-3.5 text-[#ff4d97]" />
        </button>
      </div>
    </footer>
  );
};
