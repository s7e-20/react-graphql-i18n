/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#6C5B7B",
          light: "#C6A4B5",
          dark: "#4E3B5D",
        },
        secondary: {
          DEFAULT: "#F0A6CA",
          light: "#F5C8D4",
          dark: "#C97F9D",
        },
      },
    },
  },
  plugins: [],
};
