import { About } from "@/components/sections/About";
import { ContactForm } from "@/components/sections/ContactForm";
import { Hero } from "@/components/sections/Hero";
import { HomePhoto } from "@/components/sections/HomePhoto";
import { PhoneDemo } from "@/components/sections/PhoneDemo";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";

export const dynamic = "force-static";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <PhoneDemo />
      <Projects />
      <HomePhoto />
      <Skills />
      <ContactForm />
    </>
  );
}
