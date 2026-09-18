export interface Project {
  slug: string;
  number: string;
  title: string;
  category: string;
  industry: string;
  role: string;
  tagline: string;
  description: string;
  overview: string;
  challenge: string;
  contribution: string[];
  engineeringConsiderations: string[];
  outcomes: string[];
  technologies: string[];
  metrics: { label: string; value: string }[];
  visualType: 'fintech' | 'banking' | 'postal' | 'ecommerce' | 'insurance';
}

export const projects: Project[] = [
  {
    slug: 'intuit',
    number: '01',
    title: 'Intuit',
    category: 'Financial Technology',
    industry: 'Financial Technology & Enterprise Software',
    role: 'Senior Frontend Engineer',
    tagline: 'Enterprise scalable React architecture, performance, and design system engineering.',
    description:
      'Frontend engineering for enterprise digital experiences with a focus on scalable React architecture, performance, reusable components, and modern web development practices.',
    overview:
      'Engineered scalable user interfaces for Intuit enterprise platforms serving millions of business users. Focused on modular architecture, design system consistency, performance optimization, and seamless client-side state synchronization.',
    challenge:
      'Building complex financial workflows with zero-latency input response, ensuring consistent cross-application visual tokens across distributed frontend micro-apps, and maintaining strict accessibility and performance constraints.',
    contribution: [
      'Architected high-performance React component libraries integrated into core product streams.',
      'Reduced cumulative layout shift (CLS) and improved Largest Contentful Paint (LCP) by 36% through targeted dynamic imports and critical path rendering.',
      'Collaborated with cross-functional design and product teams to implement WCAG 2.1 AA compliant financial dashboards.',
      'Refactored legacy state stores into streamlined, predictable state patterns using modern React hooks and memoization.'
    ],
    engineeringConsiderations: [
      'Microfrontend isolation and shared runtime dependency management.',
      'Strict TypeScript interfaces enforcing bulletproof financial payload shapes.',
      'SSR & SSG hybrid rendering strategies for dynamic data widgets.',
      'Automated visual regression testing and component contract validation.'
    ],
    outcomes: [
      '36%+ boost in core web vital page speed metrics.',
      'Adopted reusable UI pattern library across multiple engineering pods.',
      'Zero high-severity accessibility regressions reported during audit.'
    ],
    technologies: ['React', 'TypeScript', 'Next.js', 'JavaScript', 'Performance', 'Redux Toolkit', 'Tailwind CSS'],
    metrics: [
      { label: 'Performance Improvement', value: '36%+' },
      { label: 'Lighthouse Score', value: '95' },
      { label: 'Accessibility Rating', value: 'WCAG 2.1 AA' }
    ],
    visualType: 'fintech'
  },
  {
    slug: 'ubs',
    number: '02',
    title: 'UBS',
    category: 'Digital Banking',
    industry: 'Wealth Management & Institutional Banking',
    role: 'Frontend Engineering Lead / Senior Engineer',
    tagline: 'High-security enterprise banking portals with reliable API integrations and accessible components.',
    description:
      'Frontend development for enterprise banking experiences with a focus on scalable UI architecture, reusable components, accessibility, and reliable API-driven experiences.',
    overview:
      'Delivered mission-critical digital banking interfaces for UBS wealth management platforms. Built modular frontend modules handling complex financial instruments, real-time market data visualization, and secure authenticated client workflows.',
    challenge:
      'Managing high-density financial data tables, secure WebSocket feeds, strict data privacy standards, and complex multi-step transaction authorization flows without sacrificing responsiveness.',
    contribution: [
      'Developed responsive, accessible banking components powered by TypeScript and React.',
      'Optimized data grid rendering using windowing and virtualized lists for 10,000+ real-time securities records.',
      'Built robust error-boundary handling and optimistic UI updates for banking operations.',
      'Spearheaded frontend accessibility initiatives to ensure 100% keyboard and screen reader usability.'
    ],
    engineeringConsiderations: [
      'Zero-trust security headers and secure cookie authentication tokens.',
      'Resilient state synchronization under volatile network conditions.',
      'Strict auditability and structured client logging.',
      'Performance budget enforcement in continuous integration pipelines.'
    ],
    outcomes: [
      'Sub-second real-time table rendering under peak market activity.',
      'Fully compliant WCAG 2.2 banking portal deployed globally.',
      'Enhanced engineering developer experience with standardized API hooks.'
    ],
    technologies: ['React', 'TypeScript', 'Redux', 'REST APIs', 'Accessibility', 'WebSockets', 'Jest'],
    metrics: [
      { label: 'Data Row Virtualization', value: '10k+ rows' },
      { label: 'Accessibility Audit', value: '100% Pass' },
      { label: 'Production Uptime UI', value: '99.99%' }
    ],
    visualType: 'banking'
  },
  {
    slug: 'post-office',
    number: '03',
    title: 'Post Office UK',
    category: 'Postal & Customer Services',
    industry: 'Government & Consumer Postal Services',
    role: 'Lead Frontend Developer',
    tagline: 'Modern customer-facing web platforms engineered for accessibility, high traffic, and responsiveness.',
    description:
      'Modern customer-facing web experiences built with React and modern frontend engineering practices, including responsive interfaces, performance optimization, and accessibility.',
    overview:
      'Engineered public-facing web applications and postal branch locator/service engines for Post Office UK. Focused on high-concurrency user traffic, fast localized search, mobile-first design, and inclusive design standards.',
    challenge:
      'Serving millions of daily UK citizens across diverse network conditions and hardware, delivering instant geo-spatial branch locator results, and adhering to strict UK GDS accessibility guidelines.',
    contribution: [
      'Re-architected core customer journey funnels into high-speed Next.js React applications.',
      'Implemented progressive web application (PWA) offline capabilities for branch location services.',
      'Optimized asset loading, image pipelines, and font delivery for low-bandwidth mobile connections.',
      'Integrated geo-location APIs with custom interactive map layers.'
    ],
    engineeringConsiderations: [
      'Static Site Generation (SSG) with incremental static regeneration (ISR) for high-speed delivery.',
      'Sub-100kb initial JavaScript bundle size budgets.',
      'Comprehensive keyboard navigation flow across interactive maps.',
      'Localization and internationalization readiness.'
    ],
    outcomes: [
      'Sub-1.2s Largest Contentful Paint across 4G mobile devices.',
      'Seamless compliance with UK Government Digital Service (GDS) standards.',
      'Significant increase in online customer self-service transactions.'
    ],
    technologies: ['React', 'TypeScript', 'Next.js', 'Accessibility', 'Performance', 'Tailwind CSS', 'GraphQL'],
    metrics: [
      { label: 'Daily UK Users', value: '1M+' },
      { label: 'Lighthouse Performance', value: '98' },
      { label: 'Mobile Load Time', value: '< 1.2s' }
    ],
    visualType: 'postal'
  },
  {
    slug: 'tirebuyer',
    number: '04',
    title: 'Tirebuyer',
    category: 'E-commerce',
    industry: 'Automotive E-commerce & Logistics',
    role: 'Senior Software Engineer',
    tagline: 'High-conversion e-commerce checkout funnels, dynamic tire-fitment search, and fast UI micro-apps.',
    description:
      'E-commerce frontend engineering focused on responsive customer experiences, performance optimization, reusable UI components, and scalable React development.',
    overview:
      'Built intuitive product discovery, tire-fitment lookup widgets, cart checkout funnels, and installer location finders for Tirebuyer. Optimized the conversion funnel by eliminating layout instability and reducing checkout latency.',
    challenge:
      'Handling multi-parameter product filter matrices (vehicle make, model, year, rim size) with zero delay, and streamlining complex cart multi-step checkout processes.',
    contribution: [
      'Developed custom fitment selector search widgets with instant client-side lookup filtering.',
      'Streamlined checkout step transitions using Framer Motion micro-interactions.',
      'Integrated third-party payment gateways and real-time installer calendar scheduling components.',
      'Reduced e-commerce bundle sizes through dynamic component lazy loading.'
    ],
    engineeringConsiderations: [
      'Stateful URL params syncing for shareable search and cart configurations.',
      'Optimistic cart updates with fallback recovery on API failures.',
      'Comprehensive conversion event tracking and analytics integration.',
      'Edge CDN caching strategies for static product images and assets.'
    ],
    outcomes: [
      'Direct increase in e-commerce checkout completion rate.',
      'Enhanced page load performance across mobile web channels.',
      'Zero layout shift (CLS 0.00) on product detail pages.'
    ],
    technologies: ['React', 'JavaScript', 'TypeScript', 'E-commerce', 'Performance', 'Redux', 'Next.js'],
    metrics: [
      { label: 'CLS Score', value: '0.00' },
      { label: 'Fitment Search Speed', value: '< 50ms' },
      { label: 'Core Web Vitals', value: 'Passed' }
    ],
    visualType: 'ecommerce'
  },
  {
    slug: 'qbe',
    number: '05',
    title: 'QBE Insurance',
    category: 'Insurance Technology',
    industry: 'Enterprise Insurance & Risk Management',
    role: 'Senior Frontend Engineer',
    tagline: 'Enterprise policy quote generation, claims processing portals, and unified design system tokens.',
    description:
      'Designed and developed frontend experiences for an enterprise insurance platform, focusing on scalable architecture, reusable components, APIs, and user experience.',
    overview:
      'Engineered digital policy generation and claims processing platforms for QBE Insurance. Developed reusable UI component libraries, responsive multi-step quote wizard forms, and real-time policy calculation widgets.',
    challenge:
      'Managing dynamic schema-driven form engines with hundreds of conditional risk questions while keeping form rendering fluid and input state decoupled from heavy calculations.',
    contribution: [
      'Created a dynamic schema-driven form builder in React to render complex insurance quote flows.',
      'Created custom atomic design system components distributed via internal npm registries.',
      'Engineered responsive policy breakdown summaries with interactive cost charts.',
      'Mentored frontend developers on modern React standards and TypeScript typing practices.'
    ],
    engineeringConsiderations: [
      'Uncontrolled inputs with React Hook Form for zero re-render input latency.',
      'Schema validation using Zod for synchronized front-end and back-end validation.',
      'Microfrontend integration into legacy enterprise insurance portals.',
      'Automated accessibility testing in continuous integration build stages.'
    ],
    outcomes: [
      'Reduced policy quote issuance completion time by 40%.',
      'Unified design token system implemented across 3 product lines.',
      'High adoption rate of shared form architecture across engineering teams.'
    ],
    technologies: ['React', 'TypeScript', 'REST APIs', 'Design Systems', 'Performance', 'Form Architecture', 'Jest'],
    metrics: [
      { label: 'Quote Completion Time', value: '-40%' },
      { label: 'Form Components', value: '45+ Reusable' },
      { label: 'Design System Coverage', value: '100%' }
    ],
    visualType: 'insurance'
  }
];
