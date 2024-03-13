/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eaeafd',
          100: '#cac9fa',
          200: '#a6a7f7',
          300: '#8083f5',
          400: '#6366F1',
          500: '#4746eb',
          600: '#423ddf',
          700: '#3931d3',
          800: '#3123c8',
          900: '#2900af',
        },
      },
      animation: {
        throb: 'throb 2s cubic-bezier(0, 0, 0.1, 1) infinite',
      },
      keyframes: {
        throb: {
          '0%': {
            opacity: '0.8',
          },
          '95%, 100%': {
            transform: 'scale(3)',
            opacity: '0',
          },
        },
      },
    },
  },
  plugins: [],
}

