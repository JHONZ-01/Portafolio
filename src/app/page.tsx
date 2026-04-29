import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";

export default function Home() {
  return (
    <div className="min-h-full bg-zinc-50 font-sans dark:bg-black">
      <Navbar />
      <main className="mx-auto w-full max-w-5xl px-6">
        <Hero />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
