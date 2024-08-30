const ContactForm = () => {
  return (
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
          Don’t fill this out if you're human: <input name="bot-field" />
        </label>
      </p>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Nom</span>
        </label>
        <input
          type="text"
          name="name"
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
          name="company"
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
  );
};

export default ContactForm;
