'use client'

import { useEffect, useRef } from 'react'
import { Star, Quote, Twitter } from 'lucide-react'

type Review = {
  id?: number
  name: string
  date: string
  rating: string
  comment?: string
  imageUrl?: string
  platform?: string
}

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
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      if (containerRef.current) {
        containerRef.current.scrollTop += 1
        if (containerRef.current.scrollTop >= containerRef.current.scrollHeight / 2) {
          containerRef.current.scrollTop = 0
        }
      }
    }, 30)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="text-primary py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold text-left">Review</h2>
        {/* <p className="text-gray-400 mt-2">
          Here's what some of our users have to say about Aceternity UI.
        </p> */}
      </div>
      <div className="h-[600px] overflow-hidden relative" ref={containerRef}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-scroll-duplicate">
          {[...reviews, ...reviews].map((t, idx) => (
            <div key={idx} className="bg-background rounded-xl p-6 border transition-colors">
              <div className="flex items-start gap-3 mb-4">
                <img
                  src={t.imageUrl}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold comment-white">{t.name}</h3>
                </div>
                <Twitter className="ml-auto comment-blue-400" size={20} />
              </div>
              <p className="whitespace-pre-line w-full flex flex-wrap">{t.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
