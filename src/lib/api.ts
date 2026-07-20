import { PersonalInfo, Skill, Project, ContactMessage } from '@/types/portfolio';

// ==============================================================================
// CENTRAL BACKEND CONFIGURATION & SMART URL RESOLUTION
// Automatically detects environment (Localhost, LAN IP, or Render Production)
// ==============================================================================
export function getBackendUrl(): string {
  let envUrl = process.env.NEXT_PUBLIC_BACKEND_URL?.trim();
  if (envUrl) {
    if (!envUrl.startsWith('http://') && !envUrl.startsWith('https://')) {
      envUrl = `http://${envUrl}`;
    }
    return envUrl.replace(/\/+$/, '');
  }

  // In browser runtime: detect if running on localhost or local network IP
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname;
    if (hostname === 'localhost' || hostname === '127.0.0.1') {
      return 'http://localhost:8000';
    }
    if (hostname.startsWith('192.168.') || hostname.startsWith('10.') || hostname.startsWith('172.')) {
      return `http://${hostname}:8000`;
    }
  }

  // Fallback to live Render production backend
  return 'https://myportofolio-backend.onrender.com';
}

export const BACKEND_URL = getBackendUrl();
export const API_BASE_URL = `${BACKEND_URL}/api`;

/**
 * Helper to resolve media URLs (images, resumes) relative to the resolved backend URL.
 */
export function getMediaUrl(path?: string | null, fallback: string = ''): string {
  if (!path) return fallback;
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  const baseUrl = getBackendUrl();
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${baseUrl}${cleanPath}`;
}

// Fallback initial data sourced directly from Issah Abdulsalim Boresa's CV & Portfolio
export const INITIAL_PERSONAL_INFO: PersonalInfo = {
  name: "Issah Abdulsalim Boresa",
  role: "Full-Stack & Machine Learning Developer",
  email: "issah.boresa.stu@uenr.edu.gh",
  phone: "(059) 6878044",
  location: "Bono-East, Yeji, Ghana",
  linkedin: "https://linkedin.com/in/issahsalim",
  github: "https://github.com/issahsalim",
  youtube: "https://youtube.com/@issahsalim",
  bio: "Full Stack Developer with over 5 years of experience designing and building scalable web and mobile applications. Strategically integrates AI-assisted development tools (e.g., Copilot, CLI assistants) and machine learning models (ViT, ResNet50, Random Forest) to boost productivity, improve code efficiency, and streamline end-to-end workflows.",
  profile_image: "/boresa.jpeg",
  resume: "/IssahSalim_CV.pdf"
};

export const INITIAL_SKILLS: Skill[] = [
  // Frontend
  { id: 1, name: "React JS", category: "Frontend", level: 95, order: 1 },
  { id: 2, name: "Next JS", category: "Frontend", level: 92, order: 2 },
  { id: 3, name: "Expo React Native", category: "Frontend", level: 88, order: 3 },
  { id: 4, name: "HTML / CSS / JavaScript", category: "Frontend", level: 98, order: 4 },
  { id: 5, name: "Tailwind CSS / Bootstrap", category: "Frontend", level: 94, order: 5 },
  { id: 6, name: "Responsive Web Design & SEO", category: "Frontend", level: 90, order: 6 },

  // Backend
  { id: 7, name: "Django & Django REST Framework", category: "Backend", level: 95, order: 1 },
  { id: 8, name: "RESTful APIs & JWT Auth", category: "Backend", level: 95, order: 2 },
  { id: 9, name: "PostgreSQL & MySQL", category: "Backend", level: 90, order: 3 },
  { id: 10, name: "Python", category: "Backend", level: 96, order: 4 },

  // AI & ML
  { id: 11, name: "Vision Transformer (ViT-B/16) & ResNet50", category: "AI_ML", level: 85, order: 1 },
  { id: 12, name: "Random Forest & Decision Trees", category: "AI_ML", level: 88, order: 2 },
  { id: 13, name: "Gemini Generative AI Integration", category: "AI_ML", level: 90, order: 3 },
  { id: 14, name: "Scikit-Learn, Pandas & NumPy", category: "AI_ML", level: 88, order: 4 },

  // Tools & Other
  { id: 15, name: "Git & GitHub", category: "Tools_Other", level: 95, order: 1 },
  { id: 16, name: "Docker Containerization", category: "Tools_Other", level: 85, order: 2 },
  { id: 17, name: "AI-Assisted Development (Copilot, CLI)", category: "Tools_Other", level: 98, order: 3 },
  { id: 18, name: "Video Editing", category: "Tools_Other", level: 80, order: 4 }
];

export const INITIAL_PROJECTS: Project[] = [
  {
    id: 1,
    title: "ProjectFreeStress",
    subtitle: "Academic Marketplace Platform",
    description: "A web-based marketplace platform where students can buy, sell, and request academic project work. The platform connects students needing project assistance with those offering completed work, featuring clean responsive UI and secure transaction flows.",
    tech_stack: "Django, Django REST Framework, React JS, PostgreSQL, Bootstrap, HTML, CSS, JavaScript",
    tech_list: ["Django", "Django REST", "React JS", "PostgreSQL", "Bootstrap"],
    live_url: "https://projectfreestress.com",
    github_url: "https://github.com/issahsalim/projectfreestress",
    order: 1
  },
  {
    id: 2,
    title: "Study Planner",
    subtitle: "Student Productivity Tool",
    description: "A web application helping students manage study schedules, join collaborative study groups, and track tasks efficiently. Includes schedule management, group collaboration tools, and task tracking with visual progress indicators.",
    tech_stack: "Django, React JS, PostgreSQL, Bootstrap, HTML, CSS, JavaScript",
    tech_list: ["Django", "React JS", "PostgreSQL", "Bootstrap"],
    live_url: "https://studyplanner.app",
    github_url: "https://github.com/issahsalim/study-planner",
    order: 2
  },
  {
    id: 3,
    title: "MCH Yeji — Hospital Website",
    subtitle: "Institutional & Healthcare Platform",
    description: "Designed and developed a fully responsive website for Mathias Catholic Hospital, Yeji. Features online appointment booking, job application portal, and dedicated dashboards for HR staff and Doctors to manage workflows efficiently.",
    tech_stack: "Django, Django REST Framework, React JS, MySQL, Bootstrap, HTML, CSS, JavaScript",
    tech_list: ["Django", "Django REST", "React JS", "MySQL", "Bootstrap"],
    live_url: "https://mchyeji.org",
    github_url: "https://github.com/issahsalim/mch-yeji",
    order: 3
  },
  {
    id: 4,
    title: "AI-Powered Glaucoma Detection System",
    subtitle: "Clinical-Grade Medical Diagnosis Tool",
    description: "A clinical-grade dual-engine AI platform for automatic glaucoma detection from retinal fundus images. Integrates Vision Transformer (ViT-B/16) (81% validation accuracy) and fine-tuned ResNet50 CNN (79% accuracy), trained on over 17,000 fundus images. Includes Python/Django API backend and Expo React Native mobile app.",
    tech_stack: "Python, Django REST Framework, Vision Transformer (ViT-B/16), ResNet50 CNN, Expo React Native, Docker, JWT Authentication",
    tech_list: ["Python", "Django REST", "ViT-B/16", "ResNet50", "Expo React Native", "Docker"],
    live_url: "",
    github_url: "https://github.com/issahsalim/glaucoma-detection",
    order: 4
  },
  {
    id: 5,
    title: "Social Media Fraudulent Account Detection",
    subtitle: "Social Network Security System",
    description: "A machine learning system for detecting fraudulent accounts on Instagram, Facebook, and Twitter. Analyses user activity patterns, profile data, posting behaviour, and network interactions to classify accounts using Random Forest, Decision Trees, and Logistic Regression.",
    tech_stack: "Python, Scikit-learn, Pandas, NumPy, Data Mining, Random Forest, Logistic Regression, Decision Tree",
    tech_list: ["Python", "Scikit-learn", "Pandas", "Random Forest", "Logistic Regression"],
    live_url: "",
    github_url: "https://github.com/issahsalim/social-fraud-detection",
    order: 5
  },
  {
    id: 6,
    title: "Campus Assistant Mobile App",
    subtitle: "AI-Powered Campus Navigation Tool",
    description: "Cross-platform mobile application built with Expo React Native addressing campus navigation challenges at UENR. Features GPS-aware campus navigation, Wi-Fi resource discoverability, support contact accessibility, and an AI chat assistant powered by university knowledge data.",
    tech_stack: "Expo React Native, Django REST API, AI Chat Assistant, GPS Navigation, PostgreSQL, JWT Authentication",
    tech_list: ["Expo React Native", "Django REST", "AI Chat", "GPS Navigation", "PostgreSQL"],
    live_url: "",
    github_url: "https://github.com/issahsalim/campus-assistant",
    order: 6
  },
  {
    id: 7,
    title: "FoodLens / Foodie",
    subtitle: "AI Food & Recipe Platform",
    description: "AI-powered food recognition mobile app with recipe generation, voice-enabled meal chat assistant, shopping list management, and video tutorials. Uses a local Swin Transformer model with Gemini generative AI fallback.",
    tech_stack: "Django REST Framework, Expo React Native, Swin Transformer, Gemini AI, JWT, RapidAPI, YouTube Data API, Expo Router",
    tech_list: ["Django REST", "Expo React Native", "Swin Transformer", "Gemini AI", "YouTube API"],
    live_url: "",
    github_url: "https://github.com/issahsalim/foodlens",
    order: 7
  },
  {
    id: 8,
    title: "PARL GH — Parliamentary Hansard AI Summarizer",
    subtitle: "Ghana Parliamentary Intelligence System",
    description: "Django-based backend for an AI-powered parliamentary hansard summarization system focused on Ghana parliamentary debates. Stores session data, full-text search across speakers/topics, and generates AI summaries for debate segments.",
    tech_stack: "Django, Django REST Framework, AI Summarization, Full-Text Search, PostgreSQL, JSON/CSV Export",
    tech_list: ["Django", "Django REST", "AI Summarization", "Full-Text Search", "PostgreSQL"],
    live_url: "",
    github_url: "https://github.com/issahsalim/parl-gh",
    order: 8
  },
  {
    id: 9,
    title: "Hospital ID Card Generator",
    subtitle: "Healthcare Staff Utility",
    description: "Web-based ID card generator for hospital staff to produce standardized patient ID cards. Features front & back card preview, barcode generation from ID value, and card downloading.",
    tech_stack: "HTML, CSS, JavaScript, Barcode Generation",
    tech_list: ["HTML5", "CSS3", "JavaScript", "Barcode Gen"],
    live_url: "",
    github_url: "https://github.com/issahsalim/hospital-id-generator",
    order: 9
  },
  {
    id: 10,
    title: "RideShare Ghana",
    subtitle: "Intercity Ride Sharing Platform",
    description: "Django-based rideshare web application designed for people in Ghana to share intercity rides. Lets users post rides as drivers, search for available rides, book seats, and manage trips with live chatting.",
    tech_stack: "Django, Python, HTML, CSS, JavaScript, MySQL",
    tech_list: ["Django", "Python", "MySQL", "JavaScript"],
    live_url: "",
    github_url: "https://github.com/issahsalim/rideshare-ghana",
    order: 10
  }
];

export async function fetchPersonalInfo(): Promise<PersonalInfo> {
  const baseUrl = getBackendUrl();
  try {
    const res = await fetch(`${baseUrl}/api/personal/`, { cache: 'no-store' });
    if (res.ok) {
      const data = await res.json();
      if (data && Object.keys(data).length > 0) return data;
    }
  } catch (err) {
    console.warn("Could not reach backend API at", `${baseUrl}/api`, "using fallback data.");
  }
  return INITIAL_PERSONAL_INFO;
}

export async function fetchSkills(): Promise<Skill[]> {
  const baseUrl = getBackendUrl();
  try {
    const res = await fetch(`${baseUrl}/api/skills/`, { cache: 'no-store' });
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) return data;
    }
  } catch (err) {
    console.warn("Could not reach backend API at", `${baseUrl}/api`, "using fallback data.");
  }
  return INITIAL_SKILLS;
}

export async function fetchProjects(): Promise<Project[]> {
  const baseUrl = getBackendUrl();
  try {
    const res = await fetch(`${baseUrl}/api/projects/`, { cache: 'no-store' });
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) return data;
    }
  } catch (err) {
    console.warn("Could not reach backend API at", `${baseUrl}/api`, "using fallback data.");
  }
  return INITIAL_PROJECTS;
}

export async function sendContactMessage(msg: ContactMessage): Promise<{ success: boolean; message: string }> {
  const baseUrl = getBackendUrl();
  try {
    const res = await fetch(`${baseUrl}/api/contact/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(msg),
    });
    if (res.ok) {
      return { success: true, message: "Thank you! Your message has been sent successfully to Issah." };
    }
    const errData = await res.json();
    return { success: false, message: errData?.detail || "Could not submit message. Please try again." };
  } catch (err) {
    return { success: false, message: "Network error connecting to backend server. Please try again later." };
  }
}
