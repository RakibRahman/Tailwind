module.exports = {
  purge: {
    enabled: false,
    content: ["./**/*.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "pulse-fast": "pulse 1s linear infinite",
        "bounce-fast": "bounce 1s linear infinite",
        wiggle: "wiggle 2s linear infinite",
      },
      keyframes: {
        wiggle: {
          "0%": { transform: "rotate(-15deg)" },
          "50%": { transform: "rotate(15deg)" },
          "100%": { transform: "rotate(-15deg)" },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
