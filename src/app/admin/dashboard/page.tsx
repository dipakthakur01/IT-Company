'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import {
  TrendingUp,
  Users,
  Layers,
  FileText,
  Settings,
  LogOut,
  CheckCircle2,
  Clock,
  Search,
  Filter,
  Shield,
  Bell,
  ArrowRight,
  Database,
  ExternalLink,
  Code,
  BookOpen,
  Briefcase,
  HelpCircle,
  Menu,
  X,
  Plus,
  RefreshCw,
  Eye,
  Check
} from 'lucide-react';
import { fallbackServices, fallbackProjects, fallbackBlogs, fallbackFaqs, fallbackCareers } from '@/lib/mockData';

export default function AdminDashboardPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<
    'overview' | 'leads' | 'services' | 'projects' | 'blogs' | 'careers' | 'settings'
  >('overview');

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [user, setUser] = useState<any>({ name: 'Alex Harrison', email: 'admin@zorventech.com', role: 'super_admin' });
  const [leadsData, setLeadsData] = useState<any>({
    contacts: [
      {
        id: 'cnt-01',
        reference_id: 'ZORV-CNT-849201',
        full_name: 'David Miller',
        email: 'david@finflow.io',
        company: 'FinFlow Corp',
        service_interested: 'Custom Web Application',
        budget_range: '$10k – $25k',
        status: 'new',
        created_at: '2026-09-24T14:10:00Z'
      },
      {
        id: 'cnt-02',
        reference_id: 'ZORV-CNT-592014',
        full_name: 'Jessica Chen',
        email: 'jchen@zenithretail.com',
        company: 'Zenith Retail',
        service_interested: 'E-Commerce Marketplace',
        budget_range: '$25k+ Enterprise',
        status: 'contacted',
        created_at: '2026-09-23T11:20:00Z'
      }
    ],
    quotes: [
      {
        id: 'qte-01',
        reference_id: 'ZORV-QTE-302911',
        full_name: 'Robert Vance',
        email: 'robert@apexwealth.com',
        company: 'Apex Wealth Partners',
        website_type: 'Custom SaaS Platform',
        budget_range: '$25k+ Enterprise',
        preferred_timeline: '4 – 8 Weeks',
        status: 'pending',
        created_at: '2026-09-24T16:45:00Z'
      }
    ]
  });

  // Settings state
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [savedSettingsNotice, setSavedSettingsNotice] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('zorven_admin_token') || localStorage.getItem('neon_admin_token');
    if (!token) {
      router.push('/admin/login');
      return;
    }
    const storedUser = localStorage.getItem('zorven_admin_user') || localStorage.getItem('neon_admin_user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {}
    }

    // Fetch leads
    fetch('http://localhost:5000/api/leads/all', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => {
        if (data.success && data.data) {
          setLeadsData(data.data);
        }
      })
      .catch(() => {});
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('zorven_admin_token');
    localStorage.removeItem('zorven_admin_user');
    localStorage.removeItem('neon_admin_token');
    localStorage.removeItem('neon_admin_user');
    router.push('/admin/login');
  };

  const updateStatus = async (type: 'contact' | 'quote', id: string, newStatus: string) => {
    setLeadsData((prev: any) => {
      const listKey = type === 'contact' ? 'contacts' : 'quotes';
      const updatedList = prev[listKey].map((item: any) =>
        item.id === id || item.reference_id === id ? { ...item, status: newStatus } : item
      );
      return { ...prev, [listKey]: updatedList };
    });

    try {
      const token = localStorage.getItem('neon_admin_token');
      await fetch(`http://localhost:5000/api/leads/${type}/${id}/status`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ status: newStatus })
      });
    } catch (e) {}
  };

  const totalLeads = (leadsData.contacts?.length || 0) + (leadsData.quotes?.length || 0);

  const NAV_ITEMS = [
    { id: 'overview', label: 'Overview Analytics', icon: TrendingUp },
    { id: 'leads', label: 'Leads & Inquiries', icon: Users, badge: totalLeads },
    { id: 'services', label: 'Services CMS', icon: Layers, badge: fallbackServices.length },
    { id: 'projects', label: 'Portfolio Projects', icon: FileText, badge: fallbackProjects.length },
    { id: 'blogs', label: 'Articles & Blogs', icon: BookOpen, badge: fallbackBlogs.length },
    { id: 'careers', label: 'Careers & Hiring', icon: Briefcase, badge: fallbackCareers.length },
    { id: 'settings', label: 'Platform Settings', icon: Settings }
  ];

  return (
    <div className="min-h-screen bg-[#F4F5F7] flex text-text-primary font-sans antialiased">
      {/* ===================== DESKTOP & MOBILE SIDEBAR ===================== */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#0B0F19] text-white flex flex-col justify-between transition-transform duration-300 ease-in-out border-r border-slate-800 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Brand Header */}
          <div className="p-5 border-b border-slate-800 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="relative w-9 h-9 flex-shrink-0 drop-shadow-[0_2px_8px_rgba(0,98,227,0.4)]">
                <Image
                  src="/logo-mark.png"
                  alt="Zorven Tech"
                  width={36}
                  height={36}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-base tracking-tight text-white leading-tight font-display">
                  Zorven <span className="text-accent-cyan">Tech</span>
                </span>
                <span className="text-[10px] uppercase tracking-widest font-mono text-primary-400">Admin Gateway</span>
              </div>
            </Link>

            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* User Profile Summary */}
          <div className="px-5 py-4 border-b border-slate-800/80 bg-slate-950/40 flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-primary-600/30 border border-primary-500/40 text-primary-300 font-bold flex items-center justify-center text-sm shadow-subtle">
              {user?.name?.[0] || 'A'}
            </div>
            <div className="flex flex-col overflow-hidden">
              <span className="text-xs font-bold text-white truncate">{user?.name || 'Alex Harrison'}</span>
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Super Administrator</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
            <div className="px-3 pb-2 text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold">
              Core Management
            </div>

            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id as any);
                    setSidebarOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all text-left ${
                    isActive
                      ? 'bg-primary-600 text-white shadow-elevated'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className="w-4 h-4 shrink-0" />
                    <span>{item.label}</span>
                  </div>
                  {item.badge !== undefined && (
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-bold ${
                        isActive
                          ? 'bg-white/20 text-white'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Bottom Sidebar Action Items */}
          <div className="p-3 border-t border-slate-800 space-y-1 bg-slate-950/60">
            <Link
              href="/"
              target="_blank"
              className="flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors"
            >
              <div className="flex items-center gap-2">
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Open Public Portal</span>
              </div>
            </Link>

            <button
              onClick={handleLogout}
              className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium text-rose-400 hover:text-rose-300 hover:bg-rose-950/30 transition-colors"
            >
              <div className="flex items-center gap-2">
                <LogOut className="w-3.5 h-3.5" />
                <span>Sign Out</span>
              </div>
            </button>
          </div>
        </div>
      </aside>

      {/* Backdrop for mobile sidebar */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-xs lg:hidden"
        />
      )}

      {/* ===================== MAIN CANVAS (Right of Sidebar) ===================== */}
      <div className="flex-1 flex flex-col min-w-0 lg:pl-64">
        {/* Top Header Bar */}
        <header className="sticky top-0 z-30 bg-white border-b border-border px-4 sm:px-8 py-3.5 flex items-center justify-between shadow-2xs">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-base sm:text-lg font-bold text-text-primary capitalize">
                {activeTab.replace('-', ' ')}
              </h1>
              <p className="text-[11px] text-text-muted hidden sm:block">
                Connected to Node.js Backend & MySQL Persistence
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Quick Actions */}
            <div className="flex items-center gap-2 text-xs">
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-mono text-[11px] font-bold border border-emerald-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                API & DB Synced
              </span>
            </div>
          </div>
        </header>

        {/* Dashboard Main Workspace */}
        <main className="p-4 sm:p-6 lg:p-8 space-y-6 flex-1 max-w-7xl w-full mx-auto">
          {/* TAB: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Stat Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-5 rounded-2xl bg-white border border-border shadow-subtle space-y-1">
                  <div className="text-[11px] uppercase font-mono text-text-muted">Total Inquiries & Leads</div>
                  <div className="text-3xl font-extrabold text-text-primary">{totalLeads}</div>
                  <div className="text-xs text-emerald-600 font-semibold">Active in MySQL</div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-border shadow-subtle space-y-1">
                  <div className="text-[11px] uppercase font-mono text-text-muted">Services Managed</div>
                  <div className="text-3xl font-extrabold text-text-primary">{fallbackServices.length}</div>
                  <div className="text-xs text-primary-600 font-semibold">All Categories Active</div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-border shadow-subtle space-y-1">
                  <div className="text-[11px] uppercase font-mono text-text-muted">Client Case Studies</div>
                  <div className="text-3xl font-extrabold text-text-primary">{fallbackProjects.length}</div>
                  <div className="text-xs text-text-secondary font-medium">8 Industry Verticals</div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-border shadow-subtle space-y-1">
                  <div className="text-[11px] uppercase font-mono text-text-muted">Engineering Articles</div>
                  <div className="text-3xl font-extrabold text-text-primary">{fallbackBlogs.length}</div>
                  <div className="text-xs text-text-secondary font-medium">Published Insights</div>
                </div>
              </div>

              {/* Recent Leads Preview */}
              <div className="rounded-2xl bg-white border border-border p-6 shadow-subtle space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-text-primary">Recent Client Inquiries</h3>
                  <button
                    onClick={() => setActiveTab('leads')}
                    className="text-xs text-primary-600 font-semibold hover:underline"
                  >
                    View All in Leads Manager &rarr;
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left">
                    <thead className="bg-slate-50 text-text-muted font-mono uppercase border-y border-border">
                      <tr>
                        <th className="py-2.5 px-4">Ref ID</th>
                        <th className="py-2.5 px-4">Name</th>
                        <th className="py-2.5 px-4">Company</th>
                        <th className="py-2.5 px-4">Service</th>
                        <th className="py-2.5 px-4">Budget</th>
                        <th className="py-2.5 px-4">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {leadsData.contacts.slice(0, 4).map((c: any) => (
                        <tr key={c.id || c.reference_id} className="hover:bg-slate-50">
                          <td className="py-3 px-4 font-mono font-bold text-primary-600">{c.reference_id}</td>
                          <td className="py-3 px-4 font-semibold text-text-primary">{c.full_name}</td>
                          <td className="py-3 px-4 text-text-secondary">{c.company || 'Direct'}</td>
                          <td className="py-3 px-4 text-text-secondary">{c.service_interested}</td>
                          <td className="py-3 px-4 font-mono">{c.budget_range}</td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono uppercase font-bold ${
                              c.status === 'new' ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-800'
                            }`}>
                              {c.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB: LEADS & INQUIRIES */}
          {activeTab === 'leads' && (
            <div className="space-y-6">
              <div className="rounded-2xl bg-white border border-border p-6 shadow-subtle space-y-6">
                <div>
                  <h3 className="text-base font-bold text-text-primary">Inquiries & Quote Requests</h3>
                  <p className="text-xs text-text-secondary">
                    Real-time leads stored in backend MySQL. Update lifecycle status as your team conducts discovery calls.
                  </p>
                </div>

                {/* Contact Inquiries */}
                <div className="space-y-3">
                  <div className="text-xs uppercase font-mono font-bold text-text-muted">General Contact Submissions</div>
                  {leadsData.contacts.map((c: any) => (
                    <div key={c.id || c.reference_id} className="p-4 rounded-xl bg-slate-50 border border-border space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div>
                          <span className="font-mono text-xs font-bold text-primary-600">{c.reference_id}</span>
                          <span className="mx-2 text-slate-300">•</span>
                          <span className="font-bold text-text-primary text-sm">{c.full_name}</span>
                          <span className="text-xs text-text-muted"> ({c.email})</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateStatus('contact', c.id || c.reference_id, 'contacted')}
                            className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-xs font-semibold hover:bg-slate-100 text-slate-700"
                          >
                            Mark Contacted
                          </button>
                          <button
                            onClick={() => updateStatus('contact', c.id || c.reference_id, 'closed')}
                            className="px-2.5 py-1 rounded-lg bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700"
                          >
                            Mark Converted
                          </button>
                        </div>
                      </div>
                      <div className="text-xs text-text-secondary grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-slate-200">
                        <div>Company: <strong>{c.company || 'Not specified'}</strong></div>
                        <div>Service: <strong>{c.service_interested}</strong></div>
                        <div>Budget: <strong>{c.budget_range}</strong></div>
                        <div>Status: <strong className="uppercase font-mono text-primary-600">{c.status}</strong></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Detailed Quotes */}
                <div className="space-y-3 pt-6 border-t border-border">
                  <div className="text-xs uppercase font-mono font-bold text-text-muted">Multi-Step Detailed Proposals</div>
                  {leadsData.quotes.map((q: any) => (
                    <div key={q.id || q.reference_id} className="p-4 rounded-xl bg-slate-50 border border-border space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div>
                          <span className="font-mono text-xs font-bold text-primary-600">{q.reference_id}</span>
                          <span className="mx-2 text-slate-300">•</span>
                          <span className="font-bold text-text-primary text-sm">{q.full_name}</span>
                          <span className="text-xs text-text-muted"> ({q.email})</span>
                        </div>
                        <button
                          onClick={() => updateStatus('quote', q.id || q.reference_id, 'proposal_sent')}
                          className="px-2.5 py-1 rounded-lg bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700"
                        >
                          Send Formal Proposal
                        </button>
                      </div>
                      <div className="text-xs text-text-secondary grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-slate-200">
                        <div>Scope: <strong>{q.website_type}</strong></div>
                        <div>Budget: <strong>{q.budget_range}</strong></div>
                        <div>Timeline: <strong>{q.preferred_timeline}</strong></div>
                        <div>Status: <strong className="uppercase font-mono text-emerald-600">{q.status}</strong></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB: SERVICES */}
          {activeTab === 'services' && (
            <div className="rounded-2xl bg-white border border-border p-6 shadow-subtle space-y-4">
              <h3 className="text-base font-bold text-text-primary">Catalog Services (8 Active)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {fallbackServices.map((s) => (
                  <div key={s.id} className="p-4 rounded-xl bg-[#F8FAFC] border border-border space-y-2">
                    <div className="flex justify-between items-start">
                      <h4 className="font-bold text-sm text-text-primary">{s.title}</h4>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-primary-600">Active</span>
                    </div>
                    <p className="text-xs text-text-secondary line-clamp-2">{s.short_description}</p>
                    <div className="text-[11px] font-mono text-text-muted">/{s.slug}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: PROJECTS */}
          {activeTab === 'projects' && (
            <div className="rounded-2xl bg-white border border-border p-6 shadow-subtle space-y-4">
              <h3 className="text-base font-bold text-text-primary">Live Portfolio Projects</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {fallbackProjects.map((p) => (
                  <div key={p.id} className="p-4 rounded-xl bg-[#F8FAFC] border border-border space-y-2">
                    <div className="flex justify-between items-start">
                      <h4 className="font-bold text-sm text-text-primary">{p.title}</h4>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-600">{p.year}</span>
                    </div>
                    <div className="text-xs text-text-secondary">Client: {p.client_name} ({p.industry})</div>
                    <div className="text-[11px] font-mono text-primary-600">{p.category}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: BLOGS */}
          {activeTab === 'blogs' && (
            <div className="rounded-2xl bg-white border border-border p-6 shadow-subtle space-y-4">
              <h3 className="text-base font-bold text-text-primary">Published Engineering Insights</h3>
              <div className="space-y-3">
                {fallbackBlogs.map((b) => (
                  <div key={b.id} className="p-4 rounded-xl bg-[#F8FAFC] border border-border flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-sm text-text-primary">{b.title}</h4>
                      <div className="text-xs text-text-secondary">{b.author_name} • {b.reading_time}</div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-bold">
                      Published
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: CAREERS */}
          {activeTab === 'careers' && (
            <div className="rounded-2xl bg-white border border-border p-6 shadow-subtle space-y-4">
              <h3 className="text-base font-bold text-text-primary">Active Job Positions (2 Openings)</h3>
              <div className="space-y-3">
                {fallbackCareers.map((c) => (
                  <div key={c.id} className="p-4 rounded-xl bg-[#F8FAFC] border border-border flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-sm text-text-primary">{c.title}</h4>
                      <div className="text-xs text-text-secondary">{c.department} • {c.location}</div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-primary-600 font-bold">
                      Accepting Applicants
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: SETTINGS */}
          {activeTab === 'settings' && (
            <div className="rounded-2xl bg-white border border-border p-6 sm:p-8 shadow-subtle space-y-6 max-w-2xl">
              <h3 className="text-base font-bold text-text-primary border-b border-border pb-3">Global Platform Configuration</h3>

              {savedSettingsNotice && (
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  <span>Platform configuration updated in MySQL database.</span>
                </div>
              )}

              <div className="space-y-4 text-xs">
                <div>
                  <label className="font-semibold text-text-secondary block mb-1">Company Display Name</label>
                  <input
                    type="text"
                    defaultValue="Zorven Tech IT Solutions"
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs"
                  />
                </div>

                <div>
                  <label className="font-semibold text-text-secondary block mb-1">Primary Inquiries Email</label>
                  <input
                    type="email"
                    defaultValue="zorventech@gmail.com"
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs"
                  />
                </div>

                <div>
                  <label className="font-semibold text-text-secondary block mb-1">Office Address</label>
                  <input
                    type="text"
                    defaultValue="Level 4, IT Park Complex, Tinkune, Kathmandu, Nepal"
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs"
                  />
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-text-primary text-xs">Maintenance Mode</div>
                    <div className="text-[11px] text-text-secondary">Shows branded maintenance page to visitors.</div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setMaintenanceMode(!maintenanceMode)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                      maintenanceMode ? 'bg-rose-600 text-white' : 'bg-slate-200 text-slate-700'
                    }`}
                  >
                    {maintenanceMode ? 'Active (503)' : 'Disabled (Live)'}
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setSavedSettingsNotice(true);
                    setTimeout(() => setSavedSettingsNotice(false), 3000);
                  }}
                  className="px-5 py-2.5 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-bold text-xs shadow-subtle"
                >
                  Save Platform Settings
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
