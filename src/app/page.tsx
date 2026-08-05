import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Experience } from "@/components/experience";
import { Publications } from "@/components/publications";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";

import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <Experience />
          <Skills />
          <Projects />
          <Publications />

          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
