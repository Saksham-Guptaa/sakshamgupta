import Navigation from "@/components/Navigation";
import HeroEnhanced from "@/components/HeroEnhanced";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import ProjectsEnhanced from "@/components/ProjectsEnhanced";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroEnhanced />
        <Skills />
        <Experience />
        <ProjectsEnhanced />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
