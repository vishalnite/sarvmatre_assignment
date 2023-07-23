/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './components/**/*.{html,js}'
  ],
  theme: {
    extend: {},
    colors: {
      primary: '#2EA990',
      white: '#ffffff',
      black: '#000000'
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}

