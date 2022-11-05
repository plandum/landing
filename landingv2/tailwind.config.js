/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      xl: { 'max': '1440px' },
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        lightYellow: "#F4F9E2",
        lightBlue: "#62D0DF",
        lightPink: "#FFE2DE",
        lightGreen: "#C4E769",
        blue: "#0052C1",
        hardBlue: "#22356F",
        lightPurple: "#8F00FF",
        lightGray: "#DEE1FF",
        lightOrange:"#FAB63E",
      },
      
    },
  },
  plugins: [],
}
