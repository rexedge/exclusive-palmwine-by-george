"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const packages = [
  {
    name: "Starter",
    tagline: "Perfect for intimate events",
    size: "20 – 50 guests",
    features: [
      "15 litres of fresh palm wine",
      "Disposable serving cups",
      "Free delivery (within city)",
      "Served in premium kegs",
    ],
    popular: false,
    accent: "palm-green",
  },
  {
    name: "Celebration",
    tagline: "Our most popular package",
    size: "50 – 150 guests",
    features: [
      "40 litres of fresh palm wine",
      "Branded calabash cups",
      "Chilled delivery in cooler kegs",
      "Free event setup assistance",
      "Complimentary palm frond decor",
    ],
    popular: true,
    accent: "palm-gold",
  },
  {
    name: "Grand",
    tagline: "The ultimate experience",
    size: "150 – 500+ guests",
    features: [
      "100+ litres of fresh palm wine",
      "Full palm wine bar setup",
      "Trained serving attendants",
      "Branded calabash & glass cups",
      "Custom palm wine cocktail options",
      "Priority booking & support",
    ],
    popular: false,
    accent: "palm-brown",
  },
];

export default function Packages() {
  return (
    <section
      id="packages"
      className="relative py-20 md:py-32 bg-palm-green-dark overflow-hidden"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(196,150,44,0.08),transparent_70%)]" />
      <div className="absolute top-10 left-10 w-40 h-40 border border-palm-gold/10 rounded-full" />
      <div className="absolute bottom-10 right-10 w-60 h-60 border border-palm-gold/5 rounded-full" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <ScrollReveal className="text-center mb-12 md:mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full border border-palm-gold/20 bg-palm-gold/10 text-palm-gold text-xs tracking-[0.2em] uppercase font-medium mb-4">
            Our Packages
          </span>
          <h2 className="font-(family-name:--font-playfair) text-3xl sm:text-4xl md:text-5xl font-bold text-palm-cream leading-tight">
            Choose Your{" "}
            <span className="text-palm-gold italic">Experience</span>
          </h2>
          <p className="text-palm-cream/50 mt-4 max-w-xl mx-auto text-sm sm:text-base">
            From intimate gatherings to grand celebrations, we have a package
            tailored for your event. Custom packages also available.
          </p>
        </ScrollReveal>

        {/* Package cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {packages.map((pkg, i) => (
            <ScrollReveal key={pkg.name} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className={`relative rounded-3xl p-6 sm:p-8 h-full flex flex-col ${
                  pkg.popular
                    ? "bg-linear-to-br from-palm-gold/20 to-palm-gold/5 border-2 border-palm-gold/40"
                    : "bg-palm-cream/5 border border-palm-cream/10 hover:border-palm-gold/20"
                } transition-all duration-300`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="gold-shimmer text-palm-green-dark text-xs font-bold px-4 py-1 rounded-full tracking-wider uppercase">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="font-(family-name:--font-playfair) text-2xl sm:text-3xl font-bold text-palm-cream">
                    {pkg.name}
                  </h3>
                  <p className="text-palm-gold/80 text-sm mt-1">
                    {pkg.tagline}
                  </p>
                  <div className="mt-3 inline-block px-3 py-1 rounded-full bg-palm-cream/10 text-palm-cream/60 text-xs">
                    {pkg.size}
                  </div>
                </div>

                <ul className="space-y-3 mb-8 grow">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-palm-cream/70 text-sm"
                    >
                      <svg
                        className="w-5 h-5 text-palm-gold shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#preorder"
                  className={`block text-center py-3.5 rounded-full font-bold text-sm tracking-wide transition-all duration-300 ${
                    pkg.popular
                      ? "bg-palm-gold text-palm-green-dark hover:bg-palm-gold-light shadow-lg shadow-palm-gold/20"
                      : "border-2 border-palm-cream/20 text-palm-cream hover:border-palm-gold hover:text-palm-gold"
                  }`}
                >
                  Reserve This Package
                </a>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Custom package note */}
        <ScrollReveal delay={0.5}>
          <p className="text-center text-palm-cream/40 text-sm mt-10">
            Need something custom? We&apos;re flexible.{" "}
            <a
              href="#preorder"
              className="text-palm-gold underline underline-offset-4 hover:text-palm-gold-light transition-colors"
            >
              Tell us about your event
            </a>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
