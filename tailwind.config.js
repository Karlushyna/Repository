//*** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'archivo': ['Archivo Black', 'sans-serif'],  // 'sans' is the default font family
        'roboto': ['Roboto', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}
