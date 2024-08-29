import pdf from "../assets/CV-Matthieu-Franck.pdf";
import reactLogo from "../assets/react.svg";
import angularLogo from "../assets/angular.svg";
import nodeLogo from "../assets/node-js.svg";
import nestLogo from "../assets/nestJs.svg";
import authorPic from "../assets/authorPic.jpg";

const Presentation = () => {
  return (
    <section id="presentation" className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img src={authorPic} className="max-w-sm rounded-lg shadow-2xl" />
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
          <div className="flex flex-col bg-base-100 rounded-xl shadow-2xl max-w-max p-4 mb-10 mt-4">
            <h2 className="text-2xl semi-bold flex mb-3">Technologies</h2>
            <div className=" w-content max-w-max">
              <div className="avatar tooltip" data-tip="React">
                <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2 ">
                  <img src={reactLogo} className="" alt="React logo" />
                </div>
              </div>
              <div className="avatar tooltip" data-tip="Angular">
                <div className="bg-base-100 ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                  <img src={angularLogo} className="" />
                </div>
              </div>
              <div className="avatar tooltip" data-tip="NodeJs">
                <div className=" bg-base-100 ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                  <img src={nodeLogo} />
                </div>
              </div>
              <div className="avatar tooltip" data-tip="NestJs">
                <div className="bg-base-100 ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                  <img src={nestLogo} />
                </div>
              </div>
            </div>
          </div>
          <div className=" flex ">
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
      </div>
    </section>
  );
};

export default Presentation;
