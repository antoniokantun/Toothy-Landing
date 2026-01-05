import Link from "next/link";
import Image from "next/image";
import { 
  BiLogoFacebook, 
  BiLogoInstagram, 
  BiLogoWhatsapp, 
  BiLogoTiktok 
} from "react-icons/bi";

export default function Footer() {
  return (
    <footer className="w-full bg-toothy-500 text-toothy-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-lg inline-block w-full max-w-50">
              <Image 
                src="/images/logo-toothy.png"
                alt="Toothy Logo" 
                width={150} 
                height={60} 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Tratamientos dentales</h3>
            <ul className="space-y-2 text-sm text-toothy-100/90">
              <li><Link href="#" className="hover:text-white transition-colors">Prótesis totales removibles</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Extracciones</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Diseño de Sonrisa</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Gingivectomía</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Odontopediatría</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Blanqueamiento</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Puentes Dentales</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Guarda Oclusal</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Periodoncia</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Endodoncia</Link></li>
            </ul>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="font-bold text-lg">Toothy</h3>
              <ul className="space-y-2 text-sm text-toothy-100/90">
                <li><Link href="/" className="hover:text-white transition-colors">Inicio</Link></li>
                <li><Link href="/sobre-nosotros" className="hover:text-white transition-colors">Sobre nosotros</Link></li>
                <li><Link href="/tratamientos" className="hover:text-white transition-colors">Tratamiento</Link></li>
                <li><Link href="/contacto" className="hover:text-white transition-colors">Contacto</Link></li>
              </ul>
            </div>
            <div className="space-y-2">
               <h3 className="font-bold text-lg">Certificados</h3>
            </div>
          </div>
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="font-bold text-lg">Contactanos</h3>
              <ul className="space-y-2 text-sm text-toothy-100/90">
                <li>(998) 887 4520</li>
                <li>citas@toothy.mx</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-lg">Horarios</h3>
              <ul className="space-y-2 text-sm text-toothy-100/90">
                <li>Lunes a Viernes: 10:00 AM – 8:00 PM</li>
                <li>Sábados: 9:00 AM – 3:00 PM</li>
              </ul>
            </div>
          </div>
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="font-bold text-lg">Redes sociales</h3>
              <ul className="space-y-2 text-sm text-toothy-100/90">
                <li>
                  <a href="#" className="flex items-center gap-2 hover:text-white transition-colors">
                    <BiLogoFacebook className="text-lg" /> Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-2 hover:text-white transition-colors">
                    <BiLogoInstagram className="text-lg" /> Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-2 hover:text-white transition-colors">
                    <BiLogoWhatsapp className="text-lg" /> Whatsapp
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-2 hover:text-white transition-colors">
                    <BiLogoTiktok className="text-lg" /> Tiktok
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-lg">Sucursales</h3>
              <ul className="space-y-2 text-sm text-toothy-100/90">
                <li>Toothy Sucursal Malecón</li>
                <li>Toothy Puerto Cancún</li>
              </ul>
            </div>
          </div>

        </div>
        <div className="border-t border-toothy-400 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-toothy-200">
          <p>
            © Toothy 2026. Todos los derechos reservados.
          </p>
          <Link href="/privacidad" className="hover:text-white transition-colors">
            Consulta Nuestro Aviso de Privacidad
          </Link>
        </div>

      </div>
    </footer>
  );
}