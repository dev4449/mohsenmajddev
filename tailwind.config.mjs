/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lora Variable", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#2e1065",
        secondary: "#35f95c",
      },
    },
  },
  plugins: [],
};
