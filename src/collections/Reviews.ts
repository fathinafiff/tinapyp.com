import type { CollectionConfig } from 'payload'

import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'
import { slugField } from '@/fields/slug'

export const Reviews: CollectionConfig = {
  slug: 'reviews',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'date',
      type: 'date',
      required: true,
    },
    {
      name: 'rating',
      type: 'number',
      required: true,
    },
    {
      name: 'imageAvatarUrl',
      type: 'text',
      required: true,
    },
    {
      name: 'comment',
      type: 'text',
    },
    {
      name: 'platform',
      type: 'select',
      options: ['Fastwork', 'Upwork', 'Fiverr', 'Freelancer.com', 'Other'],
    },
    ...slugField(),
  ],
}
