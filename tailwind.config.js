module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      landing_pink: '#dbb9b4',
      mojo_bg: '#efe8e1',
      mojo_text: '#728397'
    },
    flexGrow: {
      0: 0,
      DEFAULT: 1,
      1: 1
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
}
