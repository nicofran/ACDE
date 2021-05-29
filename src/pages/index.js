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
const Home = () => {
  return (
    <Layout>
      <Inscripcion />
      <Carta />
      <Programa />
      <Inscripcion />
      <Expositores />
      <Footer />
    </Layout>
  );
};

export default Home;
