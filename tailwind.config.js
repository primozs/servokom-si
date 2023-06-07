const colors = require('tailwindcss/colors');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      inherit: 'inherit',
      current: 'currentColor',
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      gray: colors.gray,

      darkblue: '#065E91',
      lightblue: '#18b6f6',
      skyblue: '#56c9ed',
      dirtyblack: '#1d2033',
      dark: '#021326',
      hblue: '#c3dce3',
      hblue1: '#e4eff3',
      lightgreen: '#92e101',
      darkgreen: '#53a603',
      hbluebutton: '#afd0df',
    },
    fontFamily: {
      sans: [
        'Inter',
        'Arial',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        '"Noto Sans"',
        'sans-serif',
      ],
    },
    extend: {},
  },
  plugins: [],
};
