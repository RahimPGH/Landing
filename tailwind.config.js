/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "c-blue": "#356DFF",
        "c-orange": "#FF9100",
        "c-dark": {
          "body": "#0B0D39",
          "100": "#1A1C46"
        }
      },
      fontFamily: {
        "Vazir": "Vazir",
        "VazirLight": "Vazir Light",
        "VazirBold": "Vazir Bold",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover')
    }
  ],
}

