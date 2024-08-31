type Props = {
  id: number;
  title: string;
  logo: string;
  picture: string;
  descriptionEn: string;
  descriptionFr: string;
  shortDescription: string;
  tags: string[];
  demo?: string;
  linkGithub: string;
};

const ProjectCard = (props: Props) => {
  const modalId = `modal_${props.id}`;

  return (
    <div className="card glass bg-base-100 md:w-96 shadow-xl overflow-hidden">
      <div className="h-60 flex justify-center items-start overflow-hidden ">
        <img
          src={props.picture}
          alt={`${props.title} image`}
          className="object-cover"
        />
      </div>
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <p>{props.shortDescription}</p>
        <div className="card-actions justify-end">
          {props.demo && (
            <a href={props.demo} target="_blank" className="btn btn-primary">
              Demo
            </a>
          )}
          <button
            className="btn"
            onClick={() => {
              const modal = document.getElementById(modalId);
              if (modal) {
                (modal as HTMLDialogElement).showModal();
              }
            }}
          >
            Plus de détails
          </button>
          <dialog id={modalId} className="modal">
            <div className="modal-box">
              <header className="flex justify-between items-center">
                <h3 className="font-bold text-lg">{props.title}</h3>
                <form method="dialog" className=" md:hidden">
                  <button className="btn btn-sm btn-circle btn-outline">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </form>
              </header>
              <div className="flex mt-3">
                {props.tags.map((tag) => (
                  <div className="badge badge-neutral mr-2">{tag}</div>
                ))}
              </div>
              <p className="py-4">{props.descriptionFr}</p>
              <div className="flex justify-end">
                {props.demo && (
                  <a
                    href={props.demo}
                    target="_blank"
                    className="btn btn-primary"
                  >
                    Demo
                  </a>
                )}
                <a
                  href={props.linkGithub}
                  target="_blank"
                  className="btn btn-secondary ml-3"
                >
                  Github
                </a>
              </div>
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
