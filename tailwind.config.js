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
          DEFAULT: '#7D7D7D',
          100: '#F5F5F5',
          200: '#EEEEEE',
          300: '#E0E0E0',
          400: '#BDBDBD',
          500: '#9E9E9E',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121',
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
              backgroundColor: theme('colors.gray.100'),
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
            blockquote: {
              color: theme('colors.gray.800'),
              borderLeftColor: theme('colors.gray.200'),
            },
            table: {
              color: theme('colors.gray.700'),
              borderColor: theme('colors.gray.200'),
              thead: {
                color: theme('colors.primary'),
                borderBottomColor: theme('colors.gray.300'),
              },
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
