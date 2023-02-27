/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image": "url('..//assets/hero.png')",
      },
      fontFamily: {
        poppins: "Poppins, sans-serif",
      },
      colors: {
        indigo: {
          950: "#0A1B59",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    // ...
  ],
};
