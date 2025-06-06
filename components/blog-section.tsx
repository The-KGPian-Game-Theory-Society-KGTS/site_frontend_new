// components/blog-section.tsx
"use client"

import { motion } from "framer-motion"
import { useCachedFetch } from "@/hooks/useCachedFetch"
import BlogCard from "./blog-card"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

type Blog = {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  content: string;
  author: string;
  externalLink: string;
};

export default function BlogSection() {
  const { data, error, isLoading } = useCachedFetch<{data: {blogs: Blog[]}}>(
    'homepage-blogs',
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blogs?page=1&limit=3`
  )

  const blogs = data?.data?.blogs || []

  if (error || (!isLoading && blogs.length === 0)) {
    return (
      <section id="blogs" className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
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
          <div className="text-center text-cream">No Blogs to Show at this moment</div>
        </div>
      </section>
    );
  }

  return (
    <section id="blogs" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-cream mb-4">
            Latest <span className="text-red-500 filter drop-shadow-[0_0_8px_rgba(255,0,0,0.6)]">Articles</span>
          </h2>
          <div className="w-20 h-1 bg-[#8B0000] mx-auto"></div>
          <p className="text-cream/80 mt-6 max-w-2xl mx-auto">
            Explore our collection of articles on game theory concepts, applications, and the latest research.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((post:Blog, index:number) => (
            <motion.div
              key={`${post.id}-${index}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <BlogCard post={post} index={index} />
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
