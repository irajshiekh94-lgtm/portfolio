import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import alKhidmatImage from "@assets/BlackandBlueGradientJobDescriptionPresentation_1757799517040.png";
import panahImage from "@assets/BlackandDarkSpacePhotoYouTubeThumbnail_1757799517041.png";
import ikeaImage from "@assets/NeutralMinimalistPhotoTravelVlogYouTubeThumbnail_1757799522712.png";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
  caseStudyLink: string;
}

export default function ProjectShowcase() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const projects: Project[] = [
    {
      id: "al-khidmat",
      title: "AL-KHIDMAT",
      subtitle: "JOB PORTAL",
      description:
        "A comprehensive job portal platform designed to connect talented professionals with meaningful opportunities in the humanitarian sector.",
      image: alKhidmatImage,
      tags: ["UX Research", "UI Design", "Prototyping"],
      caseStudyLink: "/case-studies/alkhidmat",
    },
    {
      id: "panah",
      title: "PANAH",
      subtitle: "EMERGENCY RELIEF APP",
      description:
        "Mobile application providing critical emergency services and relief coordination for disaster-affected communities.",
      image: panahImage,
      tags: ["Mobile Design", "Emergency UX", "Accessibility"],
      caseStudyLink: "/case-studies/panah",
    },
    {
      id: "ikea",
      title: "IKEA",
      subtitle: "LANDING PAGE",
      description:
        "Redesigned landing page experience focusing on product discovery and seamless user journey for furniture shopping.",
      image: ikeaImage,
      tags: ["Web Design", "E-commerce", "Conversion Optimization"],
      caseStudyLink: "/case-studies/ikea",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 bg-background"
      data-testid="projects-section"
    >
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-6xl lg:text-7xl font-extralight text-foreground mb-6 leading-[0.9] tracking-tight">
            FEATURED WORK
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto font-light leading-relaxed">
            A collection of recent projects showcasing user-centered design
            solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group transition-all duration-500 hover:shadow-xl border-0 shadow-lg flex flex-col"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              data-testid={`project-${project.id}`}
            >
              {/* Thumbnail */}
      <CardContent className="p-0 relative overflow-hidden rounded-t-xl">
  <div className="relative w-full h-56 lg:h-64">
    <img
      src={project.image}
      alt={`${project.title} - ${project.subtitle}`}
      className={`w-full h-full transition-transform duration-700 ${
        hoveredProject === project.id ? "scale-105" : "scale-100"
      } ${project.id === "al-khidmat" ? "object-contain bg-black" : "object-cover"}`}
    />
  </div>
</CardContent>

              {/* Text + Button */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div className="mb-4">
                  <h3 className="text-2xl font-semibold text-foreground mb-1">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {project.subtitle}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-secondary rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <Link href={project.caseStudyLink}>
                  <a className="inline-block text-center bg-primary text-white px-5 py-2 rounded-xl text-sm font-medium hover:bg-primary/80 transition">
                    View Case Study
                  </a>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
