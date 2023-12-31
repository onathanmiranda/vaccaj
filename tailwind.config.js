/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

function rem(n){
  return n / 16 + "rem"
}

const colors = {
  'transparent': 'rgba(0,0,0,0)',
  'white': {
    DEFAULT: '#FEFDFD',
    "semi-transparent": "rgba(254, 253, 253, .90)",
  },
  'black': {
    DEFAULT: '#392216',
    "semi-transparent-35": "rgba(57, 34, 22, .35)"
  },
  'brand': {
    100: "#FFFBFA",
    500: "#DBB6A3",
    900: "#392216",
    DEFAULT: "#DBB6A3",
    "semi-transparent": "rgba(149, 89, 58, .16)",
    "semi-transparent-30": "rgba(149, 89, 58, .30)",
  },
  'highlight': "#B76D48"
}

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      spacing: {
        1: rem(1),
        2: rem(2),
        3: rem(3),
        5: rem(5),
        8: rem(8),
        13: rem(13),
        21: rem(21),
        34: rem(34),
        55: rem(55),
        89: rem(89),
        144: rem(144),
        233: rem(233),
        377: rem(377),
      },
      fontFamily: {
        'sans': ['system-ui', "Segoe UI", 'Roboto', 'Helvetica', 'Arial', 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"]
      },
      fontSize: {
        xs: rem(8),
        sm: rem(13),
        base: rem(16),
        xl: rem(21),
        '2xl': rem(34)
        /* '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem', */
      },
      fontStyle: {
        extended: "extended"
      },
      colors: colors,
      boxShadow: {
        DEFAULT: `0 3px 6px 0px ${colors.brand["semi-transparent-30"]}`,
        dark: `0 3px 6px 0px ${colors.black["semi-transparent-35"]}`,
        inner: `inset 0 3px 6px 3px ${colors.brand["semi-transparent-30"]}`,
        "inner-dark": `inset 0 3px 6px 3px ${colors.black["semi-transparent-35"]}`
      },
      transitionProperty: {
        'max-height': 'max-height'
      }
    },
  },
  plugins: [],
}
