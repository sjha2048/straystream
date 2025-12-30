import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Posts use glob loader to read Keystatic's folder structure
const posts = defineCollection({
  loader: glob({ pattern: '**/index.yaml', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    publishedDate: z.string(),
    coverImage: z.string().nullable().optional(),
    isPublished: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/index.yaml', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string().optional(),
    description: z.string().optional(),
    techStack: z.array(z.string()).optional(),
    projectLink: z.string().nullable().optional(),
    repoLink: z.string().nullable().optional(),
    coverImage: z.string().nullable().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { posts, projects };
