/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

function rem(n){
  return n / 16 + "rem"
}

const colors = {
  'transparent': 'rgba(0,0,0,0)',
  'white': '#FEFDFD',
  'black': '#392216',
  'brand': {
    100: "#FFFBFA",
    500: "#DBB6A3",
    900: "#392216",
    DEFAULT: "#DBB6A3",
    "semi-transparent": "rgba(149, 89, 58, .16)",
    "semi-transparent-30": "rgba(149, 89, 58, .30)"
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
        233: rem(233)
      },
      fontFamily: {
        'sans': ['Univers LT Std', 'Helvetica', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        sm: rem(8),
        base: rem(13),
        xl: rem(21),
        '2xl': rem(34)
        /* '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem', */
      },
      colors: colors,
      boxShadow: {
        DEFAULT: `0 3px 6px 0px ${colors.brand["semi-transparent-30"]}`,
        inner: `inset 0 3px 6px 3px ${colors.brand["semi-transparent-30"]}`
      }
    },
  },
  plugins: [],
}
