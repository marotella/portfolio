/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
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

