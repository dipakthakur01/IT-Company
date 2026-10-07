import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FounderSection from '@/components/FounderSection';
import TeamSection from '@/components/TeamSection';
import FinalCtaSection from '@/components/FinalCtaSection';
import { Shield, Cpu, Users, ArrowRight, Terminal } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Engineering Team & Leadership | Zorven Tech IT Solutions',
  description:
    'Meet founder Dipak Thakur and our senior engineering squad. Hands-on systems architects building scalable web platforms, high-throughput APIs, and enterprise software.',
  openGraph: {
    title: 'Our Engineering Squad & Founder | Zorven Tech IT Solutions',
    description: 'Senior software architects and engineers delivering production-grade digital systems.',
    url: 'https://zorventech.com/team',
  },
};

export default function TeamPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1 pt-24 pb-14">
        {/* Team Page Hero Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-14">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs text-text-muted mb-6 font-mono">
            <Link href="/" className="hover:text-primary-600 transition-colors">Home</Link>
            <span>/</span>
            <span>Company</span>
            <span>/</span>
            <span className="text-text-primary font-semibold">Our Team</span>
          </nav>

          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-primary-600 bg-primary-50 px-3.5 py-1.5 rounded-full border border-primary-100">
              <span className="w-2 h-2 rounded-full bg-primary-500 animate-ping" />
              <span>ENGINEERING TALENT & LEADERSHIP</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-text-primary leading-[1.15]">
              Architects, Engineers & Builders Behind{' '}
              <span className="bg-gradient-to-r from-primary-700 via-primary-500 to-accent-cyan bg-clip-text text-transparent">
                Every Digital Product.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto">
              We do not outsource core code or delegate mission-critical systems to junior hands. Our clients work directly with senior architects, frontend engineers, and database specialists who write production code every day.
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-200/80 max-w-3xl mx-auto">
              <div className="p-4 rounded-xl bg-white border border-border shadow-2xs">
                <div className="text-2xl sm:text-3xl font-extrabold text-primary-600">100%</div>
                <div className="text-xs text-text-muted font-medium mt-0.5">Senior Squad Staffing</div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-border shadow-2xs">
                <div className="text-2xl sm:text-3xl font-extrabold text-text-primary">8+ Yrs</div>
                <div className="text-xs text-text-muted font-medium mt-0.5">Avg Architect Experience</div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-border shadow-2xs">
                <div className="text-2xl sm:text-3xl font-extrabold text-text-primary">0%</div>
                <div className="text-xs text-text-muted font-medium mt-0.5">Subcontracted Code</div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-border shadow-2xs">
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600">1:1</div>
                <div className="text-xs text-text-muted font-medium mt-0.5">Direct Lead Access</div>
              </div>
            </div>
          </div>
        </div>

        {/* 1. FIRST: Founder Section with Portrait & Vision */}
        <FounderSection />

        {/* 2. THEN BELOW: Specialized Domain Architects & Engineering Squads */}
        <TeamSection
          excludeFounder={true}
          badge="SPECIALIZED DOMAIN LEADS"
          title="Engineers & Domain Leads Behind the Code."
          subtitle="Direct architectural leadership across frontend rendering, distributed backends, UI design systems, and zero-downtime cloud infrastructure."
        />

        {/* 3. Squad Structure & Delivery Philosophy */}
        <section className="py-16 md:py-20 bg-white border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
              <div className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-text-muted">
                <Terminal className="w-3.5 h-3.5 text-primary-500" />
                <span>HOW OUR SQUADS DELIVER</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary">
                A Transparent, Engineer-First Squad Model.
              </h2>
              <p className="text-sm sm:text-base text-text-secondary">
                No bureaucratic layers or telephone games. You collaborate directly with the people building and testing your platform.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 rounded-2xl bg-tech-grid border border-border shadow-2xs space-y-3 hover:shadow-subtle transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary-600 flex items-center justify-center font-bold">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-text-primary">Direct Architect Access</h3>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  Join dedicated shared Slack or Discord channels where your project architect, UI designer, and backend lead communicate daily with live screen shares.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-tech-grid border border-border shadow-2xs space-y-3 hover:shadow-subtle transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-text-primary">Two-Week Production Sprints</h3>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  Every 14 days, you receive a deployed, clickable staging URL with release notes detailing completed endpoints, frontend views, and database migrations.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-tech-grid border border-border shadow-2xs space-y-3 hover:shadow-subtle transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-text-primary">Rigorous Peer Code Review</h3>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  Every commit undergoes strict TypeScript static analysis, automated linting, security scanning, and mandatory pull request sign-off before hitting production.
                </p>
              </div>
            </div>

            {/* Hiring Callout Banner */}
            <div className="mt-12 p-8 rounded-2xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>WE ARE EXPANDING</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold">Want to Join Our Senior Engineering Squad?</h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                  We are hiring Senior Next.js Engineers, Node.js Backend Architects, and UI Systems Designers. Remote-first, competitive compensation, and high-impact enterprise projects.
                </p>
              </div>

              <Link
                href="/careers"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-semibold text-sm shadow-premium transition-all hover:scale-105 shrink-0"
              >
                <span>View Open Positions</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <FinalCtaSection />
      </main>

      <Footer />
    </div>
  );
}
