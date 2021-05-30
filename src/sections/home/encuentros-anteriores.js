//icons
import logo from "../../assets/icons/icon-carta2.png";
import logo_acde from "../../assets/icons/logo-acde.png";
const Encuentros = () => {
  return (
    <div className="encuentros container">
      <div className="encuentros__banner">
        <h2>encuentros anteriores</h2>
        <img src={logo} alt="encuentros anteriores"></img>
        <img src={logo_acde} alt="Logo ACDE"></img>
      </div>
    </div>
  );
};

export default Encuentros;
