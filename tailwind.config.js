/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/*.{html,js}",],
  theme: {
    extend: {
      colors: {
        'preto': '#222222',
        'branco': '#F9F9F9',
        'bege': '#C09A75'
      }
    },
  },
  plugins: [],
}