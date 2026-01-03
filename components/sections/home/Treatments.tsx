import Image from "next/image";
import Link from "next/link";
import { BiRightArrowAlt } from "react-icons/bi";
import { TREATMENTS } from "@/lib/constants";

export default function Treatments() {
  return (
    <section className="w-full py-20 bg-toothy-400/30 text-text-main">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold">
            Tratamientos
          </h2>
          <p className="text-lg">
            Todos los tratamientos que necesitas en un solo lugar
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-center">
          {TREATMENTS.map((item, index) => (
            <TreatmentCard key={index} data={item} />
          ))}
        </div>
        <div className="mt-16 flex justify-center">
          <Link
            href="/tratamientos"
            className="inline-flex items-center gap-2 bg-toothy-500 text-white font-medium px-8 py-3 rounded-lg hover:bg-toothy-400 transition-all shadow-md hover:shadow-lg hover:-translate-y-1"
          >
            <span>Ver todos los tratamientos</span>
            <BiRightArrowAlt className="text-xl" />
          </Link>
        </div>

      </div>
    </section>
  );
}

function TreatmentCard({ data }: { data: { title: string; image: string; link: string } }) {
  return (
    <div className="bg-toothy-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center pb-6 h-full">

      <div className="relative w-full h-40 overflow-hidden">
        <Image
          src={data.image}
          alt={data.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 25vw, 20vw" 
          className="object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

      <h3 className="text-gray-900 font-bold text-center mt-4 px-4 h-12 flex items-center justify-center text-sm leading-tight">
        {data.title}
      </h3>
      <Link
        href={data.link}
        className="mt-2 bg-toothy-500/90 text-toothy-100 text-xs font-medium py-2 px-6 rounded-full hover:bg-toothy-500 transition-colors"
      >
        Saber mas
      </Link>
    </div>
  );
}