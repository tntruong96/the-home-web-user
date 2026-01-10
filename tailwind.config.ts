// Example `tailwind.config.js` file

module.exports = {
  theme: {
    colors: {},
    fontFamily: {
      beVietNamPro: ["var(--font-be-vietnam-pro)"],
      playFairDisplay: ["var(--font-playfair-display)"],
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
