import Navbar from "@/components/navbar"
import Image from "next/image"
import Link from "next/link"

const teamMembers = [
  {
    id: 1,
    name: "Dr. Rajiv Sharma",
    role: "Faculty Advisor",
    bio: "Professor of Mathematics with expertise in game theory and its applications in economics.",
    image: "/placeholder.svg?height=300&width=300",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "mailto:rajiv@example.com",
    },
  },
  {
    id: 2,
    name: "Ananya Patel",
    role: "President",
    bio: "Final year Mathematics student with research interests in evolutionary game theory.",
    image: "/placeholder.svg?height=300&width=300",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "mailto:ananya@example.com",
    },
  },
  {
    id: 3,
    name: "Vikram Singh",
    role: "Vice President",
    bio: "Economics major focusing on applications of game theory in market dynamics.",
    image: "/placeholder.svg?height=300&width=300",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "mailto:vikram@example.com",
    },
  },
  {
    id: 4,
    name: "Priya Gupta",
    role: "Events Coordinator",
    bio: "Computer Science student with a passion for algorithmic game theory.",
    image: "/placeholder.svg?height=300&width=300",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "mailto:priya@example.com",
    },
  },
  {
    id: 5,
    name: "Arjun Mehta",
    role: "Research Lead",
    bio: "PhD candidate researching applications of game theory in artificial intelligence.",
    image: "/placeholder.svg?height=300&width=300",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "mailto:arjun@example.com",
    },
  },
  {
    id: 6,
    name: "Neha Kapoor",
    role: "Communications Manager",
    bio: "Economics and Psychology double major interested in behavioral game theory.",
    image: "/placeholder.svg?height=300&width=300",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "mailto:neha@example.com",
    },
  },
  {
    id: 7,
    name: "Rahul Verma",
    role: "Technical Lead",
    bio: "Computer Engineering student specializing in game development and simulations.",
    image: "/placeholder.svg?height=300&width=300",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "mailto:rahul@example.com",
    },
  },
  {
    id: 8,
    name: "Sanya Malhotra",
    role: "Treasurer",
    bio: "Mathematics and Finance student with expertise in economic game theory models.",
    image: "/placeholder.svg?height=300&width=300",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "mailto:sanya@example.com",
    },
  },
]

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-black text-cream">
      <div className="fixed inset-0 bg-[url('/playing-cards-red-glow.png')] opacity-5 mix-blend-multiply pointer-events-none z-0"></div>
      <Navbar />

      <main className="pt-24 pb-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-cream mb-4">
              Our <span className="text-red-500 filter drop-shadow-[0_0_8px_rgba(255,0,0,0.6)]">Team</span>
            </h1>
            <div className="w-20 h-1 bg-red-600 mx-auto"></div>
            <p className="text-cream/80 mt-6 max-w-2xl mx-auto">
              Meet the passionate individuals behind The KGPian Game Theory Society who are dedicated to exploring and
              sharing the fascinating world of strategic decision-making.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-black/70 border border-red-600/30 rounded-lg overflow-hidden hover:border-red-500/50 transition-all duration-300 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center space-x-4">
                    <a href={member.social.linkedin} className="text-cream hover:text-red-500 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                    <a href={member.social.twitter} className="text-cream hover:text-red-500 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </svg>
                    </a>
                    <a href={member.social.email} className="text-cream hover:text-red-500 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-xl font-serif font-bold text-cream group-hover:text-red-500 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-red-500 text-sm mb-2">{member.role}</p>
                  <p className="text-cream/80 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-red-900/20 via-red-800/30 to-red-900/20 rounded-lg p-8 text-center border border-red-600/20">
            <h3 className="text-2xl font-serif font-bold text-cream mb-4">Join Our Team</h3>
            <p className="text-cream/80 max-w-2xl mx-auto mb-6">
              Interested in becoming a part of The KGPian Game Theory Society? We're always looking for passionate
              individuals to join our team and contribute to our mission.
            </p>
            <Link
              href="/contact"
              className="px-8 py-3 bg-red-600 text-cream rounded-md text-lg font-medium hover:bg-red-700 transition-colors shadow-[0_0_15px_rgba(255,0,0,0.5)] hover:shadow-[0_0_20px_rgba(255,0,0,0.7)]"
            >
              Get in Touch
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
