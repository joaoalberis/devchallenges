/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      rotate: {
        "-180": "-180deg"
      },
      gridTemplateRows: {
        "max-content-2": "repeat(2, max-content)",
      }
    },
  },
  plugins: [],
}

