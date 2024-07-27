/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#65a30d",
        secondary: "#030712",
      },
      fontFamily: {
        sans: ["IRANSansX", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
