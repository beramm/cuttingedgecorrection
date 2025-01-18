/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#141416", // Dark color
        secondary: "#0E0E10", // Secondary dark color
        accent: "#E8E6DE", // Bright accent color
        highlight: "#00A2FF", // Blue hightlight color
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle, #00A2FF, #006199)',
        'custom-gradient': 'linear-gradient(180deg, #141416 0%, #1B1B1E 50%, #1F1F22 100%)',
      },
      screens: {
        '3xl': '1920px',
      },
    },
  },
  plugins: [],
};
