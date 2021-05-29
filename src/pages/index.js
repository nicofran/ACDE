// Layout
import Layout from "../layouts/layout-primary";

//components
import Footer from "../components/footer/footer";
import Hero from "../components/hero/hero";

// Secciones

//aca voy a importar todas las secciones de mi pagina

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Footer />
    </Layout>
  );
};

export default Home;
