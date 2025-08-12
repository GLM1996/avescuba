'use client';

import { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { useLocale } from 'next-intl';

const numero = '5358353672'; // ← Tu número real
const mensajeEs = 'Hola, estoy interesado en los tours de aves en Cuba';
const mensajeEn = 'Hello, I am interested in birdwatching tours in Cuba.';

const BtnContact = () => {
  const [visible, setVisible] = useState(false);
  const locale = useLocale();
console.log("LOCALE",locale)
  useEffect(() => {
    const mostrarAlHacerScroll = () => {
      setVisible(window.scrollY > 200);
    };

    window.addEventListener('scroll', mostrarAlHacerScroll);
    return () => window.removeEventListener('scroll', mostrarAlHacerScroll);
  }, []);

  if (!visible) return null;
  let mensaje = locale === "es" ? mensajeEs : mensajeEn
  const enlace = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

  return (
    <div className="md:hidden fixed bottom-5 right-5 z-50 flex items-center space-x-2">
      {/* Tooltip visible solo si hay espacio (ej: no en pantallas muy pequeñas) */}
      <div className="hidden sm:flex items-center bg-gray-800 text-white text-sm px-3 py-1 rounded-md shadow-md whitespace-nowrap animate-fade-in">
        Escríbenos por WhatsApp
      </div>

      <a
        href={enlace}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-300"
      >
        <FaWhatsapp className="w-6 h-6" />
      </a>
    </div>
  );
};

export default BtnContact;
