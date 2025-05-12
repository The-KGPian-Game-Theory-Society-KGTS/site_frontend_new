import Navbar from "@/components/navbar"
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react"
import { upcomingEvents, ongoingEvents, pastEvents, Event } from "@/data/events"
import Link from "next/link"
import { cn } from "@/lib/utils"

export default function EventsPage() {
  const UpcomingEventCard = ({ event }: { event: Event }) => (
    <div className="bg-black/70 border border-red-600/30 rounded-lg overflow-hidden hover:border-red-500/50 transition-all duration-300 group h-full flex flex-col">
      <div className="h-48 overflow-hidden relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${event.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <span className="text-2xl font-serif font-bold text-cream">Coming Soon!</span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-serif font-bold text-cream group-hover:text-red-500 transition-colors line-clamp-2">
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

        <div className="mt-4 relative flex-grow">
          <div className="overflow-hidden">
            <p
              className={cn(
                "text-cream/80 transition-[max-height] duration-500 ease-in-out",
                "group-hover:max-h-[500px]", // reveal all content
                "max-h-[4.5rem]" // height to show 3 lines
              )}
            >
              {event.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  )

  const OngoingEventCard = ({ event }: { event: Event }) => (
    <div className="bg-black/70 border border-red-600/30 rounded-lg overflow-hidden hover:border-red-500/50 transition-all duration-300 group h-full flex flex-col">
      <div className="h-48 overflow-hidden relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${event.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-serif font-bold text-cream group-hover:text-red-500 transition-colors line-clamp-2">
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

        <div className="mt-4 relative flex-grow">
          <div className="overflow-hidden">
            <p
              className={cn(
                "text-cream/80 transition-[max-height] duration-500 ease-in-out",
                "group-hover:max-h-[500px]", // reveal all content
                "max-h-[4.5rem]" // height to show 3 lines
              )}
            >
              {event.description}
            </p>
          </div>
        </div>

        <button className="mt-6 px-4 py-2 bg-red-600/50 text-cream rounded hover:bg-red-600 transition-colors shadow-[0_0_10px_rgba(255,0,0,0.2)] hover:shadow-[0_0_15px_rgba(255,0,0,0.4)]">
          Register Now
        </button>
      </div>
    </div>
  )

  const PastEventCard = ({ event }: { event: Event }) => (
    <div className="bg-black/70 border border-red-600/30 rounded-lg overflow-hidden hover:border-red-500/50 transition-all duration-300 group h-full flex flex-col">
      <div className="h-48 overflow-hidden relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${event.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-serif font-bold text-cream group-hover:text-red-500 transition-colors line-clamp-2">
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

        <div className="mt-4 relative flex-grow">
          <div className="overflow-hidden">
            <p
              className={cn(
                "text-cream/80 transition-[max-height] duration-500 ease-in-out",
                "group-hover:max-h-[500px]", // reveal all content
                "max-h-[4.5rem]" // height to show 3 lines
              )}
            >
              {event.description}
            </p>
          </div>
        </div>

        <Link
          href={event.link || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center px-4 py-2 bg-red-600/50 text-cream rounded hover:bg-red-600 transition-colors shadow-[0_0_10px_rgba(255,0,0,0.2)] hover:shadow-[0_0_15px_rgba(255,0,0,0.4)]"
        >
          View Event
          <ArrowRight className="ml-2" size={16} />
        </Link>
      </div>
    </div>
  )

  const EventSection = ({ title, events, CardComponent }: { 
    title: string; 
    events: Event[];
    CardComponent: React.ComponentType<{ event: Event }>;
  }) => {
    if (events.length === 0) return null;
    
    return (
      <div className="mb-16">
        <h2 className="text-3xl font-serif font-bold text-cream mb-8 text-center">
          {title}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <CardComponent key={event.id} event={event} />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen text-cream">
      <div className="fixed inset-0 bg-[url('/playing-cards-red-glow.png')] opacity-5 mix-blend-multiply pointer-events-none z-0"></div>
      <Navbar />

      <main className="pt-24 pb-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-cream mb-4">
              Our <span className="text-red-500 filter drop-shadow-[0_0_8px_rgba(255,0,0,0.6)]">Events</span>
            </h1>
            <div className="w-20 h-1 bg-red-600 mx-auto"></div>
            <p className="text-cream/80 mt-6 max-w-2xl mx-auto">
              Join us for exciting events that explore the fascinating world of game theory through competitions,
              lectures, and hands-on workshops.
            </p>
          </div>

          <EventSection title="Upcoming Events" events={upcomingEvents} CardComponent={UpcomingEventCard} />
          <EventSection title="Ongoing Events" events={ongoingEvents} CardComponent={OngoingEventCard} />
          <EventSection title="Past Events" events={pastEvents} CardComponent={PastEventCard} />
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
