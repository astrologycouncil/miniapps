import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const pages = defineCollection({
  loader: glob({ base: "./src/content", pattern: "**/*.mdx" }),
});

export const collections = {
  pages,
};
