/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          1000: "#8049e6",
        },
      },
      fontFamily: {
        fragile: ["Fragile", "sans-serif"],
      },
    },
  },
  plugins: [],
};
