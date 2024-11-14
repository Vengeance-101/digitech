/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./libs/**/*.{js,ts,jsx,tsx,mdx}",
    "./utilities/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      screens: {
        xsm: "420px",
      },
      colors: {
        "bg-estiva-footer": "#001b29",
        "bg-esitva-footer2":
          "radial-gradient(circle, rgba(4,50,79,1) 50%, rgba(19,29,51,1) 100%)",
        "devider-color": "rgba(125, 211, 252, 0.8)",
        "icon-twitter": "#00aced",
        "icon-facebook": "#3b5998",
        "icon-linkedin": "#007bb6",
        "icon-instagram": "#bc2a8d",
        "icon-pinterest": "#cb2027",
        "social-bg": "rgba(6 53 80 / 43%)",
        "service-bg": "#f4f9fc",
      },
    },
  },
  plugins: [],
};
