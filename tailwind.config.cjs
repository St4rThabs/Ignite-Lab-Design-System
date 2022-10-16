/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './scr/**/*.tsx',
  ],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32,
    },

    colors: {
      'grey-900': '#121214',
      'grey-800': '#202024',
      'grey-400': '#7c7c8a',
      'grey-020': '#c4c4cc',
      'grey-900': '#e1e1e6',

      'cyan-500': '#81d8f7',
      'cyan-300': '#9BE1FB',

    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      },
    },
  },
  plugins: [],
}
