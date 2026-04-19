import { MapPin, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import data from "@/data/directorio.json";

export default function DirectorioTuristico() {
  return (
    <section id="directorio" className="py-24 bg-[#F8F5F0]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
            Ruta de la Mixteca Alta
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            Patrimonio, Historia y Naturaleza
          </h2>
          <div className="h-0.5 w-32 bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {data.lugares.map((lugar) => (
            <Card key={lugar.id} className="rounded-none border-slate-200 bg-white shadow-none group transition-all duration-500 hover:border-primary">
              <div className="flex flex-col lg:flex-row">
                {/* Imagen del Sitio */}
                <div className="lg:w-2/5 aspect-4/5 overflow-hidden border-r border-slate-100">
                  <img 
                    src="https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?q=80&w=1000&auto=format&fit=crop" 
                    alt={lugar.nombre} 
                    className="w-full h-full object-cover filter grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                
                {/* Información del Sitio */}
                <div className="lg:w-3/5 p-8 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-accent uppercase tracking-widest mb-3 block">
                      {lugar.categoria}
                    </span>
                    <h3 className="text-2xl font-serif font-bold text-primary mb-4 leading-tight">
                      {lugar.nombre}
                    </h3>
                    <p className="text-slate-600 font-serif text-sm leading-relaxed mb-6">
                      {lugar.descripcion}
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start gap-2 text-xs text-slate-500 font-serif italic border-l-2 border-accent/20 pl-4">
                      <MapPin size={14} className="text-accent shrink-0 mt-0.5" />
                      Municipio de Nochixtlán, Oaxaca
                    </div>
                    
                    <Button variant="outline" className="w-full rounded-none border-primary text-primary hover:bg-primary hover:text-white font-serif uppercase text-[10px] tracking-[0.2em] py-6">
                      Consultar Historia Local <ArrowRight size={14} className="ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}