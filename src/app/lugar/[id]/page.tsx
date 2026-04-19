import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin, ArrowLeft, Navigation, Clock, Info, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

// Importamos las bases de datos
import turismoData from "@/data/turismo.json";
import negociosData from "@/data/negocios.json";

// Definimos la interfaz para TypeScript
interface Lugar {
  id: string;
  nombre: string;
  categoria: string;
  descripcion: string;
  historia?: string;
  atractivos?: string[];
  horarios?: string;
  direccion?: string;
  imagen?: string;
  x?: number;
  y?: number;
}

export default async function DetallesLugarPage({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  // En las versiones más nuevas de Next.js, 'params' debe ser esperado (awaited)
  const { id } = await params;

  // Buscamos el ID en ambas colecciones
  const todasLasOpciones = [
    ...(turismoData.lugares || []),
    ...(negociosData.negocios || [])
  ];

  const lugar = todasLasOpciones.find((l: any) => l.id === id) as any;

  // Si el ID no existe en los JSON, disparamos el error 404 institucional
  if (!lugar) {
    notFound();
  }

  // Construcción del enlace de navegación
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(lugar.nombre + " Nochixtlán Oaxaca")}`;

  return (
    <div className="min-h-screen bg-[#F8F5F0] pb-20">
      
      {/* Hero Visual */}
      <div className="relative h-[50vh] w-full bg-primary overflow-hidden">
        <img 
          src={lugar.imagen || "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?q=80&w=1200"} 
          alt={lugar.nombre}
          className="w-full h-full object-cover opacity-70 grayscale-[0.2]"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#F8F5F0] via-transparent to-black/20"></div>
        
        <div className="absolute bottom-12 left-0 w-full">
          <div className="container mx-auto px-4">
            <Link href="/">
              <Button variant="ghost" className="mb-6 text-white hover:bg-white/10 rounded-none bg-black/30 backdrop-blur-md border border-white/20">
                <ArrowLeft size={16} className="mr-2" /> Volver al Explorador
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Información Principal */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-10 md:p-16 border border-slate-200 shadow-xl rounded-none">
              <span className="text-accent text-xs font-bold tracking-[0.4em] uppercase mb-4 block">
                {lugar.categoria}
              </span>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-8 leading-tight">
                {lugar.nombre}
              </h1>
              
              <div className="prose prose-slate prose-lg font-serif text-slate-700 leading-relaxed space-y-6">
                <p className="text-xl italic text-slate-500 border-l-4 border-accent pl-6 py-2">
                  {lugar.descripcion}
                </p>
                <div className="pt-4">
                  <h3 className="text-primary font-bold text-lg mb-4 uppercase tracking-widest">Reseña Histórica</h3>
                  <p>{lugar.historia || "Información histórica en proceso de catalogación por el cronista municipal."}</p>
                </div>
              </div>

              {lugar.atractivos && (
                <div className="mt-12 pt-10 border-t border-slate-100">
                  <h4 className="font-serif font-bold text-primary text-xl mb-6 tracking-tight">Atractivos Principales</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {lugar.atractivos.map((item: string, i: number) => (
                      <div key={i} className="flex items-center gap-3 p-4 bg-[#F8F5F0] border border-slate-100">
                        <CheckCircle2 size={18} className="text-accent shrink-0" />
                        <span className="text-sm font-serif text-slate-700 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Columna de Acción (Navegación) */}
          <div className="lg:col-span-1">
            <div className="bg-white border-2 border-primary shadow-2xl rounded-none sticky top-28 overflow-hidden">
              <div className="bg-primary p-6 text-white">
                <h3 className="font-serif font-bold text-lg tracking-wide">Ubicación y Acceso</h3>
              </div>
              
              <div className="p-8 space-y-8">
                <div className="flex items-start gap-4 text-slate-600 font-serif">
                  <MapPin size={24} className="text-accent shrink-0" />
                  <div>
                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Dirección</span>
                    <p className="text-sm leading-relaxed">{lugar.direccion || "Jurisdicción de Asunción Nochixtlán, Oaxaca."}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 text-slate-600 font-serif">
                  <Clock size={24} className="text-accent shrink-0" />
                  <div>
                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Horario Sugerido</span>
                    <p className="text-sm">{lugar.horarios || "Consulte disponibilidad local."}</p>
                  </div>
                </div>

                <Button 
                  asChild
                  className="w-full bg-accent hover:bg-accent/90 text-white rounded-none py-10 font-serif uppercase tracking-[0.2em] text-xs font-bold shadow-lg transition-transform hover:-translate-y-1"
                >
                  <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                    <Navigation size={18} className="mr-3" /> Iniciar Navegación GPS
                  </a>
                </Button>

                <div className="flex items-center gap-3 p-4 bg-blue-50 border border-blue-100 text-blue-800 rounded-none">
                  <Info size={18} className="shrink-0" />
                  <p className="text-[10px] font-serif leading-tight uppercase font-bold tracking-wider">
                    Se recomienda el uso de calzado cómodo y protección solar durante su visita.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}