import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { PageBackground } from "@/components/layout/PageBackground";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import { PageHeader } from "@/components/pages/PageHeader";

export default function ProjectsPage() {
  return (
    <div className="relative min-h-full bg-[var(--bg-dark)] font-sans">
      <PageBackground />
      <Navbar />
      <main className="mx-auto w-full max-w-5xl px-6 py-12">
        <PageHeader
          titleKey="pages.projects.title"
          subtitleKey="pages.projects.subtitle"
        />
        <ProjectsGrid />
      </main>
      <Footer />
    </div>
  );
}
