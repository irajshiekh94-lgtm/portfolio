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
      <div className="container mx-auto px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Card Container */}
          <div className="bg-card rounded-xl shadow-lg border border-border p-12">
            <div className="flex flex-col lg:flex-row gap-16 items-start">
              
              {/* Left Column */}
              <div className="lg:w-1/3 space-y-8">
                {/* Hello Title */}
                <div 
                  className={`transition-all duration-1000 ${
                    animateContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                >
                  <h2 className="text-5xl lg:text-6xl font-light text-foreground leading-tight mb-8">
                    Hello,
                  </h2>
                </div>

                {/* Photo */}
                <div 
                  className={`transition-all duration-1000 delay-300 ${
                    animateContent ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                >
                  <div className="w-full max-w-sm">
                    <div className="w-full aspect-[3/4] rounded-lg overflow-hidden shadow-lg">
                      <img 
                        src={profileImage}
                        alt="Iraj Shahid - UI/UX Designer"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        data-testid="about-profile-image"
                      />
                    </div>
                  </div>
                </div>

                {/* Personal Description */}
                <div 
                  className={`transition-all duration-1000 delay-500 ${
                    animateContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                >
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    I'm Iraj, a budding <strong>UX designer</strong>. I enjoy using my creativity and problem solving skills to solve customer experiences. With a keen understanding of usability, I specialize in creating interfaces that don't just look great, but also work intuitively. Passionate about user-centered design that continuous learning is the key to success, and I'm always on the lookout for fresh challenges to keep me motivated and engaged.
                  </p>
                </div>
              </div>

              {/* Middle Column */}
              <div className="lg:w-1/3 space-y-8">
                {/* Experience Section */}
                <div 
                  className={`transition-all duration-1000 delay-700 ${
                    animateContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                >
                  <h3 className="text-lg font-semibold text-foreground mb-4">Experience</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium text-foreground">UX Generalist Designer at Forbes Marshall Pvt Ltd</h4>
                      <p className="text-sm text-muted-foreground mb-2">15 May 2024 - 12 July 2024</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Organized interviews and conducted surveys for better user experience</li>
                        <li>• Created user flows and user journey, illustrations</li>
                        <li>• Visual design elements, final prototyping along with user testing</li>
                        <li>• Also created a design system for further projects reference with the team.</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-foreground">Visual Designer at Birbal Infotech Pvt Ltd</h4>
                      <p className="text-sm text-muted-foreground mb-2">12 April 2024 - 12 May 2024</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Worked for a travel company, made creatives for social media along with iterary template using figma and illustrator.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Software Section */}
                <div 
                  className={`transition-all duration-1000 delay-900 ${
                    animateContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                >
                  <h3 className="text-lg font-semibold text-foreground mb-4">Software</h3>
                  <div className="flex flex-wrap gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 font-bold text-xs">Fi</span>
                    </div>
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <span className="text-orange-600 font-bold text-xs">Ai</span>
                    </div>
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <span className="text-purple-600 font-bold text-xs">Ps</span>
                    </div>
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                      <span className="text-red-600 font-bold text-xs">Ai</span>
                    </div>
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <span className="text-orange-600 font-bold text-xs">≡</span>
                    </div>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 font-bold text-xs">{`{}`}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="lg:w-1/3 space-y-8">
                {/* Key Strengths */}
                <div 
                  className={`transition-all duration-1000 delay-1100 ${
                    animateContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                >
                  <h3 className="text-lg font-semibold text-foreground mb-4">Key Strengths</h3>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• User Study & Analysis</li>
                    <li>• User Flow</li>
                    <li>• Sketching</li>
                    <li>• Journey Mapping</li>
                    <li>• Information Architecture</li>
                    <li>• Usability Testing</li>
                    <li>• Wireframing</li>
                    <li>• Prototyping</li>
                    <li>• Responsive Design</li>
                  </ul>
                </div>

                {/* Soft Skills */}
                <div 
                  className={`transition-all duration-1000 delay-1300 ${
                    animateContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                >
                  <h3 className="text-lg font-semibold text-foreground mb-4">Soft Skills</h3>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Problem Solving</li>
                    <li>• Empathy</li>
                    <li>• Critical thinking</li>
                    <li>• Communication</li>
                  </ul>
                </div>

                {/* Information */}
                <div 
                  className={`transition-all duration-1000 delay-1500 ${
                    animateContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                >
                  <h3 className="text-lg font-semibold text-foreground mb-4">Information</h3>
                  <div className="text-sm text-muted-foreground space-y-2">
                    <p>irajshahid.portfolio.com</p>
                    <p>linkedin.com/in/irajshahid</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}