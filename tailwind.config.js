/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        mont: ["var(--font-mont)", ...fontFamily.sans],
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#2e04a1",
        primaryDark: "#58E6D9", // 80,230,217
      },
    },
  },
  plugins: [],
};
