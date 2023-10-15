/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      purple: "#2F1893",
      purple2: "#482BE7",
      purple3: "#1E0E62",
      lightgray: "#D3D3D3",
      white: "#fff",
    },

    fontFamily: {
      dm: ["DM Sans", "sans-serif"],
      nunito: ["Nunito Sans", "sans-serif"],
    },
    extend: {
      fontSize: {
        "xm": "22px",
        "2xm": "37.6px",
        "4xl": "42px",
        "6xl": "58px",
      },
      width: {
        "8xl": "1440px",
        "7xl": "1148px",
      },
    },
  },
  plugins: [],
}

