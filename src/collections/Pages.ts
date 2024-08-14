import { Cover } from '@/blocks/cover/schema'
import { Image } from '@/blocks/image/schema'
import { RichText } from '@/blocks/richText/schema'
import { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  fields: [
    {
      name: 'name', // only used internal
      label: 'Name',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      admin: {
        position: 'sidebar', // defines the place on the admin panel
      },
      required: true,
    },
    {
      name: 'layout',
      label: 'Layout',
      type: 'blocks',
      // blocks: [Cover, RichText, Image], // blocks schema's will go in here
      blocks: [Cover], // blocks schema's will go in here
      required: true, // blocks schema's will go in here
    },
  ],
}
