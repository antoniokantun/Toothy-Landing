import Image from "next/image";

const FEATURES = [
  {
    title: "ODONTOLOGÍA DE ALTA PRECISIÓN.",
    description: "Confía tu sonrisa a expertos que utilizan herramientas de diagnóstico digital para brindarte soluciones exactas, minimizando riesgos y asegurando el éxito de tu tratamiento.",
    image: "/images/features/precision-dental.jpg",
  },
  {
    title: "SOLUCIONES DENTALES PERSONALIZADAS.",
    description: "Analizamos tu caso a fondo para ofrecerte un plan de recuperación dental único que se ajuste a tu presupuesto y objetivos de salud.",
    image: "/images/features/soluciones-dentales.jpg",
  },
  {
    title: "TECNOLOGÍA AVANZADA Y MATERIALES PREMIUM.",
    description: "Invertimos en equipos de última generación y utilizamos exclusivamente materiales de alta gama y certificación internacional para asegurar que cada restauración sea estética y duradera.",
    image: "/images/features/tecnologia-dental.jpg",
  },
  {
    title: "EQUIPO MULTIDISCIPLINARIO INTEGRADO.",
    description: "En Toothy no dependes de un solo médico. Un equipo de especialistas (ortodoncistas, endodoncistas y cirujanos) colabora en tu caso para brindarte una solución integral en un solo lugar.",
    image: "/images/features/equipo-dental.jpg",
  },
];

export default function WhyUs() {
  return (
    <section className="w-full py-20 bg-toothy-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold">
            ¿Por qué elegir Toothy?
          </h2>
          <p className="text-lg">
            Descubre lo que nos hace únicos
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, index) => (
            <div 
              key={index}
              className="group bg-toothy-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col gap-4">
                <h3 className="font-bold text-sm  uppercase tracking-wide leading-snug">
                  {feature.title}
                </h3>
                <p className=" text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}