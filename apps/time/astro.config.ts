import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://time.astrologycouncil.org",
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "circular-natal-horoscope-js":
          "/node_modules/circular-natal-horoscope-js/dist/index.js",
      },
    },
  },
});
