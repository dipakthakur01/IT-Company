import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TechStackExplorer from '@/components/TechStackExplorer';
import TechRecommendationWizard from '@/components/TechRecommendationWizard';
import FinalCtaSection from '@/components/FinalCtaSection';

export default function TechnologiesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1 pt-24 pb-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 md:mb-10 text-center">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-primary-600 bg-primary-50 px-3 py-1 rounded-full border border-primary-100 mb-4">
            ENGINEERING STACK SPECIFICATIONS
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-text-primary mb-6">
            Technologies Selected for Speed, Stability, and Scale.
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Our company platform is standardized on Next.js + TypeScript, Node.js + Express, and MySQL 8.0, while delivering tailored architectures for diverse client requirements.
          </p>
        </div>

        <TechStackExplorer preview={false} />
        <TechRecommendationWizard />
        <FinalCtaSection />
      </main>

      <Footer />
    </div>
  );
}
