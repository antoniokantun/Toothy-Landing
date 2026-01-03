import Link from "next/link";
import Image from "next/image";
import { BiRightArrowAlt, BiPhone, BiLogoWhatsapp } from "react-icons/bi";

export default function CallToAction() {
  return (
    <section className="w-full pt-20 pb-28 px-6 lg:px-8 text-text-main">
      <div className="max-w-7xl mx-auto space-y-24">
        <div className="text-center max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold">
            ¿Listo para transformar tu sonrisa?
          </h2>
          <p className="text-lg leading-relaxed">
            Visítanos y descubre instalaciones de vanguardia pensadas en tu comodidad. 
            Deja tu salud dental en manos de expertos y empieza a sonreír con confianza.
          </p>
          
          <Link
            href="/sobre-nosotros"
            className="inline-flex items-center gap-2 bg-toothy-500 hover:bg-toothy-400 text-toothy-100 font-medium px-8 py-3 rounded-lg transition-all shadow-md hover:shadow-lg hover:-translate-y-1"
          >
            <span>Ver instalaciones</span>
            <BiRightArrowAlt className="text-xl" />
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8 text-center lg:text-left">
            <h3 className="text-3xl lg:text-4xl font-bold leading-tight">
              Horarios flexibles: <br />
              <span className="text-toothy-500">Lunes a Sábado</span>
            </h3>
            
            <p className="text-lg leading-relaxed">
              ¡Tu nueva sonrisa te espera! Agenda tu cita hoy mismo y empieza a sonreír con confianza.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a 
                href="tel:+529981234567"
                className="inline-flex items-center justify-center gap-3 bg-toothy-500 hover:bg-toothy-400 text-toothy-100 font-semibold px-6 py-3 rounded-lg transition-colors shadow-md"
              >
                <BiPhone className="text-xl" />
                <span>Llamar</span>
              </a>
              <a 
                href="https://wa.me/529981234567"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold px-6 py-3 rounded-lg transition-colors shadow-md"
              >
                <BiLogoWhatsapp className="text-xl" />
                <span>Whatsapp</span>
              </a>

            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-100 h-100 lg:w-125 lg:h-125">
              <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl">
                <Image
                  src="/images/clinic-interior.jpg" 
                  alt="Instalaciones de Toothy"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw" 
                  className="object-cover"
                />
              </div>
              <div className="absolute top-10 -right-4 w-full h-full rounded-full border-2 border-toothy-300 -z-10 translate-x-4 translate-y-4"></div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}