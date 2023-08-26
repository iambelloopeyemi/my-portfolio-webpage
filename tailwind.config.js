/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": `linear-gradient(to right, rgba(245, 245, 245, 0.8), rgba(245, 245, 245, 0.8)), url("/hero.svg")`,
      },
      colors: {
        "anti-flash-white": "#F0F0F0",
        "dim-gray": "#716A6A",
        "violet-blue": "#3943B7",
        night: "#121212",
        seasalt: "#FAFAFA",
      },
    },
  },
  plugins: [],
};
