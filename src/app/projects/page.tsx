import { PageHeader } from "@/components/pages/PageHeader";
import { ProjectsShowcase } from "@/components/sections/ProjectsShowcase";

export default function ProjectsPage() {
  return (
    <div className="py-12">
      <PageHeader
        titleKey="pages.projects.title"
        subtitleKey="pages.projects.subtitle"
      />
      <ProjectsShowcase />
    </div>
  );
}
