module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          50: "#fbfbfb",
          100: "#f4f4f4",
          600: "#6f6e6e",
          800: "#615d31",
          900: "#171c24",
          "900_99": "#171c2499",
          "50_b2": "#fbfbfbb2",
          "50_1e": "#fbfbfb1e",
        },
        blue: { 900: "#1035bb" },
        blue_gray: {
          50: "#edf0f3",
          900: "#2b2b2b",
          "900_bf": "#2b2b2bbf",
          "900_b2": "#2b2b2bb2",
          "900_7f": "#2b2b2b7f",
          "900_1e": "#2b2b2b1e",
          "900_00": "#2b2b2b00",
          "900_99": "#2b2b2b99",
        },
        lime: { 800: "#c39514" },
        red: { 400: "#f44653" },
        yellow: { 700: "#f4c02f" },
        white: { A700: "#ffffff" },
      },
      backgroundImage: {
        gradient: "linear-gradient(174deg ,#2b2b2b,#615d31)",
        gradient1: "linear-gradient(90deg ,#2b2b2b,#2b2b2b00)",
        gradient2: "linear-gradient(62deg ,#2b2b2b,#2b2b2b00)",
        gradient3: "linear-gradient(128deg ,#2b2b2b,#2b2b2b00)",
        gradient4: "linear-gradient(126deg ,#2b2b2b,#2b2b2b00)",
      },
      fontFamily: { manrope: "Manrope", orbitron: "Orbitron" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
