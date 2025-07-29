export default function SobreNosotros() {
  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat py-24 px-4 shadow-xl"
      style={{ backgroundImage: "url('/gallery/gallery1.webp')" }}
      id="about"
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

      {/* Contenido */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-10 shadow-lg border border-white/30">
        <div className="md:w-1/2 text-gray-800">
          <h2 className="text-4xl font-extrabold mb-6 leading-tight tracking-tight">
            Sobre Nosotros
          </h2>
          <p className="mb-4 text-base md:text-lg leading-relaxed">
            Somos un equipo apasionado por la naturaleza y la avifauna cubana. Nuestro objetivo es
            ofrecer tours educativos y responsables para que descubras la increíble diversidad de aves
            que habitan nuestra isla.
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            Con años de experiencia y guías expertos, garantizamos una experiencia inolvidable en cada
            recorrido, cuidando el medio ambiente y promoviendo su conservación.
          </p>
        </div>
        <div className="md:w-1/2">
          <div className="w-full aspect-square max-h-72 md:aspect-auto md:h-80">
            <img
              src="/tours/t1.jpeg"
              alt="Nuestro equipo de guías"
              className="rounded-2xl shadow-xl object-cover w-full h-full border-4 border-white"
            />
          </div>
        </div>


      </div>

      {/* SVG curva inferior */}
      <svg
        className="absolute bottom-0 left-0 w-full pointer-events-none"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        style={{ height: '80px' }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="#fff" d="M0,50 C360,130 1080,-70 1440,50 L1440,100 L0,100 Z" />
      </svg>
    </section>
  );
}
