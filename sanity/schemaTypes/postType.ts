import { defineField, defineType } from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string' }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'category', type: 'string', description: 'e.g., FABRIC CARE' }),
    defineField({ name: 'publishedAt', type: 'date' }),
    defineField({ name: 'excerpt', type: 'text', rows: 3 }),
    defineField({ name: 'mainImage', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'content', type: 'array', of: [{ type: 'block' }] }),
  ],
})