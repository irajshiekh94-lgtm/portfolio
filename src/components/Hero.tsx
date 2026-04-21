import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center px-6 pt-32 pb-12">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="small-caps mb-12 text-fg tracking-normal"
        >
          UI/UX Designer and Critical Thinker
        </motion.div>

        <motion.h1 
          className="title-text max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Iraj creates <span className="text-muted">measurable impact</span> through human-centered design.
        </motion.h1>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <motion.div 
            className="md:col-span-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <p className="text-xl leading-relaxed text-muted font-medium max-w-lg">
              Bridging the gap between design and engineering. Currently transforming digital ecosystems with logic, critical analysis, and a relentless focus on usability.
            </p>
            <div className="flex gap-6 mt-12">
              <a 
                href="#projects" 
                className="group flex items-center gap-2 text-sm font-bold border-b-2 border-fg pb-1 hover:text-muted hover:border-muted transition-all"
              >
                View selected work <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="md:col-span-6 flex flex-col gap-8 md:text-right md:items-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="space-y-1">
              <div className="small-caps opacity-50">LOCATION</div>
              <div className="text-sm font-semibold">Karachi, Pakistan</div>
            </div>
            <div className="space-y-1">
              <div className="small-caps opacity-50">STATUS</div>
              <div className="text-sm font-semibold">BS CS / 8th Semester (CGPA 3.56)</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
