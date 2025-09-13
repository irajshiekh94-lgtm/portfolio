import { useEffect, useState } from 'react';

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
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
          
          {/* Handwritten Portfolio Text with Letter Animation */}
          <div className="mb-6 relative">
            <h1 
              className="font-handwriting text-[8rem] lg:text-[12rem] xl:text-[15rem] font-bold text-gray-800 leading-none tracking-tight select-none"
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
              className={`absolute -bottom-4 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-transparent via-rose-300/40 to-transparent opacity-0 ${
                isVisible ? 'animate-fade-in' : ''
              }`}
              style={{ 
                width: '60%',
                animationDelay: '1.8s', 
                animationFillMode: 'forwards' 
              }}
            />
          </div>

          {/* Subtitle with Bounce Animation */}
          <div 
            className={`opacity-0 ${
              isVisible ? 'animate-bounce-in' : ''
            }`}
            style={{ animationDelay: '1.6s', animationFillMode: 'forwards' }}
          >
            <p 
              className="text-lg lg:text-xl font-medium text-gray-600 tracking-wide relative"
              data-testid="text-subtitle"
            >
              UX/UI Designer
              
              {/* Small decorative elements around subtitle */}
              <span 
                className={`absolute -left-8 top-1/2 transform -translate-y-1/2 w-1 h-1 bg-rose-400/50 rounded-full opacity-0 ${
                  isVisible ? 'animate-pulse-glow' : ''
                }`}
                style={{ animationDelay: '2.2s', animationFillMode: 'forwards' }}
              />
              <span 
                className={`absolute -right-8 top-1/2 transform -translate-y-1/2 w-1 h-1 bg-orange-400/50 rounded-full opacity-0 ${
                  isVisible ? 'animate-pulse-glow' : ''
                }`}
                style={{ animationDelay: '2.4s', animationFillMode: 'forwards' }}
              />
            </p>
          </div>

          {/* Subtle scroll indicator with animation */}
          <div 
            className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 ${
              isVisible ? 'animate-fade-in animate-float' : ''
            }`}
            style={{ animationDelay: '3s', animationFillMode: 'forwards' }}
          >
            <div className="flex flex-col items-center space-y-2">
              <div className="w-px h-8 bg-gradient-to-b from-gray-400 to-transparent"></div>
              <div className="w-1 h-1 bg-gray-400 rounded-full animate-pulse"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}