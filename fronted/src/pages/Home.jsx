import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">📘 "Mi Libro Increíble"</h1>
      <img src="/portada.jpg" alt="Portada del libro" className="mx-auto w-60 mb-4 rounded shadow" />
      <p className="text-lg">Autor: <Link to="/autor" className="text-blue-500 underline">Jane Doe</Link></p>
      <p className="text-lg">Editorial: <Link to="/editorial" className="text-blue-500 underline">Editorial Creativa</Link></p>

      <div className="mt-6 space-x-4">
        <Link to="/detalles" className="px-4 py-2 bg-blue-600 text-white rounded">Detalles</Link>
        <Link to="/fragmento" className="px-4 py-2 bg-green-600 text-white rounded">Leer Fragmento</Link>
        <Link to="/reseñas" className="px-4 py-2 bg-purple-600 text-white rounded">Reseñas</Link>
      </div>
    </div>
  );
}