/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        lawzi: "#7B3F00", // Your brown color
        background: "#1E1E1E" // Optional dark background
      },
      fontFamily: {
        heading: ["'Poppins'", "sans-serif"]
      }
    },
  },
  plugins: [],
}
