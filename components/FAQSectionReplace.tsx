"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqData = [
  {
    question: "What is hackX 10.0?",
    answer:
      "hackX 10.0 is the tenth iteration of the premier inter-university hackathon organized by the IEEE Student Branch of the University of Colombo School of Computing.",
  },
  {
    question: "Who can participate in hackX 10.0?",
    answer:
      "The competition is open to undergraduate students from all universities across Sri Lanka. Teams should consist of 3-4 members.",
  },
  {
    question: "What is the theme for this year's hackathon?",
    answer:
      "The theme for hackX 10.0 will be announced at the opening ceremony. Participants are encouraged to think creatively and develop innovative solutions to real-world problems.",
  },
  {
    question: "What are the prizes for the winners?",
    answer:
      "There is a significant prize pool for the top three teams. The 1st place team will receive LKR 150,000, 2nd place will receive LKR 100,000, and 3rd place will receive LKR 75,000. There will also be other awards and swags.",
  },
  {
    question: "How long is the competition?",
    answer:
      "hackX 10.0 is a 24-hour hackathon where teams will have to develop their solution from scratch.",
  },
  {
    question: "When and where will hackX 10.0 take place?",
    answer:
      "The event date and venue will be announced soon. Please follow our social media channels and website for the latest updates.",
  },
];

const FAQSectionReplace = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-b from-cosmic-deep via-cosmic-navy/90 to-cosmic-blue/80">
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-8">
            <HelpCircle className="w-4 h-4 inline text-space-gradient-start" />
            <span className="text-space-gradient-start font-medium">
              Frequently Asked Questions
            </span>
          </div>
          <h2 className="font-orbitron text-4xl md:text-6xl font-bold mb-6 bg-text-gradient bg-clip-text text-transparent py-1">
            HAVE QUESTIONS?
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Find answers to common questions about hackX 10.0. If you can't find
            your answer here, feel free to reach out to us.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-cosmic-navy/60 backdrop-blur-sm border border-space-gradient-start/20 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <span className="font-orbitron text-lg text-white">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-6 h-6 text-space-gradient-start" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-300">
                      <p>{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSectionReplace;
