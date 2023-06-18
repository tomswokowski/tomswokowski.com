module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0C2340',
        secondary: '#E87722',
        gray: {
          700: '#4B5563',
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.secondary'),
              '&:hover': {
                color: theme('colors.secondary'),
              },
            },
            h1: {
              color: theme('colors.primary'),
            },
            h2: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.primary'),
            },
            h3: {
              fontWeight: '600',
              color: theme('colors.primary'),
            },
            'ul > li::before': {
              backgroundColor: theme('colors.gray.500'),
            },
            'ol > li::before': {
              color: theme('colors.gray.500'),
            },
            'blockquote p:first-of-type::before': false,
            'blockquote p:last-of-type::after': false,
            code: {
              color: theme('colors.secondary'),
              backgroundColor: theme('colors.gray.800'),
              paddingLeft: '0.25rem',
              paddingRight: '0.25rem',
              paddingTop: '0.125rem',
              paddingBottom: '0.125rem',
              borderRadius: '0.375rem',
            },
            'code::before': {
              content: 'none',
            },
            'code::after': {
              content: 'none',
            },
            img: {
              borderRadius: theme('borderRadius.lg'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
};
