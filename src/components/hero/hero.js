//IMAGES & BANNER
import banner from "../../assets/images/banner.mp4";
import thumbnnail from "../../assets/images/banner-thumneil.png";

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
            poster={thumbnnail}
            loop
            autoplay
            className="hero__video"
          ></video>
        </div>
      </div>
    </div>
  );
};

export default Hero;
