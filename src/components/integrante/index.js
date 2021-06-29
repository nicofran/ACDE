import React, { useState } from "react";

// Components
import Modal from "../../components/modal/modal";

const Integrante = ({ nombre, biografia, imagen, posicion }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="integrante container ">
      <img src={imagen} alt={nombre} />
      <div className="comision__separador"></div>
      <div className="div__nombre__posicion">
        <span className="integrante__nombre">{nombre}</span>
        <span className="integrante__posicion">{posicion}</span>
      </div>
      <div>
        <button
          type="button"
          className="integrante__button"
          onClick={() => setShow(true)}
        >
          Ver más
        </button>
      </div>

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
