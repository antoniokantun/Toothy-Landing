import Link from "next/link";
import { BiCalendar } from "react-icons/bi";
import {
    Vector2Blob,
    EllipseVector,
    ClinicaImageSvg
} from "./HeroGraphics";

export default function Hero() {
    return (
        <section className="relative w-full min-h-[90vh] flex items-center overflow-visible px-6 lg:px-8 pt-32 md:pt-32 lg:pt-20 pb-10">
            <div className="max-w-7xl mx-5 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full relative z-10">

                <div className="space-y-8 max-w-2xl">
                    <div>
                        <h1 className="text-5xl lg:text-7xl font-bold leading-none">
                            <span className="block">Tu sonrisa</span>
                            <span className="block font-light">en un solo</span>
                            <span className="block font-light">lugar</span>
                        </h1>
                        <div className="w-60 h-2 bg-toothy-500 mt-4"></div>
                    </div>
                    <p className="text-lg max-w-lg">
                        Nos dedicamos a cuidar de ti con un trato honesto y cercano,
                        porque tu tranquilidad es tan importante para nosotros como tu salud dental.
                    </p>
                    <Link href="/contacto" className="inline-flex items-center gap-3 bg-toothy-500 text-toothy-100 px-8 py-4 rounded-lg hover:bg-toothy-400 transition-all">
                        <BiCalendar className="text-2xl" />
                        <span>Agendar cita</span>
                    </Link>
                </div>

                <div className="relative h-80 md:h-125 w-full flex items-center justify-center lg:justify-end mt-10 lg:mt-0">
                    <div className="relative w-72 h-96 md:w-112.5 md:h-150 lg:w-96 lg:h-125 xl:w-112.5 xl:h-150">
                        <div className="absolute top-5 -left-2 md:-left-30 w-full h-full z-10 animate-pulse-slow">
                            <EllipseVector className="w-52 h-full md:w-full" />
                        </div>
                        <div className="absolute top-0 right-0 md:right-25 w-full h-full z-30">
                            <ClinicaImageSvg className="w-full md:w-[130%] h-full drop-shadow-2xl" />
                        </div>
                        <div className="absolute top-4 md:right-15 w-full h-full z-20 pointer-events-none">
                            <Vector2Blob className="w-full h-full" />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}