//Images as Components

import { ReactComponent as Acde } from "../../assets/images/logo-acde1.svg";
import bicentenario from "../../assets/images/bicentenario-menu1.png";
import Banner from "../../assets/images/banner-thumneil.png";

import { useState } from "react";

const Menu = () => {
  return (
    <div className="menu">
      <div className="menu__banners">
        <img src={Banner} alt="ACDE" width="431" height="120" />
        <p className="menu__fecha">
          30 de Junio y 1<br></br>
          de Julio<br></br>
          <span>
            Encuentro Virtual<br></br>Sin Cargo
          </span>
        </p>
        <img src={bicentenario} alt="ACDE"></img>
        <Acde />
      </div>
      <div>
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
  );
};

export default Menu;
