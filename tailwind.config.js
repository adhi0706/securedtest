/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/pages/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        primary: "#ffffff",
        secondary: "#001938",
        tertiary: "#12D576",
        labelGray: "#52525B",
        cardBackgroundDark: "#FFFFFF1A",
        cardBackgroundLight: "#D2E6FF29",
        cardBorderColorDark: "#D2E6FF4D",
        cardBorderColorLight: "#A4CDFF4D",
        sideBarColorLight: "#FFFFFF",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        nunitoSans: ["Nunito Sans", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
        playFairDisplay: ["Playfair Display", "serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        'custom-bg': "url('../../src/AuditExpress/assets/grid.png')",
        'grid-bg': "url('../../src/AuditExpress/assets/CTA.png')", 
        'griddark-bg': "url('../../src/AuditExpress/assets/CTA.jpg')", 
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".bg-grid": {
          "background-image": `linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px),
                                linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px)`,
          "background-size": "100px 100px",
        },
        ".dark .bg-grid": {
          "background-image": `linear-gradient(90deg, rgba(210, 230, 255, 0.039) 1px, transparent 1px),
                                linear-gradient(rgba(210, 230, 255, 0.039) 1px, transparent 1px)`,
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
