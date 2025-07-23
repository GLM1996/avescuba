// components/BotonWhatsapp.tsx
import { FaWhatsapp } from 'react-icons/fa';

const BtnContact = () => {
  return (
    <a
      href="https://wa.me/5358524424?text=Hola,%20estoy%20interesado%20en%20los%20tours%20de%20aves%20en%20Cuba"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all"
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp className="w-6 h-6" />
    </a>
  );
};

export default BtnContact;
