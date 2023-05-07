/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    fontFamily: {
      stix: ['STIX Two Text', 'serif']
      satoshi: ['Raleway', 'sans-serif']
      clash: ['Bruno Ace SC', 'cursive']
    }
  },
  plugins: [],
}

