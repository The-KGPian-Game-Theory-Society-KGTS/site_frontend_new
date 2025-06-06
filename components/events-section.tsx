// components/events-section.tsx
"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Calendar, MapPin, Clock, ArrowRight, ExternalLink } from "lucide-react"
import { useCachedFetch } from "@/hooks/useCachedFetch"
import { cn } from "@/lib/utils"

type Event = {
  id: string;
  image: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  status: string;
  link?: string;
};

export default function EventsSection() {
  const { data, error, isLoading } = useCachedFetch<{data: {events: Event[]}}>(
    'homepage-events',
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/events?page=1&limit=3`
  )

  let events = data?.data?.events || []

  // Sort events by date if we have data
  if (events.length > 0) {
    const normalizedEvents = events.map((event: Event) => ({
      ...event,
      status: event.status.toLowerCase() === "upcoming" ? "upcoming" :
              event.status.toLowerCase() === "ongoing" ? "ongoing" : "completed",
    }));
    
    events = normalizedEvents.sort((a: Event, b: Event) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB.getTime() - dateA.getTime();
    });
  }

  const renderEventButton = (event: Event) => {
    if (event.status === "completed") {
      if (event.link) {
        const url = event.link.startsWith('http://') || event.link.startsWith('https://')
          ? event.link
          : `https://${event.link}`;

        return (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-4 py-2 bg-red-600/50 text-cream rounded hover:bg-red-600 transition-colors shadow-[0_0_10px_rgba(255,0,0,0.2)] hover:shadow-[0_0_15px_rgba(255,0,0,0.4)]"
          >
            View
            <ExternalLink className="ml-2" size={16} />
          </a>
        );
      }
      return null;
    } else if (event.status === "ongoing") {
      return (
        <button className="px-4 py-2 bg-red-600/50 text-cream rounded hover:bg-red-600 transition-colors shadow-[0_0_10px_rgba(255,0,0,0.2)] hover:shadow-[0_0_15px_rgba(255,0,0,0.4)]">
          Register Now
        </button>
      );
    } else if (event.status === "upcoming") {
      return (
        <div className="text-cream/60 text-sm font-medium">
          Coming Soon
        </div>
      );
    }
    return null;
  };

  if (error || (!isLoading && events.length === 0)) {
    return (
      <section className="py-16 relative">
        <div className="fixed inset-0 bg-[url('/playing-cards-red-glow.png')] opacity-5 mix-blend-multiply pointer-events-none z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-cream mb-4">
              Latest <span className="text-red-500 filter drop-shadow-[0_0_8px_rgba(255,0,0,0.6)]">Events</span>
            </h2>
            <div className="w-20 h-1 bg-red-600 mx-auto"></div>
            <p className="text-cream/80 mt-6 max-w-2xl mx-auto">
              Join us for our ongoing events and be part of the game theory community.
            </p>
          </div>
          <div className="text-center text-cream">No Events to Show at this moment</div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-cream mb-4">
            Latest <span className="text-red-500 filter drop-shadow-[0_0_8px_rgba(255,0,0,0.6)]">Events</span>
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto"></div>
          <p className="text-cream/80 mt-6 max-w-2xl mx-auto">
            Join us for our ongoing events and be part of the game theory community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event:Event, index:number) => (
            <div 
              key={`${event.id}-${index}`} 
              className="bg-black/70 border border-red-600/30 rounded-lg overflow-hidden hover:border-red-500/50 transition-all duration-300 group h-full flex flex-col"
            >
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
                        "group-hover:max-h-[500px]",
                        "max-h-[4.5rem]"
                      )}
                    >
                      {event.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  {renderEventButton(event)}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/events"
            className="inline-flex items-center px-6 py-3 bg-red-600/50 text-cream rounded hover:bg-red-600 transition-colors shadow-[0_0_10px_rgba(255,0,0,0.2)] hover:shadow-[0_0_15px_rgba(255,0,0,0.4)]"
          >
            View All Events
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}
