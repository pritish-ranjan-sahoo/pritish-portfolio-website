import ProjectCard from "../ProjectCard";
import { RevealOnScroll } from "../RevealOnScroll";
import data from "../../assets/data.json";

export const Projects = () => {

  const projects = data.projects

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard projects={projects}/>    
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
