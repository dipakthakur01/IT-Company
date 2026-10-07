'use client';

import React, { useState } from 'react';
import { ArrowRight, MapPin, Briefcase, Clock, CheckCircle2, X } from 'lucide-react';
import { fallbackCareers } from '@/lib/mockData';
import { api } from '@/lib/api';

export default function CareersSection() {
  const [selectedJob, setSelectedJob] = useState<any | null>(null);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [portfolio, setPortfolio] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleApply = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedJob) return;
    setSubmitting(true);
    await api.submitContact({
      full_name: fullName,
      email,
      phone,
      company: portfolio,
      service_interested: `Career Application: ${selectedJob.title}`,
      message: `Applicant for ${selectedJob.title}. Portfolio/Resume: ${portfolio}`
    });
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section id="careers" className="py-12 md:py-16 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-10 gap-6">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-primary-600 bg-primary-50 px-3 py-1 rounded-full border border-primary-100">
              JOIN OUR SQUAD
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-text-primary">
              Build Scalable Systems That Matter.
            </h2>
            <p className="text-base sm:text-lg text-text-secondary">
              We are constantly seeking ambitious engineers, architects, and product designers to tackle enterprise challenges.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-text-muted">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>2 Open Engineering Roles</span>
          </div>
        </div>

        {/* Roles List */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {fallbackCareers.map((job) => (
            <div
              key={job.id}
              className="p-6 sm:p-8 rounded-2xl bg-[#F8FAFC] border border-border hover:bg-white hover:shadow-elevated transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-6"
            >
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-text-muted">
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-primary-600 font-bold">{job.department}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {job.location}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {job.work_type}</span>
                </div>
                <h3 className="text-xl font-bold text-text-primary">{job.title}</h3>
                <p className="text-xs text-text-secondary leading-relaxed max-w-xl">
                  {job.description}
                </p>
              </div>

              <button
                onClick={() => {
                  setSelectedJob(job);
                  setSubmitted(false);
                }}
                className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-primary-600 text-white font-bold text-xs shadow-subtle transition-all whitespace-nowrap self-start sm:self-auto"
              >
                Apply for Position &rarr;
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Application Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm">
          <div className="w-full max-w-lg rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-border relative">
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-6 right-6 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-text-primary">Application Received!</h3>
                <p className="text-xs text-text-secondary max-w-sm mx-auto">
                  Thank you for applying for <strong>{selectedJob.title}</strong>. Our engineering lead will review your profile.
                </p>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="px-6 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleApply} className="space-y-4">
                <div>
                  <div className="text-xs font-mono uppercase text-primary-600 font-bold">Apply for Position</div>
                  <h3 className="text-xl font-bold text-text-primary">{selectedJob.title}</h3>
                </div>

                <div>
                  <label className="text-xs font-semibold text-text-secondary">Full Name</label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. John Doe"
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-primary-500 mt-1"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-semibold text-text-secondary">Email Address</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="john@example.com"
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-primary-500 mt-1"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-text-secondary">Phone Number</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+977-9801..."
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-primary-500 mt-1"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-text-secondary">LinkedIn or GitHub URL</label>
                  <input
                    type="url"
                    required
                    value={portfolio}
                    onChange={(e) => setPortfolio(e.target.value)}
                    placeholder="https://linkedin.com/in/... or GitHub"
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-primary-500 mt-1"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-bold text-xs shadow-premium transition-all disabled:opacity-50"
                >
                  {submitting ? 'Submitting Application...' : 'Submit Application'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
