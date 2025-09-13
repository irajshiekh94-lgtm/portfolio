import { useEffect, useState } from 'react';
import profileImage from '@assets/Snapchat-570485137_1757800212972.jpg';

export default function HeroSection() {
  const [animateText, setAnimateText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimateText(true), 500);
    return () => clearTimeout(timer);
  }, []);


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
            <h1 className="text-7xl lg:text-8xl font-extralight text-foreground mb-4 leading-[0.85] tracking-tight">
              HEY,<br />
              <span className="font-extralight">I'M IRAJ</span>
            </h1>
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
            <h2 className="text-5xl lg:text-6xl font-extralight text-foreground mb-8 leading-[0.9] tracking-tight">
              USER<br />
              EXPERIENCE<br />
              DESIGNER
            </h2>
            <p className="text-muted-foreground text-xl leading-relaxed max-w-md ml-auto font-light">
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