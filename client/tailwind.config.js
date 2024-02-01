/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily:{
      pS:["Poor Story","system-ui"],
      rS:["Rubik Scribble","system-ui"],
      mT:["Miltonian Tattoo","serif"],
      eB:['EB Garamond', 'serif'],
      cG:['Cormorant Garamond','serif']
    },
    extend: {},
  },
  plugins: [],
}

