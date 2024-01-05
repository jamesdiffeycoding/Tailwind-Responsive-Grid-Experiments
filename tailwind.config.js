/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

/* Alternative code found online:

const defautTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  theme: {
    screens: {
      xs: '540px',
      ...defautTheme.screens,
    },
    extend: {},
  },
  variants: {},
  plugins: [],
}

*/