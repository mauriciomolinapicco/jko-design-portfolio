/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/*.{html,js}",],
  theme: {
    extend: {
      colors: {
        'preto': '#222222',
        'branco': '#F9F9F9',
        'branco-2': '#FDFDFD',
        'bege': '#C09A75',
        'bege-2': '#8E6F50'
      }, 
      fontFamily: {
        body: ['Nunito sans']
      }
    },
  },
  plugins: [],
}