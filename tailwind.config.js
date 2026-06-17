/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          DEFAULT: '#5C1A1A',
          light: '#7A2525',
          dark: '#3D1010',
        },
        gold: {
          DEFAULT: '#C9952C',
          light: '#DDB050',
          dark: '#A67A1F',
        },
        cream: '#FFF8F0',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
