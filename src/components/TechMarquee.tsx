import React from 'react';

const TECH_ITEMS = [
  'Next.js',
  'React',
  'TypeScript',
  'Node.js',
  'Express.js',
  'MySQL',
  'PostgreSQL',
  'Redis',
  'Docker',
  'AWS Cloud',
  'GraphQL',
  'Tailwind CSS',
  'Python / Django',
  'Laravel',
  'Cloudflare',
  'OpenAI LLM'
];

export default function TechMarquee() {
  return (
    <div className="relative py-3.5 bg-white border-y border-border overflow-hidden mask-marquee group w-full max-w-full">
      {/* Left/Right subtle fade gradients */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

      <div className="flex items-center space-x-8 animate-marquee w-max group-hover:[animation-play-state:paused] will-change-transform">
        {/* Exactly 2 identical sets for seamless continuous 50% loop */}
        {[...TECH_ITEMS, ...TECH_ITEMS].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 text-sm font-mono font-medium text-slate-500 hover:text-primary-600 transition-colors cursor-default select-none"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
            <span className="tracking-wide uppercase text-xs">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
