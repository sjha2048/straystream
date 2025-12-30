import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    publishedDate: z.string(),
    coverImage: z.string().nullable().optional(),
    isPublished: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tagline: z.string().optional(),
    techStack: z.array(z.string()).optional(),
    projectLink: z.string().nullable().optional(),
    repoLink: z.string().nullable().optional(),
    coverImage: z.string().nullable().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { posts, projects };
