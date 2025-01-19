/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{ts,tsx}"
  ],
  darkMode: "class",
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
      animation: {
        scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    addVariablesForColors
  ],
};

// Helper function to add CSS variables for colors
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
  addBase({
    ":root": newVars,
  });
}