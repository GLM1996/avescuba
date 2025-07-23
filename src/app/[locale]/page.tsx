import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Tours from './components/Tours';

export default function HomePage() {

  return (
    <div>
      <Navbar />
      <Hero />
      <Tours />
      <Gallery />
    </div>
  );
}
/*
[Tours Destacados] ✅
 🟩 Grid de tarjetas (3 por fila en desktop, 1-2 en móvil)
 📸 Imagen del tour
 📍 Ubicación, duración
 💬 Descripción corta
 🔘 Botón “Ver más”

⬇️ OPCIONAL

[Galería de aves o paisajes]
[Testimonios de clientes]
[Mapa con ubicaciones de tours]
[Sección "Sobre nosotros"]
*/