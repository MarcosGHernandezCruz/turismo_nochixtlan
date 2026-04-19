import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Star } from "lucide-react";
import dataNegocios from "@/data/negocios.json";

export default function DirectorioLocalPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8F5F0]">
      {/* Hero Directorio */}
      <section className="bg-[#EFECE6] border-b border-slate-300 py-20">
        <div className="container mx-auto px-4 text-center">
          <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Servicios y Comercio</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Directorio Municipal</h1>
          <p className="max-w-2xl mx-auto text-slate-600 font-serif">
            Encuentre los mejores establecimientos, servicios y comercios locales de la Heroica Ciudad de Asunción Nochixtlán.
          </p>
        </div>
      </section>

      {/* Grid de Negocios */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dataNegocios.negocios.map((negocio) => (
            <Card key={negocio.id} className="rounded-none border-slate-200 bg-white shadow-none group hover:border-primary transition-colors">
              <CardContent className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] font-bold text-accent uppercase tracking-widest">{negocio.categoria}</span>
                  <Star size={14} className="text-accent" />
                </div>
                <h3 className="text-xl font-serif font-bold text-primary mb-3">{negocio.nombre}</h3>
                <p className="text-slate-600 font-serif text-sm leading-relaxed mb-6">{negocio.descripcion}</p>
                <div className="flex items-center gap-2 text-xs text-slate-400 border-t border-slate-100 pt-4">
                  <MapPin size={14} className="text-accent shrink-0" />
                  <span className="italic">{negocio.direccion}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}