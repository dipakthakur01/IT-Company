'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Lock, Mail, ArrowRight, ShieldCheck, AlertCircle } from 'lucide-react';

export default function ClientLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('sarah.j@acmecorp.com');
  const [password, setPassword] = useState('Client@2026!');
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      const userData = JSON.stringify({
        name: 'Sarah Jenkins',
        email,
        company: 'Acme Global Corp',
        activeProjectId: 'cp-01'
      });
      localStorage.setItem('zorven_client_user', userData);
      localStorage.setItem('neon_client_user', userData);
      router.push('/client/dashboard');
    }, 400);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-tech-grid p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8 space-y-2">
          <Link href="/" className="inline-flex items-center gap-2.5 group">
            <div className="relative w-11 h-11 flex-shrink-0 transition-transform group-hover:scale-105 drop-shadow-[0_4px_12px_rgba(0,98,227,0.35)]">
              <Image
                src="/logo-mark.png"
                alt="Zorven Tech"
                width={44}
                height={44}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-2xl font-black tracking-tight text-text-primary group-hover:text-primary-600 transition-colors font-display">
                ZORVEN <span className="text-primary-600">TECH</span>
              </span>
              <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-text-muted -mt-1">
                IT Solutions
              </span>
            </div>
          </Link>
          <p className="text-xs uppercase tracking-wider font-mono text-text-muted">
            Client Project & Support Portal
          </p>
        </div>

        <div className="rounded-3xl bg-white border border-border shadow-elevated p-8 space-y-6">
          <div className="space-y-1">
            <h2 className="text-xl font-bold text-text-primary">Client Portal Access</h2>
            <p className="text-xs text-text-secondary">
              Track project milestones, download deliverables, and manage support tickets.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="text-xs font-semibold text-text-secondary">Client Email</label>
              <div className="relative mt-1">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-primary-500"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-text-secondary">Password</label>
              <div className="relative mt-1">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-primary-500"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-bold text-xs shadow-premium flex items-center justify-center gap-2 transition-all"
            >
              <span>{loading ? 'Accessing Workspace...' : 'Enter Client Portal'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>

          <div className="pt-2 text-center">
            <Link href="/" className="text-xs text-primary-600 hover:underline">
              &larr; Return to Public Website
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
