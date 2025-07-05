"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { MessageCircle, Send, Bot, User, RefreshCw } from "lucide-react";

export default function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const faqQuestions = [
    {
      question: "What is hackX 10.0?",
      answer:
        "hackX 10.0 is the tenth edition of Sri Lanka's premier inter-university startup challenge, organized by IMSSA. It focuses on 'Sustainable Innovation' and provides a platform for undergraduates to present their innovative ideas to industry experts and investors.",
    },
    {
      question: "Who can participate?",
      answer:
        "All currently enrolled undergraduate students from any university in Sri Lanka can participate. Teams should consist of 3-5 members, and all team members must be undergraduate students.",
    },
    {
      question: "What's the theme for this year?",
      answer:
        "The theme for hackX 10.0 is 'Sustainable Innovation'. We're looking for groundbreaking ideas that address environmental challenges and promote sustainability while maintaining commercial viability.",
    },
    {
      question: "What are the prizes?",
      answer:
        "Winners will receive cash prizes: 1st Place - LKR 125,000, 2nd Place - LKR 75,000, 3rd Place - LKR 50,000. Additional benefits include incubation support, mentorship programs, and investor connections. Special recognition awards are also available.",
    },
    {
      question: "How long is the competition?",
      answer:
        "The competition runs for 8 weeks, starting from idea submission through to the grand finale. This includes initial selection, mentoring sessions, pitch development, and final presentations.",
    },
    {
      question: "When will hackX 10.0 take place?",
      answer:
        "hackX 10.0 is coming soon! Stay tuned for the official announcement of registration dates and the complete timeline. Follow our social media channels for the latest updates.",
    },
  ];

  const initialBotMessage = {
    type: "bot" as const,
    message:
      "Hello! I'm the hackX 10.0 AI assistant. Feel free to ask me anything, or choose from one of the common questions below.",
    timestamp: new Date(),
    suggestions: faqQuestions,
  };

  const [chatMessages, setChatMessages] = useState<
    Array<{
      type: "user" | "bot";
      message: string;
      timestamp: Date;
      suggestions?: typeof faqQuestions;
    }>
  >([initialBotMessage]);

  const handleQuestionClick = (index: number) => {
    const question = faqQuestions[index];

    // Remove suggestions from all previous messages
    const updatedHistory = chatMessages.map((msg) => {
      const { suggestions, ...rest } = msg;
      return rest;
    });

    const newUserMessage = {
      type: "user" as const,
      message: question.question,
      timestamp: new Date(),
    };

    setChatMessages([...updatedHistory, newUserMessage]);

    // Prepare next suggestions. Filter out the current question, then take 3 random ones.
    const nextSuggestions = faqQuestions
      .filter((_, i) => i !== index)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);

    // Add bot response after a short delay
    setTimeout(() => {
      const botResponse = {
        type: "bot" as const,
        message: question.answer,
        timestamp: new Date(),
        suggestions: nextSuggestions,
      };
      setChatMessages((prev) => [...prev, botResponse]);
    }, 800);
  };

  const clearChat = () => {
    setChatMessages([initialBotMessage]);
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chatMessages]);

  return (
    <section ref={ref} className="relative py-24 px-4 overflow-hidden ">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cosmic-blue/80 via-cosmic-navy/90 to-cosmic-deep" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div className="shine-effect inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-8">
            <MessageCircle className="w-4 h-4 inline  text-space-gradient-start" />
            <span className="text-space-gradient-start font-medium">
              FAQ Assistant
            </span>
          </motion.div>

          <h2 className="font-orbitron text-4xl md:text-6xl font-bold mb-6 bg-text-gradient bg-clip-text text-transparent py-1">
            Get Your Answers Instantly
          </h2>

          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Have questions about hackX 10.0?
          </p>
        </motion.div>

        {/* Unified Chat Interface */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-cosmic-navy/60 backdrop-blur-sm border border-space-gradient-start/20 rounded-2xl overflow-hidden shadow-2xl shadow-black/25">
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-space-gradient-start/10 to-space-gradient-end/10 p-4 border-b border-space-gradient-start/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <motion.div className="w-10 h-10 bg-gradient-to-br from-space-gradient-start to-space-gradient-end rounded-full flex items-center justify-center">
                    <Bot className="w-5 h-5 text-cosmic-deep" />
                  </motion.div>
                  <div>
                    <h4 className="font-orbitron font-semibold text-white">
                      Mascott
                    </h4>
                    <p className="text-space-gradient-start text-sm flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                      Online
                    </p>
                  </div>
                </div>

                <motion.button
                  onClick={clearChat}
                  className="px-3 py-1.5 text-xs bg-cosmic-blue/50 text-gray-300 rounded-full hover:bg-space-gradient-start/20 hover:text-white transition-all duration-300 flex items-center gap-1.5"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <RefreshCw size={12} />
                  New Chat
                </motion.button>
              </div>
            </div>

            {/* Chat Messages */}
            <div
              ref={chatContainerRef}
              className="h-96 overflow-y-auto p-4 space-y-4 custom-scrollbar"
            >
              <AnimatePresence>
                {chatMessages.map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    layout
                    className={`flex gap-3 ${
                      message.type === "user" ? "flex-row-reverse" : "flex-row"
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        message.type === "bot"
                          ? "bg-gradient-to-br from-space-gradient-start to-space-gradient-end"
                          : "bg-cosmic-blue"
                      }`}
                    >
                      {message.type === "bot" ? (
                        <Bot className="w-4 h-4 text-cosmic-deep" />
                      ) : (
                        <User className="w-4 h-4 text-white" />
                      )}
                    </div>

                    <div
                      className={`max-w-md px-4 py-3 rounded-2xl ${
                        message.type === "bot"
                          ? "bg-cosmic-blue/50 text-gray-200 rounded-bl-sm"
                          : "bg-space-gradient-start/20 text-white rounded-br-sm"
                      }`}
                    >
                      <p className="text-sm leading-relaxed whitespace-pre-wrap">
                        {message.message}
                      </p>
                      {message.suggestions && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {message.suggestions.map((faq, faqIndex) => (
                            <motion.button
                              key={faqIndex}
                              onClick={() => handleQuestionClick(faqIndex)}
                              className="px-3 py-1.5 bg-cosmic-blue/40 text-space-gradient-start text-xs font-medium rounded-full border border-space-gradient-start/30 hover:bg-space-gradient-start/20 transition-all"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              {faq.question}
                            </motion.button>
                          ))}
                        </div>
                      )}
                      <p className="text-xs opacity-60 mt-2 text-right">
                        {message.timestamp.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Chat Input */}
            <div className="p-4 border-t border-space-gradient-start/20 bg-cosmic-navy/50">
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  placeholder="Ask a question or select from above..."
                  disabled
                  className="flex-1 bg-cosmic-blue/30 border border-space-gradient-start/20 rounded-full px-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-space-gradient-start/40 transition-all duration-300"
                />
                <motion.button
                  disabled
                  className="w-10 h-10 bg-gradient-to-br from-space-gradient-start to-space-gradient-end rounded-full flex items-center justify-center transition-transform duration-300 opacity-50 cursor-not-allowed"
                >
                  <Send className="w-4 h-4 text-cosmic-deep" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Custom scrollbar styles */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(31, 58, 77, 0.3);
          border-radius: 3px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(214, 221, 230, 0.3);
          border-radius: 3px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(214, 221, 230, 0.5);
        }
      `}</style>
    </section>
  );
}
