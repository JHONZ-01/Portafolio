import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { PageBackground } from "@/components/layout/PageBackground";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { PageHeader } from "@/components/pages/PageHeader";
import { Languages } from "@/components/sections/Languages";

export default function AboutPage() {
  return (
    <div className="relative min-h-full bg-[var(--bg-dark)] font-sans">
      <PageBackground />
      <Navbar />
      <main className="mx-auto w-full max-w-5xl px-6 py-12">
        <PageHeader titleKey="pages.about.title" subtitleKey="pages.about.subtitle" />

        <About />
        <Skills />
        <Languages />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}
