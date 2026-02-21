import { defineField, defineType } from 'sanity'

export const contactPageType = defineType({
  name: 'contactPage',
  title: 'Contact Page Content',
  type: 'document',
  fields: [
    defineField({ name: 'mainTitle', type: 'string', initialValue: 'Personalized Care for Your Wardrobe.' }),
    defineField({ name: 'subTitle', type: 'text', initialValue: 'Our dedicated concierge team is available to assist with bespoke garment care, luxury valeting, and private collection requests.' }),
    
    // Office Information
    defineField({ name: 'headquarters', type: 'text', title: 'Headquarters Address' }),
    defineField({ name: 'directLine', type: 'string', title: 'Phone Number' }),
    defineField({ name: 'emailAddress', type: 'string', title: 'Concierge Email' }),

    // Sidebar Content
    defineField({ name: 'expertHandlingQuote', type: 'string', initialValue: '"Every stitch is treated with the precision it deserves."' }),
    defineField({ name: 'mapImage', type: 'image', title: 'Location Map Image' }),
  ],
})