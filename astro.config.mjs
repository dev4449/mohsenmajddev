import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://mohsenmajd.dev",
  i18n: {
    defaultLocale: "en-US",
    locales: ["en-US", "fa-IR"],
  },
  integrations: [tailwind(), icon(), sitemap()],
});
