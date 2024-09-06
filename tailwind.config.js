/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    container: {
      padding: '4rem',
    },
  },
  plugins: [require("tailgrids/plugin")],
}

