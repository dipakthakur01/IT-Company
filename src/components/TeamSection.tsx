'use client';

import React, { useState } from 'react';
import { Linkedin, Github, ExternalLink } from 'lucide-react';
import { fallbackTeam } from '@/lib/mockData';

interface TeamSectionProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  excludeFounder?: boolean;
}

export default function TeamSection({
  badge = 'ENGINEERING LEADERSHIP & SQUADS',
  title = 'Specialized Domain Architects & Systems Engineers.',
  subtitle = 'Our squad combines senior systems engineering, design systems architecture, and distributed database optimization.',
  excludeFounder = false,
}: TeamSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const baseList = excludeFounder
    ? fallbackTeam.filter((m) => m.id !== 'team-001')
    : fallbackTeam;

  const categories = ['all', 'frontend', 'backend', 'uiux', 'cloud', 'security'];

  const filteredMembers = activeCategory === 'all'
    ? baseList
    : baseList.filter((m) => m.category === activeCategory);

  return (
    <section id="team" className="py-14 md:py-20 bg-[#F4F5F7] border-b border-border scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-primary-600 bg-primary-50 px-3.5 py-1.5 rounded-full border border-primary-100">
            {badge}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-text-primary">
            {title}
          </h2>
          <p className="text-base text-text-secondary leading-relaxed">
            {subtitle}
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1 rounded-full text-xs font-mono font-medium capitalize transition-all ${
                  activeCategory === cat
                    ? 'bg-primary-600 text-white shadow-subtle'
                    : 'bg-white border border-border text-text-secondary hover:text-primary-600 hover:border-primary-300'
                }`}
              >
                {cat === 'all' ? 'All Squad Leads' : cat === 'uiux' ? 'UI/UX Design' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredMembers.map((member) => (
            <div
              key={member.id}
              className="rounded-2xl bg-white border border-border p-6 shadow-subtle hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-square rounded-xl overflow-hidden mb-5 bg-slate-100 flex items-center justify-center">
                  <img
                    src={member.avatar || '/team-profile.png'}
                    alt={member.name}
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/team-profile.png';
                    }}
                    className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${
                      (member.avatar || '').includes('team-profile')
                        ? 'object-contain p-8 bg-gradient-to-b from-slate-50 to-slate-100'
                        : 'object-cover'
                    }`}
                  />
                  <div className="absolute top-2 right-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-900/80 backdrop-blur-md text-[10px] uppercase font-mono font-bold text-white">
                      {member.category}
                    </span>
                  </div>
                </div>

                <h3 className="text-base font-bold text-text-primary mb-1 group-hover:text-primary-600 transition-colors">
                  {member.name}
                </h3>
                <div className="text-xs font-semibold text-primary-600 mb-2">
                  {member.position}
                </div>
                <p className="text-xs text-text-secondary leading-relaxed mb-4">
                  {member.expertise}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  {member.linkedin_url && (
                    <a
                      href={member.linkedin_url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${member.name} LinkedIn`}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-primary-600 hover:bg-slate-50 transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                  {member.github_url && (
                    <a
                      href={member.github_url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${member.name} GitHub`}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-primary-600 hover:bg-slate-50 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>

                <span className="text-[10px] font-mono text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded">
                  Active
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
