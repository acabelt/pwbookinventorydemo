/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './site/templates/**/*.php',
    './site/templates/**/*.latte',
    './site/templates/**/*.twig',
    './site/templates/**/*.html',
    './site/templates/**/*.js',
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      // fontFamily: {
      //   sans: ['"Outfit"', ...defaultTheme.fontFamily.sans],
      //   display: ['"Source Serif 4"', ...defaultTheme.fontFamily.sans],
      // },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
