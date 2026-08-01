'use client';

import React from 'react';
import { WhatsappIcon } from './SocialIcons';

interface FloatingWhatsappProps {
  phone?: string;
  prefixText?: string;
}

export default function FloatingWhatsapp({
  phone = '0596878044',
  prefixText = "Hi Issah, I'm visiting your portfolio website and would like to discuss a project with you!",
}: FloatingWhatsappProps) {
  const cleanPhone = phone.replace(/\D/g, '');
  const formattedPhone = cleanPhone.startsWith('0') ? `233${cleanPhone.slice(1)}` : cleanPhone;
  const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(prefixText)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center group">
      {/* Tooltip badge */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mr-3 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-slate-900/90 border border-emerald-500/40 text-emerald-400 text-xs font-semibold backdrop-blur-md shadow-xl transition-all duration-300 opacity-90 group-hover:opacity-100 group-hover:scale-105"
      >
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        <span>Chat on WhatsApp</span>
      </a>

      {/* Main Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct Chat on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 text-white shadow-2xl shadow-emerald-500/40 hover:bg-emerald-400 hover:scale-110 active:scale-95 transition-all duration-300 group"
      >
        {/* Glow Ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/50 blur-md group-hover:opacity-100 opacity-70 animate-pulse pointer-events-none" />
        <WhatsappIcon className="w-7 h-7 relative z-10" />
      </a>
    </div>
  );
}
