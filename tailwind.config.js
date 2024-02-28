/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
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
      }
    }
  },
  plugins: [],
}

