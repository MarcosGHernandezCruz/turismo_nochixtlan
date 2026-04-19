import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import turismoData from "@/data/turismo.json";

export default function TesorosRegionales() {
  return (
    <section className="py-24 bg-white border-b border-slate-200">
      <div className="container mx-auto px-4 max-w-6xl">
        
        <div className="text-center mb-20">
          <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
            Descubre la Región
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            Joyas de la Mixteca Alta
          </h2>
          <div className="h-0.5 w-24 bg-accent mx-auto"></div>
          <p className="mt-6 text-slate-600 font-serif max-w-2xl mx-auto leading-relaxed">
            Más allá de nuestra ciudad, la región resguarda monumentos que son patrimonio vivo y paraísos naturales que quitan el aliento.
          </p>
        </div>

        <div className="space-y-24 md:space-y-32">
          {turismoData.lugares.map((lugar, index) => {
            // Alternamos la dirección del diseño para que sea más dinámico (estilo editorial)
            const isReversed = index % 2 !== 0;

            return (
              <div key={lugar.id} className={`flex flex-col gap-8 md:gap-16 items-center ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                
                {/* Bloque de Imagen */}
                <div className="w-full md:w-1/2">
                  <div className="relative aspect-4/3 bg-slate-100 border border-slate-300 p-2 shadow-sm group">
                    <img 
                      src={lugar.imagen} 
                      alt={lugar.nombre} 
                      className="w-full h-full object-cover filter grayscale-[0.2] transition-all duration-700 group-hover:grayscale-0"
                    />
                    {/* Elemento decorativo de esquina */}
                    <div className={`absolute -bottom-4 ${isReversed ? '-left-4' : '-right-4'} w-24 h-24 bg-[#F8F5F0] border border-slate-200 -z-10`}></div>
                  </div>
                </div>

                {/* Bloque de Contenido */}
                <div className="w-full md:w-1/2 space-y-6">
                  <span className="text-[10px] font-bold text-accent uppercase tracking-widest block">
                    {lugar.categoria}
                  </span>
                  
                  <h3 className="text-3xl font-serif font-bold text-primary leading-tight">
                    {lugar.nombre}
                  </h3>
                  
                  <p className="text-slate-700 font-serif leading-relaxed text-sm md:text-base">
                    {lugar.historia}
                  </p>

                  <div className="bg-[#EFECE6] p-6 border-l-4 border-accent space-y-4 my-6">
                    <h4 className="font-bold text-xs uppercase tracking-widest text-primary mb-3">¿Qué encontrarás aquí?</h4>
                    <ul className="space-y-2">
                      {lugar.atractivos?.slice(0, 3).map((atractivo, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm font-serif text-slate-700">
                          <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" />
                          <span>{atractivo}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2 text-xs font-serif text-slate-500">
                      <Clock size={14} className="text-accent" />
                      <span>{lugar.horarios}</span>
                    </div>
                    
                    <Link href={`/lugar/${lugar.id}`}>
                      <Button variant="ghost" className="text-primary hover:bg-primary/5 hover:text-primary rounded-none font-serif uppercase tracking-widest text-xs font-bold px-4 py-2 min-h-[44px] inline-flex items-center">
                        Ver detalles completos <ArrowRight size={14} className="ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}