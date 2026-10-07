'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, Mail, Phone, MapPin, Linkedin, Github, Twitter, ShieldCheck } from 'lucide-react';
import { api } from '@/lib/api';
import { useToast } from '@/components/ui/ToastContext';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    await api.submitNewsletter(email);
    setLoading(false);
    setSubscribed(true);
    toast.success('Subscribed Successfully!', 'You will now receive our monthly engineering briefings.', 4500);
    setEmail('');
  };

  return (
    <footer className="bg-dark-base text-white pt-12 pb-8 border-t border-dark-border relative overflow-hidden">
      {/* Subtle ambient cyan/blue glows in footer background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-accent-cyan/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-8 border-b border-dark-border">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-11 h-11 flex-shrink-0 transition-transform group-hover:scale-105 drop-shadow-[0_4px_16px_rgba(0,200,255,0.4)]">
                <Image
                  src="/logo-mark.png"
                  alt="Zorven Tech"
                  width={44}
                  height={44}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tight text-white font-display">
                  ZORVEN <span className="text-accent-cyan">TECH</span>
                </span>
                <span className="text-[10px] uppercase tracking-[0.22em] font-bold text-slate-400 -mt-1">
                  IT Solutions
                </span>
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              We design and develop fast, secure, scalable websites, custom web applications, and enterprise digital software engineered to accelerate modern business.
            </p>

            <div className="flex items-center gap-2 text-xs text-emerald-400 font-mono bg-emerald-950/60 border border-emerald-800/50 px-3 py-1.5 rounded-full w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              All Production Systems Operational • 99.9% SLA
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-primary-500 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-primary-500 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-primary-500 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">Services</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><Link href="/services/web-application-development" className="hover:text-primary-400 transition-colors">Web Applications</Link></li>
              <li><Link href="/services/ecommerce-platforms" className="hover:text-primary-400 transition-colors">E-Commerce Platforms</Link></li>
              <li><Link href="/services/custom-software-development" className="hover:text-primary-400 transition-colors">Custom Software & ERP</Link></li>
              <li><Link href="/services/ui-ux-design-systems" className="hover:text-primary-400 transition-colors">UI/UX Design Systems</Link></li>
              <li><Link href="/services/cloud-devops-deployment" className="hover:text-primary-400 transition-colors">Cloud & DevOps</Link></li>
              <li><Link href="/services/ai-integration-intelligent-tools" className="hover:text-primary-400 transition-colors">AI & Automation</Link></li>
            </ul>
          </div>

          {/* Solutions Column */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">Company & Tech</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><Link href="/about" className="hover:text-primary-400 transition-colors">About Us</Link></li>
              <li><Link href="/team" className="hover:text-primary-400 transition-colors">Our Team</Link></li>
              <li><Link href="/portfolio" className="hover:text-primary-400 transition-colors">Client Portfolio</Link></li>
              <li><Link href="/case-studies" className="hover:text-primary-400 transition-colors">Case Studies</Link></li>
              <li><Link href="/process" className="hover:text-primary-400 transition-colors">Our 8-Step Process</Link></li>
              <li><Link href="/careers" className="hover:text-primary-400 transition-colors">Careers <span className="text-[10px] bg-primary-900 text-primary-300 px-1.5 py-0.5 rounded font-bold">WE&apos;RE HIRING</span></Link></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">Stay Informed</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Subscribe to our engineering newsletter for web architecture case studies, security alerts, and tech updates.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-950/60 border border-emerald-800 text-emerald-300 text-xs">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Thank you! You are subscribed to our tech briefings.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter business email"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-primary-500 transition-colors"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="absolute right-1 top-1 bottom-1 px-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg text-xs font-semibold flex items-center justify-center transition-colors disabled:opacity-50"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}

            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-accent-cyan" />
                <span>hello@zorventech.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-primary-400" />
                <span>+977-9814702731</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 border-t border-slate-900 mt-8">
          <div className="text-center md:text-left">
            &copy; {new Date().getFullYear()} Zorven Tech IT Solutions Pvt. Ltd. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 sm:gap-5">
            <Link href="/privacy-policy" className="hover:text-slate-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-400 transition-colors">Terms of Service</Link>
            <Link href="/contact" className="hover:text-slate-400 transition-colors">Security & Compliance</Link>
            <Link href="/client/login" className="hover:text-slate-400 transition-colors">Client Portal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
