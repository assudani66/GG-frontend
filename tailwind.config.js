/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#FF86FF"
      },
      fontFamily: {
        tourney: ['Tourney', 'sans-serif'],
      },
      backgroundImage: {
        'custom-radial': 'radial-gradient(circle at bottom, #1C0022 25%, #120015 40%, #130016 40%, #000000 70%)',
      },
    },
  },
  plugins: [],
}
