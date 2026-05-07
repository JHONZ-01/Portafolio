import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { PageBackground } from "@/components/layout/PageBackground";
import { About } from "@/components/sections/About";
import { ContactForm } from "@/components/sections/ContactForm";
import { Hero } from "@/components/sections/Hero";
import { Experience } from "@/components/sections/Experience";
import { InitialLoader } from "@/components/sections/InitialLoader";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import { Skills } from "@/components/sections/Skills";
import { Languages } from "@/components/sections/Languages";

export const dynamic = "force-static";

export default function Home() {
  return (
    <div className="relative min-h-full bg-[var(--bg-dark)] font-sans">
      <PageBackground />
      <InitialLoader />
      <Navbar />
      <main className="mx-auto w-full max-w-5xl px-6">
        <Hero />
        <About />
        <Skills />
        <Languages />
        <Experience />
        <ProjectsGrid />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
