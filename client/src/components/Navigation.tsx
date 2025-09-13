import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface NavigationProps {
  activeSection?: string;
  onNavigate?: (section: string) => void;
}

export default function Navigation({ activeSection = 'hero', onNavigate }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'hero', num: '01' },
    { id: 'process', label: 'process', num: '02' },
    { id: 'projects', label: 'projects', num: '03' },
    { id: 'about', label: 'about', num: '04' },
    { id: 'contact', label: 'contact', num: '05' },
    { id: 'bonus', label: 'bonus', num: '06' }
  ];

  const handleNavClick = (sectionId: string) => {
    console.log(`Navigate to ${sectionId} triggered`);
    onNavigate?.(sectionId);
    
    // Smooth scroll to section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 right-0 z-50 p-6 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-sm' : ''
      }`}
      data-testid="navigation-main"
    >
      <div className="flex flex-col space-y-1">
        {navItems.map((item) => (
          <Button
            key={item.id}
            variant="ghost"
            size="sm"
            onClick={() => handleNavClick(item.id)}
            className={`justify-start font-light text-sm hover-elevate transition-all duration-300 ${
              activeSection === item.id 
                ? 'text-foreground font-medium' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
            data-testid={`nav-${item.id}`}
          >
            <span className="text-xs mr-2 opacity-60">{item.num}</span>
            {item.label}
          </Button>
        ))}
      </div>
    </nav>
  );
}