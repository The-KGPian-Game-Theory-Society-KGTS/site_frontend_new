"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react"
import Link from "next/link"

const events = [
  {
    id: 1,
    title: "Prisoner's Dilemma Tournament",
    date: "October 15, 2023",
    time: "3:00 PM - 6:00 PM",
    location: "Central Auditorium",
    description: "Compete in a tournament based on the classic game theory problem. Prizes for top strategists!",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: "Guest Lecture: Evolutionary Game Theory",
    date: "November 5, 2023",
    time: "5:00 PM - 7:00 PM",
    location: "Lecture Hall 3",
    description: "Prof. Sarah Johnson discusses how game theory applies to evolutionary biology and social dynamics.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: "Poker Night: Probability & Strategy",
    date: "November 20, 2023",
    time: "7:00 PM - 10:00 PM",
    location: "Student Center",
    description: "Learn the mathematics behind poker while enjoying a friendly tournament. No real money involved!",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    title: "Workshop: Game Theory in Economics",
    date: "December 8, 2023",
    time: "4:00 PM - 6:30 PM",
    location: "Economics Department",
    description:
      "Hands-on workshop exploring applications of game theory in market dynamics and economic decision-making.",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function EventsSection() {
  return (
    <section id="events" className="py-20 bg-gradient-to-b from-black to-[#8B0000]/30 relative">
      <div className="absolute inset-0 bg-[url('/playing-cards-red-glow.png')] opacity-10 mix-blend-multiply" />

      <div className="container mx-auto px-4">
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
            Join us for exciting events that explore the fascinating world of game theory through competitions,
            lectures, and hands-on workshops.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {events.slice(0, 2).map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black/70 border border-[#8B0000]/30 rounded-lg overflow-hidden hover:border-[#8B0000]/50 transition-all duration-300 ease-in-out group"
            >
              <div className="h-48 overflow-hidden relative">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${event.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-cream group-hover:text-[#8B0000] transition-colors">
                  {event.title}
                </h3>

                <div className="mt-4 space-y-2">
                  <div className="flex items-center text-cream/70">
                    <Calendar size={16} className="mr-2 text-[#8B0000]" />
                    <span>{event.date}</span>
                  </div>

                  <div className="flex items-center text-cream/70">
                    <Clock size={16} className="mr-2 text-[#8B0000]" />
                    <span>{event.time}</span>
                  </div>

                  <div className="flex items-center text-cream/70">
                    <MapPin size={16} className="mr-2 text-[#8B0000]" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <p className="mt-4 text-cream/80">{event.description}</p>

                <button className="mt-6 px-4 py-2 bg-[#8B0000]/50 text-cream rounded hover:bg-[#8B0000] transition-all duration-300 ease-in-out shadow-[0_0_10px_rgba(139,0,0,0.2)] hover:shadow-[0_0_15px_rgba(139,0,0,0.4)] cursor-pointer hover:scale-105 transform">
                  Register Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/events"
            className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-[#8B0000]/50 text-cream rounded-md hover:border-[#8B0000] transition-all duration-300 ease-in-out shadow-[0_0_10px_rgba(139,0,0,0.2)] hover:shadow-[0_0_15px_rgba(139,0,0,0.4)] cursor-pointer hover:bg-[#8B0000]/10 hover:scale-105 transform group"
          >
            <span>View All Events</span>
            <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
