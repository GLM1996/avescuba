"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ImMenu } from "react-icons/im";
import { IoClose } from "react-icons/io5";
import { useTranslations, useLocale } from 'next-intl';
import LanguageDropdown from './ui/LanguageDropdown';

export default function Navbar() {
    const t = useTranslations('Navbar');
    const locale = useLocale();

    const [selected, setSelected] = useState("home");
    const [menuOpen, setMenuOpen] = useState(false);

    const links = [
        { id: "home", label: t("home") },
        { id: "tours", label: t("tours") },
        { id: "gallery", label: t("gallery") },
        { id: "testimonials", label: t("testimonials") },
        { id: "locations", label: t("locations") },
        { id: "about", label: t("about") },
        { id: "contact", label: t("contact") },
    ];


    return (
        <nav className="fixed top-0 left-0 z-50 w-full h-20 px-4 flex justify-between items-center 
                    bg-black/30 backdrop-blur-sm text-white shadow-md">
            <Image
                src="/logo4.webp"
                width={64}
                height={64}
                alt="Logo"
                className="rounded-full"
                priority
            />

            {/* Menú escritorio */}
            <ul className="hidden md:flex gap-6 items-center font-semibold">
                {links.map(({ id, label }) => (
                    <li key={id}>
                        <Link
                            href={`#${id}`}
                            onClick={() => setSelected(id)}
                            className={`cursor-pointer hover:text-white/70 transition ${selected === id ? "underline text-white" : ""}`}
                           
                        >
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>
            <LanguageDropdown />

            {/* Botón menú móvil */}
            <div className="md:hidden z-50">
                <button
                    aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
                    onClick={() => setMenuOpen(!menuOpen)}
                    className='cursor-pointer'
                >
                    {menuOpen ? <IoClose size={28} /> : <ImMenu size={28} />}
                </button>
            </div>

            {/* Menú móvil */}
            {/* 
            bg-gradient-to-b from-green-800 via-emerald-600 to-sky-500
            bg-gradient-to-b from-yellow-300 via-orange-400 to-rose-500
            bg-gradient-to-b from-lime-700 via-green-500 to-teal-400
            bg-gradient-to-b from-amber-800 via-lime-700 to-green-500
            backdrop-blur-sm bg-gradient-to-b from-green-900/80 via-green-600/70 to-sky-500/70

            */}
            {menuOpen && (
                <div className="fixed top-0 left-0 w-2/3 h-screen backdrop-blur-sm bg-gradient-to-b from-green-800/90 via-emerald-600/90 to-sky-500/90 z-[60] md:hidden flex flex-col items-center py-20 gap-6
">
                    <Image
                        src="/logo4.jpg"
                        width={64}
                        height={64}
                        alt="Logo"
                        className="rounded-full"
                    />
                    <ul className="flex flex-col items-center gap-6 text-white w-full px-4">
                        {links.map(({ id, label }) => (
                            <li key={id} className="w-full text-center">
                                <Link
                                    href={`#${id}`}
                                    onClick={() => {
                                        setSelected(id);
                                        setMenuOpen(false);
                                    }}
                                    className={`block w-full font-semibold hover:text-white/75 transition ${selected === id ? 'underline' : ''}`}
                                    locale={locale}
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
}
