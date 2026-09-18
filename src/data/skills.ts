export interface SkillCategory {
  category: string;
  skills: string[];
}

export const techCategories: SkillCategory[] = [
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Material UI']
  },
  {
    category: 'Architecture',
    skills: ['Microfrontends', 'Module Federation', 'Nx', 'Turborepo', 'Webpack', 'Vite']
  },
  {
    category: 'State Management',
    skills: ['Redux Toolkit', 'RTK Query', 'Zustand', 'Context API']
  },
  {
    category: 'API & Data',
    skills: ['REST APIs', 'GraphQL', 'Axios', 'Apollo Client', 'WebSockets']
  },
  {
    category: 'Cloud & DevOps',
    skills: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'GitHub Actions', 'Jenkins']
  },
  {
    category: 'Testing & Quality',
    skills: ['Jest', 'React Testing Library', 'Cypress', 'Playwright', 'WCAG Accessibility']
  }
];

export interface ExpertiseItem {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  skills: string[];
}

export const expertiseItems: ExpertiseItem[] = [
  {
    number: '01',
    title: 'Frontend Engineering',
    subtitle: 'Modern React & TypeScript ecosystems',
    description:
      'Building responsive, modular, and resilient single-page and server-rendered web applications with typed state management and modern CSS systems.',
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS']
  },
  {
    number: '02',
    title: 'Frontend Architecture',
    subtitle: 'Scalable systems for enterprise engineering',
    description:
      'Designing Microfrontends with Module Federation, monorepos with Nx & Turborepo, atomic design systems, and reusable component packages.',
    skills: ['Microfrontends', 'Module Federation', 'Nx', 'Turborepo', 'Design Systems', 'Reusable Components']
  },
  {
    number: '03',
    title: 'Performance Engineering',
    subtitle: 'Optimizing speed as a product feature',
    description:
      'Tuning Core Web Vitals, code-splitting routes, configuring static generation with dynamic caching, and streamlining render paths.',
    skills: ['Web Vitals', 'Lighthouse', 'Code Splitting', 'Lazy Loading', 'SSR', 'Caching', 'CDN']
  },
  {
    number: '04',
    title: 'Engineering Quality',
    subtitle: 'Reliability, testing, and accessibility',
    description:
      'Ensuring WCAG 2.1/2.2 accessibility compliance, comprehensive integration testing, automated end-to-end testing, and automated CI pipelines.',
    skills: ['Jest', 'React Testing Library', 'Cypress', 'Playwright', 'Accessibility', 'WCAG', 'CI/CD']
  }
];
