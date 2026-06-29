/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./sections/**/*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#22d3ee",
        dark: "#020617",
      },
    },
  },
  plugins: [],
};
