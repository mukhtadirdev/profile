export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  isCurrent?: boolean;
  description: string;
  focus: string[];
  highlights: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: 'virtusa',
    company: 'Virtusa',
    role: 'Lead Frontend Developer / Senior Frontend Engineer',
    period: 'June 2025 – Present',
    isCurrent: true,
    description:
      'Leading enterprise frontend development initiatives with a focus on scalable React architectures, Next.js web platforms, client-facing engineering, and performance optimization.',
    focus: [
      'Enterprise frontend development',
      'React',
      'Next.js',
      'TypeScript',
      'Performance optimization',
      'Modern frontend architecture',
      'Client-facing engineering'
    ],
    highlights: [
      'Architecting modern web applications for fortune-500 enterprise clients.',
      'Driving frontend performance standards, Web Vitals benchmarks, and CI/CD quality gates.',
      'Leading cross-functional technical alignment between product management, UX design, and backend engineering.'
    ]
  },
  {
    id: 'coforge',
    company: 'Coforge',
    role: 'Lead Frontend Developer',
    period: 'June 2025 – February 2026',
    description:
      'Spearheaded frontend architecture and technical delivery for large-scale enterprise clients, establishing modern React component standards and cross-team design systems.',
    focus: [
      'React',
      'Frontend architecture',
      'Enterprise applications',
      'Performance',
      'Cross-functional collaboration'
    ],
    highlights: [
      'Engineered reusable enterprise UI component systems reducing development cycle time.',
      'Led performance tuning initiatives resulting in notable page speed improvements.',
      'Mentored software engineers on TypeScript, state management, and modern React patterns.'
    ]
  },
  {
    id: 'valuelabs',
    company: 'ValueLabs',
    role: 'Senior Software Engineer',
    period: 'June 2023 – May 2025',
    description:
      'Engineered high-throughput enterprise web platforms using React, TypeScript, and microfrontend architectures for global clients.',
    focus: [
      'React',
      'TypeScript',
      'Frontend architecture',
      'Enterprise web applications'
    ],
    highlights: [
      'Built scalable React single-page and server-rendered web applications.',
      'Implemented Module Federation for seamless independent microfrontend deployments.',
      'Optimized application accessibility (WCAG) and cross-browser resilience.'
    ]
  },
  {
    id: 'persistent',
    company: 'Persistent',
    role: 'Senior Front-End Engineer',
    period: 'May 2022 – June 2023',
    description:
      'Developed high-performance digital platforms and client applications using React, JavaScript (ES6+), and modern state management.',
    focus: [
      'React',
      'Digital platforms',
      'Performance',
      'Frontend engineering'
    ],
    highlights: [
      'Constructed complex interactive dashboards and real-time data visualizers.',
      'Improved client side routing and state persistence patterns across key application modules.',
      'Participated in code reviews, technical spike investigations, and architecture planning.'
    ]
  },
  {
    id: 'persistent-banking',
    company: 'Persistent Digital Banking',
    role: 'Software Engineer / Frontend Engineer',
    period: 'December 2019 – May 2022',
    description:
      'Delivered robust digital banking software solutions, secure customer portals, and API integrations with focus on reliability and security.',
    focus: [
      'Digital banking',
      'React',
      'JavaScript',
      'Enterprise applications'
    ],
    highlights: [
      'Engineered responsive web interfaces for core banking and transaction modules.',
      'Integrated RESTful APIs, security authentication tokens, and input validation schemas.',
      'Collaborated closely with QA and security teams to eliminate frontend vulnerabilities.'
    ]
  },
  {
    id: 'wotr',
    company: 'WOTR',
    role: 'Software Engineer',
    period: 'February 2019 – December 2019',
    description:
      'Started professional frontend career developing web applications, responsive user interfaces, and custom JavaScript scripts.',
    focus: [
      'Software Engineering',
      'JavaScript',
      'HTML5 & CSS3',
      'Web Development'
    ],
    highlights: [
      'Built interactive web forms and user components using semantic HTML, CSS3, and JavaScript.',
      'Worked with cross-functional project teams to deliver web interfaces on schedule.'
    ]
  }
];
