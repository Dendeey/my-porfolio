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
        javascript: "#f7df1e",
        php: "#777BB3",
        react: "#61DBFB",
        mysql: "#00758F",
        wordpress: "#00749C",
        sass: " #CD6799",
        tailwind: "#06b6d4",
        github: "#171515",
      },
      backgroundImage: {
        portfolioProject: "url('/src/assets/images/Otaru.jpg')",
      },
      translate: {
        sideBarHidden: "-200px",
      },
    },
  },
  plugins: [],
};
