import React, { useState } from "react";

// Components
import Modal from "../../components/modal/modal";

const Expositor = ({ nombre, biografia, imagen }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="speaker col-md-4 col-lg-3 col-sm-6">
      <img src={imagen} alt={nombre} />
      <div className="speaker__separador"></div>
      <p>{nombre}</p>

      <button
        type="button"
        className="button__modal"
        onClick={() => setShow(true)}
      >
        Ver más
      </button>

      <Modal
        show={show}
        hide={() => setShow(false)}
        title={nombre}
        body={biografia}
      />
    </div>
  );
};

export default Expositor;
