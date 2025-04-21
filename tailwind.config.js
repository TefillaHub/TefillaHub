const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    '**/*.{html,js}',
    '**/**/*.{html,js}',
    './index.html',
  ],
  theme: {
    extend: {
      colors: {
        'bg-page': '#edfafd', // Very light background
        surface: '#90e0ef', // Card or container background
        accent: '#00b4d8', // Secondary accent or hover color
        primary: '#0077b6', // Main brand color for buttons/links
        'text-main': '#1a1a1a', // MUCH darker text — nearly black

        'primary-color': '#0077b6',
      },
      fontFamily: {
        noto: ['"Noto Sans"', 'sans-serif'],
        sans: ['"Noto Sans"', ...defaultTheme.fontFamily.sans],
        hebrew: ['"Noto Sans"', 'sans-serif'], // Updated Hebrew font family to use Noto Sans
      },
    },
  },
  plugins: [],
};
