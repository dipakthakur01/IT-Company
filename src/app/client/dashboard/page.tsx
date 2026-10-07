'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import {
  CheckCircle2,
  Clock,
  FileText,
  LifeBuoy,
  LogOut,
  ArrowRight,
  Download,
  Send,
  Calendar,
  Layers,
  ShieldCheck
} from 'lucide-react';

export default function ClientDashboardPage() {
  const router = useRouter();
  const [client, setClient] = useState<any>({ name: 'Sarah Jenkins', company: 'Acme Corp' });
  const [activeTab, setActiveTab] = useState<'overview' | 'milestones' | 'invoices' | 'support'>('overview');
  const [ticketSubject, setTicketSubject] = useState('');
  const [ticketMessage, setTicketMessage] = useState('');
  const [ticketSubmitted, setTicketSubmitted] = useState<string | null>(null);

  useEffect(() => {
    const raw = localStorage.getItem('zorven_client_user') || localStorage.getItem('neon_client_user');
    if (raw) {
      try {
        setClient(JSON.parse(raw));
      } catch (e) {}
    }
  }, []);

  const handleCreateTicket = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ticketSubject || !ticketMessage) return;
    const ticketId = `TCK-${Math.floor(1000 + Math.random() * 9000)}`;
    setTicketSubmitted(ticketId);
    setTicketSubject('');
    setTicketMessage('');
  };

  return (
    <div className="min-h-screen bg-[#F6F8FC] flex flex-col font-sans">
      {/* Top Client Navbar */}
      <header className="bg-white border-b border-border px-6 py-4 flex items-center justify-between sticky top-0 z-30 shadow-subtle">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative w-8 h-8 flex-shrink-0 drop-shadow-[0_2px_8px_rgba(0,98,227,0.3)]">
              <Image
                src="/logo-mark.png"
                alt="Zorven Tech"
                width={32}
                height={32}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-bold text-base tracking-tight text-text-primary group-hover:text-primary-600 transition-colors">
              Zorven Tech <span className="text-text-muted font-normal text-sm">Client Portal</span>
            </span>
          </Link>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-bold border border-emerald-200">
            Active Project: Acme Enterprise Modernization
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold">
              {client.name?.[0] || 'S'}
            </div>
            <span className="font-semibold text-text-primary hidden sm:inline">{client.name}</span>
          </div>
          <button
            onClick={() => {
              localStorage.removeItem('zorven_client_user');
              localStorage.removeItem('neon_client_user');
              router.push('/client/login');
            }}
            className="p-1.5 rounded-lg text-slate-400 hover:text-rose-500 hover:bg-slate-100 transition-colors"
            title="Log out"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Main Container */}
      <div className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 space-y-8">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 border-b border-border pb-4">
          {[
            { id: 'overview', label: 'Project Progress (68%)', icon: Layers },
            { id: 'milestones', label: 'Milestones (4 Phases)', icon: Calendar },
            { id: 'invoices', label: 'Invoices & Billing', icon: FileText },
            { id: 'support', label: 'Support & Tickets', icon: LifeBuoy }
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === tab.id
                    ? 'bg-slate-900 text-white shadow-subtle'
                    : 'bg-white text-text-secondary hover:text-text-primary hover:bg-slate-50 border border-border'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* TAB 1: OVERVIEW */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Status Card */}
            <div className="p-8 rounded-3xl bg-white border border-border shadow-subtle space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-mono text-primary-600 font-bold uppercase">Active Contract</div>
                  <h2 className="text-2xl font-bold text-text-primary">Acme Enterprise Modernization</h2>
                  <p className="text-xs text-text-secondary mt-1">
                    Lead Architect: <strong>Dipak Thakur</strong> • Target Launch: <strong>November 20, 2026</strong>
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-extrabold text-primary-600 font-mono">68%</div>
                  <div className="text-xs text-text-muted font-medium">Sprint Completion</div>
                </div>
              </div>

              {/* Progress bar */}
              <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-primary-500 to-cyan-400 rounded-full w-[68%]" />
              </div>

              {/* Quick Deliverable Links */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <div className="font-bold text-text-primary text-xs">Staging URL</div>
                  <div className="text-[11px] font-mono text-primary-600 hover:underline cursor-pointer">
                    acme-staging.zorventech.com
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <div className="font-bold text-text-primary text-xs">Figma Design System</div>
                  <div className="text-[11px] font-mono text-primary-600 hover:underline cursor-pointer">
                    figma.com/file/acme-tokens
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <div className="font-bold text-text-primary text-xs">API Documentation</div>
                  <div className="text-[11px] font-mono text-primary-600 hover:underline cursor-pointer">
                    api.acme-staging.com/docs
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: MILESTONES */}
        {activeTab === 'milestones' && (
          <div className="p-8 rounded-3xl bg-white border border-border shadow-subtle space-y-6">
            <h3 className="text-lg font-bold text-text-primary">Sprint Delivery Milestones</h3>
            <div className="space-y-4">
              {[
                { title: 'Discovery & System Specifications', status: 'Completed', date: 'October 02', desc: 'Wireframes, entity relationship diagrams (ERD), and technical scope approved.' },
                { title: 'Figma UI/UX & Design Tokens', status: 'Completed', date: 'October 14', desc: 'Interactive prototypes, responsive layouts, and WCAG AA contrast review.' },
                { title: 'Next.js Frontend & Core REST APIs', status: 'In Progress', date: 'November 04', desc: 'Active implementation of user authentication, catalog filters, and MySQL indexing.' },
                { title: 'Security Audit & Cloud Deployment', status: 'Upcoming', date: 'November 20', desc: 'Penetration testing, Docker containerization on AWS, and production cutover.' }
              ].map((m, i) => (
                <div key={i} className="p-5 rounded-2xl bg-[#F8FAFC] border border-border flex items-start gap-4">
                  <div className={`p-2 rounded-xl mt-0.5 ${
                    m.status === 'Completed' ? 'bg-emerald-100 text-emerald-600' : m.status === 'In Progress' ? 'bg-blue-100 text-primary-600' : 'bg-slate-200 text-slate-500'
                  }`}>
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-sm text-text-primary">{m.title}</h4>
                      <span className="text-[11px] font-mono text-text-muted">{m.date}</span>
                    </div>
                    <p className="text-xs text-text-secondary">{m.desc}</p>
                    <span className={`inline-block mt-2 text-[10px] font-mono px-2 py-0.5 rounded-full font-bold uppercase ${
                      m.status === 'Completed' ? 'bg-emerald-50 text-emerald-700' : m.status === 'In Progress' ? 'bg-blue-50 text-primary-700' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {m.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: INVOICES */}
        {activeTab === 'invoices' && (
          <div className="p-8 rounded-3xl bg-white border border-border shadow-subtle space-y-6">
            <h3 className="text-lg font-bold text-text-primary">Milestone Invoices & Statements</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead className="bg-slate-50 text-text-muted font-mono uppercase border-y border-border">
                  <tr>
                    <th className="py-2.5 px-4">Invoice #</th>
                    <th className="py-2.5 px-4">Milestone Description</th>
                    <th className="py-2.5 px-4">Amount</th>
                    <th className="py-2.5 px-4">Due Date</th>
                    <th className="py-2.5 px-4">Status</th>
                    <th className="py-2.5 px-4">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="py-3 px-4 font-mono font-bold">INV-2026-081</td>
                    <td className="py-3 px-4 text-text-primary">Phase 1: Architecture & UI/UX Signoff</td>
                    <td className="py-3 px-4 font-bold font-mono">$4,500.00</td>
                    <td className="py-3 px-4">Oct 05, 2026</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-mono font-bold">
                        PAID
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <button className="text-primary-600 hover:underline font-semibold flex items-center gap-1">
                        <Download className="w-3.5 h-3.5" /> Receipt
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-mono font-bold">INV-2026-094</td>
                    <td className="py-3 px-4 text-text-primary">Phase 2: Core Engineering & Staging Demo</td>
                    <td className="py-3 px-4 font-bold font-mono">$4,500.00</td>
                    <td className="py-3 px-4">Nov 05, 2026</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-mono font-bold">
                        PENDING
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <button className="text-primary-600 hover:underline font-semibold flex items-center gap-1">
                        <Download className="w-3.5 h-3.5" /> Invoice PDF
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 4: SUPPORT */}
        {activeTab === 'support' && (
          <div className="p-8 rounded-3xl bg-white border border-border shadow-subtle space-y-6 max-w-2xl">
            <h3 className="text-lg font-bold text-text-primary border-b border-border pb-3">Open Engineering Support Ticket</h3>

            {ticketSubmitted ? (
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs space-y-2">
                <div className="font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Support Ticket Submitted!</span>
                </div>
                <p>Ticket Number: <strong className="font-mono">{ticketSubmitted}</strong></p>
                <p className="text-[11px]">Your assigned technical lead has been notified.</p>
                <button
                  onClick={() => setTicketSubmitted(null)}
                  className="px-4 py-1.5 rounded-lg bg-emerald-700 text-white font-bold text-xs"
                >
                  Create Another Ticket
                </button>
              </div>
            ) : (
              <form onSubmit={handleCreateTicket} className="space-y-4 text-xs">
                <div>
                  <label className="font-semibold text-text-secondary block mb-1">Subject</label>
                  <input
                    type="text"
                    required
                    value={ticketSubject}
                    onChange={(e) => setTicketSubject(e.target.value)}
                    placeholder="e.g. Staging server environment variable update"
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-primary-500"
                  />
                </div>

                <div>
                  <label className="font-semibold text-text-secondary block mb-1">Priority</label>
                  <select className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs bg-white">
                    <option>Standard / General</option>
                    <option>High Priority</option>
                    <option>Urgent Blocker</option>
                  </select>
                </div>

                <div>
                  <label className="font-semibold text-text-secondary block mb-1">Message Details</label>
                  <textarea
                    required
                    rows={4}
                    value={ticketMessage}
                    onChange={(e) => setTicketMessage(e.target.value)}
                    placeholder="Please explain the issue or question in detail..."
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-primary-500"
                  />
                </div>

                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-bold text-xs shadow-subtle flex items-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Transmit Ticket</span>
                </button>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
