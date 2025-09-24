"use client"

import { FaWhatsapp, FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import {  useTranslations } from 'next-intl';

export default function Contactame() {
  const t = useTranslations('Contactame');
  const contacts = [
    {
      icon: <FaWhatsapp className="w-6 h-6 text-green-500" />,
      label: "WhatsApp",
      link: "https://wa.me/5358353672",
      display: "+53 58353672",
    },
    /*{
      icon: <FaEnvelope className="w-6 h-6 text-purple-600" />,
      label: "Email",
      link: "mailto:estrellaglm96@gmail.com",
      display: "estrellaglm96@gmail.com",
    },*/
    {
      icon: <FaPhone className="w-6 h-6 text-blue-600" />,
      label: "Teléfono",
      link: "tel:+5358353672",
      display: "+53 58353672",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat py-24 px-4 shadow-xl"
      style={{ backgroundImage: "url('/gallery/gallery1.webp')" }}
      id="contact"
    >
      {/* SVG curva superior invertida */}
      <svg
        className="absolute top-0 left-0 w-full pointer-events-none"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        style={{ height: '80px', transform: 'rotate(180deg)' }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#fff"
          d="M0,50 C360,130 1080,-70 1440,50 L1440,100 L0,100 Z"
        />
      </svg>

      <div className="py-6 mx-4 sm:py-12 px-6 sm:px-20 text-gray-800 font-bold bg-white/90 backdrop-blur-sm my-6 max-w-6xl md:mx-auto rounded-2xl">

        <h2 className="text-3xl font-bold text-center my-12">{t('title')}</h2>
        <div className="max-w-6xl  flex flex-col md:flex-row mx-auto items-center justify-around">

          {/* Imagen */}
          <motion.img
            src="/hero/hero1.webp"
            alt="Contacto"
            className="w-48 h-48 md:w-64 md:h-64 rounded-full shadow-2xl object-cover"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.3 }}
            viewport={{ once: true }}
          />

          {/* Contenido */}
          <motion.div
            className="flex flex-col gap-6 mt-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <ul className="flex flex-col gap-6">
              {contacts.map(({ icon, label, link, display }) => (
                <motion.li key={label} variants={itemVariants}>
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 hover:text-gray-400 transition"
                  >
                    {icon}
                    <span className="text-lg">{display}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

      </div>

    </section>
  );
}
