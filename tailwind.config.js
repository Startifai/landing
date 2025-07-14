/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto-mono': ['"Roboto Mono"', 'monospace'],
        'parkinsans': ['Parkinsans', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],

      },
      colors: {
        'navbar-gray': '#000005CC',
      },
      boxShadow: {
        'glow-white': '0 0 15px rgba(255, 255, 255, 0.5)',
      }
    },
  },
  plugins: [],
}