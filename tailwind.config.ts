import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        cardOverlay: "url('/assets/images/CardOverlay.svg')",
      },
      backgroundColor: {
        customBlue: "#0784C7",
        customRed: "#C41B04",
        customDarkRed: "#9B1C1C",
        customGreen: "#01992C",
        customDarkGreen: "#03543F",
      },
      colors: {
        customBlue: "#0784C7",
        customGray: "#8E8E8E",
        customGray1: "#696969",
        customRed: "#C41B04",
        customDarkRed: "#9B1C1C",
        customGreen: "#01992C",
        customDarkGreen: "#03543F",
      },
    },
  },
  plugins: [],
};
export default config;
