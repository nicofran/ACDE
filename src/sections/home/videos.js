import VideoGalery from "../../components/video-galeria/video-galeria";
import icon from "../../assets/icons/logo-acde.png";

const Videos = () => {
  return (
    <div>
      <div className="expo__span" id="videos">
        <img className="logo" src={icon} alt="ACDE" />
        <h1 className="carta__titulo">Videos</h1>
      </div>
      <div className="video">
        <VideoGalery
          src={"https://www.youtube.com/embed/iW4COTj10_k"}
          title={
            "Palabras de bienvenida. Ignacio Gorupicz, Presidente del XXIV Encuentro Anual ACDE"
          }
          id={"iW4COTj10_k"}
        />
        <VideoGalery
          src={"https://www.youtube.com/embed/gY7YWcznCIk"}
          title={
            "Palabras de Apertura. Papa Francisco | XXIV Encuentro Anual ACDE"
          }
          id={"gY7YWcznCIk"}
        />
        <VideoGalery
          src={"https://www.youtube.com/embed/WY0UUeKK1aU"}
          title={
            "La mirada cristiana de la economía y la sociedad | XXIV Encuentro Anual ACDE"
          }
          id={"WY0UUeKK1aU"}
        />
        <VideoGalery
          src={"https://www.youtube.com/embed/GBDjwJxkufw"}
          title={
            "Construcción de confianza entre sindicalistas y empresarios | XXIV Encuentro Anual ACDE"
          }
          id={"GBDjwJxkufw"}
        />
        <VideoGalery
          src={"https://www.youtube.com/embed/GB6GdcrkyDU"}
          title={
            "El valor y los desafíos de la economía social | XXIV Encuentro Anual ACDE"
          }
          id={"GB6GdcrkyDU"}
        />
        <VideoGalery
          src={"https://www.youtube.com/embed/Us-UmOveyJI"}
          title={
            "El poder de las PyMES para generar empleo | XXIV Encuentro Anual ACDE"
          }
          id={"Us-UmOveyJI"}
        />
        <VideoGalery
          src={"https://www.youtube.com/embed/4P2JdHPkKwk"}
          title={
            "Palabras de cierre primer día. Juan Vaquer | XXIV Encuentro Anual ACDE"
          }
          id={"4P2JdHPkKwk"}
        />
        <VideoGalery
          src={"https://www.youtube.com/embed/U54fR6n9qYo"}
          title={
            "Reflexión. Monseñor Víctor Manuel Fernández | XXIV Encuentro Anual ACDE"
          }
          id={"U54fR6n9qYo"}
        />
        <VideoGalery
          src={"https://www.youtube.com/embed/zKR5Zrd10Sg"}
          title={
            "Promoción del Bien Común: crear empleo | XXIV Encuentro Anual ACDE"
          }
          id={"zKR5Zrd10Sg"}
        />
        <VideoGalery
          src={"https://www.youtube.com/embed/qCjRNcsMxsY"}
          title={
            "Promoción del Bien Común: invertir | XXIV Encuentro Anual ACDE"
          }
          id={"qCjRNcsMxsY"}
        />
        <VideoGalery
          src={"https://www.youtube.com/embed/I8EQh0O4HdA"}
          title={
            "Un testimonio que nos interpela. Immaculée Ilibagiza | XXIV Encuentro Anual ACDE"
          }
          id={"I8EQh0O4HdA"}
        />
        <VideoGalery
          src={"https://www.youtube.com/embed/x3I3gLTNVpM"}
          title={"Construcción de confianza social | XXIV Encuentro Anual ACDE"}
          id={"x3I3gLTNVpM"}
        />
        <VideoGalery
          src={"https://www.youtube.com/embed/16QI-3WKP0U"}
          title={
            "Palabras de cierre. Gonzalo Tanoira, Presidente de ACDE | XXIV Encuentro Anual ACDE"
          }
          id={"16QI-3WKP0U"}
        />
        <VideoGalery
          src={"https://www.youtube.com/embed/xULOYwJGaK4"}
          title={"Video institucional XXIV Encuentro Anual ACDE"}
          id={"xULOYwJGaK4"}
        />
      </div>
    </div>
  );
};

export default Videos;
