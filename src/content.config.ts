import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const pocs = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/pocs" }),
  schema: z.object({
    title: z.string(),
    createdAt: z.coerce.date(),
    thumbnail: z.string().optional()
  })
});

export const collections = { pocs };
