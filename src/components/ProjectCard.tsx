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
  const modalId = `modal_${props.id}`;

  return (
    <div className="card glass bg-base-100 w-96 shadow-xl overflow-hidden">
      <div className="h-60 flex justify-center items-start overflow-hidden ">
        <img
          src={props.picture}
          alt={`${props.title} image`}
          className="object-cover"
        />
      </div>
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <p>{props.descriptionEn.substring(0, 100)}...</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Learn now!</button>
          <button
            className="btn"
            onClick={() => {
              const modal = document.getElementById(modalId);
              if (modal) {
                (modal as HTMLDialogElement).showModal();
              }
            }}
          >
            Open Modal
          </button>
          <dialog id={modalId} className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">{props.title}</h3>
              <p className="py-4">{props.descriptionFr}</p>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>Close</button>
            </form>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
