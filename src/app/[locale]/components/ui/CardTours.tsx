import React, { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

type Tour = {
  id: number;
  nombre: string;
  descripcion: string;
  imagen: string;            // Imagen principal (frontal)
  imagenes: string[];        // Carrusel (reverso)
};

interface CardToursProps {
  tour: Tour;
}

const CardTours: React.FC<CardToursProps> = ({ tour }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="w-full sm:max-w-sm perspective" aria-label={`Tarjeta del tour: ${tour.nombre}`}>
      <div
        className={`relative w-full h-[30rem] transition-transform duration-700 transform-style-preserve-3d ${
          showDetails ? 'rotate-y-180' : ''
        }`}
      >
        {/* Frente de la tarjeta */}
        <div className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden bg-white border border-gray-200 shadow-md flex flex-col">
          <div className="relative h-52 w-full">
            <Image
              src={tour.imagen}
              alt={`Imagen del tour: ${tour.nombre}`}
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-t-xl"
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>

          <div className="flex flex-col flex-1 justify-between p-5">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{tour.nombre}</h3>
              <p className="text-sm italic text-gray-500 mt-2 line-clamp-4">{tour.descripcion}</p>
            </div>

            <button
              onClick={() => setShowDetails(true)}
              className="mt-5 w-full py-2 px-4 bg-yellow-500 text-white text-sm font-medium rounded-lg hover:bg-yellow-600 transition-colors"
            >
              Ver Imágenes
            </button>
          </div>
        </div>

        {/* Reverso de la tarjeta */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-xl bg-white border border-gray-200 shadow-md flex flex-col p-5 overflow-y-auto">
          <div className="flex-1 space-y-4">
            {/* Carrusel de imágenes */}
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              className="rounded-xl"
            >
              {tour.imagenes.map((imgUrl, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={imgUrl}
                    alt={`Imagen del tour ${index + 1}`}
                    className="w-full h-64 object-cover rounded-xl"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mt-4">{tour.nombre}</h3>
              <p className="text-gray-700 text-sm whitespace-pre-line mt-2">{tour.descripcion}</p>
            </div>
          </div>

          <button
            onClick={() => setShowDetails(false)}
            className="mt-5 w-full py-2 px-4 bg-gray-800 text-white text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors"
          >
            Ocultar detalles
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardTours;
