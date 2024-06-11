/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        custom: {
          blue: '#165ba1',       // Color personalizado blue
          lightblue: '#2d9abc',  // Color personalizado light blue
          pink: '#ae528a',       // Color personalizado pink
          lightgray: '#ebf3f3',  // Color personalizado light gray
          darkgray: '#0d0e0e',   // Color personalizado dark gray
          mint: '#E6F9F9',       // Color personalizado mint
        },
      },
    },
  },
  plugins: [],
}