import configPromise from '@payload-config'
import { getPayload } from 'payload'

import { Card } from '@/components/Card'

export default async function FeaturedPosts() {
  const payload = await getPayload({ config: configPromise })

  const posts = await payload.find({
    collection: 'posts',
    depth: 1,
    limit: 4,
    overrideAccess: false,
    select: {
      title: true,
      slug: true,
      categories: true,
      meta: true,
    },
  })

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {posts.docs.map((result, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-sm flex flex-col h-full">
            <div className="col-span-4">
              <Card className="h-full" doc={result} relationTo="posts" showCategories />
            </div>
          </div>
        ))}
      </div>

      {/* <div className="flex justify-end  w-full mt-5">
        <button className="flex rounded-2xl items-center px-4 py-2 text-sm text-primary">
          View All <ArrowRight size={15} />
        </button>
      </div> */}
    </>
  )
}
