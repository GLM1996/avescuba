"use client";

import { useTranslations } from 'next-intl';
import React from 'react';
import { motion } from 'framer-motion';
import { BackgroundAnimation } from './animations/BackgroundAnimation';

export default function Hero() {
  const t = useTranslations('Hero');

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Animated Background */}

      <BackgroundAnimation
        animation="slide"
        duration={0.5}
        backgroundImage="url('/hero/hero1.webp')"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{t('title')}</h1>
        <p className="text-lg md:text-xl max-w-xl mb-6">{t('subtitle')}</p>
        <a
          href="#contact"
          className="
            bg-gradient-to-r from-green-700 to-green-500
            hover:from-green-600 hover:to-green-400
            text-white font-semibold
            py-3 px-8
            rounded-full
            shadow-lg
            transition
            duration-300
            ease-in-out
            cursor-pointer
            select-none
            focus:outline-none
            focus:ring-4 focus:ring-green-300
          "
        >
          {t('button')}
        </a>
      </motion.div>

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
