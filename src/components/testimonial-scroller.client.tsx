'use client'

import { Review } from '@/payload-types'
import TestimonialCard from './ui/testimonial-card'

export default function TestimonialScrollerClient({ reviews }: { reviews: Review[] }) {
  return (
    <section className="py-16 overflow-hidden">
      <div className="mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-primary">💬 What People Are Saying</h2>

        <style jsx global>{`
          @keyframes scroll {
            0% {
              transform: translateY(0);
            }
            100% {
              transform: translateY(-50%);
            }
          }

          .infinite-scroll-container:hover .infinite-scroll-content {
            animation-play-state: paused;
          }
        `}</style>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First column of reviews */}
          <div className="infinite-scroll-container h-[600px] overflow-hidden relative rounded-xl">
            <div
              className="infinite-scroll-content"
              style={{
                animation: 'scroll 40s linear infinite',
                height: 'fit-content',
              }}
            >
              {/* Original reviews */}
              {reviews.map((review, idx) => (
                <TestimonialCard key={`col1-${idx}`} review={review} />
              ))}
              {/* Duplicate reviews for infinite effect */}
              {reviews.map((review, idx) => (
                <TestimonialCard key={`col1-dup-${idx}`} review={review} />
              ))}
            </div>
          </div>

          {/* Second column with reversed and delayed animation */}
          <div className="hidden md:block infinite-scroll-container h-[600px] overflow-hidden relative rounded-xl">
            <div
              className="infinite-scroll-content"
              style={{
                animation: 'scroll 45s linear infinite',
                animationDelay: '-10s',
                height: 'fit-content',
              }}
            >
              {/* Reversed order for visual variety */}
              {[...reviews].reverse().map((review, idx) => (
                <TestimonialCard key={`col2-${idx}`} review={review} />
              ))}
              {/* Duplicate reviews for infinite effect */}
              {[...reviews].reverse().map((review, idx) => (
                <TestimonialCard key={`col2-dup-${idx}`} review={review} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
