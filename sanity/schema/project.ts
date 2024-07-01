import { defineField, defineType } from 'sanity'

export const projectType = defineType({
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
        }),
        defineField({
            title: 'Image',
            name: 'coverImage',
            type: 'image'
        }),
        defineField({
            title: 'Body',
            name: 'body',
            type: 'array',
            of: [{ type: 'block' }]
        }),
        defineField({
            title: 'Client',
            name: 'client',
            type: 'text',
            rows: 1
        }),
        defineField({
            title: 'URL',
            name: 'url',
            type: 'url'
        }),
        defineField({
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 200, // will be ignored if slugify is set
                slugify: input => input
                    .toLowerCase()
                    .replace(/\s+/g, '-')
                    .slice(0, 200)
            }
        }),
    ],
})