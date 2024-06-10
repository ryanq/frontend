import { defineCollection, z } from "astro:content"

const frontend_practice = defineCollection({
    type: "data",
    schema: z.object({
        name: z.string(),
        level: z.number(),
        links: z.object({
            live: z.string().url(),
            project: z.string().url(),
            original: z.string().url(),
        }),
        public: z.boolean(),
        published_on: z.date().optional(),
    })
})

export const collections = {
    fp: frontend_practice,
}