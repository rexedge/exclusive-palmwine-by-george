"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

interface SurveyAnswer {
  question: number;
  answer: string;
}

const questions = [
  {
    id: 1,
    question: "How often do you attend or host events?",
    options: ["Monthly", "Every 2-3 months", "A few times a year", "Rarely"],
    icon: "📅",
  },
  {
    id: 2,
    question: "Have you ever served palm wine at an event?",
    options: [
      "Yes, it was a hit!",
      "Yes, but sourcing was difficult",
      "No, but I'd love to",
      "No, not interested",
    ],
    icon: "🍷",
  },
  {
    id: 3,
    question:
      "What's your biggest challenge when sourcing palm wine for events?",
    options: [
      "Finding fresh, quality palm wine",
      "Getting it delivered on time",
      "Not knowing where to buy",
      "Packaging & presentation",
      "I've never tried to source it",
    ],
    icon: "🤔",
  },
  {
    id: 4,
    question:
      "How much would you budget for palm wine at an event of 100 guests?",
    options: [
      "₦10,000 – ₦30,000",
      "₦30,000 – ₦60,000",
      "₦60,000 – ₦100,000",
      "₦100,000+",
      "Not sure yet",
    ],
    icon: "💰",
  },
  {
    id: 5,
    question: "What would make you choose a premium palm wine service?",
    options: [
      "Guaranteed freshness",
      "Beautiful presentation & setup",
      "Reliable delivery",
      "Good price for quantity",
      "All of the above",
    ],
    icon: "⭐",
  },
];

export default function Survey() {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<SurveyAnswer[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [surveyWhatsapp, setSurveyWhatsapp] = useState("");
  const [whatsappSubmitted, setWhatsappSubmitted] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const progress = (currentQ / questions.length) * 100;

  const handleSelect = (answer: string) => {
    setSelectedOption(answer);
  };

  const handleNext = () => {
    if (!selectedOption) return;

    const newAnswers = [
      ...answers.filter((a) => a.question !== questions[currentQ].id),
      { question: questions[currentQ].id, answer: selectedOption },
    ];
    setAnswers(newAnswers);
    setSelectedOption(null);

    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      setSubmitted(true);
      // In production, send answers to an API/database
      console.log("Survey answers:", newAnswers);
    }
  };

  const handleBack = () => {
    if (currentQ > 0) {
      setCurrentQ(currentQ - 1);
      const prevAnswer = answers.find(
        (a) => a.question === questions[currentQ - 1].id,
      );
      setSelectedOption(prevAnswer?.answer || null);
    }
  };

  return (
    <section id="survey" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-palm-cream to-palm-cream-dark" />
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-palm-gold/20 to-transparent" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6">
        <ScrollReveal className="text-center mb-10 md:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full border border-palm-green/20 bg-palm-green/5 text-palm-green text-xs tracking-[0.2em] uppercase font-medium mb-4">
            Quick Survey
          </span>
          <h2 className="font-(family-name:--font-playfair) text-3xl sm:text-4xl md:text-5xl font-bold text-palm-green-dark leading-tight">
            Help Us <span className="text-palm-gold italic">Serve</span> You
            Better
          </h2>
          <p className="text-palm-brown/60 mt-4 max-w-lg mx-auto text-sm sm:text-base">
            Answer 5 quick questions so we can tailor our service to what you
            actually need. Takes less than a minute!
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="bg-palm-white rounded-3xl shadow-xl shadow-palm-green/5 border border-palm-gold/10 overflow-hidden">
            {!submitted ? (
              <>
                {/* Progress bar */}
                <div className="h-1.5 bg-palm-cream-dark">
                  <motion.div
                    className="h-full bg-linear-to-r from-palm-green to-palm-gold rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                </div>

                <div className="p-6 sm:p-10">
                  {/* Question counter */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-palm-brown/50 text-sm">
                      Question {currentQ + 1} of {questions.length}
                    </span>
                    <span className="text-2xl">{questions[currentQ].icon}</span>
                  </div>

                  {/* Question */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentQ}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -30 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="font-(family-name:--font-playfair) text-xl sm:text-2xl font-bold text-palm-green-dark mb-6">
                        {questions[currentQ].question}
                      </h3>

                      <div className="space-y-3">
                        {questions[currentQ].options.map((option) => (
                          <motion.button
                            key={option}
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                            onClick={() => handleSelect(option)}
                            className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 text-sm sm:text-base ${
                              selectedOption === option
                                ? "border-palm-green bg-palm-green/5 text-palm-green-dark font-medium"
                                : "border-palm-cream-dark hover:border-palm-gold/30 text-palm-brown/70"
                            }`}
                          >
                            <span className="flex items-center gap-3">
                              <span
                                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${
                                  selectedOption === option
                                    ? "border-palm-green bg-palm-green"
                                    : "border-palm-brown/30"
                                }`}
                              >
                                {selectedOption === option && (
                                  <motion.svg
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="w-3 h-3 text-white"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                                  </motion.svg>
                                )}
                              </span>
                              {option}
                            </span>
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Navigation */}
                  <div className="flex items-center justify-between mt-8">
                    <button
                      onClick={handleBack}
                      disabled={currentQ === 0}
                      className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                        currentQ === 0
                          ? "text-palm-brown/30 cursor-not-allowed"
                          : "text-palm-brown hover:text-palm-green"
                      }`}
                    >
                      ← Back
                    </button>
                    <button
                      onClick={handleNext}
                      disabled={!selectedOption}
                      className={`px-8 py-3 rounded-full text-sm font-bold tracking-wide transition-all duration-300 ${
                        selectedOption
                          ? "bg-palm-green text-palm-cream hover:bg-palm-green-light shadow-lg shadow-palm-green/20 hover:scale-105"
                          : "bg-palm-brown/20 text-palm-brown/40 cursor-not-allowed"
                      }`}
                    >
                      {currentQ === questions.length - 1 ? "Submit" : "Next →"}
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="p-8 sm:p-12 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: 0.2,
                    type: "spring",
                    stiffness: 200,
                  }}
                  className="w-20 h-20 mx-auto mb-6 rounded-full bg-palm-green/10 flex items-center justify-center"
                >
                  <span className="text-4xl">🎉</span>
                </motion.div>
                <h3 className="font-(family-name:--font-playfair) text-2xl sm:text-3xl font-bold text-palm-green-dark mb-3">
                  Thank You!
                </h3>
                <p className="text-palm-brown/60 max-w-md mx-auto mb-6">
                  Your feedback helps us build the perfect palm wine experience
                  for your events. You&apos;re helping shape something special!
                </p>

                {!whatsappSubmitted ? (
                  <div className="max-w-sm mx-auto mb-6">
                    <p className="text-palm-green-dark text-sm font-medium mb-2">
                      Drop your WhatsApp number &amp; we&apos;ll keep you
                      updated!
                    </p>
                    <div className="flex gap-2">
                      <input
                        type="tel"
                        value={surveyWhatsapp}
                        onChange={(e) => setSurveyWhatsapp(e.target.value)}
                        placeholder="08012345678"
                        className="flex-1 px-4 py-3 rounded-xl border border-palm-gold/20 bg-palm-white text-palm-green-dark text-sm focus:outline-none focus:ring-2 focus:ring-palm-gold/40 focus:border-palm-gold/40 transition-all"
                        aria-label="WhatsApp number"
                      />
                      <button
                        onClick={() => {
                          if (surveyWhatsapp.trim()) {
                            console.log(
                              "Survey WhatsApp:",
                              surveyWhatsapp,
                              "Answers:",
                              answers,
                            );
                            setWhatsappSubmitted(true);
                          }
                        }}
                        className="px-5 py-3 bg-palm-green text-palm-cream rounded-xl font-medium text-sm hover:bg-palm-green-dark transition-colors"
                      >
                        Send
                      </button>
                    </div>
                  </div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-palm-green/10 text-palm-green text-sm font-medium"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Saved! We&apos;ll reach out on WhatsApp
                  </motion.div>
                )}

                <a
                  href="#preorder"
                  className="inline-block bg-palm-gold text-palm-green-dark px-8 py-3.5 rounded-full font-bold hover:bg-palm-gold-light transition-all duration-300 hover:scale-105 shadow-lg shadow-palm-gold/20"
                >
                  Reserve for Your Next Event →
                </a>
              </motion.div>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
