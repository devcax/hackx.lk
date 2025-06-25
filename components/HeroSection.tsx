"use client";
import { motion } from "framer-motion";
import { ChevronDown, Star } from "lucide-react";

export default function HeroSection() {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-cosmic-blue/40 via-cosmic-navy/70 to-cosmic-deep">
      <div className="absolute inset-0 z-0">
        {[...Array(60)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute rounded-full bg-white/70"
            initial={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5,
              scale: Math.random() * 0.6,
            }}
            style={{
              width: `${Math.random() * 1.5 + 0.5}px`,
              height: `${Math.random() * 1.5 + 0.5}px`,
            }}
            animate={{
              opacity: [0.1, 0.7, 0.1],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>
      {/* Main content */}
      <div className="relative z-10 w-full flex-1 flex items-center justify-center px-4">
        <div className="text-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <motion.div
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-space-gradient-start/30 bg-cosmic-navy/50 backdrop-blur-sm"
              whileHover={{ scale: 1.05, borderColor: "#D6DDE6" }}
              transition={{ duration: 0.3 }}
            >
              <Star className="w-4 h-4 text-space-gradient-start" />
              <span className="text-space-gradient-start font-medium">
                The Legacy Continues...
              </span>
            </motion.div>
          </motion.div>

          {/* Main title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-orbitron text-6xl md:text-8xl lg:text-9xl font-bold mb-6 flex items-baseline justify-center gap-4"
          >
            <span
              style={{
                background:
                  "linear-gradient(135deg, #D6DDE6 0%, #AAB6C2 50%, #FFFFFF 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              hackX
            </span>
            <motion.span
              className="text-4xl md:text-5xl lg:text-6xl"
              style={{
                background:
                  "linear-gradient(135deg, #D6DDE6 0%, #AAB6C2 50%, #FFFFFF 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              animate={{
                textShadow: [
                  "0 0 20px rgba(214, 221, 230, 0.5)",
                  "0 0 40px rgba(214, 221, 230, 0.8)",
                  "0 0 20px rgba(214, 221, 230, 0.5)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              10.0
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-4 mb-12"
          >
            <h2 className="font-exo text-2xl md:text-4xl lg:text-5xl font-light text-space-gradient-start">
              The Inter-University Startup Challenge
            </h2>
            <p className="font-rajdhani text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Sustainable Innovation • Groundbreaking Ideas • Future of Sri
              Lankan Startups
            </p>
          </motion.div>

          {/* Coming Soon Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.div
              className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-cosmic-navy to-cosmic-blue border border-space-gradient-start/40 backdrop-blur-md"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(214, 221, 230, 0.3)",
                  "0 0 40px rgba(214, 221, 230, 0.6)",
                  "0 0 20px rgba(214, 221, 230, 0.3)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="font-orbitron text-xl font-semibold text-white">
                COMING SOON
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - fixed position from bottom */}
      <div className="relative z-10 pb-8">
        <motion.button
          onClick={scrollToNext}
          className="text-space-gradient-start hover:text-white transition-colors duration-300"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{ duration: 2, repeat: Infinity }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Scroll to next section"
        >
          <ChevronDown size={32} />
        </motion.button>
      </div>

      {/* Gradient to blend with next section */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-cosmic-deep to-transparent pointer-events-none z-10" />

      {/* Optional: Visual alignment guide (remove in production) */}
      {/* <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-px h-full bg-red-500/20"></div>
      </div> */}
    </section>
  );
}
