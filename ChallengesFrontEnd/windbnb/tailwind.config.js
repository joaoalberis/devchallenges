/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [ 
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "max-content-3": 'repeat(3, max-content)'
      },
      gridTemplateRows: {
        "max-contennt-4": 'repeat(4, max-contennt)'
      }
    },
  },
  plugins: [],
}

