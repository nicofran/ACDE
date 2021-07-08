import logo from "../../assets/icons/logo-acde.png";
//LIGHTBOX CONTEXT
import { SRLWrapper } from "simple-react-lightbox";
//imagenes
import img1 from "../../assets/images/fotos-encuentro/00.bienvenida.jpg";
import img2 from "../../assets/images/fotos-encuentro/02.palabras bienvenida I. Gorupicz.jpg";
import img3 from "../../assets/images/fotos-encuentro/03.jpg";
import img4 from "../../assets/images/fotos-encuentro/04.jpg";
import img5 from "../../assets/images/fotos-encuentro/05.jpg";
import img6 from "../../assets/images/fotos-encuentro/06.jpg";
import img7 from "../../assets/images/fotos-encuentro/07.jpg";
import img8 from "../../assets/images/fotos-encuentro/08.jpg";
import img9 from "../../assets/images/fotos-encuentro/09.jpg";
// import img10 from "../../assets/images/fotos-encuentro/10.jpg";
import img11 from "../../assets/images/fotos-encuentro/11.jpg";
import img12 from "../../assets/images/fotos-encuentro/12.jpg";
import img13 from "../../assets/images/fotos-encuentro/13.emiliopersico.jpg";
import img14 from "../../assets/images/fotos-encuentro/14.jpg";
// import img15 from "../../assets/images/fotos-encuentro/15.jpg";
import img16 from "../../assets/images/fotos-encuentro/16.jpg";
// import img17 from "../../assets/images/fotos-encuentro/17.jpg";
import img18 from "../../assets/images/fotos-encuentro/18.jpg";
import img19 from "../../assets/images/fotos-encuentro/19.jpg";
import img20 from "../../assets/images/fotos-encuentro/20.jpg";
import img21 from "../../assets/images/fotos-encuentro/21.jpg";
import img22 from "../../assets/images/fotos-encuentro/22.jpg";
import img23 from "../../assets/images/fotos-encuentro/23.jpg";
import img24 from "../../assets/images/fotos-encuentro/24.jpg";
import img25 from "../../assets/images/fotos-encuentro/25.jpg";
import img26 from "../../assets/images/fotos-encuentro/26.jpg";
import img27 from "../../assets/images/fotos-encuentro/27.jpg";
import img28 from "../../assets/images/fotos-encuentro/28.jpg";
import img29 from "../../assets/images/fotos-encuentro/29.jpg";
import img30 from "../../assets/images/fotos-encuentro/30.jpg";
import img31 from "../../assets/images/fotos-encuentro/31.jpg";
import img32 from "../../assets/images/fotos-encuentro/32.jpg";
import img33 from "../../assets/images/fotos-encuentro/33.jpg";
import img34 from "../../assets/images/fotos-encuentro/34.jpg";
import img35 from "../../assets/images/fotos-encuentro/35.jpg";
import img36 from "../../assets/images/fotos-encuentro/36.jpg";

const Galeria = () => {
  return (
    <div className="galeria" id="galeria">
      <div className="galeria__span">
        <img className="logo" src={logo} alt="ACDE" />
        <h1 className="bienvenida__titulo">Galeria de fotos</h1>
      </div>
      <div className="galeria__container">
        <SRLWrapper>
          <a href={img1}>
            <img src={img1} alt="ACDE" />
          </a>
          <a href={img2}>
            <img src={img2} alt="ACDE" />
          </a>
          <a href={img3}>
            <img src={img3} alt="ACDE" />
          </a>
          <a href={img4}>
            <img src={img4} alt="ACDE" />
          </a>
          <a href={img5}>
            <img src={img5} alt="ACDE" />
          </a>
          <a href={img6}>
            <img src={img6} alt="ACDE" />
          </a>
          <a href={img7}>
            <img src={img7} alt="ACDE" />
          </a>
          <a href={img8}>
            <img src={img8} alt="ACDE" />
          </a>
          <a href={img9}>
            <img src={img9} alt="ACDE" />
          </a>

          <a href={img11}>
            <img src={img11} alt="ACDE" />
          </a>
          <a href={img12}>
            <img src={img12} alt="ACDE" />
          </a>
          <a href={img13}>
            <img src={img13} alt="ACDE" />
          </a>
          <a href={img14}>
            <img src={img14} alt="ACDE" />
          </a>

          <a href={img16}>
            <img src={img16} alt="ACDE" />
          </a>

          <a href={img18}>
            <img src={img18} alt="ACDE" />
          </a>
          <a href={img19}>
            <img src={img19} alt="ACDE" />
          </a>
          <a href={img20}>
            <img src={img20} alt="ACDE" />
          </a>
          <a href={img21}>
            <img src={img21} alt="ACDE" />
          </a>
          <a href={img22}>
            <img src={img22} alt="ACDE" />
          </a>
          <a href={img23}>
            <img src={img23} alt="ACDE" />
          </a>
          <a href={img24}>
            <img src={img24} alt="ACDE" />
          </a>
          <a href={img25}>
            <img src={img5} alt="ACDE" />
          </a>
          <a href={img26}>
            <img src={img26} alt="ACDE" />
          </a>
          <a href={img27}>
            <img src={img27} alt="ACDE" />
          </a>
          <a href={img28}>
            <img src={img28} alt="ACDE" />
          </a>
          <a href={img29}>
            <img src={img29} alt="ACDE" />
          </a>
          <a href={img30}>
            <img src={img31} alt="ACDE" />
          </a>
          <a href={img31}>
            <img src={img31} alt="ACDE" />
          </a>
          <a href={img32}>
            <img src={img32} alt="ACDE" />
          </a>
          <a href={img33}>
            <img src={img33} alt="ACDE" />
          </a>
          <a href={img34}>
            <img src={img34} alt="ACDE" />
          </a>
          <a href={img36}>
            <img src={img36} alt="ACDE" />
          </a>
          <a href={img35}>
            <img src={img35} alt="ACDE" />
          </a>
        </SRLWrapper>
      </div>
    </div>
  );
};

export default Galeria;
