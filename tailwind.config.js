
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  media: false,
  theme: {
    screens: {
      xs: "1000px",
      ...defaultTheme.screens,
    },
    extend: {},
  },
  variants: {
    extend: {},

  },
  plugins: []
}
