import PortfolioContainer from '@/components/PortfolioContainer';
import { fetchPersonalInfo, fetchSkills, fetchProjects, fetchTestimonials } from '@/lib/api';

export const dynamic = 'force-dynamic'; // Always fetch fresh data from Django backend API
export const revalidate = 0;

export default async function HomePage() {
  // Fetch initial data for SSR/SSG
  const personalInfo = await fetchPersonalInfo();
  const skills = await fetchSkills();
  const projects = await fetchProjects();
  const testimonials = await fetchTestimonials();

  return (
    <PortfolioContainer
      initialInfo={personalInfo}
      initialSkills={skills}
      initialProjects={projects}
      initialTestimonials={testimonials}
    />
  );
}

