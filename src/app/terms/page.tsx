'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1 pt-24 pb-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white border border-border p-8 sm:p-14 shadow-subtle space-y-8 text-text-secondary text-sm leading-relaxed">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-text-primary">Terms of Service</h1>
            <p className="text-xs font-mono text-text-muted">Effective Date: September 2026</p>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-text-primary">1. Services & Engagement</h2>
              <p>
                Zorven Tech IT Solutions provides bespoke software development, web engineering, cloud deployment, and technical consulting. Specific deliverables, sprint schedules, and milestone payments are governed by individual Statements of Work (SOW).
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-text-primary">2. Intellectual Property Ownership</h2>
              <p>
                Upon receipt of full and final payment for contracted milestones, 100% of the customized intellectual property, application source code, and associated architectural documentation transfers exclusively to the client.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-text-primary">3. Post-Launch Warranty & Support</h2>
              <p>
                All development contracts include a 30 to 60-day complimentary bug-fix warranty. Subsequent ongoing maintenance, security patching, and framework version upgrades are covered under our monthly SLA retainers.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
