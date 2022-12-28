/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cyan': '#075985',
        'app-bg': '#EEE5E5',
        'green-btn': 'rgb(18, 164, 121)',
        'green-btn-hover': 'rgb(41, 140, 110)',
        'blue-btn': 'rgb(32, 182, 199)',
        'blue-btn-hover': 'rgb(54, 172, 185)'
      },
      dropShadow: {
        'my-green': '0px 2px 0px rgb(35, 224, 167)',
        'my-blue': '0px 2px 0px rgb(125, 228, 240)'
      },
      translate: {
        '2px': '2px'
      },
      screens: {
        'smallest': { 'raw': '(min-width: 420px)' }
      }
    },
  },
  plugins: [],
}
