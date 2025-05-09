"use client"

import { useState } from "react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically send the form data to your backend
    alert("Thank you for your message! We'll get back to you soon.")
    setFormData({ name: "", email: "", subject: "", message: "" })
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
        <button
          type="submit"
          className="w-full px-6 py-3 bg-red-600 text-cream rounded-md font-medium hover:bg-red-700 transition-colors shadow-[0_0_15px_rgba(255,0,0,0.5)] hover:shadow-[0_0_20px_rgba(255,0,0,0.7)]"
        >
          Send Message
        </button>
      </form>
    </div>
  )
} 