import Link from "next/link";
import { ArrowLeft, Globe, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import FormularioContacto from "@/components/shared/FormularioContacto";

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
            Contacto y Afiliación
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
            Únete a Explora Nochixtlán
          </h1>
          <p className="text-slate-300 font-serif max-w-2xl text-lg leading-relaxed">
            Utiliza este canal para dar de alta tu establecimiento en nuestro Directorio Comercial, solicitar información sobre la Mixteca Alta o compartir tus sugerencias.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl -mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Columna Lateral: Información de Contacto */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white border border-slate-200 shadow-sm p-8 rounded-none">
              <h3 className="font-serif font-bold text-primary text-xl mb-6 border-b border-slate-100 pb-4">
                Información de la Plataforma
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
                  <Mail size={24} className="text-accent shrink-0" />
                  <div>
                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Correo Electrónico</span>
                    <p className="text-sm">contacto@explora-nochixtlan.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#EFECE6] border border-slate-300 p-8 rounded-none">
              <h4 className="font-bold text-xs uppercase tracking-widest text-primary mb-3">Requisitos para Negocios</h4>
              <ul className="space-y-2 text-sm font-serif text-slate-700 list-disc pl-4">
                <li>Nombre comercial del establecimiento.</li>
                <li>Dirección exacta.</li>
                <li>Horarios de atención.</li>
                <li>Fotografía o logo (se solicitará por correo).</li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-2">
            <FormularioContacto />
          </div>

        </div>
      </div>
    </div>
  );
}