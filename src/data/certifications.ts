export interface Certification {
  name: string;
  issuer?: string;
}

export const certifications: Certification[] = [
  { name: 'Meta Front-End Developer Program', issuer: 'Meta' },
  { name: 'Advanced React & GraphQL', issuer: 'Professional Certification' },
  { name: 'Next.js & React', issuer: 'Vercel / Next.js Ecosystem' },
  { name: 'JavaScript Algorithms & Data Structures', issuer: 'freeCodeCamp' },
  { name: 'TypeScript for Professionals', issuer: 'Engineering Program' },
  { name: 'Tailwind CSS Modern Styling', issuer: 'Frontend Mastery' },
  { name: 'Git & GitHub Version Control', issuer: 'GitHub' },
  { name: 'Agile Software Development', issuer: 'Scrum / Agile' },
  { name: 'AWS & Azure Cloud Fundamentals', issuer: 'Cloud Training' }
];
