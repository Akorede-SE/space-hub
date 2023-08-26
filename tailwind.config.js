/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        RobotoSlab: ['Roboto Slab', 'serif'],
        Montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}