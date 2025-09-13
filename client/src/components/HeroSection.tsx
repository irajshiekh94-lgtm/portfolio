import { useEffect, useState } from 'react';
import profileImage from '@assets/Snapchat-570485137_1757800212972.jpg';

export default function HeroSection() {
  const [animateText, setAnimateText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimateText(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      data-testid="hero-section"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-100 via-orange-50 to-pink-100"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
          
          {/* Main Portfolio Text */}
          <div 
            className={`transition-all duration-1500 ${
              animateText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <h1 className="text-[8rem] lg:text-[12rem] xl:text-[15rem] font-light text-rose-300/40 leading-none tracking-tight select-none mb-8">
              PORTFOLIO
            </h1>
          </div>

          {/* Name at bottom */}
          <div 
            className={`transition-all duration-1500 delay-500 ${
              animateText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-lg font-medium text-gray-700 tracking-wide">
              Iraj Shahid
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}