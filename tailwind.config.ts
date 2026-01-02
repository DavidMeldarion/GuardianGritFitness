import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0b132b",
        steel: "#1f2937",
        sand: "#f4f1ea",
        ember: "#ea580c",
        cloud: "#e5e7eb",
      },
      fontFamily: {
        display: ["var(--font-manrope)"],
        body: ["var(--font-manrope)"],
      },
      boxShadow: {
        card: "0 20px 60px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
