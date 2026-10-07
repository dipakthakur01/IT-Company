import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TechMarquee from '@/components/TechMarquee';
import ClientsMarquee from '@/components/ClientsMarquee';
import AboutSection from '@/components/AboutSection';
import StickyServicesStack from '@/components/StickyServicesStack';
import InteractiveArchitectureSandbox from '@/components/InteractiveArchitectureSandbox';
import CinematicPortfolioSlider from '@/components/CinematicPortfolioSlider';
import TestimonialsSection from '@/components/TestimonialsSection';
import FinalCtaSection from '@/components/FinalCtaSection';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-background">
      {/* 01. Sticky Navbar with Mega Menu & Cmd+K Global Search */}
      <Navbar />

      {/* Main Cinematic Experience Stream */}
      <main className="flex-1">
        {/* 01. Cinematic 3D Hero Section with Three.js WebGL Tech Sphere */}
        <HeroSection />

        {/* 02. Continuous Tech Stack Ecosystem Ribbon */}
        <TechMarquee />

        {/* 03. Trusted Enterprise Client Partners Ribbon */}
        <ClientsMarquee />

        {/* 04. Editorial About Company & Core Track Record */}
        <AboutSection />

        {/* 05. Signature Awwwards-Grade Card-Stacking Services Experience */}
        <StickyServicesStack />

        {/* 06. Live Interactive System Architecture Pipeline Sandbox */}
        <InteractiveArchitectureSandbox />

        {/* 07. Cinematic Horizontal Sliding Portfolio Showcase */}
        <CinematicPortfolioSlider />

        {/* 08. Fluid Verified Client Proof & Review Carousel */}
        <TestimonialsSection />

        {/* 09. High-Conversion Enterprise Consultation CTA */}
        <FinalCtaSection />
      </main>

      {/* Modern Enterprise Footer */}
      <Footer />
    </div>
  );
}
