const defaultTheme = require('tailwindcss/defaultTheme');

const colorReset = {
  color: null,
};

function px(min, max) {
  let result = {};
  for (let i = min; i < max + 1; i++) {
    const key = i < 0 ? `-${i}px` : `${i}px`;
    result[key] = `${i}px`;
  }
  return result;
}

module.exports = {
  purge: {
    content: ['./app/**/*.php', './resources/**/*.{php,vue,js}'],
  },
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {},
      padding: px(0, 300),
      gap: px(0, 100),
      margin: px(0, 300),
      scale: {
        180: '1.8',
      },
      typography: {
        DEFAULT: {
          css: {
            color: null,
            a: {
              color: null,
              '&:hover': colorReset,
            },
            strong: colorReset,
            blockquote: colorReset,
            h1: colorReset,
            h2: colorReset,
            h3: colorReset,
            h4: colorReset,
            h5: colorReset,
            h6: colorReset,
            pre: null,
            code: null,
            'code::after': null,
            'code::before': null,
            'pre code': null,
          },
        },
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
