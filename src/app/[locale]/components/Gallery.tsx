"use client";

import { useState } from 'react';
import birds from '../../../data/birds.es.json';
import CardBirds from './ui/CardBirds';

export default function Gallery() {
  const [filters, setFilters] = useState({
    region: '',
    epoca: '',
    tipo: '',
  });

  const filteredBirds = birds.filter(bird =>
    (!filters.region || bird.region.includes(filters.region)) &&
    (!filters.epoca || bird.epoca.includes(filters.epoca)) &&
    (!filters.tipo || bird.tipo === filters.tipo)
  );

  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat py-16 px-4"
      style={{ backgroundImage: "url('/gallery/gallery1.webp')" }}
      id='gallery'
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
      <div className="max-w-7xl mx-auto mt-20 mb-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 text-center">
          Galería de Aves de Cuba
        </h2>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-10">
          <select
            onChange={(e) => setFilters({ ...filters, region: e.target.value })}
            className="px-4 py-2 rounded-lg bg-white text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            <option value="">Todas las regiones</option>
            <option value="Occidente">Occidente</option>
            <option value="Centro">Centro</option>
            <option value="Oriente">Oriente</option>
          </select>

          <select
            onChange={(e) => setFilters({ ...filters, epoca: e.target.value })}
            className="px-4 py-2 rounded-lg bg-white text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            <option value="">Todas las épocas</option>
            <option value="Invierno">Invierno</option>
            <option value="Verano">Verano</option>
          </select>

          <select
            onChange={(e) => setFilters({ ...filters, tipo: e.target.value })}
            className="px-4 py-2 rounded-lg bg-white text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            <option value="">Todos los tipos</option>
            <option value="Endémica">Endémica</option>
            <option value="Migratoria">Migratoria</option>
          </select>
        </div>

        {/* Grid de tarjetas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredBirds.map((bird) => (
            <CardBirds key={bird.id} bird={bird} />
          ))}
        </div>

        {/* Sin resultados */}
        {filteredBirds.length === 0 && (
          <p className="text-center text-gray-600 mt-10 text-lg">
            No se encontraron aves con esos filtros.
          </p>
        )}
      </div>
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
