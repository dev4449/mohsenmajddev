import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: 'fa-IR',
    locales: ['fa-IR', 'en-US'],
    routing: {
      prefixDefaultLocale: true
    }
  },
  integrations: [tailwind(), icon()]
});