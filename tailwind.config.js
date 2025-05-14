/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FFC0CB',
          50: '#fff3f5',
          100: '#ffe6eb',
          200: '#ffd9e1',
          300: '#ffc0cb',
          400: '#ff9eb0',
          500: '#ff7c95',
          600: '#ff5a7a',
          700: '#ff385f',
          800: '#ff1644',
          900: '#ff0029',
        },
        secondary: {
          DEFAULT: '#fff3f5',
          50: '#ffffff',
          100: '#ffffff',
          200: '#ffffff',
          300: '#fff3f5',
          400: '#ffe6eb',
          500: '#ffd9e1',
          600: '#ffc0cb',
          700: '#ffa7b6',
          800: '#ff8ea1',
          900: '#ff758c',
        }
      }
    },
  },
  plugins: [],
};