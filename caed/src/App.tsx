// colocando o bs5 p o projeto
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home.tsx";
import BigFive from "./views/BigFive.tsx";
import Resultado from "./views/Resultado.tsx";
import NotFound from './views/NotFound.tsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/formulario" element={<BigFive />} />
        <Route path="/resultado" element={<Resultado />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
