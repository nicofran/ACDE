import logo from "../../assets/icons/logo-programa.png";
import logo2 from "../../assets/icons/logo-acde.png";
const Programa = () => {
  return (
    <div className="programa container ">
      <div className="programa__rectangulo">
        <div className="programa__span" id="programa">
          <img src={logo2} className="logo" alt="logo2"></img>
          <img src={logo} alt="logo"></img>
        </div>
        <h1 className="rectangulo__title">programa</h1>
      </div>
      <div className="programa__programa">
        <h2 className="programa__title">Hacia un capitalismo más humano</h2>
        <p className="programa__sub">
          Generando un ciclo virtuoso para promover el bien<br></br>
          común y construir confianza social
        </p>
        <br></br>
        <p className="programa__content">
          El XXIV Encuentro Anual ACDE parte del interrogante general respecto
          de cómo el capitalismo debe evolucionar para lograr generar
          prosperidad y desarrollo para todos y mitigar los daños económicos y
          sociales que se han acentuado por la pandemia. Observamos con
          preocupación un incremento de la desigualdad y de la pobreza. Todos
          los actores estamos llamados a hacer un esfuerzo común para responder
          ante este desafío. Un esfuerzo común que nos permita construir un
          presente y un futuro con oportunidades de desarrollo para todos los
          miembros de nuestra sociedad.
          <br></br>
          <br></br>
          En línea con la Doctrina Social de la Iglesia Católica, comprendemos
          que “la capacidad propulsora de una sociedad orientada hacia el bien
          común y proyectada hacia el futuro se mide, sobre todo, a partir de
          las perspectivas de trabajo que puede ofrecer”. Cómo generar inversión
          y trabajo es el eje que guía nuestro pensamiento. Nuestro Norte: +
          Trabajo + Inclusión.
          <br></br>
          <br></br>
          ¿Qué debemos hacer mejor o diferente hacia adelante? En el marco del
          centenario del nacimiento del fundador de ACDE, Enrique Shaw,
          convocamos a poner los valores en acción en el día a día, traducidos
          en virtudes cotidianas. El ciclo virtuoso que planteamos busca enlazar
          simultáneamente la promoción del Bien Común y la construcción de
          Confianza Social. Este ciclo virtuoso nos permitirá desarrollar
          instituciones más robustas y un entramado social más justo.
        </p>
        <div className="programa__desarrollo">
          <h2>Desarrollo del encuentro</h2>
          <span className="programa__fecha">miércoles 30 de junio</span>
          <div className="programa__evento">
            <p>
              9.00 h. | <span>apertura benvenida</span>
            </p>
            <p>
              {" "}
              ○ Ignacio Gorupicz - Presidente del XXIV Encuentro Anual ACDE.
            </p>

            <p>
              9.15 h. |{" "}
              <span>la mirada cristiana de la economía y la sociedad</span>
              <br></br>
              <span className="pregunta">
                ¿Qué es necesario revisar del capitalismo? Cómo alcanzar el bien
                común con más equidad e instituciones políticas y económicas
                inclusivas.
              </span>
            </p>

            <p>
              10.00 h. |{" "}
              <span>
                construcción de confianza entre sindicalistas y empresarios
              </span>
              <br></br>
              <span className="pregunta">
                Escuchar al otro como base de generación de confianza y el logro
                de acuerdos.
              </span>
            </p>

            <p>
              10.50 h. |{" "}
              <span>el valor y los desafíos de la economía social</span>
              <br></br>
              <span className="pregunta">
                Un camino para mitigar el flagelo de la pobreza y la indigencia
              </span>
            </p>
            <p>
              11.40 h | <span>el poder de las pymes para generar empleos</span>
              <br></br>
              <span className="pregunta">
                Su efecto multiplicador en la economía y el bienestar de la
                sociedad
              </span>
            </p>
            <p>
              12.30 h | <span>palabra de cierre</span>
            </p>
            <br></br>
            <br></br>
          </div>
          <span className="programa__fecha">jueves 1 de julio </span>
          <div className="programa__evento">
            <p>
              9.00 h. | <span> bienvenida y oración </span>
            </p>
            <p>
              9.15 h. | <span>promoción del bien común: crear empleo</span>
              <br></br>
              <span className="pregunta">
                Las bondades de las cadenas de valor y el impacto en sus
                comunidades. Factores que conducen a la creación de empleo.
              </span>
            </p>
            <p>
              10.00 h. | <span>promoción del bien común: invertir</span>
              <br></br>
              <span className="pregunta">
                La generación de riqueza es una contribución a la sociedad.
                Factores que conducen a la inversión.
              </span>
            </p>{" "}
            <p>
              10.45 h. | <span>un testimonio que nos interpela</span>
              <br></br>
              <span className="pregunta">
                La reconciliación como paso necesario para lograr la unidad.
              </span>
            </p>
            <p>
              11.30h. | <span>construcción de confianza social</span>
              <br></br>
              <span className="pregunta">
                La importancia de la verdad y la justicia. La confianza como el
                valor que ordena y enmarca todos los demás valores.
              </span>
            </p>
            <p>
              12.00 h. | <span>palabra de cierre</span>
              <br></br>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programa;
