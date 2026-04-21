/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Project, PROJECTS } from "./types";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import ProjectsGrid from "./components/ProjectsGrid";
import ProjectDetail from "./components/ProjectDetail";
import { ArrowRight } from "lucide-react";

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for entrance animation
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Handle body scroll locking
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedProject]);

  return (
    <div className="relative min-h-screen bg-bg text-fg selection:bg-fg selection:text-bg">
      <AnimatePresence>
        {isLoading && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-bg flex items-center justify-center"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm font-medium tracking-[0.3em] uppercase"
            >
              Iraj
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Navigation />
      
      <main>
        <div id="about">
          <Hero />
        </div>
        
        <div id="projects">
          <ProjectsGrid 
            projects={PROJECTS} 
            onSelect={(p) => setSelectedProject(p)} 
          />
        </div>
        
        {/* Experience Section */}
        <section id="work" className="px-6 py-40 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-24">
              <h2 className="text-4xl font-bold tracking-tight">Experience & Impact</h2>
              <p className="text-muted max-w-sm text-lg font-medium">
                Practical experience in designing enterprise-grade solutions and consumer-facing applications.
              </p>
            </div>

            <div className="space-y-1">
              {[
                {
                  company: "Elevance Labs",
                  role: "UI/UX Designer Intern",
                  period: "2026",
                  desc: [
                    "Spearheaded the redesign of Nevada Pick A Part's tablet kiosk check-in system for high-traffic environments. Optimized critical user flows, reducing decision friction for high-traffic environments.",
                    "Simultaneously architectured the BYOT mobile app revamp, transforming a high-friction marketplace into a scannable, mobile-optimized experience."
                  ]
                },
                {
                  company: "Al Khidmat – Head Office",
                  role: "UI/UX Designer Intern",
                  period: "2025",
                  desc: "Architectured and designed a centralized job portal ecosystem to connect humanitarian talent with mission-driven career opportunities. Conducted extensive usability research and led cross-functional design sprints to ensure accessibility and local-language support."
                }
              ].map((exp, i) => (
                <div key={i} className="group py-12 border-t border-border hover:bg-surface transition-colors px-4 -mx-4 rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                    <div className="md:col-span-3">
                      <div className="text-lg font-bold">{exp.company}</div>
                      <div className="text-xs font-mono text-muted mt-1 uppercase tracking-wider">{exp.period}</div>
                    </div>
                    <div className="md:col-span-3">
                      <div className="text-sm font-semibold opacity-60 uppercase tracking-widest">{exp.role}</div>
                    </div>
                    <div className="md:col-span-6 space-y-4">
                      {Array.isArray(exp.desc) ? (
                        exp.desc.map((para, idx) => (
                          <p key={idx} className="text-muted leading-relaxed font-medium">
                            {para}
                          </p>
                        ))
                      ) : (
                        <p className="text-muted leading-relaxed font-medium">
                          {exp.desc}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Stack & Education */}
        <section className="px-6 py-40 border-t border-border">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24">
              {/* Education */}
              <div className="space-y-8">
                <div className="small-caps">Education</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Muhammad Ali Jinnah University</h3>
                  <p className="text-muted">BS Computer Science (8th Sem)</p>
                  <p className="text-xs font-mono mt-4 text-muted">CGPA: 3.56 / SGPA: 3.98</p>
                </div>
                <div className="pt-8 border-t border-border">
                  <h3 className="text-lg font-bold mb-1">Google UX Design</h3>
                  <p className="text-muted text-sm">Professional Certification</p>
                </div>
              </div>

              {/* Skills */}
              <div className="space-y-8">
                <div className="small-caps">Design Stack</div>
                <div className="flex flex-wrap gap-x-8 gap-y-4 text-muted font-medium">
                  {["Systemic Design", "UX Research", "Prototyping", "UI Patterns", "Information Architecture", "Product Analysis"].map(s => (
                    <span key={s} className="text-sm">{s}</span>
                  ))}
                </div>
              </div>

              <div className="space-y-8">
                <div className="small-caps">Technical Stack</div>
                <div className="flex flex-wrap gap-x-8 gap-y-4 text-muted font-medium">
                  {["React / Next.js", "TypeScript", "Tailwind", "Firebase", "Python", "SQL"].map(s => (
                    <span key={s} className="text-sm">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="px-6 py-32 border-t border-border bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end gap-12">
              <div className="space-y-8">
                <div className="text-3xl font-bold tracking-tighter">Iraj</div>
                <div className="flex flex-col gap-2">
                  <a href="mailto:irajshahid90@gmail.com" className="text-2xl font-medium border-b border-transparent hover:border-fg transition-all w-fit">irajshahid90@gmail.com</a>
                  <div className="text-muted text-sm">+92-3368262871</div>
                </div>
              </div>
              
              <div className="flex gap-16 text-right">
                <div className="space-y-4">
                  <div className="small-caps">CONNECT</div>
                  <div className="flex flex-col gap-2 text-sm font-bold">
                    <a href="https://www.linkedin.com/in/iraj-shahid-76050030b" target="_blank" rel="noreferrer" className="hover:text-muted transition-colors">LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-32 pt-8 border-t border-border flex justify-between items-center text-[10px] uppercase tracking-widest text-muted font-bold">
              <div>© 2026 Iraj</div>
              <div>Karachi, Pakistan</div>
            </div>
          </div>
        </footer>
      </main>

      <ProjectDetail 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
}
