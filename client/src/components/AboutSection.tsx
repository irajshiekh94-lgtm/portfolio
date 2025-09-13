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
        <div className="max-w-6xl mx-auto">
          
          {/* Hello Title - Centered */}
          <div 
            className={`transition-all duration-1000 text-center mb-16 ${
              animateContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-6xl lg:text-8xl font-light text-foreground leading-tight">
              Hello,
            </h2>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Text Content Column */}
            <div className="lg:col-span-7 space-y-8">
              <div 
                className={`transition-all duration-1000 delay-500 ${
                  animateContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <h3 className="text-4xl lg:text-5xl font-light text-foreground mb-6 leading-tight">
                  I'm Iraj Shahid
                </h3>
                <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full mb-8"></div>
                <p className="text-lg text-muted-foreground mb-8 font-light tracking-wide">
                  4th year student in Industrial Design at Sir Syed School of Design, Lyari, France
                </p>
              </div>

              <div 
                className={`transition-all duration-1000 delay-700 ${
                  animateContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                  <p>
                    Curious and passionate, I am interested in many fields such as photography and computer science.
                  </p>
                  <p>
                    But because of my interests, the one that stands out the most is creativity mixed with empathy.
                    So I ended up discovering the UI/UX Designer profession by attending a design conference.
                  </p>
                  <p>
                    With this portfolio I aim to highlight my interest in UI, modeling and rendering—more broadly, in image creation.
                  </p>
                </div>
              </div>
            </div>

            {/* Photo Column */}
            <div className="lg:col-span-5">
              <div 
                className={`transition-all duration-1000 delay-300 ${
                  animateContent ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
              >
                <div className="relative mx-auto lg:mx-0 max-w-sm">
                  <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src={profileImage}
                      alt="Iraj Shahid - UI/UX Designer"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      data-testid="about-profile-image"
                    />
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent/30 rounded-full"></div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}