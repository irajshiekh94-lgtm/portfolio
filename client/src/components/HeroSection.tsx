import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import imagecopy from "../assets/imagecopy.jpg";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [showLetters, setShowLetters] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setIsVisible(true), 200);
    const timer2 = setTimeout(() => setShowLetters(true), 800);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const portfolioLetters = 'portfolio'.split('');

  // Animated text content for borders
  const topBottomText = "CREATIVE DESIGNER • PORTFOLIO • CONTACT • UX RESEARCH • UI DESIGN • INNOVATIVE SOLUTIONS • ";
  const sideText = "FIGMA • ADOBE CREATIVE SUITE • PROTOTYPING • USER EXPERIENCE • WEB DESIGN • ";

  return (
    <section 
      id="hero" 
      className="min-h-screen relative overflow-hidden"
      data-testid="hero-section"
      style={{
        background: `
          radial-gradient(1200px 600px at 20% 10%, hsla(10, 40%, 80%, 0.15), transparent 60%),
          radial-gradient(800px 400px at 80% 30%, hsla(340, 70%, 85%, 0.12), transparent 60%),
          radial-gradient(600px 300px at 50% 50%, hsla(25, 60%, 90%, 0.08), transparent 70%),
          #faf9f7
        `
      }}
    >
      {/* Top Animated Text */}
      <div className="absolute top-0 left-0 right-0 h-6 sm:h-8 md:h-12 overflow-hidden bg-black text-white flex items-center z-30">
        <motion.div
          className="whitespace-nowrap text-xs sm:text-sm font-light tracking-[0.2em] flex"
          animate={{ x: [0, -2000] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <span>{topBottomText.repeat(3)}</span>
        </motion.div>
      </div>

      {/* Bottom Animated Text */}
      <div className="absolute bottom-0 left-0 right-0 h-6 sm:h-8 md:h-12 overflow-hidden bg-black text-white flex items-center z-30">
        <motion.div
          className="whitespace-nowrap text-xs sm:text-sm font-light tracking-[0.2em] flex"
          animate={{ x: [-2000, 0] }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <span>{topBottomText.repeat(3)}</span>
        </motion.div>
      </div>

      {/* Left Animated Text */}
      <div className="absolute left-0 top-6 sm:top-8 md:top-12 bottom-6 sm:bottom-8 md:bottom-12 w-6 sm:w-8 md:w-12 overflow-hidden bg-black text-white flex items-center justify-center z-30">
        <motion.div
          className="whitespace-nowrap text-xs sm:text-sm font-light tracking-[0.2em] transform -rotate-90 origin-center"
          animate={{ y: [0, -1500] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <span>{sideText.repeat(4)}</span>
        </motion.div>
      </div>

      {/* Right Animated Text */}
      <div className="absolute right-0 top-6 sm:top-8 md:top-12 bottom-6 sm:bottom-8 md:bottom-12 w-6 sm:w-8 md:w-12 overflow-hidden bg-black text-white flex items-center justify-center z-30">
        <motion.div
          className="whitespace-nowrap text-xs sm:text-sm font-light tracking-[0.2em] transform rotate-90 origin-center"
          animate={{ y: [-1500, 0] }}
          transition={{
            duration: 32,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <span>{sideText.repeat(4)}</span>
        </motion.div>
      </div>

      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        <div 
          className={`absolute top-20 left-10 w-2 h-2 bg-rose-300/30 rounded-full opacity-0 ${
            isVisible ? 'animate-float animate-fade-in' : ''
          }`}
          style={{ animationDelay: '1s', animationFillMode: 'forwards' }}
        />
        <div 
          className={`absolute top-40 right-20 w-3 h-3 bg-orange-300/20 rounded-full opacity-0 ${
            isVisible ? 'animate-float animate-fade-in' : ''
          }`}
          style={{ animationDelay: '1.5s', animationFillMode: 'forwards', animationDuration: '7s' }}
        />
        <div 
          className={`absolute bottom-32 left-20 w-1.5 h-1.5 bg-pink-300/25 rounded-full opacity-0 ${
            isVisible ? 'animate-float animate-fade-in' : ''
          }`}
          style={{ animationDelay: '2s', animationFillMode: 'forwards', animationDuration: '5s' }}
        />
        <div 
          className={`absolute top-1/3 left-1/4 w-2.5 h-2.5 bg-rose-200/20 rounded-full opacity-0 ${
            isVisible ? 'animate-pulse-glow' : ''
          }`}
          style={{ animationDelay: '2.5s', animationFillMode: 'forwards' }}
        />
        <div 
          className={`absolute bottom-1/4 right-1/3 w-1 h-1 bg-orange-200/30 rounded-full opacity-0 ${
            isVisible ? 'animate-float animate-fade-in' : ''
          }`}
          style={{ animationDelay: '3s', animationFillMode: 'forwards', animationDuration: '8s' }}
        />
      </div>

      {/* Pinned Photo - Hidden on small screens */}
      <div 
        className={`absolute top-16 right-8 md:top-24 md:right-16 lg:top-32 lg:right-24 opacity-0 z-20 hidden md:block ${
          isVisible ? 'animate-fade-in' : ''
        }`}
        style={{ 
          animationDelay: '2.2s', 
          animationFillMode: 'forwards',
          transform: 'rotate(8deg)',
        }}
      >
        {/* Pin Shadow */}
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-black/10 rounded-full blur-sm"></div>
        
        {/* Pin */}
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
          <div className="w-6 h-6 bg-gradient-to-br from-red-500 to-red-600 rounded-full shadow-lg relative">
            <div className="absolute inset-1 bg-gradient-to-br from-red-400 to-red-500 rounded-full"></div>
            <div className="absolute top-0.5 left-1 w-1 h-1 bg-red-300/80 rounded-full"></div>
            {/* Pin needle */}
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-0.5 h-3 bg-gray-400 shadow-sm"></div>
          </div>
        </div>

        {/* Polaroid Photo Frame */}
        <div className="bg-white p-3 pb-8 shadow-2xl transform hover:rotate-6 transition-transform duration-300 hover:scale-105">
          <div className="w-48 h-56 md:w-56 md:h-64 lg:w-64 lg:h-72 bg-gray-100 overflow-hidden">
            <img
              src={imagecopy}
              alt="Iraj"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Photo caption area */}
          <div className="h-12 flex items-center justify-center">
            <p className="text-gray-600 font-handwriting text-lg tracking-wide">
             HELLO!
            </p>
          </div>
        </div>

        {/* Photo shadow */}
        <div className="absolute inset-0 bg-black/20 blur-xl transform translate-y-2 -z-10 opacity-30"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-screen text-center pt-6 sm:pt-12 pb-12">
          
          {/* Mobile Photo - Centered below portfolio text */}
          <div 
            className={`md:hidden mb-8 opacity-0 z-20 relative ${
              isVisible ? 'animate-fade-in' : ''
            }`}
            style={{ 
              animationDelay: '2.2s', 
              animationFillMode: 'forwards'
            }}
          >
            {/* Pin Shadow */}
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-black/10 rounded-full blur-sm"></div>
            
            {/* Pin */}
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 z-20">
              <div className="w-4 h-4 bg-gradient-to-br from-red-500 to-red-600 rounded-full shadow-lg relative">
                <div className="absolute inset-1 bg-gradient-to-br from-red-400 to-red-500 rounded-full"></div>
                <div className="absolute top-0.5 left-1 w-1 h-1 bg-red-300/80 rounded-full"></div>
                {/* Pin needle */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-2 bg-gray-400 shadow-sm"></div>
              </div>
            </div>

            {/* Mobile Polaroid Photo Frame - Smaller and centered */}
            <div className="bg-white p-2 pb-4 shadow-xl transform hover:scale-105 transition-transform duration-300 mx-auto">
              <div className="w-32 h-36 bg-gray-100 overflow-hidden">
                <img
                  src={imagecopy}
                  alt="Iraj"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Photo caption area */}
              <div className="h-6 flex items-center justify-center">
                <p className="text-gray-600 font-handwriting text-sm tracking-wide">
                 HELLO!
                </p>
              </div>
            </div>
            
            {/* Photo shadow */}
            <div className="absolute inset-0 bg-black/20 blur-xl transform translate-y-2 -z-10 opacity-30"></div>
          </div>
          {/* Handwritten Portfolio Text with Letter Animation - Responsive sizing */}
          <div className="mb-4 sm:mb-6 relative">
            <h1 
              className="font-handwriting text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-[8rem] xl:text-[12rem] 2xl:text-[15rem] font-bold text-gray-800 leading-none tracking-tight select-none"
              data-testid="text-portfolio"
            >
              {showLetters ? (
                portfolioLetters.map((letter, index) => (
                  <span
                    key={index}
                    className="letter-animate"
                    style={{ 
                      animationDelay: `${300 + index * 100}ms`,
                      animationFillMode: 'forwards'
                    }}
                  >
                    {letter}
                  </span>
                ))
              ) : (
                <span className="opacity-0">portfolio</span>
              )}
            </h1>
            
            {/* Decorative underline */}
            <div 
              className={`absolute -bottom-2 sm:-bottom-4 left-1/2 transform -translate-x-1/2 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-rose-300/40 to-transparent opacity-0 ${
                isVisible ? 'animate-fade-in' : ''
              }`}
              style={{ 
                width: '60%',
                animationDelay: '1.8s', 
                animationFillMode: 'forwards' 
              }}
            />
          </div>

          {/* Subtitle with Bounce Animation - Responsive text */}
          <div 
            className={`opacity-0 ${
              isVisible ? 'animate-bounce-in' : ''
            }`}
            style={{ animationDelay: '1.6s', animationFillMode: 'forwards' }}
          >
            <p 
              className="text-base sm:text-lg lg:text-xl font-medium text-gray-600 tracking-wide relative"
              data-testid="text-subtitle"
            >
              UX/UI Designer
              
              {/* Small decorative elements around subtitle - Hidden on very small screens */}
              <span 
                className={`absolute -left-6 sm:-left-8 top-1/2 transform -translate-y-1/2 w-1 h-1 bg-rose-400/50 rounded-full opacity-0 hidden sm:block ${
                  isVisible ? 'animate-pulse-glow' : ''
                }`}
                style={{ animationDelay: '2.2s', animationFillMode: 'forwards' }}
              />
              <span 
                className={`absolute -right-6 sm:-right-8 top-1/2 transform -translate-y-1/2 w-1 h-1 bg-orange-400/50 rounded-full opacity-0 hidden sm:block ${
                  isVisible ? 'animate-pulse-glow' : ''
                }`}
                style={{ animationDelay: '2.4s', animationFillMode: 'forwards' }}
              />
            </p>
          </div>

          {/* Subtle scroll indicator with animation */}
          <div 
            className={`absolute bottom-12 sm:bottom-20 left-1/2 transform -translate-x-1/2 opacity-0 ${
              isVisible ? 'animate-fade-in animate-float' : ''
            }`}
            style={{ animationDelay: '3s', animationFillMode: 'forwards' }}
          >
            <div className="flex flex-col items-center space-y-1 sm:space-y-2">
              <div className="w-px h-6 sm:h-8 bg-gradient-to-b from-gray-400 to-transparent"></div>
              <div className="w-1 h-1 bg-gray-400 rounded-full animate-pulse"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}