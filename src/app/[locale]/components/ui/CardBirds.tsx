import React from 'react';
import Image from 'next/image';

type Bird = {
    id: number;
    nombre: string;
    cientifico: string;
    region: string[];
    epoca: string[];
    imagen: string;
    sonido?: string;
    tipo: string;
    rareza: string;
    descripcion?: string;
};

interface CardBirdsProps {
    bird: Bird;
    onDetailsClick?: (bird: Bird) => void; // Callback opcional para el botón
}

const CardBirds: React.FC<CardBirdsProps> = ({ bird, onDetailsClick }) => {
    return (
        <div
            className="w-full sm:max-w-sm rounded-xl overflow-hidden bg-white border border-gray-200 shadow-md hover:shadow-xl transform hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300"
            aria-label={`Tarjeta de ave: ${bird.nombre}`}
        >
            {/* Imagen del ave */}
            <div className="relative h-52 w-full">
                <Image
                    src={bird.imagen}
                    alt={`Imagen del ave cubana ${bird.nombre}`}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-t-xl transition-transform duration-300 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 400px"
                />
            </div>


            {/* Contenido */}
            <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900">{bird.nombre}</h3>
                <p className="text-sm italic text-gray-500 mb-2">{bird.cientifico}</p>

                {/* Etiquetas */}
                <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 bg-blue-50 text-blue-800 text-xs font-medium rounded-full">
                        {bird.tipo}
                    </span>
                    <span className="px-2 py-1 bg-green-50 text-green-800 text-xs font-medium rounded-full">
                        {bird.rareza}
                    </span>
                </div>

                {/* Descripción */}
                {bird.descripcion && (
                    <p className="text-gray-700 text-sm line-clamp-3">
                        {bird.descripcion}
                    </p>
                )}

                {/* Sonido del ave */}
                {bird.sonido && (
                    <div className="mt-4">
                        <audio controls className="w-full rounded">
                            <source src={bird.sonido} type="audio/mpeg" />
                            Tu navegador no soporta el elemento de audio.
                        </audio>
                    </div>
                )}

                {/* Botón de detalles */}
                <div className="mt-5">
                    <button
                        onClick={() => onDetailsClick?.(bird)}
                        className="w-full py-2 px-4 bg-yellow-500 text-white text-sm font-medium rounded-lg hover:bg-yellow-600 transition-colors"
                        aria-label={`Ver detalles de ${bird.nombre}`}
                    >
                        Ver detalles
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CardBirds;
