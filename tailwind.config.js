/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        hongsi: '#E86F52',
        mainBg: '#F8F6F4',
        orange: '#FF7425',
        footer: '#001E42',
        lightorange: '#F3A261',
      },
      backdropBlur: {
        '2px': '2px',
      },
    },
  },
  plugins: [],
}
