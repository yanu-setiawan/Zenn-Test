/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      md: "768px",
      lg: "1024px",
      xl: "1400px",
    },
    extend: {
      colors: {
        softBlack: ["#404040"],
        primary: ["#F55757"],
        secondary: ["#FEE7E7"],
        softGrey: ["#737373"],
        backGrey: ["#F2F2F2"],
      },
      fontFamily: {
        Lato: '"Lato", sans-serif',
      },
      backgroundImage: {
        bgServices: "url('/src/assets/bgServices.png')",
        item1: "url('/src/assets/itemService/bgSer1.png')",
        item2: "url('/src/assets/itemService/bgSer2.png')",
        item3: "url('/src/assets/itemService/bgSer3.png')",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["corporate"],
  },
};
