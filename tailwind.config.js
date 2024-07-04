/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        mainBg: '#F8F6F4',
        orange: '#FF7425',
      },
      backgroundImage: {
        'gradient-text': 'linear-gradient(90deg, #F49864 0%, #FFA06B 19.29%, #FF9A61 32.88%, #FF7629 47.1%, #FF5C00 100%)',
      },
    },
  },
  plugins: [],
}
