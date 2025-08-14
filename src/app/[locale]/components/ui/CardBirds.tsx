import React, { useState } from 'react';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';

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
}

const CardBirds: React.FC<CardBirdsProps> = ({ bird }) => {
  const [showDetails, setShowDetails] = useState(false);
  const t = useTranslations('CardBirds');

  return (
    <div
      className="w-full sm:max-w-sm perspective transition-transform duration-300 hover:scale-105"
      aria-label={`Tarjeta de ave: ${bird.nombre}`}
    >
      <div
        className={`relative w-full h-[28rem] transition-transform duration-700 transform-style-preserve-3d ${
          showDetails ? 'rotate-y-180' : ''
        }`}
      >
        {/* Frente de la tarjeta */}
        <div className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden bg-white border border-gray-200 shadow-md">
          <div className="relative h-52 w-full">
            <Image
              src={bird.imagen}
              alt={`Imagen del ave cubana ${bird.nombre}`}
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-t-xl"
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>

          <div className="p-5">
            <h3 className="text-lg font-semibold text-gray-900">{bird.nombre}</h3>
            <p className="text-sm italic text-gray-500 mb-2">{bird.cientifico}</p>

            <div className="flex flex-wrap gap-2 mb-3">
              <span className="px-2 py-1 bg-blue-50 text-blue-800 text-xs font-medium rounded-full">
                {bird.tipo}
              </span>
              <span className="px-2 py-1 bg-green-50 text-green-800 text-xs font-medium rounded-full">
                {bird.rareza}
              </span>
            </div>

            {bird.sonido && (
              <div className="mt-4">
                <audio controls className="w-full rounded">
                  <source src={bird.sonido} type="audio/mpeg" />
                  Tu navegador no soporta el elemento de audio.
                </audio>
              </div>
            )}

            <div className="mt-5">
              <button
                onClick={() => setShowDetails(true)}
                className="w-full py-2 px-4 bg-yellow-500 text-white text-sm font-medium rounded-lg hover:bg-yellow-600 transition-colors"
              >
                {t('detailBtn')}
              </button>
            </div>
          </div>
        </div>

        {/* Reverso de la tarjeta */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-xl bg-white border border-gray-200 shadow-md p-5 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{bird.nombre}</h3>
            {bird.descripcion ? (
              <p className="text-gray-700 text-sm">{bird.descripcion}</p>
            ) : (
              <p className="text-gray-500 text-sm italic">Sin descripción disponible.</p>
            )}
          </div>
          <button
            onClick={() => setShowDetails(false)}
            className="mt-5 w-full py-2 px-4 bg-gray-800 text-white text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors"
          >
            {t('backBtn')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardBirds;
