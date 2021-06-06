import React, { useState } from "react";

// Components
import Modal from "../../components/modal/modal";

const Integrante = ({ nombre, biografia, imagen, posicion }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="integrante col-md-6 col-lg-3 col-sm-6">
      <img src={imagen} alt={nombre} />
      <div className="comision__separador"></div>
      <p className="integrante__nombre">{nombre}</p>
      <p className="integrante__posicion">{posicion}</p>

      <button
        type="button"
        className="integrante__button"
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

export default Integrante;
