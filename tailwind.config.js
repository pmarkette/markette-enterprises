/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        teal: {
          50:  '#e1f5ee',
          100: '#9fe1cb',
          200: '#5dcaa5',
          400: '#1d9e75',
          600: '#0f6e56',
          800: '#085041',
          900: '#04342c',
        },
      },
      fontFamily: {
        serif:  ['"DM Serif Display"', 'serif'],
        sans:   ['"DM Sans"', 'sans-serif'],
      },
      borderColor: {
        DEFAULT: 'rgba(15,110,86,0.14)',
      },
    },
  },
  plugins: [],
}
