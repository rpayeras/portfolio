module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        oxford: "#1B2A41",
        jeans: "#63adf2",
        cerise: "#D8315B",
      },
      keyframes: {
        baila: {
          "0%": { transform: "translate(0%)" },
          "10%": { transform: "translate(40%)" },
          "20%": { transform: "translate(60%)" },
          "30%": { transform: "translate(80%)" },
          "40%": { transform: "translate(140%)" },
          "50%": { transform: "translate(80%)" },
          "60%": { transform: "translate(60%)" },
          "70%": { transform: "translate(40%)" },
          "80%": { transform: "translate(20%)" },
          "90%": { transform: "translate(5%)" },
          "100%": { transform: "translate(0%)" },
        },
        bailareverse: {
          "0%": { transform: "translate(0%)" },
          "10%": { transform: "translate(-40%)" },
          "20%": { transform: "translate(-60%)" },
          "30%": { transform: "translate(-80%)" },
          "40%": { transform: "translate(-140%)" },
          "50%": { transform: "translate(-80%)" },
          "60%": { transform: "translate(-60%)" },
          "70%": { transform: "translate(-40%)" },
          "80%": { transform: "translate(-20%)" },
          "90%": { transform: "translate(-5%)" },
          "100%": { transform: "translate(0%)" },
        },
      },
      animation: {
        "baila-linear": "baila 30s linear infinite",
        "baila-linear-reverse": "bailareverse 30s linear infinite",
      },
    },
    fontFamily: {
      lato: ["lato", "ui-sans-serif"],
      latosemibold: ["lato-semibold", "ui-sans-serif"],
      latobold: ["lato-bold", "ui-sans-serif"],
    },
  },
  plugins: [],
};
