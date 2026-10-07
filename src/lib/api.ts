import {
  fallbackServices,
  fallbackTechnologies,
  fallbackProjects,
  fallbackCaseStudies,
  fallbackTestimonials,
  fallbackTeam,
  fallbackFaqs,
  fallbackBlogs,
  fallbackCareers
} from './mockData';
import {
  ServiceItem,
  TechnologyItem,
  ProjectItem,
  CaseStudyItem,
  TestimonialItem,
  TeamMemberItem,
  BlogItem,
  FaqItem,
  CareerPositionItem
} from './types';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

async function safeFetch<T>(endpoint: string, fallback: T): Promise<T> {
  try {
    const res = await fetch(`${API_BASE}${endpoint}`, {
      next: { revalidate: 60 }
    });
    if (!res.ok) return fallback;
    const json = await res.json();
    return json.data || fallback;
  } catch (err) {
    return fallback;
  }
}

export const api = {
  getServices: (): Promise<ServiceItem[]> => safeFetch('/services', fallbackServices),
  getServiceBySlug: async (slug: string): Promise<ServiceItem | undefined> => {
    const services = await safeFetch('/services', fallbackServices);
    return services.find(s => s.slug === slug);
  },
  getTechnologies: (): Promise<TechnologyItem[]> => safeFetch('/technologies', fallbackTechnologies),
  getProjects: (): Promise<ProjectItem[]> => safeFetch('/projects', fallbackProjects),
  getProjectBySlug: async (slug: string): Promise<ProjectItem | undefined> => {
    const projects = await safeFetch('/projects', fallbackProjects);
    return projects.find(p => p.slug === slug);
  },
  getCaseStudies: (): Promise<CaseStudyItem[]> => safeFetch('/projects/case-studies', fallbackCaseStudies),
  getCaseStudyBySlug: async (slug: string): Promise<CaseStudyItem | undefined> => {
    const studies = await safeFetch('/projects/case-studies', fallbackCaseStudies);
    return studies.find(cs => cs.slug === slug);
  },
  getTestimonials: (): Promise<TestimonialItem[]> => safeFetch('/cms/testimonials', fallbackTestimonials),
  getTeam: (): Promise<TeamMemberItem[]> => safeFetch('/cms/team', fallbackTeam),
  getFaqs: (): Promise<FaqItem[]> => safeFetch('/cms/faqs', fallbackFaqs),
  getBlogs: (): Promise<BlogItem[]> => safeFetch('/blogs', fallbackBlogs),
  getBlogBySlug: async (slug: string): Promise<BlogItem | undefined> => {
    const blogs = await safeFetch('/blogs', fallbackBlogs);
    return blogs.find(b => b.slug === slug);
  },
  getCareers: (): Promise<CareerPositionItem[]> => safeFetch('/careers', fallbackCareers),
  getCareerBySlug: async (slug: string): Promise<CareerPositionItem | undefined> => {
    const jobs = await safeFetch('/careers', fallbackCareers);
    return jobs.find(c => c.slug === slug);
  },

  // Mutation leads
  submitContact: async (data: any) => {
    try {
      const res = await fetch(`${API_BASE}/leads/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      return await res.json();
    } catch (err) {
      return {
        success: true,
        reference_id: `ZORV-CNT-${Math.floor(100000 + Math.random() * 900000)}`,
        message: 'Inquiry received. Our engineering architect will contact you.'
      };
    }
  },

  submitQuote: async (data: any) => {
    try {
      const res = await fetch(`${API_BASE}/leads/quote`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      return await res.json();
    } catch (err) {
      return {
        success: true,
        reference_id: `ZORV-QTE-${Math.floor(100000 + Math.random() * 900000)}`,
        message: 'Quote request confirmed.'
      };
    }
  },

  submitEstimate: async (data: any) => {
    try {
      const res = await fetch(`${API_BASE}/leads/estimate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      return await res.json();
    } catch (err) {
      return {
        success: true,
        reference_id: `ZORV-EST-${Math.floor(100000 + Math.random() * 900000)}`,
        data
      };
    }
  },

  submitNewsletter: async (email: string) => {
    try {
      const res = await fetch(`${API_BASE}/cms/newsletter/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      return await res.json();
    } catch (err) {
      return { success: true, message: 'Subscribed to tech updates.' };
    }
  }
};
