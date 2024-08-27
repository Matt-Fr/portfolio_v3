import React from "react";
import { dataProjects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <section id="projects">
      {dataProjects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </section>
  );
};

export default Projects;
