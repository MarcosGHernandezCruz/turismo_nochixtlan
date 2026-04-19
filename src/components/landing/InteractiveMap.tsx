"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, X, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface Location {
  id: string | number;
  name: string;
  category: string;
  description: string;
  address: string;
  googleMapsUrl?: string;
  x: number; 
  y: number; 
}

export default function InteractiveMap({ locations }: { locations: Location[] }) {
  const [activeLoc, setActiveLoc] = useState<Location | null>(null);

  return (
    <div className="relative w-full h-150 md:h-175 bg-[#EFECE6] border border-slate-300 shadow-inner overflow-hidden flex items-center justify-center">
      
      {/* Capa Base: Imagen Cartográfica */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="/mapa-nochixtlan.svg" 
          alt="Cartografía de Asunción Nochixtlán" 
          className="w-full h-full object-cover opacity-80 mix-blend-multiply" 
        />
        <div className="absolute inset-0 bg-[#F8F5F0]/30 pointer-events-none"></div>
      </div>

      {/* Renderizado de Marcadores Geográficos */}
      {locations.map((loc) => (
        <button
          key={loc.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10 p-0 border-0 bg-transparent hover:scale-110 active:scale-95 transition-transform"
          style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
          onClick={() => setActiveLoc(loc)}
          aria-label={`Ubicación: ${loc.name}`}
        >
          {/* Efecto visual de pulso */}
          <div className="absolute inset-0 bg-accent/20 rounded-full animate-pulse scale-150 -z-10"></div>
          
          {/* Indicador Físico - Área táctil mínima 56x56px */}
          <div 
            className={`flex items-center justify-center w-14 h-14 border-2 border-white shadow-lg text-white transition-all duration-200 rounded-full
              ${activeLoc?.id === loc.id ? 'bg-primary scale-110' : 'bg-accent'}`}
          >
            <MapPin size={28} className="drop-shadow-md" />
          </div>
          
          {/* Etiqueta flotante */}
          <div className={`absolute top-16 left-1/2 transform -translate-x-1/2 bg-white px-3 py-2 border-2 border-primary text-xs font-bold font-serif text-primary whitespace-nowrap shadow-lg z-20 pointer-events-none rounded-lg transition-opacity duration-200 ${
            activeLoc?.id === loc.id ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}>
            {loc.name}
          </div>
        </button>
      ))}

      {/* Panel de Información Desplegable */}
      <AnimatePresence>
        {activeLoc && (
          <motion.div
            initial={{ opacity: 0, x: 20, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, pointerEvents: "none" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="absolute bottom-4 left-4 right-4 md:left-auto md:right-8 md:bottom-8 md:w-96 bg-white border-2 border-slate-200 shadow-2xl z-50 flex flex-col rounded-none"
          >
            {/* Encabezado del Panel */}
            <div className="flex justify-between items-center p-4 border-b border-slate-100 bg-slate-50">
              <span className="text-xs font-bold uppercase tracking-widest text-accent">
                {activeLoc.category}
              </span>
              <button 
                onClick={() => setActiveLoc(null)}
                className="text-slate-400 hover:text-primary transition-colors p-2 rounded-lg active:scale-95"
                aria-label="Cerrar información"
              >
                <X size={20} />
              </button>
            </div>

            {/* Cuerpo del Panel */}
            <div className="p-8 space-y-5">
              <h3 className="text-2xl font-serif font-bold text-primary leading-tight">
                {activeLoc.name}
              </h3>
              
              <div className="flex items-start gap-3 text-sm text-slate-600 font-serif bg-slate-50 p-3 border border-slate-100 rounded-none">
                <MapPin size={16} className="text-accent shrink-0 mt-0.5" />
                <p>{activeLoc.address}</p>
              </div>

              <p className="text-slate-700 font-serif leading-relaxed text-sm">
                {activeLoc.description}
              </p>
              
              {/* Acción de Trazado de Ruta Dinámico a prueba de fallos */}
              <div className="pt-4 mt-6 border-t border-slate-100">
                <Button 
                  variant="outline" 
                  className="w-full border-primary text-primary hover:bg-primary hover:text-white rounded-none py-6 md:py-4 px-4 font-serif tracking-wide transition-all uppercase text-xs font-bold min-h-11 md:min-h-11 flex items-center justify-center"
                  onClick={() => {
                    const query = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(activeLoc.name + " Nochixtlán Oaxaca")}`;
                    window.open(query, '_blank');
                  }}
                >
                  <Navigation size={18} className="mr-3" /> Iniciar Navegación
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}