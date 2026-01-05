"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BiLoaderAlt, BiCheckCircle, BiSend } from "react-icons/bi";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { leadSchema, LeadFormValues } from "@/lib/schemas";
import { createLeadAction } from "@/lib/actions";
import { formatPhone } from "@/lib/phoneUtils";

export default function ContactForm() {

  const [serverError, setServerError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [phoneDisplay, setPhoneDisplay] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
  } = useForm<LeadFormValues>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      nombre: "", apellido: "", email: "", telefono: "", notas: ""
    }
  });

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { formatted, raw } = formatPhone(e.target.value);
  setPhoneDisplay(formatted);
  setValue("telefono", raw, { shouldValidate: true });
};

  const onSubmit = async (data: LeadFormValues) => {
    setServerError(null);

    const response = await createLeadAction(data);

    if (response.success) {
      setIsSuccess(true);
      reset();
      setPhoneDisplay("");
    } else {
      setServerError(response.error || "Ocurrió un error inesperado.");
    }
  };

  return (
    <section id="contacto" className="w-full py-20 bg-toothy-500 px-6 lg:px-8 relative overflow-hidden">

      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-toothy-300 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">

        <div className="space-y-8 text-toothy-100">
          <div className="space-y-4">
            <span className="inline-block py-1 px-3 rounded-full bg-toothy-400/30 border border-toothy-300/50 text-sm font-medium backdrop-blur-sm">
              Agenda tu cita hoy
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Da el primer paso hacia <br />
              <span className="">la sonrisa perfecta.</span>
            </h2>
            <p className="text-lg text-toothy-100/90 leading-relaxed max-w-lg">
              Déjanos tus datos y uno de nuestros especialistas se pondrá en contacto contigo para agendar tu valoración inicial.
            </p>
          </div>
          <div className="relative h-64 w-full max-w-md rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 hidden lg:block">
            <Image
              src="/images/clinic-room.jpg"
              alt="Atención al cliente Toothy"
              fill
              sizes="(max-width: 1024px) 0vw, 25vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-10">

          {isSuccess ? (
            // Mensaje de éxito
            <div className="flex flex-col items-center justify-center text-center py-12 animate-fadeIn">
              <BiCheckCircle className="text-6xl text-green-500 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900">¡Recibido!</h3>
              <p className="text-gray-600 mb-6">Tus datos han llegado a nuestro sistema correctamente.</p>
              <button onClick={() => setIsSuccess(false)} className="text-toothy-500 underline">
                Enviar otro
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Contáctanos</h3>
                <p className="text-sm text-gray-500">Déjanos tus datos para agendar tu cita.</p>
              </div>
              {serverError && (
                <div className="p-3 bg-red-100 text-red-700 text-sm rounded-lg">
                  {serverError}
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700">Nombre</label>
                  <input
                    {...register("nombre")}
                    className={`w-full px-4 py-3 rounded-lg border outline-none transition-all ${errors.nombre ? "border-red-500 bg-red-50" : "border-gray-300 focus:border-toothy-500"
                      }`}
                    placeholder="Juan"
                  />
                  {errors.nombre && <span className="text-xs text-red-500">{errors.nombre.message}</span>}
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700">Apellido</label>
                  <input
                    {...register("apellido")}
                    className={`w-full px-4 py-3 rounded-lg border outline-none transition-all ${errors.apellido ? "border-red-500 bg-red-50" : "border-gray-300 focus:border-toothy-500"
                      }`}
                    placeholder="Pérez"
                  />
                  {errors.apellido && <span className="text-xs text-red-500">{errors.apellido.message}</span>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700">Correo</label>
                  <input
                    type="email"
                    {...register("email")}
                    className={`w-full px-4 py-3 rounded-lg border outline-none transition-all ${errors.email ? "border-red-500 bg-red-50" : "border-gray-300 focus:border-toothy-500"
                      }`}
                    placeholder="correo@ejemplo.com"
                  />
                  {errors.email && <span className="text-xs text-red-500">{errors.email.message}</span>}
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700">Teléfono</label>
                 <input
    type="tel"
    value={phoneDisplay}
    onChange={handlePhoneChange}
    className={`w-full px-4 py-3 rounded-lg border outline-none transition-all ${
      errors.telefono ? "border-red-500 bg-red-50" : "border-gray-300 focus:border-toothy-500"
    }`}
    placeholder="(998) 123 4567"
  />
                  {errors.telefono && <span className="text-xs text-red-500">{errors.telefono.message}</span>}
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">Notas</label>
                <textarea
                  {...register("notas")}
                  rows={3}
                  className={`w-full px-4 py-3 rounded-lg border outline-none transition-all ${errors.notas ? "border-red-500" : "border-gray-300 focus:border-toothy-500"
                    }`}
                  placeholder="Mensaje opcional..."
                ></textarea>
                {errors.notas && <span className="text-xs text-red-500">{errors.notas.message}</span>}
              </div>
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="privacy"
                  {...register("privacy")}
                  className="mt-1 w-4 h-4 text-toothy-500 rounded border-gray-300 focus:ring-toothy-500"
                />
                <label htmlFor="privacy" className="text-sm text-gray-500">
                  He leído y acepto el <Link href="/privacidad" className="underline text-toothy-500">Aviso de Privacidad</Link>.
                </label>
              </div>
              {errors.privacy && <p className="text-xs text-red-500 mt-1">{errors.privacy.message}</p>}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-toothy-500 hover:bg-toothy-600 text-white font-bold py-4 rounded-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <BiLoaderAlt className="animate-spin text-xl" /> Enviando...
                  </>
                ) : (
                  <>
                    <BiSend className="text-xl" /> Agendar mi cita
                  </>
                )}
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}