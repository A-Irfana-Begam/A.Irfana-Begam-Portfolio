import React, { useState, useEffect } from 'react';
import { Menu, X, Shield } from 'lucide-react';

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'CTF Events', href: '#ctf-events' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionElements = navItems.map(item => ({
        id: item.href.substring(1),
        element: document.getElementById(item.href.substring(1)),
      }));

      const scrollPosition = window.scrollY + 140;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const item = sectionElements[i];
        if (item.element) {
          const top = item.element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(targetId);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-3.5 transition-all duration-300">
      <div
        className={`max-w-6xl mx-auto rounded-2xl transition-all duration-300 ${
          isScrolled
            ? 'bg-[#18040f]/85 backdrop-blur-xl border border-[#e6007a]/25 shadow-[0_8px_30px_rgb(230,0,122,0.12)]'
            : 'bg-[#1a0512]/60 backdrop-blur-md border border-[#e6007a]/15 shadow-sm'
        } px-4 sm:px-6 py-2.5 flex items-center justify-between gap-4`}
      >
        {/* Brand Zone */}
        <a
          href="#home"
          onClick={(e) => scrollTo(e, '#home')}
          className="flex items-center gap-2.5 text-white font-semibold tracking-tight text-base sm:text-lg whitespace-nowrap shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e6007a] rounded-lg"
        >
          <div className="w-8 h-8 rounded-lg bg-[#2b081c] border border-[#e6007a]/40 flex items-center justify-center text-[#ff4d97] group-hover:border-[#e6007a] group-hover:text-white transition-all shadow-sm">
            <Shield className="w-4 h-4 text-[#ff2e8a]" />
          </div>
          <span className="font-['Outfit'] font-bold tracking-tight text-white group-hover:text-[#ff4d97] transition-colors">
            A. Irfana Begam
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-1 lg:gap-2 text-xs lg:text-sm font-medium text-[#f2c4d7]"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollTo(e, item.href)}
                aria-current={isActive ? 'page' : undefined}
                className={`relative px-3 py-1.5 rounded-lg whitespace-nowrap transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e6007a] ${
                  isActive
                    ? 'text-white font-semibold bg-[#320a21]/90 shadow-[inset_0_1px_1px_rgba(255,77,151,0.25)] border border-[#e6007a]/30'
                    : 'text-[#d89bb2] hover:text-white hover:bg-[#250719]/60'
                }`}
              >
                {item.name}
                {isActive && (
                  <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-3.5 h-[2px] bg-[#ff2e8a] rounded-full shadow-[0_0_8px_#ff2e8a]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <a
            href="#contact"
            onClick={(e) => scrollTo(e, '#contact')}
            className="px-4 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-[#e6007a] to-[#ff2e8a] rounded-lg hover:brightness-110 active:scale-95 transition-all shadow-[0_2px_12px_rgba(230,0,122,0.35)] whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff4d97]"
          >
            Get In Touch
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          aria-expanded={isMobileMenuOpen}
          className="md:hidden p-2 rounded-lg text-[#f2c4d7] hover:text-white hover:bg-[#29071c] border border-[#e6007a]/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e6007a]"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-6xl mx-auto bg-[#1b0513]/95 backdrop-blur-xl border border-[#e6007a]/30 rounded-2xl p-4 shadow-[0_12px_32px_rgba(0,0,0,0.6)] animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-1.5">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollTo(e, item.href)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'text-white bg-[#360a23] border border-[#e6007a]/40 shadow-sm'
                      : 'text-[#f2c4d7] hover:text-white hover:bg-[#29071c]'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
            <div className="pt-2 mt-1 border-t border-[#e6007a]/20">
              <a
                href="#contact"
                onClick={(e) => scrollTo(e, '#contact')}
                className="block text-center w-full py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-[#e6007a] to-[#ff2e8a] rounded-xl shadow-md hover:brightness-110 active:scale-98 transition-all"
              >
                Let&apos;s Connect
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
