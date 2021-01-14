const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./pages/**/*.tsx'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans]
      },
      gradientColorStops: () => ({
        primaryLight: '#1cb5e0',
        primaryDark: '#000096'
      })
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
