export default function SobreNosotros() {
    return (
        <section className="bg-gray-900">
            <div className="py-12 px-4 sm:px-8 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
                <div className="md:w-1/2">
                    <h2 className="text-3xl font-bold mb-4">Sobre Nosotros</h2>
                    <p className="text-gray-700 mb-4">
                        Somos un equipo apasionado por la naturaleza y la avifauna cubana. Nuestro objetivo es
                        ofrecer tours educativos y responsables para que descubras la increíble diversidad de aves
                        que habitan nuestra isla.
                    </p>
                    <p className="text-gray-700">
                        Con años de experiencia y guías expertos, garantizamos una experiencia inolvidable en cada
                        recorrido, cuidando el medio ambiente y promoviendo su conservación.
                    </p>
                </div>
                <div className="md:w-1/2">
                    <img
                        src="/tours/t1.jpeg"
                        alt="Nuestro equipo de guías"
                        className="rounded-xl shadow-lg object-cover w-full h-64 md:h-80"
                    />
                </div>
            </div>
        </section>
    );
}
