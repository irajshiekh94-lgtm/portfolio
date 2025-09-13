import { useEffect, useState } from 'react';
import profileImage from '@assets/Snapchat-570485137_1757800212972.jpg';

export default function AboutSection() {
  const [animateContent, setAnimateContent] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateContent(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('about');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="about" 
      className="min-h-screen flex items-center relative overflow-hidden bg-background"
      data-testid="about-section"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-16 max-w-7xl mx-auto">
          
          {/* Left Content - Text */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div 
              className={`transition-all duration-1000 ${
                animateContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <h2 className="text-6xl lg:text-7xl font-light text-foreground mb-8 leading-tight">
                Hello!
              </h2>
            </div>

            <div 
              className={`transition-all duration-1000 delay-300 ${
                animateContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <h3 className="text-2xl lg:text-3xl font-medium text-foreground mb-6">
                I'm Iraj Shahid
              </h3>
              <p className="text-sm text-muted-foreground mb-6 font-medium tracking-wide uppercase">
                4th year student in Industrial Design at Sir Syed School of Design, Lyari, France
              </p>
            </div>

            <div 
              className={`transition-all duration-1000 delay-500 ${
                animateContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Curious and passionate, I am interested in many fields such as photography or computer science.
                </p>
                <p>
                  But because of my interests always in by the law one that stds me the most: the creativity mixed with empathy.
                  So I ended up discovering the UI/UX Designer job by going to a design art shop design conference.
                </p>
                <p>
                  With this portfolio I aim to highlight my interest in UI, Modelling and rendering since more broadly, in image creation.
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Photo */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <div 
              className={`transition-all duration-1000 delay-700 ${
                animateContent ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            >
              <div className="relative">
                <div className="w-80 h-96 lg:w-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={profileImage}
                    alt="Iraj Shahid - UI/UX Designer"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    data-testid="about-profile-image"
                  />
                </div>
                
                {/* Subtle decorative elements */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary/20 rounded-full"></div>
                <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-accent/20 rounded-full"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}