'use client'

import { Review } from '@/types/Review'
import TestimonialCard from './ui/testimonial-card'

const reviews: Review[] = [
  {
    id: 1,
    name: 'Sandeep',
    rating: '5.0',
    date: '2025-01-01',
    imageUrl:
      'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    comment: "I do highly recommend checking out ui.aceternity.com/components. It's greaaaat!",
  },
  {
    id: 2,
    rating: '5.0',
    date: '2025-01-01',
    name: 'Dhanush Vardhan Kalaiselvan',
    imageUrl:
      'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    comment: '@aceternitylabs is just awesome, added some of its elements in my portfolio website',
  },
  {
    id: 3,
    rating: '5.0',
    date: '2025-01-01',
    name: 'vish',
    imageUrl:
      'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    comment: 'Well done Manu\nYou rock 🚀',
  },
  {
    id: 4,
    rating: '5.0',
    date: '2025-01-01',
    name: 'Teddy Ni',
    imageUrl:
      'https://images.pexels.com/photos/2531553/pexels-photo-2531553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    comment:
      "Wow, this site is an ABSOLUTE GOLDMINE for design engineers. It's a huge collection of micro-interactions / animations, all with their respective source code for you to copy and paste.",
  },
  {
    id: 5,
    rating: '5.0',
    date: '2025-01-01',
    name: 'Jeremy',
    imageUrl:
      'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    comment: 'Looking absolutely awesome! 👋',
  },
]

export default function TestimonialScroller() {
  return (
    <section className="py-16 overflow-hidden">
      <div className="mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-primary">What People Are Saying</h2>

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
          <div className="infinite-scroll-container h-[600px] overflow-hidden relative rounded-xl">
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
