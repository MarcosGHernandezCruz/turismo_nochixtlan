"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, MapPin, Building2, ArrowRight, Hotel, Utensils, Phone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import negociosData from "@/data/negocios.json";

interface Negocio {
  id: string;
  nombre: string;
  categoria: string;
  descripcion: string;
  imagen: string;
  telefono: string;
  direccion: string;
}

const negocios = negociosData.negocios as Negocio[];

// Extraemos categorías únicas dinámicamente
const CATEGORIES = ["Todos", ...Array.from(new Set(negocios.map(n => n.categoria)))];

export default function DirectorioPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("Todos");

  // Lógica de filtrado en tiempo real memoizada
  const filteredNegocios = useMemo(() => {
    const term = searchTerm.toLowerCase().trim();
    return negocios.filter(negocio => {
      const matchesSearch = !term || 
                            negocio.nombre.toLowerCase().includes(term) || 
                            negocio.descripcion.toLowerCase().includes(term) ||
                            negocio.direccion.toLowerCase().includes(term);
      const matchesCategory = activeCategory === "Todos" || negocio.categoria === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory]);

  return (
    <div className="min-h-screen bg-[#F8F5F0] pb-24">
      
      {/* Hero Institucional del Directorio */}
      <div className="bg-primary text-white py-20 border-b-4 border-gold">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <Building2 size={48} className="mx-auto mb-6 text-gold opacity-90" />
          <span className="text-gold text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
            Servicios y Gastronomía Real
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
            Directorio Comercial y Turístico
          </h1>
          <p className="text-slate-200 font-serif text-lg leading-relaxed max-w-2xl mx-auto">
            Consulte la oferta de hospedaje, restaurantes tradicionales de barbacoa, cafeterías y servicios comerciales de la Ciudad de Asunción Nochixtlán.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl -mt-8 relative z-10">
        
        {/* Barra de Búsqueda y Filtros */}
        <div className="bg-white p-6 border-2 border-gold shadow-xl rounded-none mb-12">
          <div className="flex flex-col md:flex-row gap-4">
            
            {/* Buscador de texto */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input 
                type="text" 
                placeholder="Buscar hotel, barbacoa, café o dirección..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border-2 border-slate-200 focus:border-primary outline-none font-serif text-slate-700 transition-colors"
              />
            </div>

            {/* Selector de Categorías (Mobile) */}
            <select 
              className="md:hidden border-2 border-slate-200 p-4 font-serif text-slate-700 outline-none focus:border-primary"
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
            >
              {CATEGORIES.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>

            {/* Píldoras de Categorías (Desktop) */}
            <div className="hidden md:flex gap-2 overflow-x-auto pb-2 md:pb-0 items-center">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-4 font-serif text-xs font-bold tracking-wider uppercase transition-all whitespace-nowrap border-2 cursor-pointer
                    ${activeCategory === cat 
                      ? 'bg-primary text-gold border-gold shadow-md' 
                      : 'bg-slate-50 text-slate-600 border-slate-200 hover:border-gold hover:text-primary'}`}
                >
                  {cat === "Hospedaje" && <Hotel size={14} className="inline mr-2 text-gold" />}
                  {cat === "Gastronomía" && <Utensils size={14} className="inline mr-2 text-gold" />}
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Rejilla de Resultados */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNegocios.length > 0 ? (
            filteredNegocios.map(negocio => {
              const isHospedaje = negocio.categoria === "Hospedaje";
              return (
                <div key={negocio.id} className="bg-white border-2 border-slate-200 hover:border-gold shadow-sm flex flex-col group hover:shadow-xl transition-all duration-300">
                  
                  {/* Imagen del Negocio con Badge e Icono de Referencia */}
                  <div className="relative h-52 overflow-hidden bg-slate-100 border-b border-slate-200">
                    <Image 
                      src={negocio.imagen} 
                      alt={negocio.nombre} 
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-primary text-gold px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest border border-gold shadow-md flex items-center gap-1.5">
                      {isHospedaje ? <Hotel size={12} /> : <Utensils size={12} />}
                      <span>{negocio.categoria}</span>
                    </div>
                  </div>

                  {/* Contenido de la Tarjeta */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-serif font-bold text-primary mb-3 line-clamp-1 group-hover:text-accent transition-colors">
                      {negocio.nombre}
                    </h3>
                    
                    <div className="flex items-start gap-2 text-xs text-slate-600 font-serif mb-3">
                      <MapPin size={15} className="text-gold shrink-0 mt-0.5" />
                      <p className="line-clamp-2 leading-relaxed">{negocio.direccion}</p>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-slate-500 font-serif mb-4 pb-3 border-b border-slate-100">
                      <Phone size={14} className="text-accent shrink-0" />
                      <span>{negocio.telefono}</span>
                    </div>

                    <p className="text-slate-600 font-serif text-sm line-clamp-3 mb-6 flex-1 leading-relaxed">
                      {negocio.descripcion}
                    </p>

                    <Link href={`/lugar/${negocio.id}`} className="mt-auto">
                      <Button variant="outline" className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-gold rounded-none font-serif uppercase tracking-widest text-xs font-bold py-5 transition-colors cursor-pointer">
                        Ver Ficha Completa <ArrowRight size={14} className="ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="col-span-full py-20 text-center bg-white border-2 border-dashed border-slate-300">
              <Search size={48} className="mx-auto text-slate-400 mb-4" />
              <h3 className="text-xl font-serif text-primary font-bold mb-2">No se encontraron establecimientos</h3>
              <p className="text-slate-500 font-serif">Intente con otro término o seleccione "Todos".</p>
              <Button 
                variant="link" 
                onClick={() => { setSearchTerm(""); setActiveCategory("Todos"); }}
                className="mt-4 text-accent font-serif font-bold uppercase tracking-wider text-xs"
              >
                Limpiar Filtros
              </Button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}