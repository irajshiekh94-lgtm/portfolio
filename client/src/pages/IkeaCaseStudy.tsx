import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import { CaseStudySection } from "@/components/CaseStudySection";
import { Badge } from "@/components/ui/badge";
import ikeaImage from "@assets/GalaxyTabS8Ultra.png";
import ikeaArImage from "@assets/MacBookAir.png";

export default function IkeaCaseStudy() {
  return (
    <CaseStudyLayout
      title="IKEA Landing Page Redesign"
      subtitle="Simplifying the overwhelming shopping experience with conversion-focused design"
      heroImage={ikeaImage}
      timeline="1 week"
      role="UX/UI Designer"
      tools={["Figma", "Heuristic Evaluation", "Competitive Analysis"]}
    >
      <CaseStudySection title="Problem">
        <p>
          IKEA's website often overwhelms users with too many product options and navigation complexity. 
          The challenge was to simplify the landing page experience and increase conversion rate while 
          maintaining the brand's comprehensive product offering.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          <Badge variant="destructive">Cognitive Overload</Badge>
          <Badge variant="outline">Complex Navigation</Badge>
          <Badge variant="outline">Low Conversion Rates</Badge>
        </div>
      </CaseStudySection>

      <CaseStudySection title="Target Audience">
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-semibold mb-2 text-accent">Millennials</h4>
            <p className="text-sm text-muted-foreground">
              Tech-savvy shoppers looking for affordable, stylish furniture solutions
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-accent">Families</h4>
            <p className="text-sm text-muted-foreground">
              Parents seeking practical, child-friendly furniture and home organization
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-accent">Professionals</h4>
            <p className="text-sm text-muted-foreground">
              Busy individuals wanting quick inspiration and efficient purchase flows
            </p>
          </div>
        </div>
      </CaseStudySection>

      <CaseStudySection title="Research & Insights">
        <p>
          I conducted a comprehensive heuristic evaluation of IKEA's existing website to identify 
          usability issues and friction points in the user journey.
        </p>
        
        <div className="bg-red-50 dark:bg-red-900/10 p-6 rounded-lg my-8 border-l-4 border-red-500">
          <h4 className="font-semibold text-red-800 dark:text-red-400 mb-2">Key Friction Points</h4>
          <ul className="space-y-2 text-red-700 dark:text-red-300">
            <li>• Cluttered visuals overwhelming users with too many choices</li>
            <li>• Multiple competing CTAs reducing conversion effectiveness</li>
            <li>• Long, complex navigation paths to products</li>
            <li>• Lack of clear visual hierarchy</li>
          </ul>
        </div>

        <h4 className="font-semibold mb-3">Competitive Analysis</h4>
        <p>
          I analyzed competitors like West Elm and Wayfair to understand industry best practices 
          for furniture e-commerce, identifying opportunities for visual storytelling and 
          simplified browsing experiences.
        </p>
      </CaseStudySection>

      <CaseStudySection title="Design Process">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-semibold">1</div>
            <div>
              <h4 className="font-semibold">Competitive Analysis</h4>
              <p className="text-muted-foreground">Studied West Elm, Wayfair, and other furniture retailers</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-semibold">2</div>
            <div>
              <h4 className="font-semibold">Wireframing Multiple Variations</h4>
              <p className="text-muted-foreground">Explored different layout approaches and information hierarchies</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-semibold">3</div>
            <div>
              <h4 className="font-semibold">High-Fidelity Prototypes</h4>
              <p className="text-muted-foreground">Created polished mockups and tested with peers for feedback</p>
            </div>
          </div>
        </div>
      </CaseStudySection>

      <CaseStudySection title="Key Features">
        <div className="space-y-12">
          {/* Hero Section Redesign */}
          <div className="text-center">
            <img 
              src={ikeaImage} 
              alt="IKEA redesigned homepage with clean hero section" 
              className="w-full max-w-4xl mx-auto rounded-lg shadow-lg mb-6"
            />
            <h4 className="text-lg font-semibold mb-2">Streamlined Hero Experience</h4>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Simplified homepage featuring "THE WONDERFUL EVERYDAY" messaging with clean navigation 
              and focused lifestyle imagery that reduces cognitive overload.
            </p>
          </div>

          {/* Focused Navigation */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-semibold mb-4 text-blue-600">🧭 Simplified Navigation</h4>
              <p className="mb-4">
                Streamlined navigation bar with only essential categories: Home, Newsroom, Jobs, 
                Stories, and Our Business. This reduces decision fatigue and guides users more effectively.
              </p>
              <ul className="space-y-2">
                <li><strong>Clean Header:</strong> Uncluttered top navigation</li>
                <li><strong>Essential Links:</strong> Only the most important sections</li>
                <li><strong>Clear Hierarchy:</strong> Logical information organization</li>
                <li><strong>Brand Focus:</strong> IKEA logo prominently displayed</li>
              </ul>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-lg">
              <h5 className="font-medium mb-3">Navigation Improvements</h5>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Original menu items:</span>
                  <span className="text-red-600">12+</span>
                </div>
                <div className="flex justify-between">
                  <span>Redesigned menu items:</span>
                  <span className="text-green-600">5</span>
                </div>
                <div className="flex justify-between">
                  <span>Cognitive load reduction:</span>
                  <span className="text-green-600">58%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Immersive AR Experience */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 text-center">
              <img 
                src={ikeaArImage} 
                alt="IKEA AR furniture visualization experience" 
                className="w-full max-w-md mx-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h4 className="text-xl font-semibold mb-4 text-purple-600">🥽 Interactive AR Preview</h4>
              <p className="mb-4">
                Enhanced product experience with augmented reality integration, allowing customers 
                to visualize furniture in their actual space before purchasing.
              </p>
              <ul className="space-y-2">
                <li><strong>3D Product View:</strong> Rotate and examine furniture from all angles</li>
                <li><strong>Room Integration:</strong> See how items fit in real environments</li>
                <li><strong>Quick Purchase:</strong> Streamlined "Add to Cart" from AR view</li>
                <li><strong>Reduced Returns:</strong> Better visualization leads to confident purchases</li>
              </ul>
            </div>
          </div>

          {/* Design System Features */}
          <div className="bg-accent/5 p-8 rounded-lg">
            <h4 className="text-xl font-semibold mb-6 text-accent">🎨 Design System Improvements</h4>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h5 className="font-medium mb-2">Visual Hierarchy</h5>
                <p className="text-sm text-muted-foreground">
                  Clear typographic scale with "THE WONDERFUL EVERYDAY" as the primary focus point
                </p>
              </div>
              <div>
                <h5 className="font-medium mb-2">White Space Usage</h5>
                <p className="text-sm text-muted-foreground">
                  Generous spacing around elements creates breathing room and reduces visual clutter
                </p>
              </div>
              <div>
                <h5 className="font-medium mb-2">Brand Consistency</h5>
                <p className="text-sm text-muted-foreground">
                  Maintains IKEA's signature blue and yellow while introducing cleaner layouts
                </p>
              </div>
            </div>
          </div>
        </div>
      </CaseStudySection>

      <CaseStudySection title="Design System & Visual Language">
        <h4 className="font-semibold mb-4">Minimalist Palette</h4>
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-4 rounded-lg border shadow-sm">
            <div className="w-full h-12 bg-white border rounded mb-2"></div>
            <p className="text-sm font-medium">Pure White</p>
            <p className="text-xs text-muted-foreground">Clean backgrounds</p>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg border shadow-sm">
            <div className="w-full h-12 bg-yellow-100 rounded mb-2"></div>
            <p className="text-sm font-medium">Warm Beige</p>
            <p className="text-xs text-muted-foreground">IKEA brand warmth</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border shadow-sm">
            <div className="w-full h-12 bg-blue-600 rounded mb-2"></div>
            <p className="text-sm font-medium">IKEA Blue</p>
            <p className="text-xs text-muted-foreground">Brand consistency</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg border shadow-sm">
            <div className="w-full h-12 bg-gray-400 rounded mb-2"></div>
            <p className="text-sm font-medium">Muted Tones</p>
            <p className="text-xs text-muted-foreground">Supporting elements</p>
          </div>
        </div>

        <h4 className="font-semibold mb-4">Layout Principles</h4>
        <ul>
          <li><strong>Grid-based layout</strong> for easy visual scanning and organization</li>
          <li><strong>Mobile-first responsive design</strong> ensuring optimal experience across devices</li>
          <li><strong>Generous white space</strong> to reduce visual clutter and improve focus</li>
          <li><strong>Consistent typography scale</strong> for clear information hierarchy</li>
        </ul>
      </CaseStudySection>

      <CaseStudySection title="Before vs After Comparison">
        <div className="grid md:grid-cols-2 gap-8 my-8">
          <div className="bg-red-50 dark:bg-red-900/10 p-6 rounded-lg border border-red-200 dark:border-red-800">
            <h4 className="font-semibold text-red-800 dark:text-red-400 mb-3">Before: Issues</h4>
            <ul className="space-y-2 text-sm">
              <li>❌ Overwhelming product showcase</li>
              <li>❌ Multiple competing CTAs</li>
              <li>❌ Complex mega-menu navigation</li>
              <li>❌ Inconsistent visual hierarchy</li>
              <li>❌ High cognitive load</li>
            </ul>
          </div>
          <div className="bg-green-50 dark:bg-green-900/10 p-6 rounded-lg border border-green-200 dark:border-green-800">
            <h4 className="font-semibold text-green-800 dark:text-green-400 mb-3">After: Solutions</h4>
            <ul className="space-y-2 text-sm">
              <li>✅ Focused lifestyle hero section</li>
              <li>✅ Single, prominent CTA</li>
              <li>✅ Simplified 4-category navigation</li>
              <li>✅ Clear visual hierarchy</li>
              <li>✅ Reduced decision fatigue</li>
            </ul>
          </div>
        </div>
      </CaseStudySection>

      <CaseStudySection title="Outcome & Impact">
        <div className="bg-green-50 dark:bg-green-900/10 p-6 rounded-lg border border-green-200 dark:border-green-800 mb-6">
          <h4 className="font-semibold text-green-800 dark:text-green-400 mb-4">Design Improvements</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-medium mb-2">User Experience</h5>
              <ul className="text-sm space-y-1">
                <li>• Reduced cognitive load through cleaner design</li>
                <li>• Improved visual hierarchy and navigation</li>
                <li>• Enhanced mobile experience</li>
              </ul>
            </div>
            <div>
              <h5 className="font-medium mb-2">Business Impact</h5>
              <ul className="text-sm space-y-1">
                <li>• More focused CTAs guide users to purchase</li>
                <li>• Streamlined user journey reduces drop-off</li>
                <li>• Better brand presentation</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-accent/10 p-6 rounded-lg border-l-4 border-accent">
          <h4 className="font-semibold text-accent mb-2">Key Achievement</h4>
          <p className="text-foreground">
            Successfully balanced IKEA's comprehensive product offering with a clean, 
            conversion-focused user experience that reduces decision paralysis while 
            maintaining brand identity.
          </p>
        </div>
      </CaseStudySection>

      <CaseStudySection title="Implementation Recommendations">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-3 text-accent">Phase 1: A/B Testing</h4>
            <ul>
              <li>Test simplified hero section vs. current design</li>
              <li>Measure conversion rates and user engagement</li>
              <li>Gather user feedback on navigation simplification</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-accent">Phase 2: Full Implementation</h4>
            <ul>
              <li>Roll out responsive design system</li>
              <li>Implement personalization features</li>
              <li>Monitor performance metrics and iterate</li>
            </ul>
          </div>
        </div>
      </CaseStudySection>

      <CaseStudySection title="Lessons Learned">
        <ul>
          <li><strong>Less is more</strong> - Simplifying complex interfaces often improves user experience</li>
          <li><strong>Visual hierarchy is crucial</strong> for guiding user attention and behavior</li>
          <li><strong>Brand consistency matters</strong> even when simplifying existing designs</li>
          <li><strong>Mobile-first approach</strong> ensures optimal experience across all devices</li>
          <li><strong>User testing validates assumptions</strong> and reveals unexpected insights</li>
        </ul>
      </CaseStudySection>
    </CaseStudyLayout>
  );
}