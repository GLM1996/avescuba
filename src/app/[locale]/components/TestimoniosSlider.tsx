
'use client';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaStar } from "react-icons/fa";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/zoom';

const testimonios = [
  {
    nombre: "Ana Rodríguez",
    comentario:
      "Una experiencia maravillosa explorando las aves de Cuba. El sitio es informativo y visualmente hermoso.",
    avatar: "/tours/t1.jpeg",
    calificacion: 5,
  },
  {
    nombre: "Luis Pérez",
    comentario:
      "Me encantó la sección del Zunzuncito, ¡es increíble ver cómo se conserva tanta biodiversidad!",
    avatar: "/tours/t2.jpeg",
    calificacion: 4,
  },
  {
    nombre: "María Gómez",
    comentario:
      "Ideal para principiantes en observación de aves. Las fotos, los sonidos y la información son top.",
    avatar: "/tours/t3.jpeg",
    calificacion: 5,
  },
  {
    nombre: "Ana Rodríguez",
    comentario:
      "Una experiencia maravillosa explorando las aves de Cuba. El sitio es informativo y visualmente hermoso.",
    avatar: "/tours/t1.jpeg",
    calificacion: 5,
  },
  {
    nombre: "Luis Pérez",
    comentario:
      "Me encantó la sección del Zunzuncito, ¡es increíble ver cómo se conserva tanta biodiversidad!",
    avatar: "/tours/t2.jpeg",
    calificacion: 4,
  },
  {
    nombre: "María Gómez",
    comentario:
      "Ideal para principiantes en observación de aves. Las fotos, los sonidos y la información son top.",
    avatar: "/tours/t3.jpeg",
    calificacion: 5,
  },
];

export default function TestimoniosSlider() {
  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-8">
      <h2 className="text-3xl font-bold text-center mb-10">Testimonios de Clientes</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1} // Valor base (móvil)
        breakpoints={{
          768: {
            slidesPerView: 3, // A partir de 768px, muestra 3 slides
          },
        }}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        className="max-w-7xl mx-auto"
      >
        {testimonios.map((t, i) => (
          <SwiperSlide key={i}>
            <div className="bg-white p-6 rounded-2xl shadow text-center">
              <img
                src={t.avatar}
                alt={`Foto de ${t.nombre}`}
                className="w-16 h-16 rounded-full object-cover mx-auto mb-4"
              />
              <p className="font-semibold text-lg">{t.nombre}</p>
              <div className="flex justify-center mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar
                    key={i}
                    className={`w-4 h-4 ${i < t.calificacion ? "text-yellow-500" : "text-gray-300"
                      }`}
                  />
                ))}
              </div>
              <p className="text-gray-600 text-sm">{t.comentario}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
