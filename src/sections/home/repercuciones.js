// Libraries
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
//Banner
import banner from "../../assets/icons/logo-acde.png";
//Images de los articulos
import articulo1 from "../../assets/images/fotos-encuentro/02.palabras bienvenida I. Gorupicz.jpg";
import articulo4 from "../../assets/images/fotos-encuentro/13.emiliopersico.jpg";
import img5 from "../../assets/images/fotos-encuentro/05.jpg";
import gontanoira from "../../assets/icons/gonzalotanoira.jpeg";
import papafrancisco from "../../assets/images/papafrancisco.jpeg";

const Repercuciones = () => {
  var settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    arrows: true,
    // autoplay: true,
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
              <br />
              <p className="repercuciones__autor">
                30.06.2021 | La Nación <br />
                Autor: María Julieta Rumi
              </p>
              {/* <div></div> */}
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
              <br />
              <p className="slider__titulo2">
                Marina Dal Poggetto: Hoy la principal ventaja competitiva que
                tiene la Argentina es haber destruido los salarios
              </p>
              <p className="repercuciones__autor">
                30.06.2021 | La Voz <br />
                Autor: Corresponsalía Buenos Aires
              </p>
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
              <br />
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
              <br />
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
              <br />
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
              <br />
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
              <br />
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
            {/* ARTICULO 8 START  */}
            <div className="repercuciones__article col-12 col-md-10 col">
              <img src={img5} alt="ACDE" width="370" height="214" />
              <br />
              <p className="slider__titulo2">
                Economista señaló que "la única política de Estado que tuvimos
                es generar más pobreza”
              </p>
              <br />
              <p className="repercuciones__autor">
                30.06.2021 | NA <br />
                Autor: NA
              </p>
              <div></div>
              <a
                href="https://noticiasargentinas.com/economia/la-unica-politica-de-estado-que-tuvimos-es-generar-mas-pobreza-sentencio-dal-poggetto"
                target="_blank"
                rel="noreferrer"
              >
                Ver más
              </a>
            </div>
            {/* ARTICULO 8 END  */}
            {/* ARTICULO 9 START  */}
            <div className="repercuciones__article col-12 col-md-10 col">
              <img src={gontanoira} alt="ACDE" width="370" height="214" />
              <br />
              <p className="slider__titulo2">
                “A los empresarios nos encantaría invertir, pero necesitamos
                seguridad jurídica”, sostienen en ACDE
              </p>
              <br />
              <p className="repercuciones__autor">
                01.07.2021 | NA <br />
                Autor: NA
              </p>
              <div></div>
              <a
                href="https://noticiasargentinas.com/economia/a-los-empresarios-nos-encantaria-invertir-pero-necesitamos-seguridad-juridica-sostienen-en-acde"
                target="_blank"
                rel="noreferrer"
              >
                Ver más
              </a>
            </div>
            {/* ARTICULO 9 END  */}
            {/* ARTICULO 10 START  */}
            <div className="repercuciones__article col-12 col-md-10 col">
              <img src={papafrancisco} alt="ACDE" width="370" height="214" />
              <br />
              <p className="slider__titulo2">
                El Papa les pidió a los empresarios argentinos “no esconder la
                plata en paraísos fiscales”
              </p>
              <br />
              <p className="repercuciones__autor">
                30.06.2021 | Clarín <br />
                Autor: Sergio Rubín
              </p>
              <div></div>
              <a
                href="https://www.clarin.com/politica/papa-pidio-empresarios-argentinos-esconder-plata-paraisos-fiscales-_0_xGrpRnNjg.html"
                target="_blank"
                rel="noreferrer"
              >
                Ver más
              </a>
            </div>
            {/* ARTICULO 10 END  */}
            {/* ARTICULO 11 START  */}
            <div className="repercuciones__article col-12 col-md-10 col">
              <img src={papafrancisco} alt="ACDE" width="370" height="214" />
              <br />
              <p className="slider__titulo2">
                El Papa Francisco llamó a “invertir en el bien común y no
                esconder la plata en los paraísos fiscales”
              </p>
              <br />
              <p className="repercuciones__autor">
                30.06.2021 | La Nación <br />
                Autor: Silvia Stang
              </p>
              <div></div>
              <a
                href="https://www.lanacion.com.ar/economia/papa-francisco-falta-invertir-en-el-bien-comun-y-no-esconder-plata-en-paraisos-fiscales-nid30062021/"
                target="_blank"
                rel="noreferrer"
              >
                Ver más
              </a>
            </div>
            {/* ARTICULO 11 END  */}
            {/* ARTICULO 12 START  */}
            <div className="repercuciones__article col-12 col-md-10 col">
              <img src={papafrancisco} alt="ACDE" width="370" height="214" />
              <br />
              <p className="slider__titulo2">
                Papa Francisco pidió confiar en las pymes y llamó a "no esconder
                la plata en los paraísos fiscales"
              </p>
              <br />
              <p className="repercuciones__autor">
                30.06.2021 | Ámbito Financiero <br />
                Autor: Sergio Rubín
              </p>
              <div></div>
              <a
                href="https://www.ambito.com/politica/pymes/papa-francisco-pidio-confiar-las-y-llamo-no-esconder-la-plata-los-paraisos-fiscales-n5210751"
                target="_blank"
                rel="noreferrer"
              >
                Ver más
              </a>
            </div>
            {/* ARTICULO 12 END  */}
            {/* ARTICULO 13 START  */}
            <div className="repercuciones__article col-12 col-md-10 col">
              <img src={papafrancisco} alt="ACDE" width="370" height="214" />
              <br />
              <p className="slider__titulo2">
                El Papa le pide a empresarios argentinos "no esconder la plata
                en paraísos fiscales"
              </p>
              <br />
              <p className="repercuciones__autor">
                30.06.2021 | El Cronista <br />
                Autor: Ezequiel Chabay
              </p>
              <div></div>
              <a
                href="https://www.cronista.com/economia-politica/el-papa-francisco-le-pide-a-empresarios-argentinos-no-esconder-la-plata-en-paraisos-fiscales/"
                target="_blank"
                rel="noreferrer"
              >
                Ver más
              </a>
            </div>
            {/* ARTICULO 13 END  */}
            {/* ARTICULO 14 START  */}
            <div className="repercuciones__article col-12 col-md-10 col">
              <img src={papafrancisco} alt="ACDE" width="370" height="214" />
              <br />
              <p className="slider__titulo2">
                Congreso anual ACDE: el Papa Francisco pidió "volver a la
                economía de lo concreto"
              </p>
              <br />
              <p className="repercuciones__autor">
                30.06.2021 | Perfil <br />
                Autor: Lorena Rodriguez
              </p>
              <div></div>
              <a
                href="https://www.perfil.com/noticias/economia/congreso-anual-acde-el-papa-francisco-pidio-volver-a-la-economia-de-lo-concreto.phtml"
                target="_blank"
                rel="noreferrer"
              >
                Ver más
              </a>
            </div>
            {/* ARTICULO 14 END  */}
            {/* ARTICULO 15 START  */}
            <div className="repercuciones__article col-12 col-md-10 col">
              <img src={papafrancisco} alt="ACDE" width="370" height="214" />
              <br />
              <p className="slider__titulo2">
                El mensaje del papa Franciso a los empresarios argentinos: “Hay
                que invertir en el bien común, no esconder la plata en los
                paraísos fiscales”
              </p>
              <p className="repercuciones__autor">
                30.06.2021 | Infobae <br />
                Autor: Lorena Rodriguez
              </p>
              <div></div>
              <a
                href=" https://www.infobae.com/politica/2021/06/30/el-mensaje-del-papa-franciso-a-los-empresarios-argentinos-hay-que-invertir-en-el-bien-comun-no-esconder-la-plata-en-los-paraisos-fiscales/"
                target="_blank"
                rel="noreferrer"
              >
                Ver más
              </a>
            </div>
            {/* ARTICULO 15 END  */}
            {/* ARTICULO 16 START  */}
            <div className="repercuciones__article col-12 col-md-10 col">
              <img
                src="https://images.lavoz.com.ar/resizer/-4PB4DorWVuGnNJVqsMYihYPy0w=/1023x682/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/FN6SZ6JHAFGGTDO552ZPXEJTLI.jpg"
                alt="ACDE"
                width="370"
                height="214"
              />
              <br />
              <p className="slider__titulo2">
                Marina Dal Poggetto: “Hoy la principal ventaja competitiva que
                tiene la Argentina es haber destruido los salarios”
              </p>
              <p className="repercuciones__autor">
                30.06.2021 | Los Andes <br />
                Autor: Lorena Rodriguez
              </p>
              <div></div>
              <a
                href="https://www.losandes.com.ar/economia/marina-dal-poggetto-hoy-la-principal-ventaja-competitiva-que-tiene-la-argentina-es-haber-destruido-los-salarios/"
                target="_blank"
                rel="noreferrer"
              >
                Ver más
              </a>
            </div>
            {/* ARTICULO 16 END  */}
            {/* ARTICULO 17 START  */}
            <div className="repercuciones__article col-12 col-md-10 col">
              <img
                src="https://images.clarin.com/2021/07/01/gonzalo-tanoira-presidente-de-acde___qcorBke4I_1256x620__1.jpg"
                alt="ACDE"
                width="370"
                height="214"
              />
              <br />
              <p className="slider__titulo2">
                El Gobierno tuvo que enfrentar situaciones difíciles, pero se
                tomaron decisiones equivocadas”
              </p>
              <br />
              <p className="repercuciones__autor">
                01.07.2021 | Clarín <br />
                Autor: Ana Clara Pedotti
              </p>
              <div></div>
              <a
                href=" https://www.clarin.com/economia/-gobierno-enfrentar-situaciones-dificiles-tomaron-decisiones-equivocadas-_0_gRyxFEscv.html"
                target="_blank"
                rel="noreferrer"
              >
                Ver más
              </a>
            </div>
            {/* ARTICULO 17 END  */}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Repercuciones;
