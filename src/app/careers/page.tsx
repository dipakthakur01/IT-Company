'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CareersSection from '@/components/CareersSection';
import FinalCtaSection from '@/components/FinalCtaSection';

export default function CareersPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1 pt-24 pb-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 md:mb-10 text-center">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-primary-600 bg-primary-50 px-3 py-1 rounded-full border border-primary-100 mb-4">
            CAREERS AT ZORVEN TECH
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-text-primary mb-6">
            Build Systems That Impact Modern Business.
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            We value high engineering autonomy, strict TypeScript discipline, and work-life balance. Explore our open positions.
          </p>
        </div>

        <CareersSection />
        <FinalCtaSection />
      </main>

      <Footer />
    </div>
  );
}
