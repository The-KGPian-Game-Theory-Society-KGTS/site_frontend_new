import Navbar from "@/components/navbar"
import { Calendar, Clock, MapPin } from "lucide-react"
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
  {
    id: 5,
    title: "Nash Equilibrium Masterclass",
    date: "December 15, 2023",
    time: "2:00 PM - 5:00 PM",
    location: "Mathematics Building",
    description:
      "An in-depth exploration of Nash Equilibrium concepts and their applications in various strategic scenarios.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 6,
    title: "Game Theory in AI: Panel Discussion",
    date: "January 10, 2024",
    time: "6:00 PM - 8:00 PM",
    location: "Computer Science Auditorium",
    description:
      "Leading researchers discuss how game theory principles are shaping modern artificial intelligence systems.",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-black text-cream">
      <div className="fixed inset-0 bg-[url('/playing-cards-red-glow.png')] opacity-5 mix-blend-multiply pointer-events-none z-0"></div>
      <Navbar />

      <main className="pt-24 pb-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-cream mb-4">
              Upcoming <span className="text-red-500 filter drop-shadow-[0_0_8px_rgba(255,0,0,0.6)]">Events</span>
            </h1>
            <div className="w-20 h-1 bg-red-600 mx-auto"></div>
            <p className="text-cream/80 mt-6 max-w-2xl mx-auto">
              Join us for exciting events that explore the fascinating world of game theory through competitions,
              lectures, and hands-on workshops.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-black/70 border border-red-600/30 rounded-lg overflow-hidden hover:border-red-500/50 transition-all duration-300 group"
              >
                <div className="h-48 overflow-hidden relative">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${event.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-cream group-hover:text-red-500 transition-colors">
                    {event.title}
                  </h3>

                  <div className="mt-4 space-y-2">
                    <div className="flex items-center text-cream/70">
                      <Calendar size={16} className="mr-2 text-red-500" />
                      <span>{event.date}</span>
                    </div>

                    <div className="flex items-center text-cream/70">
                      <Clock size={16} className="mr-2 text-red-500" />
                      <span>{event.time}</span>
                    </div>

                    <div className="flex items-center text-cream/70">
                      <MapPin size={16} className="mr-2 text-red-500" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <p className="mt-4 text-cream/80">{event.description}</p>

                  <button className="mt-6 px-4 py-2 bg-red-600/50 text-cream rounded hover:bg-red-600 transition-colors shadow-[0_0_10px_rgba(255,0,0,0.2)] hover:shadow-[0_0_15px_rgba(255,0,0,0.4)]">
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-red-900/20 via-red-800/30 to-red-900/20 rounded-lg p-8 text-center border border-red-600/20">
            <h3 className="text-2xl font-serif font-bold text-cream mb-4">Want to propose an event?</h3>
            <p className="text-cream/80 max-w-2xl mx-auto mb-6">
              Have an idea for a game theory event or workshop? We're always looking for innovative concepts and
              collaborations. Reach out to us with your proposal!
            </p>
            <Link
              href="/contact"
              className="px-8 py-3 bg-red-600 text-cream rounded-md text-lg font-medium hover:bg-red-700 transition-colors shadow-[0_0_15px_rgba(255,0,0,0.5)] hover:shadow-[0_0_20px_rgba(255,0,0,0.7)]"
            >
              Contact Us
            </Link>
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
