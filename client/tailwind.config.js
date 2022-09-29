/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'p-color': '#101010',
        'o-color': '#D87D4A',
        'g-color': '#F1F1F1',
        'w-color': '#FAFAFA'
      },
      fontFamily: {
        Manrope: ['Manrope', 'sans-serif']
      }
    },
  },
  plugins: [],
}