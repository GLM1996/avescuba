export default function Contactame() {
    const telefono = "+5355512345"; // número con código país, sin espacios ni guiones
    const correo = "contacto@tudominio.com";
    const whatsappLink = `https://wa.me/${telefono.replace(/\D/g, "")}`;
    const mailtoLink = `mailto:${correo}`;
  
    return (
      <section className="py-12 px-4 sm:px-8 max-w-4xl mx-auto bg-white rounded-xl shadow-md flex flex-col md:flex-row items-center gap-8 mt-8" id="contact">
        {/* Foto */}
        <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg flex-shrink-0">
          <img
            src="/tours/t2.jpeg"
            alt="Foto de contacto"
            className="object-cover w-full h-full"
          />
        </div>
  
        {/* Información */}
        <div className="flex flex-col gap-4 text-center md:text-left">
          <h2 className="text-3xl font-bold">Contáctame</h2>
  
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 font-semibold flex items-center gap-2 hover:underline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.52 3.48a11.944 11.944 0 00-17.07 17.07l-1.78 5.15 5.15-1.78a11.946 11.946 0 0014.35-14.35zm-7.37 14.21c-2.4 0-4.66-.77-6.54-2.06l-.46-.28-3.1 1.07 1.04-3.02-.3-.48a8.957 8.957 0 01-1.39-5.07c0-4.97 4.04-9.01 9.01-9.01s9.01 4.04 9.01 9.01-4.03 9.01-9.01 9.01z" />
            </svg>
            {telefono}
          </a>
  
          <a
            href={mailtoLink}
            className="text-blue-600 font-semibold hover:underline"
          >
            {correo}
          </a>
  
          {/* Puedes agregar redes sociales aquí si quieres */}
        </div>
      </section>
    );
  }
  