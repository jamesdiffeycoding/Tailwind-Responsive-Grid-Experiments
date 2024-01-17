/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html"],
  mode: "jit",
  purge: ["index.html"],
  darkMode: false,
  theme: {
    screens: {
      xs: "540px",
      ...defaultTheme.screens,
    },
    extend: {},
  },
  variants: {
    extend: {},

  },
  plugins: []
}
