'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ExternalLink, Sparkles, X } from 'lucide-react';
import { Project } from '@/types/portfolio';
import { getMediaUrl } from '@/lib/api';
import { GithubIcon } from './SocialIcons';

interface ProjectsSectionProps {
  projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [activeFilter, setActiveFilter] = useState<string>('ALL');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filters = [
    { id: 'ALL', name: 'All Projects' },
    { id: 'WEB', name: 'Web Apps' },
    { id: 'AI', name: 'AI & Machine Learning' },
    { id: 'MOBILE', name: 'Mobile Apps' },
  ];

  const getFilteredProjects = () => {
    if (activeFilter === 'ALL') return projects;
    if (activeFilter === 'WEB') {
      return projects.filter(p => 
        p.title.includes('ProjectFreeStress') || 
        p.title.includes('Study Planner') || 
        p.title.includes('MCH') || 
        p.title.includes('ID Card') || 
        p.title.includes('RideShare')
      );
    }
    if (activeFilter === 'AI') {
      return projects.filter(p => 
        p.title.includes('Glaucoma') || 
        p.title.includes('Fraudulent') || 
        p.title.includes('FoodLens') || 
        p.title.includes('PARL GH')
      );
    }
    if (activeFilter === 'MOBILE') {
      return projects.filter(p => 
        p.title.includes('Campus') || 
        p.title.includes('FoodLens') || 
        p.tech_stack.includes('React Native')
      );
    }
    return projects;
  };

  const filteredProjects = getFilteredProjects();

  return (
    <section id="projects" className="py-24 relative z-10 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono font-medium mb-3">
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Works & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400">Shipped Platforms</span>
          </h2>
          <p className="mt-3 text-slate-400 text-base">
            From clinical AI diagnosis to full-stack web platforms and cross-platform mobile apps.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/20 scale-105'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const techBadges = project.tech_list || project.tech_stack.split(',').map(t => t.trim());
            const projectImg = getMediaUrl(project.image);

            return (
              <div
                key={project.id || project.title}
                className="bg-slate-900/70 border border-slate-800/80 hover:border-cyan-500/50 rounded-2xl overflow-hidden flex flex-col justify-between backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 shadow-xl group"
              >
                {/* Project Image Banner Header (if uploaded) */}
                {projectImg ? (
                  <div className="relative w-full h-48 bg-slate-950 overflow-hidden border-b border-slate-800">
                    <Image
                      src={projectImg}
                      alt={project.title}
                      fill
                      unoptimized
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-mono font-bold text-cyan-300 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-cyan-500/30 shadow-md">
                        0{index + 1}
                      </span>
                    </div>
                  </div>
                ) : null}

                <div className="p-6">
                  {/* Top Badge & Number if no image */}
                  {!projectImg && (
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-md border border-cyan-500/20">
                        0{index + 1}
                      </span>
                      {project.subtitle && (
                        <span className="text-[11px] font-medium text-indigo-300 bg-indigo-500/10 px-2 py-0.5 rounded-full border border-indigo-500/20">
                          {project.subtitle}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                    {project.title}
                  </h3>

                  {/* Subtitle if image is present */}
                  {projectImg && project.subtitle && (
                    <p className="text-xs text-indigo-400 font-mono mb-2">{project.subtitle}</p>
                  )}

                  {/* Description */}
                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3 mb-6">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {techBadges.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono font-medium text-slate-300 bg-slate-800/90 border border-slate-700/80 px-2 py-0.5 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {techBadges.length > 4 && (
                      <span className="text-[10px] font-mono text-cyan-400 bg-slate-800 px-1.5 py-0.5 rounded-md">
                        +{techBadges.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Bar */}
                <div className="flex items-center justify-between px-6 pb-6 pt-3 border-t border-slate-800/80 text-xs">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-1 hover:underline"
                  >
                    <span>Details & Spec</span>
                    <Sparkles className="w-3 h-3" />
                  </button>

                  <div className="flex items-center gap-3">
                    {project.github_url && (
                      <a
                        href={project.github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-white transition-colors"
                        title="View Source Repository"
                        aria-label="GitHub Repository"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                    {project.live_url && (
                      <a
                        href={project.live_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1 font-semibold"
                        title="View Live Platform"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal Popup */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="bg-slate-900 border border-cyan-500/30 rounded-2xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white z-10"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image Header (if uploaded) */}
            {selectedProject.image && (
              <div className="relative w-full h-56 rounded-xl bg-slate-950 overflow-hidden border border-slate-800">
                <Image
                  src={getMediaUrl(selectedProject.image)}
                  alt={selectedProject.title}
                  fill
                  unoptimized
                  className="object-cover object-top"
                />
              </div>
            )}

            <div>
              <span className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider">
                {selectedProject.subtitle || 'Project Specification'}
              </span>
              <h3 className="text-2xl font-extrabold text-white mt-1">{selectedProject.title}</h3>
            </div>

            <div>
              <h4 className="text-xs font-mono text-slate-400 uppercase mb-2">PROJECT OVERVIEW</h4>
              <p className="text-sm text-slate-300 leading-relaxed">{selectedProject.description}</p>
            </div>

            <div>
              <h4 className="text-xs font-mono text-slate-400 uppercase mb-2">COMPLETE TECH STACK</h4>
              <div className="flex flex-wrap gap-2">
                {(selectedProject.tech_list || selectedProject.tech_stack.split(',')).map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs font-mono font-semibold text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 px-3 py-1 rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-end gap-3">
              {selectedProject.github_url && (
                <a
                  href={selectedProject.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-xs text-white bg-slate-800 hover:bg-slate-700 transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              )}
              {selectedProject.live_url && (
                <a
                  href={selectedProject.live_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-cyan-500 to-indigo-600 shadow-md hover:scale-105 transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Visit Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
