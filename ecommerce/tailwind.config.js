/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  prefix: "tw-",
  important: true,
  content: ["./src/**/*.{vue,html,js}"],
  theme: {
    fontFamily: {
      display: ["Noto Sans Bengali", "sans-serif"],
    },
    extend: {
      colors: {
        "hgsp-blue": "#009FE3",
      },
    },
  },
  plugins: [],
};
