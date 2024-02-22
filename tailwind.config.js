/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        softBlack: ["#404040"],
        primary: ["#F55757"],
        secondary: ["#FEE7E7"],
        softGrey: ["#737373"],
      },
      fontFamily: {
        Lato: '"Lato", sans-serif',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["corporate"],
  },
};
