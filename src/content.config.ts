import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { categories } from "@/config/categories";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/posts" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      /** Must match one of the entries in src/config/categories.ts. */
      category: z.enum(categories),
      date: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      author: z.string(),
      /**
       * Optional feature image. Monograph's post feeds are deliberately
       * text-only, so a cover is only ever shown on the post itself.
       */
      cover: z
        .object({
          src: image(),
          alt: z.string(),
        }),
      /** Surfaces the post in the "Featured" list in the home sidebar. */
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
    }),
});

export const collections = { posts };
