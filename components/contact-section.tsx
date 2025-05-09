"use client"

import type React from "react"
import { motion } from "framer-motion"
import { MapPin, Instagram, Facebook, Linkedin, ArrowRight } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically send the data to your backend
    alert("Thank you for your message! We'll get back to you soon.")
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  return (
    <section id="contact" className="py-20 bg-black relative">
      <div className="absolute inset-0 bg-[url('/playing-cards-red-glow.png')] opacity-10 mix-blend-multiply z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-cream mb-4">
            Contact <span className="text-[#8B0000] filter drop-shadow-[0_0_8px_rgba(139,0,0,0.6)]">Us</span>
          </h2>
          <div className="w-20 h-1 bg-[#8B0000] mx-auto"></div>
          <p className="text-cream/80 mt-6 max-w-2xl mx-auto">
            Have questions about game theory? Get in touch with us and we'll be
            happy to help.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-serif font-bold text-cream mb-6">Get in Touch</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#8B0000]/30 flex items-center justify-center text-[#8B0000] mr-4">
                  <Instagram size={18} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-cream">Instagram</h4>
                  <p className="text-cream/70">@kgpgametheory</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#8B0000]/30 flex items-center justify-center text-[#8B0000] mr-4">
                  <Facebook size={18} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-cream">Facebook</h4>
                  <p className="text-cream/70">@kgpgametheory</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#8B0000]/30 flex items-center justify-center text-[#8B0000] mr-4">
                  <Linkedin size={18} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-cream">LinkedIn</h4>
                  <p className="text-cream/70">@kgpgametheory</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#8B0000]/30 flex items-center justify-center text-[#8B0000] mr-4">
                  <MapPin size={18} />
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

            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center px-4 py-2 rounded-md text-[#8B0000] hover:text-[#A52A2A] hover:bg-[#8B0000]/10 transition-all cursor-pointer relative z-50 group"
              >
                <span>View detailed contact information</span>
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={18} />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-black/70 border border-[#8B0000]/30 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-2xl font-serif font-bold text-cream mb-6">Quick Message</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-cream/80 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-black/50 border border-[#8B0000]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B0000] focus:border-transparent text-cream"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-cream/80 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-black/50 border border-[#8B0000]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B0000] focus:border-transparent text-cream"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-cream/80 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full px-4 py-2 bg-black/50 border border-[#8B0000]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B0000] focus:border-transparent text-cream resize-none"
                  ></textarea>
                </div>

                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    className="px-6 py-2 bg-[#8B0000] text-cream rounded-md font-medium hover:bg-[#A52A2A] transition-colors shadow-[0_0_15px_rgba(139,0,0,0.5)] hover:shadow-[0_0_20px_rgba(139,0,0,0.7)]"
                  >
                    Send Message
                  </button>

                  <Link href="/contact" className="text-[#8B0000] hover:text-[#A52A2A] transition-colors text-sm">
                    Contact page →
                  </Link>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
