import TestimonialScrollerClient from './testimonial-scroller.client'

import configPromise from '@payload-config'
import { getPayload } from 'payload'

export default async function TestimonialScroller() {
  const payload = await getPayload({ config: configPromise })

  const reviews = await payload.find({
    collection: 'reviews',
    depth: 1,
    // limit: 4,
    overrideAccess: false,
  })

  return <TestimonialScrollerClient reviews={reviews.docs} />
}
