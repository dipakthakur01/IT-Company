'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Search, FileText, Palette, Cpu, Code2, ShieldCheck, Rocket, Wrench, ArrowRight } from 'lucide-react';

const STEPS = [
  { num: '01', title: 'Discovery', desc: 'Stakeholder goals, competitive landscape & technical constraints.', icon: Search },
  { num: '02', title: 'Requirements', desc: 'Detailed user stories, RBAC definitions & API contracts.', icon: FileText },
  { num: '03', title: 'UI/UX Design', desc: 'Figma prototypes, tokenized design systems & accessibility.', icon: Palette },
  { num: '04', title: 'Architecture', desc: 'Normalized MySQL data models, caching layers & API routes.', icon: Cpu },
  { num: '05', title: 'Development', desc: 'Clean TypeScript Next.js frontend & Node.js backend microservices.', icon: Code2 },
  { num: '06', title: 'QA & Security', desc: 'Automated test suites, penetration checks & Core Web Vitals.', icon: ShieldCheck },
  { num: '07', title: 'Deployment', desc: 'Zero-downtime CI/CD pipelines, Docker containerization & SSL.', icon: Rocket },
  { num: '08', title: 'Maintenance', desc: '24/7 SLA retainers, automated offsite backups & monitoring.', icon: Wrench }
];

const PREVIEW_STEPS = [
  { num: '01', title: 'Discovery & Requirements', desc: 'Stakeholder goals, data models, RBAC definition & API contracts.', icon: Search },
  { num: '02', title: 'UI/UX & Architecture', desc: 'Figma prototypes, design tokens, normalized MySQL schema & routing.', icon: Palette },
  { num: '03', title: 'Agile Sprint Engineering', desc: 'Next.js frontend, Node.js APIs, 2-week sprints & bi-weekly staging demos.', icon: Code2 },
  { num: '04', title: 'QA, Launch & Maintenance', desc: 'Automated test suites, zero-downtime CI/CD, SSL & 24/7 SLA retainers.', icon: Rocket }
];

interface DevelopmentProcessProps {
  preview?: boolean;
}

export default function DevelopmentProcess({ preview = false }: DevelopmentProcessProps) {
  const displayedSteps = preview ? PREVIEW_STEPS : STEPS;

  return (
    <section id="process" className="py-12 md:py-16 bg-white border-b border-border">
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
              {preview ? '4-PHASE AGILE WORKFLOW' : 'OUR 8-STAGE METHODOLOGY'}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-text-primary">
              A Disciplined Engineering Process.
            </h2>
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
              {preview
                ? 'We operate in 2-week agile sprints with bi-weekly live staging demos, clear git traceability, and transparent milestone tracking.'
                : 'From initial business discovery to post-launch warranty retainers, explore our end-to-end 8-stage lifecycle.'}
            </p>
          </div>

          {preview && (
            <Link
              href="/process"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-50 text-text-primary font-semibold text-sm border border-border shadow-subtle transition-all hover:text-primary-600 whitespace-nowrap self-start md:self-auto hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Explore All 8 Stages</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedSteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="p-6 rounded-2xl bg-[#F8FAFC] border border-border hover:bg-white hover:shadow-elevated transition-colors relative group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary-600 flex items-center justify-center group-hover:bg-primary-500 group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-2xl font-black text-slate-300 group-hover:text-primary-400 transition-colors">
                    {step.num}
                  </span>
                </div>
                <h3 className="text-base font-bold text-text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Home preview bottom banner */}
        {preview && (
          <div className="mt-10 p-6 rounded-2xl bg-[#F8FAFC] border border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="text-base font-bold text-text-primary">
                Want to Review Our Complete 8-Stage Development Roadmap?
              </h4>
              <p className="text-xs text-text-secondary">
                Detailed breakdowns of sprint planning, git branching strategies, automated QA testing, and SLA warranties.
              </p>
            </div>
            <Link
              href="/process"
              className="px-5 py-2.5 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-semibold text-xs whitespace-nowrap transition-colors flex items-center gap-2 shrink-0 shadow-subtle"
            >
              <span>View Full 8-Stage Methodology</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
