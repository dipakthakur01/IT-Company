'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Target,
  Compass,
  ShieldCheck,
  Zap,
  Code2,
  HeartHandshake,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Cpu,
  Lock,
  Globe2
} from 'lucide-react';

export default function MissionVisionSection() {
  const [activeTab, setActiveTab] = useState<'mission' | 'vision'>('mission');

  const values = [
    {
      icon: Code2,
      badge: 'CRAFTSMANSHIP',
      title: 'Architectural Discipline',
      desc: 'We never take shortcuts. Database schemas are normalized, API endpoints are validated, and frontends are strictly typed and accessible.',
      color: 'from-blue-500/10 to-indigo-500/10 text-primary-600 border-blue-200/60'
    },
    {
      icon: ShieldCheck,
      badge: 'TRANSPARENCY',
      title: '100% Client Ownership',
      desc: 'You retain complete ownership of all source code, git history, and cloud environments. We operate with zero vendor lock-in.',
      color: 'from-emerald-500/10 to-teal-500/10 text-emerald-600 border-emerald-200/60'
    },
    {
      icon: Zap,
      badge: 'VELOCITY',
      title: 'Speed with Stability',
      desc: 'Rapid iteration cycles driven by automated CI/CD pipelines, modern Next.js server components, and sub-second response standards.',
      color: 'from-amber-500/10 to-orange-500/10 text-amber-600 border-amber-200/60'
    },
    {
      icon: HeartHandshake,
      badge: 'COMMITMENT',
      title: 'Long-Term Partnership',
      desc: 'We do not disappear post-launch. We provide proactive SLA observability, security audits, and continuous architectural advisory.',
      color: 'from-purple-500/10 to-pink-500/10 text-purple-600 border-purple-200/60'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-b border-border relative overflow-hidden">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-50 rounded-full blur-3xl opacity-60 pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-60 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-18 space-y-4">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-primary-600 bg-primary-50 px-3.5 py-1.5 rounded-full border border-primary-100">
            <Sparkles className="w-3.5 h-3.5 text-primary-500 animate-spin" style={{ animationDuration: '8s' }} />
            <span>PURPOSE & STRATEGIC DIRECTION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-text-primary">
            Our Mission, Vision & Core Values.
          </h2>

          <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
            Founded with an engineer-first philosophy to bridge technical excellence with tangible business growth.
          </p>
        </div>

        {/* Mission & Vision Dual Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 md:mb-20">
          {/* Card 1: Our Mission */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="relative rounded-3xl bg-gradient-to-br from-[#F8FAFC] via-white to-primary-50/20 border border-border p-8 sm:p-10 shadow-subtle hover:shadow-elevated transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary-600 text-white flex items-center justify-center shadow-lg shadow-primary-500/20 group-hover:scale-105 transition-transform">
                  <Target className="w-7 h-7" />
                </div>
                <span className="font-mono text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-primary-100/70 text-primary-700 border border-primary-200">
                  OUR MISSION
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-text-primary tracking-tight mb-4">
                Engineering Scalable Systems for Real Business Growth.
              </h3>

              <p className="text-text-secondary text-sm sm:text-base leading-relaxed mb-8">
                To empower forward-thinking companies and leaders with high-throughput digital platforms, rock-solid APIs, and intuitive user experiences—turning complex operational bottlenecks into clear, sustainable competitive advantages.
              </p>

              {/* 3 Mission Pillars */}
              <div className="space-y-3.5 pt-4 border-t border-slate-100">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-text-primary uppercase tracking-wide">Zero Technical Debt Mindset</h4>
                    <p className="text-xs text-text-secondary mt-0.5">Strict typing, modular components, and automated tests so systems run smoothly for years.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-text-primary uppercase tracking-wide">Direct Architectural Oversight</h4>
                    <p className="text-xs text-text-secondary mt-0.5">Direct collaboration with senior engineers, eliminating middle management and communication delays.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-text-primary uppercase tracking-wide">100% Code & IP Autonomy</h4>
                    <p className="text-xs text-text-secondary mt-0.5">Complete ownership of source code, deployment pipelines, and database credentials.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 flex items-center gap-2 text-xs font-mono font-semibold text-primary-600">
              <span>FOCUSED ON DELIVERING PRODUCTION RIGOR</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </motion.div>

          {/* Card 2: Our Vision */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative rounded-3xl bg-gradient-to-br from-[#F8FAFC] via-white to-blue-50/30 border border-border p-8 sm:p-10 shadow-subtle hover:shadow-elevated transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-slate-900 text-white flex items-center justify-center shadow-lg shadow-slate-900/20 group-hover:scale-105 transition-transform">
                  <Compass className="w-7 h-7 text-accent-cyan" />
                </div>
                <span className="font-mono text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-800 border border-slate-200">
                  OUR VISION
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-text-primary tracking-tight mb-4">
                The Global Benchmark for Transparent Systems Engineering.
              </h3>

              <p className="text-text-secondary text-sm sm:text-base leading-relaxed mb-8">
                To be the premier engineering firm trusted by enterprise leaders and high-growth brands worldwide—renowned not for marketing jargon or bloated retainers, but for craftsmanship, sub-second performance, and unyielding reliability.
              </p>

              {/* 3 Vision Strategic Targets */}
              <div className="space-y-3.5 pt-4 border-t border-slate-100">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-100 text-primary-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Globe2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-text-primary uppercase tracking-wide">Global Edge Distribution</h4>
                    <p className="text-xs text-text-secondary mt-0.5">Delivering sub-50ms TTFB worldwide with modern edge caching, microservices, and CDN routing.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-100 text-primary-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Lock className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-text-primary uppercase tracking-wide">Enterprise Security & High SLA</h4>
                    <p className="text-xs text-text-secondary mt-0.5">Bank-grade data encryption, automated pen-testing, and continuous 99.9% uptime monitoring.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-100 text-primary-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Cpu className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-text-primary uppercase tracking-wide">Self-Serve Architecture</h4>
                    <p className="text-xs text-text-secondary mt-0.5">Equipping clients with custom intuitive dashboards and CMS controls for total day-to-day autonomy.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 flex items-center gap-2 text-xs font-mono font-semibold text-slate-800">
              <span>SETTING THE STANDARD FOR MODERN SOFTWARE</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </motion.div>
        </div>

        {/* 4 Core Pillars / Guiding Principles */}
        <div className="pt-8 border-t border-slate-100">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-text-muted">
              OPERATIONAL PILLARS
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-text-primary tracking-tight">
              Values That Drive Every Line of Code.
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className={`p-6 rounded-2xl bg-white border ${v.color} shadow-subtle hover:shadow-elevated transition-all flex flex-col justify-between`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-[10px] font-bold tracking-wider px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">
                        {v.badge}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-text-primary mb-2">
                      {v.title}
                    </h4>

                    <p className="text-xs text-text-secondary leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
