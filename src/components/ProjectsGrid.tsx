import { motion } from "motion/react";
import { Project } from "../types";
import { ArrowUpRight } from "lucide-react";

interface ProjectsGridProps {
  projects: Project[];
  onSelect: (project: Project) => void;
}

export default function ProjectsGrid({ projects, onSelect }: ProjectsGridProps) {
  return (
    <section className="px-6 py-32 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <div className="space-y-4">
            <div className="small-caps">Selected Projects</div>
            <h2 className="text-4xl font-bold tracking-tight">Focusing on Results</h2>
          </div>
          <div className="text-muted text-sm font-medium">2024 — 2026</div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => onSelect(project)}
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-surface border border-border mb-8 shadow-sm flex items-center justify-center">
                {project.thumbnail ? (
                  <>
                    <motion.img
                      src={project.thumbnail}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors" />
                  </>
                ) : (
                  <div className="flex flex-col items-center gap-4 text-muted/30">
                    <div className="w-12 h-[1px] bg-current" />
                    <span className="small-caps opacity-50">Visuals coming soon</span>
                    <div className="w-12 h-[1px] bg-current" />
                  </div>
                )}
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-bold tracking-tight">{project.title}</h3>
                  <ArrowUpRight size={20} className="text-muted group-hover:text-fg transition-colors" />
                </div>
                <p className="text-muted leading-relaxed font-medium line-clamp-2">
                  {project.challenge}
                </p>
                <div className="flex gap-4 pt-4">
                   <span className="text-[10px] uppercase font-bold tracking-widest text-muted border border-border px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
