'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, ArrowLeft, Check, CheckCircle2, Shield, Sparkles, Building, Globe, Layers, DollarSign } from 'lucide-react';
import { api } from '@/lib/api';
import { useToast } from '@/components/ui/ToastContext';
import { useConfirm } from '@/components/ui/ConfirmContext';

const SERVICE_OPTIONS = [
  'Custom Web Application',
  'Enterprise E-Commerce Store',
  'Custom Software / ERP',
  'UI/UX Design System',
  'Cloud Infrastructure & DevOps',
  'AI Integration & LLMs',
  'RESTful API Engineering',
  'Website Maintenance Retainer'
];

const FEATURE_OPTIONS = [
  'User Authentication & Roles (RBAC)',
  'Multi-Currency Payment Gateway',
  'Custom Management CMS Dashboard',
  'Real-Time Live Chat / Messaging',
  'Interactive Booking & Scheduling',
  'Advanced Search & Filtering',
  'Automated Email & SMS Alerts',
  'Data Analytics & Exportable Reports',
  'Multilingual Support (i18n)',
  'Third-Party API Integrations'
];

export default function GetQuotePage() {
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  const toast = useToast();
  const { confirm } = useConfirm();

  // Form State
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [country, setCountry] = useState('United States');

  const [websiteType, setWebsiteType] = useState('Custom Web Application');
  const [projectDescription, setProjectDescription] = useState('');
  const [selectedServices, setSelectedServices] = useState<string[]>(['Custom Web Application']);

  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    'User Authentication & Roles (RBAC)',
    'Custom Management CMS Dashboard'
  ]);

  const [budgetRange, setBudgetRange] = useState('$5,000 – $10,000');
  const [preferredTimeline, setPreferredTimeline] = useState('4 – 8 Weeks');
  const [referenceLinks, setReferenceLinks] = useState('');

  const toggleService = (s: string) => {
    setSelectedServices(prev =>
      prev.includes(s) ? prev.filter(item => item !== s) : [...prev, s]
    );
  };

  const toggleFeature = (f: string) => {
    setSelectedFeatures(prev =>
      prev.includes(f) ? prev.filter(item => item !== f) : [...prev, f]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const isConfirmed = await confirm({
      title: 'Submit Project Inquiry?',
      message: `We will prepare your tailored scope for ${websiteType} and deliver an architectural roadmap to ${email}.`,
      confirmText: 'Submit Inquiry',
      cancelText: 'Review Answers',
      variant: 'primary'
    });

    if (!isConfirmed) return;

    setSubmitting(true);

    const payload = {
      full_name: fullName,
      email,
      phone,
      company,
      country,
      website_type: websiteType,
      project_description: projectDescription,
      selected_services: selectedServices,
      selected_features: selectedFeatures,
      budget_range: budgetRange,
      preferred_timeline: preferredTimeline,
      reference_links: referenceLinks
    };

    const result = await api.submitQuote(payload);
    setSubmitting(false);
    const ref = result.reference_id || `ZORV-QTE-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmittedRef(ref);

    toast.success(
      'Inquiry Dispatched Successfully!',
      `Reference ID: ${ref}. Our technical architecture squad will get in touch shortly.`,
      5000
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1 pt-24 pb-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-primary-600 bg-primary-50 px-3 py-1 rounded-full border border-primary-100">
              PROJECT INQUIRY WIZARD
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-text-primary">
              Request an Enterprise Proposal.
            </h1>
            <p className="text-base text-text-secondary max-w-xl mx-auto">
              Follow our structured 6-step questionnaire. A technical architect will analyze your scope and respond with an itemized architectural breakdown.
            </p>

            {/* Stepper Progress */}
            {!submittedRef && (
              <div className="pt-6 max-w-md mx-auto">
                <div className="flex items-center justify-between text-xs font-mono font-bold text-text-muted mb-2">
                  <span>Step {step} of 6</span>
                  <span>{Math.round((step / 6) * 100)}% Complete</span>
                </div>
                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary-500 transition-all duration-300 rounded-full"
                    style={{ width: `${(step / 6) * 100}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Form Card */}
          <div className="rounded-3xl bg-white border border-border shadow-elevated p-8 sm:p-12 relative">
            {submittedRef ? (
              <div className="text-center py-12 space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-subtle">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-text-primary">
                    Quote Request Received!
                  </h2>
                  <p className="text-sm text-text-secondary max-w-md mx-auto">
                    Your inquiry has been cataloged in our engineering portal. A dedicated software architect has been assigned to your proposal.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-border max-w-sm mx-auto space-y-1">
                  <div className="text-xs uppercase font-mono text-text-muted">Unique Reference ID</div>
                  <div className="text-xl font-mono font-bold text-primary-600">{submittedRef}</div>
                </div>

                <div className="pt-4 flex justify-center gap-4">
                  <Link
                    href="/"
                    className="px-6 py-3 rounded-xl bg-slate-900 text-white font-semibold text-xs shadow-subtle hover:bg-slate-800"
                  >
                    Return to Homepage
                  </Link>
                  <Link
                    href="/portfolio"
                    className="px-6 py-3 rounded-xl bg-white border border-border text-text-primary font-semibold text-xs hover:bg-slate-50"
                  >
                    Explore Case Studies
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {/* STEP 1: Contact Details */}
                {step === 1 && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-bold text-text-primary border-b border-border pb-3">
                      Step 1: Contact & Stakeholder Information
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-semibold text-text-secondary">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="Your full name"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-primary-500 mt-1"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-text-secondary">Work Email Address *</label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Your email address"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-primary-500 mt-1"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-text-secondary">Phone / WhatsApp Number</label>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+1 555-0199 or +977-..."
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-primary-500 mt-1"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-text-secondary">Company / Organization</label>
                        <input
                          type="text"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          placeholder="Acme Global Inc."
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-primary-500 mt-1"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label className="text-xs font-semibold text-text-secondary">Country / Region</label>
                        <input
                          type="text"
                          value={country}
                          onChange={(e) => setCountry(e.target.value)}
                          placeholder="e.g. United States, Nepal, United Kingdom..."
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-primary-500 mt-1"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 2: Website Type & Scope */}
                {step === 2 && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-bold text-text-primary border-b border-border pb-3">
                      Step 2: Project Scope & Deliverable Category
                    </h3>

                    <div>
                      <label className="text-xs font-semibold text-text-secondary mb-2 block">
                        Primary System Category
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {[
                          'Custom Web Application (Next.js/React)',
                          'Multi-Vendor E-Commerce Platform',
                          'Custom Software / ERP / CRM',
                          'Corporate & Brand Website',
                          'SaaS Platform with Subscription Billing',
                          'Mobile-First Web Experience'
                        ].map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setWebsiteType(type)}
                            className={`p-3.5 rounded-xl text-left text-xs font-semibold border transition-all ${
                              websiteType === type
                                ? 'border-primary-500 bg-primary-50 text-primary-700 shadow-subtle'
                                : 'border-slate-200 hover:border-slate-300 text-text-secondary'
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-text-secondary mb-2 block">
                        Required Service Disciplines
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {SERVICE_OPTIONS.map((srv) => {
                          const isSel = selectedServices.includes(srv);
                          return (
                            <button
                              key={srv}
                              type="button"
                              onClick={() => toggleService(srv)}
                              className={`flex items-center gap-2 p-2.5 rounded-xl text-xs border text-left transition-all ${
                                isSel
                                  ? 'border-primary-500 bg-blue-50/50 text-text-primary font-bold'
                                  : 'border-slate-200 text-text-secondary hover:border-slate-300'
                              }`}
                            >
                              <div
                                className={`w-4 h-4 rounded flex items-center justify-center border ${
                                  isSel ? 'bg-primary-500 border-primary-500 text-white' : 'border-slate-300'
                                }`}
                              >
                                {isSel && <Check className="w-3 h-3 stroke-[3]" />}
                              </div>
                              <span>{srv}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-text-secondary">Project Overview & Objectives *</label>
                      <textarea
                        required
                        rows={4}
                        value={projectDescription}
                        onChange={(e) => setProjectDescription(e.target.value)}
                        placeholder="Briefly describe what problem this software solves and your key business goals..."
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-primary-500 mt-1"
                      />
                    </div>
                  </div>
                )}

                {/* STEP 3: Feature Matrix */}
                {step === 3 && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-bold text-text-primary border-b border-border pb-3">
                      Step 3: Core Architectural Feature Matrix
                    </h3>
                    <p className="text-xs text-text-secondary">
                      Select the technical capabilities required for your initial milestone release.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {FEATURE_OPTIONS.map((feat) => {
                        const isSel = selectedFeatures.includes(feat);
                        return (
                          <button
                            key={feat}
                            type="button"
                            onClick={() => toggleFeature(feat)}
                            className={`flex items-center justify-between p-3.5 rounded-xl border text-xs text-left transition-all ${
                              isSel
                                ? 'border-primary-500 bg-blue-50/50 text-text-primary font-bold'
                                : 'border-slate-200 text-text-secondary hover:border-slate-300'
                            }`}
                          >
                            <div className="flex items-center gap-2.5">
                              <div
                                className={`w-4 h-4 rounded flex items-center justify-center border ${
                                  isSel ? 'bg-primary-500 border-primary-500 text-white' : 'border-slate-300'
                                }`}
                              >
                                {isSel && <Check className="w-3 h-3 stroke-[3]" />}
                              </div>
                              <span>{feat}</span>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* STEP 4: Budget & Timeline */}
                {step === 4 && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-bold text-text-primary border-b border-border pb-3">
                      Step 4: Investment Budget & Desired Launch Date
                    </h3>

                    <div className="space-y-3">
                      <label className="text-xs font-semibold text-text-secondary block">Anticipated Budget Range</label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {['$3k – $5k', '$5k – $10k', '$10k – $25k', '$25k+ Enterprise'].map((b) => (
                          <button
                            key={b}
                            type="button"
                            onClick={() => setBudgetRange(b)}
                            className={`p-3 rounded-xl text-center text-xs font-bold border transition-all ${
                              budgetRange === b
                                ? 'border-primary-500 bg-primary-500 text-white'
                                : 'border-slate-200 hover:border-slate-300 text-text-secondary'
                            }`}
                          >
                            {b}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3 pt-4">
                      <label className="text-xs font-semibold text-text-secondary block">Preferred Timeline to Launch</label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {['2 – 4 Weeks', '4 – 8 Weeks', '2 – 3 Months', 'Flexible / Quality First'].map((t) => (
                          <button
                            key={t}
                            type="button"
                            onClick={() => setPreferredTimeline(t)}
                            className={`p-3 rounded-xl text-center text-xs font-bold border transition-all ${
                              preferredTimeline === t
                                ? 'border-primary-500 bg-primary-500 text-white'
                                : 'border-slate-200 hover:border-slate-300 text-text-secondary'
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 5: References & Links */}
                {step === 5 && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-bold text-text-primary border-b border-border pb-3">
                      Step 5: Reference Links & Benchmarks
                    </h3>

                    <div>
                      <label className="text-xs font-semibold text-text-secondary">
                        Reference Websites or Inspiration URLs
                      </label>
                      <textarea
                        rows={4}
                        value={referenceLinks}
                        onChange={(e) => setReferenceLinks(e.target.value)}
                        placeholder="Paste links to existing websites or competitor platforms you admire (e.g., https://example.com/demo)..."
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-primary-500 mt-1"
                      />
                    </div>

                    <div className="p-4 rounded-xl bg-blue-50 border border-blue-100 text-primary-800 text-xs flex items-start gap-3">
                      <Shield className="w-4 h-4 shrink-0 mt-0.5 text-primary-600" />
                      <div>
                        <strong>Confidentiality Notice:</strong> We sign standard Non-Disclosure Agreements (NDAs) for sensitive corporate projects before architectural scoping.
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 6: Review & Submit */}
                {step === 6 && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-bold text-text-primary border-b border-border pb-3">
                      Step 6: Review Specifications & Submit
                    </h3>

                    <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-border space-y-4 text-xs">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <span className="text-text-muted">Client Name:</span>
                          <div className="font-bold text-text-primary">{fullName || 'Not provided'}</div>
                        </div>
                        <div>
                          <span className="text-text-muted">Work Email:</span>
                          <div className="font-bold text-text-primary">{email || 'Not provided'}</div>
                        </div>
                        <div>
                          <span className="text-text-muted">Company:</span>
                          <div className="font-bold text-text-primary">{company || 'Not provided'}</div>
                        </div>
                        <div>
                          <span className="text-text-muted">Category:</span>
                          <div className="font-bold text-text-primary">{websiteType}</div>
                        </div>
                        <div>
                          <span className="text-text-muted">Budget Tier:</span>
                          <div className="font-bold text-text-primary">{budgetRange}</div>
                        </div>
                        <div>
                          <span className="text-text-muted">Target Timeline:</span>
                          <div className="font-bold text-text-primary">{preferredTimeline}</div>
                        </div>
                      </div>

                      <div className="pt-2 border-t border-slate-200">
                        <span className="text-text-muted">Selected Features ({selectedFeatures.length}):</span>
                        <div className="flex flex-wrap gap-1.5 mt-1.5">
                          {selectedFeatures.map((f) => (
                            <span key={f} className="px-2 py-0.5 rounded bg-white border border-slate-200 text-[11px] font-mono">
                              {f}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Wizard Navigation Buttons */}
                <div className="pt-8 border-t border-border flex items-center justify-between">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={() => setStep(step - 1)}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-text-secondary hover:bg-slate-50 transition-colors"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Back</span>
                    </button>
                  ) : <div />}

                  {step < 6 ? (
                    <button
                      type="button"
                      onClick={() => {
                        if (step === 1 && (!fullName || !email)) {
                          alert('Please enter your name and email to proceed.');
                          return;
                        }
                        if (step === 2 && !projectDescription) {
                          alert('Please enter a brief project overview to proceed.');
                          return;
                        }
                        setStep(step + 1);
                      }}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-bold text-xs shadow-premium transition-all"
                    >
                      <span>Continue to Step {step + 1}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={submitting}
                      className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-bold text-sm shadow-elevated transition-all disabled:opacity-50"
                    >
                      <span>{submitting ? 'Submitting Specifications...' : 'Confirm & Request Formal Proposal'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
