"use client";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import {
  Calendar,
  Lightbulb,
  Trophy,
  ClipboardList, // Using the cleaner, non-overlapping icon
  FileUp,
  Presentation,
  DraftingCompass,
  Rocket,
  Terminal,
} from "lucide-react";

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
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-space-gradient-start/40 to-space-gradient-end/40 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-cosmic-navy/60 backdrop-blur-md p-4 rounded-full border border-space-gradient-start/20 group-hover:border-space-gradient-start/40 transition-all duration-300">
                  <div className="w-20 h-20 rounded-full bg-cosmic-deep/80 flex items-center justify-center overflow-hidden">
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
                <motion.div
                  key={`${activeTimeline}-${item.phase}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
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
                          index % 2 === 0
                            ? "md:justify-end"
                            : "md:justify-start"
                        }`}
                      >
                        <span className="text-xs font-semibold text-space-gradient-start">
                          {item.phase}
                        </span>
                        <span className="text-gray-500 text-xs">•</span>
                        <span className="text-gray-500 text-xs">
                          {item.date}
                        </span>
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
                      className={`absolute top-1/2 -translate-y-1/2 h-px w-1/2 bg-space-gradient-start/30 ${
                        index % 2 === 0 ? "left-0" : "right-0"
                      }`}
                    />
                    <div className="relative w-12 h-12 rounded-lg flex items-center justify-center ring-4 bg-cosmic-navy ring-cosmic-deep">
                      <item.icon className="w-6 h-6 text-space-gradient-start" />
                    </div>
                  </div>

                  <div className="hidden md:block w-5/12" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
