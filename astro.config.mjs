import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: "en-US",
    locales: ["en-US", "fa-IR"]
  },
  integrations: [tailwind(), icon()]
});