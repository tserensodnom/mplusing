const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionDuration: {
        2000: '2000ms',
        3000: '3000ms',
        4000: '4000ms',
      },
      lineClamp: {
        7: '7',
        8: '8',
        9: '9',
        10: '10',
        11: '11',
        12: '12',
      },
      backgroundBlendMode: ['hover', 'focus'],
      translate: {
        beyond: '100rem',
      },
      left: {
        beyond: '100rem',
      },
      letterSpacing: {
        huge: '1em',
      },
      spacing: {
        92: '23rem',
        100: '30rem',
        101: '34rem',
        103: '38rem',
        120: '45rem',
      },
      width: {
        '46p': '46%',
      },
      zIndex: {
        '-10': '-10',
      },
    },
    zIndex: {
      '-20': -20,
      '-10': -10,
      0: 0,
      10: 10,
      20: 20,
      30: 30,
      40: 40,
      50: 50,
    },
    screens: {
      ss: '350px',
      // min width 414px

      xs: '414px',
      // min width 414px

      xm: '510px',
      // min width 510px

      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1638px',
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      rubik: ['Rubik', 'sans-serif'],
      merriweather: ['Merriweather'],
    },
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT:
        '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      bluexs: '0px 0px 15px 2px #DBE2EC',
      bluesm: '0px 0px 25px 2px #DBE2EC',
      bluelg: '0px 0px 40px 4px #DBE2EC',
      xlwhite:
        '0 20px 25px -5px rgba(2255, 255, 255, 0.1), 0 10px 10px -5px rgba(255, 255, 255, 0.04)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
      top: '0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      soft: '0px 4px 31px 1px rgba(237,242,247,0.89);',
    },
    colors: {
      ...colors,
      brand: {
        DEFAULT: '#0061ff',
        dark: '#0747cc',
      },
      bank: {
        khanbank: '#014713',
        golomt: '#0f63ac',
        statebank: '#00adef',
        xacbank: '#f27248',
        tdb: '#0086dd',
      },
      danger: '#FDC52D',
      tseneg3x: '#FEC62D',
    },
  },
  variants: {
    extend: {
      transitionProperty: ['hover', 'focus'],
      ringWidth: ['hover', 'active'],
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
