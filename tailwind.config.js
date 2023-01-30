/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      '2xl': { max: '1535px' },
      xl: { max: '1279px' },
      lg: { max: '1023px' },
      md: { max: '767px' },
      sm: { max: '639px' },
    },
    extend: {
      colors: {
        'gradient-dark': '#11101A',
        'gradient-almost-black': '#08080D',
        'dark-yellow': '#DDCCAA',
        'dark-red': '#E31221',
        'light-blue': '#222030',
        'red-danger': '#DC3545',
        'light-grey': '#6C757D',
        'very-light-grey': '#CED4DA',
        'theme-primary': '#0D6EFD',
        'error-red': '#DC3545',
        'success-green': '#198754',
        'error-red-border': '#E31221',
        'focus-blue': '#a9b5bf',
      },
      fontFamily: {
        'helvetica-eng': 'helvetica-neue',
        'helvetica-geo': 'helvetica-neue-geo',
        montserrat: "'Montserrat', helvetica-neue",
      },
      backgroundImage: {
        interstellar:
          "linear-gradient(to right bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)),url('/assets/images/interstellar.png')",
        manAndWoman:
          "linear-gradient(to right, rgba(17, 16, 26, 0.95), rgba(8, 8, 13, 0.13)),url('/assets/images/secondMovie.png')",
        lotr: "linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0),rgba(0, 0, 0, 0)),url('/assets/images/lotr.png')",
        'signup-gradient':
          'linear-gradient(to bottom, rgba(24, 22, 35, 1), rgba(25, 23, 37, 1),rgba(13, 11, 20, 1))',
        'email-modal':
          'linear-gradient(112.94deg, rgba(239, 239, 239, 0.1) -1.81%, rgba(239, 239, 239, 0.00514528) 102.5%, rgba(1, 1, 1, 0.00260417) 102.51%, rgba(239, 239, 239, 0.1) 102.52%)',
      },
    },
  },
  plugins: [],
}
