import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';
import ThreeBackground from '@/components/ThreeBackground';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Issah Abdulsalim Boresa | Full-Stack & AI Developer in Ghana (Issah Salim / Boresa)',
  description:
    'Official portfolio of Issah Abdulsalim Boresa (Issah Salim / Boresa), a premier Full-Stack & Machine Learning Developer in Ghana specializing in Next.js, Django, REST APIs, Vision Transformers, and Expo React Native.',
  keywords: [
    'Issah Abdulsalim Boresa',
    'Issah Salim',
    'Issah Boresa',
    'Boresa',
    'Bores',
    'Salim',
    'Software Developer in GH',
    'Software Developer in Ghana',
    'Full Stack Developer Ghana',
    'Django Developer Ghana',
    'Next.js Developer Ghana',
    'AI Engineer Ghana',
    'Glaucoma Detection AI',
    'UENR IT Developer',
  ],
  authors: [{ name: 'Issah Abdulsalim Boresa', url: 'https://boresa.com' }],
  creator: 'Issah Abdulsalim Boresa',
  metadataBase: new URL('https://boresa.com'),
  icons: {
    icon: '/boresa.jpeg',
    shortcut: '/boresa.jpeg',
    apple: '/boresa.jpeg',
  },
  alternates: {
    canonical: '/',
  },

  openGraph: {
    type: 'profile',
    locale: 'en_US',
    url: 'https://boresa.com',
    title: 'Issah Abdulsalim Boresa | Full-Stack & AI Developer in Ghana',
    description:
      'Explore projects and technical expertise of Issah Abdulsalim Boresa (Issah Salim), Full Stack & AI Developer based in Ghana.',
    siteName: 'Issah Boresa Portfolio',
    images: [
      {
        url: '/boresa.jpeg',
        width: 1200,
        height: 630,
        alt: 'Issah Abdulsalim Boresa - Full-Stack Developer in Ghana',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Issah Abdulsalim Boresa | Full-Stack & AI Developer in Ghana',
    description:
      'Official Portfolio of Issah Abdulsalim Boresa. Full-Stack Developer & AI ML Engineer in Ghana.',
    images: ['/boresa.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Person & ProfilePage Schema for Google Search Engine Optimization
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Issah Abdulsalim Boresa',
    alternateName: ['Issah Salim', 'Issah Boresa', 'Boresa', 'Bores'],
    jobTitle: 'Full-Stack & Machine Learning Developer',
    worksFor: {
      '@type': 'Organization',
      name: 'Freelance & Independent Software Engineer',
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'University of Energy and Natural Resources (UENR)',
    },
    url: 'https://boresa.com',
    email: 'issah.boresa.stu@uenr.edu.gh',
    telephone: '+233596878044',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Yeji',
      addressRegion: 'Bono-East',
      addressCountry: 'GH',
    },
    sameAs: [
      'https://github.com/issahsalim',
      'https://linkedin.com/in/issahsalim',
      'https://youtube.com/@issahsalim',
    ],
    knowsAbout: [
      'Full Stack Web Development',
      'Django',
      'Django REST Framework',
      'Next.js',
      'React.js',
      'Expo React Native',
      'Python',
      'Machine Learning',
      'Vision Transformers (ViT)',
      'Artificial Intelligence',
      'Software Engineering Ghana',
    ],
  };

  return (
    <html lang="en" className={`dark scroll-smooth ${jakarta.variable} ${jetbrains.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-slate-950 text-slate-100 font-sans antialiased selection:bg-cyan-500 selection:text-slate-950 min-h-screen relative overflow-x-hidden">
        <ThreeBackground />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
  