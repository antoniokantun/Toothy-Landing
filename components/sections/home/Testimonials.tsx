"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { REVIEWS } from "@/lib/constants";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === REVIEWS.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <div className="relative w-full max-w-137.5 mx-auto lg:mx-0">
          <div className="grid grid-cols-2 gap-15">
            <div className="relative h-48 lg:h-56 w-full rounded-tl-[50px] rounded-tr-2xl rounded-bl-2xl rounded-br-2xl overflow-hidden shadow-md">
              <Image src="/images/testimonials/paciente1.jpg" alt="Paciente feliz" fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
            </div>
            <div className="relative h-48 lg:h-56 w-full rounded-2xl overflow-hidden shadow-md translate-y-4 lg:translate-y-8">
              <Image src="/images/testimonials/paciente2.jpg" alt="Doctora amable" fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
            </div>
            <div className="relative h-48 lg:h-56 w-full rounded-2xl overflow-hidden shadow-md -translate-y-4 lg:-translate-y-8">
              <Image src="/images/testimonials/paciente3.jpg" alt="Consulta dental" fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
            </div>
            <div className="relative h-48 lg:h-56 w-full rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-[50px] overflow-hidden shadow-md">
              <Image src="/images/testimonials/paciente4.jpg" alt="Resultado final" fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
            </div>
          </div>
        </div>
        <div className="space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            Lo que dicen nuestros <span className="text-toothy-500">pacientes</span>
          </h2>
          <div className="min-h-45 flex flex-col justify-center">
            {REVIEWS.map((review, index) => (
              <div
                key={review.id}
                className={`transition-opacity duration-500 ease-in-out ${
                  index === currentIndex ? "opacity-100 block" : "opacity-0 hidden"
                }`}
              >
                <p className="text-lg lg:text-xlleading-relaxed italic">
                  &quot;{review.text}&quot;
                </p>
                <p className="mt-6 text-toothy-500 text-lg">
                  {review.author}
                </p>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {REVIEWS.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? "w-4 h-4 bg-toothy-500"
                    : "w-3 h-3 bg-toothy-300 hover:bg-toothy-400"
                }`}
                aria-label={`Ver testimonio ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}