export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  client?: string;
  isCurrent?: boolean;
  description: string;
  focus: string[];
  highlights: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: 'tcs',
    company: 'Tata Consultancy Services (TCS)',
    role: 'System Analyst, Lead Frontend Developer',
    period: '03/2026 – Present',
    client: 'UBS',
    isCurrent: true,
    description:
      'Leading frontend architecture and AI-powered product interfaces for a global banking client (UBS), standardizing React, Next.js, and TypeScript architectures.',
    focus: [
      'Frontend Architecture',
      'AI Interfaces',
      'React & Next.js',
      'TypeScript',
      'Performance Engineering',
      'WCAG Accessibility',
      'Banking Enterprise'
    ],
    highlights: [
      'Owned frontend architecture for a global banking client (UBS), standardizing on React, TypeScript, and Next.js to establish a reusable, component-based system adopted across product teams, reducing engineering rework by 82% and cutting new-feature build time by 38%.',
      'Built the UI for an AI-powered transaction-processing agent tuned for speed while sustaining 79% decision accuracy, surfacing outcomes across 23M+ weekly transactions for UBS stakeholders.',
      'Led the design and delivery of AI-powered frontend interfaces, translating complex AI-agent workflows — including speech-driven and conversational interfaces — into production-ready product experiences, adopted by 13,000+ users and reducing task completion time by 47%.',
      'Drove adoption of AI-assisted development tools across the team, cutting repetitive coding tasks and setting the workflow standard for feature delivery, reducing development time by 76%.',
      'Own performance strategy for key product surfaces, auditing and optimizing rendering to improve Core Web Vitals and application responsiveness, improving LCP/CLS by 26% and reducing load time by 44%.',
      'Set accessibility standards for the team by implementing semantic HTML, ARIA attributes, and full keyboard navigation support against WCAG guidelines, reducing accessibility defects by 88%.'
    ]
  },
  {
    id: 'virtusa',
    company: 'Virtusa',
    role: 'Lead Frontend Developer',
    period: '06/2025 – 02/2026',
    description:
      'Spearheaded enterprise frontend development initiatives with a focus on scalable React architectures, Next.js web platforms, client-facing engineering, and performance optimization.',
    focus: [
      'Enterprise Frontend',
      'React',
      'Next.js',
      'TypeScript',
      'Performance Optimization',
      'Client-Facing Engineering'
    ],
    highlights: [
      'Architected modern web applications for fortune-500 enterprise clients.',
      'Driven frontend performance standards, Web Vitals benchmarks, and CI/CD quality gates.',
      'Led cross-functional technical alignment between product management, UX design, and backend engineering.'
    ]
  },
  {
    id: 'coforge',
    company: 'Coforge',
    role: 'Lead Frontend Developer',
    period: '06/2025 – 02/2026',
    description:
      'Spearheaded frontend architecture and technical delivery for enterprise clients, establishing modern React component standards and cross-team design systems.',
    focus: [
      'React',
      'Frontend Architecture',
      'Enterprise Applications',
      'Performance Optimization'
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
    period: '06/2023 – 05/2025',
    description:
      'Engineered high-throughput enterprise web platforms using React, TypeScript, and microfrontend architectures for global clients.',
    focus: [
      'React',
      'TypeScript',
      'Frontend Architecture',
      'Enterprise Web Apps'
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
    period: '05/2022 – 06/2023',
    description:
      'Developed high-performance digital platforms and client applications using React, JavaScript (ES6+), and modern state management.',
    focus: [
      'React',
      'Digital Platforms',
      'Performance',
      'Frontend Engineering'
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
    period: '12/2019 – 05/2022',
    description:
      'Delivered robust digital banking software solutions, secure customer portals, and API integrations with focus on reliability and security.',
    focus: [
      'Digital Banking',
      'React',
      'JavaScript',
      'Enterprise Applications'
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
    period: '02/2019 – 12/2019',
    description:
      'Developed web applications, responsive user interfaces, and custom JavaScript modules.',
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
