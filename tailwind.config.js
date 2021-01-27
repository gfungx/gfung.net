const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans]
      },
      gradientColorStops: () => ({
        primaryLight: '#1cb5e0',
        primaryDark: '#000096'
      }),
      colors: {
        'blue-opaque': 'rgb(13 42 148 / 18%)'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
