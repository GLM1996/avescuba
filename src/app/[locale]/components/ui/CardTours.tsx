'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Zoom, Autoplay, Scrollbar } from 'swiper/modules';
import { GiHummingbird } from "react-icons/gi";
import { useTranslations } from 'next-intl';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/zoom';

type Tour = {
  id: number;
  nombre: string;
  dificultad: string;
  recorrido: string;
  horario: string;
  meses: string;
  caracteristicas: string[];
  descripcion: string;
  imagen: string;
  imagenes: string[];
};

interface CardToursProps {
  tour: Tour;
}

const CardTours: React.FC<CardToursProps> = ({ tour }) => {
  const [status, setStatus] = useState<'portada' | 'detalles' | 'imagenes'>('portada');
  const t = useTranslations('CardTours');
 
  const getTranslate = () => {
    switch (status) {
      case 'portada':
        return 'translate-x-0';
      case 'detalles':
        return '-translate-x-[100%]';
      case 'imagenes':
        return '-translate-x-[200%]';
      default:
        return 'translate-x-0';
    }
  };

  return (
    <div className="relative w-full sm:max-w-sm h-[28rem] overflow-hidden rounded-xl border border-gray-200 shadow-md hover:scale-105 transition-transform duration-300">
      <div
        className={`flex flex-row h-full w-full transition-transform duration-500 ease-in-out ${getTranslate()}`}
      >
        {/* Portada */}
        <div className="w-full shrink-0 h-full bg-white flex flex-col">
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
            <div className="space-y-3">
              <h3 className="font-bold text-gray-900 tracking-tight">{tour.nombre}</h3>
              <div className="flex justify-between gap-2 flex-wrap text-xs">
                <span className="px-2.5 py-1 rounded-full font-semibold bg-emerald-100 text-emerald-800 shadow-sm">
                  {tour.dificultad}
                </span>
                <span className="px-2.5 py-1 rounded-full font-semibold bg-emerald-100 text-emerald-800 shadow-sm">
                  {tour.recorrido}
                </span>
                <span className="px-2.5 py-1 rounded-full font-semibold bg-emerald-100 text-emerald-800 shadow-sm">
                  {tour.horario}
                </span>
                <span className="px-2.5 py-1 rounded-full font-semibold bg-emerald-100 text-emerald-800 shadow-sm">
                  {tour.meses}
                </span>
              </div>
            </div>

            <div className="flex gap-3 mt-5">
              <button
                onClick={() => setStatus('detalles')}
                className="w-full py-2 px-4 bg-green-950 border-green-400 border-3 text-white text-sm font-medium rounded-lg hover:bg-green-800"
              >
                {t('detailBtn')}
              </button>
              <button
                onClick={() => setStatus('imagenes')}
                className="w-full py-2 px-4 bg-green-950 border-green-400 border-3 text-white text-sm font-medium rounded-lg hover:bg-green-800"
              >
                {t('imgBtn')}
                
              </button>
            </div>
          </div>
        </div>

        {/* Detalles */}
        <div className="w-full shrink-0 h-full bg-white flex flex-col">
          <div className="flex-1 overflow-y-auto p-5">
            <h3 className="text-lg font-semibold text-gray-900">{tour.nombre}</h3>
            <p className="text-sm italic text-gray-600 mt-2">{tour.descripcion}</p>
          </div>
          <div className="p-5 border-t border-gray-200">
            <button
              onClick={() => setStatus('portada')}
              className="w-full py-2 px-4 bg-gray-800 text-white text-sm font-medium rounded-lg hover:bg-gray-600"
            >
              {t('backBtn')}
            </button>
          </div>
        </div>

        {/* Imágenes */}
        <div className="w-full shrink-0 h-full bg-white flex flex-col">
          {/* Contenedor que se expande */}
          <div className="flex-1 overflow-y-auto flex relative">
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation={{
                nextEl: '.custom-swiper-next',
                prevEl: '.custom-swiper-prev',
                disabledClass: 'swiper-button-disabled-custom' // Clase cuando el botón está deshabilitado
              }}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              className="w-full h-full rounded-xl relative group" // Added 'group' para efectos hover
            >
              {tour.imagenes.map((imgUrl, index) => (
                <SwiperSlide key={index}>
                  <div className="relative w-full h-full">
                    <Image
                      src={imgUrl}
                      alt={`Imagen del tour ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 400px"
                      quality={70}
                    />
                  </div>
                </SwiperSlide>
              ))}

              {/* Botón Next personalizado con GiHummingbird */}
              <div className="custom-swiper-next absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-white/80 rounded-full cursor-pointer hover:bg-white hover:scale-110 transform transition-all">
                <GiHummingbird className="text-2xl text-green-600 rotate-45 size-10" />
              </div>
              {/* Botón Prev personalizado con GiHummingbird (rotado) */}
              <div className="custom-swiper-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-white/80 rounded-full cursor-pointer hover:bg-white hover:scale-110 transform transition-all">
                <GiHummingbird className="text-2xl text-green-600 -rotate-30 scale-x-[-1] size-10" />
              </div>
            </Swiper>
          </div>

          {/* Botón inferior */}
          <div className="p-5 border-t border-gray-200 mt-1">
            <button
              onClick={() => setStatus('portada')}
              className="w-full py-2 px-4 bg-gray-800 text-white text-sm font-medium rounded-lg hover:bg-gray-600"
            >
              {t('backBtn')}
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
