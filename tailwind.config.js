/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#FF86FF",
        secondary:"#09000A",
        light:"#17001C"
      },
      fontFamily: {
        tourney: ['Tourney', 'sans-serif'],
      },
      backgroundImage: {
        'custom-radial': 'radial-gradient(circle at bottom, #1C0022 25%, #120015 40%, #130016 40%, #000000 70%)',
      },
      boxShadow: {
        'custom-drop': '0 0 12.7px rgba(0, 0, 0, 0.25)', // X=0, Y=0, Blur=12.7px, Spread=0, and 25% opacity
        'button-drop': '0 0 12.7px rgba(255, 134, 255, 1)'
      },
    },
  },
  plugins: [],
}
