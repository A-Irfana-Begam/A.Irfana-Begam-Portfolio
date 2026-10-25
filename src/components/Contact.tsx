import React, { useState } from 'react';
import { Mail, Linkedin, Github, ExternalLink, Copy, Check, Send } from 'lucide-react';

interface ContactLink {
  label: string;
  value: string;
  href: string;
  isMailto?: boolean;
  icon: React.ReactNode;
}

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);
  const email = 'irfanabegam.tawakkul7@gmail.com';

  const handleCopyEmail = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    }
  };

  const contactLinks: ContactLink[] = [
    {
      label: 'Email',
      value: email,
      href: `mailto:${email}`,
      isMailto: true,
      icon: <Mail className="w-5 h-5 text-[#ff2e8a]" />,
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/a-irfana-begam',
      href: 'https://www.linkedin.com/in/a-irfana-begam/',
      icon: <Linkedin className="w-5 h-5 text-[#ff4d97]" />,
    },
    {
      label: 'GitHub',
      value: 'github.com/A-Irfana-Begam',
      href: 'https://github.com/A-Irfana-Begam',
      icon: <Github className="w-5 h-5 text-[#ff4d97]" />,
    },
    {
      label: 'Credly',
      value: 'credly.com/users/a-irfana-begam',
      href: 'https://www.credly.com/users/a-irfana-begam.1f0f899f',
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#ff2e8a]" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 4.14 2.53 7.69 6.13 9.17l-.87-3.79c-.06-.27.04-.55.26-.71l3.05-2.29V5.5c0-.28.22-.5.5-.5s.5.22.5.5v8.88l3.05 2.29c.22.16.32.44.26.71l-.87 3.79C19.47 19.69 22 14.14 22 12c0-5.52-4.48-10-10-10z" />
        </svg>
      ),
    },
    {
      label: 'Discord',
      value: 'Discord Profile',
      href: 'https://discord.com/users/1482385179728416839',
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#ff4d97]" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[30rem] h-[30rem] rounded-full bg-[#e6007a]/12 blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#ff4d97] mb-2.5">
            <span className="w-2 h-[2px] bg-[#ff2e8a]" />
            <span>Get In Touch</span>
            <span className="w-2 h-[2px] bg-[#ff2e8a]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-['Outfit'] font-bold text-white tracking-tight">
            Let&apos;s Connect
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#d89bb2] max-w-xl mx-auto leading-relaxed">
            I&apos;m always interested in learning, building projects, and connecting with people in technology.
          </p>
        </div>

        {/* Featured Email Action Card */}
        <div className="mb-8 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#29081e] via-[#1c0514] to-[#12020b] border border-[#e6007a]/35 shadow-[0_12px_40px_rgba(230,0,122,0.18)] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-14 h-14 rounded-2xl bg-[#370a26] border border-[#ff2e8a]/40 flex items-center justify-center text-[#ff2e8a] shrink-0">
              <Mail className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-[#ff4d97] font-semibold">
                Direct Email
              </span>
              <div className="text-base sm:text-lg font-medium text-white font-mono break-all mt-0.5">
                {email}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={`mailto:${email}`}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#e6007a] to-[#ff2e8a] text-white text-xs sm:text-sm font-semibold hover:brightness-110 active:scale-98 transition-all shadow-[0_2px_15px_rgba(230,0,122,0.4)] whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff4d97]"
            >
              <span>Send Email</span>
              <Send className="w-3.5 h-3.5" />
            </a>

            <button
              type="button"
              onClick={handleCopyEmail}
              aria-label="Copy email address"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-[#26071b] hover:bg-[#380b27] border border-[#e6007a]/30 text-[#f2c4d7] hover:text-white text-xs sm:text-sm font-semibold transition-all active:scale-98 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e6007a]"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-300">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#ff4d97]" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Social / Professional Profiles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.isMailto ? undefined : '_blank'}
              rel={link.isMailto ? undefined : 'noopener noreferrer'}
              className="group p-5 rounded-2xl bg-[#1b0512]/80 hover:bg-[#28071c] border border-[#e6007a]/20 hover:border-[#e6007a]/60 shadow-sm transition-all duration-200 flex items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff4d97]"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-[#240618] border border-[#e6007a]/25 group-hover:border-[#ff2e8a]/50 flex items-center justify-center shrink-0 transition-colors">
                  {link.icon}
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-[#d89bb2] font-medium">{link.label}</div>
                  <div className="text-sm font-semibold text-white group-hover:text-[#ff4d97] truncate transition-colors">
                    {link.value}
                  </div>
                </div>
              </div>

              <div className="text-[#a8637b] group-hover:text-[#ff2e8a] shrink-0 ml-3 transition-colors">
                <ExternalLink className="w-4 h-4" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
