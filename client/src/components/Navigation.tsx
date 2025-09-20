import { useState, useEffect } from "react";

interface NavigationProps {
  activeSection?: string;
  onNavigate?: (section: string) => void;
}

export default function Navigation({
  activeSection = "hero",
  onNavigate,
}: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "hero" },
    { id: "process" },
    { id: "projects" },
    { id: "about" },
    { id: "contact" },
  ];

  const handleNavClick = (sectionId: string) => {
    console.log(`Navigate to ${sectionId} triggered`);
    onNavigate?.(sectionId);

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-1/2 right-6 -translate-y-1/2 z-50 transition-all duration-300 ${
        isScrolled ? "opacity-100" : "opacity-80"
      }`}
      data-testid="navigation-main"
    >
      <div className="flex flex-col space-y-4">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavClick(item.id)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeSection === item.id
                ? "bg-foreground scale-125"
                : "bg-muted-foreground hover:bg-foreground"
            }`}
            aria-label={`Go to ${item.id}`}
          />
        ))}
      </div>
    </nav>
  );
}
