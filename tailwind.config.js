/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Epilogue", "Arial", "sans-serif"],
      },
      colors: {
        primary: "hsl(0, 0%, 98%)",
        secondary: "hsl(0, 0%, 41%)",
        accent: "hsl(0,0%,8%)",
      },
    },
  },
  plugins: [],
};
