import { defineCollection, reference, z } from 'astro:content';

const recipes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: reference('authors'),
    cuisine: z.array(z.string()),
    tags: z.array(z.string()),
    relatedRecipes: z.array(reference('recipes')).optional(),
  }),
});

const authors = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    website: z.string().url(),
  }),
});

export const collections = { recipes, authors };
