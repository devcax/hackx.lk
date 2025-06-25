"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  FileText,
  Users,
  Clock,
  Target,
  BookOpen,
  AlertCircle,
  ChevronRight,
  Download,
  Shield,
  Award,
} from "lucide-react";

export default function CompetitionDetails() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const details = [
    {
      icon: Users,
      title: "Team Composition",
      description:
        "Teams of 3-5 undergraduate students from any university in Sri Lanka",
      highlight: "3-5 members",
    },
    {
      icon: Target,
      title: "Focus Area",
      description:
        "Sustainable Innovation with real-world impact and commercial viability",
      highlight: "Sustainability",
    },
    {
      icon: Clock,
      title: "Duration",
      description: "8-week intensive program from registration to grand finale",
      highlight: "8 weeks",
    },
    {
      icon: BookOpen,
      title: "Mentorship",
      description:
        "Access to industry experts, successful entrepreneurs, and academic advisors",
      highlight: "Expert guidance",
    },
  ];

  const requirements = [
    {
      category: "Eligibility",
      items: [
        "All team members must be currently enrolled undergraduate students",
        "Teams must be available for the entire 8-week program duration",
      ],
    },
    {
      category: "Innovation",
      items: [
        "Ideas must focus on sustainable innovation and environmental impact",
        "Original ideas only - no plagiarism or copying from existing solutions",
      ],
    },
    {
      category: "Submission",
      items: [
        "Teams must submit a comprehensive business plan and prototype",
        "Participants must attend all mandatory sessions and workshops",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section ref={ref} className="relative py-24 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cosmic-blue/80 via-cosmic-navy/90 to-cosmic-deep" />
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-[10rem] left-10 w-72 h-72 bg-space-gradient-start/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-space-gradient-end/10 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 25, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cosmic-navy/30 border border-space-gradient-start/20 backdrop-blur-md mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <FileText className="w-4 h-4 text-space-gradient-start" />
            <span className="text-space-gradient-start text-sm font-medium tracking-wide uppercase">
              Competition Details
            </span>
          </motion.div>

          <h2 className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-text-gradient bg-clip-text text-transparent">
            Rules & Guidelines
          </h2>

          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Everything you need to know to participate in hackX 10.0
          </p>
        </motion.div>

        {/* Key Details - Horizontal Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {details.map((detail, index) => (
            <motion.div key={detail.title} variants={itemVariants}>
              <div className="relative h-full bg-cosmic-navy/40 backdrop-blur-md border border-space-gradient-start/10 rounded-xl p-6 hover:border-space-gradient-start/20 transition-all duration-300 group overflow-hidden">
                {/* Corner glow */}
                <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-br from-space-gradient-start/50 to-transparent rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-2xl"></div>

                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-space-gradient-start/20 to-space-gradient-end/20 flex items-center justify-center">
                      <detail.icon className="w-6 h-6 text-space-gradient-start" />
                    </div>
                    <span className="text-xs font-medium text-space-gradient-start/70 uppercase tracking-wider">
                      {detail.highlight}
                    </span>
                  </div>
                  <h3 className="font-orbitron text-lg font-semibold text-white mb-2">
                    {detail.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {detail.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content - Bento Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Requirements Section - Takes 2 columns */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="h-full bg-cosmic-navy/40 backdrop-blur-md border border-space-gradient-start/10 rounded-xl p-8 hover:border-space-gradient-start/20 transition-all duration-300">
              <div className="flex items-center gap-3 mb-8">
                <h3 className="font-orbitron text-2xl font-bold text-white">
                  Eligibility Requirements
                </h3>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {requirements.map((section, index) => (
                  <motion.div
                    key={section.category}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  >
                    <div className="mb-4">
                      <h4 className="text-space-gradient-start font-semibold text-sm uppercase tracking-wider mb-3">
                        {section.category}
                      </h4>
                      <div className="space-y-3">
                        {section.items.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2 group"
                          >
                            <ChevronRight className="w-4 h-4 text-space-gradient-start/60 mt-0.5 flex-shrink-0 group-hover:text-space-gradient-start group-hover:translate-x-1 transition-all duration-200" />
                            <p className="text-gray-300 text-sm leading-relaxed">
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Download Section - Takes 1 column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="lg:col-span-1"
          >
            <div className="h-full bg-gradient-to-br from-cosmic-navy/60 to-cosmic-blue/40 backdrop-blur-md border border-space-gradient-start/20 rounded-xl p-8 relative overflow-hidden flex flex-col">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-space-gradient-start/10 to-transparent rounded-full blur-3xl" />

              <div className="relative flex-grow flex flex-col">
                <div className="w-16 h-16 bg-gradient-to-br from-space-gradient-start to-space-gradient-end rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <FileText className="w-8 h-8 text-cosmic-deep" />
                </div>

                <h3 className="font-orbitron text-2xl font-bold text-white mb-4 text-center">
                  Complete Rulebook
                </h3>

                <p className="text-gray-300 mb-8 leading-relaxed text-center">
                  Download the guidelines document for detailed competition
                  rules, judging criteria, and submission requirements.
                </p>

                <div className="mt-auto space-y-4">
                  <motion.button
                    className="group flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-space-gradient-start to-space-gradient-end text-cosmic-deep font-semibold rounded-xl hover:shadow-lg transition-all duration-300 w-full justify-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Download className="w-5 h-5" />
                    <span>Download PDF</span>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Info Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12"
        >
          <div className="bg-gradient-to-r from-space-gradient-start/10 to-space-gradient-end/10 backdrop-blur-md border border-space-gradient-start/20 rounded-xl p-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <Award className="w-8 h-8 text-space-gradient-start" />
                <div>
                  <h4 className="font-semibold text-white">Need Help?</h4>
                  <p className="text-sm text-gray-300">
                    Contact our support team for any questions about the
                    competition rules
                  </p>
                </div>
              </div>
              <button className="text-space-gradient-start font-medium hover:text-white transition-colors duration-200 flex items-center gap-2">
                Contact Our HackX Team
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
