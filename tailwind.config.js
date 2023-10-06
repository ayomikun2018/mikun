/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        space: ["Space-Grotesk", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        calistoga: ["Calistoga", "cursive"],
      },
    },
  },
  variants: {
    extend: {
      scale: ["group-hover"],
      opacity: ["group-hover"],
    },
  },
  plugins: [],
};
