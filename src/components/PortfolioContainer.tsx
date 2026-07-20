'use client';

import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { PersonalInfo, Skill, Project } from '@/types/portfolio';
import { fetchPersonalInfo, fetchSkills, fetchProjects } from '@/lib/api';

interface PortfolioContainerProps {
  initialInfo: PersonalInfo;
  initialSkills: Skill[];
  initialProjects: Project[];
}

export default function PortfolioContainer({
  initialInfo,
  initialSkills,
  initialProjects,
}: PortfolioContainerProps) {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>(initialInfo);
  const [skills, setSkills] = useState<Skill[]>(initialSkills);
  const [projects, setProjects] = useState<Project[]>(initialProjects);

  useEffect(() => {
    // Client-side background sync: fetch live data directly from Django backend
    const syncLiveData = async () => {
      try {
        const [liveInfo, liveSkills, liveProjects] = await Promise.all([
          fetchPersonalInfo(),
          fetchSkills(),
          fetchProjects(),
        ]);
        if (liveInfo) setPersonalInfo(liveInfo);
        if (liveSkills && liveSkills.length > 0) setSkills(liveSkills);
        if (liveProjects && liveProjects.length > 0) setProjects(liveProjects);
      } catch (err) {
        console.warn("Background live sync note:", err);
      }
    };

    syncLiveData();
  }, []);

  return (
    <div className="relative flex flex-col min-h-screen">
      <Navbar resumeUrl={personalInfo.resume || '/IssahSalim_CV.pdf'} />
      <main className="flex-grow">
        <HeroSection info={personalInfo} />
        <AboutSection info={personalInfo} />
        <SkillsSection skills={skills} />
        <ProjectsSection projects={projects} />
        <ContactSection info={personalInfo} />
      </main>
      <Footer info={personalInfo} />
    </div>
  );
}
