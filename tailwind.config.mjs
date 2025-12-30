/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        // Neutral palette for minimalist design
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: theme('colors.neutral.700'),
            a: {
              color: theme('colors.neutral.900'),
              textDecoration: 'underline',
              textUnderlineOffset: '2px',
              '&:hover': {
                color: theme('colors.neutral.600'),
              },
            },
            'h1, h2, h3, h4': {
              color: theme('colors.neutral.900'),
              fontWeight: '600',
            },
            code: {
              color: theme('colors.neutral.800'),
              backgroundColor: theme('colors.neutral.100'),
              padding: '0.25rem 0.375rem',
              borderRadius: '0.25rem',
              fontWeight: '400',
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
            pre: {
              backgroundColor: theme('colors.neutral.900'),
              color: theme('colors.neutral.100'),
            },
            blockquote: {
              borderLeftColor: theme('colors.neutral.300'),
              color: theme('colors.neutral.600'),
            },
          },
        },
        invert: {
          css: {
            color: theme('colors.neutral.300'),
            a: {
              color: theme('colors.neutral.100'),
              '&:hover': {
                color: theme('colors.neutral.400'),
              },
            },
            'h1, h2, h3, h4': {
              color: theme('colors.neutral.100'),
            },
            strong: {
              color: theme('colors.neutral.100'),
            },
            code: {
              color: theme('colors.neutral.200'),
              backgroundColor: theme('colors.neutral.800'),
            },
            pre: {
              backgroundColor: theme('colors.neutral.800'),
              color: theme('colors.neutral.200'),
            },
            blockquote: {
              borderLeftColor: theme('colors.neutral.700'),
              color: theme('colors.neutral.400'),
            },
            hr: {
              borderColor: theme('colors.neutral.700'),
            },
            'ol > li::marker': {
              color: theme('colors.neutral.400'),
            },
            'ul > li::marker': {
              color: theme('colors.neutral.400'),
            },
            thead: {
              color: theme('colors.neutral.100'),
              borderBottomColor: theme('colors.neutral.700'),
            },
            'tbody tr': {
              borderBottomColor: theme('colors.neutral.800'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
