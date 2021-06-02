//IMAGES & BANNER
import banner from "../../assets/images/banner.mp4";
import thumbnnail from "../../assets/images/banner-thumneil.png";

//COMPONENTS
import Nav from "../../components/menu/index";
const Hero = () => {
  return (
    <div className="container">
      <Nav />
      <div className="hero">
        <video
          src={banner}
          width="70%"
          height="600"
          poster={thumbnnail}
          loop
          autoplay
        ></video>
      </div>
    </div>
  );
};

export default Hero;
