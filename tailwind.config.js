/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"]
      },
      colors: {
        primary: "#09336b",
        darkGrey: "#505050",
        lightGrey: "#737373",
        black: "#000000"
      }
    }
  },
  plugins: []
};