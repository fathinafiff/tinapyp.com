import { Review } from '@/payload-types'
import { Quote, Star } from 'lucide-react'
import Image from 'next/image'

const TestimonialCard = ({ review }: { review: Review }) => {
  return (
    <div className="p-6 my-3 mx-3 border shadow-lg shadow-primary/10 rounded-xl transition-all duration-300 hover:shadow-md">
      <div className="flex items-center gap-4 mb-4">
        <div className="relative">
          <Image
            src={review.imageAvatarUrl}
            alt={review.name}
            width={44}
            height={44}
            className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
          />
          {/* <div className="absolute -bottom-1 -right-1 bg-background rounded-full p-0.5">
            <Twitter className="text-primary w-4 h-4" />
          </div> */}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-foreground truncate">{review.name}</h3>
          <div className="flex items-center mt-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
            ))}
            <span className="text-xs ml-2 text-muted-foreground">{review.date.split('T')[0]}</span>
          </div>
        </div>
      </div>
      <div className="relative">
        <Quote className="absolute -top-2 -left-2 w-4 h-4 text-primary/20 rotate-180" />
        <p className="text-sm text-foreground/90 leading-relaxed pl-4">{review.comment}</p>
      </div>
    </div>
  )
}

export default TestimonialCard
