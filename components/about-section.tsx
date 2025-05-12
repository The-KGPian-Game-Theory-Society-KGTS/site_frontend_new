"use client"

import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
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
            About <span className="text-[#8B0000] filter drop-shadow-[0_0_8px_rgba(139,0,0,0.6)]">Us</span>
          </h2>
          <div className="w-20 h-1 bg-[#8B0000] mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-serif font-bold text-cream">Our Mission</h3>
            <p className="text-cream/80 leading-relaxed">
              The KGPian Game Theory Society is dedicated to exploring the fascinating intersection of mathematics,
              economics, and strategic decision-making. We provide a platform for students to delve into the principles
              of game theory and apply them to real-world scenarios.
            </p>
            <p className="text-cream/80 leading-relaxed">
              Through workshops, competitions, and collaborative research, we aim to foster critical thinking and
              analytical skills among our members, preparing them for challenges in academia and industry alike.
            </p>

            <div className="pt-4">
              <Link href="/about" className="flex items-center text-[#8B0000] hover:text-[#A52A2A] transition-all duration-300 ease-in-out group cursor-pointer hover:shadow-[0_0_10px_rgba(139,0,0,0.3)]">
                <span>Learn more about our history</span>
                <ChevronRight className="ml-2 transition-transform duration-300 ease-in-out group-hover:translate-x-1" size={18} />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-black/70 border border-[#8B0000]/30 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-2xl font-serif font-bold text-cream mb-4">What is Game Theory?</h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#8B0000]/30 flex items-center justify-center text-[#8B0000] mr-4">
                    1
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-cream">Strategic Decision Making</h4>
                    <p className="text-cream/70">
                      The mathematical study of strategic interaction among rational decision-makers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#8B0000]/30 flex items-center justify-center text-[#8B0000] mr-4">
                    2
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-cream">Nash Equilibrium</h4>
                    <p className="text-cream/70">
                      A solution concept where no player can benefit by changing their strategy while others keep theirs
                      unchanged.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#8B0000]/30 flex items-center justify-center text-[#8B0000] mr-4">
                    3
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-cream">Applications</h4>
                    <p className="text-cream/70">
                      From economics and politics to biology and computer science, game theory has wide-ranging
                      applications.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <Link
                  href="/team"
                  className="inline-flex items-center px-4 py-2 bg-[#8B0000]/50 text-cream rounded hover:bg-[#8B0000] transition-all duration-300 ease-in-out shadow-[0_0_10px_rgba(139,0,0,0.2)] hover:shadow-[0_0_15px_rgba(139,0,0,0.4)] cursor-pointer hover:scale-105 transform group"
                >
                  <span>Meet Our Team</span>
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
