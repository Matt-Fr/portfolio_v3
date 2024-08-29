const Contact = () => {
  return (
    <section id="contact">
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Contactez-moi!</h1>
            <p className="py-6 text-xl">
              Vous pouvez me contactez en remplissant la forme ci-contre ou bien
              par{" "}
              <a
                className="link link-info"
                href="mailto:matthieu_franck@orange.fr"
              >
                email
              </a>{" "}
              ou sur{" "}
              <a
                href="https://www.linkedin.com/in/matthieu-franck/"
                target="_blank"
                rel="noopener noreferrer"
                className="link link-info"
              >
                LinkedIn
              </a>
              .
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="Name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
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
                  className="textarea textarea-bordered"
                  placeholder="Votre message"
                ></textarea>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary">Envoyer</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
