import Hero from "@/components/landing/Hero";
import InteractiveMap from "@/components/landing/InteractiveMap";
import TesorosRegionales from "@/components/landing/TesorosRegionales";
import dataTurismo from "@/data/turismo.json";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

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

      {/* Sección Festividades */}
      <section className="py-24 bg-[#F8F5F0] border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Texto informativo */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase block">Patrimonio y Fe Mixteca</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary leading-tight">
                La Calenda Más Grande de Oaxaca
              </h2>
              <div className="h-0.5 w-24 bg-accent"></div>
              
              <p className="text-slate-700 font-serif text-lg leading-relaxed">
                En el mes de agosto, Asunción Nochixtlán se viste de gala en honor a la **Virgen de la Asunción**. Nuestra celebración patronal destaca a nivel estatal por su monumental Calenda, catalogada como **la más grande de todo el estado de Oaxaca**.
              </p>
              
              <p className="text-slate-600 font-serif leading-relaxed">
                Durante el recorrido, la música de viento tradicional guía a miles de locales y visitantes que portan marmotas gigantes, faroles y monos de calenda artesanales, tejiendo una estela de alegría, hermandad y devoción a lo largo de las principales avenidas de la heroica ciudad.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                <div className="border-l-4 border-gold pl-4">
                  <h4 className="font-serif font-bold text-primary text-xl">Agosto</h4>
                  <p className="text-xs text-slate-500 font-serif">Temporada Festiva</p>
                </div>
                <div className="border-l-4 border-gold pl-4">
                  <h4 className="font-serif font-bold text-primary text-xl">Monumental</h4>
                  <p className="text-xs text-slate-500 font-serif">Calenda de Calendas</p>
                </div>
                <div className="border-l-4 border-gold pl-4">
                  <h4 className="font-serif font-bold text-primary text-xl">Guelaguetza</h4>
                  <p className="text-xs text-slate-500 font-serif">Muestra de Oaxaca</p>
                </div>
              </div>
            </div>

            {/* Tarjeta Visual de Identidad */}
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/5] w-full bg-[#EFECE6] border-2 border-gold p-2 relative shadow-2xl">
                <div className="w-full h-full relative overflow-hidden">
                  <Image 
                    src="/Nochixtlán.jpg" 
                    alt="Festividad y Calenda de Nochixtlán"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                    <span className="text-[10px] font-bold text-gold uppercase tracking-widest">Identidad Mixteca</span>
                    <h3 className="font-serif font-bold text-xl leading-tight">Música, Danza y Tradición Ancestral</h3>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

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