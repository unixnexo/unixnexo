/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.html',
    './src/**/*.js',
    './src/blog/**/*.html'

  ],
  darkMode: 'selector',
  future: {
    hoverOnlyWhenSupported: true,

  },
  theme: {
    extend: {
      colors: {
        'dark-mode-main': '#202020',
        'light-mode-main': '#ece8ed',
        'sky-blue-main': '#4381C1',
        'light-yellow-main': '#FFFFE3',
      },
      scale: {
        'very-small': '1.02',
      },
      fontFamily: {
        'Pally-Bold': ['Pally-Bold'],
        'Pally-Regular': ['Pally-Regular'],
        'Pally-Medium': ['Pally-Medium'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

