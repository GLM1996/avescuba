"use client"; // React Leaflet requiere estar en cliente

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';

import L from "leaflet";

// Corregir iconos default de Leaflet para Next.js
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const tours: {
  id: number;
  nombre: string;
  posicion: [number, number];  // <-- tuple de dos números
  descripcion: string;
}[] = [
    {
      id: 1,
      nombre: "Tour en La Habana",
      posicion: [23.1136, -82.3666],
      descripcion: "Descubre la Habana Vieja con guías expertos.",
    },
    {
      id: 2,
      nombre: "Tour en Viñales",
      posicion: [22.6773, -83.7117],
      descripcion: "Explora los mogotes y plantaciones de tabaco.",
    },
    {
      id: 3,
      nombre: "Tour en Cienfuegos",
      posicion: [22.1467, -80.4446],
      descripcion: "Conoce la Perla del Sur y su arquitectura colonial.",
    },
  ];


export default function MapaTours() {
  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat py-16 px-4 shadow-lg"
      style={{ backgroundImage: "url('/gallery/gallery1.webp')" }}
      id='locations'
    >
      {/* SVG curve at top (inverted) */}
      <svg
        className="absolute top-0 left-0 w-full pointer-events-none"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        style={{ height: '80px', display: 'block', transform: 'rotate(180deg)' }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#fff"
          //d="M0,30 C360,80 1080,-20 1440,30 L1440,100 L0,100 Z"
          d="M0,50 C360,130 1080,-70 1440,50 L1440,100 L0,100 Z"
        />
      </svg>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 text-center mt-4">
      Ubicaciones de Tours
      </h2>
      <MapContainer
        center={[22.5, -81.0]} // Centro aproximado de Cuba
        zoom={7}
        scrollWheelZoom={false}
        className="mx-auto max-w-7xl h-96 rounded-xl shadow mb-4"
      >
        <TileLayer
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {tours.map((tour) => (
          <Marker key={tour.id} position={tour.posicion}>
            <Popup>
              <strong>{tour.nombre}</strong>
              <p>{tour.descripcion}</p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      {/* SVG curve at bottom */}
      <svg
        className="absolute bottom-0 left-0 w-full pointer-events-none"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        style={{ height: '80px', display: 'block' }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="#fff" d="M0,50 C360,130 1080,-70 1440,50 L1440,100 L0,100 Z" />
      </svg>
    </section>
  );
}
