import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Sparkles, Send, ShieldCheck, Lock, Cloud, Code } from 'lucide-react';

export const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0.5, y: 0.5 });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    mediaQuery.addEventListener('change', handleMediaChange);

    return () => mediaQuery.removeEventListener('change', handleMediaChange);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    let time = 0;
    let targetX = 0.5;
    let targetY = 0.5;
    let currentX = 0.5;
    let currentY = 0.5;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX / window.innerWidth;
      targetY = e.clientY / window.innerHeight;
      setMousePos({ x: targetX, y: targetY });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Draw flowing abstract magenta ribbons
    const render = () => {
      time += 0.008;
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Ribbon waves configuration
      const ribbons = [
        {
          amplitude: 45,
          frequency: 0.0018,
          speed: 1.2,
          yOffset: height * 0.38,
          strokeColor: 'rgba(230, 0, 122, 0.35)',
          fillColor: 'rgba(230, 0, 122, 0.04)',
          widthFactor: 2.2,
        },
        {
          amplitude: 60,
          frequency: 0.0014,
          speed: 0.9,
          yOffset: height * 0.52,
          strokeColor: 'rgba(255, 64, 146, 0.4)',
          fillColor: 'rgba(255, 64, 146, 0.035)',
          widthFactor: 2.6,
        },
        {
          amplitude: 35,
          frequency: 0.0022,
          speed: 1.5,
          yOffset: height * 0.65,
          strokeColor: 'rgba(217, 22, 128, 0.28)',
          fillColor: 'rgba(217, 22, 128, 0.03)',
          widthFactor: 1.8,
        },
      ];

      ribbons.forEach((ribbon, idx) => {
        ctx.beginPath();
        const mouseShiftY = (currentY - 0.5) * 60 * (idx + 1);
        const mouseShiftX = (currentX - 0.5) * 40 * (idx + 1);

        const startY = ribbon.yOffset + mouseShiftY;
        ctx.moveTo(0, startY);

        for (let x = 0; x <= width; x += 12) {
          const wave1 = Math.sin(x * ribbon.frequency + time * ribbon.speed + mouseShiftX * 0.01) * ribbon.amplitude;
          const wave2 = Math.cos(x * ribbon.frequency * 0.5 + time * 0.7) * (ribbon.amplitude * 0.4);
          const y = ribbon.yOffset + wave1 + wave2 + mouseShiftY;
          ctx.lineTo(x, y);
        }

        ctx.strokeStyle = ribbon.strokeColor;
        ctx.lineWidth = ribbon.widthFactor;
        ctx.stroke();

        // Optional subtle fill below ribbon
        ctx.lineTo(width, height);
        ctx.lineTo(0, height);
        ctx.closePath();
        ctx.fillStyle = ribbon.fillColor;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [prefersReducedMotion]);

  const scrollTo = (href: string) => {
    const target = document.getElementById(href.substring(1));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background canvas for desktop flowing magenta light ribbons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {!prefersReducedMotion ? (
          <canvas
            ref={canvasRef}
            className="w-full h-full opacity-90 transition-opacity duration-1000"
            aria-hidden="true"
          />
        ) : (
          /* Static SVG fallback for reduced motion / mobile */
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_50%_40%,rgba(230,0,122,0.22),transparent_70%)]" />
        )}

        {/* Ambient radial lighting glows in deep wine & magenta */}
        <div
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#e6007a]/15 blur-[120px] pointer-events-none"
          style={{
            transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)`,
            transition: 'transform 0.4s ease-out',
          }}
        />
        <div
          className="absolute -bottom-24 -right-24 w-[32rem] h-[32rem] rounded-full bg-[#9e0c52]/20 blur-[140px] pointer-events-none"
          style={{
            transform: `translate(${-mousePos.x * 25}px, ${-mousePos.y * 25}px)`,
            transition: 'transform 0.4s ease-out',
          }}
        />

        {/* Subtle geometric grid backdrop */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(circle, #ff2e8a 1px, transparent 1px)`,
            backgroundSize: '36px 36px',
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Discipline / Focus Tag (Clean unboxed metadata) */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#270617]/80 border border-[#e6007a]/30 text-xs text-[#f2c4d7] mb-6 backdrop-blur-sm shadow-sm animate-in fade-in slide-in-from-bottom-2 duration-500">
          <Sparkles className="w-3.5 h-3.5 text-[#ff2e8a]" />
          <span className="font-medium tracking-wide">Computer Science &amp; Engineering Portfolio</span>
        </div>

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-['Outfit'] font-extrabold tracking-tight text-white mb-5 animate-in fade-in slide-in-from-bottom-3 duration-700">
          A. Irfana Begam
        </h1>

        {/* Headline exact requirement */}
        <div className="max-w-2xl mx-auto mb-6">
          <p className="text-lg sm:text-xl md:text-2xl font-['Outfit'] font-medium text-gradient-magenta tracking-normal leading-snug animate-in fade-in slide-in-from-bottom-4 duration-800">
            B.E. CSE Student | Aspiring Cybersecurity Analyst | Cloud Security | Web Development
          </p>
        </div>

        {/* Supporting statement exact requirement */}
        <p className="text-base sm:text-lg text-[#d89bb2] max-w-xl mx-auto mb-10 leading-relaxed font-normal animate-in fade-in slide-in-from-bottom-5 duration-900">
          &ldquo;Exploring cybersecurity, secure web development, and cloud computing through hands-on learning and practical projects.&rdquo;
        </p>

        {/* Two Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto animate-in fade-in slide-in-from-bottom-6 duration-1000">
          <button
            type="button"
            onClick={() => scrollTo('#projects')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[#e6007a] via-[#f01e85] to-[#ff2e8a] rounded-xl shadow-[0_4px_20px_rgba(230,0,122,0.35)] hover:shadow-[0_6px_25px_rgba(230,0,122,0.5)] hover:brightness-105 active:scale-98 transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff4d97]"
          >
            <span>Explore My Projects</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={() => scrollTo('#contact')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 text-sm font-semibold text-[#fff5f8] bg-[#240618]/80 hover:bg-[#340922] border border-[#e6007a]/35 hover:border-[#e6007a]/70 rounded-xl transition-all cursor-pointer shadow-sm active:scale-98 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e6007a]"
          >
            <span>Let&apos;s Connect</span>
            <Send className="w-3.5 h-3.5 text-[#ff4d97]" />
          </button>
        </div>

        {/* Domain visual signature ribbon: Cybersecurity, Cloud, Web Dev */}
        <div className="mt-14 pt-8 border-t border-[#e6007a]/15 w-full max-w-2xl flex items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-[#d89bb2]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#ff2e8a]" />
            <span>Cybersecurity</span>
          </div>
          <span className="text-[#6d1b43]" aria-hidden="true">&bull;</span>
          <div className="flex items-center gap-2">
            <Code className="w-4 h-4 text-[#ff2e8a]" />
            <span>Web Development</span>
          </div>
          <span className="text-[#6d1b43]" aria-hidden="true">&bull;</span>
          <div className="flex items-center gap-2">
            <Cloud className="w-4 h-4 text-[#ff2e8a]" />
            <span>Cloud Computing</span>
          </div>
        </div>
      </div>
    </section>
  );
};
