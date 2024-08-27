import React from "react";

type Props = {
  id: number;
  title: string;
  logo: string;
  picture: string;
  descriptionEn: string;
  descriptionFr: string;
  tags: string[];
  demo?: string;
  linkGithub: string;
};

const ProjectCard = (props: Props) => {
  return (
    <div className="card glass bg-base-100 w-96 shadow-xl overflow-hidden">
      <div className="h-60 flex justify-center items-start overflow-hidden ">
        <img src={props.picture} alt="car!" className="object-cover" />
      </div>
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <p>How to park your car at your garage?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Learn now!</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
