import { BiMap, BiTime } from "react-icons/bi";

export default function Location() {
  return (
    <section className="w-full py-20 lg:py-28 bg-toothy-100 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4 max-w-3xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Tu destino dental en Cancún
          </h2>
          <p className="text-lg leading-relaxed">
            Encuéntranos en una zona privilegiada, equipados con la mejor tecnología 
            para brindarte una atención de excelencia.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <BiMap className="text-3xl text-toothy-500" />
              <h3 className="text-2xl font-bold">
                Nuestra dirección
              </h3>
            </div>
            <p className="text-lg leading-relaxed pl-11">
              Av. Bonampak Mza 2, Lote 7, <br />
              Supermanzana 6, 77500 Cancún, Q.R.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <BiTime className="text-3xl text-toothy-500" />
              <h3 className="text-2xl font-bold">
                Horario
              </h3>
            </div>
            <ul className="space-y-2 text-lg pl-11">
              <li className="flex justify-between md:justify-start gap-8">
                <span className="font-medium ">Lunes a Viernes:</span>
                <span>9:00 AM – 8:00 PM</span>
              </li>
              <li className="flex justify-between md:justify-start gap-8">
                <span className="font-medium">Sábados:</span>
                <span>9:00 AM – 3:00 PM</span>
              </li>
            </ul>
          </div>

        </div>
        <div className="w-full h-100 lg:h-125 rounded-2xl overflow-hidden shadow-lg border border-gray-200 relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.975478461712!2d-86.82716022403758!3d21.153356083492794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4c2c0697960359%3A0x6b9781077679808!2sAv.%20Bonampak%2C%20Canc%C3%BAn%2C%20Q.R.!5e0!3m2!1ses-419!2smx!4v1709228345123!5m2!1ses-419!2smx"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full grayscale-20 hover:grayscale-0 transition-all duration-500"
          ></iframe>
        </div>
      </div>
    </section>
  );
}