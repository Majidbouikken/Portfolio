/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: ["./src/**/*.{js,jsx,ts,tsx,html,css}"],
  darkMode: 'class',
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
        'text': {
          50: '#f1f5f9', // Dark primary-text-color
          100: '#f1f5f999', // Dark secondary-text-color
          200: '#c8d6e1',
          300: '#b1c5d3',
          400: '#9eb5c5',
          500: '#5e7090',
          600: '#50627f',
          700: '#404f68',
          800: '#1e293b99', // Light secondary-text-color
          900: '#1e293b', // Light primary-text-color
        },
        'background': {
          50: '#f9fafb', // Light card color
          100: '#f3f4f6',
          200: '#e5e7eb', // Light background
          300: '#d1d5db', // Light deep background
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151', // Dark card color
          800: '#1f2937', // Dark background
          900: '#111827', // Dark deap background
          950: '#020617',
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

