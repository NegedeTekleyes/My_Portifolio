"use client"
import Link from "next/link";
import { useState } from "react";

import {AnimatePresence, motion} from "framer-motion"
export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false)

    const links = [
        {name: "About",href:"#"},
        {name: "Projects",href:"#"},
        {name: "Contact",href:"#"},
        {name: "Skills",href:"#"},
    ]

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b ">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
            {/* logo */}
          <Link href="#" className="font-bold text-lg text-blue-600">
            NT
          </Link>

          {/* Mobile menu button */}
          <button
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded= {isOpen}
          className="md:hidden"
          >
            <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
                />
            </svg>
          </button>


          {/* Desktop menu */}
          <div className="hidden md:flex  gap-8">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{opacity: 0, y: -10}}
            transition={{duration: 0.2}}
            className="md:hidden mt-4 flex flex-col gap-4 border-t  pt-4"
          >
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
