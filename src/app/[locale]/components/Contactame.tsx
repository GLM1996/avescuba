export default function Contactame() {
  const telefono = "+5355512345";
  const correo = "contacto@tudominio.com";
  const whatsappLink = `https://wa.me/${telefono.replace(/\D/g, "")}`;
  const mailtoLink = `mailto:${correo}`;

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

      <div className="max-w-3xl mx-auto flex flex-col items-center gap-8 bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/40 text-gray-800 text-center">
        {/* Foto circular */}
        <div className="w-36 h-36 rounded-full overflow-hidden shadow-xl border-4 border-white">
          <img
            src="/tours/t2.jpeg"
            alt="Foto de contacto"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Información */}
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="text-4xl font-extrabold leading-tight">Contáctame</h2>

          <div className="flex flex-col gap-2">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-green-600 font-semibold hover:underline"
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
              className="text-blue-600 font-semibold hover:underline break-all"
            >
              {correo}
            </a>
          </div>
        </div>

      </div>
      
    </section>
  );
}
