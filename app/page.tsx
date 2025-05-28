import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import AboutSection from "@/components/about-section"
import EventsSection from "@/components/events-section"
import BlogSection from "@/components/blog-section"
import ContactSection from "@/components/contact-section"
import FloatingIcons from "@/components/floating-icons"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-cream overflow-hidden relative">
      <div className="fixed inset-0 bg-[url('/playing-cards-red-glow.png')] opacity-5 mix-blend-multiply pointer-events-none z-0"></div>
      <FloatingIcons />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <AboutSection />
        <EventsSection />
        <BlogSection />
        <ContactSection />
      </main>
      <footer className="border-t border-red-600/30 py-6 text-center text-sm text-cream/60 relative z-10">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} The KGPian Game Theory Society. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
