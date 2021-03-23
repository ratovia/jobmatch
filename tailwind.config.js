module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        '-10': '-10',
      },
      backgroundImage: {
        'hero-pattern': "url('/static/road.jpg')",
      },
      'flex-basis': {
        '1': '100%',
        '2': '50%',
        '3': '30%',
        '4': '25%',
        '5': '20%',
        '6': '16.666666%',
        '7': '14.285714%',
        '0': '12.5%',
      },
    }
  },
  variants: {
    'flex-basis': ['responsive'],
  },
  plugins: [require('@tkh/tailwind-plugin-flex-basis/flex-basis.js')()],
}