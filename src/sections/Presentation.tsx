import pdf from "../assets/CV-Matthieu-Franck.pdf";
import reactLogo from "../assets/svg/react.svg";
import angularLogo from "../assets/svg/angular.svg";
import nodeLogo from "../assets/svg/node-js.svg";
import nestLogo from "../assets/svg/nest-js.svg";
import authorPic from "../assets/authorPic.jpg";

const Presentation = () => {
  return (
    <section id="presentation" className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img src={authorPic} className="max-w-sm rounded-lg shadow-2xl mr-4" />
        <div>
          <h1 className="text-5xl font-bold">Matthieu Franck</h1>
          <p className="py-6">
            Après une reconversion du secteur marketing au développement web,
            j'ai suivi une formation approfondie chez OpenClassrooms. Passionné
            par la création d'interfaces utilisateur, j'aime explorer et
            m'adapter à de nouveaux outils pour concevoir des projets sur mesure
            qui répondent parfaitement aux besoins de mes clients. J'ai eu
            l'opportunité de travailler au sein de l'agence web et de
            communication "Agence La Fusée", où j'ai contribué au développement
            d'un logiciel SaaS pour le groupe Provalliance. Bien que mon
            expertise principale soit orientée vers le front-end, je prends
            également plaisir à travailler sur des technologies back-end, ce qui
            me permet d'avoir une approche complète du développement web.
          </p>
          <div className="flex flex-col bg-base-100 rounded-xl shadow-2xl max-w-max p-4 mb-10 mt-4">
            <h2 className="text-2xl semi-bold flex mb-3">
              Technologies principales
            </h2>
            <div className=" w-content max-w-max">
              <div className="avatar tooltip" data-tip="React">
                <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2 bg-base-100">
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
