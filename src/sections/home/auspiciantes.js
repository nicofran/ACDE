//logo acde
import logo from "../../assets/icons/logo-acde.png";

// Auspiciantesde Platino
import Clarin from "../../assets/images/logo-clarin.png";
import Clarinx2 from "../../assets/images/logo-clarin@x2.png";
import Pan_American from "../../assets/images/pan-am-energy.png";
import Pan_Americanx2 from "../../assets/images/pan-am-energy@x2.png";
// Auspiciantes Oro
import cgc from "../../assets/images/cgc.png";
import cgcx2 from "../../assets/images/cgc@x2.png";
import galicia from "../../assets/images/galicia.png";
import galiciax2 from "../../assets/images/galicia@x2.png";
import dupont from "../../assets/images/dupont.png";
import dupontx2 from "../../assets/images/dupont@x2.png";
import immacule from "../../assets/images/logoimmaculee.png";
//Auspiciantes de Plata
import amadeus from "../../assets/images/amadeus.png";
import amadeusx2 from "../../assets/images/amadeus@2x.png";
import accenture from "../../assets/images/accenture.png";
import accenturex2 from "../../assets/images/accenture@2x.png";
import arcor from "../../assets/images/grupo_arcor.png";
import arcorx2 from "../../assets/images/grupo_arcor@2x.png";
import superville from "../../assets/images/superville.png";
import supervillex2 from "../../assets/images/superville@2x.png";
import murchison from "../../assets/images/grupo_murchison.png";
import murchisonx2 from "../../assets/images/grupo_murchison@2x.png";
import ibm from "../../assets/images/IBM.png";
import ibmx2 from "../../assets/images/IBM@2x.png";
import mabxience from "../../assets/images/mabxience.png";
import mabxiencex2 from "../../assets/images/mabxience@2x.png";
import mckinsey from "../../assets/images/mckinsey.png";
import mckinseyx2 from "../../assets/images/mckinsey@2x.png";
import propymes from "../../assets/images/propymesrgb.png";
import propymesx2 from "../../assets/images/propymesrgb@2x.png";
import bareiro from "../../assets/images/barreiro-logo.png";
//Auspiciantes de Bronce
import andreani from "../../assets/images/andreani.png";
import andreanix2 from "../../assets/images/andreani@2x.png";
import lartirigoyen from "../../assets/images/lartirigoyen.png";
import lartirigoyenx2 from "../../assets/images/lartirigoyen@2x.png";
import pinamar_sa from "../../assets/icons/pinamar-sa.png";
//Acompañan
import beccar_varela from "../../assets/images/beccar-varela.jpg";
import newsan from "../../assets/images/newsan-logo.png";

const Auspiciantes = () => {
  return (
    <div className="ausp container" id="auspiciantes">
      <div className="ausp__banner">
        <img src={logo} alt="ACDE" />
        <h1 className="ausp__title">Agradecemos a nuestros auspiciantes</h1>
      </div>

      {/* Auspiciante PLATINO START */}
      <div className="auspiciantes">
        <p className="ausp__tipo">
          <span></span>platino<span></span>
        </p>
        <div className="ausp__marca">
          <a href="https://grupoclarin.com" target="_blank" rel="noreferrer">
            <img
              src={Clarin}
              alt="Grupo Clarin"
              srcSet={Clarinx2 + " 2x"}
              width="293"
              height="66"
            ></img>
          </a>
          <a
            href="https://www.pan-energy.com/Paginas/Inicio.aspx"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={Pan_American}
              alt="Pan American Energy"
              srcSet={Pan_Americanx2 + " 2x"}
              height="180"
            ></img>
          </a>
        </div>
        {/* AUSPICIANTE PLATINO END */}

        {/* AUSPICIENTE ORO START */}
        <div className="auspiciantes">
          <p className="ausp__tipo">
            <span></span>oro<span></span>
          </p>
          <div className="ausp__marca">
            <a
              href="https://www.es.cgc.energy"
              target="_blank"
              rel="noreferrer"
            >
              <img src={cgc} alt="CGC" srcSet={cgcx2 + " 2x"}></img>
            </a>
            <a href="https://www.dupont.com/" target="_blank" rel="noreferrer">
              <img src={dupont} alt="Dupont" srcSet={dupontx2 + " 2x"}></img>
            </a>
            <a href="http://www.bodlegal.com/" target="_blank" rel="noreferrer">
              <img src={bareiro} alt="Bareiro" width="200" height="200" />
            </a>
            <a href="https://bancogalicia.com" target="_blank" rel="noreferrer">
              <img
                src={galicia}
                alt="Banco Galicia"
                srcSet={galiciax2 + " 2x"}
              ></img>
            </a>
            <a
              href="https://www.immaculee.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={immacule}
                alt="Immacule"
                srcSet={immacule + " 2x"}
              ></img>
            </a>
          </div>
        </div>
        {/* AUSPICIANTE ORO END */}

        {/* AUSPICIENTE PLATA START */}
        <div className="auspiciantes">
          <p className="ausp__tipo">
            <span></span>plata<span></span>
          </p>
          <div className="ausp__marca">
            <a
              href="https://www.radioamadeus.com.ar"
              target="_blank"
              rel="noreferrer"
            >
              <img src={amadeus} alt="Amadeus" srcSet={amadeusx2 + " 2x"} />
            </a>
            <a href="https://accenture.com" target="_blank" rel="noreferrer">
              <img
                src={accenture}
                alt="Pan American Energy"
                srcSet={accenturex2 + " 2x"}
              />
            </a>

            <a href="https://www.arcor.com" target="_blank" rel="noreferrer">
              <img src={arcor} alt="Grupo Arcor" srcSet={arcorx2 + " 2x"} />
            </a>
            <a
              href="https://www.gruposupervielle.com/Spanish/Nuestra-Compaa/Responsabilidad-Social-Corporativa/default.aspx"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={superville}
                alt="Grupo SuperVille"
                srcSet={supervillex2 + " 2x"}
              />
            </a>
            <a
              href="http://www.grupomurchison.com.ar/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={murchison}
                alt="Grupo Murchison"
                srcSet={murchisonx2 + " 2x"}
              />
            </a>

            <img src={ibm} alt="IBM" srcSet={ibmx2 + " 2x"} />
            <a
              href="https://www.mabxience.com/es/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={mabxience}
                alt="mABxience"
                srcSet={mabxiencex2 + " 2x"}
              />
            </a>

            <img
              src={mckinsey}
              alt="McKinsey & Company"
              srcSet={mckinseyx2 + " 2x"}
            />
            <a
              href="http://www.programapropymes.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src={propymes} alt="PRO PYMES" srcSet={propymesx2 + " 2x"} />
            </a>
          </div>
        </div>
        {/* AUSPICIANTE PLATA END  */}

        {/* AUSPICIANTE BRONCE START */}
        <div className="auspiciantes">
          <p className="ausp__tipo">
            <span></span>bronce<span></span>
          </p>
          <div className="ausp__marca ">
            <a href="https://www.andreani.com" target="_blank" rel="noreferrer">
              <img src={andreani} alt="Andreani" srcSet={andreanix2 + " 2x"} />
            </a>
            <a
              href="http://www.lartirigoyen.com.ar"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={lartirigoyen}
                alt="Lartirigoyen"
                srcSet={lartirigoyenx2 + " 2x"}
              />
            </a>
            <a
              href="https://www.pinamar.com.ar"
              target="_blank"
              rel="noreferrer"
            >
              <img src={pinamar_sa} alt="Pinamar S.A" width="190" height="90" />
            </a>
          </div>
        </div>
        {/* AUSPICIANTE BRONCE END */}

        {/* ACOMPANAN START*/}
        <div className="auspiciantes">
          <p className="ausp__tipo">
            <span></span>Acompañan<span></span>
          </p>
          <div className="ausp__marca">
            <a
              href="https://beccarvarela.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={beccar_varela}
                alt="Beccar Varela"
                width="190"
                height="120"
              />
            </a>
            <a
              href="http://www.newsan.com.ar/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={newsan} alt="New San" width="220" height="75" />
            </a>
          </div>
        </div>
        {/* ACOMPANAN END */}
      </div>
    </div>
  );
};

export default Auspiciantes;
