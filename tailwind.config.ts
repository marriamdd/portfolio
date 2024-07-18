import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      greyText: "#607B96",
      whiteText: "#FFF",
    },
    backgroundImage: {
      bgDesktop: "url('/bg-main-desktop.png')",
      bgMobile: "url('/bg-main-mobile.png')",
    },
  },
  plugins: [],
};
export default config;
