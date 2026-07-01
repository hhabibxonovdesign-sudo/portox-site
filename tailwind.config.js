/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Fustat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#C5F028',
          200: '#ECFAB7',
          600: '#B6E410',
          700: '#9BC20E',
        },
        secondary: {
          DEFAULT: '#4E5FFB',
          200: '#B8BFFD',
        },
        neutral: {
          100: '#F2F2F2',
          200: '#CCCBCB',
          400: '#9F9C9C',
          500: '#898483',
          600: '#726C6C',
          700: '#5A5555',
          900: '#2B2928',
        },
        base: {
          white: '#F5F5F5',
          black: '#0A0B0A',
        },
        eerie: '#1C1C1C',
        olive: '#080807',
        danger: '#FF2244',
      },
      borderRadius: {
        pill: '999px',
      },
      maxWidth: {
        container: '1200px',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 22s linear infinite',
      },
    },
  },
  plugins: [],
}
