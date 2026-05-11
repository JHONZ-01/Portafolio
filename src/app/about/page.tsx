import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { PageHeader } from "@/components/pages/PageHeader";
import { Languages } from "@/components/sections/Languages";

export default function AboutPage() {
  return (
    <div className="py-12">
      <PageHeader titleKey="pages.about.title" subtitleKey="pages.about.subtitle" />

      <About />
      <Skills />
      <Languages />
      <Experience />
    </div>
  );
}
