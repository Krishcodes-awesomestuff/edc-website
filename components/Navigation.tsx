"use client"

import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { usePathname } from 'next/navigation'

const links = [
    { href: '/', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#events', label: 'Events' },
    { href: '#labs', label: 'Centre & Labs' },
    { href: '#contact', label: 'Contact' }
]

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null)
    const leftPanelRef = useRef<HTMLDivElement>(null)
    const rightPanelRef = useRef<HTMLDivElement>(null)
    const linkRefs = useRef<(HTMLAnchorElement | null)[]>([])
    const pathname = usePathname()

    // GSAP Animation handling
    useEffect(() => {
        if (isOpen) {
            const tl = gsap.timeline()

            // Ensure menu is visible before animating
            if (menuRef.current) {
                menuRef.current.style.display = 'flex'
            }

            // Initial States
            gsap.set(menuRef.current, { xPercent: 100 })
            gsap.set(leftPanelRef.current, { opacity: 0, x: -100 })
            gsap.set(linkRefs.current, { y: 100, opacity: 0 })

            // Reveal Menu
            tl.to(menuRef.current, {
                xPercent: 0,
                duration: 1,
                ease: 'power3.inOut',
            })

            // Animate Content (Left Panel)
            tl.to(leftPanelRef.current, {
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: 'power3.out',
            }, "-=0.4")

            // Animate Links (Right Panel)
            tl.to(linkRefs.current, {
                y: 0,
                opacity: 1,
                stagger: 0.1,
                duration: 0.8,
                ease: 'power4.out',
            }, "-=0.6")

        } else {
            // Close Animation
            if (menuRef.current && menuRef.current.style.display !== 'none') {
                const tl = gsap.timeline({
                    onComplete: () => {
                        if (menuRef.current) menuRef.current.style.display = 'none'
                    }
                })

                tl.to(linkRefs.current, {
                    y: -50,
                    opacity: 0,
                    stagger: 0.05,
                    duration: 0.4,
                    ease: 'power2.in'
                })
                    .to(leftPanelRef.current, {
                        opacity: 0,
                        x: -50,
                        duration: 0.4,
                        ease: 'power2.in'
                    }, "-=0.2")
                    .to(menuRef.current, {
                        xPercent: 100,
                        duration: 0.8,
                        ease: 'power3.inOut'
                    }, "-=0.2")
            }
        }
    }, [isOpen])

    // Close menu on route change
    useEffect(() => {
        setIsOpen(false)
    }, [pathname])

    // Handle Overflow
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => {
            document.body.style.overflow = ''
        }
    }, [isOpen])


    return (
        <>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed top-8 right-8 z-[60] flex flex-col justify-center items-end gap-1.5 w-12 h-12 p-2 mix-blend-difference cursor-pointer group pointer-events-auto"
                aria-label="Toggle Menu"
            >
                <span className={`h-[2px] bg-white transition-all duration-300 ease-out group-hover:w-full ${isOpen ? 'w-full rotate-45 translate-y-2' : 'w-8'}`}></span>
                <span className={`h-[2px] bg-white transition-all duration-300 ease-out ${isOpen ? 'opacity-0' : 'w-full'}`}></span>
                <span className={`h-[2px] bg-white transition-all duration-300 ease-out group-hover:w-full ${isOpen ? 'w-full -rotate-45 -translate-y-2' : 'w-6'}`}></span>
            </button>

            <div
                ref={menuRef}
                className="fixed inset-0 z-50 hidden w-screen h-screen bg-[#050505] text-[#f0f0f0] overflow-hidden"
            >
                {/* Grid Background Effect */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                {/* Left Panel - Branding */}
                <div ref={leftPanelRef} className="hidden md:flex w-1/2 h-full flex-col justify-between p-20 border-r border-white/10 bg-neutral-950/50 backdrop-blur-sm relative z-10">
                    <div>
                        <span className="text-sm font-light tracking-widest uppercase text-white/50">Menu</span>
                    </div>

                    <div className="space-y-4">
                        <h1 className="text-[12rem] leading-none font-bold tracking-tighter mix-blend-overlay opacity-20 select-none">EDC</h1>
                        <p className="text-xl font-light text-white/60 max-w-md">
                            Empowering Innovators,<br />Igniting Startups via Rajalakshmi Engineering College.
                        </p>
                    </div>

                    <div className="flex gap-6">
                        <a href="https://www.instagram.com/eidc_rec/" target="_blank" rel="noopener noreferrer" className="text-sm uppercase tracking-widest hover:text-white/60 transition-colors">Instagram</a>
                        <a href="https://www.linkedin.com/company/e-cell-rec/?originalSubdomain=in" target="_blank" rel="noopener noreferrer" className="text-sm uppercase tracking-widest hover:text-white/60 transition-colors">LinkedIn</a>
                        <a href="https://www.facebook.com/ecellrec/" target="_blank" rel="noopener noreferrer" className="text-sm uppercase tracking-widest hover:text-white/60 transition-colors">Facebook</a>
                    </div>
                </div>

                {/* Right Panel - Navigation */}
                <div className="w-full md:w-1/2 h-full flex flex-col justify-center px-10 md:px-24 relative z-10">
                    <nav className="flex flex-col gap-4">
                        {links.map((link, i) => (
                            <div key={link.href} className="overflow-hidden">
                                <Link
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    ref={(el) => { linkRefs.current[i] = el }}
                                    className="group relative inline-block text-5xl md:text-7xl font-bold tracking-tight text-white transition-colors duration-300"
                                >
                                    <span className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-105 group-hover:translate-x-2">
                                        {link.label}
                                    </span>
                                    <span className="absolute left-0 bottom-0 w-full h-[3px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] origin-left"></span>
                                </Link>
                            </div>
                        ))}
                    </nav>
                </div>
            </div>
        </>
    )
}
