import bicentenario from "../../assets/images/bicentenario-menu.png";

const InscriptionModal = () => {
  return (
    <div class="modal-container">
      <div className="modal">
        <div>
          <img src={bicentenario} alt="Enrique Shaw" width="20%" />
        </div>
        <h2>Sumate al #EncuentroAnualACDE</h2>
        <p>Te esperamos el miercoles 30 de junio a las 8.45 h! </p>
        <p>Podras acceder al evento haciendo </p>
        <button className="modal-button">clic aqui</button>
      </div>
    </div>
  );
};

export default InscriptionModal;
