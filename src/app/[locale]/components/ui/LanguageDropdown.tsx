'use client';

import { useRouter, usePathname } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import { useTransition, useState } from 'react';

// Importa tus locales desde routing
import { routing } from '@/i18n/routing';

import { FaGlobeAmericas } from 'react-icons/fa';
import { IoChevronDown } from 'react-icons/io5';

// Tipo para locales basado en routing.locales
type Locale = (typeof routing)['locales'][number];

const languageOptions: Record<Locale, { label: string }> = {
  en: { label: 'EN' },
  es: { label: 'ES' }
};

export default function LanguageDropdown() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();
  const [open, setOpen] = useState<boolean>(false);

  const switchLocale = (newLocale: Locale) => {
    setOpen(false);
    if (newLocale !== locale) {
      // Guardar elección del idioma en localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('preferred-locale', newLocale);
      }

      startTransition(() => {
        router.replace(pathname, { locale: newLocale });
      });
    }
  };

  return (
    <div className="relative inline-block text-left z-50">
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center gap-1 px-2 py-1 border border-green-600 dark:border-green-400 bg-white dark:bg-green-950 text-green-800 dark:text-green-100 font-semibold rounded-md shadow-sm hover:bg-green-100 dark:hover:bg-green-900 transition-all text-sm"
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
      >
        <FaGlobeAmericas size={16} />
        {languageOptions[locale]?.label ?? locale}
        <IoChevronDown className="ml-0.5" size={16} />
      </button>


      {open && (
        <div
          className="absolute right-0 mt-2 w-full origin-top-right rounded-md bg-white dark:bg-green-950 border border-green-400 shadow-lg transition-all animate-fade-in"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="language-menu-button"
        >
          {routing.locales.map((loc) => (
            <button
              key={loc}
              onClick={() => switchLocale(loc)}
              className={`flex items-center justify-center w-full px-4 py-2 text-sm text-green-800 dark:text-green-100 hover:bg-green-100 dark:hover:bg-green-800 transition-all ${loc === locale ? 'font-bold' : ''
                }`}
              role="menuitem"
              type="button"
            >
              {languageOptions[loc]?.label ?? loc}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
