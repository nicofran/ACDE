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
import galicia from "../../assets/images/galicianew.png";
import galiciax2 from "../../assets/images/galicia@x2.png";
import dupont from "../../assets/images/dupont.png";
import dupontx2 from "../../assets/images/dupont@x2.png";
import immacule from "../../assets/images/logoimmaculee.png";
import lanacion from "../../assets/images/LN_logo.jpg";
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
import mckinsey from "../../assets/images/McKinsey2.png";
import propymes from "../../assets/images/propymesrgb.png";
import propymesx2 from "../../assets/images/propymesrgb@2x.png";
import toyota from "../../assets/images/Toyota.png";
import bareiro from "../../assets/images/barreiro-logo.png";
//Auspiciantes de Bronce
import andreani from "../../assets/images/andreani.png";
import andreanix2 from "../../assets/images/andreani@2x.png";
import lartirigoyen from "../../assets/images/lartirigoyen.png";
import lartirigoyenx2 from "../../assets/images/lartirigoyen@2x.png";
import pinamar_sa from "../../assets/icons/pinamar-sa.png";
import caldenes from "../../assets/images/caldenes.jpg";
import bullo from "../../assets/images/bullo-logo.jpg";
//Acompañan
import beccar_varela from "../../assets/images/beccar-varela.jpg";
import newsan from "../../assets/images/newsan-logo.png";
import manpower from "../../assets/images/MANPOWER.png";
// import price from "../../assets/images/price.eps";
import raizen from "../../assets/images/RAIZEN.png";
import price from "../../assets/images/price.png";
import ey from "../../assets/images/ey-logo.jpg";
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
              <img src={dupont} alt="Dupont" srcSet={dupontx2 + " 3x"}></img>
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
                srcSet={immacule + " 3x"}
              ></img>
            </a>
            <a
              href="https://www.lanacion.com.ar/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={lanacion}
                alt="Diario La Nación"
                srcSet={lanacion + " 2.5x"}
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
            <a href="http://www.bodlegal.com/" target="_blank" rel="noreferrer">
              <img src={bareiro} alt="Bareiro" width="171" height="171" />
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
            <a
              href="https://www.mckinsey.com/ar/overview"
              target="_blank"
              rel="noreferrer"
            >
              <img src={mckinsey} alt="Mc Kinsey" srcSet={mckinsey + " 6x"} />
            </a>
            <a
              href="http://www.programapropymes.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src={propymes} alt="PRO PYMES" srcSet={propymesx2 + " 2x"} />
            </a>
            <a
              href="https://www.toyota.com.ar/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={toyota} alt="Toyota" srcSet={toyota + " 4x"} />
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
              href="http://www.caldenes.com.ar"
              target="_blank"
              rel="noreferrer"
            >
              <img src={caldenes} alt="Caldenes S.A" width="229" height="71" />
            </a>
            <a
              href=" http://www.ebullo.com.ar/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={bullo} alt="Estudio Bulló" width="281" height="118" />
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
            <a href=" http://www.ey.com/es_ar" target="_blank" rel="noreferrer">
              <img src={ey} alt="AY" width="87" height="102" />
            </a>
            <a
              href="http://www.manpowergroup.com.ar/ "
              target="_blank"
              rel="noreferrer"
            >
              <img src={manpower} alt="manpower" width="190" height="160" />
            </a>
            <a
              href="http://www.newsan.com.ar/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={newsan} alt="New San" width="229" height="35" />
            </a>
            <a href="https://www.pwc.com.ar/" target="_blank" rel="noreferrer">
              <img src={price} alt="Price" width="180" height="140" />
            </a>
            <a
              href="http://www.raizen.com.ar/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={raizen} alt="Raizen" width="171" height="153" />
            </a>
          </div>
        </div>
        {/* ACOMPANAN END */}
      </div>
    </div>
  );
};

export default Auspiciantes;
