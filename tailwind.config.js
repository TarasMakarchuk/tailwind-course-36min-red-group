/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: { 0.5: "0.12rem" },
      transitionTimingFunction: {
        DEFAULT: "ease-in-out",
      },
      transitionDuration: {
        DEFAULT: "300ms",
      },
      keyframes: {
        fadeIn: {
          from: {
            opacity: 1,
          },
          to: {
            opacity: 0,
          },
        },
      },
      animation: {
        fade: "fadeIn .5s ease-in-out",
      },
      zIndex: {
        1: "1",
        2: "2",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    plugin(({ addComponents, theme, addUtilities }) => {
      addComponents({
        ".btn-primary": {
          backgroundColor: theme("colors.orange.500"),
          color: "white",
          padding: "10px 0",
          display: "block",
          width: "100%",
          fontSize: 14,
          fontWeight: "bold",

          "&:hover": {
            backgroundColor: theme("colors.orange.600"),
          },
        },
      }),
        addUtilities({
          ".text-shadow": {
            textShadow: "1px 1px rgba(0, 0, 0, 0.4)",
          },
        });
    }),
  ],
};
