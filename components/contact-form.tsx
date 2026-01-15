'use client'

import { useState } from 'react'
import { useToast } from '@/hooks/use-toast'

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)
    const data = {
      access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || '',
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()
      console.log('Web3Forms Response:', result)

      if (response.ok && result.success) {
        toast({
          title: '✅ Message Sent Successfully!',
          description: 'Thank you for reaching out. We\'ll get back to you soon.',
        })
        // Reset form
        form.reset()
      } else {
        toast({
          title: '❌ Submission Failed',
          description: result.message || 'Unable to send message. Please try again.',
          variant: 'destructive',
        })
      }
    } catch (error) {
      console.error('Form submission error:', error)
      toast({
        title: '❌ Network Error',
        description: 'Unable to connect. Please check your internet connection.',
        variant: 'destructive',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block mb-2 text-sm font-medium">
            Name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            disabled={isSubmitting}
            className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            placeholder="Your name"
            suppressHydrationWarning
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium">
            Email <span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            disabled={isSubmitting}
            className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            placeholder="your.email@example.com"
            suppressHydrationWarning
          />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="block mb-2 text-sm font-medium">
          Subject <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          disabled={isSubmitting}
          className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          placeholder="Subject"
          suppressHydrationWarning
        />
      </div>
      <div>
        <label htmlFor="message" className="block mb-2 text-sm font-medium">
          Message <span className="text-red-600">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          disabled={isSubmitting}
          className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all resize-none"
          placeholder="Your message..."
        ></textarea>
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="px-8 py-3 bg-red-600 text-white rounded-full font-medium hover:bg-red-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        suppressHydrationWarning
      >
        {isSubmitting ? (
          <>
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Sending...
          </>
        ) : (
          'Send Message'
        )}
      </button>
    </form>
  )
}