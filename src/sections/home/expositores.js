//React
import React from "react";

// ICONS
import logo from "../../assets/icons/logo-expositores.png";
import icon from "../../assets/icons/logo-acde.png";

// SPEAKERS IMAGES
import candelaria_fernandez from "../../assets/images/candelaria_fernández.png";
import carolina_biquard from "../../assets/images/carolina_biquard.png";
import carolina_castro from "../../assets/images/carolina_castro.png";
import delia_ferreira from "../../assets/images/delia_ferreira_rubio.png";
import geronimo_frigerio from "../../assets/images/geronimo_frigerio.png";
import joan_antoni from "../../assets/images/joan_antoni_mele.png";
import juan_martin_dela_serna from "../../assets/images/juan_martin_de_la_serna.png";
import maria_migliore from "../../assets/images/maria_migliore.png";
import marina_dal_poggetto from "../../assets/images/marina_dal_poggetto.png";
import luz_borchardt from "../../assets/images/luz_borchardt.png";
import nicolas_braun from "../../assets/images/nicolas_braun.png";
import rab_alejandro_avruj from "../../assets/images/rab_alejandro_avruj.png";
import roberto_vassolo from "../../assets/images/roberto_vassollo.png";
import rosana_negrini from "../../assets/images/rosana_negrini.png";
import immacule_ilibagiza from "../../assets/images/immacule_ilibagiza.png";
import cristian_geronimo from "../../assets/images/cristian_jeronimo.png";
import veronica_marcelo from "../../assets/images/veronica-marcelo.png";
import emilio_persico from "../../assets/images/emilio_persico.png";
import federico_poletto from "../../assets/images/federico_poletto.png";
import julia_pomares from "../../assets/images/julia_pomares.png";
import marysol_rodriguez from "../../assets/images/marysol_rodriguez.png";
import gonzalo_tanoira from "../../assets/images/gonzalo_tanoira.png";
import padre_augusto_zamipini from "../../assets/images/padre_augusto_zampini.png";
import juan_bosch from "../../assets/images/juan_bosch.png";
import ignacio_gorupicz from "../../assets/images/ignacio_gorupicz2.png";
import juan_vaquer from "../../assets/images/vaquer_juan.png";
import gaston_irigoyen from "../../assets/images/gaston-irigoyen.png";

//Componente de Expositor
import Expositor from "../../components/expositor/";

const Expositores = () => {
  return (
    <div className="expositores">
      <div className="expo__span" id="expositores">
        <img className="logo" src={icon} alt="ACDE" />
        <img src={logo} alt="ACDE" />
        <h1 className="carta__titulo">expositores</h1>
      </div>

      <div className="expo__speakers col-12">
        <Expositor
          nombre="Rab. Alejandro Avruj"
          imagen={rab_alejandro_avruj}
          descripcion={"Presidente de la Asamblea Rabiníca Latinoamericana"}
          biografia={
            <React.Fragment>
              Rab. Alejandro Avruj está casado con Marina Degtiar y tiene cuatro
              hijos: Giselle, Meital, Noa y Shai, y dos nietos, Dan y Elá.
              Actualmente es Rabino de la Comunidad Amijai. Y desde 2017 es el
              Presidente de la Asamblea Rabínica Latinoamericana, representación
              continental de la Rabbinical Assembly del Movimiento Masorti
              Mundial. Desde 2020 es miembro del Vaad Hapoel de la Organización
              Sionista Mundial. Es Rabino egresado del Seminario Rabínico
              Latinoamericano desde el año 2002. Cursó sus estudios rabínicos en
              el Instituto Superior de Estudios Rabínicos “Abraham J. Heschel”,
              en Buenos Aires, y en el Schechter Institute of Jewish Studies de
              Jerusalén. Posee un Master en Literatura Rabínica y Educación
              Judía del Schechter Institute of Jewish Studies, habiendo cursado
              estudios para el MA en Literatura Rabínica en el Jewish
              Theological Seminary of America de Nueva York, en 2001, y para el
              MA en Educación Judía en la Hebrew University de Jerusalén, en
              2002. Fue honrado con la distinción del Premio a los Derechos
              Humanos por la B´nei Brith Argentina, por su trabajo social en
              Villas de Emergencia, en 2014, y con el premio “Hombres de Buenos
              Aires” junto al Padre Pepe por la Fundación Banco Provincia de
              Buenos Aires. Es autor del Sidur “Et Bazman – Un Tiempo dentro del
              Tiempo.” (2012).
            </React.Fragment>
          }
        />
        <Expositor
          nombre="Carolina Biquard"
          imagen={carolina_biquard}
          descripcion={"Cofundadora de la Fundación Compromiso"}
          biografia={
            <React.Fragment>
              Carolina Biquard es cofundadora de Fundación Compromiso (FC), una
              organización que, desde 1994, desarrolla y difunde un nuevo modelo
              para apoyar e invertir con eficacia dentro de organizaciones de la
              sociedad civil, empresas privadas e instituciones públicas de toda
              América Latina. Actualmente trabaja de manera articulada junto con
              los inversores de impacto de la región para generar y fortalecer
              oportunidades en el ámbito cultural, social y ambiental. FC es
              cofundadora de Creatividad, Cultura y Capital, una nueva
              plataforma de investigación que nuclea a la comunidad de
              inversores de impacto en la Economía creativa. Fue Presidente del
              Fondo Nacional de las Artes, de diciembre de 2015 a noviembre de
              2018.{" "}
            </React.Fragment>
          }
        />
        <Expositor
          nombre="Luz Borchardt"
          imagen={luz_borchardt}
          descripcion={"Co-Fundadora de HENRY"}
          biografia={
            <React.Fragment>
              Luz Borchardt es una emprendedora apasionada por el ecosistema
              edtech y fintech en Latinoamérica. Es Co-Founder & VP of Marketing
              de Henry, la primera academia en tecnología de la región que
              invierte en las personas. Permite acceder a educación de calidad
              en tecnología con $0 de costo inicial; los egresados solamente
              empiezan a pagar cuando consiguen un trabajo. Desarrolló su
              carrera en tech, trabajando en compañías como Nubank y
              Despegar.com, y fue parte del founding team de Nubi. <br />
              Es licenciada en Administración de Empresas de la Universidad de
              San Andrés.
            </React.Fragment>
          }
        />
        <Expositor
          nombre="Juan Bosch"
          imagen={juan_bosch}
          descripcion={"Director de Negocios Internacionales de SAESA"}
          className="exp"
          biografia={
            <React.Fragment>
              Juan Bosch es abogado, especialista en derecho administrativo y
              energía. Tiene una vasta experiencia y conocimiento del mercado
              energético. Preside SAESA, una empresa argentina con más de 10
              años de experiencia en el sector, que se especializa en la
              comercialización de gas natural, energía eléctrica y energía
              renovable. Además de ser traders de energía en general, la
              compañía ha puesto un especial interés en las distintas formas de
              generac ión de energía a partir de fuentes renovables,
              considerándolas como desarrollos claves para el crecimiento
              sustentable de nuestro país. En este sentido, Juan Bosch ha
              desarrollado una plataforma comercial y logística que permite
              suministrar productos energéticos valiosos de una manera confiable
              y económicamente atractiva para sus clientes. En 2018, convencido
              de que las energías renovables formarán parte esencial del futuro
              energético sustentable y competitivo, fundó FLEX Energy S.A.,
              mediante la cual ha desarrollado e instalado soluciones de energía
              distribuida fotovoltaica, con y sin almacenamiento, en varias
              provincias. Ha disertado en los principales eventos nacionales e
              internacionales del sector tales como: “The future of energy
              Summit” en Nueva York, “Energías Renovables: un nuevo mercado en
              desarrollo” en Chile y en diversos eventos de Argentina como el
              Congreso de AIREC (Argentina's Leading Renewable Energy Congress),
              y “El Futuro Solar”, entre muchos otros.
            </React.Fragment>
          }
        />
        <Expositor
          nombre="Nicolás Braun"
          imagen={nicolas_braun}
          descripcion={"Gerente General de La Anónima"}
          biografia={
            <React.Fragment>
              Nicolás Braun tiene 48 años, está casado con Florencia, y tiene
              dos hijos: Sofía, de 18 años, y Félix, de 15. Durante los últimos
              16 años dentro de La Anónima se desempeñó como Director de
              Mercaderías, teniendo también a su cargo las dos Plantas
              Frigoríficas, y anteriormente fue Gerente de Planeamiento. Previo
              a ingresar a La Anónima trabajó en la consultora Hermes Management
              Consulting (The Exxel Group), y en la División de Operaciones de
              Supermercados Supersol (Ahold), en España. Es ingeniero egresado
              del Instituto Tecnológico de Buenos Aires (ITBA), y tiene un MBA
              de la Universidad Columbia.
            </React.Fragment>
          }
        />
        <Expositor
          nombre="Carolina Castro"
          imagen={carolina_castro}
          descripcion={"Directora de la PyME autopartista Industrias Guidi"}
          biografia={
            <React.Fragment>
              Carolina Castro es empresaria industrial, tercera generación en la
              conducción de la empresa familiar autopartista Industrias Guidi.
              En la gremial empresaria, es Prosecretaria de la Unión Industrial
              Argentina, Secretaria PyME de AFAC (cámara autopartista) y
              Vicepresidenta 2º de la Unión Industrial de Almirante Brown. Es
              licenciada en Ciencia Política de la Universidad de Buenos Aires
              (UBA). Es autora del libro “Rompimos el cristal”, en el cual
              entrevista a 18 mujeres líderes de la política, las empresas, el
              arte y la ciencia.{" "}
            </React.Fragment>
          }
        />
        <Expositor
          nombre="Marina Dal Poggetto"
          imagen={marina_dal_poggetto}
          descripcion={"Directora Ejecutiva de la consultora Eco Go"}
          biografia={
            <React.Fragment>
              Marina Dal Poggetto es Directora ejecutiva de Eco Go Consultores.
              Fue Subgerente de Análisis Macroeconómico del Banco Central de la
              República Argentina y Jefa de Asesores de la Secretaría de
              Política Económica del Ministerio de Economía. También desempeñó
              tareas en el Instituto Nacional de Estadística y Censos (INDEC).
              Fue profesora de Cuentas Nacionales, economía y finanzas en la
              Universidad de Buenos Aires (UBA), la Universidad Torcuato Di
              Tella (UTDT) y la Universidad de Ciencias Empresariales y Sociales
              (UCES); y Consultora del Banco BID, de la Comunidad Europea y
              Unicef. Desde 2006 se dedica a la consultoría
              económico-financiera, co-dirigió el Estudio Bein y asociados hasta
              2017, cuando se transformó en Eco Go Consultores. Es economista de
              la UBA y Magíster en Políticas Públicas de UTDT. Realiza
              contribuciones periódicas a diferentes medios periodísticos.
            </React.Fragment>
          }
        />
        <Expositor
          nombre="Juan Martín de la Serna"
          imagen={juan_martin_dela_serna}
          descripcion={"Presidente de Mercado Libre Argentina"}
          biografia={
            <React.Fragment>
              Juan Martín de la Serna se incorporó hace más de 20 años a Mercado
              Libre, como parte del grupo fundador. Es el actual Presidente de
              la operación de Mercado Libre Argentina, cargo que ya había
              ocupado de 2004 a 2012. Previamente se había desempeñado como
              Vicepresidente de Mercado Envíos. A lo largo de su carrera se
              destacó en distintas actividades dentro de la compañía, tales como
              Desarrollo de Negocios y Jefe de Categorías. Entre 2007 y 2012
              supervisó las operaciones en 7 países de Latinoamérica. Durante
              más de 10 años también trabajó en mercados financieros. Es
              licenciado en Economía por la Universidad de Buenos Aires (UBA) y
              fue presidente de la Cámara Argentina de Comercio Electrónico
              (CACE), en 2009.
            </React.Fragment>
          }
        />
        <Expositor
          nombre="María Candelaria Fernandez"
          imagen={candelaria_fernandez}
          descripcion={"Coordinadora de Generación 2040"}
          biografia={
            <React.Fragment>
              Candelaria Fernández es politóloga especialista en asuntos
              públicos y gubernamentales, con veinte años de experiencia, con
              especial foco en desarrollo institucional y posicionamiento
              estratégico para cámaras empresarias, asociaciones gremiales y
              organizaciones de la sociedad civil. Actualmente es Coordinadora
              Ejecutiva de Generación 2040, un espacio empresario-sindical que
              promueve el diálogo y el consenso entre ambos sectores y la
              realización de proyectos conjuntos sobre ejes estratégicos para el
              desarrollo del país. Trabajó durante más de una década en el
              sector público, en proyectos de reforma política y modernización
              del Estado y lideró un equipo de investigación sobre voto
              electrónico. Fue coordinadora para Argentina del Foro Estratégico
              Argentina-Estados Unidos del prestigioso think tank norteamericano
              Center for Strategic and International Studies (CSIS). También se
              desempeñó como Directora de Relaciones Institucionales,
              Comunicación y Prensa de la Fundación Foro del Sur y de la Revista
              Archivos del Presente. Fue Gerente Ejecutiva del J6, el espacio
              multisectorial que agrupa a los nuevos dirigentes de las seis
              cámaras empresarias más importantes del país. Es Licenciada en
              Ciencia Política y Gobierno por la Universidad Torcuato Di Tella,
              realizó numerosos cursos de formación y capacitación en el país y
              el exterior, participó como docente invitada y expositora en
              diversos cursos y seminarios nacionales e internacionales. También
              es autora y co-autora de trabajos de investigación sobre
              movimientos sociales, reforma política, sistemas electorales y
              voto electrónico, y, más recientemente, sobre género, trabajo del
              futuro, empleo y pobreza.
            </React.Fragment>
          }
        />
        <Expositor
          nombre="Delia Ferreira Rubio"
          imagen={delia_ferreira}
          descripcion={"Presidente de Transparencia Internacional"}
          biografia={
            <React.Fragment>
              Delia M. Ferreira Rubio es Presidente de Transparency
              International y Miembro del Consejo Directivo de la Alianza para
              Gobierno Abierto (OGP). Es co-chair del Global Future Council
              sobre Transparencia y Anti-corrupción del Foro Económico Mundial y
              Miembro del Board de UN Global Compact. Es Consultora
              independiente en temas de Transparencia y Anti-corrupción,
              Financiamiento de la política y temas institucionales. Ha
              realizado consultorías para diversos organismos internacionales
              (IFES, PNUD, OEA, BID, IDEA INTERNATIONAL, CAPEL, DEMOCRACY
              INTERNATIONAL, entre otras) y organizaciones no gubernamentales,
              liderando proyectos en Argentina, Nicaragua, Guatemala, El
              Salvador, Bolivia, Paraguay, Jamaica, Colombia, Honduras y
              Ecuador. Fue presidenta de Poder Ciudadano en Argentina entre 2008
              y 2010. Doctora en Derecho, grado otorgado por la Facultad de
              Derecho de la Universidad Complutense de Madrid. Hizo sus estudios
              de grado en la Universidad Nacional de Córdoba, donde se graduó
              como abogada. Fue Jefe de Asesores de varios Diputados y Senadores
              en el Congreso de la Nación Argentina, entre 1990 y 2005,
              trabajando en la Comisión de Asuntos Constitucionales de ambas
              Cámaras. También fue Asesora en la Auditoría General de la Nación.
              Es miembro de la Asociación Argentina de Derecho Constitucional y
              del Consejo Asesor del Instituto de Etica y Transparencia de
              AMCHAM Argentina.Ha publicado numerosos trabajos sobre Derecho
              Electoral, Financiamiento de la Política y Ética pública y
              Transparencia.
            </React.Fragment>
          }
        />
        <Expositor
          nombre="Gerónimo Frigerio"
          imagen={geronimo_frigerio}
          descripcion={"Gerente General de gf Consulting Group"}
          biografia={
            <React.Fragment>
              Gerónimo Frigerio es un especialista internacional con veinte años
              de experiencia en el diseño y la ejecución de proyectos de
              desarrollo económico y social en América Latina. Experto en
              regulación, estructuración de inversiones y procesos de reforma,
              es director general de la consultora gf Consulting Group, que
              provee asesoramiento técnico del más alto nivel en proyectos y
              estrategias de inversión a gobiernos, empresas y organismos
              multilaterales de crédito. Fue presidente del directorio ejecutivo
              de Fonplata (2017-2018); especialista abogado del Banco
              Interamericano de Desarrollo (2003-2012); funcionario del Banco
              Mundial y coautor de Doing Business in 2004. Abogado por la
              Universidad de Buenos Aires (UBA, 1998), tiene una maestría en
              Leyes -LLM en Finanzas- del Queen Mary College de la Universidad
              de Londres (Chevening, 2000-2001) y estudios de especialización en
              Harvard Business School (2013). Es autor de "Simple", una idea
              para transformar el futuro de América Latina
              (Penguin/Sudamericana, 2020).
            </React.Fragment>
          }
        />
        <Expositor
          nombre="Ignacio Gorupicz"
          imagen={ignacio_gorupicz}
          descripcion={"Presidente del XXIV Encuentro Anual ACDE"}
          biografia={
            <React.Fragment>
              Desde hace 12 años Ignacio Gorupicz se desempeña en McKinsey &
              Company, donde es Socio y Líder de la práctica de Transformación
              de las Operaciones para América Latina Hispana. Ha servido
              múltiples clientes en estrategia, transformación digital,
              operaciones y organización en el sector privado y público,
              principalmente, en Argentina, Chile, Brasil, Perú y Colombia.
              Anteriormente desarrolló su carrera en Finanzas Corporativas en
              Siemens y DuPont. Tiene un MBA de Stanford University y un master
              en Finanzas de la Universidad Torcuato Di Tella (UTDT). Es
              Licenciado en Administración y Contador por la Facultad de
              Ciencias Económicas de la Universidad de Buenos Aires (UBA).
              Miembro del Directorio de la ONG Help Argentina, que canaliza
              donaciones desde el exterior hacia ONGs en el país. También es
              miembro del Consejo Directivo de la Asociación Cristiana de
              Dirigentes de Empresa (ACDE).
            </React.Fragment>
          }
        />
        <Expositor
          nombre="Immaculée Ilibagiza"
          imagen={immacule_ilibagiza}
          descripcion={"Conferencista y escritora ruandesa"}
          biografia={
            <React.Fragment>
              Se considera a Immaculée Ilibagiza como una de las principales
              oradoras del mundo sobre la fe, la esperanza y el perdón. Ha
              compartido su mensaje universal con líderes mundiales, niños en
              edad escolar, empresas multinacionales, iglesias, eventos y
              conferencias en todo el mundo, incluyendo una presentación ante
              más de 200.000 personas en Sao Paulo, Brasil. Nació y creció en
              una pequeña aldea de Ruanda (África). Disfrutó de una infancia
              tranquila con sus cariñosos padres y sus tres hermanos. La
              educación era muy importante en su hogar, por lo que no es de
              extrañar que le fuera bien en la escuela y llegara a la
              Universidad Nacional de Ruanda a estudiar ingeniería eléctrica y
              mecánica. En 1994, durante las vacaciones de Semana Santa, la vida
              de Immaculée se transformó para siempre. El 6 de abril de ese año,
              el avión del presidente ruandés fue derribado sobre la capital,
              Kigali. Este asesinato desencadenó meses de masacre en todo el
              país. Para proteger a su única hija de la violación y el
              asesinato, su padre le pidió que corriera a la casa de un pastor
              local en busca de protección. Allí se refugió junto con otras
              siete mujeres, en un baño oculto de menos de 1x2 metros. Durante
              los siguientes 91 días, Immaculée y las demás mujeres se
              acurrucaron en silencio en esta habitación, mientras el genocidio
              hacía estragos en todo el país. La ira y el resentimiento
              destruían la mente, el cuerpo y el espíritu de Immaculée. Fue
              entonces cuando recurrió a la oración como una forma de ahogar la
              rabia que llevaba dentro y el mal que había fuera de la casa. Fue
              un punto de inflexión hacia Dios, y lejos del odio, eso la salvó.
              Ya liberada, Immaculée halló prácticamente a toda su familia
              asesinada. También encontró a casi un millón de amigos, vecinos y
              compatriotas ruandeses masacrados. Incluso se encontró cara a cara
              con el asesino de su madre y de uno de sus hermanos. Tras soportar
              meses de sufrimiento físico, mental y espiritual, fue capaz de
              ofrecer lo impensable, diciendo al hombre: "Te perdono". En 1998,
              Immaculée emigró a Estados Unidos, donde continuó su trabajo por
              la paz a través de las Naciones Unidas. Ha recibido el título de
              doctora honoris causa de casi una docena de universidades y
              colegios, como la Universidad de Notre Dame, la Universidad de
              Saint John, la Universidad de Seton Hall, el Siena College, la
              Universidad de Walsh, la Universidad de Duquesne y la Universidad
              Católica de América. Ha sido reconocida y honrada con numerosos
              premios humanitarios, entre ellos, el Premio Internacional Mahatma
              Gandhi para la Reconciliación y la Paz. Su primer libro, Left to
              Tell: Discovering God Amidst the Rwandan Holocaust (Hay House),
              fue publicado en marzo de 2006, que rápidamente se convirtió en
              best-seller. Ha escrito otros seis libros en los últimos años: Led
              by Faith: Rising from the Ashes of the Rwandan Genocide, Our Lady
              of Kibeho, If Only We Had Listened, Visit from Heaven, The Boy Who
              Met Jesus y The Rosary. Actualmente se están desarrollando
              importantes versiones cinematográficas de su vida y sus libros.
            </React.Fragment>
          }
        />
        <Expositor
          nombre="Gaston Irigoyen"
          imagen={gaston_irigoyen}
          descripcion={"Co-Fundador & CEO de Pomelo"}
          biografia={
            <React.Fragment>
              Gastón Irigoyen es Co-Fundador & CEO de Pomelo, la fintech que
              está construyendo la nueva infraestructura de servicios
              financieros en América Latina. Previamente fue CEO de Naranja X,
              CMO de Restorando, CEO de Guide central y uno de los primeros
              empleados de Google Argentina. Es profesor de fintech y negocios
              digitales en la Universidad de San Andrés y fue destacado en el
              ranking 35 sub 35 de la revista Forbes.
            </React.Fragment>
          }
        />
        <Expositor
          nombre="Cristian Jerónimo"
          imagen={cristian_geronimo}
          descripcion={"Secretario General de la Juventud Sindical Nacional"}
          biografia={
            <React.Fragment>
              Cristian Jerónimo es dirigente sindical de la industria del
              vidrio, es Secretario General de SEIVARA (Sindicato de Empleados
              de la Industria del Vidrio y Afines de la República Argentina)
              desde 2019, y es referente nacional de la Juventud Sindical
              Nacional (JSN), que preside también desde 2019. En su trayectoria
              como dirigente del vidrio enfocó su mirada en la transformación de
              la industria del vidrio y en la capacitación profesional de los
              trabajadores para prepararlos para la denominada Cuarta Revolución
              Industrial.
            </React.Fragment>
          }
        />
        <Expositor
          nombre="Verónica Marcelo"
          imagen={veronica_marcelo}
          descripcion={"Gerenta General de Natura"}
          biografia={
            <React.Fragment>
              Verónica Marcelo ha sabido construir un liderazgo genuino, basado
              en el diálogo y el conocimiento en profundidad del modelo de venta
              por relaciones. Es mamá de dos hijos y está casada. Asumió el
              liderazgo de la operación de Natura en la Argentina en uno de los
              momentos de mayor incertidumbre de la historia. Su desafío fue
              consolidar el liderazgo de Natura Argentina en el mercado de
              belleza y venta directa, con los mismos pilares que impulsa la
              marca desde sus inicios: relaciones, innovación e impacto positivo
              en las personas, las comunidades y la naturaleza. Trabaja desde
              hace 16 años en Natura y se desarrolló en diferentes cargos. Fue
              supervisora de ventas, gerenta y directora en diversas áreas,
              tanto en el país como para la operación regional. Lideró equipos
              en ventas; entrenamiento comercial para operaciones
              internacionales; marketing, relacionamiento & entrenamiento; y
              estuvo a cargo de todo el equipo comercial de Natura Argentina.
              Conoce en profundidad la compañía y tiene plena confianza en la
              nueva etapa de crecimiento de la gran red de relaciones que forman
              parte de Natura. Estudió Turismo y realizó un Máster en Negocios
              en la Universidad Torcuato Di Tella (UTDT).{" "}
            </React.Fragment>
          }
        />
        <Expositor
          nombre="Joan Antoni Melé"
          imagen={joan_antoni}
          descripcion={"Presidente de la Fundación Dinero y Conciencia"}
          biografia={
            <React.Fragment>
              Joan Antoni Melé lidera el proceso de desarrollo de la Banca Ética
              en Latinoamericana y es miembro del Consejo Asesor de Triodos Bank
              de España. Actualmente es presidente de la Fundación Dinero y
              Conciencia, conferenciante, consultor y formador en valores. Con
              44 años de experiencia profesional en el sector de la banca, ha
              sido subdirector general de Triodos Bank en España, miembro de su
              Comité Ejecutivo y vicepresidente de la Fundación Triodos. En
              enero de 2015 renunció a su cargo para promover la Banca Ética en
              Latinoamérica y dedicarse de lleno a su labor de difusión sobre
              temas de economía consciente, empresas sostenibles y educación en
              valores. Joan Antoni Melé imparte el seminario llamado “Taller de
              Conciencia”, retiros de fin de semana; además, colabora en cursos
              en prestigiosas universidades, escuelas de negocios e
              instituciones en mundo. Es autor de los libros Dinero y
              conciencia, La Economía explicada a los jóvenes, Lo que nos queda
              por vivir y ¿Seres Humanos o Marionetas?
            </React.Fragment>
          }
        />
        <Expositor
          nombre="María Migliore"
          imagen={maria_migliore}
          descripcion={"Ministra de Desarrollo Humano y Hábitat del GCBA"}
          biografia={
            <React.Fragment>
              El objetivo de María Migliore es fomentar la igualdad de
              oportunidades, la inclusión social y la mejora del hábitat,
              trabajando en red y garantizando los derechos sociales básicos.
              Desde diciembre de 2019 es Ministra de Desarrollo Humano y Hábitat
              de la Ciudad de Buenos Aires, Argentina. Fue Gerenta General del
              Instituto de Vivienda de la Ciudad (IVC), donde llevó adelante la
              integración social y urbana de barrios populares de la Ciudad. Y
              se desempeñó como jefa de gabinete en la Subsecretaría de
              Relaciones Internacionales e Institucionales de la Ciudad. Es
              Licenciada en Ciencia Política por la Universidad Católica
              Argentina; fue becaria del programa de Liderazgo Político del
              Centro de Investigación y Acción Social (CIAS); y formó parte del
              programa de Alta Dirección en IAE Business School.
            </React.Fragment>
          }
        />
        <Expositor
          nombre="Rosana Negrini"
          imagen={rosana_negrini}
          descripcion={"Presidente de Agrometal"}
          biografia={
            <React.Fragment>
              Rosana María Negrini está casada con el Dr. Jorge Edgardo Crovara,
              y tiene cuatro hijos: Nicolás, Pablo, Ana Sol y Josefina. Es
              Presidente de AGROMETAL S.A.I., Vicepresidente Regional de Córdoba
              Fundación Mediterránea, Protesorera de la Asociación de
              Fabricantes de Maquinaria Agrícola y Agrocomponentes de Córdoba
              (AFAMAC) y Secretaria de la Cámara Argentina Fabricantes de
              Maquinaras Agrícolas (CAFMA). Es contadora pública por la
              Universidad Nacional de Córdoba y licenciada en Administración por
              la misma casa de estudios.
            </React.Fragment>
          }
        />
        <Expositor
          nombre="Emilio Pérsico"
          imagen={emilio_persico}
          descripcion={
            "Secretario de Economía Social y Secretario General del Movimiento Evita"
          }
          biografia={
            <React.Fragment>
              Emilio Pérsico es secretario de Economía Social de la Nación y
              Secretario General del Movimiento Evita. Oriundo de La Plata,
              inició su militancia a los 14 años. En la última dictadura cívico
              militar estuvo exiliado en Brasil, Suecia, España y México. Al
              regresar al país trabajó en distintas fábricas en La Plata. Fue
              fundador del Movimiento de Trabajadores Desocupados Evita que, en
              2006, en fusión con otras organizaciones del campo nacional y
              popular dio origen al Movimiento Evita. Su convicción es que la
              inclusión social se logra con trabajo, entendiendo que ése es el
              camino para la reconstrucción del país.
            </React.Fragment>
          }
        />
        <Expositor
          nombre="Federico Poletto"
          imagen={federico_poletto}
          descripcion={"Gerente General de MDZ"}
          biografia={
            <React.Fragment>
              Federico Poletto está casado desde hace 18 años y es padre de 3
              hijos. Su fuente de inspiración para trabajar todos los días es
              poder cumplir la voluntad de Dios. Es Gerente General en MDZ, uno
              de los portales de noticias con mayor cantidad de visitas en
              Argentina y Latinoamérica. Su trayectoria muestra un extenso
              recorrido por más de 25 años en diferentes medios de comunicación,
              que incluyen Terra, Clarín, Infobae, Perfil y Atlántida. Ha sido
              siempre un predicador de la evolución digital de la industria de
              medios, lanzando nuevos productos, coordinando contenidos,
              recursos y posicionamiento de los negocios que tuvo a cargo.
            </React.Fragment>
          }
        />
        <Expositor
          nombre="Julia Pomares"
          imagen={julia_pomares}
          descripcion={"Jefa de asesores del GCBA"}
          biografia={
            <React.Fragment>
              Julia Pomares es Jefa de Asesores del Gobierno de la Ciudad de
              Buenos Aires desde Mayo de 2021. Se desempeñó como Directora del
              Centro de Implementación de Políticas Públicas para la Equidad y
              el Crecimiento (CIPPEC) desde 2015. Con anterioridad fue Directora
              del Programa de Instituciones Políticas del CIPPEC, donde
              concentró su agenda de investigación en las condiciones de la
              competencia política, tanto en lo que se refiere al acceso al
              poder como a su ejercicio. Doctora en Ciencia Política y Magíster
              en Política Comparada y en Métodos de Investigación por el London
              School of Economics and Political Science, Pomares fue asesora de
              políticas en el Reino Unido y estuvo encargada del monitoreo y
              evaluación de la descentralización electoral en Guatemala. En la
              Ciudad de Buenos Aires supervisó y evaluó la implementación de la
              primera prueba piloto de voto electrónico. Como especialista en
              investigación aplicada a políticas públicas y evaluación de
              proyectos, colaboró con organizaciones internacionales y think
              tanks, entre los cuales se destacan el Overseas Development
              Institute (ODI), el Woodrow Wilson International Center for
              Scholars, UNICEF y la Organización de los Estados Americanos
              (OEA).
            </React.Fragment>
          }
        />
        <Expositor
          nombre="Marysol Rodriguez"
          imagen={marysol_rodriguez}
          descripcion={"Secretaria de UIA Joven"}
          biografia={
            <React.Fragment>
              Marysol Rodríguez pertenece a la tercera generación de la familia
              accionista del Grupo Sinteplast. Actualmente se desempeña como
              titular de Corporate Affairs de Sinteplast. Es Secretaria en UIA
              Joven y miembro de la Junta Directiva de la UIA, Presidenta de la
              Unión Industrial de Ezeiza, y miembro de la Comisión Directiva de
              Jóvenes J6. Es licenciada en Ciencias Políticas y Relaciones
              Internacionales por la Universidad Católica Argentina (UCA) y
              posee un EMBA de IAE Business School.
            </React.Fragment>
          }
        />
        <Expositor
          nombre="Gonzalo Tanoira"
          imagen={gonzalo_tanoira}
          descripcion={"Presidente de ACDE"}
          biografia={
            <React.Fragment>
              Gonzalo Tanoira es licenciado en Administración de Empresas por la
              Universidad de Belgrano, tiene un máster en Business
              Administration de Wharton School. Es vicepresidente de S.A. San
              Miguel, director del Grupo Peñaflor S.A. y del Banco Quilvest. Es
              fundador del Movimiento de Dirigentes Cristianos y cofundador de
              GAM (Generación por una Argentina Mejor). Es miembro del Consejo
              Asesor de la Universidad Austral y del IAE. Ganó el Premio LIDE en
              la categoría Empresario de Agronegocios, el Premio Fortuna a la
              Mejor empresa agroindustrial (2015), el Premio Galicia Excelencia
              Agropecuaria por mejor Gestión Ambiental (2017), y el Premio Konex
              como empresario de la agroindustria (2018).
            </React.Fragment>
          }
        />
        <Expositor
          nombre="Juan Vaquer"
          imagen={juan_vaquer}
          descripcion={"Abogado y empresario agropecuario"}
          biografia={
            <React.Fragment>
              Juan Manuel Vaquer tiene una explotación familiar agropecuaria, se
              desempeña como Of Counsel en el Estudio Jurídico JP O´Farrell,
              integra el Consejo Asesor del Instituto de Ética y Transparencia
              de AmCham Argentina, el Consejo Asesor de la Universidad Austral,
              y lidera la Red de Gobierno Corporativo de IDEA. En 1990 ingresó a
              la empresa DuPont, donde ocupó diversos cargos, en América Latina
              y en Europa, retirándose como presidente para América Latina, en
              mayo de 2019. Presidió la Cámara Americana de Comercio en
              Argentina (AmCham) desde 2013 hasta junio de 2016, y la Asociación
              Cristiana de Dirigentes de Empresa (ACDE), entre 2017 y 2020. Fue
              director del Instituto para el Desarrollo Empresarial de la
              Argentina (IDEA), miembro de la Comisión Directiva del Consejo
              Empresario Argentino para el Desarrollo Sostenible (CEADS) y
              presidente del Directorio de Aleph Midstream S.A.. Es abogado
              graduado en la Universidad de Buenos Aires (UBA), y con una
              maestría en Derecho Internacional y Comparado en SMU, de Dallas,
              Texas
            </React.Fragment>
          }
        />
        <Expositor
          nombre="Roberto Vassolo"
          imagen={roberto_vassolo}
          descripcion={
            "Economista del IAE Business School - Universidad Austral"
          }
          biografia={
            <React.Fragment>
              Roberto Vassolo es profesor titular del área de Política de
              Empresa del IAE Business School-Universidad Austral. Dirige el
              Programa EME en Liderazgo Estratégico, y el Programa Doctoral en
              Dirección de Empresas del IAE Business School. Sus campos de
              investigación actual abarcan la dirección estratégica en entornos
              de alta incertidumbre, la dinámica competitiva en industrias de
              recursos naturales y el Liderazgo Estratégico. En los últimos 15
              años ha trabajado en consultoría estratégica con empresas
              argentinas, multilatinas y multinacionales de distintos sectores
              industriales. Es PhD. en Strategic Management de Purdue
              University, Posgrado en Economía por la Universidad Di Tella
              (UTDT) y Licenciado en Economía por la Universidad Católica
              Argentina (UCA). Algunas de sus investigaciones han sido
              publicadas en Harvard Business Review, Strategic Management
              Journal, Academy of Management Journal, Organization Science,
              Journal of Management Studies, Journal of Management, Academy of
              Management Perspectives y Research Policy, entre otras. Es autor
              de los libros Dirección Estratégica en Países Emergentes y
              Strategy as Leadership (Stanford University Press).
            </React.Fragment>
          }
        />
        <Expositor
          nombre="P. Augusto Zampini"
          imagen={padre_augusto_zamipini}
          descripcion={
            "Secretario Adjunto del Dicasterio para el Desarrollo Humano Integral del Vaticano"
          }
          biografia={
            <React.Fragment>
              P. Augusto Zampini Davies nació en Buenos Aires, Argentina, el 25
              de julio de 1969. Fue ordenado sacerdote, incardinándose a la
              Diócesis de San Isidro (Argentina), el 22 de octubre de 2004. A
              partir de entonces se ha desempeñado en diferentes parroquias e
              instituciones en nuestro país y en Inglaterra.
              <br />
              A partir de 2017, se ha desempeñado como Coordinador de la oficina
              de Fe y Desarrollo del Dicasterio para el Servicio del Desarrollo
              Humano Integral del Vaticano. En 2018, el Papa Francisco lo nombró
              como uno de los expertos/asesores del Sínodo para la Amazonía en
              2019. El 8 de abril de 2020 fue nombrado por el Santo Padre como
              Secretario Adjunto del Dicasterio para el Servicio del Desarrollo
              Humano Integral.
              <br />
              Antes de ingresar al seminario estudió Derecho en la Universidad
              Católica Argentina (UCA), de 1987 a 1993, trabajando luego como
              abogado en el Banco Central de la Argentina y en el bufete
              internacional Baker & McKenzie, de 1993 a 1997. Posteriormente,
              realizó la formación en teología moral en el Colegio Máximo de la
              Universidad del Salvador (2004-2006); cursó la Maestría en
              Desarrollo Internacional en la Universidad de Bath (2009-2010,
              becario Chevening), obtuvo el Doctorado en Teología en la
              Universidad de Roehampton (Londres, 2010-2014, becario del Sagrado
              Corazón), y ha sido becario de investigación posdoctoral en el
              Instituto Margaret Beaufort de la Universidad de Cambridge
              (2013-2014, becario Cardenal Hume).
            </React.Fragment>
          }
        />
      </div>
    </div>
  );
};

export default Expositores;
