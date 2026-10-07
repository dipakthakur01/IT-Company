'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Server, Store, Briefcase, GraduationCap, Building2, Calendar, LayoutDashboard, Database } from 'lucide-react';

const SOLUTIONS = [
  {
    id: 'saas',
    title: 'SaaS & Subscription Applications',
    desc: 'Multi-tenant web applications with role permissions, automated Stripe billing, onboarding workflows, and scalable databases.',
    icon: Server,
    color: 'from-blue-500 to-cyan-500',
    tags: ['Multi-tenant', 'Stripe Billing', 'Next.js & Node']
  },
  {
    id: 'marketplaces',
    title: 'Multi-Vendor E-Commerce Marketplaces',
    desc: 'Bespoke merchant portals, commission splits, dynamic shipping matrices, automated tax calculation, and real-time inventory.',
    icon: Store,
    color: 'from-emerald-500 to-teal-500',
    tags: ['Merchant Split', 'Real-time Stock', 'Headless']
  },
  {
    id: 'erp-crm',
    title: 'Custom ERP & Business Operations',
    desc: 'Centralized operational engines replacing fragmented spreadsheets with real-time financial tracking and supply chain controls.',
    icon: Database,
    color: 'from-violet-500 to-purple-500',
    tags: ['Ledgers', 'Inventory', 'Audit Logs']
  },
  {
    id: 'job-portals',
    title: 'Recruitment & Job Portals',
    desc: 'Resume parsing engines, applicant tracking systems (ATS), candidate video portfolios, and automated employer matching.',
    icon: Briefcase,
    color: 'from-amber-500 to-orange-500',
    tags: ['ATS Pipeline', 'Resume Indexing', 'Candidate Filter']
  },
  {
    id: 'lms',
    title: 'LMS & E-Learning Platforms',
    desc: 'Video course streaming, student progress tracking, quizzes, automated certificate generation, and live tutor booking.',
    icon: GraduationCap,
    color: 'from-indigo-500 to-blue-500',
    tags: ['Video Streaming', 'Quizzes', 'Certificates']
  },
  {
    id: 'proptech',
    title: 'Real Estate & PropTech Systems',
    desc: 'Interactive map searches, virtual 3D tour embeds, CRM for agents, automated lead distribution, and digital lease signing.',
    icon: Building2,
    color: 'from-rose-500 to-pink-500',
    tags: ['Mapbox GL', 'Virtual Tours', 'Lease Mgmt']
  },
  {
    id: 'booking',
    title: 'Hospitality & Healthcare Booking',
    desc: 'Real-time reservation engines, banquet availability calendars, telemedicine appointment scheduling, and SMS/WhatsApp reminders.',
    icon: Calendar,
    color: 'from-sky-500 to-blue-600',
    tags: ['Slot Booking', 'WhatsApp Alerts', 'Instant Sync']
  },
  {
    id: 'dashboards',
    title: 'Enterprise Analytics & Intelligence Dashboards',
    desc: 'Data-rich operational control centers featuring real-time charts, exportable analytics, user management, and security audit trails.',
    icon: LayoutDashboard,
    color: 'from-slate-700 to-slate-900',
    tags: ['RBAC Security', 'Data Exports', 'Analytics']
  }
];

interface SolutionsSectionProps {
  preview?: boolean;
}

export default function SolutionsSection({ preview = false }: SolutionsSectionProps) {
  const displayedSolutions = preview ? SOLUTIONS.slice(0, 4) : SOLUTIONS;

  return (
    <section id="solutions" className="py-12 md:py-16 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-10 gap-6"
        >
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-primary-600 bg-primary-50 px-3 py-1 rounded-full border border-primary-100">
              {preview ? 'TURNKEY SOLUTIONS PREVIEW' : 'SOLUTIONS WE ARCHITECT'}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-text-primary">
              Turnkey Digital Systems Built for Your Industry.
            </h2>
            <p className="text-base sm:text-lg text-text-secondary">
              {preview
                ? 'High-demand architectural blueprints designed for rapid go-to-market. Explore our solutions directory for full technical specifications.'
                : 'We don’t deliver generic templates. Each solution is architected around your industry’s regulatory, operational, and user experience demands.'}
            </p>
          </div>

          {preview && (
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#F4F5F7] hover:bg-slate-200 text-text-primary font-semibold text-sm border border-border shadow-subtle transition-all hover:text-primary-600 whitespace-nowrap self-start md:self-auto hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Explore All 8 Solutions</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedSolutions.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group relative rounded-2xl bg-[#F8FAFC] border border-border p-6 hover:bg-white hover:shadow-elevated transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200/80 shadow-subtle flex items-center justify-center text-primary-600 mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-text-primary mb-2 group-hover:text-primary-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-text-secondary leading-relaxed mb-4">
                    {item.desc}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {item.tags.map((t) => (
                      <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-200/60 text-slate-700">
                        {t}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/solutions#${item.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-600 hover:text-primary-700 group-hover:underline"
                  >
                    <span>Explore Solution Specs</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Home Preview Callout Banner */}
        {preview && (
          <div className="mt-10 p-6 rounded-2xl bg-[#F8FAFC] border border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="text-base font-bold text-text-primary">
                Need LMS, PropTech Portals, Booking Calendars, or Analytics Dashboards?
              </h4>
              <p className="text-xs text-text-secondary">
                We have pre-engineered blueprints across 8 core industry models with full source code ownership.
              </p>
            </div>
            <Link
              href="/solutions"
              className="px-5 py-2.5 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-semibold text-xs whitespace-nowrap transition-colors flex items-center gap-2 shrink-0 shadow-subtle"
            >
              <span>View All 8 Solutions</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
