import Navbar from "@/components/navbar"
import Image from "next/image"
import Link from "next/link"
import { FaLinkedin, FaInstagram } from "react-icons/fa"
import { SiGmail } from "react-icons/si"

const suits = ["♠", "♥", "♦", "♣"]
const values = ["A", "K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3", "2"]

const getCardSymbol = (role: string, index: number) => {
  const suit = suits[index % 4]
  const value = values[index % 13]
  const isRed = suit === "♥" || suit === "♦"
  return { 
    symbol: suit, 
    value: value,
    color: isRed ? "text-red-500" : "text-black"
  }
}

const teamStructure = {
  leadership: {
    title: "President, Vice President & Advisors",
    members: [
      {
        role: "President",
        name: "TBD",
        image: "/placeholder.svg?height=300&width=300",
        card: { suit: "♠", value: "A", color: "text-black" },
        social: {
          linkedin: "#",
          gmail: "#",
          instagram: "#"
        }
      },
      {
        role: "Vice President",
        name: "TBD",
        image: "/placeholder.svg?height=300&width=300",
        card: { suit: "♠", value: "K", color: "text-black" },
        social: {
          linkedin: "#",
          gmail: "#",
          instagram: "#"
        }
      },
      {
        role: "Advisor",
        name: "TBD",
        image: "/placeholder.svg?height=300&width=300",
        card: { suit: "♥", value: "A", color: "text-red-500" },
        social: {
          linkedin: "#",
          gmail: "#",
          instagram: "#"
        }
      },
      {
        role: "Advisor",
        name: "TBD",
        image: "/placeholder.svg?height=300&width=300",
        card: { suit: "♥", value: "K", color: "text-red-500" },
        social: {
          linkedin: "#",
          gmail: "#",
          instagram: "#"
        }
      },
      {
        role: "Advisor",
        name: "TBD",
        image: "/placeholder.svg?height=300&width=300",
        card: { suit: "♦", value: "A", color: "text-red-500" },
        social: {
          linkedin: "#",
          gmail: "#",
          instagram: "#"
        }
      },
      {
        role: "Advisor",
        name: "TBD",
        image: "/placeholder.svg?height=300&width=300",
        card: { suit: "♦", value: "K", color: "text-red-500" },
        social: {
          linkedin: "#",
          gmail: "#",
          instagram: "#"
        }
      },
    ],
  },
  secretaries: {
    title: "General Secretaries",
    members: [
      {
        role: "General Secretary",
        name: "Kunal Surana",
        image: "/placeholder.svg?height=300&width=300",
        card: { suit: "♣", value: "A", color: "text-black" },
        social: {
          linkedin: "https://www.linkedin.com/in/kunal-surana",
          gmail: "mailto:kunal.surana@gmail.com",
          instagram: "https://instagram.com/kunalsurana"
        }
      },
      {
        role: "General Secretary",
        name: "Pranjal Malpani",
        image: "/placeholder.svg?height=300&width=300",
        card: { suit: "♣", value: "K", color: "text-black" },
        social: {
          linkedin: "https://www.linkedin.com/in/pranjal-malpani",
          gmail: "mailto:pranjal.malpani@gmail.com",
          instagram: "https://instagram.com/pranjalmalpani"
        }
      },
    ],
  },
  departments: {
    title: "Heads",
    members: [
      {
        role: "Academic Head",
        name: "Anuj Asthana",
        image: "/placeholder.svg?height=300&width=300",
        card: { suit: "♠", value: "Q", color: "text-black" },
        social: {
          linkedin: "https://www.linkedin.com/in/anuj-asthana",
          gmail: "mailto:anuj.asthana@gmail.com",
          instagram: "https://instagram.com/anujasthana"
        }
      },
      {
        role: "Academic Head",
        name: "Utsab Karan",
        image: "/placeholder.svg?height=300&width=300",
        card: { suit: "♠", value: "J", color: "text-black" },
        social: {
          linkedin: "https://www.linkedin.com/in/utsab-karan",
          gmail: "mailto:utsab.karan@gmail.com",
          instagram: "https://instagram.com/utsabkaran"
        }
      },
      {
        role: "Academic Head",
        name: "Ketan",
        image: "/placeholder.svg?height=300&width=300",
        card: { suit: "♥", value: "Q", color: "text-red-500" },
        social: {
          linkedin: "https://www.linkedin.com/in/ketan",
          gmail: "mailto:ketan@gmail.com",
          instagram: "https://instagram.com/ketan"
        }
      },
      {
        role: "Academic Head",
        name: "Aditya Kharat",
        image: "/placeholder.svg?height=300&width=300",
        card: { suit: "♥", value: "J", color: "text-red-500" },
        social: {
          linkedin: "https://www.linkedin.com/in/aditya-kharat",
          gmail: "mailto:aditya.kharat@gmail.com",
          instagram: "https://instagram.com/adityakharat"
        }
      },
      {
        role: "Tech Head",
        name: "Fazal",
        image: "/placeholder.svg?height=300&width=300",
        card: { suit: "♦", value: "Q", color: "text-red-500" },
        social: {
          linkedin: "https://www.linkedin.com/in/fazal",
          gmail: "mailto:fazal@gmail.com",
          instagram: "https://instagram.com/fazal"
        }
      },
      {
        role: "Tech Head",
        name: "Akshat Jiwrajka",
        image: "/placeholder.svg?height=300&width=300",
        card: { suit: "♦", value: "J", color: "text-red-500" },
        social: {
          linkedin: "https://www.linkedin.com/in/akshat-jiwrajka",
          gmail: "mailto:akshat.jiwrajka@gmail.com",
          instagram: "https://instagram.com/akshatjiwrajka"
        }
      },
      {
        role: "Design Head",
        name: "Arkajyoti Dey",
        image: "/placeholder.svg?height=300&width=300",
        card: { suit: "♣", value: "Q", color: "text-black" },
        social: {
          linkedin: "https://www.linkedin.com/in/arkajyoti-dey",
          gmail: "mailto:arkajyoti.dey@gmail.com",
          instagram: "https://instagram.com/arkajyotidey"
        }
      },
      {
        role: "Design Head",
        name: "Usoshi Dey",
        image: "/placeholder.svg?height=300&width=300",
        card: { suit: "♣", value: "J", color: "text-black" },
        social: {
          linkedin: "https://www.linkedin.com/in/usoshi-dey",
          gmail: "mailto:usoshi.dey@gmail.com",
          instagram: "https://instagram.com/usoshidey"
        }
      },
      {
        role: "Sponsorship Head",
        name: "Dishil",
        image: "/placeholder.svg?height=300&width=300",
        card: { suit: "♠", value: "10", color: "text-black" },
        social: {
          linkedin: "https://www.linkedin.com/in/dishil",
          gmail: "mailto:dishil@gmail.com",
          instagram: "https://instagram.com/dishil"
        }
      },
      {
        role: "Media and Public Relations Head",
        name: "Mehedi Hasan",
        image: "/placeholder.svg?height=300&width=300",
        card: { suit: "♥", value: "10", color: "text-red-500" },
        social: {
          linkedin: "https://www.linkedin.com/in/mehedi-hasan",
          gmail: "mailto:mehedi.hasan@gmail.com",
          instagram: "https://instagram.com/mehedihasan"
        }
      },
    ],
  },
}

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
              Meet the dedicated individuals behind The KGPian Game Theory Society who are committed to exploring and
              sharing the fascinating world of strategic decision-making.
            </p>
          </div>

          {/* Leadership Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-serif font-bold text-cream mb-8 text-center">
              {teamStructure.leadership.title}
            </h2>
            <div className="flex flex-col items-center gap-8 max-w-7xl mx-auto">
              {/* President */}
              <div className="w-48">
                <div className="bg-black/70 border-2 border-red-600/30 rounded-lg overflow-hidden hover:border-red-500/50 transition-all duration-300 group relative">
                  {/* Corner Elements */}
                  <div className="absolute top-2 left-2 z-20">
                    <div className={`font-bold text-2xl ${teamStructure.leadership.members[0].card.color} drop-shadow-lg`}>
                      {teamStructure.leadership.members[0].card.suit}
                    </div>
                    <div className={`text-sm ${teamStructure.leadership.members[0].card.color} drop-shadow-lg`}>
                      {teamStructure.leadership.members[0].card.value}
                    </div>
                  </div>
                  
                  {/* Card Border Pattern */}
                  <div className="absolute inset-0 border-4 border-red-600/20 rounded-lg pointer-events-none"></div>
                  
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={teamStructure.leadership.members[0].image}
                      alt={teamStructure.leadership.members[0].name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Dark overlay on hover */}
                    <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-6">
                      <Link href={teamStructure.leadership.members[0].social.linkedin} target="_blank" rel="noopener noreferrer" className="text-cream hover:text-red-500 transition-colors transform hover:scale-110">
                        <FaLinkedin size={32} />
                      </Link>
                      <Link href={teamStructure.leadership.members[0].social.gmail} target="_blank" rel="noopener noreferrer" className="text-cream hover:text-red-500 transition-colors transform hover:scale-110">
                        <SiGmail size={32} />
                      </Link>
                      <Link href={teamStructure.leadership.members[0].social.instagram} target="_blank" rel="noopener noreferrer" className="text-cream hover:text-red-500 transition-colors transform hover:scale-110">
                        <FaInstagram size={32} />
                      </Link>
                    </div>
                  </div>
                  <div className="p-4 h-24 flex flex-col justify-between relative">
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
                    <div className="relative z-10">
                      <h3 className="text-lg font-serif font-bold text-cream group-hover:text-red-500 transition-colors line-clamp-1">
                        {teamStructure.leadership.members[0].name}
                      </h3>
                      <p className="text-red-500 text-sm">{teamStructure.leadership.members[0].role}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Vice President */}
              <div className="w-48">
                <div className="bg-black/70 border-2 border-red-600/30 rounded-lg overflow-hidden hover:border-red-500/50 transition-all duration-300 group relative">
                  {/* Corner Elements */}
                  <div className="absolute top-2 left-2 z-20">
                    <div className={`font-bold text-2xl ${teamStructure.leadership.members[1].card.color} drop-shadow-lg`}>
                      {teamStructure.leadership.members[1].card.suit}
                    </div>
                    <div className={`text-sm ${teamStructure.leadership.members[1].card.color} drop-shadow-lg`}>
                      {teamStructure.leadership.members[1].card.value}
                    </div>
                  </div>
                  
                  {/* Card Border Pattern */}
                  <div className="absolute inset-0 border-4 border-red-600/20 rounded-lg pointer-events-none"></div>
                  
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={teamStructure.leadership.members[1].image}
                      alt={teamStructure.leadership.members[1].name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Dark overlay on hover */}
                    <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-6">
                      <Link href={teamStructure.leadership.members[1].social.linkedin} target="_blank" rel="noopener noreferrer" className="text-cream hover:text-red-500 transition-colors transform hover:scale-110">
                        <FaLinkedin size={32} />
                      </Link>
                      <Link href={teamStructure.leadership.members[1].social.gmail} target="_blank" rel="noopener noreferrer" className="text-cream hover:text-red-500 transition-colors transform hover:scale-110">
                        <SiGmail size={32} />
                      </Link>
                      <Link href={teamStructure.leadership.members[1].social.instagram} target="_blank" rel="noopener noreferrer" className="text-cream hover:text-red-500 transition-colors transform hover:scale-110">
                        <FaInstagram size={32} />
                      </Link>
                    </div>
                  </div>
                  <div className="p-4 h-24 flex flex-col justify-between relative">
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
                    <div className="relative z-10">
                      <h3 className="text-lg font-serif font-bold text-cream group-hover:text-red-500 transition-colors line-clamp-1">
                        {teamStructure.leadership.members[1].name}
                      </h3>
                      <p className="text-red-500 text-sm">{teamStructure.leadership.members[1].role}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Advisors */}
              <div className="flex justify-center gap-8 flex-wrap">
                {teamStructure.leadership.members.slice(2).map((member, index) => (
                  <div key={index} className="w-48">
                    <div className="bg-black/70 border-2 border-red-600/30 rounded-lg overflow-hidden hover:border-red-500/50 transition-all duration-300 group relative">
                      {/* Corner Elements */}
                      <div className="absolute top-2 left-2 z-20">
                        <div className={`font-bold text-2xl ${member.card.color} drop-shadow-lg`}>
                          {member.card.suit}
                        </div>
                        <div className={`text-sm ${member.card.color} drop-shadow-lg`}>
                          {member.card.value}
                        </div>
                      </div>
                      
                      {/* Card Border Pattern */}
                      <div className="absolute inset-0 border-4 border-red-600/20 rounded-lg pointer-events-none"></div>
                      
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        {/* Dark overlay with social icons */}
                        <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-6">
                          <Link href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-cream hover:text-red-500 transition-colors transform hover:scale-110">
                            <FaLinkedin size={32} />
                          </Link>
                          <Link href={member.social.gmail} target="_blank" rel="noopener noreferrer" className="text-cream hover:text-red-500 transition-colors transform hover:scale-110">
                            <SiGmail size={32} />
                          </Link>
                          <Link href={member.social.instagram} target="_blank" rel="noopener noreferrer" className="text-cream hover:text-red-500 transition-colors transform hover:scale-110">
                            <FaInstagram size={32} />
                          </Link>
                        </div>
                      </div>
                      <div className="p-4 h-24 flex flex-col justify-between relative">
                        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
                        <div className="relative z-10">
                          <h3 className="text-lg font-serif font-bold text-cream group-hover:text-red-500 transition-colors line-clamp-1">
                            {member.name}
                          </h3>
                          <p className="text-red-500 text-sm">{member.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* General Secretaries Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-serif font-bold text-cream mb-8 text-center">
              {teamStructure.secretaries.title}
            </h2>
            <div className="flex justify-center gap-8 max-w-7xl mx-auto">
              {teamStructure.secretaries.members.map((member, index) => (
                <div key={index} className="w-48">
                  <div className="bg-black/70 border-2 border-red-600/30 rounded-lg overflow-hidden hover:border-red-500/50 transition-all duration-300 group relative">
                    {/* Corner Elements */}
                    <div className="absolute top-2 left-2 z-20">
                      <div className={`font-bold text-2xl ${member.card.color} drop-shadow-lg`}>
                        {member.card.suit}
                      </div>
                      <div className={`text-sm ${member.card.color} drop-shadow-lg`}>
                        {member.card.value}
                      </div>
                    </div>
                    
                    {/* Card Border Pattern */}
                    <div className="absolute inset-0 border-4 border-red-600/20 rounded-lg pointer-events-none"></div>
                    
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {/* Dark overlay on hover */}
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-6">
                        <Link href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-cream hover:text-red-500 transition-colors transform hover:scale-110">
                          <FaLinkedin size={32} />
                        </Link>
                        <Link href={member.social.gmail} target="_blank" rel="noopener noreferrer" className="text-cream hover:text-red-500 transition-colors transform hover:scale-110">
                          <SiGmail size={32} />
                        </Link>
                        <Link href={member.social.instagram} target="_blank" rel="noopener noreferrer" className="text-cream hover:text-red-500 transition-colors transform hover:scale-110">
                          <FaInstagram size={32} />
                        </Link>
                      </div>
                    </div>
                    <div className="p-4 h-24 flex flex-col justify-between relative">
                      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
                      <div className="relative z-10">
                        <h3 className="text-lg font-serif font-bold text-cream group-hover:text-red-500 transition-colors line-clamp-1">
                          {member.name}
                        </h3>
                        <p className="text-red-500 text-sm">{member.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Department Heads Section */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-cream mb-8 text-center">
              {teamStructure.departments.title}
            </h2>
            <div className="flex flex-col gap-8 max-w-7xl mx-auto">
              {/* Academic Heads */}
              <div className="flex justify-center gap-8">
                {teamStructure.departments.members
                  .filter(member => member.role === "Academic Head")
                  .map((member, index) => (
                    <div key={index} className="w-48">
                      <div className="bg-black/70 border-2 border-red-600/30 rounded-lg overflow-hidden hover:border-red-500/50 transition-all duration-300 group relative">
                        {/* Corner Elements */}
                        <div className="absolute top-2 left-2 z-20">
                          <div className={`font-bold text-2xl ${member.card.color} drop-shadow-lg`}>
                            {member.card.suit}
                          </div>
                          <div className={`text-sm ${member.card.color} drop-shadow-lg`}>
                            {member.card.value}
                          </div>
                        </div>
                        
                        {/* Card Border Pattern */}
                        <div className="absolute inset-0 border-4 border-red-600/20 rounded-lg pointer-events-none"></div>
                        
                        <div className="relative h-64 overflow-hidden">
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          {/* Dark overlay on hover */}
                          <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-6">
                            <Link href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-cream hover:text-red-500 transition-colors transform hover:scale-110">
                              <FaLinkedin size={32} />
                            </Link>
                            <Link href={member.social.gmail} target="_blank" rel="noopener noreferrer" className="text-cream hover:text-red-500 transition-colors transform hover:scale-110">
                              <SiGmail size={32} />
                            </Link>
                            <Link href={member.social.instagram} target="_blank" rel="noopener noreferrer" className="text-cream hover:text-red-500 transition-colors transform hover:scale-110">
                              <FaInstagram size={32} />
                            </Link>
                          </div>
                        </div>
                        <div className="p-4 h-24 flex flex-col justify-between relative">
                          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
                          <div className="relative z-10">
                            <h3 className="text-lg font-serif font-bold text-cream group-hover:text-red-500 transition-colors line-clamp-1">
                              {member.name}
                            </h3>
                            <p className="text-red-500 text-sm">{member.role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>

              {/* Tech Heads */}
              <div className="flex justify-center gap-8">
                {teamStructure.departments.members
                  .filter(member => member.role === "Tech Head")
                  .map((member, index) => (
                    <div key={index} className="w-48">
                      <div className="bg-black/70 border-2 border-red-600/30 rounded-lg overflow-hidden hover:border-red-500/50 transition-all duration-300 group relative">
                        {/* Corner Elements */}
                        <div className="absolute top-2 left-2 z-20">
                          <div className={`font-bold text-2xl ${member.card.color} drop-shadow-lg`}>
                            {member.card.suit}
                          </div>
                          <div className={`text-sm ${member.card.color} drop-shadow-lg`}>
                            {member.card.value}
                          </div>
                        </div>
                        
                        {/* Card Border Pattern */}
                        <div className="absolute inset-0 border-4 border-red-600/20 rounded-lg pointer-events-none"></div>
                        
                        <div className="relative h-64 overflow-hidden">
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          {/* Dark overlay on hover */}
                          <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-6">
                            <Link href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-cream hover:text-red-500 transition-colors transform hover:scale-110">
                              <FaLinkedin size={32} />
                            </Link>
                            <Link href={member.social.gmail} target="_blank" rel="noopener noreferrer" className="text-cream hover:text-red-500 transition-colors transform hover:scale-110">
                              <SiGmail size={32} />
                            </Link>
                            <Link href={member.social.instagram} target="_blank" rel="noopener noreferrer" className="text-cream hover:text-red-500 transition-colors transform hover:scale-110">
                              <FaInstagram size={32} />
                            </Link>
                          </div>
                        </div>
                        <div className="p-4 h-24 flex flex-col justify-between relative">
                          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
                          <div className="relative z-10">
                            <h3 className="text-lg font-serif font-bold text-cream group-hover:text-red-500 transition-colors line-clamp-1">
                              {member.name}
                            </h3>
                            <p className="text-red-500 text-sm">{member.role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>

              {/* Design Heads */}
              <div className="flex justify-center gap-8">
                {teamStructure.departments.members
                  .filter(member => member.role === "Design Head")
                  .map((member, index) => (
                    <div key={index} className="w-48">
                      <div className="bg-black/70 border-2 border-red-600/30 rounded-lg overflow-hidden hover:border-red-500/50 transition-all duration-300 group relative">
                        {/* Corner Elements */}
                        <div className="absolute top-2 left-2 z-20">
                          <div className={`font-bold text-2xl ${member.card.color} drop-shadow-lg`}>
                            {member.card.suit}
                          </div>
                          <div className={`text-sm ${member.card.color} drop-shadow-lg`}>
                            {member.card.value}
                          </div>
                        </div>
                        
                        {/* Card Border Pattern */}
                        <div className="absolute inset-0 border-4 border-red-600/20 rounded-lg pointer-events-none"></div>
                        
                        <div className="relative h-64 overflow-hidden">
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          {/* Dark overlay on hover */}
                          <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-6">
                            <Link href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-cream hover:text-red-500 transition-colors transform hover:scale-110">
                              <FaLinkedin size={32} />
                            </Link>
                            <Link href={member.social.gmail} target="_blank" rel="noopener noreferrer" className="text-cream hover:text-red-500 transition-colors transform hover:scale-110">
                              <SiGmail size={32} />
                            </Link>
                            <Link href={member.social.instagram} target="_blank" rel="noopener noreferrer" className="text-cream hover:text-red-500 transition-colors transform hover:scale-110">
                              <FaInstagram size={32} />
                            </Link>
                          </div>
                        </div>
                        <div className="p-4 h-24 flex flex-col justify-between relative">
                          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
                          <div className="relative z-10">
                            <h3 className="text-lg font-serif font-bold text-cream group-hover:text-red-500 transition-colors line-clamp-1">
                              {member.name}
                            </h3>
                            <p className="text-red-500 text-sm">{member.role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>

              {/* Sponsorship Head */}
              <div className="flex justify-center gap-8">
                {teamStructure.departments.members
                  .filter(member => member.role === "Sponsorship Head")
                  .map((member, index) => (
                    <div key={index} className="w-48">
                      <div className="bg-black/70 border-2 border-red-600/30 rounded-lg overflow-hidden hover:border-red-500/50 transition-all duration-300 group relative">
                        {/* Corner Elements */}
                        <div className="absolute top-2 left-2 z-20">
                          <div className={`font-bold text-2xl ${member.card.color} drop-shadow-lg`}>
                            {member.card.suit}
                          </div>
                          <div className={`text-sm ${member.card.color} drop-shadow-lg`}>
                            {member.card.value}
                          </div>
                        </div>
                        
                        {/* Card Border Pattern */}
                        <div className="absolute inset-0 border-4 border-red-600/20 rounded-lg pointer-events-none"></div>
                        
                        <div className="relative h-64 overflow-hidden">
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          {/* Dark overlay on hover */}
                          <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-6">
                            <Link href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-cream hover:text-red-500 transition-colors transform hover:scale-110">
                              <FaLinkedin size={32} />
                            </Link>
                            <Link href={member.social.gmail} target="_blank" rel="noopener noreferrer" className="text-cream hover:text-red-500 transition-colors transform hover:scale-110">
                              <SiGmail size={32} />
                            </Link>
                            <Link href={member.social.instagram} target="_blank" rel="noopener noreferrer" className="text-cream hover:text-red-500 transition-colors transform hover:scale-110">
                              <FaInstagram size={32} />
                            </Link>
                          </div>
                        </div>
                        <div className="p-4 h-24 flex flex-col justify-between relative">
                          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
                          <div className="relative z-10">
                            <h3 className="text-lg font-serif font-bold text-cream group-hover:text-red-500 transition-colors line-clamp-1">
                              {member.name}
                            </h3>
                            <p className="text-red-500 text-sm">{member.role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>

              {/* Media and PR Head */}
              <div className="flex justify-center gap-8">
                {teamStructure.departments.members
                  .filter(member => member.role === "Media and Public Relations Head")
                  .map((member, index) => (
                    <div key={index} className="w-48">
                      <div className="bg-black/70 border-2 border-red-600/30 rounded-lg overflow-hidden hover:border-red-500/50 transition-all duration-300 group relative">
                        {/* Corner Elements */}
                        <div className="absolute top-2 left-2 z-20">
                          <div className={`font-bold text-2xl ${member.card.color} drop-shadow-lg`}>
                            {member.card.suit}
                          </div>
                          <div className={`text-sm ${member.card.color} drop-shadow-lg`}>
                            {member.card.value}
                          </div>
                        </div>
                        
                        {/* Card Border Pattern */}
                        <div className="absolute inset-0 border-4 border-red-600/20 rounded-lg pointer-events-none"></div>
                        
                        <div className="relative h-64 overflow-hidden">
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          {/* Dark overlay on hover */}
                          <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-6">
                            <Link href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-cream hover:text-red-500 transition-colors transform hover:scale-110">
                              <FaLinkedin size={32} />
                            </Link>
                            <Link href={member.social.gmail} target="_blank" rel="noopener noreferrer" className="text-cream hover:text-red-500 transition-colors transform hover:scale-110">
                              <SiGmail size={32} />
                            </Link>
                            <Link href={member.social.instagram} target="_blank" rel="noopener noreferrer" className="text-cream hover:text-red-500 transition-colors transform hover:scale-110">
                              <FaInstagram size={32} />
                            </Link>
                          </div>
                        </div>
                        <div className="p-4 h-24 flex flex-col justify-between relative">
                          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
                          <div className="relative z-10">
                            <h3 className="text-lg font-serif font-bold text-cream group-hover:text-red-500 transition-colors line-clamp-1">
                              {member.name}
                            </h3>
                            <p className="text-red-500 text-sm">{member.role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
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
