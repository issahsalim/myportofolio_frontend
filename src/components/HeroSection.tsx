'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { ArrowRight, Code2, Sparkles, MapPin, Download } from 'lucide-react';
import { PersonalInfo } from '@/types/portfolio';
import { getMediaUrl } from '@/lib/api';

interface HeroSectionProps {
  info: PersonalInfo;
}

export default function HeroSection({ info }: HeroSectionProps) {
  const roles = [
    'Full-Stack Developer',
    'AI & Machine Learning Engineer',
    'Django & Next.js Architect',
    'Mobile App Developer (Expo React Native)',
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [roles.length]);

  const profileImgUrl = getMediaUrl(info.profile_image, '/boresa.jpeg');
  const cvFileUrl = getMediaUrl(info.resume, '/IssahSalim_CV.pdf');
  const [imgSrc, setImgSrc] = useState<string>(profileImgUrl);

  useEffect(() => {
    setImgSrc(profileImgUrl);
  }, [profileImgUrl]);

  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden flex items-center min-h-[90vh]">
      {/* Radial Glow Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/20 via-indigo-500/15 to-purple-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Status & Location Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs text-slate-300 backdrop-blur-md shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-mono text-emerald-400 font-medium">Available for Hire & Projects</span>
              <span className="text-slate-600">|</span>
              <span className="flex items-center gap-1 text-slate-400">
                <MapPin className="w-3 h-3 text-cyan-400" /> {info.location || 'Bono-East, Yeji, Ghana'}
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
                Crafting Intelligent <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400">
                  Web & AI Solutions
                </span>
              </h1>

              {/* Dynamic Role Switcher */}
              <div className="h-10 flex items-center justify-center lg:justify-start">
                <p className="text-xl sm:text-2xl font-mono text-cyan-400 font-semibold transition-all duration-500 transform">
                  &lt;{roles[currentRoleIndex]} /&gt;
                </p>
              </div>
            </div>

            {/* Bio */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {info.bio}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-95 transition-all text-sm"
              >
                <span>View Shipped Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-200 bg-slate-900/90 border border-slate-800 hover:border-cyan-500/60 hover:text-white transition-all text-sm"
              >
                <span>Get In Touch</span>
              </a>

              {cvFileUrl && (
                <a
                  href={cvFileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3.5 rounded-xl font-mono text-xs font-semibold text-cyan-400 bg-slate-900/60 border border-cyan-500/30 hover:bg-cyan-950/40 transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>CV PDF</span>
                </a>
              )}
            </div>

            {/* Live Metrics Grid */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-white font-mono">5+</p>
                <p className="text-xs text-slate-400">Years Experience</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-300">
                  10+
                </p>
                <p className="text-xs text-slate-400">Completed Projects</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-white font-mono">88%+</p>
                <p className="text-xs text-slate-400">AI Model Accuracy</p>
              </div>
            </div>
          </div>

          {/* Right Profile Frame */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative group w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Outer Glowing Rings */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 opacity-50 blur-xl group-hover:opacity-80 transition duration-1000 group-hover:duration-200 animate-pulse" />
              
              {/* Profile Image Container */}
              <div className="relative w-full h-full rounded-3xl bg-slate-900 border-2 border-cyan-500/30 overflow-hidden shadow-2xl">
                <Image
                  src={imgSrc}
                  alt={info.name}
                  fill
                  priority
                  unoptimized
                  onError={() => setImgSrc('/boresa.jpeg')}
                  className="object-cover object-center group-hover:scale-105 transition duration-500"
                />

                {/* Floating Tech Badges */}
                <div className="absolute bottom-4 left-4 right-4 p-3 bg-slate-950/80 backdrop-blur-md border border-slate-800 rounded-2xl flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-cyan-400" />
                    <span className="text-white font-semibold">Django & Next.js</span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    Full-Stack
                  </span>
                </div>
              </div>

              {/* Floating AI Badge */}
              <div className="absolute -top-4 -right-4 bg-slate-900/90 border border-indigo-500/40 p-2.5 rounded-2xl shadow-xl backdrop-blur-md flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-indigo-400 animate-spin" style={{ animationDuration: '6s' }} />
                <div className="text-[11px]">
                  <p className="font-bold text-white">Vision Transformer</p>
                  <p className="text-indigo-300 font-mono">Deep Learning</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
