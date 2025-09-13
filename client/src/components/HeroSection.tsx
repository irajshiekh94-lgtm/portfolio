import { useEffect, useState } from 'react';
import profileImage from '@assets/generated_images/Professional_designer_headshot_ec43f1f0.png';

export default function HeroSection() {
  const [animateText, setAnimateText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimateText(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const socialLinks = [
    { name: 'INSTAGRAM', href: '#', label: 'Instagram' },
    { name: 'LINKEDIN', href: '#', label: 'LinkedIn' },
    { name: 'TIKTOK', href: '#', label: 'TikTok' }
  ];

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background"
      data-testid="hero-section"
    >
      {/* Background geometric elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-muted rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-muted rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-muted/50 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 flex items-center justify-between relative z-10">
        {/* Left content */}
        <div className="flex-1 max-w-xl">
          <div 
            className={`transition-all duration-1000 ${
              animateText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 className="text-6xl lg:text-7xl font-light text-foreground mb-4 leading-none">
              HEY,<br />
              <span className="font-light">I'M IRAJ</span>
            </h1>
          </div>
          
          <div 
            className={`transition-all duration-1000 delay-300 ${
              animateText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="space-y-3 mb-8">
              {socialLinks.map((link, index) => (
                <div key={link.name}>
                  <a 
                    href={link.href}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 hover-elevate inline-block p-1"
                    data-testid={`social-${link.name.toLowerCase()}`}
                  >
                    {link.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Center profile image */}
        <div className="flex-shrink-0 mx-16">
          <div 
            className={`transition-all duration-1000 delay-500 ${
              animateText ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div className="w-80 h-80 rounded-full overflow-hidden shadow-lg ring-1 ring-border">
              <img 
                src={profileImage}
                alt="Iraj - UI/UX Designer"
                className="w-full h-full object-cover"
                data-testid="profile-image"
              />
            </div>
          </div>
        </div>

        {/* Right content */}
        <div className="flex-1 max-w-xl text-right">
          <div 
            className={`transition-all duration-1000 delay-700 ${
              animateText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-4xl lg:text-5xl font-light text-foreground mb-6 leading-tight">
              USER<br />
              EXPERIENCE<br />
              DESIGNER
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md ml-auto">
              I'm a UX designer who loves designing products that are simple, intuitive and helpful.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-1 h-8 bg-muted-foreground rounded-full opacity-60"></div>
        </div>
      </div>
    </section>
  );
}