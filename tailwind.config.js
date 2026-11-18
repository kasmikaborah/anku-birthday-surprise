/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        roseink: "#6f1836",
        blush: "#fff1f4",
        berry: "#c72c59"
      },
      fontFamily: {
        display: ["Georgia", "serif"]
      }
    }
  },
  plugins: []
};
