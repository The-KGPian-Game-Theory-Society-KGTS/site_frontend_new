"use client"

import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-cream mb-4">
            About <span className="text-red-500 filter drop-shadow-[0_0_8px_rgba(255,0,0,0.6)]">Us</span>
          </h2>
          <div className="w-20 h-1 bg-[#8B0000] mx-auto"></div>
        </motion.div>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-[75%]"
          >
            <div className="bg-black/70 border border-[#8B0000]/30 rounded-lg p-6 backdrop-blur-sm">
              <p className="text-cream/80 leading-relaxed mb-4 text-justify">
                KGTS is a community of strategy enthusiasts, uniting students who are eager to understand how decisions are made, influenced, and optimized. Rooted in the principles of game theory, we explore both competitive and cooperative scenarios—ranging from economic models and voting systems to real-world negotiations and everyday games. Whether analyzing complex systems or engaging in strategic games, we approach challenges with logic, creativity, and a keen curiosity about how rational choices shape outcomes.
              </p>

              <div className="mt-6 text-center">
                <Link
                  href="/about"
                  className="inline-flex items-center px-4 py-2 bg-[#8B0000]/50 text-cream rounded hover:bg-[#8B0000] transition-all duration-300 ease-in-out shadow-[0_0_10px_rgba(139,0,0,0.2)] hover:shadow-[0_0_15px_rgba(139,0,0,0.4)] cursor-pointer hover:scale-105 transform group"
                >
                  <span>Learn More</span>
                  <ChevronRight className="ml-2 w-4 h-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
