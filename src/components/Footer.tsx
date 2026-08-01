'use client';

import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PersonalInfo } from '@/types/portfolio';
import { GithubIcon, LinkedinIcon, YoutubeIcon, WhatsappIcon } from './SocialIcons';

interface FooterProps {
  info: PersonalInfo;
}

export default function Footer({ info }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const cleanPhone = (info.phone || '0596878044').replace(/\D/g, '');
  const formattedPhone = cleanPhone.startsWith('0') ? `233${cleanPhone.slice(1)}` : cleanPhone;
  const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodeURIComponent("Hi Issah, I am visiting your portfolio website and would like to chat with you!")}`;

  return (
    <footer className="relative z-10 border-t border-slate-800/80 bg-slate-950 py-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="text-base font-extrabold text-white font-mono tracking-tight">
              ISSAH ABDULSALIM BORESA
            </span>
            <p className="text-xs text-slate-300">
              Full-Stack Developer & AI Engineer &bull; Bono-East, Yeji, Ghana
            </p>
            <p className="text-[11px] text-slate-300 mt-1">
              &copy; {new Date().getFullYear()} All rights reserved. Powered by Next.js & Django REST.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-all"
              aria-label="Chat on WhatsApp"
            >
              <WhatsappIcon className="w-4 h-4" />
            </a>

            {info.github && (
              <a
                href={info.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            )}

            {info.linkedin && (
              <a
                href={info.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            )}

            {info.youtube && (
              <a
                href={info.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-rose-400 hover:border-rose-500/50 transition-all"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
            )}

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md hover:scale-110 active:scale-95 transition-all"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
