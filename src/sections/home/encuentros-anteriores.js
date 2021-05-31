//icons
import logo from "../../assets/icons/icon-carta1.png";
import logo_acde from "../../assets/icons/logo-acde.png";
const Encuentros = () => {
  return (
    <div className="encuentros container">
      <div className="encuentros__banner">
        <img src={logo_acde} alt="Logo ACDE"></img>
        <div className="banner__content">
          <img src={logo} alt="encuentros anteriores"></img>
          <h3 className="banner__title">encuentros anteriores</h3>
        </div>
      </div>
    </div>
  );
};

export default Encuentros;
