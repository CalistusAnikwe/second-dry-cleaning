import { defineField, defineType } from 'sanity'

export const homepageType = defineType({
  name: 'homepage',
  title: 'Homepage Content',
  type: 'document',
  fields: [
    // Header & Hero Section
    defineField({ name: 'mainTitle', type: 'string', title: 'Hero Main Title' }),
    defineField({ name: 'highlightText', type: 'string', title: 'Hero Gold Text' }),
    defineField({ name: 'heroDescription', type: 'text', title: 'Hero Subtext' }),
    // NEW: Background Image for the Hero Section
    defineField({ name: 'heroBackgroundImage', type: 'image', title: 'Hero Background Image' }),

    // Heritage Section (Middle Section)
    defineField({ name: 'heritageTitle', type: 'string', title: 'Heritage Title' }),
    defineField({ name: 'heritageDescription', type: 'text', title: 'Heritage Paragraph' }),
    defineField({ name: 'heritageImage', type: 'image', title: 'Heritage Main Image' }),
    defineField({ name: 'featureOneTitle', type: 'string', title: 'Feature 1 (e.g. Hand Finished)' }),
    defineField({ name: 'featureOneSub', type: 'string', title: 'Feature 1 Subtext' }),
    defineField({ name: 'featureTwoTitle', type: 'string', title: 'Feature 2 (e.g. Eco-Certified)' }),
    defineField({ name: 'featureTwoSub', type: 'string', title: 'Feature 2 Subtext' }),

    // Testimonial Section
    defineField({ name: 'quote', type: 'text', title: 'Client Quote' }),
    defineField({ name: 'authorName', type: 'string', title: 'Quote Author' }),
    defineField({ name: 'authorRole', type: 'string', title: 'Author Role' }),
    defineField({ name: 'authorImage', type: 'image', title: 'Author Headshot' }),
    // NEW: Background Image for the Quote section
    defineField({ name: 'quoteBackgroundImage', type: 'image', title: 'Quote Background Image' }),
  ],
})