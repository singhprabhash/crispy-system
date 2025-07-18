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
      "app-primary-black": "#282828",
      "app-color-hero": "#e2e8f0",
      "app-black-200": "#414141",
      "app-black-300": "#0e0e0ea6",
      "app-black-600": "#313131",
      "app-white-700": "#e2e8f0",
      "app-white-800": "#f6f7f8",
      "app-black": "#000",
      "app-white": "#fff",
      "app-gold": "#c99c3b",
      "text-zinc-500": "#71717A",
      "muted": "#999",
      "green-50": "#f0fdf4",
      "green-600": "#22c55e",
      "green-700": "#16a34a",
      "dark-green-500": "#183531",
      "neon-green": '#c2f400',
      "black-secondary": "#1f1e1d",
      "green-image": "#39d18f",
      "gray-50": "#d9d9d9",
      // green: {
      //   50: '#f0fdf4',
      //   600: '#22c55e',
      //   700: '#16a34a',
      // },
      // gray: {
      //   600: '#4b5563',
      //   800: '#1f2937',
      // },
      primary: {},
      secondary: {},
    },
    extend: {
      colors: {
        primary: '#52b5af',
        background: '#e8f7f7',
        lightBackground: '#ecfafa',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        'ultra-xs': {'max': '374px'},
        'xs': {'min': '375px', 'max': '639px'},

        '-lg': {'max': '1023px'},
      }
    },
  },
  plugins: [],
  safelist: ["h-screen"],
};
