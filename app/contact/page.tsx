import Navbar from "@/components/navbar"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-cream">
      <div className="fixed inset-0 bg-[url('/playing-cards-red-glow.png')] opacity-5 mix-blend-multiply pointer-events-none z-0"></div>
      <Navbar />

      <main className="pt-24 pb-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-cream mb-4">
              Contact <span className="text-red-500 filter drop-shadow-[0_0_8px_rgba(255,0,0,0.6)]">Us</span>
            </h1>
            <div className="w-20 h-1 bg-red-600 mx-auto"></div>
            <p className="text-cream/80 mt-6 max-w-2xl mx-auto">
              Have questions about game theory or interested in joining our society? Get in touch with us and we'll be
              happy to help.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-black/70 border border-red-600/30 rounded-lg p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-red-900/30 flex items-center justify-center text-red-500 mx-auto mb-4">
                <Mail size={24} />
              </div>
              <h3 className="text-xl font-serif font-bold text-cream mb-2">Email</h3>
              <p className="text-cream/80 mb-4">For general inquiries and information</p>
              <a href="mailto:contact@kgpgametheory.org" className="text-red-500 hover:text-red-400 transition-colors">
                contact@kgpgametheory.org
              </a>
            </div>

            <div className="bg-black/70 border border-red-600/30 rounded-lg p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-red-900/30 flex items-center justify-center text-red-500 mx-auto mb-4">
                <Phone size={24} />
              </div>
              <h3 className="text-xl font-serif font-bold text-cream mb-2">Phone</h3>
              <p className="text-cream/80 mb-4">Available Monday to Friday, 10am - 6pm</p>
              <a href="tel:+911234567890" className="text-red-500 hover:text-red-400 transition-colors">
                +91 123 456 7890
              </a>
            </div>

            <div className="bg-black/70 border border-red-600/30 rounded-lg p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-red-900/30 flex items-center justify-center text-red-500 mx-auto mb-4">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-serif font-bold text-cream mb-2">Location</h3>
              <p className="text-cream/80 mb-4">Visit us at our campus location</p>
              <address className="text-red-500 not-italic">
                Department of Mathematics
                <br />
                IIT Kharagpur, West Bengal
                <br />
                India - 721302
              </address>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-black/70 border border-red-600/30 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-2xl font-serif font-bold text-cream mb-6">Send a Message</h3>

              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-cream/80 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 bg-black/50 border border-red-600/30 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-cream"
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
                    required
                    className="w-full px-4 py-2 bg-black/50 border border-red-600/30 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-cream"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-cream/80 mb-1">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-2 bg-black/50 border border-red-600/30 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-cream"
                  >
                    <option value="">Select a subject</option>
                    <option value="membership">Membership Inquiry</option>
                    <option value="event">Event Information</option>
                    <option value="collaboration">Collaboration Proposal</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-cream/80 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-2 bg-black/50 border border-red-600/30 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-cream resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-red-600 text-cream rounded-md font-medium hover:bg-red-700 transition-colors shadow-[0_0_15px_rgba(255,0,0,0.5)] hover:shadow-[0_0_20px_rgba(255,0,0,0.7)]"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div>
              <h3 className="text-2xl font-serif font-bold text-cream mb-6">Connect With Us</h3>

              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="text-lg font-medium text-cream mb-2">Office Hours</h4>
                  <p className="text-cream/80">
                    Monday to Friday: 10:00 AM - 6:00 PM
                    <br />
                    Saturday: 10:00 AM - 2:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-cream mb-2">For Membership</h4>
                  <p className="text-cream/80">
                    If you're interested in joining our society, please email us at{" "}
                    <a
                      href="mailto:membership@kgpgametheory.org"
                      className="text-red-500 hover:text-red-400 transition-colors"
                    >
                      membership@kgpgametheory.org
                    </a>{" "}
                    or fill out the contact form.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-cream mb-2">For Collaborations</h4>
                  <p className="text-cream/80">
                    We're always open to collaborations with other academic clubs, institutions, and organizations.
                    Please contact{" "}
                    <a
                      href="mailto:collaborations@kgpgametheory.org"
                      className="text-red-500 hover:text-red-400 transition-colors"
                    >
                      collaborations@kgpgametheory.org
                    </a>
                    .
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-medium text-cream mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="h-10 w-10 rounded-full bg-red-900/30 flex items-center justify-center text-cream hover:bg-red-600 hover:text-white transition-colors shadow-[0_0_10px_rgba(255,0,0,0.2)] hover:shadow-[0_0_15px_rgba(255,0,0,0.4)]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="h-10 w-10 rounded-full bg-red-900/30 flex items-center justify-center text-cream hover:bg-red-600 hover:text-white transition-colors shadow-[0_0_10px_rgba(255,0,0,0.2)] hover:shadow-[0_0_15px_rgba(255,0,0,0.4)]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="h-10 w-10 rounded-full bg-red-900/30 flex items-center justify-center text-cream hover:bg-red-600 hover:text-white transition-colors shadow-[0_0_10px_rgba(255,0,0,0.2)] hover:shadow-[0_0_15px_rgba(255,0,0,0.4)]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="h-10 w-10 rounded-full bg-red-900/30 flex items-center justify-center text-cream hover:bg-red-600 hover:text-white transition-colors shadow-[0_0_10px_rgba(255,0,0,0.2)] hover:shadow-[0_0_15px_rgba(255,0,0,0.4)]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black/70 border border-red-600/30 rounded-lg p-6">
            <h3 className="text-2xl font-serif font-bold text-cream mb-6 text-center">Find Us</h3>
            <div className="aspect-video w-full bg-gray-800 rounded-lg overflow-hidden">
              {/* Replace with actual map embed */}
              <div className="w-full h-full flex items-center justify-center text-cream/50">
                Interactive Map Placeholder
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-red-600/30 py-6 text-center text-sm text-cream/60 relative z-10">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} The KGPian Game Theory Society. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
