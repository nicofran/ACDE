import { useState, useEffect } from "react";
import Shaw from "../../assets/icons/bicentenario-menu2.png";
import Encuentro from "../../assets/images/acde2021.png";
import Acde from "../../assets/images/logo-acde1.svg";

const PopUp = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 3000);
  }, []);

  const cerrarPopUp = () => {
    setVisible(false);
  };

  return (
    <div className={visible ? "visible popup-container" : "popup-container"}>
      <div className="popup">
        <button className="popup__close pull-right" onClick={cerrarPopUp}>
          X
        </button>
        <div>
          <img src={Encuentro} alt="ACDE" width="40%" />
          <img src={Shaw} alt="Enrique Shaw" width="20%" />
          <img src={Acde} alt="ACDE" width="15%" />
        </div>
        <div className="modal__text">
          <h3>
            Sumate al <span>#EncuentroAnualACDE</span>
          </h3>
          <p>¡Te esperamos el miercoles 30 de junio a las 8.45 h!</p>
          <p>
            Podrás acceder al evento haciendo{" "}
            <span className="modal-button">
              <a
                href="https://encuentroanualacde2021.hubilo.com/community/#/home"
                target="_blank"
                rel="noreferrer"
              >
                click aqui
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
