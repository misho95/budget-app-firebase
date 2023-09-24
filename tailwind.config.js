/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        w960: "960px",
        w660: "660px",
        w300: "300px",
      },
      height: {
        h350: "350px",
        h300: "300px",
      },
      borderWidth: {
        b16: "16px",
        px1: "1px",
      },
    },
  },
  plugins: [],
};
