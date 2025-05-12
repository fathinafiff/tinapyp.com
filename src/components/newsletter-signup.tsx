'use client'

import type React from 'react'

import { useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      setEmail('')

      // Reset success message after 3 seconds
      setTimeout(() => setIsSuccess(false), 3000)
    }, 1000)
  }

  return (
    <div className="w-full py-8 px-4 bg-gray-100 rounded-lg">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-grow bg-white"
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-yellow-500 hover:bg-yellow-600 text-white"
        >
          {isSubmitting ? 'Subscribing...' : 'Subscribe'}
        </Button>
      </form>

      {isSuccess && <p className="mt-2 text-sm text-green-600">Thanks for subscribing!</p>}
    </div>
  )
}
