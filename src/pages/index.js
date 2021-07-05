// Layout
import Layout from "../layouts/layout-primary";

//Components
import Footer from "../components/footer/footer";
import Hero from "../components/hero/hero";
// import InscribiteFlag from "../components/inscribite-flag/inscribite-flag";

// Secciones
// import Inscripcion from "../sections/home/inscripcion";
// import Carta from "../sections/home/carta-presidente";
import Programa from "../sections/home/programa";
import Expositores from "../sections/home/expositores";
import Comision from "../sections/home/comision-organizadora";
import Auspiciantes from "../sections/home/auspiciantes";
import EncuentrosAnteriores from "../sections/home/encuentros-anteriores";
import Camino from "../sections/home/camino";
import Repercuciones from "../sections/home/repercuciones";

import PalabraBienvenida from "../sections/palabra-bienvenida";
// import Galeria from "../sections/home/galeria";

const Home = () => {
  return (
    <Layout>
      <Hero />
      {/* <InscribiteFlag /> */}
      {/* <Inscripcion /> */}
      <PalabraBienvenida />
      {/* <Carta /> */}
      <Programa />
      {/* <Inscripcion /> */}
      <Expositores />
      <Comision />
      <Auspiciantes />
      {/* <Galeria /> */}
      <Repercuciones />
      <Camino />
      <EncuentrosAnteriores />
      {/* <Inscripcion /> */}
      <Footer />
    </Layout>
  );
};

export default Home;
