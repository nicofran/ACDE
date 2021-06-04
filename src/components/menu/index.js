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
            30 de Junio y 1<br></br>
            de Julio<br></br>
            <span>
              Encuentro Virtual<br></br>Sin Cargo
            </span>
          </p>
          <Acde className="img-acde" />
          <Bicentenario className="img-bicentenario" />
        </div>
        {/* BANNERS END */}
        <div>
          <ul className="banner__list">
            <li>
              <a href="#carta">Carta al Presidente</a>
            </li>
            <li>
              <a href="#programa">Programa</a>
            </li>
            <li>
              <a href="#expositores">Expositores</a>
            </li>
            <li>
              <a href="#comision">Comisión Organizadora</a>
            </li>
            <li>
              <a href="#auspiciantes">Auspicientes</a>
            </li>
            <li>
              <a href="#camino">Camino al encuentro</a>
            </li>
            <li>
              <a href="#encuentros">Encuentros Anteriores</a>
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
// return (
//   <div className="menu">
//     <div className="menu__banners">
//       <img src={Banner} alt="ACDE" className="img__acde" />
//       <p className="menu__fecha">
//         30 de Junio y 1<br></br>
//         de Julio<br></br>
//         <span>
//           Encuentro Virtual<br></br>Sin Cargo
//         </span>
//       </p>
//       {/* MENU TOGGLE START */}
//       <button
//         className={
//           activo ? "menu__toggler menu__toggler--activo" : "menu__toggler"
//         }
//         onClick={toggleMenu}
//       >
//         <span></span>
//         <span></span>
//         <span></span>
//       </button>
//       {/* MENU TOGGLE END */}
//       <img src={bicentenario} alt="ACDE" className="img"></img>
//       <Acde className="img" />
//     </div>
//     <div
//       className={
//         activo ? "menu__content menu__content--activo" : "menu__content"
//       }
//     >
//       <ul className="menu__list">
//         <li>
//           <a href="#carta">Carta al Presidente</a>
//         </li>
//         <li>
//           <a href="#hero">Programa</a>
//         </li>
//         <li>
//           <a href="#Expositores">Expositores</a>
//         </li>
//         <li>
//           <a href="#Comision">Comisión Organizadora</a>
//         </li>
//         <li>
//           <a href="#Auspiciantes">Auspicientes</a>
//         </li>
//         <li>
//           <a href="#Camino">Camino al encuentro</a>
//         </li>
//         <li>
//           <a href="#Encuentros">Encuentros Anteriores</a>
//         </li>
//       </ul>
//     </div>
//   </div>
// );

export default Menu;
