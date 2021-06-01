import HomeIcon from '@material-ui/icons/Home';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import DesktopMacIcon from '@material-ui/icons/DesktopMac';
/* import {facebook, instagram, twitter, youtube, linkedin} from '../../assets/icons/footer-icons/index.js'
import { TwitterTimelineEmbed } from 'react-twitter-embed'; */




const Footer = () => {
  return (
  <div className="footer">
            <div className = "content-footerMayor">
        <div className='content-footer'>
            <footer>
              <img src="https://acde.org.ar/wp-content/uploads/redes/logoacdecalado.png" alt="no image" width="120px" height="90px"/>
            </footer>
            <footer>
              <div className="footerHashtags">
                <p> #VamosAlEncuentro </p>
                <p> #EncuentroAnualACDE </p>
              </div>
            </footer>
            <footer>
            <a class="twitter-timeline" data-lang="es" data-width="250" data-height="200" data-theme="dark" href="https://twitter.com/ACDEargentina?ref_src=twsrc%5Etfw">Tweets by ACDEargentina</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
            </footer>
            <footer className = "footerContact">
              <h4> Contacto </h4>
              <label><HomeIcon/> Paraguay 580 2º piso, C.A.B.A. </label><br/>
              <label><EmailIcon/> eventos@acde.org.ar </label><br/>
              <label><PhoneIcon/> (5411)5254-0030 </label><br/>
              <label><DesktopMacIcon/> www.acde.org.ar </label><br/>
              <a href = "https://es-la.facebook.com/ACDEargentina/" target="_blank"><img className='social' src="https://icons.iconarchive.com/icons/danleech/simple/512/facebook-icon.png"/></a>
              <a href = "https://twitter.com/acdeargentina" target="_blank"><img className='social' src="https://icons.iconarchive.com/icons/limav/flat-gradient-social/512/Twitter-icon.png"/></a>
              <a href = "https://www.youtube.com/c/ACDEArgentina" target="_blank"><img className='social' src="https://icons.iconarchive.com/icons/danleech/simple/512/youtube-icon.png"/></a>
              <a href = "https://www.linkedin.com/company/asociaci-n-cristiana-de-dirigentes-de-empresa/" target="_blank"><img className='social' src="https://icons.iconarchive.com/icons/danleech/simple/512/linkedin-icon.png"/></a>
              <a href = "https://www.instagram.com/acdeargentina/" target="_blank"><img className='social'src="https://icons.iconarchive.com/icons/uiconstock/socialmedia/512/Instagram-icon.png"/></a>
            </footer>
        </div>
    </div>
  </div>
  );
};

export default Footer;
