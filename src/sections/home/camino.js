// Libraries
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
//IMAGES
import banner from "../../assets/icons/logo-acde.png";
import gontanoira from "../../assets/icons/gonzalotanoira.jpeg";
import ignacio from "../../assets/images/portal-empresa.png";
import aica from "../../assets/images/aica-logo.jpg";
import telam from "../../assets/images/telam.jpg";

// //ARROW prev & next
// import { ReactComponent as IconBack } from "../../assets/icons/Back.svg";
// import { ReactComponent as IconNext } from "../../assets/icons/Next.svg";

const Camino = () => {
  // const ArrowBack = (props) => {
  //   return (
  //     <button className={props.className} onClick={props.onClick}>
  //       <IconBack />
  //     </button>
  //   );
  // };

  // const ArrowNext = (props) => {
  //   return (
  //     <button className={props.className} onClick={props.onClick}>
  //       <IconNext />
  //     </button>
  //   );
  // };

  var settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    // prevArrow: <ArrowBack />,
    // nextArrow: <ArrowNext />,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="camino" id="camino">
      <div className="container">
        <div className="camino__banner">
          <img src={banner} alt="ACDE" />
          <h1 className="camino__title">Camino al encuentro</h1>
        </div>
        <div className="camino__sliders">
          <Slider {...settings}>
            {/* ARTICULO 1 START  */}
            <div className="camino__article col-12 col-md-10 col">
              <img
                src="https://i2.wp.com/empresa.org.ar/wp-content/uploads/2021/06/MM-Preziosa-y-delia.png?w=1620&ssl=1"
                alt="ACDE"
                width="370"
                height="214"
              />
              <p className="slider__titulo2">
                <br></br>
                Un café virtual con Delia Ferreira Rubio
              </p>
              <p className="camino__autor">
                07.06.2021 | Portal Empresa <br />
                Autor: María Marta Preziosa
              </p>
              <div></div>
              <a
                href="https://empresa.org.ar/2021/un-cafe-virtual-con-delia-ferreira-rubio/"
                target="_blank"
                rel="noreferrer"
              >
                Ver más
              </a>
            </div>
            {/* ARTICULO 1 END  */}

            {/* ARTICULO 2 START  */}
            <div className="camino__article col-12 col-md-10 ">
              <img src={ignacio} alt="ACDE" height="220" />
              <p className="slider__titulo">
                Entrevista a Ignacio Gorupicz,
                <br /> presidente del Encuentro Anual ACDE 2021
              </p>
              <p className="camino__autor">
                06.05.21 | Portal Empresa <br />
                Autor: Tristán Rodríguez Loredo
              </p>
              <a
                href="https://empresa.org.ar/2021/entrevista-a-ignacio-gorupicz-presidente-del-encuentro-anual-acde-2021/"
                target="_blank"
                rel="noreferrer"
              >
                Ver más
              </a>
            </div>
            {/* ARTICULO 2 END  */}
            {/* ARTICULO 3 START  */}
            <div className="camino__article col-12 col-md-10 ">
              <img src={gontanoira} alt="ACDE" width="375" height="220" />
              <p className="slider__titulo">
                Atraer inversiones reduce la pobreza. Combatiendo el capital
                solo se la aumenta.
              </p>
              <p className="camino__autor">
                19.04.21 | AMBITO <br />
                Autor: Liliana Franco
              </p>
              <a
                href="https://www.ambito.com/economia/inversiones/gonzalo-tanoira-atraer-reduce-la-pobreza-combatiendo-el-capital-solo-se-la-aumenta-n5185529"
                target="_blank"
                rel="noreferrer"
              >
                Ver más
              </a>
            </div>
            {/* ARTICULO 3 END  */}
            {/* ARTICULO 4 START  */}
            <div className="camino__article col-12 col-md-10">
              <img src={aica} alt="ACDE" width="375" height="220" />
              <p className="slider__titulo">
                <br></br>
                ACDE presentó su encuentro anual: Hacia un capitalismo más
                humano
              </p>
              <p className="camino__autor">
                18.06.2021 | AICA
                <br />
                Autor: AICA
              </p>
              <div></div>
              <a
                href="https://aica.org/noticia-acde-presento-su-encuentro-anual-hacia-un-capitalismo-mas-humano"
                target="_blank"
                rel="noreferrer"
              >
                Ver más
              </a>
            </div>
            {/* ARTICULO 4 END  */}
            {/* ARTICULO 4 START  */}
            <div className="camino__article col-12 col-md-10">
              <img src={telam} alt="ACDE" width="375" height="220" />
              <p className="slider__titulo">
                <br></br>
                Los empresarios cristianos debaten un "capitalismo más humano"
                en su Encuentro Anual
                <br />
              </p>
              <p className="camino__autor">19.06.2021 | Télam</p>
              <a
                href="https://www.telam.com.ar/notas/202106/558316-empresarios-foro-capitalismo-cristianos.html"
                target="_blank"
                rel="noreferrer"
              >
                Ver más
              </a>
            </div>
            {/* ARTICULO 4 END  */}
          </Slider>
        </div>
      </div>
    </div>
  );
};
export default Camino;
