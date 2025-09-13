import { useState } from 'react';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export default function ProcessSection() {
  const [hoveredStep, setHoveredStep] = useState<string | null>(null);

  const processSteps: ProcessStep[] = [
    {
      number: '01',
      title: 'BRIEF',
      description: 'The brief is where we take some time to get to know you and your needs. This will allow me to create a product that works well for you, your business and your audience.'
    },
    {
      number: '02', 
      title: 'RESEARCH',
      description: 'Research phase involves understanding your users, market landscape, and competitive analysis to ensure we build the right solution.'
    },
    {
      number: '03',
      title: 'DESIGN',
      description: 'Creating wireframes, prototypes and high-fidelity designs that solve your users\' problems while meeting business objectives.'
    },
    {
      number: '04',
      title: 'TEST & ITERATE',
      description: 'Testing designs with real users and iterating based on feedback to ensure the final product delivers exceptional user experience.'
    }
  ];

  return (
    <section 
      id="process" 
      className="py-24 bg-background relative overflow-hidden"
      data-testid="process-section"
    >
      {/* Background geometric elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 border border-muted rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 border border-muted rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <h2 className="text-5xl lg:text-6xl font-light text-foreground mb-4">
            MY PROCESS
          </h2>
          <p className="text-muted-foreground text-lg mb-16 max-w-2xl">
            I use a design-thinking methodology in my process with great focus on users.
          </p>

          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <div 
                key={step.number}
                className={`flex items-start gap-8 lg:gap-16 transition-all duration-500 hover-elevate p-6 rounded-lg ${
                  hoveredStep === step.number ? 'bg-card' : ''
                }`}
                onMouseEnter={() => setHoveredStep(step.number)}
                onMouseLeave={() => setHoveredStep(null)}
                data-testid={`process-step-${step.number}`}
              >
                <div className="flex-shrink-0">
                  <span 
                    className={`text-3xl font-light transition-colors duration-300 ${
                      hoveredStep === step.number ? 'text-primary' : 'text-muted-foreground'
                    }`}
                  >
                    {step.number}
                  </span>
                </div>
                
                <div className="flex-1">
                  <h3 
                    className={`text-2xl lg:text-3xl font-light mb-4 transition-colors duration-300 ${
                      hoveredStep === step.number ? 'text-foreground' : 'text-muted-foreground'
                    }`}
                  >
                    {step.title} {step.title === 'RESEARCH' && (
                      <span className="inline-block ml-2 text-primary">✦</span>
                    )}
                  </h3>
                  
                  <div className={`overflow-hidden transition-all duration-500 ${
                    hoveredStep === step.number ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}