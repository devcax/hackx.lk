"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Users, Lightbulb, Trophy, Send, Star } from "lucide-react";

export default function TimelineSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const timelineData = [
    {
      phase: "Phase 1",
      title: "Idea Submission",
      description:
        "Submit your innovative startup ideas focusing on sustainable innovation. Teams can register and submit their initial concepts.",
      icon: Send,
      date: "Week 1-2",
      color: "from-blue-500 to-cyan-500",
    },
    {
      phase: "Phase 2",
      title: "Initial Selection",
      description:
        "Expert panel reviews submissions and selects the most promising ideas. Selected teams advance to the next phase.",
      icon: Star,
      date: "Week 3",
      color: "from-purple-500 to-pink-500",
    },
    {
      phase: "Phase 3",
      title: "Mentoring Sessions",
      description:
        "Selected teams receive guidance from industry experts and mentors to refine their business models and presentations.",
      icon: Users,
      date: "Week 4-5",
      color: "from-green-500 to-emerald-500",
    },
    {
      phase: "Phase 4",
      title: "Pitch Development",
      description:
        "Teams develop their final pitches with comprehensive business plans, market analysis, and prototype development.",
      icon: Lightbulb,
      date: "Week 6-7",
      color: "from-yellow-500 to-orange-500",
    },
    {
      phase: "Phase 5",
      title: "Grand Finale",
      description:
        "Final presentations to judges and investors. Winners receive prizes, funding opportunities, and industry recognition.",
      icon: Trophy,
      date: "Week 8",
      color: "from-red-500 to-rose-500",
    },
  ];

  return (
    <section ref={ref} className="relative py-24 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cosmic-blue/80 via-cosmic-navy/90 to-cosmic-deep" />

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-[15rem] right-10 w-96 h-96 bg-space-gradient-end/10 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 25, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-block px-6 py-2 rounded-full bg-cosmic-navy/50 border border-space-gradient-start/30 backdrop-blur-sm mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Calendar className="w-4 h-4 inline mr-2 text-space-gradient-start" />
            <span className="text-space-gradient-start font-medium">
              Competition Timeline
            </span>
          </motion.div>

          <h2 className="font-orbitron text-4xl md:text-6xl font-bold mb-6 bg-text-gradient bg-clip-text text-transparent">
            Journey to Innovation
          </h2>

          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Follow the path from idea to reality through our structured
            competition phases
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Central line */}
          <div className="absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-space-gradient-start/10 via-space-gradient-end/40 to-space-gradient-start/10" />

          <div className="space-y-4 md:space-y-0">
            {timelineData.map((item, index) => (
              <div
                key={item.phase}
                className={`flex items-center my-8 md:my-0 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Content Card */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="w-full md:w-5/12"
                >
                  <div
                    className={`bg-cosmic-navy/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 m-4 hover:border-space-gradient-start/30 transition-all duration-300`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-semibold text-space-gradient-start">
                        {item.phase}
                      </span>
                      <span className="text-gray-500 text-xs">•</span>
                      <span className="text-gray-500 text-xs">{item.date}</span>
                    </div>

                    <h3 className="font-orbitron text-xl font-bold text-white mb-2">
                      {item.title}
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>

                {/* Center Icon and Connector */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                  className="hidden md:flex w-2/12 items-center justify-center relative"
                >
                  {/* Connector line */}
                  <div
                    className={`absolute top-1/2 -translate-y-1/2 h-px w-1/2 bg-space-gradient-start/30 ${
                      index % 2 === 0 ? "right-1/2" : "left-1/2"
                    }`}
                  ></div>
                  {/* Icon */}
                  <div className="relative w-12 h-12 rounded-lg bg-gradient-to-br from-space-gradient-start/20 to-space-gradient-end/20 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-space-gradient-start" />
                  </div>
                </motion.div>

                {/* Empty space for alternating layout on desktop */}
                <div className="hidden md:block w-5/12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
