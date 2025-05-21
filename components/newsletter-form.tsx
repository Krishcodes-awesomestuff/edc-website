'use client'

export default function NewsletterForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add newsletter subscription logic here
  }

  return (
    <form className="mt-4 flex" onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Your email"
        className="px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-red-600 w-full"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-red-600 text-white rounded-r-lg hover:bg-red-700 transition-colors"
      >
        Subscribe
      </button>
    </form>
  )
}