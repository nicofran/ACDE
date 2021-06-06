// Libraries
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
//IMAGES
import banner from "../../assets/icons/logo-acde.png";
import acde from "../../assets/images/logo-acde1.svg";

const Camino = () => {
  var settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    arrows: true,
    responsive: [
      {
        breakpoint: 700,
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
          <h3 className="camino__title">camino al encuentro</h3>
        </div>
      </div>
      <div className="camino__sliders">
        <Slider {...settings}>
          {/* ARTICULO 1 START  */}
          <div className="camino__article">
            <img src={acde} alt="ACDE" />
            <p className="slider__titulo">
              Entrevista a Ignacio Gorupicz,<br></br> presidente del Encuentro
              Anual ACDE 2021
            </p>
            <a href="https://empresa.org.ar/2021/entrevista-a-ignacio-gorupicz-presidente-del-encuentro-anual-acde-2021/">
              Ver más
            </a>
          </div>
          {/* ARTICULO 1 END  */}
          {/* ARTICULO 2 START  */}
          <div className="camino__article">
            <img src={acde} alt="ACDE" />
            <p className="slider__titulo">
              Entrevista a Ignacio Gorupicz,<br></br> presidente del Encuentro
              Anual ACDE 2021
            </p>
            <a href="https://empresa.org.ar/2021/entrevista-a-ignacio-gorupicz-presidente-del-encuentro-anual-acde-2021/">
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
            <a href="https://empresa.org.ar/2021/entrevista-a-ignacio-gorupicz-presidente-del-encuentro-anual-acde-2021/">
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
            <a href="https://empresa.org.ar/2021/entrevista-a-ignacio-gorupicz-presidente-del-encuentro-anual-acde-2021/">
              Ver más
            </a>
          </div>
          {/* ARTICULO 3 END  */}
        </Slider>
      </div>
    </div>
  );
};
export default Camino;
