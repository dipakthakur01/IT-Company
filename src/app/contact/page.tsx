'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FaqSection from '@/components/FaqSection';
import { Mail, Phone, MapPin, Clock, MessageSquare, CheckCircle2, ArrowRight } from 'lucide-react';
import { api } from '@/lib/api';
import { useToast } from '@/components/ui/ToastContext';

export default function ContactPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [service, setService] = useState('Custom Web Application');
  const [budget, setBudget] = useState('$5k – $10k');
  const [message, setMessage] = useState('');

  const [submitting, setSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const toast = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !message) return;

    setSubmitting(true);
    const result = await api.submitContact({
      full_name: fullName,
      email,
      phone,
      company,
      service_interested: service,
      budget_range: budget,
      message
    });
    setSubmitting(false);
    const ref = result.reference_id || `ZORV-CNT-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmittedRef(ref);

    toast.success(
      'Message Received!',
      `Reference ID: ${ref}. Our technical engineering lead will reach out within 24 hours.`,
      5000
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1 pt-24 pb-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 md:mb-10 text-center">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-primary-600 bg-primary-50 px-3 py-1 rounded-full border border-primary-100 mb-4">
            LET&apos;S TALK ARCHITECTURE
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-text-primary mb-6">
            Get in Touch With Our Engineering Team.
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Whether you have a detailed technical specification or an early-stage concept, we are here to help determine the right approach.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left 5 cols: Contact Cards & Office Details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-8 rounded-3xl bg-slate-900 text-white space-y-6 shadow-elevated">
                <h3 className="text-xl font-bold">Direct Channels</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Our technical partners respond to all verified business inquiries within 24 business hours.
                </p>

                <div className="space-y-4 text-xs">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-white text-sm">General Inquiries</div>
                      <a href="mailto:hello@zorventech.com" className="text-slate-400 hover:text-white transition-colors">
                        hello@zorventech.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-white text-sm">Direct Phone / WhatsApp</div>
                      <a href="tel:+9779814702731" className="text-slate-400 hover:text-white transition-colors">
                        +977-9814702731
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-white text-sm">Headquarters</div>
                      <div className="text-slate-400 leading-relaxed">
                        Level 4, IT Park Complex, Tinkune, Kathmandu, Nepal
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-white text-sm">Business Operations</div>
                      <div className="text-slate-400">Monday – Friday: 9:00 AM – 6:00 PM NPT</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Box */}
              <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-border flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-text-primary">Need an Instant Response?</div>
                  <div className="text-xs text-text-secondary">Message our technical squad directly on WhatsApp.</div>
                </div>
                <a
                  href="https://wa.me/9779814702731"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-subtle"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>

            {/* Right 7 cols: Interactive Inquiry Form */}
            <div className="lg:col-span-7 rounded-3xl bg-white border border-border shadow-elevated p-8 sm:p-12">
              {submittedRef ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-text-primary">Message Sent Successfully!</h3>
                  <p className="text-xs text-text-secondary max-w-sm mx-auto">
                    Inquiry Reference: <strong className="font-mono text-primary-600">{submittedRef}</strong>. Our team has received your details and will follow up shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmittedRef(null);
                      setMessage('');
                    }}
                    className="px-6 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs shadow-subtle"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-lg font-bold text-text-primary border-b border-border pb-3">
                    Submit Project Inquiry
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
                      <label className="text-xs font-semibold text-text-secondary">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email address"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-primary-500 mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-text-secondary">Phone Number</label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+977-980..."
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-primary-500 mt-1"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-text-secondary">Company / Organization</label>
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Acme Global"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-primary-500 mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-text-secondary">Service Interested In</label>
                      <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-primary-500 mt-1 bg-white"
                      >
                        <option>Custom Web Application</option>
                        <option>E-Commerce Marketplace</option>
                        <option>Custom Software / ERP</option>
                        <option>UI/UX Design Systems</option>
                        <option>Cloud & DevOps</option>
                        <option>AI & Automation</option>
                        <option>Website Maintenance</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-text-secondary">Anticipated Budget</label>
                      <select
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-primary-500 mt-1 bg-white"
                      >
                        <option>$3k – $5k</option>
                        <option>$5k – $10k</option>
                        <option>$10k – $25k</option>
                        <option>$25k+ Enterprise</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-text-secondary">Project Details & Requirements *</label>
                    <textarea
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Please tell us about your project requirements, target launch date, and any specific technology constraints..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-primary-500 mt-1"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-bold text-sm shadow-premium transition-all disabled:opacity-50"
                  >
                    {submitting ? 'Transmitting Details...' : 'Send Inquiry to Engineering Lead'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Full FAQ Section with live search */}
        <FaqSection preview={false} />
      </main>

      <Footer />
    </div>
  );
}
