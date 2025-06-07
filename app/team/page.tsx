import Image from "next/image"
import Link from "next/link"
import { FaLinkedin, FaInstagram } from "react-icons/fa"
import { SiGmail } from "react-icons/si"

const teamStructure = {
  leadership: {
    title: "President, Vice President & Advisors",
    members: [
      {
        role: "President",
        name: "TBD",
        image: "/placeholder.svg?height=300&width=300",
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
        image: "https://i.postimg.cc/MpFgPXnR/IMG-20250602-230215.jpg",
        social: {
          linkedin: "https://www.linkedin.com/in/kunal-surana-7444132a7",
          gmail: "mailto:kunalsurana308@gmail.com",
          instagram: "https://www.instagram.com/_kunalsurana"
        }
      },
      {
        role: "General Secretary",
        name: "Pranjal Malpani",
        image: "https://i.postimg.cc/cJ2HkV8f/IMG-20250602-212826.jpg",
        social: {
          linkedin: "https://www.linkedin.com/in/pranjalmalpani",
          gmail: "mailto:malpanipranjal05@gmail.com",
          instagram: "https://www.instagram.com/pranjalmalpani_11235"
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
        image: "https://i.postimg.cc/rFwqZJ2b/IMG-20250606-WA0000.jpg",
        social: {
          linkedin: "https://www.linkedin.com/in/anuj-asthana-1821a1292/",
          gmail: "mailto:anujasthana2804@gmail.com",
          instagram: "https://www.instagram.com/anuj_ada2804"
        }
      },
      {
        role: "Academic Head",
        name: "Utsab Karan",
        image: "https://i.postimg.cc/zDwW80Bk/IMG-20250203-WA0075.jpg",
        social: {
          linkedin: "https://www.linkedin.com/in/utsab-karan-25774b282",
          gmail: "mailto:utsabkaran2010@gmail.com",
          instagram: "https://www.instagram.com/ussab_"
        }
      },
      {
        role: "Academic Head",
        name: "Ketan Suman",
        image: "/placeholder.svg?height=300&width=300",
        social: {
          linkedin: "https://www.linkedin.com/in/ketan073",
          gmail: "mailto:ketansuman385@gmail.com",
          instagram: "#"
        }
      },
      {
        role: "Academic Head",
        name: "Kharat Aditya N.",
        image: "/placeholder.svg?height=300&width=300",
        social: {
          linkedin: "https://www.linkedin.com/in/aditya-kharat",
          gmail: "mailto:aditya.kharat@gmail.com",
          instagram: "https://instagram.com/adityakharat"
        }
      },
      {
        role: "Tech Head",
        name: "Fazal H. Khan",
        image: "https://i.postimg.cc/X7pMZ2q6/Whats-App-Image-2025-06-07-at-17-47-57-8698ea6a.jpg",
        social: {
          linkedin: "https://www.linkedin.com/in/fazal-hayat-khan-747443283/",
          gmail: "mailto:fazalhayatkhan001@gmail.com",
          instagram: "https://www.instagram.com/_fazal_776/"
        }
      },
      {
        role: "Tech Head",
        name: "Akshat Jiwrajka",
        image: "https://i.postimg.cc/15ZszYFQ/IMG-20250127-134403-393.jpg",
        social: {
          linkedin: "https://www.linkedin.com/in/akshat-jiwrajka-ba7b41250",
          gmail: "mailto:akshat2306jwr3@gmail.com",
          instagram: "https://www.instagram.com/akshat_jiwrajka_"
        }
      },
      {
        role: "Design Head",
        name: "Arkajyoti Dey",
        image: "/placeholder.svg?height=300&width=300",
        social: {
          linkedin: "https://www.linkedin.com/in/arkajyoti-dey-b5a409255/",
          gmail: "mailto:arka.jyoti.dey2005@gmail.com",
          instagram: "https://www.instagram.com/whynot_jyoti"
        }
      },
      {
        role: "Design Head",
        name: "Usoshi Dey",
        image: "/placeholder.svg?height=300&width=300",
        social: {
          linkedin: "https://www.linkedin.com/in/usoshi-dey-73a81a293/",
          gmail: "mailto:usoshidey@gmail.com",
          instagram: "https://www.instagram.com/usoshidey"
        }
      },
      {
        role: "Sponsorship Head",
        name: "Z. Dishil",
        image: "https://i.postimg.cc/90ksYWS2/image.png",
        social: {
          linkedin: "https://www.linkedin.com/in/dishil-zalavadiya-943020280/",
          gmail: "mailto:dishil2906@gmail.com",
          instagram: "https://www.instagram.com/dishil_zalavadiya"
        }
      },
      {
        role: "Media and Public Relations Head",
        name: "Mehedhi Hassan",
        image: "/placeholder.svg?height=300&width=300",
        social: {
          linkedin: "https://www.linkedin.com/in/mehedhi2909",
          gmail: "mailto:mehedhi.hassan10@gmail.com",
          instagram: "https://www.instagram.com/mehedhi2909"
        }
      },
    ],
  },
}


// Grouping department members for structured layout
const academicHeads = teamStructure.departments.members.filter(m => m.role === "Academic Head");
const techDesignHeads = teamStructure.departments.members.filter(m => m.role === "Tech Head" || m.role === "Design Head");
const otherHeads = teamStructure.departments.members.filter(m => m.role === "Sponsorship Head" || m.role === "Media and Public Relations Head");


export default function TeamPage() {
  return (
    <div className="min-h-screen text-cream">
      <div className="fixed inset-0 bg-[url('/playing-cards-red-glow.png')] opacity-5 mix-blend-multiply pointer-events-none z-0"></div>
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
          <section className="mb-16">
            <h2 className="text-3xl font-serif font-bold text-cream mb-8 text-center">
              {teamStructure.leadership.title}
            </h2>

            {/* President and Vice President Row */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-12">
              {[teamStructure.leadership.members[0], teamStructure.leadership.members[1]].map((member, index) => (
                <div key={member.name + index} className="w-48">
                  <div className="bg-black/70 border-2 border-red-600/30 rounded-lg overflow-hidden hover:border-red-500/50 transition-all duration-300 group relative">
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        sizes="12rem"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-x-6">
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
                    <div className="p-4 h-24 flex flex-col justify-center text-center relative">
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

            {/* Advisors Row */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-5xl mx-auto">
              {teamStructure.leadership.members.slice(2).map((member, index) => (
                <div key={member.name + index} className="w-48">
                  <div className="bg-black/70 border-2 border-red-600/30 rounded-lg overflow-hidden hover:border-red-500/50 transition-all duration-300 group relative">
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        sizes="12rem"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-x-6">
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
                    <div className="p-4 h-24 flex flex-col justify-center text-center relative">
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
          </section>

          {/* General Secretaries Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-serif font-bold text-cream mb-8 text-center">
              {teamStructure.secretaries.title}
            </h2>
            <div className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-3xl mx-auto">
              {teamStructure.secretaries.members.map((member, index) => (
                <div key={index} className="w-48">
                  <div className="bg-black/70 border-2 border-red-600/30 rounded-lg overflow-hidden hover:border-red-500/50 transition-all duration-300 group relative">
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        sizes="12rem"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-x-6">
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
                    <div className="p-4 h-24 flex flex-col justify-center text-center relative">
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
          </section>

          {/* Department Heads Section */}
          <section>
            <h2 className="text-3xl font-serif font-bold text-cream mb-8 text-center">
              {teamStructure.departments.title}
            </h2>
            <div className="max-w-7xl mx-auto">
              
              {/* Academic Heads */}
              <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-8">
                {academicHeads.map((member, index) => (
                  <div key={index} className="w-48">
                    <div className="bg-black/70 border-2 border-red-600/30 rounded-lg overflow-hidden hover:border-red-500/50 transition-all duration-300 group relative">
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          sizes="12rem"
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-x-6">
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
                      <div className="p-4 h-24 flex flex-col justify-center text-center relative">
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
              
              {/* Tech & Design Heads */}
              <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-8">
                {techDesignHeads.map((member, index) => (
                  <div key={index} className="w-48">
                    <div className="bg-black/70 border-2 border-red-600/30 rounded-lg overflow-hidden hover:border-red-500/50 transition-all duration-300 group relative">
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          sizes="12rem"
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-x-6">
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
                      <div className="p-4 h-24 flex flex-col justify-center text-center relative">
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

              {/* Sponsorship & Media Heads */}
              <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                {otherHeads.map((member, index) => (
                  <div key={index} className="w-48">
                    <div className="bg-black/70 border-2 border-red-600/30 rounded-lg overflow-hidden hover:border-red-500/50 transition-all duration-300 group relative">
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          sizes="12rem"
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-x-6">
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
                      <div className="p-4 h-24 flex flex-col justify-center text-center relative">
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
          </section>
        </div>
      </main>
    </div>
  )
}