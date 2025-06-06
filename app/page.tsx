import Hero from "@/components/hero"
import AboutSection from "@/components/about-section"
import EventsSection from "@/components/events-section"
import BlogSection from "@/components/blog-section"
import ContactSection from "@/components/contact-section"
import FloatingIcons from "@/components/floating-icons"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-cream overflow-hidden relative">
      <FloatingIcons />
      <main className="relative z-10">
        <Hero />
        <AboutSection />
        <BlogSection />
        <EventsSection />
        <ContactSection />
      </main>
    </div>
  )
}
