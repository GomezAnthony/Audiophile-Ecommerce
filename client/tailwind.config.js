/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'mobile': "url('../src/assets/mobile-image-hero.jpg')",
        'tablet': "url('../src/assets/tablet-image-hero.jpg')",
        'desktop': "url('../src/assets/desktop-image-hero.jpg')"
      },
      colors: {
        'p-color': '#101010',
        'o-color': '#D87D4A',
        'g-color': '#F1F1F1',
        'w-color': '#FAFAFA'
      },
      fontFamily: {
        Manrope: ['Manrope', 'sans-serif']
      },
      
    },
  },
  plugins: [],
}