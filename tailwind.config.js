module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    content: ["./src/**/*.html", "./src/**/*.js"],
  },
  theme: {
    fontFamily: {
      serif: ["Martel", "Georgia", "serif"],
      sans: ["Rajdhani", "Helvetica", "sans-serif"],
    },
    extend: {},
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
}
