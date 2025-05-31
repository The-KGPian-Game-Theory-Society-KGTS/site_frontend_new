import { MapPin, Instagram, Facebook, Linkedin } from "lucide-react"
import ContactForm from "@/components/contact-form"

export default function ContactPage() {
  return (
    <div className="min-h-screen text-cream">
      <div className="fixed inset-0 bg-[url('/playing-cards-red-glow.png')] opacity-5 mix-blend-multiply pointer-events-none z-0"></div>
      <main className="pt-24 pb-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-cream mb-4">
              Contact <span className="text-red-500 filter drop-shadow-[0_0_8px_rgba(255,0,0,0.6)]">Us</span>
            </h1>
            <div className="w-20 h-1 bg-red-600 mx-auto"></div>
            <p className="text-cream/80 mt-6 max-w-2xl mx-auto">
              Have questions about game theory? Get in touch with us and we'll be
              happy to help.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-black/70 border border-red-600/30 rounded-lg p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-red-900/30 flex items-center justify-center text-red-500 mx-auto mb-4">
                <Instagram size={24} />
              </div>
              <h3 className="text-xl font-serif font-bold text-cream mb-2">Instagram</h3>
              <p className="text-cream/80 mb-4">Follow us for updates and announcements</p>
              <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/kgts.iitkgp?igsh=M2ZxZTNzM2V6cDFv" className="text-red-500 hover:text-red-400 transition-colors">
                @kgts.iitkgp
              </a>
            </div>

            <div className="bg-black/70 border border-red-600/30 rounded-lg p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-red-900/30 flex items-center justify-center text-red-500 mx-auto mb-4">
                <Facebook size={24} />
              </div>
              <h3 className="text-xl font-serif font-bold text-cream mb-2">Facebook</h3>
              <p className="text-cream/80 mb-4">Connect with us on Facebook</p>
              <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/The.KGTS?mibextid=rS40aB7S9Ucbxw6v" className="text-red-500 hover:text-red-400 transition-colors">
                @TheKGPianGameTheorySociety
              </a>
            </div>

            <div className="bg-black/70 border border-red-600/30 rounded-lg p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-red-900/30 flex items-center justify-center text-red-500 mx-auto mb-4">
                <Linkedin size={24} />
              </div>
              <h3 className="text-xl font-serif font-bold text-cream mb-2">LinkedIn</h3>
              <p className="text-cream/80 mb-4">Connect with us professionally</p>
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/the-kgts/" className="text-red-500 hover:text-red-400 transition-colors">
                @TheKGPianGameTheorySociety
              </a>
            </div>

            <div className="bg-black/70 border border-red-600/30 rounded-lg p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-red-900/30 flex items-center justify-center text-red-500 mx-auto mb-4">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-serif font-bold text-cream mb-2">Location</h3>
              <p className="text-cream/80 mb-4">Visit us at our campus location</p>
              <address className="text-red-500 not-italic">
                IIT Kharagpur, West Bengal
                <br />
                India - 721302
              </address>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <ContactForm />

            <div className="bg-black/70 border border-red-600/30 rounded-lg p-6">
              <h3 className="text-2xl font-serif font-bold text-cream mb-6 text-center">Find Us</h3>
              <div className="h-[calc(100%-4rem)] w-full bg-gray-800 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7372.375!2d87.3095!3d22.3149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1d440a1dce1c0f%3A0x1f9b3f4c3c3c3c3c!2sIndian%20Institute%20of%20Technology%20Kharagpur!5e0!3m2!1sen!2sin!4v1647881234567!5m2!1sen!2sin&markers=icon:https://maps.google.com/mapfiles/ms/icons/red-dot.png%7Clabel:IIT%20Kharagpur%7C22.3149,87.3095&zoom=12"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
