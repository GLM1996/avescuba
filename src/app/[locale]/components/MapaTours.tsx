"use client"; // React Leaflet requiere estar en cliente

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';

import L from "leaflet";

// Corregir iconos default de Leaflet para Next.js
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const tours = [
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
    <section className="my-12 px-4 sm:px-8 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Ubicaciones de Tours</h2>
      <MapContainer
        center={[22.5, -81.0]} // Centro aproximado de Cuba
        zoom={7}
        scrollWheelZoom={false}
        className="w-full h-96 rounded-xl shadow"
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
    </section>
  );
}
