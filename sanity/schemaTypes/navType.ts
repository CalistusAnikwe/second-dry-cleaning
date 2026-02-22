import { defineField, defineType } from 'sanity'

export const navType = defineType({
  name: 'navigation',
  title: 'Navigation Links',
  type: 'document',
  fields: [
    defineField({
      name: 'links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', type: 'string', title: 'Link Label' },
            { name: 'url', type: 'string', title: 'URL Path (e.g. /blog)' }
          ]
        }
      ]
    })
  ]
})