// Pages
import Home from "./pages/index";
import Carta from "./pages/carta-presidente";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router basename={'/acde2021'}>
      <Route path="/carta-presidente">
        <Carta/>
      </Route>
      <Route path="/hola-hola">
        <Carta/>
      </Route>
      <Route path="/" exact>
        <Home/>
      </Route>
 <redirect to='/'/>
    </Router>
  );
};

export default App;
