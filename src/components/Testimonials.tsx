"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const testimonialPreviews = [
  {
    quote:
      "We served palm wine at our wedding and everyone kept asking where we got it. It was the highlight of the reception!",
    name: "Mrs. Adaeze O.",
    event: "Wedding Reception",
    rating: 5,
  },
  {
    quote:
      "Fresh, well-packaged, and delivered on time. The calabash presentation added such a beautiful cultural touch.",
    name: "Chief Emeka N.",
    event: "Chieftaincy Celebration",
    rating: 5,
  },
  {
    quote:
      "My guests couldn't stop talking about the palm wine bar setup. Truly exclusive service!",
    name: "Blessing A.",
    event: "50th Birthday Party",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-palm-cream-dark to-palm-cream" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal className="text-center mb-10 md:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full border border-palm-green/20 bg-palm-green/5 text-palm-green text-xs tracking-[0.2em] uppercase font-medium mb-4">
            What People Say
          </span>
          <h2 className="font-(family-name:--font-playfair) text-3xl sm:text-4xl md:text-5xl font-bold text-palm-green-dark leading-tight">
            Loved by <span className="text-palm-gold italic">Event Hosts</span>
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonialPreviews.map((testimonial, i) => (
            <ScrollReveal key={testimonial.name} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-palm-white rounded-2xl p-6 sm:p-8 border border-palm-gold/10 hover:border-palm-gold/25 transition-all duration-300 h-full flex flex-col shadow-sm hover:shadow-lg hover:shadow-palm-gold/5"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <svg
                      key={j}
                      className="w-5 h-5 text-palm-gold"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-palm-brown/70 text-sm sm:text-base leading-relaxed grow italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="mt-6 pt-4 border-t border-palm-cream-dark">
                  <p className="font-(family-name:--font-playfair) font-bold text-palm-green-dark">
                    {testimonial.name}
                  </p>
                  <p className="text-palm-brown/50 text-xs mt-0.5">
                    {testimonial.event}
                  </p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
