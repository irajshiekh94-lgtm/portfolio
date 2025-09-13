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
      {/* Clean Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background to-card/30"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center justify-center min-h-screen relative">
          
          {/* Large Typography - Portfolio */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div 
              className={`transition-all duration-1000 delay-300 ${
                animateText ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            >
              <h1 className="text-[12rem] lg:text-[16rem] xl:text-[20rem] font-black text-foreground/[0.08] leading-none tracking-tight select-none">
                PORTFOLIO
              </h1>
            </div>
          </div>

          {/* Main Content */}
          <div className="relative z-10">
            
            {/* Profile Image */}
            <div 
              className={`transition-all duration-1000 delay-300 ${
                animateText ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            >
              <div className="relative mx-auto mb-12 flex justify-center">
                <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-2xl overflow-hidden shadow-2xl ring-8 ring-white/10">
                  <img 
                    src={profileImage}
                    alt="Iraj Shahid - UI/UX Designer"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    data-testid="profile-image"
                  />
                </div>
                
                {/* Decorative elements around image */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-primary rounded-full shadow-lg animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-accent rounded-full shadow-lg animate-pulse delay-1000"></div>
                <div className="absolute top-1/4 -left-8 w-4 h-4 bg-primary/60 rounded-full animate-bounce delay-500"></div>
                <div className="absolute bottom-1/4 -right-8 w-6 h-6 bg-accent/60 rounded-full animate-bounce delay-700"></div>
              </div>
            </div>

            {/* Name */}
            <div 
              className={`transition-all duration-1000 delay-500 ${
                animateText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <h2 className="text-4xl lg:text-5xl font-light text-muted-foreground mb-4 tracking-widest text-left">
                IRAJ SHAHID
              </h2>
            </div>

            {/* Job Title */}
            <div 
              className={`transition-all duration-1000 delay-700 ${
                animateText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-8 tracking-wide text-right">
                UI UX DESIGNER
              </h3>
            </div>

            {/* Description */}
            <div 
              className={`transition-all duration-1000 delay-900 ${
                animateText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <p className="text-muted-foreground text-lg leading-relaxed max-w-lg font-light mb-10 text-center mx-auto">
                Crafting digital experiences that are simple, intuitive and delightful.
              </p>
            </div>

            {/* CTA Buttons */}
            <div 
              className={`transition-all duration-1000 delay-1100 ${
                animateText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="flex gap-6 justify-center">
                <button 
                  onClick={() => {
                    console.log('View Work triggered');
                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-8 py-4 bg-foreground text-background rounded-full font-medium hover:shadow-xl hover:scale-105 transition-all duration-300"
                  data-testid="cta-portfolio"
                >
                  View Work
                </button>
                <button 
                  onClick={() => {
                    console.log('Get In Touch triggered');
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-8 py-4 border-2 border-foreground text-foreground rounded-full font-medium hover:bg-foreground hover:text-background transition-all duration-300"
                  data-testid="cta-contact"
                >
                  Get In Touch
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Minimal Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2 opacity-60">
          <div className="w-px h-12 bg-muted-foreground"></div>
          <div className="w-1 h-1 bg-muted-foreground rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}