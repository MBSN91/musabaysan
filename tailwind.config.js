/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./src/**/*.{html,js,astro,css}"],
    theme: {

      colors: {
        'primary': '#05192d',
        'primary-100':'#112e4b',
        'secondary': '#68ebb8',
        'background': '#f9f4f0',
        'grid': '#efe7e0',
        'grey-100': '#d1d5db',
      },

      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
      },

      extend: {
        fontFamily: {
          button: ['Teko', 'sans-serif'],
          body: ['Averta', 'sans-serif']
        }
      },
      
    },
    plugins: [],
  }