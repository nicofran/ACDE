//IMAGES & BANNER
import banner from "../../assets/images/banner-1.mp4";
import thumbnnail from "../../assets/images/banner-thumneil.png";
import InscribiteFlag from "../../components/inscribite-flag/inscribite-flag";

//COMPONENTS
import Nav from "../../components/menu/index";
const Hero = () => {
  return (
    <div>
      <Nav />
      <InscribiteFlag />
      <div className="hero">
        <div className="container">
          <video
            src={banner}
            poster={thumbnnail}
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
