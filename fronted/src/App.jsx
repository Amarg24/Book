import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detalles from "./pages/Detalles";
import Autor from "./pages/Autor";
import Editorial from "./pages/Editorial";
import Fragmento from "./pages/Fragmento";
import Reseñas from "./pages/Reseñas";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detalles" element={<Detalles />} />
        <Route path="/autor" element={<Autor />} />
        <Route path="/editorial" element={<Editorial />} />
        <Route path="/fragmento" element={<Fragmento />} />
        <Route path="/reseñas" element={<Reseñas />} />
      </Routes>
    </Router>
  );
}