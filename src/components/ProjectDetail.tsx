import { motion, AnimatePresence } from "motion/react";
import { Project } from "../types";
import { ArrowUpRight, X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { useState, useRef } from "react";

interface ProjectDetailProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  if (!project) return null;

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-bg overflow-y-auto"
      >
        <div className="max-w-5xl mx-auto px-6 py-24">
          <header className="flex justify-between items-center mb-24">
            <div className="small-caps">Case Study / {project.year}</div>
            <button 
              onClick={onClose}
              className="text-xs font-bold uppercase tracking-widest border-b border-fg pb-1 hover:text-muted hover:border-muted transition-all"
            >
              Close
            </button>
          </header>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-6xl font-bold tracking-tighter mb-12">{project.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
              <div className="md:col-span-8">
                <p className="text-2xl font-medium leading-relaxed text-muted">
                  {project.caseStudy?.heroSub || project.description}
                </p>
              </div>
              <div className="md:col-span-4 space-y-8">
                <div>
                  <div className="small-caps mb-2 opacity-50">ROLE</div>
                  <div className="text-sm font-bold uppercase">{project.role}</div>
                </div>
                <div>
                  <div className="small-caps mb-2 opacity-50">CONTEXT</div>
                  <div className="text-sm font-bold uppercase">{project.category}</div>
                </div>
              </div>
            </div>

            {project.thumbnail && (
              <div className="aspect-[16/9] w-full overflow-hidden rounded-2xl bg-surface mb-24">
                <img 
                  src={project.thumbnail} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
              <div className="p-12 bg-surface rounded-2xl">
                <div className="small-caps mb-6 text-muted">The Challenge</div>
                <div className="text-xl font-bold leading-relaxed">{project.challenge}</div>
              </div>
              <div className="p-12 bg-fg text-bg rounded-2xl">
                <div className="small-caps mb-6 opacity-60">The Impact</div>
                <div className="text-xl font-bold leading-relaxed">{project.solution}</div>
              </div>
            </div>

            {/* Detailed Case Study Sections */}
            {project.caseStudy && (
              <div className="mt-32 space-y-40">
                {project.caseStudy.sections.map((section) => (
                  <div key={section.id} className="space-y-12">
                    <div className="space-y-4 max-w-3xl">
                      <div className="flex items-center gap-4">
                        <div className="h-[2px] w-8 bg-fg" />
                        <div className="small-caps text-fg font-bold">{section.label}</div>
                      </div>
                      <h3 className="text-4xl font-bold tracking-tight">{section.title}</h3>
                      <p className="text-xl text-muted leading-relaxed font-medium">
                        {section.body}
                      </p>
                    </div>

                    {/* Section Image */}
                    {section.image && (
                      <div className="rounded-2xl overflow-hidden bg-surface border border-border">
                        <img 
                          src={section.image} 
                          alt={section.title} 
                          className="w-full h-auto object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    )}

                    {/* Section Items (Problem/Learnings) */}
                    {section.items && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {section.items.map((item, idx) => (
                          <div key={idx} className="p-10 border border-border rounded-2xl bg-white shadow-sm hover:border-fg/30 transition-colors">
                            {item.badge && (
                              <span className="inline-block px-3 py-1 bg-fg text-bg text-[10px] font-bold rounded uppercase tracking-wider mb-4">
                                {item.badge}
                              </span>
                            )}
                            <h4 className="text-lg font-bold mb-3">{item.title}</h4>
                            <p className="text-muted text-sm leading-relaxed font-medium">{item.desc}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Metrics Section */}
                    {section.metrics && (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {section.metrics.map((metric, idx) => (
                          <div key={idx} className="p-10 bg-surface rounded-2xl text-center">
                            <div className="text-5xl font-bold text-fg mb-2">{metric.value}</div>
                            <div className="text-[10px] uppercase font-bold text-muted tracking-widest">{metric.label}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Flow Steps Section */}
                    {section.steps && (
                      <div className="space-y-8">
                        {section.steps.map((step, idx) => (
                          <div key={idx} className="flex gap-8 group">
                            <div className="flex flex-col items-center">
                              <div className="w-10 h-10 rounded-full bg-fg text-bg flex items-center justify-center font-bold text-sm shrink-0">
                                {idx + 1}
                              </div>
                              {idx < section.steps!.length - 1 && (
                                <div className="w-px h-full bg-border my-2" />
                              )}
                            </div>
                            <div className="pb-12">
                              <h4 className="text-lg font-bold mb-3">{step.title}</h4>
                              <p className="text-muted text-sm leading-relaxed font-medium mb-6 max-w-2xl">{step.desc}</p>
                              {step.subItems && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                  {step.subItems.map((sub, sIdx) => (
                                    <div key={sIdx} className="p-4 bg-surface rounded-xl text-xs font-bold flex items-center gap-3">
                                      <div className="w-2 h-2 rounded-full bg-fg/20" />
                                      {sub}
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Horizontal slidable gallery */}
            {project.images.length > 0 && (
              <div className="mt-40 space-y-8">
                <div className="flex justify-between items-end">
                  <div>
                    <div className="small-caps mb-2">Gallery</div>
                    <h3 className="text-2xl font-bold tracking-tight">Final Outputs</h3>
                  </div>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => scroll('left')}
                      className="p-2 rounded-full border border-border hover:border-fg transition-colors"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button 
                      onClick={() => scroll('right')}
                      className="p-2 rounded-full border border-border hover:border-fg transition-colors"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>

                <div 
                  ref={scrollRef}
                  className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar"
                >
                  {project.images.map((img, i) => (
                    <motion.div 
                      key={i} 
                      className="shrink-0 w-[300px] md:w-[450px] aspect-video rounded-xl overflow-hidden bg-surface border border-border shadow-sm snap-start cursor-pointer group relative"
                      whileHover={{ scale: 1.02 }}
                      onClick={() => setSelectedImage(img)}
                    >
                      <img 
                        src={img} 
                        alt={`Gallery output ${i}`} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-fg/0 group-hover:bg-fg/10 transition-colors flex items-center justify-center">
                        <Maximize2 className="text-bg opacity-0 group-hover:opacity-100 transition-opacity" size={24} />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Lightbox Modal */}
            <AnimatePresence>
              {selectedImage && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-[200] bg-fg/95 flex items-center justify-center p-6 md:p-12 backdrop-blur-sm"
                  onClick={() => setSelectedImage(null)}
                >
                  <button 
                    className="absolute top-8 right-8 text-bg/60 hover:text-bg p-2 bg-white/10 rounded-full transition-colors"
                    onClick={() => setSelectedImage(null)}
                  >
                    <X size={32} />
                  </button>
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    className="relative max-w-5xl max-h-full rounded-xl overflow-hidden shadow-2xl"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <img 
                      src={selectedImage} 
                      alt="Full screen view" 
                      className="w-full h-auto max-h-[85vh] object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            <footer className="mt-40 pt-12 border-t border-border flex justify-between items-center">
              <div className="small-caps">End of Case Study</div>
              <button 
                onClick={onClose}
                className="text-4xl font-bold tracking-tighter hover:text-muted transition-colors flex items-center gap-4"
              >
                Back home <ArrowUpRight size={32} />
              </button>
            </footer>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
