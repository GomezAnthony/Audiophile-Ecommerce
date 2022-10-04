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
      },
      // backgroundImage: {
      //   'mobile': 'url(../../assets/image-header.jpg)',
      //   'tablet': 'url(../../assets/tablet-image-header.jpg)'
      // },
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}