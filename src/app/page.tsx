import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { About } from "@/components/sections/About";
import { ContactForm } from "@/components/sections/ContactForm";
import { Hero } from "@/components/sections/Hero";
import { Experience } from "@/components/sections/Experience";
import { InitialLoader } from "@/components/sections/InitialLoader";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import { Skills } from "@/components/sections/Skills";

export const dynamic = "force-static";

export default function Home() {
  return (
    <div className="min-h-full bg-[var(--bg-dark)] font-sans">
      <InitialLoader />
      <Navbar />
      <main className="mx-auto w-full max-w-5xl px-6">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <ProjectsGrid />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
