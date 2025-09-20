import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";

interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  tags: string[];
  imageUrl: string;
  slug: string;
  timeline: string;
}

export function ProjectCard({ title, description, category, tags, imageUrl, slug, timeline }: ProjectCardProps) {
  return (
    <Card className="group hover-elevate cursor-pointer h-full" data-testid={`card-project-${slug}`}>
      <CardContent className="p-0">
        <div className="relative overflow-hidden rounded-t-md">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            data-testid={`img-project-${slug}`}
          />
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <Badge variant="secondary" data-testid={`badge-category-${slug}`}>
              {category}
            </Badge>
            <span className="text-sm text-muted-foreground" data-testid={`text-timeline-${slug}`}>
              {timeline}
            </span>
          </div>
          
          <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors" data-testid={`text-title-${slug}`}>
            {title}
          </h3>
          
          <p className="text-muted-foreground mb-4 line-clamp-2" data-testid={`text-description-${slug}`}>
            {description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="text-xs" data-testid={`badge-tag-${slug}-${index}`}>
                {tag}
              </Badge>
            ))}
          </div>
          
          <Link href={`/case-study/${slug}`}>
            <Button 
              variant="ghost" 
              className="w-full justify-between group/btn"
              data-testid={`button-view-case-study-${slug}`}
            >
              View Case Study
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}