/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/*.{html,js}",],
  theme: {
    extend: {
      colors: {
        'preto': '#222222',
        'pretoclaro': '#6d6057',
        'branco': '#F9F9F9',
        'branco-2': '#FDFDFD',
        'bege': '#C09A75',
        'bege-claro': '#EFECE8'
      }, 
      fontFamily: {
        body: ['Roboto Condensed']
      },
      width: {
        '3/5': '60%',
      },

    },
  },
  plugins: [],
}