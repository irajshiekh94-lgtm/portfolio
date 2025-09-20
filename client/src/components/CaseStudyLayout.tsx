import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "wouter";

interface CaseStudyLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  heroImage: string;
  timeline: string;
  role: string;
  tools: string[];
  liveLink?: string;
}

export function CaseStudyLayout({ 
  children, 
  title, 
  subtitle, 
  heroImage, 
  timeline, 
  role, 
  tools, 
  liveLink 
}: CaseStudyLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="fixed">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-4">
          <Link href="/">
          <Button
  variant="ghost"
  className="gap-2 px-4 py-2 rounded-xl bg-white/70 backdrop-blur-sm shadow-md border border-accent/20 
             hover:bg-accent hover:text-white hover:shadow-lg transition-all"
  data-testid="button-back-to-portfolio"
>
  <ArrowLeft className="h-4 w-4" />
  Back to Portfolio
</Button>

          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-case-study-title">
              {title}
            </h1>
            <p className="text-xl text-muted-foreground mb-8" data-testid="text-case-study-subtitle">
              {subtitle}
            </p>
            
            <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground mb-8">
              <div>
                <span className="font-medium">Timeline:</span> {timeline}
              </div>
              <div>
                <span className="font-medium">Role:</span> {role}
              </div>
              <div>
                <span className="font-medium">Tools:</span> {tools.join(", ")}
              </div>
            </div>

            {liveLink && (
              <Button asChild variant="outline" className="gap-2" data-testid="button-view-live">
                <a href={liveLink} target="_blank" rel="noopener noreferrer">
                  View Live Project
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-lg mb-16">
            <img 
              src={heroImage} 
              alt={title} 
              className="w-full h-auto"
              data-testid="img-case-study-hero"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 pb-20">
        {children}
      </div>
    </div>
  );
}