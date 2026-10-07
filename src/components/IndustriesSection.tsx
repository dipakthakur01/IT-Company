'use client';

import React from 'react';
import Link from 'next/link';
import {
  GraduationCap,
  Briefcase,
  ShoppingBag,
  Hotel,
  HeartPulse,
  Landmark,
  Building,
  Utensils,
  Plane,
  Radio,
  Scale,
  Rocket,
  Building2,
  Globe2,
  HeartHandshake,
  Shield,
  ArrowRight
} from 'lucide-react';

const INDUSTRIES = [
  { name: 'Fintech & Wealth', icon: Landmark, desc: 'Trading terminals, wealth analytics, and multi-currency wallets.' },
  { name: 'E-Commerce & Retail', icon: ShoppingBag, desc: 'High-speed headless storefronts & multi-vendor marketplaces.' },
  { name: 'Healthcare & HealthTech', icon: HeartPulse, desc: 'HIPAA-ready clinical records, telemedicine, and lab sync.' },
  { name: 'Real Estate & PropTech', icon: Building, desc: 'Property search engines, Mapbox GIS, and leasing CRMs.' },
  { name: 'Education & EdTech', icon: GraduationCap, desc: 'LMS platforms, video classrooms, and student assessment.' },
  { name: 'Recruitment & HR', icon: Briefcase, desc: 'Applicant tracking (ATS), job portals, and resume parsers.' },
  { name: 'Hospitality & Hotels', icon: Hotel, desc: 'Banquet scheduling, room booking, and PMS integrations.' },
  { name: 'Food & Restaurants', icon: Utensils, desc: 'Online ordering, kitchen POS sync, and table reservation.' },
  { name: 'Travel & Logistics', icon: Plane, desc: 'Fleet dispatching, cargo tracking, and dynamic flight engines.' },
  { name: 'Media & Publishing', icon: Radio, desc: 'High-throughput news portals with paywalls and ad servers.' },
  { name: 'Legal & Professional', icon: Scale, desc: 'Matter management, secure document vaults, and client billing.' },
  { name: 'Fast-Growing Startups', icon: Rocket, desc: 'Rapid MVP engineering to achieve early market validation.' },
  { name: 'SMEs & Mid-Market', icon: Building2, desc: 'Operational automation to eliminate repetitive paperwork.' },
  { name: 'Global Enterprises', icon: Globe2, desc: 'Fault-tolerant distributed systems with 24/7 SLA contracts.' },
  { name: 'NGOs & Non-Profits', icon: HeartHandshake, desc: 'Donation tracking, volunteer portals, and impact reports.' },
  { name: 'Government & Public', icon: Shield, desc: 'Citizen service portals with ironclad data sovereignty.' }
];

interface IndustriesSectionProps {
  preview?: boolean;
}

export default function IndustriesSection({ preview = false }: IndustriesSectionProps) {
  const displayedIndustries = preview ? INDUSTRIES.slice(0, 8) : INDUSTRIES;

  return (
    <section id="industries" className="py-12 md:py-16 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-10 gap-6">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-primary-600 bg-primary-50 px-3 py-1 rounded-full border border-primary-100">
              {preview ? 'VERTICALS WE EMPOWER (8 OF 16)' : 'VERTICALS WE EMPOWER'}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-text-primary">
              Domain Expertise Across 16 Industries.
            </h2>
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
              {preview
                ? 'Spotlight on our most frequent industry domains. We architect compliant, custom solutions across 16 major verticals.'
                : 'Our engineers understand the specific compliance rules, user journeys, and technical architectures demanded by each industry sector.'}
            </p>
          </div>

          {preview && (
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#F4F5F7] hover:bg-slate-200 text-text-primary font-semibold text-sm border border-border shadow-subtle transition-all hover:text-primary-600 whitespace-nowrap self-start md:self-auto hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Explore All 16 Verticals</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {displayedIndustries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <div
                key={i}
                className="p-5 rounded-2xl bg-[#F8FAFC] border border-border hover:bg-white hover:shadow-subtle hover:border-primary-400 transition-all group"
              >
                <div className="w-9 h-9 rounded-xl bg-white border border-slate-200/80 text-primary-600 flex items-center justify-center mb-3 group-hover:bg-primary-500 group-hover:text-white transition-colors">
                  <Icon className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-text-primary mb-1 group-hover:text-primary-600 transition-colors">
                  {ind.name}
                </h4>
                <p className="text-[11px] text-text-secondary leading-relaxed">
                  {ind.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Home preview bottom banner */}
        {preview && (
          <div className="mt-8 p-6 rounded-2xl bg-[#F8FAFC] border border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="text-base font-bold text-text-primary">
                Also Serving Logistics, Media, LegalTech, SMEs, NGOs & Government Services
              </h4>
              <p className="text-xs text-text-secondary">
                Explore our full spectrum of industry blueprints with purpose-built data models and compliance standards.
              </p>
            </div>
            <Link
              href="/solutions"
              className="px-5 py-2.5 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-semibold text-xs whitespace-nowrap transition-colors flex items-center gap-2 shrink-0 shadow-subtle"
            >
              <span>View All 16 Industries</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
