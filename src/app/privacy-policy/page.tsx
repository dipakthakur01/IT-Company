'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1 pt-24 pb-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white border border-border p-8 sm:p-14 shadow-subtle space-y-8 text-text-secondary text-sm leading-relaxed">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-text-primary">Privacy Policy</h1>
            <p className="text-xs font-mono text-text-muted">Last Updated: September 2026</p>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-text-primary">1. Information We Collect</h2>
              <p>
                Zorven Tech IT Solutions collects information that you provide directly to us when filling out contact forms, quotation wizards, or career applications. This includes full name, business email, phone number, company information, and technical project scope specifications.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-text-primary">2. How We Use Your Information</h2>
              <p>
                We use the information gathered exclusively to evaluate your software architecture requirements, generate formal project proposals, establish non-disclosure agreements (NDAs), and deliver contracted technical deliverables. We never sell or license personal data to third parties.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-text-primary">3. Intellectual Property & Code Confidentiality</h2>
              <p>
                All proprietary client algorithms, database schemas, git repositories, and client data are treated as strictly confidential under binding confidentiality agreements.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-text-primary">4. Security Measures</h2>
              <p>
                We implement industry-standard encryption, SSL/TLS transmission hardening, parameter validation, and secure authentication to safeguard all stored records.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
