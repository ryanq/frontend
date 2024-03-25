import { defineCollection, z } from "astro:content"

const frontend_collection = defineCollection({
  type: 'data',
  schema: {
    id: z.string(),
    name: z.string(),
    source: z.string(),
    level: z.number().optional(),
    colors: z.object({
      accent: z.string().optional(),
      tokens: z.string().optional(),
    }).optional(),
    links: z.object({
        live: z.string().url().optional(),
        original: z.string().url().optional(),
        project: z.string().url().optional(),
    }).optional(),
    topics: z.array(z.string()).optional(),
  }
})

export const collections = {
    frontend: frontend_collection,
}
