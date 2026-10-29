import { PageHeader } from "@/components/pages/PageHeader";
import { About } from "@/components/sections/About";
import { AboutPhoto } from "@/components/sections/AboutPhoto";
import { Experience } from "@/components/sections/Experience";
import { Offer } from "@/components/sections/Offer";
import { Skills } from "@/components/sections/Skills";

export default function AboutPage() {
  return (
    <>
      <PageHeader titleKey="pages.about.title" subtitleKey="pages.about.lead" />
      <About titled={false} />
      <Experience />
      <AboutPhoto />
      <Offer />
      <Skills />
    </>
  );
}
