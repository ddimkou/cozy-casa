/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "pale-pink": "#FFB6C1",
        "light-lavender": "#E6E6FA",
        "baby-blue": "#89CFF0",
        "soft-warm-light": "#FFEFD5",
        "light-green": "#90EE90",
      },
    },
  },
  plugins: [],
};
