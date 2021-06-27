import icon from "../../assets/icons/icon-carta1.png";
import logo from "../../assets/icons/logo-acde.png";

//PRESIDENTE DEL ENCUENTRO
import ignacio_gorupicz from "../../assets/images/ignacio_gorupicz2.png";

const Carta = () => {
  return (
    <div className="carta container" id="carta">
      <div className="carta__span">
        <img className="logo" src={logo} alt="ACDE" />
        <img src={icon} alt="ACDE" />
        <h1 className="carta__titulo">carta del presidente</h1>
      </div>
      <div className="carta__text">
        <p>
          <p className="parrafo_inicial">
            <img
              src={ignacio_gorupicz}
              alt="Ignacio Gorupicz"
              className="foto_presidente"
            />
            Los desafíos de Argentina, al igual que los de tantos otros países,
            son múltiples y han sido profusamente analizados. En distintos
            ámbitos de nuestro país, se respira un entendible sentido de
            desesperanza, una suerte de inercia negativa que paraliza. Pero
            tenemos en nuestras manos la posibilidad de romper con esa dinámica
            y construir un nuevo ciclo virtuoso que nos contenga a todos. <br />
            <p />
            Sostener un camino de desarrollo para nuestro país, empieza por
            lograr ver más allá de las etiquetas que ponemos sobre los otros y
            aquellas que los demás nos ponen a nosotros. Tenemos que ser capaces
            de ver más allá de lo que cimenta la desunión, para distinguir la
            parte de verdad que reside en el otro. Nos debemos plantear la
            posible combinación de múltiples verdades que se dicen y repiten en
            forma permanente. La igualdad de oportunidades va de la mano del
            valor del esfuerzo y el mérito y de hecho los aumenta. Hay que
            enseñar a pescar, pero las parábolas nos enseñan que existen
            situaciones en las que también hay que ofrecer el pescado. Debemos
            integrarnos de forma (muy) inteligente al mundo, del mismo modo que
            saber vivir con lo nuestro, potenciando nuestros activos y
            capacidades – que son muchas. En época de pandemia, debemos proteger
            la vida pero también la forma de ganarse la vida.
            <br></br>
            <br></br>
            Durante nuestro XXIV Encuentro Anual buscaremos responder varias
            preguntas para iluminar un camino de encuentro en torno a un
            capitalismo más humano: ¿Qué debemos hacer mejor o distinto? ¿Cómo
            salimos de esta tríada de incertidumbre, desesperanza y
            desconfianza? Los argentinos partimos de una buena base como
            sociedad, pero también tenemos que ajustar nuestra brújula moral.
            Demasiadas veces calificamos como buenas o aceptables cuestiones que
            son nocivas: la viveza criolla que nos trajo la pobreza criolla, el
            seguir más a las personas que a las ideas, la inacción o pasividad
            ante la conducta inmoral, el buscar imponer nuestra libertad y
            nuestros derechos por sobre la libertad y los derechos del otro.
            Queda en cada uno de quienes adherimos a profundos valores
            cristianos y humanos – y en especial a quienes tenemos un rol de
            liderazgo – potenciar una construcción colectiva de un país con
            esperanza y confianza en el futuro. Se trata de una construcción de
            abajo hacia arriba, de cada uno en su metro cuadrado de influencia –
            una tarea literalmente de todos los días y a toda hora. ¿Qué
            esperanza puedo transmitir a los que me rodean? ¿Cómo puedo crear
            mayor certidumbre para los que dependen de mí?
            <br></br>
            <br></br>
            En sus últimos meses de vida, allá por 1962, nuestro fundador
            Enrique Shaw participó de una reunión de la Organización
            Internacional Católica. En ese momento ya estaba postrado en cama
            por su enfermedad, por lo que debió concurrir apoyado en el brazo de
            su hijo José Enrique. Allí, después de escuchar al conferenciante
            describir con trazos muy pesimistas la situación social de
            Argentina, Enrique pidió la palabra y dijo – y hoy nos dice a
            nosotros:
            <br></br>
            <br></br>
            <p className="carta__parrafo__cita">
              “Bienaventurada es nuestra patria porque en ella un cristiano
              puede llegar a ser santo. Bienaventuranza es una palabra que
              quiere decir felicidad, y con ese significado la explicó nuestro
              Señor Jesucristo en el Sermón de la Montaña. Felices somos, pues,
              nosotros, los argentinos que podemos cumplir todas y cada una de
              esas bienaventuranzas. Hay mucho de bueno que hacer en nuestro
              país aun cuando a veces no lo parezca. Está a nuestro alcance y
              posibilidades hacer triunfar el cristianismo, y, por lo tanto,
              debemos hacer lo que a ello contribuya de un modo u otro. Si
              empleamos bien todos los medios existentes a nuestra disposición,
              somos más fuertes de lo que pensamos. ¡Actuemos!”
            </p>
            Vamos al Encuentro!
          </p>
          <div>
            <p className="carta__firma">
              <span></span>IGNACIO GORUPICZ<br></br>
              <span>Presidente</span> <br></br>
              <span>XXIV Encuentro Anual ACDE</span>
            </p>
            <button className="button--bendicion">
              <a
                href="https://encuentroanualacde.com.ar/2021/Bendicion-Apostolica-P-Francisco.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Bendición Apostólica a los asistentes del Encuentro Anual ACDE
              </a>
            </button>
          </div>
          {/* <span className="carta__firma">
            <p className="carta__firma__nombre">IGNACIO GORUPICZ</p>
            <p className="carta__firma__cargo">PRESIDENTE DEL XXIV ENCUENTRO ANUAL DE ACDE</p>
          </span> */}
        </p>
      </div>
    </div>
  );
};

export default Carta;
