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
      sans: ["Lato", "Helvetica", "sans-serif"],
      title: ["Rajdhani", "Helvetica", "sans-serif"],
    },
    extend: {},
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
}
