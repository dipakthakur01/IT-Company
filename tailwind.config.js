/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F6F8FC',
        surface: '#FFFFFF',
        'surface-subtle': '#F0F4FA',
        'text-primary': '#050E26', // Midnight Navy from logo typography
        'text-secondary': '#475569',
        'text-muted': '#94A3B8',
        border: '#E2E8F0',
        primary: {
          50: '#F0F7FF',
          100: '#E0EFFF',
          200: '#B9DDFF',
          300: '#7CC2FF',
          400: '#2BA3FF',
          500: '#0062E3', // Zorven Tech Primary Blue (dominant metallic facet)
          600: '#0052C0',
          700: '#003E99',
          800: '#002C75',
          900: '#001A52',
          DEFAULT: '#0062E3'
        },
        accent: {
          cyan: '#00C8FF', // Zorven Tech Forward Arrow Electric Cyan
          'cyan-bright': '#38E1FF',
          azure: '#38BDF8',
          cobalt: '#0052C0',
          navy: '#050E26',
          violet: '#6366F1',
          emerald: '#10B981',
          amber: '#F59E0B'
        },
        dark: {
          base: '#040814', // Midnight Sapphire dark background
          surface: '#081124',
          card: '#0D1B36',
          border: '#152A54'
        }
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'Plus Jakarta Sans', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'monospace'],
        georgia: ['"Georgia Pro"', 'Georgia', 'Cambria', 'serif']
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px 0 rgba(0, 0, 0, 0.02)',
        'premium': '0 10px 30px -10px rgba(0, 98, 227, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.03)',
        'elevated': '0 20px 40px -15px rgba(0, 98, 227, 0.16), 0 0 20px -5px rgba(0, 0, 0, 0.04)',
        'glow': '0 0 25px -4px rgba(0, 98, 227, 0.45)',
        'glow-cyan': '0 0 25px -4px rgba(0, 200, 255, 0.5)'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' }
        },
        pulseSubtle: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.6 }
        },
        fadeIn: {
          '0%': { opacity: 0, transform: 'scale(0.98)' },
          '100%': { opacity: 1, transform: 'scale(1)' }
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(16px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        }
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        'marquee-fast': 'marquee 18s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in-up': 'fadeInUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        float: 'float 4s ease-in-out infinite',
        shimmer: 'shimmer 2.5s infinite linear'
      }
    },
  },
  plugins: [],
}
