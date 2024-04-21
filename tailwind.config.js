/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors:{
        'primary': '#006F93',
        'secondary': '#757575',
        'info': '#006F93',
        'muted': '#D9D9D9',
        'primary-light':'#00B6D6',
        'primary-light-1':'#B3D7E6',
      },
      height: {
        '456': '456px',
      }
    },
  },
  plugins: [],
}