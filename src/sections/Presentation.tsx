import pdf from "../assets/CV-Matthieu-Franck.pdf";
import reactLogo from "../assets/react.svg";
import angularLogo from "../assets/angular.svg";
import nodeLogo from "../assets/node-js.svg";
import nestLogo from "../assets/nestJs.svg";

const Presentation = () => {
  return (
    <section id="presentation" className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Matthieu Franck</h1>
          <p className="py-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
            autem beatae voluptates consequuntur praesentium, sapiente laborum
            totam vitae cupiditate dolore, maiores veniam iste, modi ipsa quo.
            Quos tempore ex a repellat debitis doloribus excepturi unde suscipit
            magnam? Eligendi beatae cumque in maxime quisquam, quas consequatur
            autem commodi possimus architecto rem maiores excepturi assumenda
            illum delectus at pariatur saepe placeat, quidem dignissimos impedit
            fuga, tenetur enim voluptatum! Recusandae possimus laboriosam non
            laborum facere. Ipsum, exercitationem sapiente voluptatem
            repellendus voluptatum necessitatibus? Beatae fugit obcaecati
            consequuntur quos expedita laboriosam magni soluta, nemo quis sint
            repudiandae atque veniam dignissimos velit quisquam libero
            perspiciatis harum?
          </p>
          <div>
            <h2 className="text-2xl semi-bold">Skills</h2>
            <div className="avatar tooltip" data-tip="React">
              <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                <img src={reactLogo} className="" alt="React logo" />
              </div>
            </div>
            <div className="avatar tooltip" data-tip="Angular">
              <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                <img src={angularLogo} className="" />
              </div>
            </div>
            <div className="avatar tooltip" data-tip="NodeJs">
              <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                <img src={nodeLogo} />
              </div>
            </div>
            <div className="avatar tooltip" data-tip="NestJs">
              <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                <img src={nestLogo} />
              </div>
            </div>
          </div>
          <a href="#projects" className="btn btn-primary">
            Mes projets
          </a>

          <a
            href={pdf}
            target="_blank"
            className="btn btn-outline ml-3"
            rel="noopener noreferrer"
          >
            Télécharger mon CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
