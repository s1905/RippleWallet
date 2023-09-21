/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      margin : {
        "mt-0.5" : "0.05rem"
      },
      colors : {
        "primary-dark" : "#0D0D0D",
        "primary-light" : "#FFFFFF",
        "primary-blue" : "#2C66FF",
        "primary-blue-light" : "#CEDCFF",
        "primary-violet" : "#8743FF",
        "google-blue" : "#4285F4",
        "blue-hero" : "#9DB8FD",
        "glass" : "rgba(255,255,255,0.25)",
        "black-glass" : "rgba(0, 0, 0, 0.9)"
      }
    },
  },
  plugins: [],
}

