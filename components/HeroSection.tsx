"use client";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const wordsArray = words.split(" ");
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      filter: "blur(10px)",
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={cn(className)}
    >
      {wordsArray.map((word, idx) => (
        <motion.span key={word + idx} variants={child} className="mr-1.5">
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default function HeroSection() {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-b from-cosmic-blue/40 via-cosmic-navy/70 to-cosmic-deep">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-30"
        >
          <source src="/videos/hero.webm" type="video/webm" />
        </video>
        {/* Video overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-cosmic-blue/60 via-cosmic-navy/70 to-cosmic-deep/80" />
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column: Text Content */}
          <div className="text-left">
            {/* Main title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="font-orbitron text-6xl md:text-8xl lg:text-9xl font-bold mb-6 flex items-baseline justify-start gap-4"
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
                className="text-3xl md:text-5xl"
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
            <div className="space-y-4 mb-12">
              <TextGenerateEffect
                words="Startup Challenge"
                className="font-ethnocentric text-2xl md:text-4xl font-light text-space-gradient-start"
              />
              {/* <TextGenerateEffect
                words="The Legacy Continues..."
                className="font-rajdhani text-lg md:text-2xl text-gray-300 leading-relaxed"
              /> */}
            </div>

            {/* Coming Soon Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.div
                className="inline-block px-10 py-5 rounded-full bg-gradient-to-r from-cosmic-navy to-cosmic-blue border border-space-gradient-start/40 backdrop-blur-md"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(214, 221, 230, 0.3)",
                    "0 0 40px rgba(214, 221, 230, 0.6)",
                    "0 0 20px rgba(214, 221, 230, 0.3)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="font-orbitron text-sm font-semibold text-white">
                  COMING SOON
                </span>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column: Mascot Image */}
          <motion.div
            className="hidden md:flex items-center justify-center"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            style={{ paddingLeft: "200px" }}
          >
            <Image
              src="/images/mascott.webp"
              alt="HackX Mascot"
              width={400}
              height={400}
              className="filter grayscale hover:grayscale-0 transition-all duration-500 ease-in-out cursor-pointer"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - fixed position from bottom */}
      <motion.button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-space-gradient-start hover:text-white transition-colors duration-300 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Scroll to next section"
      >
        <ChevronDown size={40} />
      </motion.button>

      {/* Gradient to blend with next section */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-cosmic-deep to-transparent pointer-events-none z-10" />
    </section>
  );
}
