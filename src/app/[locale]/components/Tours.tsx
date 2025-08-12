"use client";

import toursEs from '../../../data/tours.es.json';
import toursEn from '../../../data/tours.en.json';
import CardTours from './ui/CardTours';
import { motion } from 'framer-motion';
import { CardTourAnimation } from './animations/CardTourAnimation';
import { useLocale, useTranslations } from 'next-intl';

export default function Tours() {
  const t = useTranslations('Tours');
  const locale = useLocale()
  const tours = locale === 'es' ? toursEs : toursEn


  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat py-16 px-4"
      style={{ backgroundImage: "url('/gallery/gallery2.webp')" }}
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
      <div className="max-w-7xl mx-auto mt-20 mb-3">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 text-center">
        {t('title')}
        </h2>

        {/* Grid de tarjetas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {tours.map((tour, index) => (
            <CardTourAnimation key={tour.id} delay={index * 0.15}>
              <CardTours tour={tour} />
            </CardTourAnimation>
          ))}

        </div> 
      </div>
      {/* SVG curve at bottom */}
      <svg
        className="absolute bottom-0 left-0 w-full pointer-events-none"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        style={{ height: '80px', display: 'block' }}
        xmlns="http://www.w3.org/2000/svg"
      >


        <path
          fill="#fff"
          //d="M0,30 C360,80 1080,-20 1440,30 L1440,100 L0,100 Z"
          d="M0,50 C360,130 1080,-70 1440,50 L1440,100 L0,100 Z"
        />
      </svg>
    </section>
  );
}
