'use client';

import React from 'react';
import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FinalCtaSection from '@/components/FinalCtaSection';
import { ArrowRight, CheckCircle2, ChevronRight, Code2, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import { fallbackServices } from '@/lib/mockData';

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const service = fallbackServices.find((s) => s.slug === slug) || fallbackServices[0];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1 pt-24 pb-14">
        {/* Breadcrumb Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div className="flex items-center gap-2 text-xs font-mono text-text-muted">
            <Link href="/" className="hover:text-primary-600">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/services" className="hover:text-primary-600">Services</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-text-primary font-bold">{service.title}</span>
          </div>
        </div>

        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 md:mb-10">
          <div className="p-8 sm:p-14 rounded-3xl bg-slate-900 text-white relative overflow-hidden shadow-elevated">
            <div className="relative z-10 max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-950 border border-primary-800 text-primary-400 text-xs font-mono font-bold uppercase">
                {service.delivery_type}
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                {service.title}
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                {service.full_description}
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/get-quote"
                  className="px-6 py-3.5 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-bold text-xs shadow-glow transition-all"
                >
                  Request Proposal for {service.title} &rarr;
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 transition-all"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Deliverables & Technology Matrix */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 md:mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left 7 cols: Key Deliverables & Benefits */}
            <div className="lg:col-span-7 space-y-12">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-text-primary border-b border-border pb-3">
                  Key Deliverables
                </h2>
                <div className="space-y-3">
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-border">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-text-primary text-sm">{item}</div>
                        <div className="text-xs text-text-secondary mt-0.5">
                          Production-ready asset delivered with verified automated test suites.
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-text-primary border-b border-border pb-3">
                  Business & Architectural Benefits
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.benefits.map((b, idx) => (
                    <div key={idx} className="p-5 rounded-xl bg-[#F8FAFC] border border-border space-y-1.5">
                      <div className="font-bold text-text-primary text-sm flex items-center gap-2">
                        <Zap className="w-4 h-4 text-primary-600" />
                        {b}
                      </div>
                      <p className="text-xs text-text-secondary">
                        Engineered to minimize maintenance overhead and accelerate conversion.
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 5 cols: Recommended Stack & Engagement Box */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 sm:p-8 rounded-2xl bg-white border border-border shadow-subtle space-y-6">
                <h3 className="text-base font-bold text-text-primary uppercase tracking-wider font-mono text-xs">
                  Supported Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 rounded-lg bg-[#F8FAFC] border border-slate-200 text-xs font-mono font-medium text-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-3 text-xs">
                  <div className="flex justify-between py-1">
                    <span className="text-text-muted">Delivery Model:</span>
                    <span className="font-semibold text-text-primary">{service.delivery_type}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-text-muted">IP Ownership:</span>
                    <span className="font-semibold text-emerald-600">100% Client Transferred</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-text-muted">Warranty Period:</span>
                    <span className="font-semibold text-text-primary">60 Days Complimentary</span>
                  </div>
                </div>

                <Link
                  href="/get-quote"
                  className="w-full py-3.5 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-bold text-xs shadow-premium flex items-center justify-center gap-2 transition-all"
                >
                  <span>Start This Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <FinalCtaSection />
      </main>

      <Footer />
    </div>
  );
}
