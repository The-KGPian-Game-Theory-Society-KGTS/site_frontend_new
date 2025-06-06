"use client"

import type React from "react"
import { motion } from "framer-motion"
import { MapPin, Instagram, Facebook, Linkedin, ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"

export default function ContactSection() {
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error', message: string } | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

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
      // Make sure to use your own access key from web3forms.com
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
    <section id="contact" className="py-20 relative">
    
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-cream mb-4">
            Contact <span className="text-red-500 filter drop-shadow-[0_0_8px_rgba(255,0,0,0.6)]">Us</span>
          </h2>
          <div className="w-20 h-1 bg-[#8B0000] mx-auto"></div>
          <p className="text-cream/80 mt-6 max-w-2xl mx-auto">
            Have questions? Get in touch with us and we'll be
            happy to help.
          </p>
        </motion.div>

        {/* The `items-center` class vertically aligns the two columns for a balanced look */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-serif font-bold text-cream mb-6">Get in Touch</h3>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#8B0000]/30 flex items-center justify-center text-[#8B0000] mr-4">
                  <Instagram size={18} className="filter drop-shadow-[0_0_12px_rgba(255,0,0,0.8)]" />
                </div>
                <div>
                  <a target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-cream hover:underline" href="https://www.instagram.com/kgts.iitkgp?igsh=M2ZxZTNzM2V6cDFv">Instagram</a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#8B0000]/30 flex items-center justify-center text-[#8B0000] mr-4">
                  <Facebook size={18} className="filter drop-shadow-[0_0_12px_rgba(255,0,0,0.8)]" />
                </div>
                <div>
                  <a target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-cream hover:underline" href="https://www.facebook.com/The.KGTS?mibextid=rS40aB7S9Ucbxw6v">Facebook</a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#8B0000]/30 flex items-center justify-center text-[#8B0000] mr-4">
                  <Linkedin size={18} className="filter drop-shadow-[0_0_12px_rgba(255,0,0,0.8)]" />
                </div>
                <div>
                  <a target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-cream hover:underline" href="https://www.linkedin.com/company/the-kgts/">LinkedIn</a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#8B0000]/30 flex items-center justify-center text-[#8B0000] mr-4">
                  <MapPin size={18} className="filter drop-shadow-[0_0_12px_rgba(255,0,0,0.8)]" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-cream">Location</h4>
                  <p className="text-cream/70">
                    IIT Kharagpur, West Bengal
                    <br />
                    India - 721302
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* The title is moved outside the padded box to align perfectly with "Get in Touch" */}
            <h3 className="text-2xl font-serif font-bold text-cream mb-6">Quick Message</h3>
            <div className="bg-black/70 border border-[#8B0000]/30 rounded-lg p-6 backdrop-blur-sm">
              
              {isMounted && (
                <form onSubmit={handleSubmit} className="space-y-4" suppressHydrationWarning>
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
                      suppressHydrationWarning
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
                      suppressHydrationWarning
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
                      suppressHydrationWarning
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
                      suppressHydrationWarning
                    />
                  </div>
                  {feedback && (
                    <p className={`text-center ${feedback.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                      {feedback.message}
                    </p>
                  )}

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full sm:w-auto px-6 py-2 bg-[#8B0000] text-cream rounded-md font-medium hover:bg-[#A52A2A] transition-colors shadow-[0_0_15px_rgba(139,0,0,0.5)] hover:shadow-[0_0_20px_rgba(139,0,0,0.7)] disabled:opacity-50 disabled:cursor-not-allowed"
                      suppressHydrationWarning
                    >
                      {loading ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}