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

  // Option 1: Remove sliding completely
  const leftPageVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const rightPageVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
  };

  // Option 2: Keep book effect but make it gentler
  // const leftPageVariants = {
  //   closed: { rotateY: 45 },
  //   open: { rotateY: 0, transition: { duration: 0.6 } },
  // };

  // const rightPageVariants = {
  //   closed: { rotateY: -45 },
  //   open: { rotateY: 0, transition: { duration: 0.6 } },
  // };

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center bg-beige-100 px-6 py-16 perspective-1500 relative overflow-hidden"
    >
      {/* Top Animated Text */}
      <div className="absolute top-0 left-0 right-0 h-12 overflow-hidden bg-black text-white flex items-center">
        <motion.div
          className="whitespace-nowrap text-sm font-light tracking-[0.2em] flex"
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

      {/* Bottom Animated Text */}
      <div className="absolute bottom-0 left-0 right-0 h-12 overflow-hidden bg-black text-white flex items-center">
        <motion.div
          className="whitespace-nowrap text-sm font-light tracking-[0.2em] flex"
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

      {/* Left Animated Text */}
      <div className="absolute left-0 top-12 bottom-12 w-12 overflow-hidden bg-black text-white flex items-center justify-center">
        <motion.div
          className="whitespace-nowrap text-sm font-light tracking-[0.2em] transform -rotate-90 origin-center"
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

      {/* Right Animated Text */}
      <div className="absolute right-0 top-12 bottom-12 w-12 overflow-hidden bg-black text-white flex items-center justify-center">
        <motion.div
          className="whitespace-nowrap text-sm font-light tracking-[0.2em] transform rotate-90 origin-center"
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
      <div className="relative w-full max-w-6xl h-auto flex z-10 mt-12 mb-12">
        {/* Left Page */}
        <motion.div
          className="w-1/2 bg-white rounded-l-xl shadow-lg p-10 flex flex-col items-center justify-center space-y-6"
          initial="closed"
          animate={controls}
          variants={leftPageVariants}
        >
          <img
            src={profilePic}
            alt="Iraj"
            className="w-36 h-36 md:w-44 md:h-44 rounded-full border-4 border-black object-cover shadow-lg"
          />

          <h2 className="text-4xl font-extralight tracking-[0.1em] uppercase text-black">
            About Me
          </h2>
          <p className="text-black/80 text-center">
            Hi, I'm <span className="font-semibold">Iraj</span>, a passionate{" "}
            <span className="font-semibold">UI/UX Designer</span> obsessed with clean, user-friendly interfaces. I transform concepts into experiences that users love.
          </p>

          {/* Education */}
          <div className="w-full p-4 bg-white border border-black/10 rounded-lg text-center shadow-sm">
            <h3 className="text-xl font-light uppercase text-black mb-1">
              Education
            </h3>
            <p className="text-black/80 text-sm">
              BS Computer Science — Mohammad Ali Jinnah University <br />
              6th Semester | GPA: 3.98
            </p>
          </div>
        </motion.div>

        {/* Right Page */}
        <motion.div
          className="w-1/2 bg-white rounded-r-xl shadow-lg p-10 flex flex-col items-center justify-start space-y-6"
          initial="closed"
          animate={controls}
          variants={rightPageVariants}
        >
          {/* Experience */}
          <div className="w-full">
            <h3 className="text-2xl font-light text-black mb-4 uppercase tracking-wide text-center">
              Experience
            </h3>
            <div className="space-y-4">
              {experience.map((exp, idx) => (
                <div
                  key={idx}
                  className="p-3 border border-black/10 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <h4 className="font-semibold text-black">
                    {exp.role} — {exp.company}
                  </h4>
                  <p className="text-sm text-black/60">{exp.period}</p>
                  <p className="text-black/80">{exp.details}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="w-full mt-4">
            <h3 className="text-2xl font-light text-black mb-4 uppercase tracking-wide text-center">
              Technical Skills
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[SiFigma, SiAdobephotoshop, SiAdobeillustrator, SiAdobexd, SiReact, SiNextdotjs, SiHtml5, SiCss3, SiGithub].map(
                (Icon, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-white rounded-lg flex items-center justify-center text-4xl hover:bg-black/5 transition-shadow shadow-sm border border-black/10"
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