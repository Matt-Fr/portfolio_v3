import React from "react";
import { dataProjects } from "../data/projects";

type Props = {};

const Projects = (props: Props) => {
  return (
    <section>
      {dataProjects.map((project: { id: number; title: string }) => (
        <div key={project.id}>{project.title}</div>
      ))}
    </section>
  );
};

export default Projects;
