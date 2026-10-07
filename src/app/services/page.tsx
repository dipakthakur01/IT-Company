import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicesSection from '@/components/ServicesSection';
import FinalCtaSection from '@/components/FinalCtaSection';
import { ArrowRight, Code2, CheckCircle2, ShieldCheck, Zap, Server } from 'lucide-react';
import { fallbackServices } from '@/lib/mockData';

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1 pt-24 pb-14">
        {/* Hero Banner */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 md:mb-10 text-center">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-primary-600 bg-primary-50 px-3 py-1 rounded-full border border-primary-100 mb-4">
            FULL-CYCLE DIGITAL ENGINEERING
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-text-primary mb-6">
            Services Built for High Scale and Reliability.
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Explore our specialized software and web development services. Every solution is delivered with full source code ownership and proactive 24/7 SLA warranties.
          </p>
        </div>

        {/* Bento Grid - Full 8+ Services Catalog */}
        <ServicesSection preview={false} />

        {/* Detailed Breakdown Cards */}
        <section className="py-20 bg-white border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-3xl font-extrabold text-text-primary">What You Receive With Every Engagement</h2>
              <p className="text-sm text-text-secondary">Standardized enterprise engineering deliverables included across all service tiers.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-[#F8FAFC] border border-border space-y-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-primary-600 flex items-center justify-center">
                  <Code2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-text-primary">Clean Architecture</h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  Strict TypeScript, modular components, layered services, and automated linting rules to prevent technical debt.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-[#F8FAFC] border border-border space-y-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-text-primary">Ironclad Security</h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  Input validation via Zod, CSRF/XSS shields, parameterized MySQL queries, and server-side RBAC token verification.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-[#F8FAFC] border border-border space-y-4">
                <div className="w-12 h-12 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-text-primary">Sub-Second Speed</h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  Target 95+ Core Web Vitals on mobile and desktop through Next.js Server Components, AVIF images, and Redis caching.
                </p>
              </div>
            </div>
          </div>
        </section>

        <FinalCtaSection />
      </main>

      <Footer />
    </div>
  );
}
