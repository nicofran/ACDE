// Libraries
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
//IMAGES
import banner from "../../assets/icons/logo-acde.png";
import acde from "../../assets/images/logo-acde1.svg";

const Camino = () => {
  var settings = {
    // dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
  };
  return (
    <div className="camino">
      <div className="container">
        <div className="camino__banner">
          <img src={banner} alt="ACDE"></img>
          <h3 className="camino__title">camino al encuentro</h3>
        </div>
      </div>

      <Slider {...settings}>
        <div className="camino__camino">
          <div className="camino__article">
            <img src={acde} alt="ACDE" />
            <p>
              Entrevista a Ignacio Gorupicz,<br></br> presidente del Encuentro
              Anual ACDE 2021
            </p>
            <a href="https://empresa.org.ar/2021/entrevista-a-ignacio-gorupicz-presidente-del-encuentro-anual-acde-2021/">
              Ver más
            </a>
          </div>
          <div className="camino__article">
            <img src={acde} alt="ACDE" />
            <p>
              Entrevista a Ignacio Gorupicz,<br></br> presidente del Encuentro
              Anual ACDE 2021
            </p>
            <a href="https://empresa.org.ar/2021/entrevista-a-ignacio-gorupicz-presidente-del-encuentro-anual-acde-2021/">
              Ver más
            </a>
          </div>
          <div className="camino__article">
            <img src={acde} alt="ACDE" />
            <p>
              Entrevista a Ignacio Gorupicz,<br></br> presidente del Encuentro
              Anual ACDE 2021
            </p>
            <a href="https://empresa.org.ar/2021/entrevista-a-ignacio-gorupicz-presidente-del-encuentro-anual-acde-2021/">
              Ver más
            </a>
          </div>
        </div>
      </Slider>
    </div>
  );
};
export default Camino;
