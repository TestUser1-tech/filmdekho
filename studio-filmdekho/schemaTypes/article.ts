import {defineField, defineType} from 'sanity'

export const article = defineType({
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().max(160),
    }),
    defineField({
      name: 'coverImage',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'content',
      type: 'array',
      of: [{type: 'block'}, {type: 'image'}],
    }),
    defineField({
      name: 'category',
      type: 'string',
      options: {
        list: [
          {title: 'Bollywood', value: 'Bollywood'},
          {title: 'Hollywood', value: 'Hollywood'},
          {title: 'South Indian', value: 'South Indian'},
          {title: 'OTT', value: 'OTT'},
          {title: 'Reviews', value: 'Reviews'},
        ],
      },
    }),
    defineField({name: 'author', type: 'string'}),
    defineField({name: 'publishedAt', type: 'datetime'}),
    defineField({
      name: 'tags',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
})
