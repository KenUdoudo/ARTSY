/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    fontFamily: {
      'stix': ['STIX Two Text', 'serif'],
      'rale': ['Raleway', 'sans-serif'],
      'bruno': ['Bruno Ace SC', 'cursive']
    }
  },
  plugins: [],
}

