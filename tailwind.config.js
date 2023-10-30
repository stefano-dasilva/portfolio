/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightmodedark: "#1f7a8c",
        lightmodelight: "#022b3a",
        lightmodeback: "#e1e5f2",
        lightmodetext: "#000000",
        darkmodedark: "#382bf0",
        darkmodelight: "#a688fa",
        darkmodeback: "#121212",
        darkmodetext: "#FFFFFF",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      karla: ["Karla", "sans-serif"],
    },
  },
  plugins: [],
};
