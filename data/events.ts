export interface Event {
  id: number
  title: string
  date: string
  time: string
  location: string
  description: string
  image: string
  status: 'upcoming' | 'ongoing' | 'completed'
  link?: string // Optional link field for past events
}

export const upcomingEvents: Event[] = [
  
]

export const ongoingEvents: Event[] = [
  
]

export const pastEvents: Event[] = [
  {
    id: 1,
    title: "Stratathon, Optima 2025",
    date: "Mar 2, 2025 (R1)\nMar 8 & 9, 2025 (R2)",
    time: "2:00 PM - 6:00 PM",
    location: "NR-311, Nalanda",
    description: "Compete in strategic rounds of game theory battles. Outsmart opponents and emerge as the ultimate winner!",
    image: "/events/stratathon.jpg",
    status: "completed",
    link: "https://example.com/prisoners-dilemma-tournament"
  },
  {
    id: 2,
    title: "Introductory Seminar",
    date: "Oct 1, 2024",
    time: "8:00 PM",
    location: "Bhatnagar Auditorium",
    description: "Discover the world of strategic thinking at the KGTS Intro Seminar. Learn the basics of game theory and how it shapes real-world decisions!",
    image: "/events/IntroSeminar.jpg",
    status: "completed",
    link: "https://photos.app.goo.gl/JqSVD2qDgzQNgUZk8"
  },
  {
    id: 3,
    title: "Treasure Hunt",
    date: "Aug 25, 2024",
    time: "2:00 PM - 6:00 PM",
    location: "NR-111, Nalanda",
    description: "Solve game theory riddles to uncover clues and race to the final destination. Prizes for the sharpest minds!",
    image: "/events/TreasureHunt.jpg",
    status: "completed",
    link: "https://photos.app.goo.gl/hXawJSML7bdAFKJ8A"
  }
]

// For backward compatibility and when all events are needed
export const events: Event[] = [...upcomingEvents, ...ongoingEvents, ...pastEvents] 