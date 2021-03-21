module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        '-10': '-10',
      },
      backgroundImage: theme => ({
        'hero-pattern': "url('static/road.jpg')",
      })
    }
  },
  
  variants: {},
  plugins: [],
}