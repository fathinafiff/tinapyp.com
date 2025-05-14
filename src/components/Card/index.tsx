'use client'
import { cn } from '@/utilities/ui'
import useClickableCard from '@/utilities/useClickableCard'
import Link from 'next/link'
import React from 'react'
import { Heart, MessageSquare } from 'lucide-react'

import type { Post } from '@/payload-types'

import { Media } from '@/components/Media'

export type CardPostData = Pick<Post, 'slug' | 'categories' | 'meta' | 'title' | 'publishedAt'>

export const Card: React.FC<{
  alignItems?: 'center'
  className?: string
  doc?: CardPostData
  relationTo?: 'posts'
  showCategories?: boolean
  title?: string
}> = (props) => {
  const { card, link } = useClickableCard({})
  const { className, doc, relationTo, showCategories, title: titleFromProps } = props

  const { slug, categories, meta, title, publishedAt } = doc || {}
  const { description, image: metaImage } = meta || {}

  const hasCategories = categories && Array.isArray(categories) && categories.length > 0
  const titleToUse = titleFromProps || title
  const sanitizedDescription = description?.replace(/\s/g, ' ') // replace non-breaking space with white space
  const href = `/${relationTo}/${slug}`

  // Format date for display
  const formattedDate = publishedAt
    ? new Date(publishedAt).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      })
    : ''

  // Placeholder values for likes and comments
  const likes = 5
  const comments = 3

  return (
    <article
      className={cn('border rounded-lg overflow-hidden shadow-sm flex flex-col h-full', className)}
      ref={card.ref}
    >
      <div className="p-4 flex flex-col h-full">
        <div className="relative h-56 bg-white border-b overflow-hidden">
          {showCategories &&
            hasCategories &&
            categories?.[0] &&
            typeof categories[0] === 'object' && (
              <div className="absolute top-4 left-4 bg-yellow-500 text-xs font-bold px-2 py-1 rounded z-10 rounded">
                {categories[0].title || 'Uncategorized'}
              </div>
            )}
          {!metaImage && <div className="h-full flex items-center justify-center">No image</div>}
          {metaImage && typeof metaImage !== 'string' && (
            <div className="h-full w-full">
              <Media
                resource={metaImage}
                size="100vw"
                className="object-cover w-full h-full"
                imgClassName="w-full h-full object-cover"
              />
            </div>
          )}
        </div>

        {formattedDate && <div className="text-sm text-gray-500 mb-2 mt-2">{formattedDate}</div>}

        {titleToUse && (
          <h3 className="font-bold text-lg mb-2">
            <Link href={href} ref={link.ref}>
              {titleToUse}
            </Link>
          </h3>
        )}

        {description && <p className="text-gray-700 text-sm mb-4">{sanitizedDescription}</p>}

        {/* Footer */}
        <div className="mt-auto flex items-center justify-between pt-4">
          {/* likes and comments */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Heart size={16} className="text-gray-500" />
              <span className="text-xs text-gray-500">{likes}</span>
            </div>
            <div className="flex items-center space-x-1">
              <MessageSquare size={16} className="text-gray-500" />
              <span className="text-xs text-gray-500">{comments}</span>
            </div>
          </div>

          {/* author */}
          <div className="flex items-center">
            <div className="w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center text-white text-xs mr-2">
              F
            </div>
            <span className="text-xs text-gray-500">Fathin Afif</span>
          </div>
        </div>
      </div>
    </article>
  )
}
