"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "The Nash Equilibrium Explained",
    excerpt: "A deep dive into one of game theory's most important concepts and its real-world applications.",
    author: "Dr. Alex Chen",
    date: "September 28, 2023",
    image: "/placeholder.svg?height=200&width=300",
    category: "Theory",
  },
  {
    id: 2,
    title: "Game Theory in Everyday Life",
    excerpt: "How the principles of game theory can be observed in our daily interactions and decision-making.",
    author: "Maya Patel",
    date: "October 5, 2023",
    image: "/placeholder.svg?height=200&width=300",
    category: "Applications",
  },
  {
    id: 3,
    title: "The Prisoner's Dilemma: A Modern Take",
    excerpt: "Exploring contemporary applications of this classic game theory problem in politics and business.",
    author: "James Wilson",
    date: "October 12, 2023",
    image: "/placeholder.svg?height=200&width=300",
    category: "Analysis",
  },
]

export default function BlogSection() {
  return (
    <section id="blogs" className="py-20 bg-black relative">
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
            Latest <span className="text-[#8B0000] filter drop-shadow-[0_0_8px_rgba(139,0,0,0.6)]">Blogs</span>
          </h2>
          <div className="w-20 h-1 bg-[#8B0000] mx-auto"></div>
          <p className="text-cream/80 mt-6 max-w-2xl mx-auto">
            Explore our collection of articles on game theory concepts, applications, and the latest research.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black/70 border border-[#8B0000]/30 rounded-lg overflow-hidden hover:shadow-[0_0_15px_rgba(139,0,0,0.3)] transition-all duration-300 ease-in-out group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-[#8B0000] text-cream text-xs px-2 py-1 rounded shadow-[0_0_10px_rgba(139,0,0,0.4)]">
                  {post.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-cream group-hover:text-[#8B0000] transition-colors">
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
                  className="mt-6 flex items-center text-[#8B0000] hover:text-[#A52A2A] transition-all duration-300 ease-in-out group/btn cursor-pointer hover:shadow-[0_0_10px_rgba(139,0,0,0.3)] transform"
                >
                  <span>Read More</span>
                  <ArrowRight className="ml-2 transition-transform duration-300 ease-in-out group-hover/btn:translate-x-1" size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-[#8B0000]/50 text-cream rounded-md hover:border-[#8B0000] transition-all duration-300 ease-in-out shadow-[0_0_10px_rgba(139,0,0,0.2)] hover:shadow-[0_0_15px_rgba(139,0,0,0.4)] cursor-pointer hover:bg-[#8B0000]/10 hover:scale-105 transform group"
          >
            <span>View All Articles</span>
            <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
