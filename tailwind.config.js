/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "pale-pink": "#FFB6C1",
        "pale-red": "#d9544d",
        "light-lavender": "#E6E6FA",
        "baby-blue": "#89CFF0",
        "soft-warm-light": "#FFEFD5",
        "light-green": "#90EE90",
        "nav-color": "rgba(144, 154, 154, 0.5)",
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
