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
      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [],
};
