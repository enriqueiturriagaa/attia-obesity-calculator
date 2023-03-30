/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      dm: ['DM Sans', "sans-serif"],
      poppins: ['Poppins', "sans-serif"],
      inter: ['Inter', "sans-serif"],
      lora: ['Lora', "serif"],
    },
  },
  plugins: [],
}