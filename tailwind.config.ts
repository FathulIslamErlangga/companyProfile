import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#FF0066",
        primaryDark: "#191A23",
        primaryWhite: "#F3F3F3",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [],
  },
} satisfies Config;
