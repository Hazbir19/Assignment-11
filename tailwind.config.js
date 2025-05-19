/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#fcfbfd",
        primary: "#90D1CA",
        accent: "#f7a3f0",
        text: "#05154e",
      },
      fontFamily: {
        title: ["Poppins", "sans-serif"], // For headings
        description: ["Inter", "sans-serif"], // For descriptions
        body: ["Inter", "sans-serif"], // For normal text
      },
    },
  },
  plugins: [require("daisyui")],
};
