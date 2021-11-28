const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary_light: "#d1fae5",
        primary_dark: "#111827",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
