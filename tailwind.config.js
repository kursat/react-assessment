module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      'black-rgba': 'rgba(0, 0, 0, 0.03)',
      blue: {
        100: '#587BE0',
        500: '#1fb6ff',
      },
      purple: {
        500: '#885FFF',
      }, //'#7e5bef',
      pink: '#ff49db',
      orange: '#ff7849',
      green: '#13ce66',
      yellow: '#ffc82c',
      'gray-dark': '#273444',
      red: '#ff0000',
      gray: {
        100: '#F5F5F5',
        200: '#DFDFE0',
        250: '#CFCFCF',
        300: '#BEBEC2',
        400: '#828282',
        450: '#808080',
        500: '#6F6E73',
        600: '#414047',
      },
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      sans: ['Manrope', 'sans-serif'],
      serif: ['Manrope', 'serif'],
    },
    extend: {},
  },
  plugins: [],
};
