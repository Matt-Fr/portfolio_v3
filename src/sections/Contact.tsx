const Contact = () => {
  return (
    <section id="contact">
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Contactez-moi!</h1>
            <p className="py-6 text-xl">
              Vous pouvez me contactez en remplissant la forme ci-contre ou bien
              par email ou sur LinkedIn.
            </p>
            <a
              className="btn btn-accent"
              href="mailto:matthieu_franck@orange.fr"
            >
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path>
              </svg>
              matthieu_franck@orange.fr
            </a>
            <a
              className="btn btn-accent ml-3"
              href="https://www.linkedin.com/in/matthieu-franck/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11.5 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13 11.268h-3v-5.4c0-3.434-4-3.167-4 0v5.4h-3v-10h3v1.5c1.396-2.586 7-2.777 7 2.471v6.029z" />
              </svg>{" "}
              LinkedIn
            </a>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form
              className="card-body"
              method="post"
              data-netlify="true"
              name="contact"
            >
              {/* Hidden form name input for Netlify */}
              <input type="hidden" name="form-name" value="contact" />

              {/* Honeypot field to prevent spam */}
              <p className="hidden">
                <label>
                  Don’t fill this out if you're human:{" "}
                  <input name="bot-field" />
                </label>
              </p>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Nom</span>
                </label>
                <input
                  type="text"
                  name="nom"
                  placeholder="Nom"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Entreprise</span>
                </label>
                <input
                  type="text"
                  name="entreprise"
                  placeholder="Entreprise (optionnel)"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea
                  name="message"
                  className="textarea textarea-bordered"
                  placeholder="Votre message"
                ></textarea>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary" type="submit">
                  Envoyer
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
