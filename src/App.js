// Pages
import Home from "./pages/index";
import Carta from "./pages/carta-presidente";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
      <Router>
      <Route path="/" exact>
        <Home/>
      <Route/>
      <Route path="/carta-presidente">
        <Carta/>
      <Route/>
  );
};

export default App;
