import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#3B82F6",
        secondary: "#22C55E",
        placeholder: "#495057",
      },
      boxShadow: {
        xs: '4px 6px 4px rgba(0, 0, 0, 0.17)'
      }
    },
  },
  plugins: [],
};
export default config;
