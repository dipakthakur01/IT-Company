'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Code2,
  Cloud,
  ShoppingBag,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers,
  Terminal,
  Database,
  ShieldCheck,
  Zap
} from 'lucide-react';

interface ServiceStackCard {
  number: string;
  badge: string;
  title: string;
  tagline: string;
  description: string;
  icon: any;
  accentColor: string;
  bgGradient: string;
  borderGlow: string;
  metrics: { label: string; value: string }[];
  deliverables: string[];
  techPills: string[];
  terminalCode: {
    filename: string;
    lines: { text: string; color?: string }[];
  };
  link: string;
}

const STACK_CARDS: ServiceStackCard[] = [
  {
    number: '01',
    badge: 'CORE FLAGSHIP',
    title: 'Enterprise Web Application Engineering',
    tagline: 'High-availability, full-stack digital platforms engineered on Next.js, Node.js, and MySQL.',
    description:
      'We design and deploy mission-critical web applications featuring strict TypeScript types, layered service architectures, and sub-100ms response targets for high-volume enterprise operations.',
    icon: Code2,
    accentColor: 'from-blue-600 to-indigo-600',
    bgGradient: 'bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/20',
    borderGlow: 'hover:border-blue-400/80',
    metrics: [
      { label: 'API Throughput', value: '15,000+ req/s' },
      { label: 'Lighthouse Target', value: '98/100 CWV' },
      { label: 'IP Ownership', value: '100% Client' }
    ],
    deliverables: [
      'Next.js 14 App Router with React Server Components',
      'REST & GraphQL APIs via Node.js / Express',
      'Normalized MySQL 8.0 with pooled connections & indexing'
    ],
    techPills: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Express', 'MySQL', 'Tailwind'],
    terminalCode: {
      filename: 'services/EnterpriseApp.ts',
      lines: [
        { text: '// Core Scalable Architecture', color: 'text-slate-400' },
        { text: 'export async function bootstrapPlatform() {', color: 'text-blue-400' },
        { text: '  const db = await mysqlPool.getConnection();', color: 'text-emerald-400' },
        { text: '  const cache = await redisCluster.ping();', color: 'text-amber-400' },
        { text: '  return { status: 200, latency: "14ms" };', color: 'text-cyan-300' },
        { text: '}', color: 'text-blue-400' }
      ]
    },
    link: '/services'
  },
  {
    number: '02',
    badge: 'CLOUD & RELIABILITY',
    title: 'Cloud Infrastructure, DevOps & Microservices',
    tagline: 'Zero-downtime CI/CD deployment pipelines, containerization, and AWS cloud management.',
    description:
      'Scale without friction. We design hardened multi-region cloud infrastructures, Kubernetes clusters, automated zero-downtime rolling deploys, and continuous vulnerability scanning.',
    icon: Cloud,
    accentColor: 'from-cyan-600 to-blue-600',
    bgGradient: 'bg-gradient-to-br from-white via-cyan-50/30 to-blue-50/20',
    borderGlow: 'hover:border-cyan-400/80',
    metrics: [
      { label: 'Uptime SLA', value: '99.99%' },
      { label: 'Deploy Time', value: '< 90 sec' },
      { label: 'RTO Recovery', value: '< 15 min' }
    ],
    deliverables: [
      'Dockerized container orchestration & Kubernetes pods',
      'Automated GitHub Actions CI/CD with security linters',
      'Cloudflare DDoS shielding & SSL certificate provisioning'
    ],
    techPills: ['AWS Cloud', 'Docker', 'Kubernetes', 'Cloudflare', 'Redis', 'CI/CD Pipelines'],
    terminalCode: {
      filename: 'infra/deploy-pipeline.yml',
      lines: [
        { text: 'name: Zero-Downtime Deployment', color: 'text-slate-400' },
        { text: 'jobs:', color: 'text-blue-400' },
        { text: '  deploy-cluster:', color: 'text-cyan-300' },
        { text: '    runs-on: ubuntu-latest', color: 'text-slate-300' },
        { text: '    steps: [audit, build, docker-push, rolling-update]', color: 'text-emerald-400' },
        { text: '    status: SUCCESS (0 downtime recorded)', color: 'text-emerald-400' }
      ]
    },
    link: '/services'
  },
  {
    number: '03',
    badge: 'HIGH CONVERSION',
    title: 'High-Conversion E-Commerce & Marketplace Stacks',
    tagline: 'Sub-second digital storefronts engineered for maximum checkout conversion and cart speed.',
    description:
      'Turn shoppers into loyal buyers with instantaneous catalog filtering, global payment gateway orchestration (Stripe, PayPal, digital wallets), and real-time inventory synchronization.',
    icon: ShoppingBag,
    accentColor: 'from-indigo-600 to-violet-600',
    bgGradient: 'bg-gradient-to-br from-white via-indigo-50/30 to-violet-50/20',
    borderGlow: 'hover:border-indigo-400/80',
    metrics: [
      { label: 'Checkout Speed', value: '1.2s avg' },
      { label: 'Cart Abandonment', value: '-38% drop' },
      { label: 'Concurrency', value: '50k users' }
    ],
    deliverables: [
      'Headless storefront with instant server-side page loads',
      'Unified multi-currency payment checkout integrations',
      'Automated inventory, order routing, and tax calculations'
    ],
    techPills: ['Headless Next.js', 'Stripe API', 'MySQL Transactions', 'Redis Cache', 'Webhooks'],
    terminalCode: {
      filename: 'checkout/PaymentEngine.ts',
      lines: [
        { text: '// PCI-DSS Compliant Orchestration', color: 'text-slate-400' },
        { text: 'const intent = await stripe.paymentIntents.create({', color: 'text-indigo-400' },
        { text: '  amount: cart.totalCents, currency: "usd",', color: 'text-violet-300' },
        { text: '  idempotencyKey: cart.uniqueHash', color: 'text-amber-300' },
        { text: '}); // Verified ACID persistent transaction', color: 'text-emerald-400' },
        { text: 'await db.orders.commit(intent.id);', color: 'text-cyan-300' }
      ]
    },
    link: '/services'
  },
  {
    number: '04',
    badge: 'INTELLIGENT SYSTEMS',
    title: 'AI Integrations & Custom Enterprise ERP / CRM',
    tagline: 'Bespoke operational backbones, workflow automation, and custom LLM-powered intelligence.',
    description:
      'Eliminate manual data entry and fragmented spreadsheets. We build centralized enterprise dashboards, role-based workflows, and contextual AI assistants tailored to your team’s exact process.',
    icon: Sparkles,
    accentColor: 'from-amber-600 to-orange-600',
    bgGradient: 'bg-gradient-to-br from-white via-amber-50/30 to-orange-50/20',
    borderGlow: 'hover:border-amber-400/80',
    metrics: [
      { label: 'Hours Saved', value: '120h / mo' },
      { label: 'RBAC Security', value: 'Multi-Tenant' },
      { label: 'Data Accuracy', value: '99.98%' }
    ],
    deliverables: [
      'Custom ERP/CRM modules with granular role-based permissions',
      'Automated document parsing and semantic vector search',
      'Real-time operational business intelligence dashboards'
    ],
    techPills: ['OpenAI LLMs', 'Pinecone Vector DB', 'Node.js', 'MySQL Views', 'Chart.js'],
    terminalCode: {
      filename: 'ai/SemanticWorkflow.ts',
      lines: [
        { text: '// Real-Time AI Inference Pipeline', color: 'text-slate-400' },
        { text: 'const embedding = await ai.embed(doc.text);', color: 'text-amber-400' },
        { text: 'const matches = await vectorDB.query(embedding);', color: 'text-orange-400' },
        { text: 'const reply = await llm.synthesize(matches);', color: 'text-cyan-300' },
        { text: 'logger.info({ latency: "48ms", tokens: 210 });', color: 'text-emerald-400' }
      ]
    },
    link: '/services'
  }
];

export default function StickyServicesStack() {
  return (
    <section id="services-stack" className="py-20 md:py-28 bg-[#F4F5F7] border-b border-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-primary-600 bg-primary-50 px-3.5 py-1.5 rounded-full border border-primary-200 shadow-2xs">
              <Layers className="w-3.5 h-3.5" />
              <span>SIGNATURE ARCHITECTURE STACK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-text-primary leading-tight">
              Engineered With Precision.{' '}
              <span className="bg-gradient-to-r from-primary-600 to-indigo-600 bg-clip-text text-transparent">
                Stacked for Scale.
              </span>
            </h2>
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
              Explore our core digital engineering services. As you scroll, discover how each capability integrates into a high-performance, enterprise-grade technology ecosystem.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm shadow-subtle transition-all whitespace-nowrap self-start md:self-auto hover:-translate-y-0.5 active:translate-y-0 group"
          >
            <span>Explore All 8+ Services Catalog</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Sticky Stacking Cards Container */}
        <div className="relative space-y-8 pb-12">
          {STACK_CARDS.map((card, idx) => {
            const Icon = card.icon;
            // Sticky top calculation gives a cascaded card-stacking offset
            const stickyTop = 100 + idx * 24;

            return (
              <div
                key={card.number}
                className="sticky transition-all duration-300"
                style={{ top: `${stickyTop}px`, zIndex: idx + 1 }}
              >
                <div
                  className={`relative rounded-3xl ${card.bgGradient} border border-slate-200/90 shadow-elevated p-6 sm:p-10 lg:p-12 overflow-hidden transition-all duration-300 ${card.borderGlow} hover:shadow-2xl group`}
                >
                  {/* Subtle top indicator glow bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-500/80 to-transparent opacity-80" />

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Left Column: Narrative & Metrics */}
                    <div className="lg:col-span-7 space-y-6">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-2xl sm:text-3xl font-black text-slate-300 group-hover:text-primary-600 transition-colors">
                          {card.number}
                        </span>
                        <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider uppercase bg-white border border-slate-200 text-slate-700 shadow-2xs">
                          {card.badge}
                        </span>
                      </div>

                      <div className="space-y-3">
                        <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-text-primary leading-tight">
                          {card.title}
                        </h3>
                        <p className="text-base font-medium text-primary-700/90 leading-snug">
                          {card.tagline}
                        </p>
                        <p className="text-sm text-text-secondary leading-relaxed">
                          {card.description}
                        </p>
                      </div>

                      {/* Enterprise Metrics Bar */}
                      <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-white/80 border border-slate-200/80 backdrop-blur-sm shadow-2xs">
                        {card.metrics.map((m, i) => (
                          <div key={i} className="text-center">
                            <div className="text-base sm:text-lg font-black text-slate-900 font-mono">
                              {m.value}
                            </div>
                            <div className="text-[10px] sm:text-xs text-text-muted font-medium">
                              {m.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Included Deliverables */}
                      <div className="space-y-2 pt-1">
                        {card.deliverables.map((item, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-2.5 text-xs text-text-secondary font-medium">
                            <CheckCircle2 className="w-4 h-4 text-primary-500 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack Chips & Action Link */}
                      <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200/60">
                        <div className="flex flex-wrap gap-1.5">
                          {card.techPills.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-[11px] font-mono font-semibold text-slate-700 shadow-2xs"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <Link
                          href={card.link}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-primary-600 hover:text-primary-700 transition-colors group/link"
                        >
                          <span>Explore Specs</span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform group-link-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>

                    {/* Right Column: Code Terminal & Visual Blueprint */}
                    <div className="lg:col-span-5">
                      <div className="rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl p-5 text-left font-mono relative overflow-hidden">
                        {/* Terminal Window Header */}
                        <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-[11px] text-slate-400">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                            <span className="ml-2 text-slate-400 font-medium">{card.terminalCode.filename}</span>
                          </div>
                          <div className="flex items-center gap-1 text-[10px] text-emerald-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            <span>LIVE</span>
                          </div>
                        </div>

                        {/* Code Snippet Lines */}
                        <div className="space-y-1.5 text-xs">
                          {card.terminalCode.lines.map((line, lIdx) => (
                            <div key={lIdx} className="flex gap-3 leading-relaxed">
                              <span className="text-slate-600 select-none w-4 text-right">{lIdx + 1}</span>
                              <span className={line.color || 'text-slate-200'}>{line.text}</span>
                            </div>
                          ))}
                        </div>

                        {/* Interactive Footer telemetry */}
                        <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-400">
                          <div className="flex items-center gap-1.5">
                            <ShieldCheck className="w-3.5 h-3.5 text-primary-400" />
                            <span>Strict Type-Safety</span>
                          </div>
                          <div className="text-emerald-400 font-bold">100% Tests Passing</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Deep-Link Banner */}
        <div className="mt-12 p-8 rounded-3xl bg-white border border-border shadow-subtle flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-text-primary">Need a customized engineering roadmap?</h3>
            <p className="text-xs sm:text-sm text-text-secondary">
              We tailor tech stacks to client SLAs, security audits, and existing infrastructure constraints.
            </p>
          </div>
          <Link
            href="/get-quote"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-bold text-xs uppercase tracking-wider shadow-premium transition-all hover:scale-105 shrink-0"
          >
            <span>Request Tech Blueprint</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
