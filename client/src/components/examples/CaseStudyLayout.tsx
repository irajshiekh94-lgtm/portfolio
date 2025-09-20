import { CaseStudyLayout } from '../CaseStudyLayout'

export default function CaseStudyLayoutExample() {
  return (
    <CaseStudyLayout
      title="Example Case Study"
      subtitle="A comprehensive UX design project"
      heroImage="/api/placeholder/800/600"
      timeline="3 months"
      role="UX Designer"
      tools={["Figma", "Research", "Prototyping"]}
    >
      <div className="prose max-w-none">
        <h2>Problem</h2>
        <p>This is an example case study layout with sample content.</p>
      </div>
    </CaseStudyLayout>
  )
}