/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "pale-pink": "#FFB6C1",
        "pale-red": "#d9544d",
        "soft-warm-light": "#FFEFD5",
        "nav-color": "rgba(144, 154, 154, 0.8)",
        "card-yellow": "#f4ece1",
        "dark-gray": "#1D1D1B",
      },
      fontFamily: {
        montserrat: ["'Montserrat'", "sans-serif"],
        palanquin: ["'Palanquin'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
