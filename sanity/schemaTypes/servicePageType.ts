import { defineField, defineType } from 'sanity'

export const servicePageType = defineType({
  name: 'servicePage',
  title: 'Service Page Content',
  type: 'document',
  fields: [
    // Hero Section
    defineField({ name: 'heroTitle', type: 'string', initialValue: 'The Art of Garment Preservation' }),
    defineField({ name: 'heroSubtitle', type: 'text', initialValue: 'A specialized atelier dedicated to the meticulous restoration and maintenance of your most treasured wardrobe investments.' }),
    
    // Services Grid
    defineField({
      name: 'services',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'title', type: 'string' },
          { name: 'description', type: 'text' },
          { name: 'image', type: 'image', options: { hotspot: true } }
        ]
      }]
    }),

    // The Signature Process
    defineField({ name: 'processTitle', type: 'string', initialValue: 'The Signature Process' }),
    defineField({
      name: 'steps',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'number', type: 'string' },
          { name: 'title', type: 'string' },
          { name: 'description', type: 'text' }
        ]
      }]
    }),

    // Quote Section
    defineField({ name: 'quote', type: 'text' }),
    defineField({ name: 'quoteAuthor', type: 'string' }),
  ],
})