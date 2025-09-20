"use client";
import profilePic from "../assets/profilePic.jpg";

import React, { useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import {
  SiFigma,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobexd,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiGithub,
} from "react-icons/si";

export default function AboutMeBook() {
  const experience = [
    {
      role: "UI/UX Designer & Front-end Intern",
      company: "Al Khidmat",
      period: "July 2025 - September 2025",
      details: "Designed UI systems, prototypes & user flows",
    },
    {
      role: "Brand Ambassador",
      company: "JI Youth Women",
      period: "Present",
      details: "Leadership role, community building & event campaigns",
    },
  ];

  // Animated text content for borders
  const topBottomText = "UX RESEARCHER • UI DESIGNER • CONTACT ME • PORTFOLIO • CREATIVE SOLUTIONS • ";
  const sideText = "FIGMA • PROTOTYPING • USER RESEARCH • BRAND DESIGN • WEB DEVELOPMENT • ";

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  React.useEffect(() => {
    if (isInView) controls.start("open");
  }, [isInView, controls]);

  const leftPageVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const rightPageVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
  };

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center bg-beige-100 px-4 sm:px-6 py-8 sm:py-16 perspective-1500 relative overflow-hidden"
    >
      {/* Top Animated Text - Hidden on small screens */}
      <div className="absolute top-0 left-0 right-0 h-8 sm:h-12 overflow-hidden bg-black text-white items-center hidden sm:flex">
        <motion.div
          className="whitespace-nowrap text-xs sm:text-sm font-light tracking-[0.1em] sm:tracking-[0.2em] flex"
          animate={{ x: [0, -2000] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <span>{topBottomText.repeat(3)}</span>
        </motion.div>
      </div>

      {/* Bottom Animated Text - Hidden on small screens */}
      <div className="absolute bottom-0 left-0 right-0 h-8 sm:h-12 overflow-hidden bg-black text-white items-center hidden sm:flex">
        <motion.div
          className="whitespace-nowrap text-xs sm:text-sm font-light tracking-[0.1em] sm:tracking-[0.2em] flex"
          animate={{ x: [-2000, 0] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <span>{topBottomText.repeat(3)}</span>
        </motion.div>
      </div>

      {/* Left Animated Text - Hidden on mobile and tablet */}
      <div className="absolute left-0 top-8 sm:top-12 bottom-8 sm:bottom-12 w-8 sm:w-12 overflow-hidden bg-black text-white items-center justify-center hidden lg:flex">
        <motion.div
          className="whitespace-nowrap text-xs sm:text-sm font-light tracking-[0.1em] sm:tracking-[0.2em] transform -rotate-90 origin-center"
          animate={{ y: [0, -1500] }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <span>{sideText.repeat(4)}</span>
        </motion.div>
      </div>

      {/* Right Animated Text - Hidden on mobile and tablet */}
      <div className="absolute right-0 top-8 sm:top-12 bottom-8 sm:bottom-12 w-8 sm:w-12 overflow-hidden bg-black text-white items-center justify-center hidden lg:flex">
        <motion.div
          className="whitespace-nowrap text-xs sm:text-sm font-light tracking-[0.1em] sm:tracking-[0.2em] transform rotate-90 origin-center"
          animate={{ y: [-1500, 0] }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <span>{sideText.repeat(4)}</span>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative w-full max-w-7xl h-auto flex flex-col lg:flex-row z-10 mt-4 sm:mt-8 lg:mt-12 mb-4 sm:mb-8 lg:mb-12 gap-4 lg:gap-0">
        {/* Left Page */}
        <motion.div
          className="w-full lg:w-1/2 bg-white rounded-xl lg:rounded-l-xl lg:rounded-r-none shadow-lg p-6 sm:p-8 lg:p-10 flex flex-col items-center justify-center space-y-4 sm:space-y-6"
          initial="closed"
          animate={controls}
          variants={leftPageVariants}
        >
          <img
            src={profilePic}
            alt="Iraj"
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-44 lg:h-44 rounded-full border-2 sm:border-4 border-black object-cover shadow-lg"
          />

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extralight tracking-[0.05em] sm:tracking-[0.1em] uppercase text-black text-center">
            About Me
          </h2>
          <p className="text-black/80 text-center text-sm sm:text-base leading-relaxed">
            Hi, I'm <span className="font-semibold">Iraj</span>, a passionate{" "}
            <span className="font-semibold">UI/UX Designer</span> obsessed with clean, user-friendly interfaces. I transform concepts into experiences that users love.
          </p>

          {/* Education */}
          <div className="w-full p-3 sm:p-4 bg-white border border-black/10 rounded-lg text-center shadow-sm">
            <h3 className="text-lg sm:text-xl font-light uppercase text-black mb-1 sm:mb-2">
              Education
            </h3>
            <p className="text-black/80 text-xs sm:text-sm leading-relaxed">
              BS Computer Science — Mohammad Ali Jinnah University <br />
              6th Semester | GPA: 3.98
            </p>
          </div>
        </motion.div>

        {/* Right Page */}
        <motion.div
          className="w-full lg:w-1/2 bg-white rounded-xl lg:rounded-r-xl lg:rounded-l-none shadow-lg p-6 sm:p-8 lg:p-10 flex flex-col items-center justify-start space-y-4 sm:space-y-6"
          initial="closed"
          animate={controls}
          variants={rightPageVariants}
        >
          {/* Experience */}
          <div className="w-full">
            <h3 className="text-xl sm:text-2xl font-light text-black mb-3 sm:mb-4 uppercase tracking-wide text-center">
              Experience
            </h3>
            <div className="space-y-3 sm:space-y-4">
              {experience.map((exp, idx) => (
                <div
                  key={idx}
                  className="p-3 sm:p-4 border border-black/10 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <h4 className="font-semibold text-black text-sm sm:text-base leading-tight">
                    {exp.role} — {exp.company}
                  </h4>
                  <p className="text-xs sm:text-sm text-black/60 mt-1">{exp.period}</p>
                  <p className="text-black/80 text-xs sm:text-sm mt-1 leading-relaxed">{exp.details}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="w-full mt-2 sm:mt-4">
            <h3 className="text-xl sm:text-2xl font-light text-black mb-3 sm:mb-4 uppercase tracking-wide text-center">
              Technical Skills
            </h3>
            <div className="grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-3 lg:gap-4">
              {[SiFigma, SiAdobephotoshop, SiAdobeillustrator, SiAdobexd, SiReact, SiNextdotjs, SiHtml5, SiCss3, SiGithub].map(
                (Icon, idx) => (
                  <div
                    key={idx}
                    className="p-2 sm:p-3 lg:p-4 bg-white rounded-lg flex items-center justify-center text-lg sm:text-xl lg:text-3xl xl:text-4xl hover:bg-black/5 transition-all duration-200 shadow-sm border border-black/10 h-12 w-12 sm:h-14 sm:w-14 lg:aspect-square lg:h-auto lg:w-auto"
                  >
                    <Icon />
                  </div>
                )
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}