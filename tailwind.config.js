/** @type {import('tailwindcss').Config} */
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
  plugins: [require("@tailwindcss/typography")],
};
