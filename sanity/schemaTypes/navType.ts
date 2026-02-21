import { defineField, defineType } from 'sanity'

export const navType = defineType({
  name: 'navigation',
  title: 'Navigation Settings',
  type: 'document',
  fields: [
    defineField({ name: 'brandName', type: 'string', initialValue: 'COUTURE CARE' }),
    defineField({ name: 'buttonText', type: 'string', initialValue: 'Schedule Pick-up' }),
    // Fields for dynamic labels
    defineField({ name: 'homeLabel', type: 'string', initialValue: 'Homepage' }),
    defineField({ name: 'serviceLabel', type: 'string', initialValue: 'Service' }),
    defineField({ name: 'contactLabel', type: 'string', initialValue: 'Contact' }),
    defineField({ name: 'blogLabel', type: 'string', initialValue: 'Blog' }),
    defineField({ name: 'bookLabel', type: 'string', initialValue: 'Book Now' }),
  ],
})