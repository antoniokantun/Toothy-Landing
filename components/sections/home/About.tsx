import Link from "next/link";
import { BiCalendar } from "react-icons/bi";
import { DentistCombinedSvg } from "./AboutGraphics";

export default function About() {
  return (
    <section className="w-full py-20 lg:py-10 bg-toothy-100 px-6 lg:px-8 overflow-hidden text-text-main">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="w-full flex items-center justify-center lg:justify-start">
          <div className="relative w-full max-w-137.5">
             <DentistCombinedSvg className="w-full h-auto drop-shadow-2xl" />
          </div>
        </div>
        <div className="space-y-8">
          <h2 className="text-4xl lg:text-5xl leading-tight">
            <span className="font-bold">Líderes en diagnóstico</span> 
            <span className="block font-light">clínico y salud bucal integral.</span>
          </h2>
          <p className="text-lg leading-relaxed">
            En Toothy, fusionamos experiencia y tecnología para brindarte la mejor atención de Cancún. Contamos con especialistas altamente cualificados en cada rama de la odontología.
          </p>
          <div className="space-y-4 pt-4">
            <h3 className="text-xl font-bold">
              Especialistas certificados por:
            </h3>
            <ul className="space-y-3 font-medium">
              <ListItem>Asociación Dental Mexicana (ADM).</ListItem>
              <ListItem>Consejo Mexicano de Rehabilitación Oral y Maxilofacial.</ListItem>
              <ListItem>Colegio de Cirujanos Dentistas de Cancún.</ListItem>
            </ul>
          </div>
          <div className="pt-6">
            <Link 
              href="/contacto"
              className="inline-flex items-center gap-3 bg-toothy-500 hover:bg-toothy-400 text-toothy-100 font-semibold px-8 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <BiCalendar className="text-2xl" />
              <span>Agendar ahora</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
function ListItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-2 h-2 w-2 rounded-full bg-toothy-500 shrink-0" />
      <span>{children}</span>
    </li>
  );
}