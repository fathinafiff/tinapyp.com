import ProfileSection from '@/components/profile-section'
import { generateMetadata } from './[slug]/page'
import Link from 'next/link'
import LatestVideo from '@/components/latest-video'
import FeaturedPosts from '@/components/featured-post'
import NewsletterSignup from '@/components/newsletter-signup'
import SocialLinks from '@/components/social-link'
import TestimonialScroller from '@/components/testimonial-scroller'

export const dynamic = 'force-static'
export const revalidate = 14400

const Home = () => {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      {/* Profile Section */}
      <ProfileSection
        name="Fathin Afif"
        bio={
          <>
            Hi! I’m Fathin Afif 👋 — founder of{' '}
            <Link href={'https://nightcoders.id'} target={'_blank'}>
              <strong>Nightcoders</strong>
            </Link>
            , developer, and AI enthusiast based in Aceh 🇮🇩. I help startups and enterprises build
            apps and intelligent systems.
          </>
        }
        ctaText={
          <Link
            href="mailto:fathin@nightcoders.id"
            className="text-blue-600 font-medium mt-2 inline-block"
          >
            Let’s build something — email me!
          </Link>
        }
      />

      {/* Explore Our Products Section */}
      <div className="mt-16 text-center">
        <h2 className="text-xl font-bold mb-4 text-primary">🚀 Our Products</h2>
        <a href="https://nightcoders.id" target="_blank" className="text-blue-600 font-medium">
          View all apps we’ve built →
        </a>
      </div>

      {/* Latest Video Section */}
      <div className="my-12">
        <h2 className="text-2xl font-bold mb-4 text-primary">🎥 Latest Video</h2>
        <LatestVideo />
      </div>

      {/* Featured Posts Section */}
      <div className="mt-12 mb-2">
        <h2 className="text-2xl font-bold mb-4 text-primary">📝 Insights</h2>
        <FeaturedPosts />
      </div>

      {/* Newsletter Signup */}
      <NewsletterSignup />

      <TestimonialScroller />

      <div className="mt-20 flex justify-center space-x-6 text-gray-500">
        <SocialLinks
          classname="justify-center"
          instagramLink="https://www.instagram.com/fathinafiff"
          youtubeLink="https://www.youtube.com/@fathinafiff"
          tiktokLink="https://www.tiktok.com/@fathinafiff"
          email="mailto:fathin@nightcoders.id"
        />
      </div>

      <div className="flex justify-center w-full mt-6 space-x-4 text-sm text-gray-600">
        <Link href="/">Home</Link>
        <span>|</span>
        <Link href="/posts">Insights</Link>
      </div>

      <p className="text-center text-sm text-gray-400 mt-4">
        © 2025 Fathin Afif, All Rights Reserved
      </p>
    </main>
  )
}

export default Home

export { generateMetadata }
