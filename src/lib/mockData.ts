import { ServiceItem, TechnologyItem, ProjectItem, CaseStudyItem, TestimonialItem, TeamMemberItem, BlogItem, FaqItem, CareerPositionItem } from './types';

export const fallbackServices: ServiceItem[] = [
  {
    id: 'srv-001',
    slug: 'web-application-development',
    title: 'Custom Web Application Development',
    short_description: 'High-performance, fault-tolerant enterprise web applications engineered with Next.js, React, Node.js, and cloud-native architecture.',
    full_description: 'We design and engineer enterprise-grade web applications that deliver unmatched performance, ironclad security, and seamless user experiences. From complex CRM and ERP systems to collaborative SaaS workflows, our solutions are engineered for scalable growth.',
    icon: 'Code2',
    delivery_type: 'Agile Full-Cycle / Dedicated Squad',
    technologies: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Express', 'MySQL', 'Docker'],
    deliverables: ['Custom Web Architecture', 'Responsive Next.js Frontend', 'RESTful APIs', 'Automated CI/CD', 'Full Test Coverage'],
    benefits: ['99.9% Uptime SLA', 'Sub-second Load Times', 'Scalable to Millions', 'Role-Based Access Security'],
    is_featured: true,
    sort_order: 1
  },
  {
    id: 'srv-002',
    slug: 'ecommerce-platforms',
    title: 'Enterprise E-Commerce Platforms',
    short_description: 'High-conversion, scalable multi-vendor marketplaces and custom digital commerce solutions with seamless payment and inventory sync.',
    full_description: 'Turn visitors into lifelong buyers. We architect headless and custom e-commerce engines with sub-second page loads, frictionless multi-currency checkouts, intelligent recommendations, and enterprise ERP integrations.',
    icon: 'ShoppingBag',
    delivery_type: 'Milestone / Sprint Based',
    technologies: ['Next.js', 'Node.js', 'MySQL', 'Redis', 'Stripe', 'AWS'],
    deliverables: ['Headless Storefront', 'Merchant Portals', 'Automated Shipping Matrix', 'High-Speed Filters'],
    benefits: ['35% Average Boost in Conversions', 'Zero Downtime During Sales', 'Automated Reconciliation'],
    is_featured: true,
    sort_order: 2
  },
  {
    id: 'srv-003',
    slug: 'custom-software-development',
    title: 'Custom Software & ERP Systems',
    short_description: 'Bespoke business automation software, ERPs, CRM engines, and internal tooling engineered to eliminate operational bottlenecks.',
    full_description: 'Stop compromising with off-the-shelf software. We build custom ERPs, supply chain controllers, finance hubs, and operational dashboards tailored to your exact business rules.',
    icon: 'Cpu',
    delivery_type: 'Fixed Scope or Time & Materials',
    technologies: ['Node.js', 'Express', 'MySQL', 'TypeScript', 'Docker', 'Tailwind CSS'],
    deliverables: ['Interactive Multi-role Dashboards', 'Automated Financial Ledger', 'RBAC Security', 'Detailed Audit Trails'],
    benefits: ['Cut Operational Costs by 40%', 'Eliminate Manual Errors', 'Real-Time Insights'],
    is_featured: true,
    sort_order: 3
  },
  {
    id: 'srv-004',
    slug: 'ui-ux-design-systems',
    title: 'UI/UX Design & Design Systems',
    short_description: 'User-centric, research-backed digital product interfaces and scalable Figma design systems crafted for delightful customer engagement.',
    full_description: 'We bridge human psychology and visual craftsmanship. From interactive wireframing and user journey mapping to pixel-perfect design systems, we craft digital products that captivate users and reinforce brand authority.',
    icon: 'Palette',
    delivery_type: 'Sprint Based',
    technologies: ['Figma', 'Design Tokens', 'Tailwind CSS', 'Framer Motion', 'WCAG 2.1 AA'],
    deliverables: ['High-Fidelity Figma Prototypes', 'Complete Tokenized Design System', 'Micro-interactions Specs', 'Usability Testing Reports'],
    benefits: ['Intuitive User Onboarding', 'Consistent Cross-Platform Brand', 'Decreased User Churn'],
    is_featured: true,
    sort_order: 4
  },
  {
    id: 'srv-005',
    slug: 'api-development-integration',
    title: 'API Engineering & System Integration',
    short_description: 'Secure, high-throughput REST and GraphQL APIs, third-party connector pipelines, and legacy modernization services.',
    full_description: 'Connect disparate systems into a unified business engine. We design OpenAPI-compliant REST APIs, microservices architectures, and robust webhook pipelines capable of handling thousands of concurrent requests.',
    icon: 'Layers',
    delivery_type: 'Agile Delivery',
    technologies: ['Node.js', 'Express', 'OpenAPI/Swagger', 'JWT', 'OAuth2', 'PostgreSQL', 'Redis'],
    deliverables: ['REST API Documentation', 'Developer Sandboxes', 'Rate Limiting & Threat Shielding', 'Webhook Handlers'],
    benefits: ['Seamless Third-Party Ecosystem', 'Ultra-low Latency Under Load', 'Comprehensive Developer Specs'],
    is_featured: true,
    sort_order: 5
  },
  {
    id: 'srv-006',
    slug: 'cloud-devops-deployment',
    title: 'Cloud Infrastructure & DevOps',
    short_description: 'Resilient cloud infrastructure setup on AWS, DigitalOcean, and Docker with automated zero-downtime CI/CD deployment pipelines.',
    full_description: 'Accelerate deployment velocity with reliable, self-healing cloud architectures. We configure production-grade infrastructure, Docker containerization, automated GitHub Actions pipelines, automated backups, and 24/7 observability.',
    icon: 'Cloud',
    delivery_type: 'DevOps-as-a-Service',
    technologies: ['AWS', 'Docker', 'GitHub Actions', 'Nginx', 'Linux', 'Cloudflare', 'Prometheus'],
    deliverables: ['Dockerized Microservices', 'Automated CI/CD Workflows', 'Database Backup Automation', 'SSL & CDN Hardening'],
    benefits: ['Zero-Downtime Deployments', 'Optimized Cloud Spend', 'Proactive Incident Prevention'],
    is_featured: true,
    sort_order: 6
  },
  {
    id: 'srv-007',
    slug: 'ai-integration-intelligent-tools',
    title: 'AI Integration & Intelligent Automation',
    short_description: 'Empower your platform with LLMs, predictive analytics, intelligent agents, and custom workflow automation.',
    full_description: 'Leverage cutting-edge generative AI and machine learning to automate complex tasks, deliver context-aware user assistants, and unlock deep insights from unstructured enterprise data.',
    icon: 'Sparkles',
    delivery_type: 'Proof-of-Concept to Production',
    technologies: ['OpenAI APIs', 'LangChain', 'Node.js', 'Vector DBs', 'Python', 'FastAPI'],
    deliverables: ['RAG Knowledge Base Agents', 'Smart Document Extractors', 'Predictive Recommendation Engines'],
    benefits: ['Automate 60% of Support Volume', 'Instant Data Summarization', 'Competitive Technology Moat'],
    is_featured: true,
    sort_order: 7
  },
  {
    id: 'srv-008',
    slug: 'website-maintenance-support',
    title: 'Website Maintenance & SLA Support',
    short_description: 'Proactive 24/7 monitoring, security patches, performance tuning, and technical SLA retainers for continuous uptime.',
    full_description: 'Your digital presence requires ongoing care. Our dedicated engineers handle regular framework upgrades, daily backups, vulnerability mitigation, and priority bug fixes with guaranteed response SLAs.',
    icon: 'ShieldCheck',
    delivery_type: 'Monthly Retainer SLA',
    technologies: ['Uptime Monitoring', 'Security Scanners', 'MySQL Maintenance', 'Version Control'],
    deliverables: ['Monthly Health Audit Reports', 'Security Patching', 'Automated Offsite Backups', 'Emergency Hotfix Support'],
    benefits: ['Guaranteed Response Time', 'Prevent Costly Breaches', 'Peace of Mind for Leadership'],
    is_featured: false,
    sort_order: 8
  }
];

export const fallbackTechnologies: TechnologyItem[] = [
  { id: 'tech-1', name: 'Next.js', slug: 'nextjs', category: 'frontend', icon: 'Globe', description: 'React enterprise framework with SSR, ISR, and Server Components.', proficiency: 'Core Framework' },
  { id: 'tech-2', name: 'React', slug: 'react', category: 'frontend', icon: 'Atom', description: 'Declarative component library for dynamic user interfaces.', proficiency: 'Core Framework' },
  { id: 'tech-3', name: 'TypeScript', slug: 'typescript', category: 'frontend', icon: 'FileCode', description: 'Strong static typing eliminating runtime pitfalls.', proficiency: 'Standard' },
  { id: 'tech-4', name: 'Tailwind CSS', slug: 'tailwind', category: 'frontend', icon: 'Wind', description: 'Modern utility CSS with design token integration.', proficiency: 'Standard' },
  { id: 'tech-5', name: 'Node.js', slug: 'nodejs', category: 'backend', icon: 'Server', description: 'Event-driven JavaScript runtime for high-throughput APIs.', proficiency: 'Core Backend' },
  { id: 'tech-6', name: 'Express.js', slug: 'express', category: 'backend', icon: 'Layers', description: 'Minimalist enterprise web framework for RESTful microservices.', proficiency: 'Core Backend' },
  { id: 'tech-7', name: 'MySQL', slug: 'mysql', category: 'database', icon: 'Database', description: 'Reliable ACID-compliant relational data persistence.', proficiency: 'Core Database' },
  { id: 'tech-8', name: 'PostgreSQL', slug: 'postgresql', category: 'database', icon: 'HardDrive', description: 'Advanced relational database with native JSONB querying.', proficiency: 'Production' },
  { id: 'tech-9', name: 'Redis', slug: 'redis', category: 'database', icon: 'Zap', description: 'Ultra-fast in-memory cache and queue manager.', proficiency: 'High-Speed' },
  { id: 'tech-10', name: 'AWS Cloud', slug: 'aws', category: 'cloud', icon: 'CloudRain', description: 'Global elastic cloud hosting, S3, RDS, and CloudFront.', proficiency: 'Certified' },
  { id: 'tech-11', name: 'Docker', slug: 'docker', category: 'devops', icon: 'Box', description: 'Containerized deployment parity across environments.', proficiency: 'Core DevOps' },
  { id: 'tech-12', name: 'OpenAI LLMs', slug: 'openai', category: 'ai', icon: 'Sparkles', description: 'Intelligent generative AI agents and semantic search.', proficiency: 'Integrated' }
];

export const fallbackProjects: ProjectItem[] = [
  {
    id: 'prj-001',
    slug: 'apex-fintech-analytics-hub',
    title: 'Apex Financial Intelligence Platform',
    client_name: 'Apex Capital Partners',
    industry: 'Fintech & Wealth Management',
    category: 'Web Applications',
    short_summary: 'Real-time financial analytics dashboard handling high-frequency market data streams with sub-second portfolio valuations and automated reporting.',
    cover_image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    technologies: ['Next.js', 'Node.js', 'Express', 'MySQL', 'Redis', 'Tailwind CSS'],
    year: '2025',
    live_url: 'https://apex-demo.zorventech.com',
    is_featured: true,
    sort_order: 1
  },
  {
    id: 'prj-002',
    slug: 'zenith-luxury-marketplace',
    title: 'Zenith Global Multi-Vendor Marketplace',
    client_name: 'Zenith Retail Group',
    industry: 'E-Commerce & Retail',
    category: 'E-Commerce',
    short_summary: 'Headless multi-vendor marketplace connecting 500+ luxury artisans across 14 countries with automated cross-border currency conversion and inventory logistics.',
    cover_image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    technologies: ['Next.js', 'Node.js', 'MySQL', 'Stripe Connect', 'AWS S3', 'Docker'],
    year: '2025',
    live_url: 'https://zenith-demo.zorventech.com',
    is_featured: true,
    sort_order: 2
  },
  {
    id: 'prj-003',
    slug: 'cura-telemedicine-system',
    title: 'CuraHealth Digital Clinical Portal',
    client_name: 'CuraHealth Network',
    industry: 'Healthcare & Life Sciences',
    category: 'Web Applications',
    short_summary: 'HIPAA-compliant telemedicine portal featuring WebRTC encrypted video consultations, electronic prescriptions, and laboratory EHR synchronization.',
    cover_image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'MySQL', 'WebRTC', 'AWS'],
    year: '2024',
    live_url: 'https://cura-demo.zorventech.com',
    is_featured: true,
    sort_order: 3
  },
  {
    id: 'prj-004',
    slug: 'propstream-real-estate-crm',
    title: 'PropStream Enterprise Property Engine',
    client_name: 'PropStream Realty Group',
    industry: 'Real Estate & PropTech',
    category: 'Custom Software',
    short_summary: 'Commercial real estate ERP and client CRM with dynamic interactive floor plans, virtual 3D tour embeds, and automated lease lifecycle workflows.',
    cover_image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80',
    technologies: ['Next.js', 'Express', 'MySQL', 'Mapbox GL', 'Tailwind CSS'],
    year: '2025',
    live_url: 'https://propstream-demo.zorventech.com',
    is_featured: true,
    sort_order: 4
  }
];

export const fallbackCaseStudies: CaseStudyItem[] = [
  {
    id: 'cs-001',
    project_id: 'prj-001',
    slug: 'apex-fintech-analytics-hub',
    title: 'Scaling Real-Time Financial Intelligence to 250,000 Concurrent Traders',
    client: 'Apex Capital Partners',
    industry: 'Fintech & Wealth Management',
    duration: '5 Months',
    challenge: 'Apex struggled with legacy monolithic software that suffered severe latency spikes during market open hours. Traders experienced 4-6 second chart delays, and portfolio reconciliations required overnight batch processing.',
    solution: 'Zorven Tech engineered a clean micro-service architecture powered by Next.js Server Components, an asynchronous Node.js transaction pipeline, and indexed MySQL with Redis memory tiers. Real-time updates now stream with sub-100ms latency.',
    architecture_overview: 'Frontend decoupled via Next.js App Router; Node.js backend handles ingestion queues; MySQL 8.0 cluster maintains ACID financial ledgers with read replicas.',
    features_developed: [
      'Sub-second real-time streaming market charts',
      'Automated daily portfolio risk simulations',
      'Role-based compliance & audit logs',
      'Customizable widget grid dashboard'
    ],
    development_process: [
      'Discovery & Financial Data Modelling',
      'High-throughput API Architecture Prototyping',
      'Stress Testing under 5x Historical Peak Volume',
      'Phased Production Migration with Zero Downtime'
    ],
    verified_results: [
      { label: 'Latency Reduction', value: '88%' },
      { label: 'Platform Uptime', value: '99.99%' },
      { label: 'Daily Active Volume', value: '$120M+' },
      { label: 'Trader CSAT Score', value: '4.9/5' }
    ],
    cover_image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
    ]
  }
];

export const fallbackTestimonials: TestimonialItem[] = [
  {
    id: 'tst-001',
    client_name: 'Marcus Vance',
    company: 'Apex Capital Partners',
    position: 'Chief Technology Officer',
    project_name: 'Apex Financial Intelligence Hub',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    feedback: 'Zorven Tech transformed our architectural roadmap. Their Next.js and Node.js implementation delivered sub-100ms responses during peak volatility. Truly exceptional engineering standards and transparent project management.',
    is_featured: true
  },
  {
    id: 'tst-002',
    client_name: 'Elena Rostova',
    company: 'Zenith Global Retail',
    position: 'VP of Digital Experience',
    project_name: 'Zenith Luxury Marketplace',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    feedback: 'Our previous platform crashed every Black Friday. Zorven Tech built our marketplace from the ground up, and we handled over 3 million visits this year without a hiccup. Our conversion rate rose by 38%.',
    is_featured: true
  },
  {
    id: 'tst-003',
    client_name: 'Dr. Arthur Sterling',
    company: 'CuraHealth Systems',
    position: 'Chief Medical Officer',
    project_name: 'CuraHealth Telemedicine Portal',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    feedback: 'Healthcare software has zero margin for error. Zorven Tech not only ensured strict compliance, but also created an interface our elderly patients can navigate intuitively. Outstanding delivery team.',
    is_featured: true
  }
];

export const fallbackTeam: TeamMemberItem[] = [
  {
    id: 'team-001',
    name: 'Dipak Thakur',
    position: 'Founder & Chief Architect',
    category: 'leadership',
    avatar: '/founder.jpg',
    expertise: 'Distributed Systems, Cloud Architecture & Tech Strategy',
    linkedin_url: 'https://linkedin.com',
    github_url: 'https://github.com',
    sort_order: 1
  },
  {
    id: 'team-002',
    name: 'Nisha Shrestha',
    position: 'Head of Frontend Engineering',
    category: 'frontend',
    avatar: '/team-profile.png',
    expertise: 'Next.js, TypeScript, Web Performance & Accessibility',
    linkedin_url: 'https://linkedin.com',
    github_url: 'https://github.com',
    sort_order: 2
  },
  {
    id: 'team-003',
    name: 'Rohan Sharma',
    position: 'Lead Backend & Database Architect',
    category: 'backend',
    avatar: '/team-profile.png',
    expertise: 'Node.js, Express, MySQL High-Availability & Security',
    linkedin_url: 'https://linkedin.com',
    github_url: 'https://github.com',
    sort_order: 3
  },
  {
    id: 'team-004',
    name: 'Claire Dupont',
    position: 'Principal UI/UX Product Designer',
    category: 'uiux',
    avatar: '/team-profile.png',
    expertise: 'Design Systems, Human-Computer Interaction & User Research',
    linkedin_url: 'https://linkedin.com',
    github_url: undefined,
    sort_order: 4
  },
  {
    id: 'team-005',
    name: 'Marcus Vance',
    position: 'Lead Cloud & DevOps Architect',
    category: 'cloud',
    avatar: '/team-profile.png',
    expertise: 'AWS Cloud, Docker, Kubernetes, CI/CD & Zero-Downtime Releases',
    linkedin_url: 'https://linkedin.com',
    github_url: 'https://github.com',
    sort_order: 5
  },
  {
    id: 'team-006',
    name: 'Elena Rostova',
    position: 'Senior Full-Stack & Security Engineer',
    category: 'security',
    avatar: '/team-profile.png',
    expertise: 'TypeScript, Next.js Edge, REST Security & Performance Audits',
    linkedin_url: 'https://linkedin.com',
    github_url: 'https://github.com',
    sort_order: 6
  }
];

export const fallbackFaqs: FaqItem[] = [
  {
    id: 'faq-001',
    category: 'Project & Scope',
    question: 'How do you structure project proposals and scope estimates?',
    answer: 'We provide structured milestone-based proposals tailored to your project scope, deliverables, and technical architecture. Contact our solutions team or submit a quote request for a detailed, itemized technical proposal.',
    sort_order: 1
  },
  {
    id: 'faq-002',
    category: 'Project & Scope',
    question: 'How long does development take from start to production launch?',
    answer: 'A standard professional business website takes 2 to 4 weeks. Medium-scale web apps and e-commerce platforms take 4 to 8 weeks. Large-scale enterprise systems with custom ERP modules or multi-role dashboards typically take 8 to 14 weeks. We follow 2-week agile sprints with bi-weekly live staging demos.',
    sort_order: 2
  },
  {
    id: 'faq-003',
    category: 'Technical',
    question: 'Which technology stack do you recommend for our project?',
    answer: 'Our recommended enterprise foundation is Next.js with TypeScript on the frontend, Node.js + Express on the backend, and MySQL for relational data persistence. We also support Laravel, Python/Django, PostgreSQL, and cloud deployments on AWS and Docker based on your specific requirements.',
    sort_order: 3
  },
  {
    id: 'faq-004',
    category: 'Ownership & Maintenance',
    question: 'Do we own 100% of the source code and intellectual property upon delivery?',
    answer: 'Yes, absolutely. Once final milestone payment is completed, 100% of the intellectual property, git repositories, database schemas, and deployment assets are transferred to your organization with no hidden licensing fees.',
    sort_order: 4
  },
  {
    id: 'faq-005',
    category: 'Ownership & Maintenance',
    question: 'Do you provide ongoing technical support and maintenance after launch?',
    answer: 'Yes. Every project includes 30 to 60 days of complimentary post-launch warranty support. Additionally, we provide flexible monthly SLA support retainers covering security updates, database backups, uptime monitoring, and continuous feature enhancements.',
    sort_order: 5
  }
];

export const fallbackBlogs: BlogItem[] = [
  {
    id: 'blog-001',
    slug: 'why-nextjs-is-the-standard-for-enterprise-web-platforms-2026',
    title: 'Why Next.js is the Uncontested Standard for Enterprise Web Platforms in 2026',
    category: 'Web Development',
    excerpt: 'An in-depth architectural breakdown of how React Server Components, Partial Prerendering, and edge data routing empower modern IT systems.',
    content: `When building digital platforms for enterprise scale, engineering leaders must balance three competing priorities: developer velocity, end-user load speeds, and long-term maintainability. 

For the past several years, Next.js has proven itself as the optimal solution. In this technical deep dive, we explore how Server Components eliminate unnecessary client-side bundle bloat, how streaming SSR ensures immediate visual feedback, and how clean API routing unifies corporate workflows.`,
    cover_image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    author_name: 'Dipak Thakur',
    reading_time: '6 min read',
    tags: ['Next.js', 'TypeScript', 'Web Architecture', 'Performance'],
    is_published: true,
    views_count: 1420
  },
  {
    id: 'blog-002',
    slug: 'optimizing-mysql-8-for-high-concurrency-web-apps',
    title: 'Architecting & Optimizing MySQL 8.0 for High-Throughput REST APIs',
    category: 'Database & Backend',
    excerpt: 'Practical indexing strategies, connection pool sizing, and query caching methods for handling millions of requests with rock-solid consistency.',
    content: `Relational databases remain the backbone of mission-critical commercial systems. While NoSQL had its hype cycle, ACID compliance and foreign key relational integrity are indispensable for financial ledgers, user permissions, and order management.`,
    cover_image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=1200&q=80',
    author_name: 'Rohan Sharma',
    reading_time: '8 min read',
    tags: ['MySQL', 'Backend', 'Database Optimization', 'Node.js'],
    is_published: true,
    views_count: 980
  }
];

export const fallbackCareers: CareerPositionItem[] = [
  {
    id: 'job-001',
    slug: 'senior-full-stack-engineer-nextjs-nodejs',
    title: 'Senior Full-Stack Engineer (Next.js & Node.js)',
    department: 'Engineering',
    work_type: 'Full-Time / Hybrid',
    location: 'Kathmandu / Remote',
    experience: '4+ Years',
    deadline: 'Rolling Basis',
    description: 'We are seeking an experienced Full-Stack Engineer to lead the architecture and delivery of modern Next.js and Node.js enterprise platforms.',
    requirements: [
      '4+ years hands-on experience with TypeScript, React, Next.js, and Node.js',
      'Strong command of relational databases (MySQL or PostgreSQL) and schema design',
      'Demonstrated expertise in building secure RESTful APIs with RBAC',
      'Experience with Docker, CI/CD pipelines, and cloud deployment'
    ],
    responsibilities: [
      'Architect scalable client web applications from specification to launch',
      'Write clean, modular, self-documenting code with comprehensive unit/integration tests',
      'Collaborate directly with product designers and client technical stakeholders'
    ]
  },
  {
    id: 'job-002',
    slug: 'lead-ui-ux-product-designer',
    title: 'Lead UI/UX Product Designer',
    department: 'Design',
    work_type: 'Full-Time',
    location: 'Kathmandu / Hybrid',
    experience: '3+ Years',
    deadline: 'Rolling Basis',
    description: 'Shape the visual language and interaction design for world-class web and mobile digital products built for international clients.',
    requirements: [
      'Proficiency with Figma, tokenized design systems, and responsive layouts',
      'Deep understanding of user ergonomics, typography, and accessibility (WCAG)',
      'Strong portfolio showcasing complex SaaS dashboards or multi-step enterprise workflows'
    ],
    responsibilities: [
      'Conduct stakeholder discovery sessions and create wireframes and interactive prototypes',
      'Maintain and evolve our reusable component design system',
      'Partner with frontend developers to ensure 100% pixel-perfect implementation'
    ]
  }
];
