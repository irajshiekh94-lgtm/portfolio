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
                    Hello I'm Iraj
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
                    I specialize in crafting clean, user-friendly interfaces backed by thoughtful design strategy. From wireframes to polished prototypes, I focus on blending creativity with usability to make designs not just look good — but feel intuitive.
                    <br /><br />
                    Passionate about designing with purpose, I love building products that tell a story, solve real problems, and create impact for users. Whether it's a mobile app, web app, or interactive prototype, my goal is always the same: make design simple, human, and engaging.
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
                      <h4 className="font-medium text-foreground">UI UX Designer Intern at Al Khidmat</h4>
                      <p className="text-sm text-muted-foreground mb-2">Current Position</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Designing user-centered digital experiences for social impact</li>
                        <li>• Creating wireframes and prototypes for web and mobile applications</li>
                        <li>• Conducting user research and usability testing</li>
                        <li>• Collaborating with development teams on design implementation</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-foreground">Brand Ambassador of JI Youth Women</h4>
                      <p className="text-sm text-muted-foreground mb-2">Leadership Role</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Representing and promoting organizational values and initiatives</li>
                        <li>• Creating visual content and promotional materials for campaigns</li>
                        <li>• Engaging with community members and building brand awareness</li>
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