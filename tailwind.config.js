/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'gradient-dark': '#11101A',
        'gradient-almost-black': '#08080D',
        'dark-yellow': '#DDCCAA',
        'dark-red': '#E31221',
      },
      fontFamily: {
        'helvetica-eng': 'helvetica-neue',
        montserrat: "'Montserrat', helvetica-neue",
      },
      backgroundImage: {
        interstellar:
          "linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)),url('/images/interstellar.png')",
        manAndWoman:
          "linear-gradient(to right, rgba(17, 16, 26, 0.95), rgba(8, 8, 13, 0.13)),url('/images/secondMovie.png')",
        lotr: "linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0),rgba(0, 0, 0, 0)),url('/images/lotr.png')",
      },
    },
  },
  plugins: [],
};
