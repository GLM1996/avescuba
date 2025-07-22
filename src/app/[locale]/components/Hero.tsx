import { useTranslations } from 'next-intl';
import React from 'react';

export default function Hero() {
  const t = useTranslations('Hero');

  return (
    <section
      className="relative h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/hero/hero1.webp')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{t('title')}</h1>
        <p className="text-lg md:text-xl max-w-xl mb-6">{t('subtitle')}</p>
        <button className="bg-rose-500 hover:bg-rose-600 text-white font-semibold py-3 px-6 rounded-2xl shadow-md transition duration-300">
          {t('button')}
        </button>
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
