// Layout
import Layout from "../layouts/layout-primary";

//components
import Footer from "../components/footer/footer";
// import Hero from "../components/hero/hero";

// Secciones
import Inscripcion from "../sections/home/inscripcion";
import Carta from "../sections/home/carta-presidente";
import Programa from "../sections/home/programa";
const Home = () => {
  return (
    <Layout>
      <Inscripcion />
      <Carta />
      <Programa />
      <Inscripcion />
      <Footer />
    </Layout>
  );
};

export default Home;
