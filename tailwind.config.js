/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: "#f1f1f1",
        gray: "#202020",
        "world-peas-compost-base": "#000",
        cadetblue: "#7db8a9",
        white: "#fff",
      },
      fontFamily: {
        "body-default": "Inter",
        "title-default": "Newsreader",
      },
      borderRadius: {
        "341xl": "360px",
      },
    },
    fontSize: {
      lg: "1.13rem",
      base: "1rem",
      "21xl": "2.5rem",
      "45xl": "4rem",
      sm: "0.88rem",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
