"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "#about", label: "Our Story" },
    { href: "#packages", label: "Packages" },
    { href: "#survey", label: "Have Your Say" },
    { href: "#preorder", label: "Pre-Order" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-palm-green-dark/95 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/exclusive-palmwine-logo.jpeg"
            alt="Exclusive Palmwine by George"
            width={48}
            height={48}
            className="rounded-full border-2 border-palm-gold/50"
          />
          <span
            className={`font-(family-name:--font-playfair) font-bold text-lg transition-colors duration-300 ${
              scrolled ? "text-palm-cream" : "text-palm-cream"
            }`}
          >
            EXCLUSIVE
            <span className="text-palm-gold"> Palmwine</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-palm-cream/80 hover:text-palm-gold transition-colors duration-300 text-sm font-medium tracking-wide uppercase"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#preorder"
            className="bg-palm-gold text-palm-green-dark px-5 py-2.5 rounded-full text-sm font-bold tracking-wide hover:bg-palm-gold-light transition-all duration-300 hover:shadow-lg hover:shadow-palm-gold/20"
          >
            Reserve Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-palm-cream rounded-full"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-0.5 bg-palm-cream rounded-full"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-palm-cream rounded-full"
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-palm-green-dark/98 backdrop-blur-lg border-t border-palm-gold/10"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-palm-cream/90 hover:text-palm-gold text-lg font-medium py-2 border-b border-palm-gold/10"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="#preorder"
                onClick={() => setMenuOpen(false)}
                className="bg-palm-gold text-palm-green-dark px-6 py-3 rounded-full text-center font-bold mt-2 hover:bg-palm-gold-light transition-all"
              >
                Reserve Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
