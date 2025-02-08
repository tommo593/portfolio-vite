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
        'dark-navy': '#14213D',
        mustard: '#FCA311',
        'light-grey': '#E5E5E5',
        'off-black': '#121212',
        'off-white': '#F5F5F5',
      },
      screens: {
        sm: '490px',
        md: '768px',
        lg: '1050px',
        xl: '1440px',
      },
    },
  },
  plugins: [],
};
