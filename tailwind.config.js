const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    '**/*.{html,js}',
    './index.html',
  ],
  darkMode: 'class', // ⭐ This is important to enable "dark:" classes manually
  theme: {
    extend: {
      colors: {
        'bg-all': '#f8f8f8', // Light background
        surface: '#90e0ef', // Card/container background (light)
        accent: '#00b4d8', // Accent color
        primary: '#0077b6', // Main brand color
        'text-main': '#1a1a1a', // Dark text

        // Extra colors for dark mode
        'bg-dark': '#111827', // Very dark background (like gray-900)
        'surface-dark': '#1f2937', // Surface background (like gray-800)
        'accent-dark': '#3b82f6', // Accent in dark mode (blue-500)
        'primary-dark': '#2563eb', // Primary in dark mode (blue-600)
        'text-dark': '#f9fafb', // Light text for dark mode
      },
      fontFamily: {
        noto: ['"Noto Sans"', 'sans-serif'],
        sans: ['"Noto Sans"', ...defaultTheme.fontFamily.sans],
        hebrew: [
          '"Noto Sans Hebrew"',
          '"Noto Sans"',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};
