import { About } from "@/components/sections/About";
import { ContactForm } from "@/components/sections/ContactForm";
import { Hero } from "@/components/sections/Hero";
import { Experience } from "@/components/sections/Experience";
import { InitialLoader } from "@/components/sections/InitialLoader";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Languages } from "@/components/sections/Languages";

export const dynamic = "force-static";

export default function Home() {
  return (
    <>
      <InitialLoader />
      <Hero />
      <About />
      <Skills />
      <Languages />
      <Experience />
      <Projects />
      <ContactForm />
    </>
  );
}
