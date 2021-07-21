// Pages
import Home from "./pages/index";
import Carta from "./pages/carta-presidente";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/carta-presidente" component={Carta} />
      {/* … */}
    </Router>
  );
};

export default App;
