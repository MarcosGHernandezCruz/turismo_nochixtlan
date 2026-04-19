import Hero from "@/components/landing/Hero";
import InteractiveMap from "@/components/landing/InteractiveMap";
import TesorosRegionales from "@/components/landing/TesorosRegionales";
import dataTurismo from "@/data/turismo.json";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  // Mapeo exhaustivo para garantizar que todos los puntos aparezcan en el mapa
  const mapLocations = dataTurismo.lugares.map(l => ({
    id: l.id,
    name: l.nombre,
    category: l.categoria,
    description: l.descripcion,
    address: l.id === "mirador" ? "Valle de Nochixtlán, Oaxaca" : "Región Mixteca Alta, Oaxaca",
    x: l.x,
    y: l.y
  }));

  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      
      <section id="mapa" className="py-24 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 text-center mb-16">
          <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Geolocalización</span>
          <h2 className="text-4xl font-serif font-bold text-primary mb-4">Cartografía Turística</h2>
          <div className="h-0.5 w-24 bg-accent mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-slate-600 font-serif">
            Explore los tesoros de nuestra jurisdicción. Cada marcador representa un legado histórico o una maravilla natural.
          </p>
        </div>
        <div className="container mx-auto px-4">
          <InteractiveMap locations={mapLocations} />
        </div>
      </section>

      <TesorosRegionales />

      <section className="py-20 bg-[#EFECE6] border-t border-slate-300">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-serif font-bold text-primary mb-6">¿Busca servicios en la ciudad?</h3>
          <p className="text-slate-600 font-serif mb-8 max-w-xl mx-auto leading-relaxed">
            Consulte nuestro directorio oficial para ubicar establecimientos comerciales, gastronomía local y opciones de hospedaje.
          </p>
          <Link href="/directorio">
            <Button size="lg" className="rounded-none bg-primary hover:bg-primary/90 text-white font-serif uppercase tracking-widest px-10 py-8 shadow-md">
              Explorar Directorio
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}