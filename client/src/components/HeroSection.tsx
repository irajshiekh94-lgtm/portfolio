import { useEffect, useState } from 'react';
import profileImage from '@assets/Snapchat-570485137_1757800212972.jpg';

export default function HeroSection() {
  const [animateText, setAnimateText] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => setAnimateText(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      data-testid="hero-section"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating orbs */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-40 right-32 w-24 h-24 bg-accent/20 rounded-full blur-lg animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-primary/5 rounded-full blur-md animate-pulse delay-500"></div>
        
        {/* Dynamic geometric shapes */}
        <div 
          className="absolute w-2 h-2 bg-primary rounded-full transition-all duration-300 ease-out"
          style={{
            left: mousePosition.x * 0.02 + 'px',
            top: mousePosition.y * 0.02 + 'px'
          }}
        ></div>
        <div 
          className="absolute w-1 h-1 bg-accent rounded-full transition-all duration-500 ease-out"
          style={{
            right: mousePosition.x * 0.01 + 'px',
            bottom: mousePosition.y * 0.01 + 'px'
          }}
        ></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.3) 1px, transparent 0)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left content */}
          <div className="lg:col-span-1 text-center lg:text-left">
            <div 
              className={`transition-all duration-1000 ${
                animateText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="inline-block p-3 bg-primary/10 rounded-2xl mb-6 backdrop-blur-sm">
                <span className="text-primary font-medium text-sm tracking-wide">
                  ✦ AVAILABLE FOR WORK
                </span>
              </div>
              <h1 className="text-6xl lg:text-7xl font-extralight text-foreground mb-6 leading-[0.85] tracking-tight">
                HEY,<br />
                <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                  I'M IRAJ
                </span>
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-6 mx-auto lg:mx-0"></div>
            </div>
          </div>

          {/* Center profile image */}
          <div className="lg:col-span-1 flex justify-center">
            <div 
              className={`relative transition-all duration-1000 delay-500 ${
                animateText ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            >
              {/* Image glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-2xl scale-110 animate-pulse"></div>
              
              {/* Rotating border */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-primary p-1 animate-spin" style={{ animationDuration: '20s' }}>
                <div className="w-full h-full rounded-full bg-background"></div>
              </div>
              
              <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-2xl ring-4 ring-white/10 backdrop-blur-sm">
                <img 
                  src={profileImage}
                  alt="Iraj - UI/UX Designer"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  data-testid="profile-image"
                />
              </div>
              
              {/* Floating elements around image */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full shadow-lg animate-bounce delay-300"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full shadow-lg animate-bounce delay-700"></div>
            </div>
          </div>

          {/* Right content */}
          <div className="lg:col-span-1 text-center lg:text-right">
            <div 
              className={`transition-all duration-1000 delay-700 ${
                animateText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <h2 className="text-5xl lg:text-6xl font-bold mb-8 leading-[0.9] tracking-tight">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  UI UX
                </span><br />
                <span className="text-foreground">DESIGNER</span>
              </h2>
              <p className="text-muted-foreground text-xl leading-relaxed max-w-md mx-auto lg:ml-auto font-light mb-8">
                I'm a UX designer who loves designing products that are simple, intuitive and helpful.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex gap-4 justify-center lg:justify-end">
                <button 
                  onClick={() => {
                    console.log('View Portfolio triggered');
                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
                  data-testid="cta-portfolio"
                >
                  View Portfolio
                </button>
                <button 
                  onClick={() => {
                    console.log('Contact Me triggered');
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-8 py-4 border-2 border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-white transition-all duration-300"
                  data-testid="cta-contact"
                >
                  Contact Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-xs text-muted-foreground font-medium tracking-wider">SCROLL</span>
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
}