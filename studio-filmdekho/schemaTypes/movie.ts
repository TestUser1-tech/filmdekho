import {defineField, defineType} from 'sanity'

export const movie = defineType({
  name: 'movie',
  title: 'Movie',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
    }),
    defineField({
      name: 'poster',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'rating',
      type: 'number',
      validation: (Rule) => Rule.min(0).max(10),
    }),
    defineField({name: 'releaseDate', type: 'date'}),
    defineField({name: 'language', type: 'string'}),
    defineField({
      name: 'ottPlatform',
      type: 'string',
      description: 'e.g. Netflix, Prime Video',
    }),
  ],
})
