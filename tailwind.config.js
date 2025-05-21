/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#002D62',
          50: '#E6EDF5',
          100: '#CCDAEB',
          200: '#99B6D7',
          300: '#6691C3',
          400: '#336DAF',
          500: '#00489B',
          600: '#003A7D',
          700: '#002D62',
          800: '#001F44',
          900: '#001126',
        },
        orange: {
          DEFAULT: '#F7941E',
          50: '#FEF4E6',
          100: '#FDE9CD',
          200: '#FBD39B',
          300: '#FABD69',
          400: '#F8A737',
          500: '#F7941E',
          600: '#C6730C',
          700: '#945608',
          800: '#623804',
          900: '#311C02',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
      spacing: {
        '128': '32rem',
      },
      height: {
        'screen-75': '75vh',
        'screen-50': '50vh',
      },
    },
  },
  plugins: [],
};