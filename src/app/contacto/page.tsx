import Link from "next/link";
import { ArrowLeft, Globe, MapPin, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-[#F8F5F0] pb-24">
      
      {/* Hero Independiente */}
      <div className="bg-primary text-white py-16 border-b-4 border-accent">
        <div className="container mx-auto px-4 max-w-6xl">
          <Link href="/">
            <Button variant="ghost" className="mb-8 text-white hover:bg-white/10 rounded-none font-serif text-sm px-0">
              <ArrowLeft size={16} className="mr-2" /> Volver al inicio
            </Button>
          </Link>
          <span className="text-accent font-bold tracking-[0.3em] uppercase mb-4 block text-xs">
            Afiliación Comercial
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
            Únete al Directorio de Explora Nochixtlán
          </h1>
          <p className="text-slate-300 font-serif max-w-2xl text-lg leading-relaxed">
            Da de alta tu establecimiento comercial, restaurante o servicio de forma rápida, directa y totalmente gratuita a través de WhatsApp o llamada telefónica.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl -mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Columna Lateral: Información de Contacto */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white border border-slate-200 shadow-sm p-8 rounded-none">
              <h3 className="font-serif font-bold text-primary text-xl mb-6 border-b border-slate-100 pb-4">
                Información de Registro
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 text-slate-600 font-serif">
                  <Globe size={24} className="text-accent shrink-0" />
                  <div>
                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Proyecto</span>
                    <p className="text-sm">Plataforma Digital Explora Nochixtlán.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 text-slate-600 font-serif">
                  <MapPin size={24} className="text-accent shrink-0" />
                  <div>
                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Región</span>
                    <p className="text-sm">Asunción Nochixtlán, Oaxaca, México.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 text-slate-600 font-serif">
                  <Phone size={24} className="text-gold shrink-0" />
                  <div>
                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Atención Oficial</span>
                    <p className="text-sm font-bold text-primary">951 113 0366</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#EFECE6] border border-slate-300 p-8 rounded-none">
              <h4 className="font-bold text-xs uppercase tracking-widest text-primary mb-3">Requisitos de Registro</h4>
              <ul className="space-y-2 text-sm font-serif text-slate-700 list-disc pl-4">
                <li>Nombre comercial del establecimiento.</li>
                <li>Dirección exacta.</li>
                <li>Horarios de atención al público.</li>
                <li>Fotografías claras de tu local o productos (se solicitarán por WhatsApp).</li>
              </ul>
            </div>
          </div>

          {/* Columna Principal: Guía de Registro Paso a Paso (Complemento) */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-12 border border-slate-200 shadow-xl space-y-8 rounded-none">
              <div>
                <h2 className="text-3xl font-serif font-bold text-primary mb-2">Guía de Alta de Negocios</h2>
                <p className="text-slate-600 font-serif">Sigue estos sencillos pasos para que tu negocio aparezca en línea hoy mismo.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-slate-200 p-6 space-y-3 rounded-none">
                  <div className="w-8 h-8 rounded-none bg-primary text-white flex items-center justify-center font-bold font-serif">1</div>
                  <h3 className="font-serif font-bold text-lg text-primary">Prepara la Información</h3>
                  <p className="text-slate-600 font-serif text-sm leading-relaxed">Reúne el nombre del negocio, giro, dirección, número telefónico y horarios de servicio.</p>
                </div>
                
                <div className="border border-slate-200 p-6 space-y-3 rounded-none">
                  <div className="w-8 h-8 rounded-none bg-primary text-white flex items-center justify-center font-bold font-serif">2</div>
                  <h3 className="font-serif font-bold text-lg text-primary">Elige de 1 a 3 Fotos</h3>
                  <p className="text-slate-600 font-serif text-sm leading-relaxed">Toma fotos claras de tu fachada, local o de tus productos/platillos estrella con buena iluminación.</p>
                </div>

                <div className="border border-slate-200 p-6 space-y-3 rounded-none">
                  <div className="w-8 h-8 rounded-none bg-primary text-white flex items-center justify-center font-bold font-serif">3</div>
                  <h3 className="font-serif font-bold text-lg text-primary">Envíanos un Mensaje</h3>
                  <p className="text-slate-600 font-serif text-sm leading-relaxed">Envíanos los datos y fotos por WhatsApp al número de atención oficial.</p>
                </div>

                <div className="border border-slate-200 p-6 space-y-3 rounded-none">
                  <div className="w-8 h-8 rounded-none bg-primary text-white flex items-center justify-center font-bold font-serif">4</div>
                  <h3 className="font-serif font-bold text-lg text-primary">¡Publicación Lista!</h3>
                  <p className="text-slate-600 font-serif text-sm leading-relaxed">Validamos los datos y subimos tu establecimiento al Directorio en menos de 24 horas.</p>
                </div>
              </div>

              {/* Botones de acción rápida */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-slate-100">
                <a 
                  href="https://wa.me/529511130366?text=Hola!%20Me%20interesa%20dar%20de%20alta%20mi%20negocio%20en%20el%20directorio%20de%20Explora%20Nochixtlan." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-none py-8 font-serif uppercase tracking-widest text-xs font-bold shadow-md flex items-center justify-center gap-2">
                    <MessageCircle size={16} /> Contactar por WhatsApp
                  </Button>
                </a>
                
                <a href="tel:+529511130366" className="flex-1">
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/5 rounded-none py-8 font-serif uppercase tracking-widest text-xs font-bold flex items-center justify-center gap-2">
                    <Phone size={16} /> Llamar Oficialmente
                  </Button>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}