import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'white': '#FFFFFF',
      'vanilla': '#F7F6E4',
      'offwhite': '#E6E6E6',
      'black': '#333333',
      'teal': '#79B7B0',
      'plum': '#635063',
      'pink': '#FE4365',
      'purple': '#715F80',
      'purple-dark': '#3C3C56',
      'purple-light': '#B2A3BD'
    },
    extend: {
      boxShadow: {
        project: '4px 4px 0 0 rgba(0, 0, 0, 0.15)'
      },
    }
  },
  plugins: [],
};
export default config;
