import Link from "next/link";
import { BiCalendar } from "react-icons/bi";
import { ClinicaDentalCombinedSvg } from "./HeroGraphics";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center overflow-visible px-6 lg:px-8 pt-32 md:pt-32 lg:pt-40 pb-10 text-text-main">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full relative z-10">

        <div className="space-y-8 max-w-2xl">
          <div>
            <h1 className="text-5xl lg:text-7xl font-bold leading-none">
              <span className="block ">Tu sonrisa</span>
              <span className="block font-light">en un solo</span>
              <span className="block font-light">lugar</span>
            </h1>
            <div className="w-60 h-2 bg-toothy-500 mt-4 rounded-full"></div>
          </div>
          
          <p className="text-lg max-w-lg leading-relaxed">
            Nos dedicamos a cuidar de ti con un trato honesto y cercano,
            porque tu tranquilidad es tan importante para nosotros como tu salud dental.
          </p>
          
          <Link 
            href="/contacto" 
            className="inline-flex items-center gap-3 bg-toothy-500 text-toothy-100 px-8 py-4 rounded-lg hover:bg-toothy-400 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            <BiCalendar className="text-2xl" />
            <span>Agendar cita</span>
          </Link>
        </div>
        <div className="w-full flex items-center justify-center lg:justify-end mt-10 lg:mt-0">
          <div className="relative w-full max-w-137.5 lg:max-w-162.5">
            <ClinicaDentalCombinedSvg className="w-full h-auto drop-shadow-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}