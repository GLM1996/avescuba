
'use client';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { GiHummingbird } from "react-icons/gi";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/zoom';

const transporte = [
    {
        avatar: "/car/car1.jpeg",
        alt: "Carro de Frente"
    },
    {
        avatar: "/car/car2.webp",
        alt: "Carro de Lado"
    },    
];

export default function Transporte() {
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
                Transporte
            </h2>

            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={30}
                slidesPerView={1} // Valor base (móvil)
                breakpoints={{
                    768: {
                        slidesPerView: 3, // A partir de 768px, muestra 3 slides
                    },
                }}
                navigation={{
                    nextEl: '.custom-swiper-next',
                    prevEl: '.custom-swiper-prev',
                    disabledClass: 'swiper-button-disabled-custom' // Clase cuando el botón está deshabilitado
                }}
                autoplay={{ delay: 5000 }}
                className="max-w-7xl mx-auto mb-4 relative group"
            >
                {transporte.map((t, i) => (
                    <SwiperSlide key={i}>
                        <div className="bg-white  rounded-2xl shadow text-center">
                            <img
                                src={t.avatar}
                                alt={t.alt}
                                className="w-full h-72 rounded-2xl  object-cover mx-auto mb-4"
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
                {/* SVG curve at bottom */}
            </Swiper>

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
