import { useTranslations } from 'next-intl';
import React from 'react';

export default  function Hero() {
  const t = useTranslations('Hero')
  return (
    <section className="relative h-screen w-full bg-cover bg-center" style={{ backgroundImage: "url('/hero/hero1.jpg')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
        {t('title')}
        </h1>
        <p className="text-lg md:text-xl max-w-xl mb-6">
        {t('subtitle')}
        </p>
        <button className="bg-rose-500 hover:bg-rose-600 text-white font-semibold py-3 px-6 rounded-2xl shadow-md transition duration-300">
        {t('button')}
        </button>
      </div>
    </section>
  );
}
