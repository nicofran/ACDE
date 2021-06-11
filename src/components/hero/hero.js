//IMAGES & BANNER
import banner from "../../assets/images/banner-1.mp4";
import thumbnnail from "../../assets/images/banner-thumneil.png";
// import InscribiteFlag from "../../components/inscribite-flag/inscribite-flag";

//COMPONENTS
import Nav from "../../components/menu/index";
const Hero = () => {
  return (
    <div>
      <Nav />
      <div className="hero">
        <div className="container">
          <video
            src={banner}
            loop
            muted
            autoPlay
            className="hero__video"
          ></video>
        </div>
      </div>
    </div>
  );
};

export default Hero;
