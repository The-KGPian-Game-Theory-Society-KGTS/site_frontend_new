"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useRouter } from "next/navigation"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Events", href: "/events" },
  { name: "Articles", href: "/blog" },
  { name: "Games", href: "/games" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/#contact", isContact: true },
  { name: "Team", href: "/team" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const token = localStorage.getItem("accessToken")
    setIsLoggedIn(!!token)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("accessToken")
    localStorage.removeItem("refreshToken")
    setTimeout(() => {
          window.location.href = "/";
        }, 200);
  }

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    
    if (contactSection) {
      // If we're already on the home page, just scroll
      if (window.location.pathname === '/') {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        // If we're on another page, navigate to home and then scroll
        router.push('/');
        // Use a MutationObserver to detect when the contact section becomes available
        const observer = new MutationObserver((mutations, obs) => {
          const contactSection = document.getElementById('contact');
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
            obs.disconnect(); // Stop observing once we've scrolled
          }
        });

        // Start observing the document body for changes
        observer.observe(document.body, {
          childList: true,
          subtree: true
        });

        // Cleanup observer after 5 seconds if it hasn't found the section
        setTimeout(() => {
          observer.disconnect();
        }, 5000);
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur-md border-b border-red-600/30 py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-red-500/50 hover:border-red-500 transition-colors">
              <Image
                src="/kgtsnewlogo.png"
                alt="KGTS Logo"
                fill
                sizes="40px"
                className="object-cover"
                priority
                loading="eager"
              />
            </div>
            <span className="text-2xl font-serif font-bold text-cream hover:text-red-500 transition-colors">
              <span className="text-red-500 filter drop-shadow-[0_0_8px_rgba(255,0,0,0.6)]">K</span>GTS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={link.isContact ? handleContactClick : undefined}
                className="text-cream hover:text-red-500 transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            {isLoggedIn ? (
              <>
                <Link href="/profile" className="text-cream hover:text-red-500 transition-colors relative group">
                  Profile
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 px-4 py-2 rounded"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                {/* <Link href="/auth/login" className="text-cream hover:text-red-500 transition-colors relative group">
                  Login
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                </Link> */}
                <Link href="/auth/login" className="bg-red-500 text-cream transition-all duration-300 hover:bg-red-600 hover:text-white hover:scale-105 active:scale-95 px-4 py-2 rounded">
                  Sign In
                </Link>
              </>
            )} 
          </div>

          {/* Mobile Navigation Toggle */}
          <button className="md:hidden text-cream" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md border-b border-red-600/30 transition-all duration-300 ${
          isOpen ? "max-h-screen py-4" : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => {
                if (link.isContact) {
                  handleContactClick(e);
                }
                setIsOpen(false);
              }}
              className="text-cream hover:text-red-600 transition-colors py-2"
            >
              {link.name}
            </Link>
          ))}
          {isLoggedIn ? (
            <>
              <Link href="/profile" className="text-cream hover:text-red-600 transition-colors py-2" onClick={() => setIsOpen(false)}>
                Profile
              </Link>
              <button
                onClick={() => {
                  handleLogout()
                  setIsOpen(false)
                }}
                className="bg-red-500 active:scale-95 px-4 py-2 rounded"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/auth/login" className="text-cream hover:text-red-600 transition-colors py-2" onClick={() => setIsOpen(false)}>
                Login
              </Link>
              <Link href="/auth/signup" className="bg-red-500 text-cream transition-all duration-300 hover:bg-red-600 hover:text-white hover:scale-105 active:scale-95 px-4 py-2 rounded" onClick={() => setIsOpen(false)}>
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}
