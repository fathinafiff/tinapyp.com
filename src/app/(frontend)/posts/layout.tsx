import NewsletterSignup from '@/components/newsletter-signup'
import SocialLinks from '@/components/social-link'
import { Header } from '@/Header/Component'
import Link from 'next/link'
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Header />
      {children}
      <div className="max-w-3xl mx-auto px-4 py-8">
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

        <div className="flex justify-center w-full mt-6 space-x-4 text-sm text-gray-600">
          <Link href="/">Home</Link>
          <span>|</span>
          <Link href="/posts">Insights</Link>
        </div>

        <p className="text-center text-sm text-gray-400 mt-4">
          © 2025 Fathin Afif, All Rights Reserved
        </p>
      </div>
    </main>
  )
}

export default Layout
