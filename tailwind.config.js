module.exports = {
  important: true,
  purge: {
    content: ['./pages/**/*.tsx', './components/**/*.tsx'],
    options: {
      safelist: {
        standard: [
          /landing_pink$/,
          /mojo_bg$/,
          /mojo_text$/,
          /hs_bg$/,
          /hs_text$/,
          /choco_bg$/,
          /choco_text$/,
          /pelaton_bg$/,
          /pelaton_text$/,
          /multi_bg$/,
          /multi_text$/,
          /haru_bg$/,
          /haru_text$/,
          'top-5',
          'top-30',
          'top-38',
          'top-46',
          'top-71',
          'top-79',
          'top-87'
        ]
      }
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      black: '#000000',
      white: '#ffffff',
      landing_pink: '#dbb9b4',
      mojo_bg: '#efe8e1',
      mojo_text: '#728397',
      hs_bg: '#9daaa2',
      hs_text: '#efe8e1',
      choco_bg: '#c3c7d6',
      choco_text: '#e89b7c',
      pelaton_bg: '#dbb9b4',
      pelaton_text: '#efe8e1',
      multi_bg: '#efe8e1',
      multi_text: '#728397',
      haru_bg: '#c3c7d6',
      haru_text: '#e89b7c'
    },
    fontFamily: {
      roboto: ['MyRoboto', 'ui-sans-serif'],
      yesteryear: ['Yesteryear', 'ui-sans-serif']
    },
    extend: {
      fontSize: {
        40: '10rem',
        44: '11rem',
        48: '12rem',
        52: '13rem',
        60: '15rem'
      },
      width: {
        '7/20': '35%'
      },
      height: {
        '65vh': '65vh',
        entire: '700vh'
      },
      margin: {
        '8vh': '8vh'
      },
      inset: {
        '1/5': '20%',
        '8p': '8%',
        '16p': '16%',
        30: '7.5rem',
        38: '9.5rem',
        46: '11.5rem',
        71: '17.75rem',
        79: '19.75rem',
        87: '21.75rem'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
