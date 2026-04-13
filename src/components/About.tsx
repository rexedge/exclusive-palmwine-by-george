"use client";

import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background decorative */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-palm-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-palm-green/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <ScrollReveal className="text-center mb-12 md:mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full border border-palm-green/20 bg-palm-green/5 text-palm-green text-xs tracking-[0.2em] uppercase font-medium mb-4">
            Our Story
          </span>
          <h2 className="font-(family-name:--font-playfair) text-3xl sm:text-4xl md:text-5xl font-bold text-palm-green-dark leading-tight">
            Why <span className="text-palm-gold italic">Exclusive</span>{" "}
            Palmwine?
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left - Story */}
          <ScrollReveal direction="left" delay={0.2}>
            <div className="space-y-6">
              <p className="text-palm-brown text-base sm:text-lg leading-relaxed">
                Every celebration deserves a drink that carries the spirit of
                heritage.{" "}
                <strong className="text-palm-green-dark">
                  Exclusive Palmwine by George
                </strong>{" "}
                was born from a passion for preserving the rich tradition of palm
                wine — freshly tapped, naturally sweet, and delivered with
                premium care to your doorstep.
              </p>
              <p className="text-palm-brown/80 text-base sm:text-lg leading-relaxed">
                Whether it&apos;s a grand wedding, an intimate birthday, a
                corporate mixer, or a cultural celebration — we ensure your
                guests experience the authentic, refreshing taste of nature&apos;s
                finest brew.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                {[
                  { value: "100%", label: "Natural" },
                  { value: "24hr", label: "Fresh Tap" },
                  { value: "50+", label: "Events Ready" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="text-center p-4 rounded-2xl bg-palm-green/5 border border-palm-green/10"
                  >
                    <div className="font-(family-name:--font-playfair) text-2xl md:text-3xl font-bold text-palm-green">
                      {stat.value}
                    </div>
                    <div className="text-palm-brown/60 text-xs sm:text-sm mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right - Feature cards */}
          <div className="space-y-4">
            {[
              {
                icon: "🌴",
                title: "Freshly Tapped",
                desc: "Sourced directly from trusted palm wine tappers. No preservatives, no additives — just pure, natural sweetness.",
              },
              {
                icon: "🎉",
                title: "Event-Ready Packaging",
                desc: "From elegant kegs to branded calabash cups, we provide complete setup for any event size.",
              },
              {
                icon: "🚚",
                title: "Reliable Delivery",
                desc: "On-time delivery with cold chain integrity. Your palm wine arrives fresh and perfectly chilled.",
              },
              {
                icon: "✨",
                title: "Premium Experience",
                desc: "Optional palm wine bar setup with trained servers to give your guests an unforgettable experience.",
              },
            ].map((feature, i) => (
              <ScrollReveal key={feature.title} direction="right" delay={0.1 * i}>
                <div className="flex gap-4 p-4 sm:p-5 rounded-2xl bg-palm-white border border-palm-gold/10 hover:border-palm-gold/30 transition-all duration-300 hover:shadow-lg hover:shadow-palm-gold/5 group cursor-default">
                  <span className="text-2xl sm:text-3xl shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </span>
                  <div>
                    <h3 className="font-(family-name:--font-playfair) text-lg font-bold text-palm-green-dark mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-palm-brown/70 text-sm leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
