import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import { CaseStudySection } from "@/components/CaseStudySection";
import { Badge } from "@/components/ui/badge";
import alKhidmatImage from "@assets/s.png";
import loginPage from "@assets/admin loginpage.png";
import dashboardImage from "@assets/dashboard.png";
import applicationForm from "@assets/formpage.png";
import applicationStatus from "@assets/APplicationstatus.png";
import candidateInfo from "@assets/candidateinfo.png";
import applicationsAdmin from "@assets/applications.png";
import contactUs from "@assets/contactus.png";

export default function AlKhidmatCaseStudy() {
  return (
    <CaseStudyLayout
      title="Al-Khidmat Job Portal"
      subtitle="Connecting humanitarian talent with mission-driven career opportunities"
      heroImage={alKhidmatImage}
      timeline="6 weeks"
      role="UX/UI Designer, Researcher, Front-end Developer"
      tools={["Figma", "Competitive Analysis", "User Journey Mapping, Next.js, Tailwind CSS"]}
    >
      <CaseStudySection title="Problem">
        <p>
        Al-Khidmat previously did not have a dedicated platform to post their job openings or manage applications. As a result, applicants had to rely on third-party platforms like Indeed or other external job boards to find and apply for opportunities. This created a gap in accessibility and limited Al-Khidmat’s ability to directly connect with potential candidates. To address this challenge, the Job Portal was designed as a centralized platform where Al-Khidmat can publish openings, and applicants can seamlessly browse, apply, and track their applications—all within one streamlined system.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          <Badge variant="outline">Limited Sector-Specific Platforms</Badge>
          <Badge variant="outline">Talent-Opportunity Mismatch</Badge>
          <Badge variant="outline">Trust & Reliability Issues</Badge>
        </div>
      </CaseStudySection>

      <CaseStudySection title="Target Audience">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-2 text-accent">Job Seekers</h4>
            <ul>
              <li>Humanitarian sector professionals</li>
              <li>Recent graduates seeking mission-driven careers</li>
              <li>Career changers interested in social impact</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-accent">Employers</h4>
            <ul>
              <li>NGOs and non-profit organizations</li>
              <li>Social enterprises</li>
              <li>International aid organizations</li>
            </ul>
          </div>
        </div>
      </CaseStudySection>

      <CaseStudySection title="Research & Insights">
        <p>
          I conducted a comprehensive analysis of existing job portals in Pakistan, including 
          Rozee and Mustakbil, to understand the current landscape and identify opportunities.
        </p>
        
        <div className="bg-accent/10 p-6 rounded-lg my-8 border-l-4 border-accent">
          <h4 className="font-semibold text-accent mb-2">Key Finding</h4>
          <p className="text-foreground">
            Most existing portals are general-purpose and not focused on humanitarian careers, 
            creating a gap for mission-driven job seekers and organizations.
          </p>
        </div>

        <p>
          The research revealed a critical need for a trustworthy, mission-driven platform 
          that understands the unique requirements of the humanitarian sector.
        </p>
      </CaseStudySection>

      <CaseStudySection title="UX Process">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-semibold">1</div>
            <div>
              <h4 className="font-semibold">Competitor Analysis</h4>
              <p className="text-muted-foreground">Analyzed existing job portals to identify gaps and opportunities</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-semibold">2</div>
            <div>
              <h4 className="font-semibold">Information Architecture</h4>
              <p className="text-muted-foreground">Designed the site structure optimized for humanitarian job searching</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-semibold">3</div>
            <div>
              <h4 className="font-semibold">Wireframes → High-Fidelity</h4>
              <p className="text-muted-foreground">Iterative design process from low to high-fidelity prototypes</p>
            </div>
          </div>
        </div>
      </CaseStudySection>

      <CaseStudySection title="Key Features">
        <div className="space-y-12">
          {/* Mission-Driven About Page */}
          <div className="text-center">
            <img 
              src={alKhidmatImage} 
              alt="Al Khidmat about page showcasing mission and values" 
              className="w-full max-w-4xl mx-auto rounded-lg shadow-lg mb-6"
            />
            <h4 className="text-lg font-semibold mb-2">Mission-Focused Organization Profile</h4>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Clear organizational mission, work culture, and benefits designed to attract candidates 
              who are passionate about humanitarian work and social impact.
            </p>
          </div>

          {/* User-Friendly Application Process */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-semibold mb-4 text-accent">📝 Streamlined Application Form</h4>
              <p className="mb-4">
                Comprehensive yet user-friendly application form that captures all necessary information 
                for humanitarian sector positions, including resume upload and cover letter options.
              </p>
              <ul className="space-y-2">
                <li><strong>Complete Profile:</strong> Personal info, contact details, and location</li>
                <li><strong>Professional Data:</strong> Job title and relevant experience</li>
                <li><strong>Document Upload:</strong> Resume and optional cover letter</li>
                <li><strong>Clean Interface:</strong> Simple, distraction-free form design</li>
              </ul>
            </div>
            <div className="text-center">
              <img 
                src={applicationForm} 
                alt="Job application form with comprehensive fields" 
                className="w-full max-w-md mx-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Application Tracking for Candidates */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 text-center">
              <img 
                src={applicationStatus} 
                alt="Application status tracking dashboard" 
                className="w-full max-w-md mx-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h4 className="text-xl font-semibold mb-4 text-blue-600">📋 Transparent Application Tracking</h4>
              <p className="mb-4">
                Clear status tracking system allowing candidates to monitor their application progress 
                across multiple positions with real-time updates and stage information.
              </p>
              <ul className="space-y-2">
                <li><strong>Status Overview:</strong> Accepted, rejected, or under review</li>
                <li><strong>Timeline Tracking:</strong> Last updated dates for each application</li>
                <li><strong>Stage Information:</strong> Current interview or review stage</li>
                <li><strong>Multiple Applications:</strong> Track various position applications</li>
              </ul>
            </div>
          </div>

          {/* Admin Dashboard & Analytics */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-semibold mb-4 text-green-600">📊 Comprehensive Admin Dashboard</h4>
              <p className="mb-4">
                Powerful admin interface providing complete overview of applications, candidate management, 
                and recruitment analytics to streamline the hiring process.
              </p>
              <ul className="space-y-2">
                <li><strong>Application Metrics:</strong> 1,234 total applications across 567 positions</li>
                <li><strong>Candidate Management:</strong> Preview and download CVs directly</li>
                <li><strong>Growth Analytics:</strong> +15% application increase trend tracking</li>
                <li><strong>Quick Actions:</strong> Efficient candidate search and filtering</li>
              </ul>
            </div>
            <div className="text-center">
              <img 
                src={dashboardImage} 
                alt="Admin dashboard with application analytics" 
                className="w-full max-w-md mx-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Advanced Candidate Management */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 text-center">
              <img 
                src={candidateInfo} 
                alt="Detailed candidate profile management" 
                className="w-full max-w-md mx-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h4 className="text-xl font-semibold mb-4 text-purple-600">👤 Detailed Candidate Profiles</h4>
              <p className="mb-4">
                Comprehensive candidate management system with personal information, application history, 
                CV preview, and interview scheduling capabilities.
              </p>
              <ul className="space-y-2">
                <li><strong>Personal Info:</strong> Complete contact and location details</li>
                <li><strong>Application History:</strong> Track all previous applications and outcomes</li>
                <li><strong>CV Management:</strong> Preview and download candidate resumes</li>
                <li><strong>Interview Tools:</strong> Schedule interviews and manage notes</li>
              </ul>
            </div>
          </div>

          {/* Professional Communication */}
          
        </div>
      </CaseStudySection>

      <CaseStudySection title="Design Highlights">
        <ul>
          <li><strong>Professional, clean UI</strong> that builds trust and credibility</li>
          <li><strong>Soft blue & white color scheme</strong> conveying trust, empathy, and reliability</li>
          <li><strong>Clear job cards</strong> with prominent call-to-action buttons for easy application</li>
          <li><strong>Mission-focused branding</strong> that resonates with humanitarian values</li>
          <li><strong>Intuitive navigation</strong> designed for efficient job discovery</li>
        </ul>
      </CaseStudySection>

      <CaseStudySection title="Design System">
        <div className="grid md:grid-cols-3 gap-4 my-8">
          <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
            <h5 className="font-medium mb-2 text-blue-800 dark:text-blue-400">Primary Blue</h5>
            <div className="w-full h-12 bg-blue-600 rounded mb-2"></div>
            <p className="text-sm text-muted-foreground">Trust and reliability</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900/10 p-4 rounded-lg border border-gray-200 dark:border-gray-800">
            <h5 className="font-medium mb-2 text-gray-800 dark:text-gray-400">Clean White</h5>
            <div className="w-full h-12 bg-white border rounded mb-2"></div>
            <p className="text-sm text-muted-foreground">Simplicity and clarity</p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/10 p-4 rounded-lg border border-green-200 dark:border-green-800">
            <h5 className="font-medium mb-2 text-green-800 dark:text-green-400">Accent Green</h5>
            <div className="w-full h-12 bg-green-500 rounded mb-2"></div>
            <p className="text-sm text-muted-foreground">Success and growth</p>
          </div>
        </div>
      </CaseStudySection>

      <CaseStudySection title="Outcome & Impact">
        <div className="bg-green-50 dark:bg-green-900/10 p-6 rounded-lg border border-green-200 dark:border-green-800">
          <h4 className="font-semibold text-green-800 dark:text-green-400 mb-4">Successful Prototype</h4>
          <ul className="space-y-2">
            <li>✅ Demonstrates intuitive job discovery process</li>
            <li>✅ Aligns with Al-Khidmat's humanitarian mission</li>
            <li>✅ Addresses gap in sector-specific job platforms</li>
            <li>✅ Provides clear value proposition for both job seekers and employers</li>
          </ul>
        </div>

        <div className="mt-6">
          <h4 className="font-semibold mb-3">Business Impact Potential</h4>
          <p>
            The platform design positions Al-Khidmat as a leader in humanitarian talent acquisition, 
            potentially improving their ability to attract skilled professionals while serving the 
            broader Pakistani humanitarian sector.
          </p>
        </div>
      </CaseStudySection>

      <CaseStudySection title="Next Steps & Recommendations">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-3 text-accent">Phase 1: MVP Launch</h4>
            <ul>
              <li>User testing with humanitarian professionals</li>
              <li>Partnership with major Pakistani NGOs</li>
              <li>Basic job posting and application features</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-accent">Phase 2: Enhanced Features</h4>
            <ul>
              <li>AI-powered job matching</li>
              <li>Skills assessment tools</li>
              <li>Volunteer opportunity integration</li>
            </ul>
          </div>
        </div>
      </CaseStudySection>

      <CaseStudySection title="Lessons Learned">
        <ul>
          <li><strong>Sector-specific design matters</strong> - understanding industry nuances improves user experience</li>
          <li><strong>Trust is paramount</strong> in job platforms, especially for mission-driven organizations</li>
          <li><strong>Competitive analysis reveals opportunities</strong> that generic platforms miss</li>
          <li><strong>Clear information architecture</strong> reduces cognitive load in job searching</li>
        </ul>
      </CaseStudySection>
     

    </CaseStudyLayout>
  );
}