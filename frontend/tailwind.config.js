/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serifDisplay: ['"DM Serif Display"', "serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        charcoal: "#36454F",
        pureWhite: "#FFFFFF",
        offWhite: "#F5F5F5",
        softGold: "#D4AF37",
        lightTeal: "#A0DED2",
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #A0DED2 0%, #D4AF37 100%)",
      },
    },
  },
  plugins: [],
};
