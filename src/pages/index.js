// Layout
import Layout from "../layouts/layout-primary";

//components
import Footer from "../components/footer/footer";
// import Hero from "../components/hero/hero";

// Secciones
import Inscripcion from "../sections/home/inscripcion";
import Carta from "../sections/home/carta-presidente";

const Home = () => {
  return (
    <Layout>
      <Inscripcion />
      <Carta />
      <Footer />
    </Layout>
  );
};

export default Home;
