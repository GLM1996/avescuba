"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ImMenu } from "react-icons/im";
import { IoClose } from "react-icons/io5";
import { useTranslations, useLocale } from 'next-intl';

export default function Navbar() {
    const t = useTranslations('Navbar');
    const locale = useLocale();

    const [selected, setSelected] = useState("inicio");
    const [menuOpen, setMenuOpen] = useState(false);

    const links = [
        { id: "inicio", label: t("inicio") },
        { id: "sobre", label: t("sobre") },
    ];

    const toggleLanguage = () => {
        const newLocale = locale === 'es' ? 'en' : 'es';
    };

    return (
        <nav className="fixed top-0 left-0 z-50 w-full h-20 px-4 flex justify-between items-center 
                    bg-black/30 backdrop-blur-sm text-white shadow-md">
            <Image
                src="/logo4.jpg"
                width={64}
                height={64}
                alt="Logo"
                className="rounded-full"
            />

            {/* Menú escritorio */}
            <ul className="hidden md:flex gap-6 items-center font-semibold">
                {links.map(({ id, label }) => (
                    <li key={id}>
                        <Link
                            href={`#${id}`}
                            onClick={() => setSelected(id)}
                            className={`cursor-pointer hover:text-white/70 transition ${selected === id ? "underline text-white" : ""}`}
                            locale={locale}
                        >
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>
                <button onClick={() => {
                }} className="hidden md:block text-white text-sm">
                    ES
                </button>

            {/* Botón menú móvil */}
            <div className="md:hidden z-50">
                <button
                    aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <IoClose size={28} /> : <ImMenu size={28} />}
                </button>
            </div>

            {/* Menú móvil */}
            {menuOpen && (
                <div className="fixed top-0 left-0 w-2/3 h-screen bg-green-800/90 z-[60] md:hidden flex flex-col items-center py-20 gap-6">
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
                        <li>
                            <button onClick={() => {
                            }} className="underline text-white text-sm">
                                ES
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}
