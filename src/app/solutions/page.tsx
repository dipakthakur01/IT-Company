import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SolutionsSection from '@/components/SolutionsSection';
import IndustriesSection from '@/components/IndustriesSection';
import FinalCtaSection from '@/components/FinalCtaSection';

export default function SolutionsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1 pt-24 pb-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 md:mb-10 text-center">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-primary-600 bg-primary-50 px-3 py-1 rounded-full border border-primary-100 mb-4">
            TURNKEY INDUSTRY SYSTEMS & VERTICALS
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-text-primary mb-6">
            Industry Solutions Engineered for Production.
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Discover our tailored architectural blueprints for SaaS, marketplaces, internal ERPs, e-learning LMS, and telemedicine portals across 16 commercial industries.
          </p>
        </div>

        {/* Full 8 Solutions */}
        <SolutionsSection preview={false} />

        {/* Full 16 Industries */}
        <IndustriesSection preview={false} />

        <FinalCtaSection />
      </main>

      <Footer />
    </div>
  );
}
