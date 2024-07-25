/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        hongsi: '#E86F52',
        mainBg: '#F8F6F4',
        footer: '#001E42',
        lightorange: '#F3A261',
        lightgray: '#D9D9D9',
      },
      backdropBlur: {
        '2px': '2px',
      },
    },
  },
  plugins: [],
}
