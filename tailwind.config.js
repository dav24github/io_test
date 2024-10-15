/** @type {import('tailwindcss').Config} */
const tailwindcss_primeui = import('tailwindcss-primeui')

export default {
  darkMode: ['selector', '[class*="app-dark"]'],
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  plugins: [tailwindcss_primeui],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1920px',
    },
    extend: {},
  },
  plugins: [],
}