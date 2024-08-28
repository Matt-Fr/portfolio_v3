import { dataProjects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center p-4"
    >
      <h1 className="text-5xl font-bold col-span-full sm:place-self-start m-5">
        Mes projets
      </h1>

      {dataProjects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </section>
  );
};

export default Projects;
