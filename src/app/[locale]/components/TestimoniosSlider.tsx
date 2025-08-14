
'use client';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import { useLocale, useTranslations } from 'next-intl';
import customersEs from '../../../data/customer.es.json';
import customersEn from '../../../data/customer.en.json';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/zoom';



export default function TestimoniosSlider() {
  const t = useTranslations('TestimoniosSlider');
  const locale = useLocale()
  const testimonios = locale === 'es' ? customersEs : customersEn
  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat py-16 px-4 shadow-lg"
      style={{ backgroundImage: "url('/gallery/gallery1.webp')" }}
      id='testimonials'
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
        {t('title')}
      </h2>
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
        className="max-w-7xl mx-auto mb-4"
      >
        {testimonios.map((t, i) => (
          <SwiperSlide key={i}>
            <div className="bg-white p-6 rounded-2xl shadow text-center">
              <img
                src={t.avatar}
                alt={`Foto de ${t.nombre}`}
                className="w-16 h-16 rounded-full object-cover mx-auto mb-4"
              />
              <p className="font-semibold text-lg text-gray-800">{t.nombre}</p>
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
