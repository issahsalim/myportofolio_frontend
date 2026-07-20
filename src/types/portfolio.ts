export interface PersonalInfo {
  id?: number;
  name: string;
  role: string;
  email: string;
  phone: string;
  location: string;
  linkedin?: string;
  github?: string;
  youtube?: string;
  bio: string;
  resume?: string;
  profile_image?: string;
}

export interface Skill {
  id?: number;
  name: string;
  category: 'Frontend' | 'Backend' | 'AI_ML' | 'Tools_Other';
  level: number;
  order: number;
}

export interface Project {
  id?: number;
  title: string;
  subtitle?: string;
  description: string;
  tech_stack: string;
  tech_list?: string[];
  live_url?: string;
  github_url?: string;
  image?: string;
  order: number;
}

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}
