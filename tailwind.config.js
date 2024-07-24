/* global module */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        main: '#E0DEF7',
        secundary: '#7065F0',
        textDark: '#000929',
        ligth: '#E0DEF7',
        dark: '#100A55',
        secundaryDark: '#5c4fe9',
        textLigth: '#807DA8',
      },
      fontFamily: {
        plusUltra: 'Plus Jakarta Sans',
      },
    },
  },
  plugins: [],
};
