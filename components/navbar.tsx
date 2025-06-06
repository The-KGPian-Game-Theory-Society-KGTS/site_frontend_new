"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, User, LogOut, Mail, ChevronDown } from "lucide-react"
import { useRouter } from "next/navigation"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Team", href: "/team" },
  { name: "Games", href: "/games" },
  { name: "Articles", href: "/blog" },
  { name: "Events", href: "/events" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false)
  const [isMobileProfileOpen, setIsMobileProfileOpen] = useState(false) // New state for mobile profile dropdown
  const router = useRouter()
  const dropdownRef = useRef<HTMLDivElement>(null)

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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProfileDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("accessToken")
    localStorage.removeItem("refreshToken")
    setIsProfileDropdownOpen(false)
    setIsMobileProfileOpen(false) // Close mobile dropdown too
    setIsOpen(false) // Close mobile menu
    setTimeout(() => {
      window.location.href = "/"
    }, 200)
  }

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsOpen(false) // Close mobile menu if open
    
    // If we're on another page, navigate to home page with contact section
    if (window.location.pathname !== '/') {
      router.push('/#contact')
    } else {
      // If we're already on home page, just scroll to contact section
      const contactSection = document.getElementById('contact')
      if (contactSection) {
        const navbarHeight = 80 // Approximate navbar height
        const offset = contactSection.offsetTop - navbarHeight
        window.scrollTo({
          top: offset,
          behavior: 'smooth'
        })
      }
    }
  }

  const handleProfileClick = () => {
    router.push("/profile")
    setIsProfileDropdownOpen(false)
    setIsMobileProfileOpen(false) // Close mobile dropdown
    setIsOpen(false) // Close mobile menu if open
  }

  // Toggle mobile profile dropdown
  const toggleMobileProfile = () => {
    setIsMobileProfileOpen(!isMobileProfileOpen)
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur-md border-b border-red-600/30 py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-red-500/50 hover:border-red-500 transition-colors">
              <Image
                src="/kgts-logo.png"
                alt="KGTS Logo"
                fill
                sizes="48px"
                className="object-cover"
                priority
                loading="eager"
              />
            </div>
            <span className="text-3xl font-serif font-bold text-cream hover:text-red-500 transition-colors">
              <span className="text-red-500 filter drop-shadow-[0_0_8px_rgba(255,0,0,0.6)]">K</span>GTS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-cream hover:text-red-500 transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            
            {/* Contact Us Button */}
            <button
              onClick={handleContactClick}
              className="text-cream hover:text-red-500 transition-colors relative group flex items-center space-x-1"
              suppressHydrationWarning
            >
              <span>Contact Us</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </button>

            {isLoggedIn ? (
              /* Desktop Profile Dropdown */
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                  className="flex items-center justify-center w-10 h-10 bg-red-500 hover:bg-red-600 rounded-full transition-colors duration-300 shadow-lg hover:shadow-red-500/25"
                >
                  <User size={20} className="text-white" />
                </button>
                
                {isProfileDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-black/95 backdrop-blur-md border border-red-600/30 rounded-lg shadow-lg overflow-hidden">
                    <div className="py-1">
                      <button
                        onClick={handleProfileClick}
                        className="flex items-center w-full px-4 py-3 text-cream hover:bg-red-500/20 transition-colors duration-200"
                      >
                        <User size={16} className="mr-3" />
                        Profile
                      </button>
                      <button
                        onClick={handleLogout}
                        className="flex items-center w-full px-4 py-3 text-cream hover:bg-red-500/20 transition-colors duration-200"
                      >
                        <LogOut size={16} className="mr-3" />
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link href="/auth/login" className="bg-red-500 text-cream transition-all duration-300 hover:bg-red-600 hover:text-white hover:scale-105 active:scale-95 px-4 py-2 rounded shadow-[0_0_10px_rgba(255,0,0,0.2)] hover:shadow-[0_0_15px_rgba(255,0,0,0.4)]">
                Sign In
              </Link>
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
              className="text-cream hover:text-red-500 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          
          {/* Contact Us Mobile */}
          <button
            onClick={handleContactClick}
            className="text-cream hover:text-red-500 transition-colors py-2 flex items-center space-x-2 text-left"
          >
            <span>Contact Us</span>
          </button>

          {isLoggedIn ? (
            /* Mobile Profile Dropdown */
            <div className="border-t border-red-600/30 pt-4">
              <button
                onClick={toggleMobileProfile}
                className="flex items-center justify-between w-full text-cream hover:text-red-500 transition-colors py-2"
              >
                <div className="flex items-center space-x-2">
                  <div className="flex items-center justify-center w-8 h-8 bg-red-500 rounded-full">
                    <User size={16} className="text-white" />
                  </div>
                  <span>Account</span>
                </div>
                <ChevronDown 
                  size={16} 
                  className={`transition-transform duration-200 ${isMobileProfileOpen ? 'rotate-180' : ''}`}
                />
              </button>
              
              {/* Mobile Profile Submenu */}
              <div className={`ml-4 mt-2 space-y-2 transition-all duration-300 ${
                isMobileProfileOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
              }`}>
                <button
                  onClick={handleProfileClick}
                  className="flex items-center w-full text-cream hover:text-red-500 transition-colors py-2 pl-6"
                >
                  <User size={16} className="mr-3" />
                  <span>Profile</span>
                </button>
                <button
                  onClick={handleLogout}
                  className="flex items-center w-full text-cream hover:text-red-500 transition-colors py-2 pl-6"
                >
                  <LogOut size={16} className="mr-3" />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          ) : (
            /* Mobile Auth Links */
            <div className="border-t border-red-600/30 pt-4 space-y-2">
              <Link href="/auth/login" className="text-cream hover:text-red-500 transition-colors py-2 block" onClick={() => setIsOpen(false)}>
                Login
              </Link>
              <Link href="/auth/signup" className="bg-red-500 text-cream transition-all duration-300 hover:bg-red-600 hover:text-white hover:scale-105 active:scale-95 px-4 py-2 rounded shadow-[0_0_10px_rgba(255,0,0,0.2)] hover:shadow-[0_0_15px_rgba(255,0,0,0.4)] inline-block" onClick={() => setIsOpen(false)}>
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
