'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Layers, Maximize2, FileCode, Smartphone, Lock, GitPullRequest, Sliders, LifeBuoy, ArrowRight } from 'lucide-react';

const REASONS = [
  {
    icon: Layers,
    title: 'Technology Flexibility',
    desc: 'We select the engineering stack that best serves your business objectives, rather than forcing a rigid proprietary framework.'
  },
  {
    icon: Maximize2,
    title: 'Scalable Architecture',
    desc: 'Database connection pools, caching tiers, and stateless REST endpoints engineered to handle surging user volume without regressions.'
  },
  {
    icon: FileCode,
    title: 'Clean Development Standards',
    desc: 'Strict TypeScript typing, modular architecture, comprehensive documentation, and zero messy spaghetti code.'
  },
  {
    icon: Smartphone,
    title: 'Responsive & Accessible',
    desc: 'Flawless experiences across mobile, tablet, and desktop breakpoints with strict WCAG 2.1 accessibility adherence.'
  },
  {
    icon: Lock,
    title: 'Security-First Mindset',
    desc: 'Parameterized SQL queries, secure JWT cookies, rate limiting, and server-side RBAC protection from day one.'
  },
  {
    icon: GitPullRequest,
    title: 'Transparent Sprints',
    desc: 'You have continuous access to our staging environments, sprint roadmaps, and git repositories.'
  },
  {
    icon: Sliders,
    title: 'Self-Serve Content Management',
    desc: 'Manage your hero copy, blogs, portfolio projects, leads, and settings directly without hiring developers for text edits.'
  },
  {
    icon: LifeBuoy,
    title: 'Long-Term Support Retainers',
    desc: 'We do not vanish after deployment. We offer proactive SLA monitoring, security audits, and continuous feature expansion.'
  }
];

interface WhyChooseUsSectionProps {
  preview?: boolean;
}

export default function WhyChooseUsSection({ preview = false }: WhyChooseUsSectionProps) {
  const displayedReasons = preview ? REASONS.slice(0, 4) : REASONS;

  return (
    <section className="py-12 md:py-16 bg-[#F4F5F7] border-b border-border">
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
              {preview ? 'CORE ADVANTAGES' : 'WHY CHOOSE ZORVEN TECH'}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-text-primary">
              Engineering Rigor Meets Business Value.
            </h2>
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
              {preview
                ? 'Core engineering standards that set our deliverables apart from off-the-shelf templates.'
                : 'Here are eight practical reasons technology leaders and founders trust us with their critical digital products.'}
            </p>
          </div>

          {preview && (
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-50 text-text-primary font-semibold text-sm border border-border shadow-subtle transition-all hover:text-primary-600 whitespace-nowrap self-start md:self-auto hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>About Zorven Tech</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedReasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="p-6 rounded-2xl bg-white border border-border shadow-subtle hover:shadow-elevated transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary-600 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-text-primary mb-2">
                    {r.title}
                  </h3>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    {r.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Home preview bottom banner */}
        {preview && (
          <div className="mt-10 p-6 rounded-2xl bg-white border border-border shadow-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="text-base font-bold text-text-primary">
                Want to Learn More About Our Company Story & Meet Our Architects?
              </h4>
              <p className="text-xs text-text-secondary">
                Read our core founding values, intellectual property guarantees, and leadership background.
              </p>
            </div>
            <Link
              href="/about"
              className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs whitespace-nowrap transition-colors flex items-center gap-2 shrink-0"
            >
              <span>Read Full Company Story</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
