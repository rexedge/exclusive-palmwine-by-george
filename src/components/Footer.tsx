"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function Footer() {
  return (
    <footer className="relative bg-palm-green-dark pt-16 pb-8 overflow-hidden">
      {/* Top gold line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-palm-gold/30 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="grid md:grid-cols-3 gap-10 md:gap-16 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/exclusive-palmwine-logo.jpeg"
                  alt="Exclusive Palmwine by George"
                  width={48}
                  height={48}
                  className="rounded-full border-2 border-palm-gold/30"
                />
                <div>
                  <span className="font-(family-name:--font-playfair) font-bold text-palm-cream text-lg block leading-tight">
                    EXCLUSIVE
                  </span>
                  <span className="text-palm-gold text-sm font-medium">
                    Palmwine by George
                  </span>
                </div>
              </div>
              <p className="text-palm-cream/50 text-sm leading-relaxed">
                Premium fresh palm wine supply for your events and celebrations.
                Taste the tradition, celebrate with authenticity.
              </p>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="font-(family-name:--font-playfair) text-palm-cream font-bold mb-4">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {[
                  { href: "#about", label: "Our Story" },
                  { href: "#packages", label: "Packages" },
                  { href: "#survey", label: "Take Survey" },
                  { href: "#preorder", label: "Reserve Now" },
                ].map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-palm-cream/50 hover:text-palm-gold transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-(family-name:--font-playfair) text-palm-cream font-bold mb-4">
                Get in Touch
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="tel:+2348000000000"
                    className="text-palm-cream/50 hover:text-palm-gold transition-colors duration-300 text-sm flex items-center gap-2"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    +234 800 000 0000
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/2348037640425"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-palm-cream/50 hover:text-palm-gold transition-colors duration-300 text-sm flex items-center gap-2"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.121.553 4.112 1.519 5.84L.055 23.456l5.768-1.512A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818c-1.9 0-3.727-.508-5.319-1.467l-.381-.227-3.958 1.037 1.056-3.856-.249-.395A9.786 9.786 0 012.182 12C2.182 6.584 6.584 2.182 12 2.182S21.818 6.584 21.818 12 17.416 21.818 12 21.818z" />
                    </svg>
                    WhatsApp Us
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/exclusivepalmwine"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-palm-cream/50 hover:text-palm-gold transition-colors duration-300 text-sm flex items-center gap-2"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                    @exclusivepalmwine
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-palm-cream/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-palm-cream/30 text-xs">
              &copy; {new Date().getFullYear()} Exclusive Palmwine by George.
              All rights reserved.
            </p>
            <p className="text-palm-cream/20 text-xs">
              Crafted with 🌴 tradition & love
            </p>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
