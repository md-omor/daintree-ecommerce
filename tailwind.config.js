/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        lg: "2rem",
        xl: "3rem",
        "2xl": "4rem",
      },

      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1080px",
        "2xl": "1496px",
      },

      maxWidth: "100%",
      "@screen sm": {
        maxWidth: "640px",
      },
      "@screen md": {
        maxWidth: "768px",
      },
      "@screen lg": {
        maxWidth: "1080px",
      },
      "@screen xl": {
        maxWidth: "1400px",
      },
    },

    extend: {
      fontFamily: {
        black: "GreycliffCF_BLACK",
        medium: "GreycliffCF_MEDIUM",
        semibold: "GreycliffCF_SEMIBOLD",
        normal: "GreycliffCF_NORMAL",
        bold: "GreycliffCF_BOLD",
        jost: ["Jost", "sans-serif"],
        publicSans: ["Public Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
