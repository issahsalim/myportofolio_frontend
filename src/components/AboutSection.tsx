'use client';

import React from 'react';
import { GraduationCap, Briefcase, Cpu, Code2, Globe, Mail, Phone, MapPin } from 'lucide-react';
import { PersonalInfo } from '@/types/portfolio';
import { GithubIcon, LinkedinIcon, YoutubeIcon } from './SocialIcons';

interface AboutSectionProps {
  info: PersonalInfo;
}

export default function AboutSection({ info }: AboutSectionProps) {
  const highlights = [
    {
      icon: Code2,
      title: "Full-Stack Web Architecture",
      desc: "5+ years crafting end-to-end web apps with Django, Django REST Framework, React JS, Next.js, PostgreSQL & MySQL."
    },
    {
      icon: Cpu,
      title: "AI & Medical Deep Learning",
      desc: "Built clinical-grade glaucoma detection tools using Vision Transformers (ViT-B/16) and ResNet50 CNN models with 81% accuracy on 17K images."
    },
    {
      icon: Globe,
      title: "Cross-Platform Mobile Apps",
      desc: "Engineered mobile solutions using Expo React Native, integrating GPS navigation, AI chat assistants, camera vision, and offline caching."
    },
    {
      icon: Briefcase,
      title: "AI-Assisted Efficiency",
      desc: "Leverages AI tools (Copilot, CLI assistants, automated debugging) to accelerate sprint velocity without sacrificing code security or scalability."
    }
  ];

  return (
    <section id="about" className="py-24 relative z-10 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium mb-3">
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Architecting Code with <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-300">Precision & Intelligence</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base">
            Passionate about transforming complex requirements into elegant, high-performing web and mobile platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Story & Education */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-cyan-400" />
                <span>Professional Background</span>
              </h3>
              <p className="text-slate-300 leading-relaxed space-y-4">
                I am a Full-Stack Developer and BSc. Information Technology candidate with over 5 years of experience. I bridge the gap between back-end infrastructure and front-end user interfaces, ensuring high reliability, sub-second API speeds, and modern UX design.
              </p>
              <p className="text-slate-300 leading-relaxed mt-3">
                From developing hospital management systems and parliamentary intelligence summarizers to deep learning medical diagnosis apps, I leverage cutting-edge frameworks like Django, Next.js, and PyTorch/TensorFlow to solve real-world problems.
              </p>
            </div>

            {/* Education Card */}
            <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-md">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-indigo-400" />
                <span>Education</span>
              </h3>
              <div className="border-l-2 border-indigo-500/40 pl-4 space-y-1">
                <h4 className="text-base font-bold text-white">University of Energy and Natural Resources (UENR)</h4>
                <p className="text-sm text-cyan-400 font-medium">BSc. Information Technology | School of Science</p>
                <p className="text-xs text-slate-400 font-mono">2023 – Present (Final Year) | Sunyani, Fiapre, Ghana</p>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-900/40 border border-slate-800/70 hover:border-cyan-500/40 rounded-2xl p-5 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center mb-3 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/40 transition-colors">
                    <Icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-1.5">{item.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Contact info cards bar */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-4 flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400">
              <Mail className="w-5 h-5" />
            </div>
            <div className="overflow-hidden">
              <p className="text-[11px] font-mono text-slate-400">EMAIL</p>
              <a href={`mailto:${info.email}`} className="text-xs font-semibold text-white hover:text-cyan-400 truncate block">
                {info.email}
              </a>
            </div>
          </div>

          <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-4 flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-400">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] font-mono text-slate-400">PHONE</p>
              <a href={`tel:${info.phone}`} className="text-xs font-semibold text-white hover:text-cyan-400">
                {info.phone}
              </a>
            </div>
          </div>

          <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-4 flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-400">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] font-mono text-slate-400">LOCATION</p>
              <p className="text-xs font-semibold text-white">{info.location}</p>
            </div>
          </div>

          <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-4 flex items-center justify-around">
            {info.github && (
              <a href={info.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg text-slate-300 hover:text-cyan-400 hover:bg-slate-800 transition-all" aria-label="GitHub">
                <GithubIcon className="w-5 h-5" />
              </a>
            )}
            {info.linkedin && (
              <a href={info.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg text-slate-300 hover:text-cyan-400 hover:bg-slate-800 transition-all" aria-label="LinkedIn">
                <LinkedinIcon className="w-5 h-5" />
              </a>
            )}
            {info.youtube && (
              <a href={info.youtube} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg text-slate-300 hover:text-cyan-400 hover:bg-slate-800 transition-all" aria-label="YouTube">
                <YoutubeIcon className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
