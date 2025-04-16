import AboutMe from "@/components/AboutMe";
import ContactSection from "@/components/Contact";
import ExperienceAndSkills from "@/components/Experience";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutMe />
      <ExperienceAndSkills />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
