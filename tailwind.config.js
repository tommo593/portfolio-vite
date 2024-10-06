/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'feather-green': '#58cc02',
        'mask-green': '#89e219',
        'baby-blue': '#75d2fa',
        'dark-baby-blue': '#0ab4fc',
        'white-text': '#ffffff',
        'border-gray': '#c5c7c9',
      },
      screens: {
        xs: '360',
        sm: '490px',
        md: '768px',
        lg: '1050px',
        xl: '1440px',
      },
    },
  },
  plugins: [],
};
