/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#F7F7F7",
          gray: "#282828",
        },
        font: {
          DEFAULT: "#282828",
          white: "#FFFFFF",
        },
        secondary:"#0147FF"
      },
      fontFamily: {
        robotoFlex: ["Roboto Flex", "sans-serif"],
        robotoCondensed: ["Roboto Condensed", "sans-serif"],
        bebasNeue: ["Bebas Neue", "sans-serif"],
      },
    },
  },
  plugins: [],
};
