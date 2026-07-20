'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, FileDown } from 'lucide-react';
import { getMediaUrl } from '@/lib/api';

interface NavbarProps {
  resumeUrl?: string;
}

export default function Navbar({ resumeUrl = '/IssahSalim_CV.pdf' }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const cvLink = getMediaUrl(resumeUrl, '/IssahSalim_CV.pdf');

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/80 backdrop-blur-md border-b border-cyan-500/20 py-3 shadow-lg shadow-cyan-950/30'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo with Profile Photo Avatar */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl overflow-hidden border-2 border-cyan-500/40 shadow-lg shadow-cyan-500/20 group-hover:border-cyan-400 group-hover:scale-105 transition-all relative">
            <Image
              src="/boresa.jpeg"
              alt="Issah Abdulsalim Boresa"
              fill
              unoptimized
              className="object-cover object-center"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-extrabold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
              ISSAH BORESA
            </span>
            <span className="text-[10px] font-mono text-cyan-400 tracking-wider uppercase">
              Full-Stack & AI
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 rounded-full px-4 py-1.5 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-cyan-400 rounded-full transition-all hover:bg-slate-800/50"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={cvLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-95 transition-all"
          >
            <FileDown className="w-4 h-4" />
            <span>CV Resume</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 border-b border-slate-800 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-slate-200 hover:text-cyan-400 rounded-lg hover:bg-slate-900"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <a
              href={cvLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-xl shadow-md"
            >
              <FileDown className="w-4 h-4" />
              <span>Download CV Resume</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
