import Navbar from "@/components/navbar"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "The Nash Equilibrium Explained",
    excerpt: "A deep dive into one of game theory's most important concepts and its real-world applications.",
    author: "Dr. Alex Chen",
    date: "September 28, 2023",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: "Game Theory in Everyday Life",
    excerpt: "How the principles of game theory can be observed in our daily interactions and decision-making.",
    author: "Maya Patel",
    date: "October 5, 2023",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: "The Prisoner's Dilemma: A Modern Take",
    excerpt: "Exploring contemporary applications of this classic game theory problem in politics and business.",
    author: "James Wilson",
    date: "October 12, 2023",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    title: "Evolutionary Game Theory: Darwin Meets Nash",
    excerpt: "How game theory helps explain evolutionary strategies and biological behaviors in nature.",
    author: "Dr. Sarah Johnson",
    date: "October 20, 2023",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 5,
    title: "Game Theory in International Relations",
    excerpt: "Understanding global politics and diplomacy through the lens of strategic interactions.",
    author: "Prof. Michael Brown",
    date: "November 2, 2023",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 6,
    title: "Behavioral Game Theory: When Humans Don't Play Rationally",
    excerpt: "Exploring how cognitive biases and emotions affect strategic decision-making.",
    author: "Dr. Lisa Zhang",
    date: "November 15, 2023",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 7,
    title: "The Mathematics Behind Poker Strategy",
    excerpt: "A mathematical analysis of optimal poker strategies using game theory principles.",
    author: "Alex Martinez",
    date: "November 28, 2023",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 8,
    title: "Cooperative vs. Non-Cooperative Games",
    excerpt:
      "Understanding the fundamental differences between games where players can form binding agreements and those where they cannot.",
    author: "Dr. Robert Kim",
    date: "December 10, 2023",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-black text-cream">
      <div className="fixed inset-0 bg-[url('/playing-cards-red-glow.png')] opacity-5 mix-blend-multiply pointer-events-none z-0"></div>
      <Navbar />

      <main className="pt-24 pb-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-cream mb-4">
              Our <span className="text-red-500 filter drop-shadow-[0_0_8px_rgba(255,0,0,0.6)]">Blog</span>
            </h1>
            <div className="w-20 h-1 bg-red-600 mx-auto"></div>
            <p className="text-cream/80 mt-6 max-w-2xl mx-auto">
              Explore our collection of articles on game theory concepts, applications, and the latest research.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="bg-black/70 border border-red-600/30 rounded-lg overflow-hidden hover:shadow-[0_0_15px_rgba(255,0,0,0.3)] transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-cream group-hover:text-red-500 transition-colors">
                    {post.title}
                  </h3>

                  <div className="flex items-center mt-3 text-sm text-cream/60">
                    <span>{post.author}</span>
                    <span className="mx-2">•</span>
                    <span>{post.date}</span>
                  </div>

                  <p className="mt-4 text-cream/80">{post.excerpt}</p>

                  <Link
                    href={`/blog/${post.id}`}
                    className="mt-6 flex items-center text-red-500 hover:text-red-400 transition-colors group/btn"
                  >
                    <span>Read More</span>
                    <ArrowRight className="ml-2 transition-transform group-hover/btn:translate-x-1" size={16} />
                  </Link>
                </div>
              </div>
            ))}
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
