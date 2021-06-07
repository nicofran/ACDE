import React, { useState } from "react";

// Components
import Modal from "../../components/modal/modal";

const Expositor = ({ nombre, biografia, imagen, descripcion }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="speaker col-md-6 col-lg-3 col-sm-6">
      <img src={imagen} alt={nombre} />
      <div className="speaker__separador"></div>
      <div className="div__speaker__nombre__posicion">
        <span>{nombre}</span>
        <span className="speaker__descripcion">{descripcion}</span>
      </div>
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
