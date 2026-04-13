"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-palm-green-dark">
      {/* Background gradient layers */}
      <div className="absolute inset-0 bg-linear-to-br from-palm-green-dark via-palm-green to-palm-green-dark" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(196,150,44,0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(196,150,44,0.1),transparent_50%)]" />

      {/* Decorative floating elements */}
      <motion.div
        animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-[10%] w-24 h-24 md:w-40 md:h-40 rounded-full bg-palm-gold/5 blur-2xl"
      />
      <motion.div
        animate={{ y: [10, -15, 10], rotate: [0, -3, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-32 left-[5%] w-32 h-32 md:w-56 md:h-56 rounded-full bg-palm-gold/5 blur-3xl"
      />

      {/* Gold line accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-linear-to-b from-transparent via-palm-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-32 bg-linear-to-t from-transparent via-palm-gold/30 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="mb-6 md:mb-8"
        >
          <Image
            src="/exclusive-palmwine-logo.jpeg"
            alt="Exclusive Palmwine by George"
            width={180}
            height={180}
            className="mx-auto rounded-full border-4 border-palm-gold/40 shadow-2xl shadow-palm-gold/10 w-32 h-32 sm:w-44 sm:h-44 md:w-45 md:h-45 object-cover"
            priority
          />
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-4"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-palm-gold/30 bg-palm-gold/10 text-palm-gold text-xs sm:text-sm tracking-[0.2em] uppercase font-medium">
            Premium Palm Wine for Events
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-(family-name:--font-playfair) text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-palm-cream leading-[1.1] mb-4 md:mb-6"
        >
          Taste the <span className="text-palm-gold italic">Tradition</span>
          <br />
          <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-palm-cream/70">
            Celebrate with Authenticity
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-palm-cream/60 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed"
        >
          Fresh, naturally sourced palm wine delivered to your weddings,
          parties, and special celebrations. We bring the sweetness of tradition
          to your most memorable moments.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#preorder"
            className="pulse-cta bg-palm-gold text-palm-green-dark px-8 py-4 rounded-full text-base sm:text-lg font-bold tracking-wide hover:bg-palm-gold-light transition-all duration-300 hover:scale-105 shadow-xl shadow-palm-gold/20 w-full sm:w-auto text-center"
          >
            Reserve for Your Event
          </a>
          <a
            href="#survey"
            className="border-2 border-palm-cream/20 text-palm-cream px-8 py-4 rounded-full text-base sm:text-lg font-medium hover:border-palm-gold/50 hover:text-palm-gold transition-all duration-300 w-full sm:w-auto text-center"
          >
            Help Us Serve You Better
          </a>
        </motion.div>

        {/* Social proof hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="mt-12 md:mt-16 flex items-center justify-center gap-6 text-palm-cream/40 text-sm"
        >
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-palm-gold/60"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
            </svg>
            <span>100% Natural</span>
          </div>
          <div className="w-px h-4 bg-palm-cream/20" />
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-palm-gold/60"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
            </svg>
            <span>Fresh Delivery</span>
          </div>
          <div className="w-px h-4 bg-palm-cream/20 hidden sm:block" />
          <div className="hidden sm:flex items-center gap-2">
            <svg
              className="w-5 h-5 text-palm-gold/60"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
            </svg>
            <span>Event-Ready</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-palm-cream/30"
        >
          <span className="text-xs tracking-[0.3em] uppercase">Scroll</span>
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
