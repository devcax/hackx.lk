"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import {
  Calendar,
  Lightbulb,
  Trophy,
  ClipboardList,
  FileUp,
  Presentation,
  DraftingCompass,
  Rocket,
  Terminal,
} from "lucide-react";

// Define the type for a timeline item to be used in the TimelineItem component
type TimelineItemData = {
  phase: string;
  title: string;
  description: string;
  icon: React.ElementType;
  date: string;
};

// A new component for individual timeline items to handle their own view-based animations
const TimelineItem = ({
  item,
  index,
}: {
  item: TimelineItemData;
  index: number;
}) => {
  const ref = useRef(null);
  // Animate when the item is 20% into the viewport
  const isInView = useInView(ref, { once: true, margin: "0px 0px -20% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`flex items-center my-8 md:my-0 flex-row-reverse ${
        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      <div className="w-full md:w-5/12">
        <div
          className={`bg-cosmic-navy/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 m-4 hover:border-space-gradient-start/30 transition-all duration-300 ${
            index % 2 === 0 ? "md:text-right" : "md:text-left"
          }`}
        >
          <div
            className={`flex items-center gap-3 mb-3 ${
              index % 2 === 0 ? "md:justify-end" : "md:justify-start"
            }`}
          >
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
      </div>

      <div className="hidden md:flex w-2/12 items-center justify-center relative">
        <div
          className={`absolute top-1/2 -translate-y-1/2 h-px w-1/2 bg-gradient-to-r from-transparent via-space-gradient-start/30 to-transparent ${
            index % 2 === 0 ? "left-0" : "right-0"
          }`}
        />

        {/* Outer glow effect */}
        <div className="absolute w-16 h-16 rounded-full bg-space-gradient-start/10 blur-xl" />

        {/* Icon container with better blending */}
        <div className="relative group">
          {/* Animated glow on hover */}
          <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-space-gradient-start/20 to-space-gradient-end/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Main icon container */}
          <div
            className="relative w-12 h-12 rounded-full flex items-center justify-center 
                                      bg-gradient-to-br from-cosmic-navy/40 to-cosmic-deep/40 
                                      backdrop-blur-sm
                                      border border-white/5
                                      shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]
                                      group-hover:border-white/10
                                      transition-all duration-300"
          >
            {/* Subtle inner glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-space-gradient-start/5 to-transparent" />

            {/* Icon */}
            <item.icon className="w-6 h-6 text-space-gradient-start/80 group-hover:text-space-gradient-start transition-colors duration-300 relative z-10" />
          </div>
        </div>
      </div>

      <div className="hidden md:block w-5/12" />
    </motion.div>
  );
};

export default function TimelineSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const hackXTimelineData = [
    {
      phase: "Phase 1",
      title: "ideasprint",
      description:
        "The journey begins! Kick off the competition with an exciting introduction to ideation, creativity, and innovation.",
      icon: Lightbulb,
      date: "19th July",
    },
    {
      phase: "Phase 2",
      title: "Registrations Open",
      description:
        "Get ready to join the action. Assemble your team and officially register to compete in IdeaSprint.",
      icon: ClipboardList,
      date: "6th August 2025",
    },
    {
      phase: "Phase 3",
      title: "Proposal Submission",
      description:
        "Submit your project proposals outlining your innovative solution and approach to the challenge.",
      icon: FileUp,
      date: "20th August 2025",
    },
    {
      phase: "Phase 4",
      title: "ideaX Semi Finals",
      description:
        "The top proposals move to the semi-finals. Showcase your ideas to judges and secure your spot in the finals.",
      icon: Presentation,
      date: "27th September",
    },
    {
      phase: "Phase 5",
      title: "designX Workshop 1",
      description:
        "Hands-on workshop to dive deeper into design thinking, product development, and prototyping.",
      icon: DraftingCompass,
      date: "13th October",
    },
    {
      phase: "Phase 6",
      title: "designX Workshop 2",
      description:
        "Second in the series of design workshops to refine your project with feedback from mentors and peers.",
      icon: DraftingCompass,
      date: "17th October",
    },
    {
      phase: "Phase 7",
      title: "designX Workshop 3",
      description:
        "Final workshop focused on preparing your pitch deck, demo, and presentation for the grand showdown.",
      icon: DraftingCompass,
      date: "24th October",
    },
    {
      phase: "Phase 8",
      title: "Grand Finals",
      description:
        "The climax of the event! Present your full solution to the jury and compete for top honors.",
      icon: Trophy,
      date: "10th November",
    },
  ];

  const ideaSprintTimelineData = [
    {
      phase: "Phase 1",
      title: "Registration Opens",
      description:
        "Teams register for the hackathon. Form your team and prepare for the coding challenge ahead.",
      icon: ClipboardList,
      date: "Week 1",
    },
    {
      phase: "Phase 2",
      title: "Workshop Series",
      description:
        "Attend technical workshops and learn from industry experts about the latest technologies and best practices.",
      icon: Rocket,
      date: "Week 2-3",
    },
    {
      phase: "Phase 3",
      title: "24-Hour Hackathon",
      description:
        "The main event! Code for 24 hours straight, build your solution, and bring your ideas to life.",
      icon: Terminal,
      date: "Week 4",
    },
    {
      phase: "Phase 4",
      title: "Project Submission",
      description:
        "Submit your completed projects with documentation, demo videos, and presentation materials.",
      icon: FileUp,
      date: "Week 4",
    },
    {
      phase: "Phase 5",
      title: "Awards Ceremony",
      description:
        "Present your solutions to judges. Winners announced and prizes distributed to top teams.",
      icon: Trophy,
      date: "Week 5",
    },
  ];

  const timelines = {
    hackx: {
      title: "hackX",
      subtitle: "Journey to Innovation",
      data: hackXTimelineData,
      icon: Lightbulb,
    },
    ideasprint: {
      title: "hackX Jr",
      subtitle: "Code Your Vision",
      data: ideaSprintTimelineData,
      icon: Terminal,
    },
  };

  const [activeTimeline, setActiveTimeline] =
    useState<keyof typeof timelines>("hackx");
  const currentTimeline = timelines[activeTimeline];

  return (
    <section ref={ref} className="relative py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cosmic-blue/80 via-cosmic-navy/90 to-cosmic-deep" />
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-[15rem] right-10 w-96 h-96 bg-space-gradient-end/10 rounded-full blur-3xl"
          animate={{ x: [0, -50, 0], y: [0, 30, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <div className="shine-effect inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-8">
            <Calendar className="w-4 h-4 inline text-space-gradient-start" />
            <span className="text-space-gradient-start font-medium">
              Competition Timeline
            </span>
          </div>
          <AnimatePresence mode="wait">
            <motion.h2
              key={currentTimeline.subtitle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="font-orbitron text-4xl md:text-6xl font-bold mb-6 bg-text-gradient bg-clip-text text-transparent py-1"
            >
              {currentTimeline.subtitle}
            </motion.h2>
          </AnimatePresence>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            From Spark to Startup through our structured competition phases.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTimeline}
            initial={{ opacity: 0, x: 50, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -50, scale: 0.98 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="relative"
          >
            <div className="absolute left-1/2 top-24 bottom-0 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-space-gradient-start/20 via-space-gradient-end/40 to-space-gradient-start/10" />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative flex justify-center mb-4"
            >
              <div className="relative group">
                {/* Outer glow */}
                <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-space-gradient-start/20 to-space-gradient-end/20 blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />

                {/* Container */}
                <div
                  className="relative bg-gradient-to-br from-cosmic-navy/40 to-cosmic-deep/40 
                                backdrop-blur-md p-4 rounded-full 
                                border border-white/5 
                                group-hover:border-white/10 
                                shadow-[inset_0_2px_4px_rgba(255,255,255,0.1)]
                                transition-all duration-300"
                >
                  <div
                    className="w-20 h-20 rounded-full bg-gradient-to-br from-cosmic-deep/60 to-cosmic-navy/60 
                                  backdrop-blur-sm flex items-center justify-center overflow-hidden
                                  border border-white/5"
                  >
                    <Image
                      src="/images/hackx-tiny.png"
                      alt="HackX Logo"
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
            <div className="space-y-4 md:space-y-0 pt-16">
              {currentTimeline.data.map((item, index) => (
                <TimelineItem
                  key={`${activeTimeline}-${item.phase}`}
                  item={item}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
