import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import alKhidmatImage from '@assets/Black and Blue Gradient Job Description Presentation_1757799517040.png';
import panahImage from '@assets/Black and Dark Space Photo YouTube Thumbnail_1757799517041.png';
import ikeaImage from '@assets/Neutral Minimalist Photo Travel Vlog YouTube Thumbnail_1757799522712.png';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
}

export default function ProjectShowcase() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const projects: Project[] = [
    {
      id: 'al-khidmat',
      title: 'AL-KHIDMAT',
      subtitle: 'JOB PORTAL',
      description: 'A comprehensive job portal platform designed to connect talented professionals with meaningful opportunities in the humanitarian sector.',
      image: alKhidmatImage,
      tags: ['UX Research', 'UI Design', 'Prototyping']
    },
    {
      id: 'panah',
      title: 'PANAH',
      subtitle: 'EMERGENCY RELIEF APP',
      description: 'Mobile application providing critical emergency services and relief coordination for disaster-affected communities.',
      image: panahImage,
      tags: ['Mobile Design', 'Emergency UX', 'Accessibility']
    },
    {
      id: 'ikea',
      title: 'IKEA',
      subtitle: 'LANDING PAGE',
      description: 'Redesigned landing page experience focusing on product discovery and seamless user journey for furniture shopping.',
      image: ikeaImage,
      tags: ['Web Design', 'E-commerce', 'Conversion Optimization']
    }
  ];

  const handleProjectClick = (projectId: string) => {
    console.log(`View project ${projectId} triggered`);
    // TODO: Add project detail modal or navigation
  };

  return (
    <section 
      id="projects" 
      className="py-24 bg-background"
      data-testid="projects-section"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-6xl lg:text-7xl font-extralight text-foreground mb-6 leading-[0.9] tracking-tight">
            FEATURED WORK
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto font-light leading-relaxed">
            A collection of recent projects showcasing user-centered design solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className={`group cursor-pointer transition-all duration-500 hover-elevate border-0 shadow-lg ${
                index === 0 ? 'lg:col-span-2' : ''
              }`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => handleProjectClick(project.id)}
              data-testid={`project-${project.id}`}
            >
              <CardContent className="p-0 relative overflow-hidden rounded-lg">
                <div className="aspect-video lg:aspect-[16/10] relative">
                  <img 
                    src={project.image}
                    alt={`${project.title} - ${project.subtitle}`}
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      hoveredProject === project.id ? 'scale-110' : 'scale-100'
                    }`}
                  />
                  
                  {/* Overlay */}
                  <div 
                    className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
                      hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center p-8">
                      <div className="text-center text-white">
                        <h3 className="text-3xl lg:text-4xl font-extralight mb-3 tracking-tight">
                          {project.title}
                        </h3>
                        <p className="text-base lg:text-lg font-light mb-4 opacity-90">
                          {project.subtitle}
                        </p>
                        <p className="text-sm lg:text-base opacity-80 leading-relaxed mb-6 max-w-md font-light">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap justify-center gap-2">
                          {project.tags.map((tag) => (
                            <span 
                              key={tag}
                              className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium backdrop-blur-sm"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground text-sm">
            More projects available upon request
          </p>
        </div>
      </div>
    </section>
  );
}