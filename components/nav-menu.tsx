"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navLinks = [
  { name: "About Us", href: "#about" },
  { name: "Events", href: "#events" },
  { name: "Team", href: "#team" },
  { name: "Centre and Labs", href: "#labs" },
  { name: "Contact Us", href: "#contact" },
]

export default function NavMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    // Prevent scrolling when menu is open
    if (!isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }

  const closeMenu = () => {
    setIsOpen(false)
    document.body.style.overflow = "auto"
  }

  return (
    <>
      <button onClick={toggleMenu} className="z-50 relative" aria-label={isOpen ? "Close menu" : "Open menu"}>
        {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
      </button>

      {/* Overlay Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-95 z-40 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col items-center justify-center">
          <nav className="space-y-8 text-center">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  href={link.href}
                  className="text-3xl font-bold text-white hover:text-red-600 transition-colors"
                  onClick={closeMenu}
                >
                  {link.name}
                </Link>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </>
  )
}
