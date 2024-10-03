/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '490px',
      md: '768px',
      lg: '1050px',
      xl: '1440px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      feather_green: '#58cc02',
      mask_green: '#89e219',
      baby_blue: '#75d2fa',
      dark_baby_blue: '#0ab4fc',
      white_text: '#ffffff',
      border_gray: '#c5c7c9',
    },
    extend: {},
  },
  plugins: [],
};
