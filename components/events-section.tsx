"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react"

const events = [
  {
    id: 1,
    title: "Game Theory Workshop",
    date: "March 15, 2024",
    time: "10:00 AM - 4:00 PM",
    location: "Main Auditorium",
    description: "Learn the fundamentals of game theory through interactive sessions and practical examples.",
    image: "/events/workshop.jpg",
  },
  {
    id: 2,
    title: "Poker Tournament",
    date: "March 20, 2024",
    time: "2:00 PM - 8:00 PM",
    location: "Student Activity Center",
    description: "Put your strategic thinking to the test in our annual poker tournament. Prizes to be won!",
    image: "/events/poker.jpg",
  },
  {
    id: 3,
    title: "Guest Lecture: Strategic Decision Making",
    date: "March 25, 2024",
    time: "3:00 PM - 5:00 PM",
    location: "Lecture Hall 1",
    description: "Join us for an insightful lecture on strategic decision making in business and economics.",
    image: "/events/lecture.jpg",
  },
]

export default function EventsSection() {
  return (
    <section id="events" className="py-20 bg-black relative">
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
            Upcoming <span className="text-[#8B0000] filter drop-shadow-[0_0_8px_rgba(139,0,0,0.6)]">Events</span>
          </h2>
          <div className="w-20 h-1 bg-[#8B0000] mx-auto"></div>
          <p className="text-cream/80 mt-6 max-w-2xl mx-auto">
            Join us for exciting events, workshops, and tournaments. Learn, compete, and connect with fellow game theory
            enthusiasts.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: event.id * 0.1 }}
            >
              <div className="bg-black/70 border border-[#8B0000]/30 rounded-lg overflow-hidden backdrop-blur-sm">
                <div className="relative h-48">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-cream mb-4">{event.title}</h3>
                  <div className="space-y-2 text-cream/80">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2 text-[#8B0000]" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock size={16} className="mr-2 text-[#8B0000]" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2 text-[#8B0000]" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p className="mt-4 text-cream/80">{event.description}</p>

                  <button className="mt-6 px-4 py-2 bg-[#8B0000]/50 text-cream rounded hover:bg-[#8B0000] transition-all duration-300 ease-in-out shadow-[0_0_10px_rgba(139,0,0,0.2)] hover:shadow-[0_0_15px_rgba(139,0,0,0.4)] cursor-pointer hover:scale-105 transform">
                    Register Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            href="/events"
            className="inline-flex items-center px-6 py-3 bg-[#8B0000] text-cream rounded-md font-medium hover:bg-[#A52A2A] transition-colors shadow-[0_0_15px_rgba(139,0,0,0.5)] hover:shadow-[0_0_20px_rgba(139,0,0,0.7)]"
          >
            View All Events
            <ArrowRight className="ml-2" size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
