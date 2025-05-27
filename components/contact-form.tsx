"use client"

import { useState } from "react"

export default function ContactForm() {
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error', message: string } | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setFeedback(null)

    const payload = {
      access_key: "682fa9bd-ab2a-4550-87d1-1287cf02c09e", 
      ...formData,
    }

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })
      const json = await res.json()
      if (json.success) {
        setFeedback({ type: 'success', message: 'Thank you for your message! We\'ll get back to you soon.' })
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        setFeedback({ type: 'error', message: 'Something went wrong. Please try again later.' })
      }
    } catch (err) {
      setFeedback({ type: 'error', message: 'Network error. Please check your connection and try again.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-black/70 border border-red-600/30 rounded-lg p-6">
      <h3 className="text-2xl font-serif font-bold text-cream mb-6 text-center">Quick Mail</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-cream mb-2">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-black/50 border border-red-600/30 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600/50 text-cream"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-cream mb-2">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-black/50 border border-red-600/30 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600/50 text-cream"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-cream mb-2">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-black/50 border border-red-600/30 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600/50 text-cream"
            placeholder="Enter your subject"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-cream mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-2 bg-black/50 border border-red-600/30 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600/50 text-cream resize-none"
            placeholder="Enter your message"
          />
        </div>
        {feedback && (
          <p className={`text-center ${feedback.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
            {feedback.message}
          </p>
        )}
        <button
          type="submit"
          disabled={loading}
          className="w-full px-6 py-3 bg-red-600 text-cream rounded-md font-medium hover:bg-red-700 transition-colors shadow-[0_0_15px_rgba(255,0,0,0.5)] hover:shadow-[0_0_20px_rgba(255,0,0,0.7)] disabled:opacity-50"
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  )
}
