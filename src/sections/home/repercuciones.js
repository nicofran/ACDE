// Libraries
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
//Banner
import banner from "../../assets/icons/logo-acde.png";
//Images de los articulos
import articulo1 from "../../assets/images/fotos-encuentro/02.palabras bienvenida I. Gorupicz.jpg";
import articulo4 from "../../assets/images/fotos-encuentro/13.emiliopersico.jpg";

const Repercuciones = () => {
  var settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
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
    <div className="repercuciones" id="repercuciones">
      <div className="container">
        <div className="repercuciones__banner blue">
          <img src={banner} alt="ACDE" />
          <h1 className="repercuciones__title">
            Principales repercuciones en medios
          </h1>
        </div>
        <div className="repercuciones__sliders">
          <Slider {...settings}>
            {/* ARTICULO 1 START  */}
            <div className="repercuciones__article col-12 col-md-10 col">
              <img src={articulo1} alt="ACDE" width="370" height="214" />
              <p className="slider__titulo2">
                <br></br>
                Empresarios señalaron la necesidad de crear trabajo, pero
                advirtieron que hay trabas
              </p>
              <p className="repercuciones__autor">
                30.06.2021 | La Nación <br />
                Autor: María Julieta Rumi
              </p>
              <div></div>
              <a
                href="https://www.lanacion.com.ar/economia/empresarios-senalaron-la-necesidad-de-crear-trabajo-para-combatir-la-pobreza-nid30062021/"
                target="_blank"
                rel="noreferrer"
              >
                Ver más
              </a>
            </div>
            {/* ARTICULO 1 END  */}
            {/* ARTICULO 2 START  */}
            <div className="repercuciones__article col-12 col-md-10 col">
              <img
                src="https://images.lavoz.com.ar/resizer/-4PB4DorWVuGnNJVqsMYihYPy0w=/1023x682/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/FN6SZ6JHAFGGTDO552ZPXEJTLI.jpg"
                alt="ACDE"
                width="370"
                height="214"
              />
              <p className="slider__titulo2">
                Marina Dal Poggetto: Hoy la principal ventaja competitiva que
                tiene la Argentina es haber destruido los salarios
              </p>
              <p className="repercuciones__autor">
                30.06.2021 | La Voz <br />
                Autor: Corresponsalía Buenos Aires
              </p>
              <div></div>
              <a
                href="https://www.lavoz.com.ar/politica/marina-dal-poggetto-hoy-la-principal-ventaja-competitiva-que-tiene-la-argentina-es-haber-destruido-los-salarios/"
                target="_blank"
                rel="noreferrer"
              >
                Ver más
              </a>
            </div>
            {/* ARTICULO 2 END  */}
            {/* ARTICULO 3 START  */}
            <div className="repercuciones__article col-12 col-md-10 col">
              <img
                src="https://images.lavoz.com.ar/resizer/-4PB4DorWVuGnNJVqsMYihYPy0w=/1023x682/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/FN6SZ6JHAFGGTDO552ZPXEJTLI.jpg"
                alt="ACDE"
                width="370"
                height="214"
              />
              <p className="slider__titulo2">
                <br></br>
                "La única política de Estado que tuvimos es generar más
                pobreza”, afirmó Dal Poggetto
              </p>
              <p className="repercuciones__autor">
                30.06.2021 | La Prensa <br />
                Autor: La Prensa
              </p>
              <div></div>
              <a
                href="http://www.laprensa.com.ar/503634-La-unica-politica-de-Estado-que-tuvimos-es-generar-mas-pobreza-afirmo-Dal-Poggetto.note.aspx"
                target="_blank"
                rel="noreferrer"
              >
                Ver más
              </a>
            </div>
            {/* ARTICULO 3 END  */}
            {/* ARTICULO 4 START  */}
            <div className="repercuciones__article col-12 col-md-10 col">
              <img src={articulo4} alt="ACDE" width="370" height="214" />
              <p className="slider__titulo2">
                <br></br>
                Pérsico y Migliore coincidieron en la necesidad de integrar a
                trabajadores de economía popular
              </p>
              <p className="repercuciones__autor">
                30.06.2021 | Grupo La Provincia <br />
                Autor: Grupo La Provincia
              </p>
              <div></div>
              <a
                href="https://www.grupolaprovincia.com/politica/persico-y-migliore-coincidieron-en-la-necesidad-de-integrar-a-trabajadores-de-economia-popular-745763"
                target="_blank"
                rel="noreferrer"
              >
                Ver más
              </a>
            </div>
            {/* ARTICULO 4 END  */}
            {/* ARTICULO 5 START  */}
            <div className="repercuciones__article col-12 col-md-10 col">
              <img
                src="https://images.clarin.com/2021/01/14/emilio-persico___FA0hy8DS9_1256x620__2.jpg#1625075677293"
                alt="ACDE"
                width="370"
                height="214"
              />
              <p className="slider__titulo2">
                <br></br>
                Emilio Pérsico criticó la política de subsidios: “Es lo primero
                que se le ocurre al Estado, pero no es la salida”
              </p>
              <p className="repercuciones__autor">
                30.06.2021 | Clarín <br />
                Autor: Ana Clara Pedotti
              </p>
              <div></div>
              <a
                href=" https://www.clarin.com/economia/emilio-persico-critico-politica-subsidios-primero-ocurre-salida-_0_JvCuwzjlh.html"
                target="_blank"
                rel="noreferrer"
              >
                Ver más
              </a>
            </div>
            {/* ARTICULO 5 END  */}
            {/* ARTICULO 6 START  */}
            <div className="repercuciones__article col-12 col-md-10 col">
              <img src={articulo4} alt="ACDE" width="370" height="214" />
              <p className="slider__titulo2">
                <br></br>
                Pérsico y Migliore coincidieron en la necesidad de integrar a
                trabajadores de economía popular
              </p>
              <p className="repercuciones__autor">
                30.06.2021 | Cablera Telam <br />
                Autor: Cablera Telam
              </p>
              <div></div>
              <a
                href="https://cablera.telam.com.ar/cable/1109363/persico-y-migliore-coincidieron-en-la-necesidad-de-integrar-a-trabajadores-de-economia-popular"
                target="_blank"
                rel="noreferrer"
              >
                Ver más
              </a>
            </div>
            {/* ARTICULO 6 END  */}
            {/* ARTICULO 7 START  */}
            <div className="repercuciones__article col-12 col-md-10 col">
              <img
                src="https://cablera.telam.com.ar/Multimedia/Fotos/Thumbs/202107/tn_9e5d0f3e0532abc991adfc21cb523fa5_300x199.jpg"
                alt="ACDE"
                width="370"
                height="214"
              />
              <p className="slider__titulo2">
                Arzobispo platense llamó a empresarios a pensar en "función
                social" y tener "pasión" dar más trabajo
              </p>
              <p className="repercuciones__autor">
                01.07.2021 | Cablera Telam <br />
                Autor: Cablera Telam
              </p>
              <div></div>
              <a
                href="https://cablera.telam.com.ar/cable/1109891/arzobispo-platense-llamo-a-empresarios-a-pensar-en-funcion-social-y-tener-pasion-dar-mas-trabajo"
                target="_blank"
                rel="noreferrer"
              >
                Ver más
              </a>
            </div>
            {/* ARTICULO 7 END  */}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Repercuciones;
