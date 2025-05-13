import type { Metadata } from 'next'

import { RelatedPosts } from '@/blocks/RelatedPosts/Component'
import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'
import RichText from '@/components/RichText'
import Link from 'next/link'
import SocialLinks from '@/components/social-link'
import NewsletterSignup from '@/components/newsletter-signup'

import type { Post } from '@/payload-types'

import { PostHero } from '@/heros/PostHero'
import { generateMeta } from '@/utilities/generateMeta'
import PageClient from './page.client'
import { LivePreviewListener } from '@/components/LivePreviewListener'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const posts = await payload.find({
    collection: 'posts',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })

  const params = posts.docs.map(({ slug }) => {
    return { slug }
  })

  return params
}

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function Post({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode()
  const { slug = '' } = await paramsPromise
  const url = '/posts/' + slug
  const post = await queryPostBySlug({ slug })

  if (!post) return <PayloadRedirects url={url} />

  return (
    <article>
      <PageClient />

      {/* Allows redirects for valid pages too */}
      <PayloadRedirects disableNotFound url={url} />

      {draft && <LivePreviewListener />}

      <PostHero post={post} />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/posts" className="text-blue-600 font-medium">
            ← Back to all posts
          </Link>
        </div>

        <RichText className="prose lg:prose-lg mx-auto" data={post.content} enableGutter={false} />
        
        {post.relatedPosts && post.relatedPosts.length > 0 && (
          <div className="my-12">
            <h2 className="text-2xl font-bold mb-4 text-primary">Related Posts</h2>
            <RelatedPosts
              className="mt-4"
              docs={post.relatedPosts.filter((post) => typeof post === 'object')}
            />
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="my-12">
          <NewsletterSignup />
        </div>

        <div className="mt-12 flex justify-center space-x-6 text-gray-500">
          <SocialLinks
            classname="justify-center"
            instagramLink="https://www.instagram.com/fathinafiff"
            youtubeLink="https://www.youtube.com/@fathinafiff"
            tiktokLink="https://www.tiktok.com/@fathinafiff"
            email="mailto:fathin@nightcoders.id"
          />
        </div>
        <p className="text-center text-sm text-gray-400 mt-4">
          © 2025 Fathin Afif, All Rights Reserved
        </p>
      </main>
    </article>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '' } = await paramsPromise
  const post = await queryPostBySlug({ slug })

  return generateMeta({ doc: post })
}

const queryPostBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'posts',
    draft,
    limit: 1,
    overrideAccess: draft,
    pagination: false,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})
