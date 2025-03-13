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
      textShadow: {
        'default': '2px 2px 4px rgba(0, 0, 0, 0.5)',
        'lg': '4px 4px 8px rgba(0, 0, 0, 0.5)',
        'xl': '6px 6px 12px rgba(0, 0, 0, 0.5)',
    },


    },
  },
  plugins: [],
}