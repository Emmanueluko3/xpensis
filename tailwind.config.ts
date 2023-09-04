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
      },
      colors: {
        customBlue: "#0784C7",
        customGray: "#8E8E8E",
      },
    },
  },
  plugins: [],
};
export default config;
