/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#F6F6FE",
          200: "#605DEC",
          300: "#1513A0",
        },
        warnings: {
          100: "#EB5757",
          200: "#FFD12F",
        },
        text: {
          400: "#A1B0CC",
          500: "#7C8DB0",
          600: "#6E7491",
          700: "#52527A",
        },
      },
      fontFamily: {
        sans: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [],
};
