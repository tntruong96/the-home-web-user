// Example `tailwind.config.js` file

module.exports = {
  theme: {
    colors: {},
    fontFamily: {
      ralewayFont: ["var(--font-raleway)"],
      playFairDisplay: ["var(--font-playfair-display)"],
      abygaer: ["var(--font-abygaer)"],
    },
    extend: {
      spacing: {
        "128": "32rem",
        "144": "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  variants: {
    extend: {
      borderColor: ["focus-visible"],
      opacity: ["disabled"],
    },
  },
};
