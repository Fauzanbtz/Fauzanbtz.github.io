/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './about.html'],
  theme: {
    extend: {
      fontFamily: {
        'josefin': ['"Josefin Sans"', 'sans-serif'],
        'abel': ['Abel', 'sans-serif']
      }
    },
  },
  plugins: [],
}

