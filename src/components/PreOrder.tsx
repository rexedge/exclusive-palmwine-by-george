"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

interface FormData {
  name: string;
  phone: string;
  whatsapp: string;
  email: string;
  eventType: string;
  eventDate: string;
  guestCount: string;
  packageInterest: string;
  message: string;
}

const eventTypes = [
  "Wedding",
  "Birthday Party",
  "Corporate Event",
  "Cultural Ceremony",
  "Burial/Funeral",
  "House Warming",
  "Baby Shower",
  "Other",
];

export default function PreOrder() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    whatsapp: "",
    email: "",
    eventType: "",
    eventDate: "",
    guestCount: "",
    packageInterest: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [whatsappSameAsPhone, setWhatsappSameAsPhone] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "phone" && whatsappSameAsPhone ? { whatsapp: value } : {}),
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const whatsappNumber = whatsappSameAsPhone
      ? formData.phone
      : formData.whatsapp;

    const message = [
      `🌴 *NEW RESERVATION REQUEST*`,
      ``,
      `*Name:* ${formData.name}`,
      `*Phone:* ${formData.phone}`,
      `*WhatsApp:* ${whatsappNumber}`,
      `*Email:* ${formData.email || "Not provided"}`,
      `*Event Type:* ${formData.eventType}`,
      `*Event Date:* ${formData.eventDate}`,
      `*Guest Count:* ${formData.guestCount}`,
      `*Package Interest:* ${formData.packageInterest || "Not selected"}`,
      formData.message ? `*Message:* ${formData.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const waUrl = `https://wa.me/2348037640425?text=${encodeURIComponent(message)}`;

    // Brief delay for UX feedback
    await new Promise((resolve) => setTimeout(resolve, 800));
    console.log("Pre-order data:", formData);

    setIsSubmitting(false);
    setSubmitted(true);

    // Open WhatsApp with pre-filled message
    window.open(waUrl, "_blank");
  };

  const inputClass =
    "w-full px-4 py-3.5 rounded-xl bg-palm-cream/50 border-2 border-palm-cream-dark focus:border-palm-green focus:bg-palm-white outline-none transition-all duration-300 text-palm-brown text-sm placeholder:text-palm-brown/40";

  return (
    <section
      id="preorder"
      className="relative py-20 md:py-32 bg-palm-green-dark overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(196,150,44,0.1),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(196,150,44,0.08),transparent_50%)]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
        <ScrollReveal className="text-center mb-10 md:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full border border-palm-gold/20 bg-palm-gold/10 text-palm-gold text-xs tracking-[0.2em] uppercase font-medium mb-4">
            Reserve Now
          </span>
          <h2 className="font-(family-name:--font-playfair) text-3xl sm:text-4xl md:text-5xl font-bold text-palm-cream leading-tight">
            Book Your <span className="text-palm-gold italic">Palm Wine</span>{" "}
            Supply
          </h2>
          <p className="text-palm-cream/50 mt-4 max-w-lg mx-auto text-sm sm:text-base">
            Tell us about your event and we&apos;ll get back to you within 24
            hours with a custom quote. No commitment required.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-palm-white rounded-3xl shadow-2xl shadow-black/10 p-6 sm:p-10 border border-palm-gold/10"
              >
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-palm-green-dark text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className={inputClass}
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-palm-green-dark text-sm font-medium mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="08012345678"
                      className={inputClass}
                    />
                  </div>

                  {/* WhatsApp */}
                  <div>
                    <label className="block text-palm-green-dark text-sm font-medium mb-2">
                      WhatsApp Number *
                    </label>
                    <label className="flex items-center gap-2 mb-2 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={whatsappSameAsPhone}
                        onChange={(e) => {
                          setWhatsappSameAsPhone(e.target.checked);
                          if (e.target.checked) {
                            setFormData((prev) => ({
                              ...prev,
                              whatsapp: prev.phone,
                            }));
                          }
                        }}
                        className="w-4 h-4 rounded border-palm-gold/30 text-palm-green accent-palm-green focus:ring-palm-gold/40"
                      />
                      <span className="text-palm-brown/60 text-xs">
                        Same as phone number
                      </span>
                    </label>
                    <input
                      type="tel"
                      name="whatsapp"
                      required
                      value={
                        whatsappSameAsPhone ? formData.phone : formData.whatsapp
                      }
                      onChange={handleChange}
                      disabled={whatsappSameAsPhone}
                      placeholder="08012345678"
                      className={`${inputClass} ${whatsappSameAsPhone ? "opacity-60 cursor-not-allowed" : ""}`}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-palm-green-dark text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={inputClass}
                    />
                  </div>

                  {/* Event Type */}
                  <div>
                    <label
                      htmlFor="eventType"
                      className="block text-palm-green-dark text-sm font-medium mb-2"
                    >
                      Event Type *
                    </label>
                    <select
                      id="eventType"
                      name="eventType"
                      required
                      value={formData.eventType}
                      onChange={handleChange}
                      className={`${inputClass} appearance-none cursor-pointer`}
                    >
                      <option value="">Select event type</option>
                      {eventTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Event Date */}
                  <div>
                    <label
                      htmlFor="eventDate"
                      className="block text-palm-green-dark text-sm font-medium mb-2"
                    >
                      Event Date *
                    </label>
                    <input
                      id="eventDate"
                      type="date"
                      name="eventDate"
                      required
                      value={formData.eventDate}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>

                  {/* Guest Count */}
                  <div>
                    <label
                      htmlFor="guestCount"
                      className="block text-palm-green-dark text-sm font-medium mb-2"
                    >
                      Estimated Guest Count *
                    </label>
                    <select
                      id="guestCount"
                      name="guestCount"
                      required
                      value={formData.guestCount}
                      onChange={handleChange}
                      className={`${inputClass} appearance-none cursor-pointer`}
                    >
                      <option value="">Select range</option>
                      <option value="20-50">20 – 50 guests</option>
                      <option value="50-100">50 – 100 guests</option>
                      <option value="100-200">100 – 200 guests</option>
                      <option value="200-500">200 – 500 guests</option>
                      <option value="500+">500+ guests</option>
                    </select>
                  </div>

                  {/* Package Interest */}
                  <div className="sm:col-span-2">
                    <label className="block text-palm-green-dark text-sm font-medium mb-3">
                      Which package interests you?
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {["Starter", "Celebration", "Grand"].map((pkg) => (
                        <button
                          key={pkg}
                          type="button"
                          onClick={() =>
                            setFormData((prev) => ({
                              ...prev,
                              packageInterest: pkg,
                            }))
                          }
                          className={`p-3 rounded-xl border-2 text-sm font-medium transition-all duration-200 ${
                            formData.packageInterest === pkg
                              ? "border-palm-green bg-palm-green/5 text-palm-green-dark"
                              : "border-palm-cream-dark text-palm-brown/60 hover:border-palm-gold/30"
                          }`}
                        >
                          {pkg}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="sm:col-span-2">
                    <label className="block text-palm-green-dark text-sm font-medium mb-2">
                      Anything else we should know?
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your event, special requests, or questions..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className={`w-full mt-6 py-4 rounded-full font-bold text-base tracking-wide transition-all duration-300 ${
                    isSubmitting
                      ? "bg-palm-gold/50 text-palm-green-dark/50 cursor-wait"
                      : "bg-palm-gold text-palm-green-dark hover:bg-palm-gold-light shadow-lg shadow-palm-gold/20"
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        className="animate-spin w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Submit Your Reservation Request"
                  )}
                </motion.button>

                <p className="text-center text-palm-brown/40 text-xs mt-4">
                  No payment required. We&apos;ll contact you to discuss details
                  and pricing.
                </p>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="bg-palm-white rounded-3xl shadow-2xl shadow-black/10 p-8 sm:p-14 text-center border border-palm-gold/10"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    delay: 0.2,
                    type: "spring",
                    stiffness: 200,
                  }}
                  className="w-24 h-24 mx-auto mb-6 rounded-full bg-palm-green/10 flex items-center justify-center"
                >
                  <span className="text-5xl">🌴</span>
                </motion.div>

                <h3 className="font-(family-name:--font-playfair) text-2xl sm:text-3xl font-bold text-palm-green-dark mb-3">
                  Reservation Received!
                </h3>
                <p className="text-palm-brown/60 max-w-md mx-auto mb-2">
                  Thank you, <strong>{formData.name}</strong>! We&apos;ve
                  received your request for a{" "}
                  <strong>{formData.eventType}</strong>.
                </p>
                <p className="text-palm-brown/50 max-w-md mx-auto mb-8">
                  Our team will contact you within 24 hours to discuss your
                  event details and provide a custom quote.
                </p>

                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-palm-green/5 text-palm-green text-sm font-medium">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  We&apos;ll reach you on WhatsApp at{" "}
                  {formData.whatsapp || formData.phone}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </ScrollReveal>
      </div>
    </section>
  );
}
