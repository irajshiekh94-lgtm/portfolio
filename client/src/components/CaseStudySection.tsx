interface CaseStudySectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function CaseStudySection({ title, children, className = "" }: CaseStudySectionProps) {
  return (
    <section className={`mb-16 ${className}`}>
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-foreground" data-testid={`text-section-${title.toLowerCase().replace(' ', '-')}`}>
        {title}
      </h2>
      <div className="prose prose-lg max-w-none text-foreground prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground">
        {children}
      </div>
    </section>
  );
}