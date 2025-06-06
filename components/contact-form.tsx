"use client"

import { useState } from "react"
import validator from "validator"

export default function ContactForm() {
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error', message: string } | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const [emailError, setEmailError] = useState<string>("")

  // Enhanced email validation using validator.js
  const validateEmail = (email: string): string => {
    if (!email) {
      return "Email is required"
    }
    
    // Basic format validation
    if (!validator.isEmail(email)) {
      return "Please enter a valid email address"
    }
    
    // Length validation
    if (email.length > 254) {
      return "Email address is too long"
    }
    
    // Additional checks
    const [localPart, domain] = email.split('@')
    
    if (localPart.length > 64) {
      return "Email address format is invalid"
    }
    
    // Check for consecutive dots
    if (email.includes('..')) {
      return "Email cannot contain consecutive dots"
    }
    
    // Check for valid domain format
    if (!validator.isFQDN(domain)) {
      return "Invalid email domain"
    }
    
    return ""
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Validate email on change
    if (name === 'email') {
      const error = validateEmail(value)
      setEmailError(error)
    }
  }

  const handleEmailBlur = () => {
    const error = validateEmail(formData.email)
    setEmailError(error)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setFeedback(null)

    // Validate email before submission
    const emailValidationError = validateEmail(formData.email)
    if (emailValidationError) {
      setEmailError(emailValidationError)
      setFeedback({ type: 'error', message: 'Please fix the errors before submitting.' })
      setLoading(false)
      return
    }

    // Additional form validation
    if (!formData.name.trim()) {
      setFeedback({ type: 'error', message: 'Please fill in all required fields.' })
      setLoading(false)
      return
    }

    if (!formData.subject.trim()) {
      setFeedback({ type: 'error', message: 'Please fill in all required fields.' })
      setLoading(false)
      return
    }

    if (!formData.message.trim()) {
      setFeedback({ type: 'error', message: 'Please fill in all required fields.' })
      setLoading(false)
      return
    }

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
        setEmailError("") // Clear email error
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
        {/* Name field stays the same */}
        
        <div>
          <label htmlFor="email" className="block text-cream mb-2">
            Your Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleEmailBlur}
            required
            className={`w-full px-4 py-2 bg-black/50 border rounded-md focus:outline-none focus:ring-2 text-cream ${
              emailError 
                ? 'border-red-500 focus:ring-red-500/50' 
                : 'border-red-600/30 focus:ring-red-600/50'
            }`}
            placeholder="Enter your email (e.g., example@domain.com)"
          />
          {emailError && (
            <p className="text-red-400 text-sm mt-1 flex items-center">
              <span className="mr-1">⚠️</span>
              {emailError}
            </p>
          )}
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-cream mb-2">
            Subject *
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
            Message *
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
          <div className={`p-3 rounded-md ${
            feedback.type === 'success' 
              ? 'bg-green-900/50 border border-green-600/50' 
              : 'bg-red-900/50 border border-red-600/50'
          }`}>
            <p className={`text-center ${
              feedback.type === 'success' ? 'text-green-400' : 'text-red-400'
            }`}>
              {feedback.type === 'success' ? '✅' : '❌'} {feedback.message}
            </p>
          </div>
        )}
        
        <button
          type="submit"
          disabled={loading || !!emailError}
          className="w-full px-6 py-3 bg-red-600 text-cream rounded-md font-medium hover:bg-red-700 transition-colors shadow-[0_0_15px_rgba(255,0,0,0.5)] hover:shadow-[0_0_20px_rgba(255,0,0,0.7)] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  )
}
