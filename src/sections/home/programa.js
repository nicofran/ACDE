import logo from "../../assets/icons/logo-programa.png";
import logo2 from "../../assets/icons/logo-acde.png";
const Programa = () => {
  return (
    <div className="programa">
      <div className="container">
        <div className="programa__span">
          <img src={logo2} className="logo" alt="logo2"></img>
          <img src={logo} alt="logo"></img>
          <h1 className="span__title">programa</h1>
        </div>
        <div className="programa__programa">
          <h2 className="programa__title">Hacia un capitalismo más humano</h2>
          <p className="programa__sub">
            Generando un ciclo virtuoso para promover el bien común y construir
            confianza social
          </p>
          {/* <br></br> */}
          <p className="programa__content">
            El XXIV Encuentro Anual ACDE parte del interrogante general respecto
            de cómo el capitalismo debe evolucionar para lograr generar
            prosperidad y desarrollo para todos y mitigar los daños económicos y
            sociales que se han acentuado por la pandemia. Observamos con
            preocupación un incremento de desigualdad y de la pobreza. Todos los
            actores estamos llamados a hacer un esfuerzo común para responder
            ante este desafío. Un esfuerzo común que nos permita construir un
            presente y un futuro con oportunidades de desarrollo para todos los
            miembros de nuestra sociedad.
            <br></br>
            <br></br>
            En línea con la Doctrina Social de la Iglesia Católica, comprendemos
            que "la capacidad propulsora de una sociedad orientada hacia el bien
            común y proyectada hacia el futuro se mide, sobre todo, a partir de
            las perspectivas de trabajo que puede ofrecer". Cómo generar
            inversión y trabajo es el eje que guía nuestro pensamiento. Nuestro
            Norte: + Trabajo + Inclusión.
            <br></br>
            <br></br>
            ¿Qué debemos hacer mejor o diferente hacia adelante? En el marco del
            centenario del nacimiento del fundador de ACDE, Enrique Shaw,
            convocamos a poner los valores en acción en el día a día, traducidos
            en virtudes cotidianas. El ciclo virtuoso que planteamos busca
            enlazar simultáneamente la promoción del Bien Común y la
            construcción de Confianza Social. Este ciclo virtuoso nos permitirá
            desarrollar instituciones más robustas y un entramado social más
            justo.
            <br></br>
            <br></br>
            {/*           El evento se desarrollará de forma virtual durante las mañanas del
          miércoles 30 de junio y jueves 1 de julio de 2021. */}
          </p>
          {/*         <br></br>
        <br></br> */}
          <div className="programa__desarrollo">
            <span className="programa__desarrollo__del__encuentro">
              Desarrollo del Encuentro
            </span>
            <br></br>
            <br></br>
            <span className="programa__fecha">MIÉRCOLES 30 JUNIO</span>
            <div className="programa__evento">
              <p>
                9.00 h. | <span>APERTURA Y BIENVENIDA</span>
                <span className="programa__oradores">
                  <ul>
                    <li>
                      <span className="programa__evento">•</span>{" "}
                      <span className="programa__orador__nombre">
                        Ignacio Gorupicz.
                      </span>{" "}
                      Presidente del XXIV Encuentro Anual ACDE.
                    </li>
                  </ul>
                </span>
              </p>
              <br></br>
              <p>
                9.15 h. |{" "}
                <span>LA MIRADA CRISTIANA DE LA ECONOMÍA Y LA SOCIEDAD</span>
                <br></br>
                <span className="pregunta">
                  ¿Qué es necesario revisar del capitalismo? Cómo alcanzar el
                  bien común con más equidad e instituciones políticas y
                  económicas inclusivas.
                </span>
                <span className="programa__oradores">
                  <ul>
                    <li>
                      <span className="programa__evento">•</span>{" "}
                      <span className="programa__orador__nombre">
                        Roberto Vassolo.
                      </span>{" "}
                      Economista del IAE Business School - Universidad Austral.
                    </li>
                    <li>
                      <span className="programa__evento">•</span>{" "}
                      <span className="programa__orador__nombre">
                        P. Augusto Zampini.
                      </span>{" "}
                      Secretario Adjunto del Dicasterio para el Desarrollo
                      Humano Integral del Vaticano.
                    </li>
                    <li>
                      <span className="programa__evento">•</span>{" "}
                      <span className="programa__orador__nombre">
                        Coordina: Marina Dal Poggetto.
                      </span>{" "}
                      Directora ejecutiva de Eco Go.
                    </li>
                  </ul>
                </span>
              </p>
              <br></br>
              <p>
                10.00 h. |{" "}
                <span>
                  CONSTRUCCIÓN DE CONFIANZA ENTRE SINDICALISTAS Y EMPRESARIOS
                </span>
                <br></br>
                <span className="pregunta">
                  Escuchar al otro como base de la generación de confianza y el
                  logro de acuerdos.
                </span>
                <span className="programa__oradores">
                  <ul>
                    <li>
                      <span className="programa__evento">•</span>{" "}
                      <span className="programa__orador__nombre">
                        Cristian Jerónimo.
                      </span>{" "}
                      Secretario General de la Juventud Sindical Nacional
                    </li>
                    <li>
                      <span className="programa__evento">•</span>{" "}
                      <span className="programa__orador__nombre">
                        Marysol Rodríguez.
                      </span>{" "}
                      Secretaria de UIA Joven.
                    </li>
                    <li>
                      <span className="programa__evento">•</span>{" "}
                      <span className="programa__orador__nombre">
                        Coordina: María Candelaria Fernández.
                      </span>{" "}
                      Coordinadora de Generación 2040
                    </li>
                  </ul>
                </span>
              </p>
              <br></br>
              <p>
                10.50 h. |{" "}
                <span>EL VALOR Y LOS DESAFÍOS DE LA ECONOMÍA SOCIAL</span>
                <br></br>
                <span className="pregunta">
                  Un camino para mitigar el flagelo de la pobreza y la
                  indigencia.
                </span>
                <span className="programa__oradores">
                  <ul>
                    <li>
                      <span className="programa__evento">•</span>{" "}
                      <span className="programa__orador__nombre">
                        Emilio Pérsico.
                      </span>{" "}
                      Secretario de Economía Social y líder de Movimiento Evita.
                    </li>
                    <li>
                      <span className="programa__evento">•</span>{" "}
                      <span className="programa__orador__nombre">
                        María Migliore.
                      </span>{" "}
                      Ministra de Desarrollo Humano y Hábitat del GCBA.
                    </li>
                    <li>
                      <span className="programa__evento">•</span>{" "}
                      <span className="programa__orador__nombre">
                        Coordina: Carolina Biquard.
                      </span>{" "}
                      Directora Ejecutiva de Fundación Compromiso.
                    </li>
                  </ul>
                </span>
              </p>
              <br></br>
              <p>
                11.40 h. |{" "}
                <span>EL PODER DE LAS PYMES PARA GENERAR EMPLEO</span>
                <br></br>
                <span className="pregunta">
                  Su efecto multiplicador en la economía y el bienestar de la
                  sociedad.
                </span>
                <span className="programa__oradores">
                  <ul>
                    <li>
                      <span className="programa__evento">•</span>{" "}
                      <span className="programa__orador__nombre">
                        Gerónimo Frigerio.
                      </span>{" "}
                      Director de gf Consulting Group
                    </li>
                    <li>
                      <span className="programa__evento">•</span>{" "}
                      <span className="programa__orador__nombre">
                        Carolina Castro.
                      </span>{" "}
                      Directora de la PyME autopartista Industrias Guidi.
                    </li>
                    <li>
                      <span className="programa__evento">•</span>{" "}
                      <span className="programa__orador__nombre">
                        Coordina: Juan Manuel Vaquer.
                      </span>{" "}
                      Abogado y empresario.
                    </li>
                  </ul>
                </span>
              </p>
              <p>
                <br></br>
                12.30 h. | <span>PALABRAS DE CIERRE</span>
              </p>
              <br></br>
              <br></br>
            </div>
            <span className="programa__fecha">jueves 1 de julio </span>
            <div className="programa__evento">
              <p>
                9.00 h. | <span>BIENVENIDA Y ORACIÓN</span>
              </p>
              <br></br>
              <p>
                9.15 h. | <span>PROMOCIÓN DEL BIEN COMÚN: CREAR EMPLEO</span>
                <br></br>
                <span className="pregunta">
                  Las bondades de las cadenas de valor y el impacto en sus
                  comunidades. Factores que conducen a la creación de empleo.
                </span>
                <span className="programa__oradores">
                  <ul>
                    <li>
                      <span className="programa__evento">•</span>{" "}
                      <span className="programa__orador__nombre">
                        Juan Martín de la Serna.
                      </span>{" "}
                      Presidente Mercado Libre Argentina.
                    </li>
                    <li>
                      <span className="programa__evento">•</span>{" "}
                      <span className="programa__orador__nombre">
                        Nicolás Braun.
                      </span>{" "}
                      Gerente General de La Anónima.
                    </li>
                    <li>
                      <span className="programa__evento">•</span>{" "}
                      <span className="programa__orador__nombre">
                        Rosana Negrini.
                      </span>{" "}
                      Presidente de Agrometal.
                    </li>
                    <li>
                      <span className="programa__evento">•</span>{" "}
                      <span className="programa__orador__nombre">
                        Coordina: Martín Borchardt.
                      </span>{" "}
                      Fundador de Henry.
                    </li>
                  </ul>
                </span>
              </p>
              <br></br>
              <p>
                10.00 h. | <span>PROMOCIÓN DEL BIEN COMÚN: INVERTIR</span>
                <br></br>
                <span className="pregunta">
                  La generación de riqueza es una contribución a la sociedad.
                  Factores que conducen a la inversión.
                </span>
                <span className="programa__oradores">
                  <ul>
                    <li>
                      <span className="programa__evento">•</span>{" "}
                      <span className="programa__orador__nombre">
                        Juan Bosch.
                      </span>{" "}
                      Director de Negocios Internacionales de SAESA.
                    </li>
                    <li>
                      <span className="programa__evento">•</span>{" "}
                      <span className="programa__orador__nombre">
                        Verónica Marcelo.
                      </span>{" "}
                      Gerente General de Natura.
                    </li>
                    <li>
                      <span className="programa__evento">•</span>{" "}
                      <span className="programa__orador__nombre">
                        Coordina: Federico Poletto.
                      </span>{" "}
                      CEO de MDZ.
                    </li>
                  </ul>
                </span>
              </p>
              <br></br>
              <p>
                10.45 h. | <span>UN TESTIMONIO QUE NOS INTERPELA</span>
                <br></br>
                <span className="pregunta">
                  La reconciliación como paso necesario para lograr la unidad.
                </span>
                <span className="programa__oradores">
                  <ul>
                    <li>
                      <span className="programa__evento">•</span>{" "}
                      <span className="programa__orador__nombre">
                        Immaculée Ilibagiza.
                      </span>{" "}
                      Conferencista y escritora ruandesa.
                    </li>
                  </ul>
                </span>
              </p>
              <br></br>
              <p>
                11.30 h. | <span>CONSTRUCCIÓN DE CONFIANZA SOCIAL</span>
                <br></br>
                <span className="pregunta">
                  La importancia de la verdad y la justicia. La confianza como
                  el valor que ordena y enmarca todos los demás valores.
                </span>
                <span className="programa__oradores">
                  <ul>
                    <li>
                      <span className="programa__evento">•</span>{" "}
                      <span className="programa__orador__nombre">
                        Delia Ferreira Rubio.
                      </span>{" "}
                      Presidente de Transparencia Internacional
                    </li>
                    <li>
                      <span className="programa__evento">•</span>{" "}
                      <span className="programa__orador__nombre">
                        Rab. Alejandro Avruj.
                      </span>{" "}
                      Presidente de la Asamblea Rabínica Latinoamericana.
                    </li>
                    <li>
                      <span className="programa__evento">•</span>{" "}
                      <span className="programa__orador__nombre">
                        Joan Melé.
                      </span>{" "}
                      Presidente de la Fundación Dinero y Conciencia.
                    </li>
                    <li>
                      <span className="programa__evento">•</span>{" "}
                      <span className="programa__orador__nombre">
                        Coordina: Julia Pomares.
                      </span>{" "}
                      Jefa de asesores del GCBA.
                    </li>
                  </ul>
                </span>
              </p>
              <p>
                <br></br>
                12.00 h. | <span>PALABRAS DE CIERRE</span>
                <br></br>
                <span className="programa__oradores">
                  <ul>
                    <li>
                      <span className="programa__evento">•</span>{" "}
                      <span className="programa__orador__nombre">
                        Gonzalo Tanoira.
                      </span>{" "}
                      Presidente de ACDE.
                    </li>
                  </ul>
                </span>
              </p>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programa;
