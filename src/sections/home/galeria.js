import logo from "../../assets/icons/logo-acde.png";
//imagenes
import img1 from "../../assets/images/fotos-encuentro/00.bienvenida.jpg";
// import img2 from "../../assets/images/fotos-encuentro/02.palabras bienvenida I. Gorupicz.jpg";
// import img3 from "../../assets/images/fotos-encuentro/00.bienvenida.jpg";
// import img4 from "../../assets/images/fotos-encuentro/00.bienvenida.jpg";
// import img5 from "../../assets/images/fotos-encuentro/00.bienvenida.jpg";
// import img6 from "../../assets/images/fotos-encuentro/00.bienvenida.jpg";
// import img7 from "../../assets/images/fotos-encuentro/00.bienvenida.jpg";
// import img8 from "../../assets/images/fotos-encuentro/00.bienvenida.jpg";
// import img9 from "../../assets/images/fotos-encuentro/00.bienvenida.jpg";
// import img10 from "../../assets/images/fotos-encuentro/00.bienvenida.jpg";

const Galeria = () => {
  return (
    <div className="galeria" id="galeria">
      <div className="galeria__span">
        <img className="logo" src={logo} alt="ACDE" />
        <h1 className="bienvenida__titulo">Galeria de imagenes</h1>
      </div>
      <div className="galeria__container">
        <div className="column">
          <img src={img1} alt="bla" />
        </div>
      </div>
    </div>
  );
};

export default Galeria;
