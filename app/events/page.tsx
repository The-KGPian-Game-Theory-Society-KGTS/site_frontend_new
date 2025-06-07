"use client";

import Navbar from "@/components/navbar"
import { Calendar, Clock, MapPin, ArrowRight, ExternalLink } from "lucide-react"
import { Event } from "@/data/events"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { useState, useMemo } from "react"
import useSWR from 'swr'
import { fetcher } from '@/lib/fetcher'

export default function EventsPage() {
  const [filter, setFilter] = useState("all");

  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/events`,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      refreshInterval: 100000, // Refresh every 3 minutes (events change more frequently)
      dedupingInterval: 60000, // Dedupe requests within 30 seconds
    }
  );

  // Process and sort events
  const events: Event[] = useMemo(() => {
    if (!data?.data?.events) return [];
    
    const normalizedEvents = data.data.events.map((event: Event) => ({
      ...event,
      status: event.status.toLowerCase() === "upcoming" ? "upcoming" :
        event.status.toLowerCase() === "ongoing" ? "ongoing" : "completed",
    }));

    // Sort events by date (newest to oldest)
    return normalizedEvents.sort((a: Event, b: Event) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB.getTime() - dateA.getTime();
    });
  }, [data]);

  const filteredEvents = useMemo(() => {
    return filter === "all"
      ? events
      : events.filter((event) => event.status === filter);
  }, [events, filter]);

  const renderEventButton = (event: Event) => {
    if (event.status === "completed") {
      // Past events: show View button only if external link exists
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
      return null; // No button for past events without link
    } else if (event.status === "ongoing") {
      // Ongoing events: show Register button
      return (
        <button className="px-4 py-2 bg-red-600/50 text-cream rounded hover:bg-red-600 transition-colors shadow-[0_0_10px_rgba(255,0,0,0.2)] hover:shadow-[0_0_15px_rgba(255,0,0,0.4)]">
          Register Now
        </button>
      );
    } else if (event.status === "upcoming") {
      // Upcoming events: show Coming Soon text
      return (
        <div className="text-cream/60 text-sm font-medium">
          Coming Soon
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen text-cream">
      <div className="fixed inset-0 bg-[url('/playing-cards-red-glow.png')] opacity-5 mix-blend-multiply pointer-events-none z-0"></div>

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

          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-4">
              {[
                { label: "All", value: "all" },
                { label: "Upcoming", value: "upcoming" },
                { label: "Ongoing", value: "ongoing" },
                { label: "Past", value: "completed" },
              ].map(({ label, value }) => (
                <button
                  key={value}
                  onClick={() => setFilter(value)}
                  className={cn(
                    "px-4 py-2 rounded text-cream transition-colors",
                    filter === value
                      ? "bg-red-600 shadow-[0_0_10px_rgba(255,0,0,0.4)]"
                      : "bg-black/50 hover:bg-red-600/50"
                  )}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {error && (
            <div className="text-center text-red-500 mb-4">
              Error: {error.message || 'Failed to fetch events'}
            </div>
          )}

          {isLoading && events.length === 0 && (
            <div className="text-center text-cream/80">
              Loading events...
            </div>
          )}

          {!isLoading && filteredEvents.length === 0 && !error && (
            <div className="text-center text-cream/80">
              {filter === "all" ? "No events available at the moment." : `No ${filter} events to show.`}
            </div>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event, index) => (
              <div 
                key={`event-${event.id || index}`} 
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
                          "group-hover:max-h-[500px]", // reveal all content
                          "max-h-[4.5rem]" // height to show 3 lines
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
        </div>
      </main>
    </div>
  );
}
