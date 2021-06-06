import HomeIcon from "@material-ui/icons/Home";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import DesktopMacIcon from "@material-ui/icons/DesktopMac";

//social media
import facebook from "../../assets/icons/facebook.png";
import twitter from "../../assets/icons/twitter.png";
import youtube from "../../assets/icons/youtube.png";
import linkedin from "../../assets/icons/linkedin2.png";
import instagram from "../../assets/icons/instagram.png";
//Logo ACDE
import acde from "../../assets/icons/acde-footer.png";
//twitter embed
import { TwitterTimelineEmbed } from "react-twitter-embed";

const Footer = () => {
  return (
    <div className="footer">
      <img src={acde} alt="ACDE" className="acde" />
      <p className="footer_hashtags">
        #VamosAlEncuentro<br></br>
        <br></br>
        #EncuentroAnualACDE
      </p>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="acdeargentina"
        options={{ height: 30 }}
      />
      <div className="footer__contact">
        <p className="contacto-p">Contacto</p>
        <p>
          <HomeIcon />
          Paraguay 580 2 piso, CABA
        </p>
        <p>
          <EmailIcon />
          evento@acde.com.ar
        </p>
        <p>
          <PhoneIcon />
          (5411)5254-0030
        </p>
        <p>
          <DesktopMacIcon />
          www.acde.org.ar
        </p>
        <div className="footer__media">
          <a href="https://www.facebook.com/ACDEargentina/">
            <img src={facebook} alt="Facebook" width="20" height="20" />
          </a>
          <a href="https://twitter.com/acdeargentina?lang=en">
            <img src={twitter} alt="Twitter" width="20" height="20" />
          </a>
          <a href="https://www.youtube.com/channel/UCno2l6RbSdyBatIdrtQ84RA">
            <img src={youtube} alt="YouTube" width="22" height="22" />
          </a>
          <a href="https://www.linkedin.com/company/asociaci-n-cristiana-de-dirigentes-de-empresa/?originalSubdomain=ar">
            <img src={linkedin} alt="Linkedin" width="20" height="20" />
          </a>
          <a href="https://www.instagram.com/acdeargentina/?hl=en">
            <img src={instagram} alt="Instagram" width="20" height="20" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
