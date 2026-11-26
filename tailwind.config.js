/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        quest: {
          bg: '#FBF9F5',
          surface: '#FFFFFF',
          cream: '#F5EFE6',
          parchment: '#EFE7DA',
          border: '#E2D8C9',
          gold: '#D97706',
          'gold-light': '#FDE68A',
          'gold-dark': '#B45309',
          emerald: '#059669',
          'emerald-light': '#A7F3D0',
          forest: '#15803D',
          sky: '#0284C7',
          'sky-light': '#BAE6FD',
          indigo: '#4F46E5',
          purple: '#7C3AED',
          'purple-light': '#DDD6FE',
          ruby: '#E11D48',
          text: '#1F2937',
          'text-muted': '#6B7280',
        }
      },
      fontFamily: {
        game: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Cinzel', 'Trajan Pro', 'Georgia', 'serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'Consolas', 'monospace']
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(100, 80, 50, 0.08)',
        'card': '0 10px 25px -5px rgba(80, 60, 40, 0.08), 0 8px 10px -6px rgba(80, 60, 40, 0.04)',
        'glow-gold': '0 0 25px rgba(217, 119, 6, 0.35)',
        'glow-emerald': '0 0 25px rgba(5, 150, 105, 0.35)',
        'glow-sky': '0 0 25px rgba(2, 132, 199, 0.35)',
        'inner-light': 'inset 0 2px 4px 0 rgba(255, 255, 255, 0.6)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        pulseGlow: 'pulseGlow 2s ease-in-out infinite',
        spinSlow: 'spinSlow 12s linear infinite',
      }
    },
  },
  plugins: [],
}
