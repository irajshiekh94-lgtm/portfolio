import { ProjectCard } from '../ProjectCard'

export default function ProjectCardExample() {
  return (
    <div className="max-w-sm">
      <ProjectCard
        title="Panah Emergency Relief App"
        description="A life-saving app connecting flood victims with volunteers, shelters, and donations during the 2022 Karachi monsoons."
        category="Mobile App"
        tags={["Emergency", "Community", "Social Impact"]}
        imageUrl="/api/placeholder/400/256"
        slug="panah-emergency-app"
        timeline="2022"
      />
    </div>
  )
}