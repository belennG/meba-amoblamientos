module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        rubik: ["rubik", "sans-serif"],
        inconsolata: ["inconsolata", "sans-serif"],
        metropolis: ["metropolis", "sans-serif"],
        test: ["dancingScript"],
        sans: ["Metropolis", "sans-serif"],
      },
      colors: {
        "hunter-green": "#3E563C",
        "middle-red": "#d7816a",
        "green-sheen": "#77af9c",
        isabelline: "#f5efed",
        "international-orange": "#bb4430",
        "blueish-text-color": "#112A46",
        "green-bg": "#bcd8b7",
        almond: "#e0d2c3",
        "linen-white": "#FCEADE",
        "eton-green": "#a1cca5",
        "nianza-green": "#e8fccf",
        "darkolive-green": "#566e3d",
      },
    },
    variants: {
      extend: {},
    },
    plugins: [require("@savvywombat/tailwindcss-grid-areas")],
  },
};
