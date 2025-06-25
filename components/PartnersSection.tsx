"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Handshake } from "lucide-react";

export default function PartnersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const partners = [
    { name: "Google", logo: "https://logo.clearbit.com/google.com?size=200" },
    {
      name: "Microsoft",
      logo: "https://logo.clearbit.com/microsoft.com?size=200",
    },
    { name: "GitHub", logo: "https://logo.clearbit.com/github.com?size=200" },
    { name: "Vercel", logo: "https://logo.clearbit.com/vercel.com?size=200" },
    { name: "Stripe", logo: "https://logo.clearbit.com/stripe.com?size=200" },
    { name: "Notion", logo: "https://logo.clearbit.com/notion.so?size=200" },
    { name: "Figma", logo: "https://logo.clearbit.com/figma.com?size=200" },
    { name: "Slack", logo: "https://logo.clearbit.com/slack.com?size=200" },
  ];
  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
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

      <div className="relative z-10 max-w-7xl mx-auto px-4">
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
            <Handshake className="w-4 h-4 text-space-gradient-start" />
            <span className="text-space-gradient-start text-sm font-medium tracking-wide uppercase">
              Our Partners
            </span>
          </motion.div>

          <h2 className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-text-gradient bg-clip-text text-transparent">
            Powering the Future Together
          </h2>

          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            We are proud to collaborate with a diverse network of
            forward-thinking organizations and industry leaders.
          </p>
        </motion.div>

        {/* Partners Logo Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.05 }}
              className="group relative"
            >
              <div className="relative flex items-center justify-center h-28 p-6 bg-cosmic-navy/30 backdrop-blur-sm border border-white/10 rounded-2xl transition-all duration-300 hover:bg-cosmic-navy/50 hover:border-space-gradient-start/50">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain transition-all duration-300 filter grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-cosmic-deep/60 rounded-2xl group-hover:bg-transparent transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
