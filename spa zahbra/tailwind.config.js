/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          light: '#E5D9B6',
          DEFAULT: '#D4AF37',
          dark: '#BFA030'
        },
        taupe: {
          light: '#C5B9AF',
          DEFAULT: '#B2A59B',
          dark: '#9A8F86'
        },
        plum: {
          light: '#5D4A65',
          DEFAULT: '#46344E',
          dark: '#352941'
        },
        olive: {
          light: '#6B7F48',
          DEFAULT: '#556B2F',
          dark: '#445626'
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Montserrat', 'sans-serif']
      },
      animation: {
        'fade-in-up': 'fadeInUp 1s ease-out',
        'fade-in-down': 'fadeInDown 1s ease-out',
        'fade-in-left': 'fadeInLeft 1s ease-out',
        'fade-in-right': 'fadeInRight 1s ease-out',
        'zoom-in': 'zoomIn 1s ease-out',
        'zoom-out': 'zoomOut 1s ease-out',
        'flip-in': 'flipIn 1s ease-out',
      }
    },
  },
  plugins: [],
};