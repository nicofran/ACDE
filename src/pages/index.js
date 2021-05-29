// Layout
import Layout from "../layouts/layout-primary";

//components
import Footer from "../components/footer/footer";
// import Hero from "../components/hero/hero";

// Secciones
import Inscripcion from "../sections/home/inscripcion";

const Home = () => {
  return (
    <Layout>
      <Inscripcion />
      <Footer />
    </Layout>
  );
};

export default Home;
