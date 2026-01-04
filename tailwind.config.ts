import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#111214",
        bone: "#F4F0E8",
        brass: "#B08D57",
        oxblood: "#6B0F1A",
        slate: "#2A2F36",
        ash: "#6B7280",
      },
      fontFamily: {
        display: ["var(--font-cinzel)"],
        body: ["var(--font-inter)"],
        mono: ["var(--font-plex-mono)"],
      },
      letterSpacing: {
        widecaps: "0.22em",
      },
      boxShadow: {
        card: "0 16px 48px rgba(17, 18, 20, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
