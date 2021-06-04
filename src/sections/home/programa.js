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
          El contexto global ha experimentado durante el último año la
          aceleración de las tendencias políticas, económicas, sociales de
          manera exponencial. La pandemia agudizó la crisis macro-económica de
          la mayoría de las naciones, con fuerte impacto en el desempleo y la
          pobreza. Frente a este panorama mundial surgen diferentes hipótesis
          sobre cómo el modelo capitalista debería enfrentar la crisis para
          evitar daños económicos y sociales más profundos.
          <br></br>
          <br></br>
          En el contexto de Argentina, el desafío es aún mayor. Al problema
          macroeconómico del estancamiento, falta de crecimiento y recesión, se
          suman el aumento de la desigualdad y la pobreza como factores que
          profundizaron la crisis. El gran interrogante es cómo combinar un
          esfuerzo común entre Estado, sector privado y sociedad para superar la
          crisis permanente y apostar a un futuro de crecimiento inclusivo.
          <br></br>
          <br></br>
          El <span>XXIV Encuentro Anual ACDE </span>propone reflexionar sobre la
          necesidad de capitalizar el potencial del sector privado de generar
          empleo productivo y de calidad, a fin de construir una base económica
          más justa, inclusiva y sostenible en el país, que aporte valor a toda
          la sociedad.
          <br></br>
          <br></br>
          En el marco del centenario del nacimiento del fundador de ACDE,
          Enrique Shaw, queremos interpelar a los líderes de distintos ámbitos
          de nuestra sociedad, a través del concepto de la “militancia en
          valores”. Nos impulsa recuperar el propósito de Enrique Shaw como
          empresario comprometido en encarnar aquellos valores en acción y
          transformarlos en virtudes cotidianas; virtudes que representen
          ejemplaridad, coherencia de palabras y hechos, y acciones
          empresariales concretas que conduzcan a promover el Bien Común e
          impulsar la Confianza Social.
          <br></br>
          <br></br>
          El evento se desarrollará de forma virtual durante las mañanas del
          miércoles 30 de junio y jueves 1 de julio de 2021.
        </p>
        <div className="programa__desarrollo">
          <h2>Desarrollo del encuentro</h2>
          <span className="programa__fecha">miércoles 30 de junio</span>
          <div className="programa__evento">
            <p>
              9.00 h. | <span>apertura benvenida</span>
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
