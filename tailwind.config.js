/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        poppyred: "#D64045",
        eerieblack: "#1B2021",
        gunmetal: "#30343F",
        platinum: "#D9D9D9",
      },
    },
  },
  plugins: [],
};
