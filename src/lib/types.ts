export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  short_description: string;
  full_description: string;
  icon: string;
  delivery_type: string;
  technologies: string[];
  deliverables: string[];
  benefits: string[];
  is_featured: boolean;
  sort_order: number;
}

export interface TechnologyItem {
  id: string;
  name: string;
  slug: string;
  category: 'frontend' | 'backend' | 'database' | 'cloud' | 'devops' | 'cms' | 'mobile' | 'ai';
  icon: string;
  description: string;
  proficiency: string;
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  client_name: string;
  industry: string;
  category: string;
  short_summary: string;
  cover_image: string;
  technologies: string[];
  year: string;
  live_url?: string;
  is_featured: boolean;
  sort_order: number;
}

export interface CaseStudyItem {
  id: string;
  project_id?: string;
  slug: string;
  title: string;
  client: string;
  industry: string;
  duration: string;
  challenge: string;
  solution: string;
  architecture_overview: string;
  features_developed: string[];
  development_process: string[];
  verified_results: { label: string; value: string }[];
  cover_image: string;
  screenshots: string[];
}

export interface TestimonialItem {
  id: string;
  client_name: string;
  company: string;
  position: string;
  project_name: string;
  avatar: string;
  rating: number;
  feedback: string;
  is_featured: boolean;
}

export interface TeamMemberItem {
  id: string;
  name: string;
  position: string;
  category: 'leadership' | 'frontend' | 'backend' | 'fullstack' | 'uiux' | 'cloud' | 'qa' | 'security';
  avatar: string;
  expertise: string;
  linkedin_url?: string;
  github_url?: string;
  sort_order: number;
}

export interface BlogItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  cover_image: string;
  author_name: string;
  reading_time: string;
  tags: string[];
  is_published: boolean;
  views_count?: number;
}

export interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
  sort_order: number;
}

export interface CareerPositionItem {
  id: string;
  slug: string;
  title: string;
  department: string;
  work_type: string;
  location: string;
  experience: string;
  deadline: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
}
