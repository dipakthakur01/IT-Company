import React from 'react';

const CLIENT_LOGOS = [
  { name: 'Apex Capital Partners', sector: 'Fintech' },
  { name: 'Zenith Global Retail', sector: 'E-Commerce' },
  { name: 'CuraHealth Systems', sector: 'Healthcare' },
  { name: 'PropStream Properties', sector: 'Real Estate' },
  { name: 'Nexus Logistics', sector: 'Supply Chain' },
  { name: 'EduSphere Learning', sector: 'EdTech' },
  { name: 'Vanguard Media', sector: 'Publishing' },
  { name: 'Horizon Cloud SaaS', sector: 'Software' }
];

export default function ClientsMarquee() {
  return (
    <div className="py-6 bg-[#F8FAFC] border-b border-border overflow-hidden w-full max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
        <p className="text-xs uppercase tracking-widest font-semibold text-text-muted">
          Trusted by Businesses Building Their Digital Future
        </p>
      </div>

      <div className="relative overflow-hidden mask-marquee group">
        {/* Subtle fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10" />

        <div className="flex items-center space-x-12 animate-marquee w-max group-hover:[animation-play-state:paused] will-change-transform py-1">
          {/* Exactly 2 identical sets for seamless continuous 50% loop */}
          {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((client, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center px-6 py-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs hover:border-primary-400 transition-all hover:scale-105 cursor-default group/item select-none"
            >
              <span className="text-sm font-bold text-slate-700 group-hover/item:text-primary-600 transition-colors whitespace-nowrap">
                {client.name}
              </span>
              <span className="text-[10px] text-text-muted uppercase tracking-wider font-mono">
                {client.sector}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
