import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { useLocale, useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-around items-center gap-6">
        {/* Logo o Nombre */}
        <div className="text-2xl font-bold text-white">CubaAves</div>

        {/* Redes Sociales */}
        {
          /*
           <div className="flex gap-6 text-gray-400">
            <a
              href="https://facebook.com/tu-pagina"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
              aria-label="Facebook"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://twitter.com/tu-pagina"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
              aria-label="Twitter"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://instagram.com/tu-pagina"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </a>
          </div>
           */
        }
      </div>

      <div className="text-center text-gray-500 text-sm mt-6">
        &copy; {new Date().getFullYear()} {t('copyright')}
      </div>
    </footer>
  );
}
