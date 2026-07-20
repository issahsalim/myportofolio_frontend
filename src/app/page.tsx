import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { fetchPersonalInfo, fetchSkills, fetchProjects } from '@/lib/api';

export const revalidate = 60; // Revalidate dynamic data from Django API every 60s

export default async function HomePage() {
  // Fetch live data from Django backend API (or fallback if backend server is not currently running)
  const personalInfo = await fetchPersonalInfo();
  const skills = await fetchSkills();
  const projects = await fetchProjects();

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
