/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },
      animation: {
        wiggle: 'wiggle 14s ease-in-out infinite',
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