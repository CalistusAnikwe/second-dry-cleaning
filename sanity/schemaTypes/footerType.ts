import { defineField, defineType } from 'sanity'

export const footerType = defineType({
  name: 'footer',
  title: 'Footer Content',
  type: 'document',
  fields: [
    defineField({ 
      name: 'brandDescription', 
      type: 'text', 
      title: 'Brand Description',
      initialValue: 'Meticulous garment care for the discerning collector. Serving London, Paris, and New York.'
    }),
    // New Title Fields for your updated structure
    defineField({ 
      name: 'solutionsTitle', 
      type: 'string', 
      title: 'Solutions Column Title',
      initialValue: 'Solutions' 
    }),
    defineField({ 
      name: 'insightsTitle', 
      type: 'string', 
      title: 'Insights Column Title',
      initialValue: 'Insights' 
    }),
    defineField({ 
      name: 'newsletterTitle', 
      type: 'string', 
      title: 'Newsletter Title',
      initialValue: 'THE CIRCLE'
    }),
    defineField({ 
      name: 'newsletterTagline', 
      type: 'string', 
      title: 'Newsletter Tagline',
      initialValue: 'Exclusive insights and seasonal collection guidance.'
    }),
  ],
})