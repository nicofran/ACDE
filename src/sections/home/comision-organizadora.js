import React from "react";

// ICONS
import logo from "../../assets/icons/logo-comision.png";
import icon from "../../assets/icons/logo-acde.png";

// INTEGRANTES DE LA COMISION
import ana_pico from "../../assets/images/ana_pico.png";
import arturo_simone from "../../assets/images/arturo_simone.png";
import barbara_harteneck from "../../assets/images/barbara_harteneck.png";
import carolina_abarca from "../../assets/images/carolina_abarca.png";
import catalina_lopez from "../../assets/images/catalina_lopez_lecube.png";
import elena_newkirk from "../../assets/images/elena_newkirk.png";
import fernando_ambroa from "../../assets/images/fernando_ambroa.png";
import fernando_oris_de_roa from "../../assets/images/fernando_oris_de_roa.png";
import gabriel_castelli from "../../assets/images/gabriel_castelli.png";
import gonzalo_tanoira from "../../assets/images/gonzalo_tanoira.png";
import graciela_martini from "../../assets/images/graciela_martini.png";
import hernan_alberro from "../../assets/images/hernan_alberro.png";
import ignacio_cornejo_sola from "../../assets/images/ignacio_cornejo_sola.png";
import ignacio_gorupicz from "../../assets/images/ignacio_gorupicz.png";
import jorge_laroza from "../../assets/images/jorge_la_roza.png";
import maria_gabriela_capacete from "../../assets/images/maria_gabriela_capacete.png";
import sebastian_mocorrea from "../../assets/images/sebastian_mocorrea.png";
import silvia_bulla from "../../assets/images/silvia_bulla.png";
import juan_vaquer from "../../assets/images/vaquer_juan.png";
import victor_valle from "../../assets/images/victor_manuel_valle.png";
import hernan_etchaleco from "../../assets/images/hernan_etchaleco.jpeg";
import gonzalo_oliva from "../../assets/images/gonzalo_oliva.jpeg";

//Componente de Integrante

import Integrante from "../../components/integrante";

const Comision = () => {
  return (
    <div className="comision">
      <div className="container">
        <div className="comision__rectangulo" id="comision">
          <div className="comision__span">
            <img className="logo" src={icon} alt="ACDE" />
            <img src={logo} alt="ACDE" />
            <h1 className="comision__titulo">comisión organizadora</h1>
          </div>
        </div>

        <div className="comision__integrantes col-12">
          <div className="col-12 d-flex justify-content-center ">
            <Integrante
              nombre="Ignacio Gorupicz"
              posicion={
                "Presidente del XXIV Encuentro Anual ACDE Socio en McKinsey & Company"
              }
              imagen={ignacio_gorupicz}
              biografia={
                <React.Fragment>
                  Desde hace 12 años Ignacio Gorupicz se desempeña en McKinsey &
                  Company, donde es Socio y Líder de la práctica de
                  Transformación de las Operaciones para América Latina Hispana.
                  Ha servido múltiples clientes en estrategia, transformación
                  digital, operaciones y organización en el sector privado y
                  público, principalmente, en Argentina, Chile, Brasil, Perú y
                  Colombia. Anteriormente desarrolló su carrera en Finanzas
                  Corporativas en Siemens y DuPont. Tiene un MBA de Stanford
                  University y un master en Finanzas de la Universidad Torcuato
                  Di Tella (UTDT). Es Licenciado en Administración y Contador
                  por la Facultad de Ciencias Económicas de la Universidad de
                  Buenos Aires (UBA). Miembro del Directorio de la ONG Help
                  Argentina, que canaliza donaciones desde el exterior hacia
                  ONGs en el país. También es miembro del Consejo Directivo de
                  la Asociación Cristiana de Dirigentes de Empresa (ACDE).
                </React.Fragment>
              }
            />
          </div>
          <Integrante
            nombre="Carolina Abarca"
            posicion={"Directora Ejecutiva de Fundación Alumbrar"}
            imagen={carolina_abarca}
            biografia={
              <React.Fragment>
                Carolina Abarca es una profesional apasionada por el desarrollo
                humano. Su experiencia combina la participación activa en el
                tercer sector y el desempeño en empresas privadas, tanto en el
                sector industrial como en servicios. Emprendió y co-fundó Stop
                Tiempo de Mujeres, desde donde se facilitaban espacios de
                inspiración, autoconocimiento y crecimiento personal para
                mujeres. Cantar y escribir son sus cables a tierra. Actualmente
                es Directora Ejecutiva de Fundación Alumbrar, de la cual depende
                Revista Sophia, un medio digital que busca desplegar el alma y
                la sabiduría humana a través de diferentes formatos.
              </React.Fragment>
            }
          />
          <Integrante
            nombre="Hernán Alberro"
            posicion={"Consultor independiente"}
            imagen={hernan_alberro}
            biografia={
              <React.Fragment>
                Hernán Alberro es consultor independiente especializado en
                gestión de proyectos de cooperación internacional, fundraising,
                comunicación y derechos humanos. Actualmente es miembro del
                Consejo Consultivo del Centro para la Apertura y el Desarrollo
                de América Latina, donde además se desempeñó como Director de
                Programas durante más de 15 años. Asesora a empresas y
                organizaciones de la sociedad civil en temas de comunicación,
                asuntos públicos, gestión e incidencia.
              </React.Fragment>
            }
          />
          <Integrante
            nombre="Fernando Ambroa"
            posicion={
              "Director y Asesor en empresas nacionales y multinacionales"
            }
            imagen={fernando_ambroa}
            biografia={
              <React.Fragment>
                Fernando Ambroa es ingeniero con Posgrados de Alta Dirección en
                Europa y Argentina. Desde hace 25 años ocupando posiciones
                ejecutivas en la Alta Dirección, como Presidente, CEO,
                Vice-Presidente, Director Regional y Director Ejecutivo en
                empresas multinacionales y nacionales, principalmente en
                sectores de Servicios Públicos, Servicios Privados,
                Instituciones de formación académica y Empresas de Salud.
                Sólidas competencias adquiridas en liderazgo, transformación,
                desarrollo y conducción de equipos, resolución de conflictos,
                negociación, estrategia, planificación, desarrollo de nuevos
                negocios, start-ups, procesos y relaciones con gobiernos.
              </React.Fragment>
            }
          />
          <Integrante
            nombre="Silvia Bulla"
            posicion={
              "Presidente de Danisco Argentina y Directora de HR de IFF para América Latina"
            }
            imagen={silvia_bulla}
            biografia={
              <React.Fragment>
                Silvia Bulla es licenciada en Estadística de la UNR, posee una
                Maestría en Administración de Empresas y certificación de Coach
                otorgada por la International Coaching Federation. Es la
                Presidente de Danisco Argentina y Directora de Recursos Humanos
                para LATAM International Flavors and Fragrancies (IFF). Fue
                Presidente de DuPont Argentina y ocupó varias posiciones
                regionales en el área de Recursos Humanos de la empresa. En 2020
                fue reconocida como la Mujer destacada del ámbito empresarial
                por parte de Women Corporate Directors Foundation (WCD) y como
                una de los 10 CEOs más influyentes durante la pandemia, según el
                ranking HORSE publicado por Cronista Comercial. Es miembro del
                directorio de AmCham (Cámara de Comercio de USA en Argentina),
                de IDEA (Instituto para el Desarrollo empresarial de Argentina)
                y del CEADS (Consejo Empresario Argentino para el Desarrollo
                Sustentable) y además es miembro del Consejo Directivo de la
                Asociación Cristiana de Dirigentes de Empresa (ACDE).
              </React.Fragment>
            }
          />
          <Integrante
            nombre="María Gabriela Capacete"
            posicion={"Consultora independiente"}
            imagen={maria_gabriela_capacete}
            biografia={
              <React.Fragment>
                María Gabriela Capacete es consultora en comunicaciones, cultura
                corporativa y crisis de empresas nacionales y multinacionales.
                Tiene una amplia trayectoria de gerenciamiento de áreas
                institucionales, comunicación corporativa y de negocios, prensa
                y marketing en empresa multinacional.
              </React.Fragment>
            }
          />
          <Integrante
            nombre="Gabriel E. Castelli"
            posicion={
              "Director externo de Farmacity S.A. y del ICBC Bank S. A."
            }
            imagen={gabriel_castelli}
            biografia={
              <React.Fragment>
                Gabriel Castelli tiene una amplia trayectoria en el sistema
                financiero en el área de finanzas. Actualmente es Director
                externo de Farmacity S.A. y del ICBC Bank S. A. Fue Director
                Nacional de Cáritas Argentina y Secretario Nacional de Niñez,
                Adolescencia y Familia del Ministerio de Desarrollo Social de la
                Nación.
              </React.Fragment>
            }
          />
          <Integrante
            nombre="Ignacio Cornejo Solá"
            posicion={
              "Responsable de Corporate Affairs, external advisor Arla Foods Ingredients"
            }
            imagen={ignacio_cornejo_sola}
            biografia={
              <React.Fragment>
                Ignacio Cornejo Solá, es un salteño que reside en Buenos Aires,
                casado, padre de siete hijos y esperando el catorceavo nieto.
                Recibido de Bachiller en Hutchinson High School Minnesota USA.
                Graduado de Licenciado en Comercio Internacional en UADE
                Argentina. Obtuvo un Degree sobre Seminar Trade Promotion en el
                World Trade Center de Tokio Japón. Cursó en la Universidad de
                Harvard Boston USA el Programa Strategic Marketing Managment.
                Obtuvo certificación del NCBS National Commerce Bank Service
                sobre Inn Store Banking Branch Memphis Tennessee USA. Colaboró
                con diferentes posiciones en organismos del Estado, como
                Ministerio de Relaciones Exteriores y Secretaría de Comercio, y
                en empresas, como McDonald’s, Vale Rio Doce, Trane Ingersoll
                Rand, entre otras. Actualmente es responsable de PR & Corporate
                Affairs de la empresa danesa Arla Foods Ingredients. Desarrolló
                diferentes proyectos en USA, Indonesia, Rusia, México, Latam,
                India, China, Kuwait y otros países, enfocados en la Reputación
                de las empresas y sus directivos. Participa en varias ONG’S y
                tiene una ferviente vocación por todos los temas solidarios.
                Mantiene un sólido relacionamiento con los referentes público –
                privado en los países mencionados.
              </React.Fragment>
            }
          />
          <Integrante
            nombre="Hernán Etchaleco"
            posicion={"Director de Identia PR"}
            imagen={hernan_etchaleco}
            biografia={
              <React.Fragment>
                Hernán Etchaleco es licenciado en Ciencias de la Comunicación
                Social, egresado de la Universidad de Buenos Aires (UBA). Fue
                docente en las carreras de Ciencia Política y Comunicación
                Social (UBA). Cuenta con una especialización en administración y
                resolución de conflictos (Fundación Friedrich Naumann; Alemania,
                2009). Fue asesor parlamentario en la Cámara de Diputados de la
                Nación para el Bloque Coalición Cívica-ARI, y jefe de Prensa del
                Bloque Coalición Cívica-ARI (Cámara de Diputados de la Nación
                2007-2009). Ex periodista especializado en política, política
                internacional y economía. Especializado en comunicación de
                crisis y conflictos, tiene a su cargo el área de Asuntos
                Públicos en Identia.
              </React.Fragment>
            }
          />
          <Integrante
            nombre="Bárbara Harteneck"
            posicion={"Directora Ejecutiva de UNAJE"}
            imagen={barbara_harteneck}
            biografia={
              <React.Fragment>
                Bárbara Harteneck se caracteriza por su espíritu curioso, en la
                constante exploración y búsqueda de soluciones. Es licenciada en
                Administración de Empresas por la Universidad de Buenos Aires
                (UBA), con varios posgrados, en comunicación, marketing
                corporativo, gestión de proyectos sociales y liderazgo
                consciente. Se especializa en el triple impacto de los negocios.
                Cuenta con un recorrido profesional como consultora en temas de
                sustentabilidad, estrategia y comunicación; gestión de marcas y
                proyectos; articulación público-privada-OSC. Actualmente es
                Directora Ejecutiva de la Unión Argentina de Jóvenes Empresarios
                y forma parte del equipo de Damasco Sustentabilidad (Empresa B
                Certificada). Fue ayudante de cátedra en la Facultad de Ciencias
                Económicas de la UBA y tutora de emprendimientos del Centro de
                Emprendedores de la FCE, UBA, y facilitadora del programa "Vos
                lo hacés", del Gobierno de la Ciudad de Buenos Aires.
              </React.Fragment>
            }
          />
          <Integrante
            nombre="Jorge La Roza"
            posicion={"Miembro del Consejo Directivo de ACDE"}
            imagen={jorge_laroza}
            biografia={
              <React.Fragment>
                Jorge La Roza es ingeniero agrónomo por la Universidad Nacional
                del Sur, con estudios ejecutivos en la Universidad de Indiana
                (Bloomington, Estados Unidos). Desde 1977 hasta 2014 ocupó
                diversos puestos en la empresa Dow, donde comenzó en el
                departamento comercial y llegó a ser Presidente para Argentina y
                la Región Sur de Latinoamérica, luego de una extensa carrera
                internacional de 25 Años en América, Europa y Asia. Actualmente
                dedicado a sus emprendimientos personales, integra el Consejo
                Directivo de ACDE, Consejo Asesor de RAP y es Presidente del
                Capítulo Educación de Rotary Club.
              </React.Fragment>
            }
          />
          <Integrante
            nombre="Catalina López Lecube"
            posicion={"Líder en Comunicaciones & Socios en ACDE"}
            imagen={catalina_lopez}
            biografia={
              <React.Fragment>
                Catalina López Lecube es licenciada en Ciencias de la
                Comunicación por la Universidad de Buenos Aires (UBA). Cursó la
                Maestría en Gestión de la Comunicación en las Organizaciones por
                la Universidad Austral. Cuenta con 20 años de experiencia
                desarrollada en áreas de Comunicación y Comercial. Durante 8
                años se desempeñó en diversos cargos en los Posgrados de la
                Facultad de Derecho de la Universidad Austral. En marzo de 2017
                ingresó como Coordinadora de Socios en la Asociación Cristiana
                de Dirigentes de Empresa (ACDE) y, desde enero de 2018, se
                desempeña como Líder de Comunicaciones & Socios en la misma
                institución.
              </React.Fragment>
            }
          />
          <Integrante
            nombre="Graciela Martini"
            posicion={"Directora Asociada de Infomedia"}
            imagen={graciela_martini}
            biografia={
              <React.Fragment>
                Licenciada en Letras, Master de NYU y consultora de comunicación
                corporativa e institucional durante los últimos 30 años.
                Actualmente Directora Asociada del grupo INFOMEDIA Consulting,
                especializado en Reputación Corporativa, Comunicación
                Estratégica con Medios y Redes Sociales, Gestión de Crisis y
                Asuntos Públicos. Previamente, vicepresidente de Edelman PR
                Argentina, consultora senior de Porter Novelli Argentina y
                fundadora de Grupo Dimco Comunicación. Miembro de varias
                instituciones como ACDE, Consejo de Fundación Luminis y Enablis
                Argentina, Comisión Cultura CARI y Vice-presidente de IWF,
                International Women Forum Argentina, entre otras.
              </React.Fragment>
            }
          />
          <Integrante
            nombre="Sebastián Mocorrea"
            posicion={
              "Presidente de Argencon y Consultor en Estrategia Corporativa, Comunicaciones y Stakeholder Management"
            }
            imagen={sebastian_mocorrea}
            biografia={
              <React.Fragment>
                Sebastián Mocorrea es consultor en Estrategia Corporativa,
                Comunicaciones y Stakeholder Management. Desde septiembre de
                2020 es, además, presidente de Argencon. Con más de treinta años
                de experiencia corporativa, inició su carrera en los grupos de
                medios de comunicación Clarín y Telefé. Fue presidente de la
                Asociación de Televisión Argentina (ATA). Desarrolló
                posteriormente una extensa carrera en IBM donde comenzó como
                Director de Comunicaciones y Relaciones Externas de IBM
                Latinoamérica Sur. Asumió posteriormente las posiciones de
                Director Regional de IBM Latinoamérica, Vicepresidente de
                Asuntos Públicos y Regulatorios para IBM Europa y Vicepresidente
                de Global Market Support. Entre 2016 y 2020 fue Vicepresidente
                Ejecutivo de Asuntos Corporativos, Marketing y Comunicaciones de
                YPF. En 2018 fue Deputy Chair de la Taskforce on Energy,
                Resource Efficiency and Sustainability (ERES) del B20. Es
                abogado, graduado en la Facultad de Derecho de la Universidad de
                Buenos Aires y licenciado en Ciencias Políticas de la
                Universidad Católica Argentina. Está casado y tiene tres hijos.
              </React.Fragment>
            }
          />
          <Integrante
            nombre="Elena Newkirk"
            posicion={
              "Periodista especializada en comunicación estratégica y políticas públicas"
            }
            imagen={elena_newkirk}
            biografia={
              <React.Fragment>
                Elena Newkirk es licenciada en Periodismo de la Universidad del
                Salvador (USAL) y realizó la maestría en Administración y
                Políticas Públicas de la Universidad de San Andrés (UdeSA), en
                Buenos Aires. Durante más de diez años se dedicó a las noticias
                en su producción televisiva, radial y digital, en medios como
                Todo Noticias, América TV, Radio La Red y Radio Continental. Se
                desempeñó como redactora y editora interina de política en el
                diario La Prensa, de Capital Federal. Fue analista de prensa y
                comunicación en el Ministerio de Asuntos Públicos de la
                Provincia de Buenos Aires durante la gestión de María Eugenia
                Vidal. Y coordinó la comunicación institucional del Centro para
                la Apertura y el Desarrollo de América Latina (CADAL).
              </React.Fragment>
            }
          />
          <Integrante
            nombre="Gonzalo Oliva Beltran"
            posicion={
              "Socio en BARREIRO, OLIVA, DE LUCA, JACA & NICASTRO Abogados"
            }
            imagen={gonzalo_oliva}
            biografia={
              "Gonzalo Oliva Beltrán es socio fundador de Barreiro, Oliva, De Luca, Jaca & Nicastro. Lidera la práctica de Empresas y Tecnología y asesora regularmente a empresas locales e internacionales en aspectos legales vinculados con finanzas, tecnología, regulaciones cambiarias, fusiones y adquisiciones, derecho corporativo, y ONG.Es abogado egresado de la Universidad Católica Argentina, tiene un Máster en Derecho Financiero (LL.M. con honores) por la Universidad de Westminster, y es doctorando por la Universidad Austral. Fue fundador de la Fundación GSF y en la actualidad es miembro del Consejo Directivo de la Asociación Cristiana de Dirigentes de Empresa (ACDE) y de la Sociedad Argentina de Cultura."
            }
          />
          <Integrante
            nombre="Fernando Oris de Roa"
            posicion={"Director de Empresa"}
            imagen={fernando_oris_de_roa}
            biografia={
              <React.Fragment>
                Fernando Oris de Roa es empresario emprendedor en compañías como
                San Miguel y Avex. Director de Orocobre (litio) y otras empresas
                nacionales. Fue Embajador argentino en los Estados Unidos. Tiene
                una maestría en Políticas Públicas de Harvard Kennedy School of
                Government.
              </React.Fragment>
            }
          />
          <Integrante
            nombre="Ana María Pico Aguirre"
            posicion={"Directora Ejecutiva de ACDE"}
            imagen={ana_pico}
            biografia={
              <React.Fragment>
                Ana María Pico Aguirre es ingeniera industrial por la
                Universidad de Buenos Aires (UBA), con un posgrado en Gestión de
                Empresas por la Universidad Católica Argentina (UCA). Es
                Especialista en Organizaciones sin fines de lucro por la
                Universidad de San Andrés, Di Tella y Cedes. Es Directora
                Ejecutiva de ACDE desde abril de 2016, habiendo ingresado en
                2015 como consultor. Colabora con diferentes Organizaciones
                sociales y es miembro del Consejo Directivo de Fundación
                Escolares. Ha desarrollado su carrera en el ámbito empresarial,
                especializándose en Logística y Consultoría de procesos. En
                paralelo, siempre tuvo diferentes roles en distintas
                organizaciones sociales: Asociación Civil María de las Cárceles,
                Fundación Arché y Fundación Red Comunidades Rurales. Fue docente
                en materias de grado de Ingeniería en la UBA, de posgrado de
                UTN- Fundación Andreani y en la Fundación Forge.
              </React.Fragment>
            }
          />
          <Integrante
            nombre="Arturo Simone"
            posicion={"Director General Grupo RDA"}
            imagen={arturo_simone}
            biografia={
              <React.Fragment>
                Arturo Simone posee un MBA del CEM, graduado de la carrera de
                Administración de la Universidad Católica Argentina (UCA), de
                donde es ex alumno destacado. Es CEO y fundador de AWTO
                Argentina. Fundó Grupo RDA (Argentina, Uruguay y Colombia), de
                donde es Director General. Es miembro del Global Fleet Advisory
                Board Latin America. Obtuvo la nominación a Mayor Promesa Forbes
                2019, y fue galardonado Emprendedor Endeavor 2018. Se destacó
                como Board Member de Arval – BNP Paribas Group, Presidente de la
                Cámara de Administradores de Flota de Argentina (CAFLA) y
                miembro consultor de ADEFA. También integró el Latam Mobility
                Lab y es Presidente en Carpro S.A. Además, fue Director de la
                Asociación de Leasing de Argentina, Director The Trade Company
                LLC y Presidente de Subway Argentina. Desde 2016 es miembro de
                la Asociación Cristiana de Dirigentes de Empresa (ACDE) y lidera
                el espacio de ACDE PyME.
              </React.Fragment>
            }
          />
          <Integrante
            nombre="Gonzalo Tanoira"
            posicion={"Presidente de ACDE"}
            imagen={gonzalo_tanoira}
            biografia={
              <React.Fragment>
                Gonzalo Tanoira es licenciado en Administración de Empresas por
                la Universidad de Belgrano, tiene un máster en Business
                Administration de Wharton School. Es vicepresidente de S.A. San
                Miguel, director del Grupo Peñaflor S.A. y del Banco Quilvest.
                Es fundador del Movimiento de Dirigentes Cristianos y cofundador
                de GAM (Generación por una Argentina Mejor). Es miembro del
                Consejo Asesor de la Universidad Austral y del IAE. Ganó el
                Premio LIDE en la categoría Empresario de Agronegocios, el
                Premio Fortuna a la Mejor empresa agroindustrial (2015), el
                Premio Galicia Excelencia Agropecuaria por mejor Gestión
                Ambiental (2017), y el Premio Konex como empresario de la
                agroindustria (2018).
              </React.Fragment>
            }
          />
          <Integrante
            nombre="Victor Valle"
            posicion={
              "Managing Director en Google para los Mercados de Habla Hispana de América Latina"
            }
            imagen={victor_valle}
            biografia={
              <React.Fragment>
                Víctor Valle es un ejecutivo de Google Latinoamérica. En el año
                2006 lideró la apertura de la oficina de Buenos Aires, el tercer
                Headquarter de Google a nivel mundial. Actualmente se desempeña
                como Managing Director para los Mercados de Habla Hispana de
                América Latina, siendo responsable del desarrollo del negocio de
                Google Ads para Startups, PyMEs y Grandes Empresas Emergentes en
                la región. Antes de unirse a Google ejerció roles de liderazgo
                en Sony, Kimberly-Clark, Havas y PricewaterhouseCoopers. Víctor
                es Licenciado en Administración de Empresas y Contador Público
                de la Universidad Católica Argentina, y MBA de IAE Business
                School. Es miembro del Consejo Asesor de la Universidad Austral
                y Profesor de Posgrado en su Facultad de Comunicaciones. Víctor
                está casado y es padre de cuatro hijos.
              </React.Fragment>
            }
          />
          <Integrante
            nombre="Juan Manuel Vaquer"
            posicion={"Abogado y empresario agropecuario"}
            imagen={juan_vaquer}
            biografia={
              <React.Fragment>
                Juan Manuel Vaquer tiene una explotación familiar agropecuaria,
                se desempeña como Of Counsel en el Estudio Jurídico JP
                O´Farrell, integra el Consejo Asesor del Instituto de Ética y
                Transparencia de AmCham Argentina, el Consejo Asesor de la
                Universidad Austral, y lidera la Red de Gobierno Corporativo de
                IDEA. En 1990 ingresó a la empresa DuPont, donde ocupó diversos
                cargos, en América Latina y en Europa, retirándose como
                presidente para América Latina, en mayo de 2019. Presidió la
                Cámara Americana de Comercio en Argentina (AmCham) desde 2013
                hasta junio de 2016, y la Asociación Cristiana de Dirigentes de
                Empresa (ACDE), entre 2017 y 2020. Fue director del Instituto
                para el Desarrollo Empresarial de la Argentina (IDEA), miembro
                de la Comisión Directiva del Consejo Empresario Argentino para
                el Desarrollo Sostenible (CEADS) y presidente del Directorio de
                Aleph Midstream S.A.. Es abogado graduado en la Universidad de
                Buenos Aires (UBA), y con una maestría en Derecho Internacional
                y Comparado en SMU, de Dallas, Texas
              </React.Fragment>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Comision;
