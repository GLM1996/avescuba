import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Tours from './components/Tours';
import BtnContact from './components/ui/BtnContact';
import TestimoniosSlider from './components/TestimoniosSlider';
import MapaToursClient from './components/MapaToursClient';
import Transporte from './components/Transporte';
import SobreNosotros from "./components/SobreNosotros";
import Contactame from './components/Contactame';
import Footer from './components/Footer';


export default function HomePage() {

  return (
    <div>
      <Navbar />
      <Hero />
      <Tours />
      <Gallery />
      <BtnContact/>
      <TestimoniosSlider/>
      <MapaToursClient/>
      <SobreNosotros/>
      <Transporte/>
      <Contactame/>
      <Footer/>
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