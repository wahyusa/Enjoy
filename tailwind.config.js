const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: [
  './*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        lime: colors.lime,
        gray: colors.blueGray,
      },
    },
  },
  variants: {},
  plugins: [
  require('@tailwindcss/aspect-ratio'),
  require('@tailwindcss/line-clamp'),
  ],
}
