/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      pink: "#B90066",
      green: "rgb(30, 133, 88)",
      yellow: "#B9AF00",
      blue: "#000AB9",
      black: "#000000",
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

