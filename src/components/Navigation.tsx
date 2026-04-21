import { motion } from "motion/react";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("about");

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-40% 0px -50% 0px",
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.id === "about") setActiveSection("about");
          if (entry.target.id === "work") setActiveSection("work");
          if (entry.target.id === "contact") setActiveSection("contact");
        }
      });
    }, options);

    const sections = ["about", "work", "contact"];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const navItems = [
    { label: "About", id: "about", key: "about" },
    { label: "Work", id: "work", key: "work" },
    { label: "Contact", id: "contact", key: "contact" }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-[60] px-6 py-6 flex justify-between items-center pointer-events-none">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-xs font-bold tracking-[0.2em] uppercase pointer-events-auto cursor-pointer"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
          setActiveSection("about");
        }}
      >
        Iraj
      </motion.div>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex gap-4 pointer-events-auto items-center"
      >
        {navItems.map((item) => (
          <button
            key={item.key}
            onClick={() => {
              setActiveSection(item.key);
              scrollTo(item.id);
            }}
            className={`transition-all duration-300 text-[10px] uppercase font-bold tracking-widest ${
              activeSection === item.key 
                ? "bg-fg text-bg px-5 py-2 rounded-full" 
                : "text-fg hover:text-muted px-2 py-2"
            }`}
          >
            {item.label}
          </button>
        ))}
      </motion.div>
    </nav>
  );
}
