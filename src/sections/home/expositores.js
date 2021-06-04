// ICONS
import logo from "../../assets/icons/logo-expositores.png";
import icon from "../../assets/icons/logo-acde.png";

// SPEAKERS IMAGES
import candelaria_fernandez from "../../assets/images/candelaria_fernández.png";
import carolina_biquard from "../../assets/images/carolina_biquard.png";
import carolina_castro from "../../assets/images/carolina_castro.png";
import delia_ferrerira from "../../assets/images/delia_ferreira_rubio.png";
import geronimo_frigerio from "../../assets/images/geronimo_frigerio.png";
import joan_antoni from "../../assets/images/joan_antoni_mele.png";
import juan_martin_dela_serna from "../../assets/images/juan_martin_de_la_serna.png";
import maria_migliore from "../../assets/images/maria_migliore.png";
import marina_dal_poggetto from "../../assets/images/marina_dal_poggetto.png";
import martin_borchardt from "../../assets/images/martin_borchardt.png";
import nicolas_braun from "../../assets/images/nicolas_braun.png";
import rab_alejandro_avruj from "../../assets/images/rab_alejandro_avruj.png";
import roberto_vassollo from "../../assets/images/roberto_vassollo.png";
import rosana_negrini from "../../assets/images/rosana_negrini.png";

// import modalBox from "../../components/modal/modal";
import { useState } from "react";

const Expositores = () => {
  // const [modal, showModal] = useState(false);

  // const expositores = [
  //   { id: "expositor-1", title: "John do", body: "hello world" },
  //   { id: "expositor-2", title: "John do 2", body: "goodbye world " },
  // ];

  return (
    <div className="expositores">
      <div className="expo__rectangulo" id="expositores">
        <div className="expo__span">
          <img className="logo" src={icon} alt="ACDE" />
          <img src={logo} alt="ACDE" />
        </div>
        <h1 className="carta__titulo">expositores</h1>
      </div>
      <div className="expo__speakers col-lg-12 col-md-12">
        <div className="speaker col-md-4 col-lg-3 col-sm-6">
          <img src={carolina_biquard} alt="Candelaria Fernández" />
          <div className="speaker__separador"></div>
          <p>Carolina Biquard</p>
        </div>{" "}
        <div className="speaker col-md-4 col-lg-3 col-sm-6">
          <img src={candelaria_fernandez} alt="Candelaria Fernández" />
          <div className="speaker__separador"></div>
          <p>Candelaria Fernández</p>
        </div>
        <div className="speaker col-md-4 col-lg-3 col-sm-6">
          <img src={carolina_castro} alt="Candelaria Fernández" />
          <div className="speaker__separador"></div>
          <p>Carolina Castro</p>
        </div>{" "}
        <div className="speaker col-md-4 col-lg-3 col-sm-6">
          <img src={delia_ferrerira} alt="Candelaria Fernández" />
          <div className="speaker__separador"></div>
          <p>Delia Ferreira</p>
          <button variant="primary">ver mas</button>
        </div>
        <div className="speaker col-md-4 col-lg-3 col-sm-6">
          <img src={geronimo_frigerio} alt="Geronimo Frigerio" />
          <div className="speaker__separador"></div>
          <p>Geronimo Frigerio</p>
        </div>{" "}
        <div className="speaker col-md-4 col-lg-3 col-sm-6">
          <img src={joan_antoni} alt="Joan Antoni Melé" />
          <div className="speaker__separador"></div>
          <p>Joan Antoni Melé</p>
        </div>{" "}
        <div className="speaker col-md-4 col-lg-3 col-sm-6">
          <img src={juan_martin_dela_serna} alt="Juan Martin de la Serna" />
          <div className="speaker__separador"></div>
          <p>Juan Martin de la Serna</p>
          <button variant="primary">ver mas</button>
        </div>{" "}
        <div className="speaker col-md-4 col-lg-3 col-sm-6">
          <img src={maria_migliore} alt="Maria Migliore" />
          <div className="speaker__separador"></div>
          <p>Maria Migliore</p>
        </div>{" "}
        <div className="speaker col-md-4 col-lg-3 col-sm-6">
          <img src={marina_dal_poggetto} alt="Marina dal Poggetto" />
          <div className="speaker__separador"></div>
          <p>Marina dal poggetto</p>
        </div>{" "}
        <div className="speaker col-md-4 col-lg-3 col-sm-6">
          <img src={martin_borchardt} alt="Martin Borchardt" />
          <div className="speaker__separador"></div>
          <p>Martin borchardt</p>
        </div>{" "}
        <div className="speaker col-md-4 col-lg-3 col-sm-6">
          <img src={nicolas_braun} alt="Nicolas Braun" />
          <div className="speaker__separador"></div>
          <p>Nicolas Braun</p>
        </div>{" "}
        <div className="speaker col-md-4 col-lg-3 col-sm-6">
          <img src={rab_alejandro_avruj} alt="Rab Alejandro Avruj" />
          <div className="speaker__separador"></div>
          <p>Rab Alejandro Avruj</p>
        </div>{" "}
        <div className="speaker col-md-4 col-lg-3 col-sm-6">
          <img src={roberto_vassollo} alt="Roberto Vasallo" />
          <div className="speaker__separador"></div>
          <p>Roberto Vassallo</p>
        </div>
        <div className="speaker col-md-4 col-lg-3 col-sm-6">
          <img src={rosana_negrini} alt="Rosana Negrini" />
          <div className="speaker__separador"></div>
          <p>Rosana Negrini</p>
        </div>
      </div>
    </div>
  );
};

export default Expositores;
