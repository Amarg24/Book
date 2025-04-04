import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "1rem", backgroundColor: "#eee" }}>
      <Link to="/" style={{ margin: "0 1rem" }}>Inicio</Link>
      <Link to="/detalles" style={{ margin: "0 1rem" }}>Detalles</Link>
      <Link to="/autor" style={{ margin: "0 1rem" }}>Autor</Link>
      <Link to="/fragmento" style={{ margin: "0 1rem" }}>Fragmento</Link>
    </nav>
  );
}