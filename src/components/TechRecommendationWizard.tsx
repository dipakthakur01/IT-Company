'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Check, Server, Database, Globe, Cloud, RefreshCw } from 'lucide-react';

export default function TechRecommendationWizard() {
  const [projectType, setProjectType] = useState('saas');
  const [trafficTier, setTrafficTier] = useState('medium');
  const [priority, setPriority] = useState('scale');

  // Dynamic stack recommendation generator
  const getRecommendation = () => {
    if (projectType === 'ecommerce') {
      return {
        frontend: 'Next.js 14 (Headless Commerce Storefront)',
        backend: 'Node.js + Express + Stripe Connect Engine',
        database: 'MySQL 8.0 (ACID Ledger) + Redis Caching',
        cloud: 'AWS (S3 + CloudFront CDN + RDS Cluster)',
        reason: 'Optimal for sub-second page loads, zero downtime during flash sales, and PCI-compliant payment flows.'
      };
    } else if (projectType === 'erp') {
      return {
        frontend: 'Next.js + TypeScript + Tailwind Data Grid',
        backend: 'Node.js + Express + Granular RBAC Middleware',
        database: 'MySQL 8.0 (Relational Transactions & Indexes)',
        cloud: 'Docker Containerized Cluster with Automated Backups',
        reason: 'Maximum relational integrity for double-entry financial journals, inventory tracking, and complex multi-role workflows.'
      };
    } else if (projectType === 'corporate') {
      return {
        frontend: 'Next.js (Static Export / ISR for Core Web Vitals)',
        backend: 'Node.js Micro-service for Leads & Inquiries',
        database: 'MySQL with Central Content Hub',
        cloud: 'Vercel / Cloudflare Edge Network',
        reason: 'Guarantees 100/100 Google Lighthouse scores, instant global TTFB, and seamless content editing by marketing teams.'
      };
    } else {
      // Default: SaaS
      return {
        frontend: 'Next.js App Router (React Server Components)',
        backend: 'Node.js + Express REST APIs with JWT & Rate Limiting',
        database: 'MySQL 8.0 with Read Replicas + Redis Session Store',
        cloud: 'AWS ECS / Docker on Ubuntu Linux with CI/CD',
        reason: 'Engineered for seamless multitenancy, rapid feature velocity, and effortless scaling from thousands to millions of users.'
      };
    }
  };

  const rec = getRecommendation();

  return (
    <section className="py-12 md:py-16 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#0B0F19] text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden border border-slate-800 shadow-elevated">
          {/* Background flares */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left side: interactive inputs */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-950/80 border border-primary-800 text-primary-300 text-xs font-mono font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-primary-400" />
                <span>Interactive Stack Recommender</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                Find the Right Architecture for Your Project.
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                Answer 3 quick criteria to receive our technical squad&apos;s tailored stack recommendation.
              </p>

              {/* Step 1: Project Type */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">1. Project Category</label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'saas', label: 'Custom SaaS Platform' },
                    { id: 'ecommerce', label: 'E-Commerce Marketplace' },
                    { id: 'erp', label: 'Internal ERP / CRM Tool' },
                    { id: 'corporate', label: 'Corporate & Lead Gen' }
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setProjectType(item.id)}
                      className={`px-3.5 py-2.5 rounded-xl text-xs font-medium text-left transition-all border ${
                        projectType === item.id
                          ? 'bg-primary-600/30 border-primary-500 text-white font-bold shadow-subtle'
                          : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Traffic Scale */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">2. Expected Monthly Traffic</label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'starter', label: '< 10k Visits' },
                    { id: 'medium', label: '10k – 100k' },
                    { id: 'enterprise', label: '100k+ Scale' }
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setTrafficTier(item.id)}
                      className={`px-3 py-2 rounded-xl text-xs font-medium text-center transition-all border ${
                        trafficTier === item.id
                          ? 'bg-primary-600/30 border-primary-500 text-white font-bold'
                          : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Priority */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">3. Primary Business Priority</label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'speed', label: 'Fastest Launch' },
                    { id: 'scale', label: 'High Scalability' },
                    { id: 'security', label: 'Compliance & Security' }
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setPriority(item.id)}
                      className={`px-3 py-2 rounded-xl text-xs font-medium text-center transition-all border ${
                        priority === item.id
                          ? 'bg-primary-600/30 border-primary-500 text-white font-bold'
                          : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right side: Generated Recommendation Blueprint */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-mono uppercase text-slate-400 font-bold">Recommended Architecture</span>
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono">Verified Blueprint</span>
                </div>

                <div className="space-y-4 text-xs">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/40 border border-slate-800">
                    <Globe className="w-4 h-4 text-primary-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-slate-400 uppercase font-mono text-[10px]">Frontend Layer</div>
                      <div className="text-white font-semibold text-sm mt-0.5">{rec.frontend}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/40 border border-slate-800">
                    <Server className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-slate-400 uppercase font-mono text-[10px]">Backend Services</div>
                      <div className="text-white font-semibold text-sm mt-0.5">{rec.backend}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/40 border border-slate-800">
                    <Database className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-slate-400 uppercase font-mono text-[10px]">Data & Persistence</div>
                      <div className="text-white font-semibold text-sm mt-0.5">{rec.database}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/40 border border-slate-800">
                    <Cloud className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-slate-400 uppercase font-mono text-[10px]">Deployment & Cloud</div>
                      <div className="text-white font-semibold text-sm mt-0.5">{rec.cloud}</div>
                    </div>
                  </div>
                </div>

                {/* Architectural Reason */}
                <p className="text-xs text-slate-400 italic bg-slate-950/60 p-3 rounded-xl border border-slate-800/60">
                  &ldquo;{rec.reason}&rdquo;
                </p>

                {/* CTA */}
                <Link
                  href="/get-quote"
                  className="w-full py-3.5 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-glow"
                >
                  <span>Build This Architecture With Us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
