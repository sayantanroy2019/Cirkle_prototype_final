I am building "Cirkle" — a social discovery web app that helps people find events,
join tribes, and meet IRL. The visual language is dark, bold, and energetic:
near-black backgrounds with neon yellow-green (#E7EA4A) accents, Bebas Neue for
all display/headline type, and Inter for all body/UI text.

════════════════════════════════════════
STACK — non-negotiable, follow exactly
════════════════════════════════════════
- React 18 (functional components + hooks only, no class components)
- Tailwind CSS v3 with a custom theme (details below)
- lucide-react for ALL icons — no other icon library
- @fontsource/bebas-neue and @fontsource/inter for fonts
- Vite as bundler

════════════════════════════════════════
PROJECT SETUP FILES — generate exactly as written
════════════════════════════════════════

── tailwind.config.js ──
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Bebas Neue"', 'Impact', 'sans-serif'],
        body:    ['"Inter"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      colors: {
        cirkle: {
          black:           '#060606',
          card:            '#161616',
          input:           '#1A1A1A',
          chip:            '#2A2A2A',
          border:          '#2A2A2A',
          'border-card':   '#3A3A3A',
          yellow:          '#E7EA4A',
          'yellow-hover':  '#D4D740',
          'text-white':    '#FFFFFF',
          'text-light':    '#C0C0C0',
          'text-muted':    '#8A8A8A',
          'text-dark':     '#111111',
          'text-placeholder': '#7D7D7D',
          'nav-bottom':    '#1A1A1A',
        },
      },
      fontSize: {
        'hero-desktop': ['96px', { lineHeight: '0.9',  letterSpacing: '-0.01em' }],
        'hero-mobile':  ['64px', { lineHeight: '0.9',  letterSpacing: '-0.01em' }],
        'hero-sm':      ['48px', { lineHeight: '0.92', letterSpacing: '0' }],
        'section-lg':   ['56px', { lineHeight: '0.92', letterSpacing: '-0.01em' }],
        'section-md':   ['36px', { lineHeight: '0.95', letterSpacing: '0' }],
        'section-sm':   ['28px', { lineHeight: '1.0',  letterSpacing: '0' }],
        'label':        ['12px', { lineHeight: '1.2',  letterSpacing: '0.15em' }],
      },
      borderRadius: { card: '12px' },
      boxShadow:    { card: '0 2px 8px rgba(0,0,0,0.3)' },
    },
  },
  plugins: [],
};

── src/index.css ──
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply bg-cirkle-black font-body text-white antialiased;
  }
  .scrollbar-hide::-webkit-scrollbar { display: none; }
  .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
}

@layer components {
  /* ── Buttons ── */
  .btn-primary {
    @apply inline-flex items-center justify-center
           bg-cirkle-yellow text-cirkle-text-dark
           font-body font-bold text-[15px] rounded-full
           transition-all duration-200
           hover:-translate-y-0.5 hover:shadow-lg hover:bg-cirkle-yellow-hover
           active:translate-y-0;
  }
  .btn-secondary {
    @apply inline-flex items-center justify-center
           bg-transparent text-white
           font-body font-semibold text-[15px]
           border-[1.5px] border-white/65 rounded-full
           transition-all duration-200
           hover:bg-white/10 hover:border-white/80
           active:bg-white/5;
  }
  .btn-small {
    @apply inline-flex items-center justify-center
           bg-cirkle-yellow text-cirkle-text-dark
           font-body font-bold text-[13px] rounded-full
           transition-all duration-200
           hover:-translate-y-0.5 hover:bg-cirkle-yellow-hover;
  }

  /* ── Cards ── */
  .card-dark {
    @apply bg-cirkle-card border border-cirkle-border-card rounded-card
           shadow-card transition-all duration-200
           hover:-translate-y-1 hover:border-cirkle-text-muted/30;
  }

  /* ── Chip / Tag ── */
  .chip {
    @apply inline-flex items-center px-2.5 py-1
           bg-cirkle-chip text-cirkle-text-light
           font-body text-[11px] font-semibold rounded-full;
  }

  /* ── Carousel row ── */
  .snap-carousel {
    @apply flex overflow-x-auto scrollbar-hide snap-x snap-mandatory;
  }

  /* ── Hover lifts ── */
  .hover-lift    { @apply transition-all duration-200 hover:-translate-y-1; }
  .hover-lift-sm { @apply transition-all duration-200 hover:-translate-y-0.5; }
}

── src/main.jsx ──
import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fontsource/bebas-neue';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/800.css';
import './index.css';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode><App /></React.StrictMode>
);

════════════════════════════════════════
FOLDER STRUCTURE — follow exactly
════════════════════════════════════════
src/
├── index.css
├── main.jsx
├── App.jsx
└── Home/features/
    ├── Navbar/            Navbar.jsx
    ├── Hero/              Hero.jsx
    ├── HowItWorks/        HowItWorks.jsx
    ├── ExperiencesSection/
    │   ├── ExperiencesSection.jsx
    │   └── ExperienceCard.jsx
    ├── TribesSection/
    │   ├── TribesSection.jsx
    │   └── TribeCard.jsx
    ├── SocialProofBand/   SocialProofBand.jsx
    ├── FinalCTA/          FinalCTA.jsx
    ├── EventOrganisersCTA/ EventOrganisersCTA.jsx
    └── BottomNav/         BottomNav.jsx

════════════════════════════════════════
GLOBAL CODING RULES — apply to every component
════════════════════════════════════════
1.  Use ONLY Tailwind utility classes — no inline styles, no CSS Modules,
    no styled-components. Exception: truly dynamic values (e.g. a JS-computed
    pixel value) may use a style prop as a last resort.
2.  Use the custom tokens: bg-cirkle-*, text-cirkle-*, font-display, font-body,
    text-hero-desktop / text-hero-mobile, text-section-* — never hardcode hex colors.
3.  Every component: named export + default export.
4.  Images: always add loading="lazy" and object-cover.
5.  Horizontal carousels: className="snap-carousel gap-3.5 pr-6"
    Each card: className="... flex-shrink-0 snap-start"
6.  All interactive elements need transition-all duration-200.
7.  Responsive convention: mobile-first — default classes = mobile,
    md: prefix = ≥768px, lg: prefix = ≥1024px.
8.  body needs pb-[60px] so content isn't hidden behind the fixed bottom nav.
9.  Never import CSS files inside components; all styles live in index.css
    or as Tailwind classes directly on JSX elements.
10. Accessibility: buttons need type="button", images need meaningful alt text.
11.Code should follow SRP , it should follow modularity.
