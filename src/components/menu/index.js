//Images as Components

import { ReactComponent as Acde } from "../../assets/images/logo-acde1.svg";
import Banner from "../../assets/images/banner-thumneil.png";
import { ReactComponent as Bicentenario } from "../../assets/images/bicentenario-menu.svg";

import { useState } from "react";

const Menu = () => {
  const [activo, setActivo] = useState();

  const toggleMenu = () => {
    setActivo(!activo);
  };

  return (
    <div className="menu">
      <div className="container">
        {/* BANNERS  START*/}
        <div className="menu__banners">
          <div>
            <img src={Banner} alt="ACDE" className="img-encuentro" />
          </div>
          <p className="menu__fecha">
            30 de junio<br></br>y 1 de julio<br></br>
            <span>
              Encuentro Virtual<br></br>Sin Cargo
            </span>
          </p>
          <Bicentenario className="img-bicentenario" />
          <Acde className="img-acde" />
        </div>
        {/* BANNERS END */}
        <div>
          <ul className="banner__list">
            <li>
              <a href="#carta">Carta del Presidente</a>
            </li>
            <li>
              <a href="#programa">Programa</a>
            </li>
            <li>
              <a href="#expositores">Expositores</a>
            </li>
            <li>
              <a href="#comision">Comisión organizadora</a>
            </li>
            <li>
              <a href="#auspiciantes">Auspiciantes</a>
            </li>
            <li>
              <a href="#camino">Camino al encuentro</a>
            </li>
            <li>
              <a href="#encuentros">Encuentros anteriores</a>
            </li>
          </ul>
        </div>

        {/* toggle start */}
        <button
          className={
            activo ? "menu__toggler menu__toggler--activo" : "menu__toggler"
          }
          type="button"
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        {/* toggle end */}

        <div
          className={
            activo ? "menu__content menu__content--activo" : "menu__content "
          }
        >
          <ul className="menu__list">
            <li>
              <a href="#carta">Carta al Presidente</a>
            </li>
            <li>
              <a href="#hero">Programa</a>
            </li>
            <li>
              <a href="#Expositores">Expositores</a>
            </li>
            <li>
              <a href="#Comision">Comisión Organizadora</a>
            </li>
            <li>
              <a href="#Auspiciantes">Auspicientes</a>
            </li>
            <li>
              <a href="#Camino">Camino al encuentro</a>
            </li>
            <li>
              <a href="#Encuentros">Encuentros Anteriores</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
