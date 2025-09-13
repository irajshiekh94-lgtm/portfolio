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
      {/* Top Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-20 px-8 lg:px-12 py-8">
        <div className="flex justify-between items-center">
          {/* Left: Year */}
          <div 
            className={`text-sm font-medium text-gray-600 opacity-0 ${
              isVisible ? 'animate-fade-in' : ''
            }`}
            style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}
            data-testid="nav-year"
          >
            2024
          </div>

          {/* Right: External Links */}
          <div 
            className={`flex items-center gap-8 text-sm font-medium text-gray-600 opacity-0 ${
              isVisible ? 'animate-fade-in' : ''
            }`}
            style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}
          >
            <a 
              href="https://behance.net/irajshahid" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gray-900 transition-colors duration-200"
              data-testid="link-behance"
            >
              Behance
            </a>
            <a 
              href="https://linkedin.com/in/irajshahid" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gray-900 transition-colors duration-200"
              data-testid="link-linkedin"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </nav>

      {/* Signature in top-right */}
      <div 
        className={`absolute top-20 right-8 lg:right-12 z-10 opacity-0 ${
          isVisible ? 'animate-fade-in-right' : ''
        }`}
        style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}
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