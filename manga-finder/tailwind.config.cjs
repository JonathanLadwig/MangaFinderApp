/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
      colors: {
        dark: "#424242",
        light: "#F4FDFF",
        theme: "#fd5564",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
