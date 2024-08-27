import React from "react";

type Props = {};

const Presentation = (props: Props) => {
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
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
