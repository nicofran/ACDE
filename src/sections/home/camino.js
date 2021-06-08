// Libraries
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
//IMAGES
import banner from "../../assets/icons/logo-acde.png";
import acde from "../../assets/images/logo-carrousel.png";

//ARROW prev & next
import { ReactComponent as IconBack } from "../../assets/icons/Back.svg";
import { ReactComponent as IconNext } from "../../assets/icons/Next.svg";

const Camino = () => {
  const ArrowBack = (props) => {
    return (
      <button className={props.className} onClick={props.onClick}>
        <IconBack />
      </button>
    );
  };

  const ArrowNext = (props) => {
    return (
      <button className={props.className} onClick={props.onClick}>
        <IconNext />
      </button>
    );
  };

  var settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    prevArrow: <ArrowBack />,
    nextArrow: <ArrowNext />,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          arrows: false,
          slidesToShow: 1,
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
          <img src={banner} alt="ACDE"></img>
          <h1 className="camino__title">camino al encuentro</h1>
        </div>
        <div className="camino__sliders">
          <Slider {...settings}>
            {/* ARTICULO 1 START  */}
            <div className="camino__article">
              <img
                src="https://i2.wp.com/empresa.org.ar/wp-content/uploads/2021/06/MM-Preziosa-y-delia.png?w=1620&ssl=1"
                alt="ACDE"
              />
              <p className="slider__titulo">
                Un café virtual con Delia Ferreira Rubio
              </p>
              <p className="camino__autor">
                07.06.2021 | Portal Empresa <br />
                Autora: María Marta Preziosa
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
            <div className="camino__article">
              <img src={acde} alt="ACDE" />
              <p className="slider__titulo">
                Entrevista a Ignacio Gorupicz,
                <br /> presidente del Encuentro Anual ACDE 2021
              </p>
              <p className="camino__autor">
                06.05.21 | Portal Empresa <br />
                Autor: Tristán Rodríguez Loredo
              </p>
              <a
                href="https://i2.wp.com/empresa.org.ar/wp-content/uploads/2021/05/Diseno-sin-titulo-12.png?w=1620&ssl=1"
                target="_blank"
                rel="noreferrer"
              >
                Ver más
              </a>
            </div>
            {/* ARTICULO 2 END  */}
            {/* ARTICULO 3 START  */}
            <div className="camino__article">
              <img src={acde} alt="ACDE" />
              <p className="slider__titulo">
                Entrevista a Ignacio Gorupicz,<br></br> presidente del Encuentro
                Anual ACDE 2021
              </p>
              <p className="camino__autor">
                6 mayo 2021 | ACDE Empresa | Autor: Tristán Rodríguez Loredo
              </p>
              <a
                href="https://empresa.org.ar/2021/entrevista-a-ignacio-gorupicz-presidente-del-encuentro-anual-acde-2021/"
                target="_blank"
                rel="noreferrer"
              >
                Ver más
              </a>
            </div>
            {/* ARTICULO 3 END  */}
            {/* ARTICULO 3 START  */}
            <div className="camino__article">
              <img src={acde} alt="ACDE" />
              <p className="slider__titulo">
                Entrevista a Ignacio Gorupicz,<br></br> presidente del Encuentro
                Anual ACDE 2021
              </p>
              <p className="camino__autor">
                6 mayo 2021 | ACDE Empresa | Autor: Tristán Rodríguez Loredo
              </p>
              <a
                href="https://empresa.org.ar/2021/entrevista-a-ignacio-gorupicz-presidente-del-encuentro-anual-acde-2021/"
                target="_blank"
                rel="noreferrer"
              >
                Ver más
              </a>
            </div>
            {/* ARTICULO 3 END  */}
          </Slider>
        </div>
      </div>
    </div>
  );
};
export default Camino;
