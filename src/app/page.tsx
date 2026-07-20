import PortfolioContainer from '@/components/PortfolioContainer';
import { fetchPersonalInfo, fetchSkills, fetchProjects } from '@/lib/api';

export const revalidate = 60; // Revalidate dynamic data from Django API every 60s

export default async function HomePage() {
  // Fetch initial data for SSR/SSG
  const personalInfo = await fetchPersonalInfo();
  const skills = await fetchSkills();
  const projects = await fetchProjects();

  return (
    <PortfolioContainer
      initialInfo={personalInfo}
      initialSkills={skills}
      initialProjects={projects}
    />
  );
}
