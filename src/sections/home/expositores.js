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

const Expositores = () => {
  return (
    <div className="expositores container">
      <div className="expo__rectangulo">
        <div class="expo__span">
          <img className="logo" src={icon} alt="ACDE"></img>
          <img src={logo} alt="ACDE"></img>
        </div>
        <h1 className="carta__titulo">expositores</h1>
      </div>
      <div className="expo__speakers col-lg-12 col-md-12">
        <div className="speaker col-md-4 col-md-5">
          <img src={candelaria_fernandez} alt="Candelaria Fernández"></img>
          <div className="speaker__separador"></div>
          <p>Candelaria Fernández</p>
        </div>
        <div className="speaker col-lg-4 col-md-5">
          <img src={carolina_biquard} alt="Candelaria Fernández"></img>
          <div className="speaker__separador"></div>
          <p>Carolina Biquard</p>
        </div>{" "}
        <div className="speaker col-lg-4 col-md-5">
          <img src={carolina_castro} alt="Candelaria Fernández"></img>
          <div className="speaker__separador"></div>
          <p>Carolina Castro</p>
        </div>{" "}
        <div className="speaker col-lg-4 col-md-5">
          <img src={delia_ferrerira} alt="Candelaria Fernández"></img>
          <div className="speaker__separador"></div>
          <p>Delia Ferreira</p>
        </div>
        <div className="speaker col-lg-4 col-md-5">
          <img src={geronimo_frigerio} alt="Geronimo Frigerio"></img>
          <div className="speaker__separador"></div>
          <p>Geronimo Frigerio</p>
        </div>{" "}
        <div className="speaker col-lg-4 col-md-5">
          <img src={joan_antoni} alt="Joan Antoni Melé"></img>
          <div className="speaker__separador"></div>
          <p>Joan Antoni Melé</p>
        </div>{" "}
        <div className="speaker col-lg-4 col-md-5">
          <img src={juan_martin_dela_serna} alt="Juan Martin de la Serna"></img>
          <div className="speaker__separador"></div>
          <p>Juan Martin de la Serna</p>
        </div>{" "}
        <div className="speaker col-lg-4 col-md-5">
          <img src={maria_migliore} alt="Maria Migliore"></img>
          <div className="speaker__separador"></div>
          <p>Maria Migliore</p>
        </div>{" "}
        <div className="speaker col-lg-4 col-md-5">
          <img src={marina_dal_poggetto} alt="Marina dal Poggetto"></img>
          <div className="speaker__separador"></div>
          <p>Marina dal poggetto</p>
        </div>{" "}
        <div className="speaker col-lg-4 col-md-5">
          <img src={martin_borchardt} alt="Martin Borchardt"></img>
          <div className="speaker__separador"></div>
          <p>Martin borchardt</p>
        </div>{" "}
        <div className="speaker col-lg-4 col-md-5">
          <img src={nicolas_braun} alt="Nicolas Braun"></img>
          <div className="speaker__separador"></div>
          <p>Nicolas Braun</p>
        </div>{" "}
        <div className="speaker col-lg-4 col-md-5">
          <img src={rab_alejandro_avruj} alt="Rab Alejandro Avruj"></img>
          <div className="speaker__separador"></div>
          <p>Rab Alejandro Avruj</p>
        </div>{" "}
        <div className="speaker col-lg-4 col-md-5">
          <img src={roberto_vassollo} alt="Roberto Vasallo"></img>
          <div className="speaker__separador"></div>
          <p>Roberto Vassallo</p>
        </div>
        <div className="speaker col-lg-4 col-md-5">
          <img src={rosana_negrini} alt="Rosana Negrini"></img>
          <div className="speaker__separador"></div>
          <p>Rosana Negrini</p>
        </div>
      </div>
    </div>
  );
};

export default Expositores;
