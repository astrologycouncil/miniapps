import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const pages = defineCollection({
  loader: glob({ base: "./src/content", pattern: "**/*.mdx" }),
  schema: z.object({
    backgroundColor: z.string().optional(),
    proseModifiers: z.array(z.string()).optional(),
  }),
});

export const collections = {
  pages,
};
