/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-img": "url('/public/utils/ytu_hero.png')",
      },
      colors: {
        // 'swaltaw' : '#103f54'
        'swaltaw' : 'rgba(16, 63, 84, 0.1)'
      }
    },
  },
  plugins: [],
};
