'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Zoom, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/zoom';

type Tour = {
  id: number;
  nombre: string;
  descripcion: string;
  imagen: string;
  imagenes: string[];
};

interface CardToursProps {
  tour: Tour;
}

const CardTours: React.FC<CardToursProps> = ({ tour }) => {
  const [status, setStatus] = useState<'portada' | 'detalles' | 'imagenes'>('portada');

  return (
    <div className="w-full sm:max-w-sm perspective">
      <div
        className={`relative w-full h-[30rem] transition-transform duration-700 transform-style-preserve-3d ${status !== 'portada' ? 'rotate-y-180' : ''
          }`}
      >
        {/* Front - Portada */}
        <div className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden bg-white border border-gray-200 shadow-md flex flex-col">
          <div className="relative h-52 w-full">
            <Image
              src={tour.imagen}
              alt={`Imagen del tour: ${tour.nombre}`}
              fill
              className="object-cover rounded-t-xl"
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>

          <div className="flex flex-col flex-1 justify-between p-5">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{tour.nombre}</h3>
              <p className="text-sm italic text-gray-500 mt-2 line-clamp-4">{tour.descripcion}</p>
            </div>

            <div className="flex gap-3 mt-5">
              <button
                onClick={() => setStatus('detalles')}
                className="w-full py-2 px-4 bg-yellow-500 text-white text-sm font-medium rounded-lg hover:bg-yellow-600"
              >
                Detalles
              </button>
              <button
                onClick={() => setStatus('imagenes')}
                className="w-full py-2 px-4 bg-yellow-500 text-white text-sm font-medium rounded-lg hover:bg-yellow-600"
              >
                Imágenes
              </button>
            </div>
          </div>
        </div>

        {/* Back - Detalles or Imágenes */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-xl bg-white border border-gray-200 shadow-md flex flex-col p-5 overflow-y-auto">
          {status === 'imagenes' ? (
            <div className='flex-1 space-y-4'>
              <Swiper
                modules={[Navigation, Pagination, Zoom, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                zoom={true}
                autoplay={{ delay: 3500, disableOnInteraction: false }}
                className="rounded-xl"
              >
                {tour.imagenes.map((imgUrl, index) => (
                  <SwiperSlide key={index}>
                    <div
                      className="swiper-zoom-container w-full h-64 relative rounded-xl overflow-hidden"
                      style={{ minHeight: '16rem', position: 'relative' }}
                    >
                      <Image
                        src={imgUrl}
                        alt={`Imagen del tour ${index + 1}`}
                        fill
                        className="object-cover cursor-zoom-in"
                        sizes="(max-width: 768px) 100vw, 400px"
                        onClick={(e) => {
                          const el = e.currentTarget.closest('.swiper-slide');
                          if (el?.requestFullscreen) {
                            el.requestFullscreen();
                          }
                        }}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mt-4">{tour.nombre}</h3>
                <p className="text-gray-700 text-sm whitespace-pre-line mt-2">{tour.descripcion}</p>
              </div>
            </div>
          ) : (
            <div className="p-5 flex flex-col justify-between flex-1">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{tour.nombre}</h3>
                <p className="text-sm italic text-gray-500 mt-2">{tour.descripcion}</p>
              </div>
            </div>
          )}

          <div className="flex gap-3 p-5 mt-auto">
            <button
              onClick={() => setStatus('portada')}
              className="w-full py-2 px-4 bg-gray-800 text-white text-sm font-medium rounded-lg hover:bg-gray-600"
            >
              Volver
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTours;

/* <div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-xl bg-white border border-gray-200 shadow-md flex flex-col p-5 overflow-y-auto">

<AnimatePresence mode="wait">
{activeTab === 'imagenes' ? (
  <motion.div
    key="imagenes"
    className="flex-1 space-y-4"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
  >
    
    <Swiper
      modules={[Navigation, Pagination, Zoom, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      zoom={true}
      autoplay={{ delay: 3500, disableOnInteraction: false }}
      className="rounded-xl"
    >
      {tour.imagenes.map((imgUrl, index) => (
        <SwiperSlide key={index}>
          <div
            className="swiper-zoom-container w-full h-64 relative rounded-xl overflow-hidden"
            style={{ minHeight: '16rem', position: 'relative' }}
          >
            <Image
              src={imgUrl}
              alt={`Imagen del tour ${index + 1}`}
              fill
              className="object-cover cursor-zoom-in"
              sizes="(max-width: 768px) 100vw, 400px"
              onClick={(e) => {
                const el = e.currentTarget.closest('.swiper-slide');
                if (el?.requestFullscreen) {
                  el.requestFullscreen();
                }
              }}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>

    <div>
      <h3 className="text-xl font-bold text-gray-900 mt-4">{tour.nombre}</h3>
      <p className="text-gray-700 text-sm whitespace-pre-line mt-2">{tour.descripcion}</p>
    </div>
  </motion.div>
) : (
  <motion.div
    key="descripcion"
    className="flex-1 space-y-4"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
  >
    <h3 className="text-xl font-bold text-gray-900 mt-4">{tour.nombre}</h3>
    <p className="text-gray-700 text-sm whitespace-pre-line mt-2">{tour.descripcion}</p>
    <b>mostrando solo detalles</b>
  </motion.div>
)}
</AnimatePresence>


<div className="mt-5 flex gap-2">
{activeTab === 'imagenes' ? (
  <button
    onClick={() => setActiveTab('descripcion')}
    className="w-full py-2 px-4 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-600 transition-colors"
  >
    Ver descripción
  </button>
) : (
  <button
    onClick={() => setActiveTab('imagenes')}
    className="w-full py-2 px-4 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-600 transition-colors"
  >
    Ver imágenes
  </button>
)}

<button
  onClick={() => setShowDetails(false)}
  className="w-full py-2 px-4 bg-gray-800 text-white text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors"
>
  Volver
</button>
</div>
</div>*/
