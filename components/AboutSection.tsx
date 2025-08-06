"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { Sparkles, Target, Users, Trophy, ArrowRight } from "lucide-react";
import LetterGlitch from "./ui/LetterGlitch";
import LearnMoreModal from "./LearnMoreModal";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const features = [
    {
      icon: Target,
      title: "Sustainable Innovation",
      description: "Empowering ideas that shape the future",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Users,
      title: "Inter-University",
      description:
        "Connecting together the brightest minds from universities across Sri Lanka.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Trophy,
      title: "Premier Platform",
      description:
        "Present your idea to leading industry professional and pioneers.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Sparkles,
      title: "Investor Support",
      description:
        "Connect with investors and gain access to real funding opportunities.",
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section ref={ref} className="relative py-32 px-4 overflow-hidden">
      {/* Enhanced background with animated gradient orbs */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-cosmic-deep via-cosmic-navy/90 to-cosmic-blue/80" />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div className="shine-effect inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-8">
            <Sparkles className="w-4 h-4 inline  text-space-gradient-start" />
            <span className="text-white/80 font-medium">About hackX</span>
          </motion.div>

          <h2 className="font-orbitron text-4xl md:text-6xl lg:text-6xl font-bold mb-6 py-1">
            <motion.span
              className="inline-block bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent py-1"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Empowering
            </motion.span>{" "}
            <motion.span
              className="inline-block bg-gradient-to-r from-space-gradient-start to-space-gradient-end bg-clip-text text-transparent py-1"
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Innovation
            </motion.span>
          </h2>

          <motion.p
            className="text-xl text-white/60 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Where disruptive minds unlock extraordinary ventures.
          </motion.p>
        </motion.div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          {/* Text content with enhanced styling */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                className="relative"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="absolute -left-1 top-0 bottom-0 w-1 bg-gradient-to-b from-space-gradient-start to-space-gradient-end rounded-full" />
                <p className="text-lg text-gray-300 pl-6 leading-relaxed">
                  <span className="text-2xl font-bold bg-gradient-to-r from-space-gradient-start to-space-gradient-end bg-clip-text text-transparent">
                    hackX
                  </span>{" "}
                  is Sri Lanka's premier inter-university startup challenge,
                  organized by the{" "}
                  <span className="text-white font-semibold">IMSSA</span> of the
                  University of Kelaniya.
                </p>
              </motion.div>

              <motion.div
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
                whileHover={{ borderColor: "rgba(255,255,255,0.2)" }}
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-space-gradient-start to-space-gradient-end rounded-xl flex items-center justify-center">
                    <span className="text-xl font-bold text-slate-800">10</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Tenth Edition
                  </h3>
                </div>
                <p className="text-gray-400">
                  Celebrating a decade of fostering innovation with the theme{" "}
                  <span className="text-white font-medium">
                    "Sustainable Innovation"
                  </span>
                </p>
              </motion.div>

              <p className="text-gray-300 leading-relaxed">
                hackX 10.0 offers undergraduates a dedicated platform to present
                groundbreaking ideas to industry leaders, engage with potential
                investors, and turn their concepts into viable solutions.
              </p>
            </div>

            <motion.button
              className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-space-gradient-start to-space-gradient-end rounded-full font-medium text-slate-800 shadow-lg shadow-space-gradient-start/25 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsModalOpen(true)}
            >
              Learn More About hackX
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Enhanced visual element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative">
              {/* Floating elements */}
              {/* <motion.div
                className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl opacity-20 blur-xl"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl opacity-20 blur-xl"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              /> */}

              {/* Main card */}
              <motion.div
                className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/20 overflow-hidden"
                whileHover={{ borderColor: "rgba(255,255,255,0.3)" }}
              >
                {/* Inner glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-space-gradient-start/20 to-space-gradient-end/20 blur-3xl" />

                <div className="relative text-center space-y-6">
                  <motion.div
                    className="flex justify-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <Image
                      src="/images/logo.webp"
                      alt="hackX 10.0 Logo"
                      width={200}
                      height={120}
                      className="object-contain"
                    />
                  </motion.div>
                  <div className="space-y-2">
                    <p className="text-2xl font-semibold bg-gradient-to-r from-space-gradient-start to-space-gradient-end bg-clip-text text-transparent">
                      A Decade of Innovation
                    </p>
                    <p className="text-white/60">2016 - 2025</p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10">
                    <div>
                      <p className="text-2xl sm:text-3xl font-bold text-white">
                        5000+
                      </p>
                      <p className="text-sm text-white/60">Participants</p>
                    </div>
                    <div>
                      <p className="text-2xl sm:text-3xl font-bold text-white">
                        50+
                      </p>
                      <p className="text-sm text-white/60">Universities</p>
                    </div>
                    <div>
                      <p className="text-2xl sm:text-3xl font-bold text-white">
                        20+
                      </p>
                      <p className="text-sm text-white/60">Startups Launched</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced features grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 h-full overflow-hidden transition-all duration-300 group-hover:border-white/20">
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                <div className="relative w-14 h-14 rounded-lg bg-gradient-to-br from-space-gradient-start/20 to-space-gradient-end/20 flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-space-gradient-start" />
                </div>

                <h3 className="font-orbitron text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative corner accent */}
                <div
                  className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${feature.color} opacity-5 rounded-bl-3xl`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Learn More Modal */}
      <LearnMoreModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
