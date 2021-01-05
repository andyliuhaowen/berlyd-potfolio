module.exports = {
  purge: {
    content: ['./pages/**/*.tsx', './components/**/*.tsx'],
    options: {
      safelist: {
        standard: [/landing_pink$/, /mojo_bg$/, /mojo_text$/]
      }
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      landing_pink: '#dbb9b4',
      mojo_bg: '#efe8e1',
      mojo_text: '#728397'
    },
    fontFamily: {
      roboto: ['MyRoboto', 'ui-sans-serif'],
      yesteryear: ['Yesteryear', 'ui-sans-serif']
    },
    extend: {
      fontSize: {
        40: '10rem',
        48: '12rem',
        52: '13rem',
        60: '15rem'
      },
      width: {
        '7/20': '35%'
      },
      height: {
        '65vh': '65vh'
      },
      margin: {
        '8vh': '8vh'
      },
      inset: {
        '1/5': '20%',
        '8p': '8%'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
