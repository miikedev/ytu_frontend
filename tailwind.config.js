/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-img": "url('/public/utils/ytu_hero.png')",
      },
    },
  },
  plugins: [],
};
