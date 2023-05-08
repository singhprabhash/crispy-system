/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "app-color-hero": "#e2e8f0",
      "app-black-200": "#414141",
      "app-black-300": "#0e0e0ea6",
      "app-black-600": "#313131",
      "app-white-700": "#e2e8f0",
      "app-white-800": "#f6f7f8",
      "app-black": "#000",
      "app-white": "#fff",
      "app-gold": "#c99c3b",
      primary: {},
      secondary: {},
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
  safelist: ["h-screen"],
};
