import banner from "../../assets/images/banner.mp4";
import thumbnnail from "../../assets/images/banner-thumneil.png";

const Hero = () => {
  return (
    <div className=" hero container">
      <video
        src={banner}
        width="70%"
        height="600"
        poster={thumbnnail}
        loop
        autoPlay
      ></video>
    </div>
  );
};

export default Hero;
