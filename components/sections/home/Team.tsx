import Image from "next/image";
import { DOCTORS } from "@/lib/constants";


export default function Team() {
  return (
    <section className="w-full py-20 lg:py-28 bg-toothy-100 px-6 lg:px-8 text-text-main">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16 space-y-6 max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold ">
            Médicos especialistas
          </h2>
          <p className="leading-relaxed text-lg">
            En Toothy, nos dedicamos a ofrecer atención odontológica de excelencia en el corazón de Cancún. 
            Nuestro equipo de especialistas está comprometido con tu salud bucal, brindando tratamientos personalizados y de vanguardia.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {DOCTORS.map((doctor, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="relative w-48 h-64 mb-6 overflow-hidden transition-transform duration-300 group-hover:-translate-y-2">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-contain object-bottom"
                />
              </div>
              <div className="space-y-3">
                <h3 className="font-bold text-2xl">
                  {doctor.name}
                </h3>
                <p className="text-m text-toothy-500 font-medium leading-tight px-2">
                  {doctor.role}
                </p>
                <p className="text-s mt-1">
                  {doctor.subRole}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}