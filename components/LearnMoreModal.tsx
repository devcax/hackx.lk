"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X, Users, Trophy, Target, Award } from "lucide-react";
import Image from "next/image";

interface LearnMoreModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// A helper component for the timeline line and dot
const TimelineItemDecorator = () => (
  <div className="absolute left-4 top-4 -ml-[1px] mt-2 h-full w-0.5 bg-space-gradient-start/30">
    <div className="absolute left-1/2 -ml-[5px] h-3 w-3 rounded-full bg-space-gradient-start"></div>
  </div>
);

export default function LearnMoreModal({
  isOpen,
  onClose,
}: LearnMoreModalProps) {
  const milestones = [
    {
      year: "2016",
      title: "First Edition",
      description: "hackX launched as Sri Lanka's premier startup challenge.",
    },
    {
      year: "2018",
      title: "National Recognition",
      description: "Became the most sought-after inter-university event.",
    },
    {
      year: "2020",
      title: "Virtual Innovation",
      description: "Adapted to digital format, reaching a wider audience.",
    },
    {
      year: "2022",
      title: "Industry Partnerships",
      description: "Established strong connections with leading companies.",
    },
    {
      year: "2024",
      title: "Global Reach",
      description: "International mentors and investors joined the program.",
    },
    {
      year: "2025",
      title: "Decade of Innovation",
      description: "hackX 10.0 focuses on Sustainable Innovation.",
    },
  ];

  const highlights = [
    {
      icon: Users,
      title: "5000+ Participants",
      description: "From 50+ universities across Sri Lanka.",
    },
    {
      icon: Trophy,
      title: "20+ Startups Born",
      description: "Successful ventures launched through hackX.",
    },
    {
      icon: Award,
      title: "₹10M+ Investments",
      description: "Total funding raised by hackX alumni.",
    },
    {
      icon: Target,
      title: "Industry Leaders",
      description: "Top professionals as mentors and judges.",
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="relative w-full max-w-6xl max-h-[90vh] flex flex-col">
              <div className="bg-gradient-to-br from-cosmic-navy/95 to-cosmic-deep/95 backdrop-blur-xl border border-space-gradient-start/20 rounded-3xl shadow-2xl shadow-space-gradient-start/10 flex flex-col overflow-hidden">
                {/* Header */}
                <div className="relative md:px-8 border-b border-white/10 flex-shrink-0">
                  <div className="flex items-center gap-4">
                    <Image
                      src="/images/logo.webp"
                      alt="hackX Logo"
                      width={64}
                      height={64}
                      className="object-contain w-14 h-14 md:w-28 md:h-28"
                    />
                    <div>
                      <h2 className="font-orbitron text-3xl md:text-4xl font-bold bg-gradient-to-r from-space-gradient-start to-space-gradient-end bg-clip-text text-transparent">
                        hackX 10.0
                      </h2>
                      <p className="text-base md:text-lg text-white/70 mt-1">
                        Sri Lanka's Premier Inter-University Startup Challenge
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={onClose}
                    className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-200"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5 text-white" />
                  </button>
                </div>

                {/* Scrollable Content */}
                <div className="overflow-y-auto p-6 md:p-8">
                  <div className="space-y-12">
                    {/* About Section */}
                    <section>
                      <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="space-y-4">
                          <h3 className="font-orbitron text-2xl font-bold text-white">
                            About hackX
                          </h3>
                          <p className="text-gray-300 leading-relaxed">
                            hackX is organized by the Information Management
                            Students' Society (IMSSA) at the University of
                            Kelaniya. For a decade, we've been the catalyst for
                            innovation, connecting brilliant minds with industry
                            leaders and investors.
                          </p>
                          <p className="text-gray-300 leading-relaxed">
                            Our mission is to empower undergraduate students
                            across Sri Lanka to transform their innovative ideas
                            into viable, sustainable solutions that address
                            real-world challenges.
                          </p>
                        </div>
                        <div className="relative w-full h-auto aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                          {/* Corrected the image display */}
                          <Image
                            src="/images/mascot-face.webp"
                            alt="hackX Mascot"
                            layout="fill"
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
