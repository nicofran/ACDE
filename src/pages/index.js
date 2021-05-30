// Layout
import Layout from "../layouts/layout-primary";

//components
import Footer from "../components/footer/footer";
// import Hero from "../components/hero/hero";

// Secciones
import Inscripcion from "../sections/home/inscripcion";
import Carta from "../sections/home/carta-presidente";
import Programa from "../sections/home/programa";
import Expositores from "../sections/home/expositores";
import Comision from "../sections/home/comision-organizadora";
import Auspiciantes from "../sections/home/auspiciantes";
const Home = () => {
  return (
    <Layout>
      <Inscripcion />
      <Carta />
      <Programa />
      <Inscripcion />
      <Expositores />
      <Comision />
      <Auspiciantes />
      <Footer />
    </Layout>
  );
};

export default Home;
