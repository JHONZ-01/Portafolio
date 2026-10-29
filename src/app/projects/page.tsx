import { PageHeader } from "@/components/pages/PageHeader";
import { ProjectsShowcase } from "@/components/sections/ProjectsShowcase";

export default function ProjectsPage() {
  return (
    <>
      <PageHeader titleKey="pages.projects.title" subtitleKey="pages.projects.lead" />
      <ProjectsShowcase />
    </>
  );
}
