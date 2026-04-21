"use client";
import { useState } from "react";
import Link from "next/link";
import { Search, MapPin, Building2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import negociosData from "@/data/negocios.json";

export default function DirectorioPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("Todos");

  // Extraemos categorías únicas dinámicamente
  const categories = ["Todos", ...Array.from(new Set(negociosData.negocios.map(n => n.categoria)))];

  // Lógica de filtrado en tiempo real
  const filteredNegocios = negociosData.negocios.filter(negocio => {
    const matchesSearch = negocio.nombre.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          negocio.descripcion.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "Todos" || negocio.categoria === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#F8F5F0] pb-24">
      
      {/* Hero Institucional del Directorio */}
      <div className="bg-primary text-white py-20 border-b-4 border-accent">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <Building2 size={48} className="mx-auto mb-6 text-accent opacity-90" />
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
            Directorio Comercial
          </h1>
          <p className="text-slate-300 font-serif text-lg leading-relaxed">
            Descubra la oferta gastronómica, opciones de hospedaje y servicios locales de la Ciudad de Asunción Nochixtlán.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl -mt-8 relative z-10">
        
        {/* Barra de Búsqueda y Filtros */}
        <div className="bg-white p-6 border border-slate-200 shadow-xl rounded-none mb-12">
          <div className="flex flex-col md:flex-row gap-4">
            
            {/* Buscador de texto */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input 
                type="text" 
                placeholder="Buscar por nombre o servicio..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border-2 border-slate-100 focus:border-primary outline-none font-serif text-slate-700 transition-colors"
              />
            </div>

            {/* Selector de Categorías (Mobile) */}
            <select 
              className="md:hidden border-2 border-slate-100 p-4 font-serif text-slate-700 outline-none focus:border-primary"
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>

            {/* Píldoras de Categorías (Desktop) */}
            <div className="hidden md:flex gap-2 overflow-x-auto pb-2 md:pb-0 items-center">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-4 font-serif text-sm font-bold tracking-wider uppercase transition-colors whitespace-nowrap border-2
                    ${activeCategory === cat 
                      ? 'bg-primary text-white border-primary' 
                      : 'bg-slate-50 text-slate-500 border-slate-100 hover:border-primary/30'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Rejilla de Resultados */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNegocios.length > 0 ? (
            filteredNegocios.map(negocio => (
              <div key={negocio.id} className="bg-white border border-slate-200 shadow-sm flex flex-col group hover:shadow-xl transition-shadow duration-300">
                
                {/* Imagen del Negocio */}
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img 
                    src={negocio.imagen} 
                    alt={negocio.nombre} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-accent border border-slate-200 shadow-sm">
                    {negocio.categoria}
                  </div>
                </div>

                {/* Contenido de la Tarjeta */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-serif font-bold text-primary mb-3 line-clamp-1">
                    {negocio.nombre}
                  </h3>
                  
                  <div className="flex items-start gap-2 text-sm text-slate-500 font-serif mb-4">
                    <MapPin size={16} className="text-accent shrink-0 mt-0.5" />
                    <p className="line-clamp-2 leading-relaxed">{negocio.direccion}</p>
                  </div>

                  <p className="text-slate-600 font-serif text-sm line-clamp-3 mb-6 flex-1">
                    {negocio.descripcion}
                  </p>

                  <Link href={`/lugar/${negocio.id}`} className="mt-auto">
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white rounded-none font-serif uppercase tracking-widest text-xs font-bold py-6 transition-colors">
                      Ver Ficha Completa <ArrowRight size={14} className="ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center bg-white border border-slate-200 border-dashed">
              <Search size={48} className="mx-auto text-slate-300 mb-4" />
              <h3 className="text-xl font-serif text-primary font-bold mb-2">No se encontraron resultados</h3>
              <p className="text-slate-500 font-serif">Intente con otro término de búsqueda o categoría.</p>
              <Button 
                variant="link" 
                onClick={() => { setSearchTerm(""); setActiveCategory("Todos"); }}
                className="mt-4 text-accent font-serif"
              >
                Limpiar filtros
              </Button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}