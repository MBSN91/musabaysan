/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx,ts,astro,css}"],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        aniheight: 'aniheight 1s ease-in-out',
        floating: 'float 30s ease-in-out infinite',
      },

      cursor: {
        'fancy': 'url(./src/assets/mouse.svg), pointer',
      },

        transitionProperty: {
          'width': 'width, background-color, border-color' 
        }
      },

        fontFamily: {
        'smallt': ['"Inconsolata"', 'monospace'],
        'body': ['"Open Sans"','sans-serif'],
        'button': ['"Teko"','sans-serif'],
        'title': ['"Cormorant"','serif']        
      },

      fontSize: {
        xxs: '0.625rem',
        s: '0.875rem',
        m: '1rem',
        l: '1.5rem',
        xl: '3rem',
      },

      colors: {
        'primary': '#05192d',
        'primary-100':'#112e4b',
        'dark-100': '#121212',
        'dark-200': '#222222',
        'dark-300': '#3b3b3b',
        'secondary': '#F46036',
        'secondary-100': '#CE3F19',
        'background': '#f9f4f0',
        'grid': '#efe7e0',
        'grey-100': '#d1d5db',
        'orange': '#EBD5C2',
        'orange-reverse': '#2F3135',
        
      },

      keyframes: {
        aniheight: {
          '0%': { height: 'calc(0% - 6rem)' },
          '100%': { height: 'calc(100% - 6rem)' },
        },
        float: {
          '0%': {
            transform: 'translatey(75px)',
          },
          '50%':{
            transform: 'translatey(-75px)',
          },
          '100%':{
            transform: 'translatey(75px)',
          },
        }
      },

      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
      }
    },
  plugins: [require('@headlessui/tailwindcss')],
    
}