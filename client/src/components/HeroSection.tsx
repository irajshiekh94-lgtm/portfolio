import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      id="hero" 
      className="min-h-screen relative overflow-hidden"
      data-testid="hero-section"
      style={{
        background: `
          radial-gradient(1200px 600px at 20% 10%, hsla(10, 40%, 80%, 0.12), transparent 60%),
          radial-gradient(800px 400px at 80% 30%, hsla(340, 70%, 85%, 0.08), transparent 60%),
          #faf9f7
        `
      }}
    >
      {/* Signature in top-left */}
      <div 
        className={`absolute top-8 left-8 lg:left-12 z-10 opacity-0 ${
          isVisible ? 'animate-fade-in' : ''
        }`}
        style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}
      >
        <p 
          className="font-script text-xl lg:text-2xl text-gray-500 opacity-80"
          data-testid="text-signature"
        >
          Iraj Shahid
        </p>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
          
          {/* Handwritten Portfolio Text */}
          <div 
            className={`mb-6 opacity-0 ${
              isVisible ? 'animate-fade-up' : ''
            }`}
            style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}
          >
            <h1 
              className="font-handwriting text-[8rem] lg:text-[12rem] xl:text-[15rem] font-bold text-gray-800 leading-none tracking-tight select-none"
              data-testid="text-portfolio"
            >
              portfolio
            </h1>
          </div>

          {/* Subtitle */}
          <div 
            className={`opacity-0 ${
              isVisible ? 'animate-fade-in' : ''
            }`}
            style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}
          >
            <p 
              className="text-lg lg:text-xl font-medium text-gray-600 tracking-wide"
              data-testid="text-subtitle"
            >
              UX/UI Designer
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}