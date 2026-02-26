/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      /* 👑 Traditional + Modern Fonts */
      fontFamily: {
        royal: ['Playfair Display', 'serif'],
        modern: ['Poppins', 'sans-serif'],
      },

      /* 🌸 Saree Brand Color Palette */
      colors: {
        silk: "#FAF7F2",        // your website background
        roseGold: "#B76E79",
        royalRed: "#8B1E3F",
        softRose: "#FDECEC",
        luxuryBeige: "#F5EFE6",
      },

      /* ✨ Soft Luxury Shadow */
      boxShadow: {
        luxury: "0 10px 30px rgba(139, 30, 63, 0.15)",
      }

    },
  },
  plugins: [],
}