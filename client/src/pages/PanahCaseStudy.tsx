import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import { CaseStudySection } from "@/components/CaseStudySection";
import { Badge } from "@/components/ui/badge";
import panahImage from "@assets/iPhone16.png";
import panahSplash from "@assets/iPhone16ProMax1.png";
import panahHome from "@assets/iPhone16ProMax2.png";
import panahShelters from "@assets/iPhone16ProMax4.png";
import panahAlerts from "@assets/iPhone16ProMax5.png";
import panahDonate from "@assets/iPhone16ProMax6.png";

export default function PanahCaseStudy() {
  return (
    <CaseStudyLayout
      title="Panah Emergency Relief App"
      subtitle="Connecting flood victims with life-saving resources during crisis"
      heroImage={panahImage}
      timeline="2 weeks"
      role="UX/UI Designer, Researcher"
      tools={["Figma", "User Interviews", "Rapid Prototyping"]}
    >
      <CaseStudySection title="Problem">
        <p>
          During the recent Karachi monsoons, thousands of residents were stranded without timely help. 
          Government response was limited, the citizens were willing to help eachother by offering shelters in their homes and offices but there was no centralized platform to connect affected 
          citizens with volunteers, shelters, or donors.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          <Badge variant="destructive">Emergency Response Gap</Badge>
          <Badge variant="outline">Limited Government Resources</Badge>
          <Badge variant="outline">Community Disconnection</Badge>
        </div>
      </CaseStudySection>

      <CaseStudySection title="Target Audience">
        <ul>
          <li><strong>Primary:</strong> Residents of Karachi (all socioeconomic groups)</li>
          <li><strong>Secondary:</strong> Families stuck in flooded homes</li>
          <li><strong>Stakeholders:</strong> Volunteers & donors willing to help</li>
        </ul>
      </CaseStudySection>

      <CaseStudySection title="Research & Insights">
        <p>
          I conducted interviews and reviews with friends and peers who were directly affected 
          by the floods to understand their immediate needs and pain points.
        </p>
        
        <div className="bg-accent/10 p-6 rounded-lg my-8 border-l-4 border-accent">
          <h4 className="font-semibold text-accent mb-2">Key Insight</h4>
          <p className="text-foreground italic">
            "There was no single app that could provide shelter, donation, and emergency updates together."
          </p>
        </div>

        <p>
          The research revealed a critical need for simplicity and trustworthy features, 
          especially during high-stress emergency situations.
        </p>
      </CaseStudySection>

      <CaseStudySection title="Design Process">
        <p>
          <strong>Tool:</strong> Figma
        </p>
        <p>
          Due to the urgency of the problem, I went straight to final designs without iterations. 
          The design focused on emergency-first principles:
        </p>
        
        <div className="grid md:grid-cols-3 gap-4 my-8">
          <div className="bg-destructive/10 p-4 rounded-lg border border-destructive/20">
            <div className="w-4 h-4 bg-destructive rounded-full mb-2"></div>
            <h5 className="font-medium mb-1">Red → Danger</h5>
            <p className="text-sm text-muted-foreground">Emergency alerts and critical actions</p>
          </div>
          <div className="bg-green-500/10 p-4 rounded-lg border border-green-500/20">
            <div className="w-4 h-4 bg-green-500 rounded-full mb-2"></div>
            <h5 className="font-medium mb-1">Green → Safe</h5>
            <p className="text-sm text-muted-foreground">Safe zones and successful actions</p>
          </div>
          <div className="bg-yellow-500/10 p-4 rounded-lg border border-yellow-500/20">
            <div className="w-4 h-4 bg-yellow-500 rounded-full mb-2"></div>
            <h5 className="font-medium mb-1">Yellow → Alert</h5>
            <p className="text-sm text-muted-foreground">Warnings and important information</p>
          </div>
        </div>
      </CaseStudySection>

      <CaseStudySection title="Key Features">
        <div className="space-y-12">
          {/* App Branding & Launch */}
          <div className="text-center">
            <img 
              src={panahSplash} 
              alt="Panah app splash screen with logo" 
              className="w-64 mx-auto rounded-2xl shadow-lg mb-6"
            />
            <h4 className="text-lg font-semibold mb-2">Trusted Emergency Brand</h4>
            <p className="text-muted-foreground">Clean, recognizable branding with the house and location pin symbolizing safe shelter during emergencies.</p>
          </div>

          {/* Main Dashboard */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-semibold mb-4 text-accent">🏠 Main Dashboard</h4>
              <p className="mb-4">
                The home screen provides quick access to all essential emergency services through clear, 
                large touch targets designed for stress situations.
              </p>
              <ul className="space-y-2">
                <li><strong>Shelter:</strong> Find safe places instantly</li>
                <li><strong>SOS:</strong> One-tap emergency alerts</li>
                <li><strong>Alerts:</strong> Real-time emergency updates</li>
                <li><strong>Donate:</strong> Support relief efforts</li>
                <li><strong>Emergency Button:</strong> Always accessible red SOS button</li>
              </ul>
            </div>
            <div className="text-center">
              <img 
                src={panahHome} 
                alt="Panah main dashboard with emergency services" 
                className="w-64 mx-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>

          {/* Shelter Finder */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 text-center">
              <img 
                src={panahShelters} 
                alt="Shelter finder with available locations" 
                className="w-64 mx-auto rounded-2xl shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h4 className="text-xl font-semibold mb-4 text-green-600">🏠 Smart Shelter Finder</h4>
              <p className="mb-4">
                Community-driven shelter system where residents can offer their homes as safe spaces, 
                with real-time availability and capacity information.
              </p>
              <ul className="space-y-2">
                <li><strong>Live Search:</strong> Filter by location and shelter type</li>
                <li><strong>Capacity Tracking:</strong> Real-time occupancy status</li>
                <li><strong>Resource Information:</strong> Available amenities and supplies</li>
                <li><strong>Instant Directions:</strong> GPS navigation to shelter locations</li>
              </ul>
            </div>
          </div>

          {/* Emergency Alerts */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-semibold mb-4 text-destructive">⚠️ Emergency Alert System</h4>
              <p className="mb-4">
                Color-coded alert system providing critical weather and emergency information 
                with immediate action guidance.
              </p>
              <ul className="space-y-2">
                <li><strong>Severe Weather:</strong> Tornado and storm warnings</li>
                <li><strong>Flash Floods:</strong> Real-time flood risk updates</li>
                <li><strong>Safety Instructions:</strong> Clear evacuation guidance</li>
                <li><strong>Resource Links:</strong> Quick access to shelters and safety tips</li>
              </ul>
            </div>
            <div className="text-center">
              <img 
                src={panahAlerts} 
                alt="Emergency alerts with weather warnings" 
                className="w-64 mx-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>

          {/* Donation Platform */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 text-center">
              <img 
                src={panahDonate} 
                alt="Donation platform with impact tracking" 
                className="w-64 mx-auto rounded-2xl shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h4 className="text-xl font-semibold mb-4 text-purple-600">💝 Community Donation Hub</h4>
              <p className="mb-4">
                Transparent donation system showing real impact and connecting donors 
                directly with urgent relief needs.
              </p>
              <ul className="space-y-2">
                <li><strong>Impact Tracking:</strong> See exactly how donations help</li>
                <li><strong>Quick Donate:</strong> Pre-set amounts for fast giving</li>
                <li><strong>Urgent Needs:</strong> Real-time disaster response funding</li>
                <li><strong>Progress Bars:</strong> Visual funding goals and achievements</li>
              </ul>
            </div>
          </div>
        </div>
      </CaseStudySection>

      <CaseStudySection title="Design Highlights">
        <ul>
          <li><strong>Simple, minimal UI</strong> designed specifically for high-stress emergency situations</li>
          <li><strong>Emergency-first colors</strong> for quick recognition and intuitive understanding</li>
          <li><strong>Accessibility considered:</strong> large buttons and highly readable text for all users</li>
          <li><strong>One-tap actions</strong> to minimize cognitive load during emergencies</li>
        </ul>
      </CaseStudySection>

      <CaseStudySection title="Outcome & Impact">
        <div className="bg-green-50 dark:bg-green-900/10 p-6 rounded-lg border border-green-200 dark:border-green-800">
          <h4 className="font-semibold text-green-800 dark:text-green-400 mb-2">Positive User Feedback</h4>
          <p className="text-green-700 dark:text-green-300 italic mb-4">
            "Easy to use, especially in panic situations."
          </p>
          <p>
            The concept prototype received positive feedback from peers who were directly affected 
            by the floods. The design successfully addressed the core need for a simple, trustworthy 
            emergency response tool.
          </p>
        </div>

        <div className="mt-6">
          <h4 className="font-semibold mb-3">Future Potential</h4>
          <p>
            This app concept has the potential to scale as a community-driven disaster response tool, 
            not just for floods but for various emergency situations. The design framework could be 
            adapted for earthquake response, fire emergencies, or other natural disasters.
          </p>
        </div>
      </CaseStudySection>

      <CaseStudySection title="Lessons Learned">
        <ul>
          <li><strong>Emergency design requires different principles</strong> - simplicity and speed over aesthetics</li>
          <li><strong>Color psychology is crucial</strong> in crisis situations for intuitive navigation</li>
          <li><strong>Community-driven solutions</strong> can be more effective than top-down approaches</li>
          <li><strong>Rapid prototyping</strong> can be valuable when addressing urgent social problems</li>
        </ul>
      </CaseStudySection>

     
    </CaseStudyLayout>
  );
}