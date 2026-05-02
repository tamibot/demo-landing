/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      colors: {
        tami: {
          bg: '#F5F2FF',
          gradFrom: '#3B5CDD',
          gradMid: '#9333EA',
          gradTo: '#F472B6',
        },
      },
    },
  },
  plugins: [],
};
