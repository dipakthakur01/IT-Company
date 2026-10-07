'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Lock, Mail, ArrowRight, ShieldCheck, AlertCircle, Zap, CheckCircle2 } from 'lucide-react';

function AdminLoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const directParam = searchParams.get('direct');
  const autologinParam = searchParams.get('autologin');

  // Pre-typed admin credentials by default
  const [email, setEmail] = useState('admin@zorventech.com');
  const [password, setPassword] = useState('Admin@ZorvenTech2026!');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const performDirectLogin = () => {
    setLoading(true);
    localStorage.setItem('zorven_admin_token', 'demo-admin-jwt-token-2026');
    localStorage.setItem(
      'zorven_admin_user',
      JSON.stringify({
        name: 'Alex Harrison',
        email: 'admin@zorventech.com',
        role: 'super_admin'
      })
    );
    router.push('/admin/dashboard');
  };

  // Auto-login if accessed via direct link (?direct=true or ?autologin=true)
  useEffect(() => {
    if (directParam === 'true' || autologinParam === 'true' || autologinParam === '1') {
      performDirectLogin();
    }
  }, [directParam, autologinParam]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();
      if (res.ok && data.success) {
        localStorage.setItem('zorven_admin_token', data.token);
        localStorage.setItem('zorven_admin_user', JSON.stringify(data.user));
        router.push('/admin/dashboard');
      } else {
        // Fallback authorization
        if (
          (email === 'admin@zorventech.com' && password === 'Admin@ZorvenTech2026!') ||
          (email === 'admin@neoncode.com' && password === 'Admin@NeonCode2026!')
        ) {
          performDirectLogin();
        } else {
          setError(data.message || 'Invalid administrator credentials.');
        }
      }
    } catch (err: any) {
      // Offline / Vercel demo fallback
      if (
        (email === 'admin@zorventech.com' && password === 'Admin@ZorvenTech2026!') ||
        (email === 'admin@neoncode.com' && password === 'Admin@NeonCode2026!')
      ) {
        performDirectLogin();
      } else {
        setError('Cannot connect to authentication service.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
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
          Enterprise Admin Gateway
        </p>
      </div>

      <div className="rounded-3xl bg-white border border-border shadow-elevated p-8 space-y-6">
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-text-primary">Admin Authentication</h2>
            <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
              <CheckCircle2 className="w-3 h-3" /> Pre-Filled
            </span>
          </div>
          <p className="text-xs text-text-secondary">
            Administrator credentials have been pre-typed for instant access.
          </p>
        </div>

        {/* 1-Click Instant Login Button */}
        <button
          type="button"
          onClick={performDirectLogin}
          disabled={loading}
          className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-xs shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-2 transition-all active:scale-[0.99] border border-emerald-500/30"
        >
          <Zap className="w-4 h-4 fill-current text-amber-300" />
          <span>{loading ? 'Authenticating...' : '⚡ 1-Click Direct Admin Access'}</span>
          <ArrowRight className="w-3.5 h-3.5 ml-1" />
        </button>

        <div className="relative flex items-center justify-center">
          <div className="border-t border-slate-200 w-full" />
          <span className="bg-white px-3 text-[11px] uppercase tracking-wider text-slate-400 font-mono font-medium">
            or sign in with form
          </span>
        </div>

        {error && (
          <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="text-xs font-semibold text-text-secondary">Administrator Email</label>
            <div className="relative mt-1">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-primary-500 bg-slate-50/50"
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
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-primary-500 bg-slate-50/50"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-bold text-xs shadow-premium flex items-center justify-center gap-2 transition-all disabled:opacity-50"
          >
            <span>{loading ? 'Authenticating...' : 'Sign In to Admin CMS'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </form>

        <div className="pt-2 text-center flex items-center justify-between text-xs">
          <Link href="/" className="text-primary-600 hover:underline">
            &larr; Return to Public Website
          </Link>
          <Link href="/client/login" className="text-slate-500 hover:text-slate-700">
            Client Portal &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-tech-grid p-4">
      <Suspense fallback={<div className="text-xs text-slate-500">Loading admin gateway...</div>}>
        <AdminLoginForm />
      </Suspense>
    </div>
  );
}
