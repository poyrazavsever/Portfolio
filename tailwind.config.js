/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        text: {
          '0%': {opacity: "0"},
          '100%' : {opacity : "100"},
        }
      },
      animation: {
        wiggle: 'wiggle 20ss ease-in-out infinite',
        text: "text 1s ease-in-out forwards"
      },
      colors: {
        bg: "#0A0A0A",
        primary:{
          default:"#495C83",
          100:"#425376",
          200:"#3A4A69",
        },
        linear:{
          default:"#8996CC",
          100:"#7A86B6",
          200:"#637DB2",
        }
      },
    },
  },
  plugins: [],
}