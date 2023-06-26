/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      pink: "#B90066",
      green: "#00B952",
      yellow: "#B9AF00",
      blue: "#000AB9",
      black: "#36454F",
      white: "#FFFFFF",
      dgreen: "009A64"
    },
    extend: {
      screens: {
        sm: "640px",
        md: "769px",
        lg: "1024px",
        xl: "1280px",
      }
    },
  },
  plugins: [],
}

