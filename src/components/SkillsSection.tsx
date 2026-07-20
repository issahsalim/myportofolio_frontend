'use client';

import React, { useState } from 'react';
import { Layers, CheckCircle, Code, Server, Brain, Wrench } from 'lucide-react';
import { Skill } from '@/types/portfolio';

interface SkillsSectionProps {
  skills: Skill[];
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const categories = [
    { id: 'ALL', name: 'All Stack', icon: Layers },
    { id: 'Frontend', name: 'Frontend', icon: Code },
    { id: 'Backend', name: 'Backend & DB', icon: Server },
    { id: 'AI_ML', name: 'AI / Machine Learning', icon: Brain },
    { id: 'Tools_Other', name: 'Tools & Workflow', icon: Wrench },
  ];

  const filteredSkills =
    activeCategory === 'ALL'
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative z-10 border-t border-slate-800/60 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono font-medium mb-3">
            <span>CORE COMPETENCIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical Stack & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400">Mastery</span>
          </h2>
          <p className="mt-3 text-slate-400 text-base">
            Engineered over 5+ years across full-stack systems, deep learning models, and mobile architectures.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/25 scale-105'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.id || skill.name}
              className="bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 rounded-2xl p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 group-hover:animate-ping" />
                  <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </h3>
                </div>
                <span className="text-xs font-mono font-semibold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-md border border-cyan-500/20">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
