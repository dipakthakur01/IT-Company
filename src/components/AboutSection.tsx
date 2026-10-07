'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, ShieldCheck, Zap, Code, Users } from 'lucide-react';

interface AboutSectionProps {
  isAboutPage?: boolean;
}

export default function AboutSection({ isAboutPage = false }: AboutSectionProps) {
  return (
    <section className="py-12 md:py-16 bg-white border-b border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Editorial narrative */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-primary-600 bg-primary-50 px-3 py-1 rounded-full border border-primary-100">
              ABOUT US
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-text-primary leading-tight">
              Technology Built Around Your Business, Not the Other Way Around.
            </h2>

            <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
              We are an engineering-driven digital partner. We help ambitious companies translate complex operational workflows into intuitive web applications, high-conversion digital platforms, and robust enterprise software.
            </p>

            <div className="space-y-3 pt-2 text-text-secondary text-sm">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-blue-100 text-primary-600 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle className="w-3.5 h-3.5" />
                </div>
                <span><strong>Fixed Core Architecture:</strong> Next.js on the frontend, Node.js + Express on the backend, and MySQL for reliable, normalized data persistence.</span>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-blue-100 text-primary-600 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle className="w-3.5 h-3.5" />
                </div>
                <span><strong>Tailored Solution Stacks:</strong> Flexible delivery matching client business constraints across e-commerce, custom ERP, cloud services, and AI integrations.</span>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-blue-100 text-primary-600 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle className="w-3.5 h-3.5" />
                </div>
                <span><strong>100% Intellectual Property Ownership:</strong> You own the complete source code, git history, database schemas, and production environments.</span>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              {isAboutPage ? (
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-semibold text-sm transition-all hover:-translate-y-0.5 active:translate-y-0 shadow-premium"
                >
                  <span>Start Project Discovery</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              ) : (
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-all hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Read Full Company Story</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              )}
              <Link
                href="/process"
                className="inline-flex items-center gap-1.5 px-4 py-3 text-sm font-semibold text-text-secondary hover:text-primary-600 transition-colors"
              >
                <span>Our 8-Stage Process</span>
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Editable Metrics & Pillars */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {[
              {
                icon: Zap,
                color: 'bg-blue-50 text-primary-600',
                value: '120+',
                title: 'Projects Completed',
                desc: 'Delivered on schedule with comprehensive testing and zero regressions.'
              },
              {
                icon: ShieldCheck,
                color: 'bg-emerald-50 text-emerald-600',
                value: '99.9%',
                title: 'SLA Uptime',
                desc: 'Continuous production observability, automated backups, and security patching.'
              },
              {
                icon: Code,
                color: 'bg-violet-50 text-violet-600',
                value: '24+',
                title: 'Technologies Mastered',
                desc: 'From modern React/Next.js to legacy system database refactoring.'
              },
              {
                icon: Users,
                color: 'bg-pink-50 text-pink-600',
                value: '24/7',
                title: 'Engineering Retainers',
                desc: 'Dedicated support squads ensuring your mission-critical systems never stall.'
              }
            ].map((col, idx) => {
              const Icon = col.icon;
              return (
                <motion.div
                  key={col.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.45, delay: idx * 0.1 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="p-6 rounded-2xl bg-[#F8FAFC] border border-border space-y-2 hover:bg-white hover:shadow-elevated transition-all"
                >
                  <div className={`w-10 h-10 rounded-xl ${col.color} flex items-center justify-center mb-3`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-3xl font-extrabold text-text-primary">{col.value}</div>
                  <div className="text-xs font-bold text-text-primary">{col.title}</div>
                  <p className="text-xs text-text-secondary leading-relaxed">{col.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
