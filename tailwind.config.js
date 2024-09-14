/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      cursor: {
        'custom': "url('./pp.jpg'), pointer",
      }
    },
  },
  plugins: [],
}

