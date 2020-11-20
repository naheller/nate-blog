module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    mode: "all",
    content: ["./src/**/*.html", "./src/**/*.js"],
  },
  theme: {
    fontFamily: {
      'serif': ["Vollkorn", "Georgia", "serif"],
    },
    extend: {},
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
}