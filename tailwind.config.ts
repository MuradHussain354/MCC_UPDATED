import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "mcc-black": "#060606",
        "mcc-paper": "#F6F4EF",
        "mcc-red": "#C8102E",
        "mcc-red-deep": "#7A0C1D",
        "mcc-steel": "#121212",
        "mcc-steel-light": "#1B1B1B",
        "mcc-line": "rgba(246,244,239,0.08)",
      },
      fontFamily: {
        display: ["var(--font-bebas)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      keyframes: {
        reel: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "-200px 0" },
        },
        marquee: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
        },
        floatUp: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
          "100%": { transform: "translateY(0px)" },
        },
      },
      animation: {
        reel: "reel 6s linear infinite",
        marquee: "marquee 2.4s ease-in-out infinite",
        floatUp: "floatUp 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
