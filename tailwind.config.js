module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        backdrop: "#0a0009,",
        clear: {
          10: "#888888",
          20: "#cccccc",
          30: "#ffffff",
        },
        primary: "#b900a7", // Change if you want to.
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
