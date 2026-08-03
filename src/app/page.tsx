import Hero from "@/components/landing/Hero";
import InteractiveMap from "@/components/landing/InteractiveMap";
import TesorosRegionales from "@/components/landing/TesorosRegionales";
import dataTurismo from "@/data/turismo.json";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Calendar, Sparkles, ArrowRight, MapPin, Music, ZoomIn, Building2, Utensils, Hotel } from "lucide-react";

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
    <div className="flex flex-col min-h-screen bg-[#F8F5F0]">
      {/* Hero Principal */}
      <Hero />
      
      {/* SECCIÓN ESTELAR: FIESTA PATRONAL Y CALENDA MONUMENTAL CON FLYERS */}
      <section className="py-24 bg-[#EFECE6] border-b-2 border-gold relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          
          <div className="text-center mb-16 max-w-3xl mx-auto space-y-4">
            <span className="text-accent text-xs font-bold tracking-[0.35em] uppercase block">
              Patrimonio y Fe de la Mixteca Alta
            </span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-primary leading-tight">
              La Calenda Monumental de Nochixtlán
            </h2>
            <div className="h-0.5 w-24 bg-accent mx-auto"></div>
            <p className="text-slate-700 font-serif text-lg leading-relaxed pt-2">
              Cada mes de agosto, el cielo mixteco se ilumina para celebrar a la **Virgen de la Asunción**. Nuestra festividad patronal destaca a nivel nacional por acoger la **Calenda más grande de todo el estado de Oaxaca**, un encuentro épico donde la devoción, el folclor y la hermandad del pueblo se funden en una sola fiesta.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Columna de Texto Atractivo */}
            <div className="lg:col-span-6 space-y-6">
              <div className="bg-white border-l-4 border-gold p-6 shadow-md space-y-3">
                <div className="flex items-center gap-2 text-primary font-serif font-bold text-lg">
                  <Sparkles className="text-gold shrink-0" size={20} />
                  <span>Calendas de Flores y Luces (14 de Agosto)</span>
                </div>
                <p className="text-slate-600 font-serif text-sm leading-relaxed">
                  Decenas de bandas de viento retumban por los barrios tradicionales. Mujeres mixtecas ataviadas con sus mejores trajes portan majestuosas canastas florales, acompañadas por marmotas gigantes y faroles celofán que tiñen de luz la noche nochixlteca.
                </p>
              </div>

              <div className="bg-white border-l-4 border-gold p-6 shadow-md space-y-3">
                <div className="flex items-center gap-2 text-primary font-serif font-bold text-lg">
                  <Music className="text-gold shrink-0" size={20} />
                  <span>Deporte, Jaripeos y Megabailes</span>
                </div>
                <p className="text-slate-600 font-serif text-sm leading-relaxed">
                  Un programa vibrante que reúne la ancestral Pelota Mixteca, carreras de Off Road, torneos locales, la tradicional barbacoa mixteca y bailes multitudinarios con artistas estelares como **Vagón Chicano** e **Internacional Carro Show**.
                </p>
              </div>

              {/* Botón Directo a la Festividad */}
              <div className="pt-4">
                <Link href="/festividad">
                  <Button size="lg" className="w-full sm:w-auto rounded-none bg-primary hover:bg-accent text-white font-serif uppercase tracking-[0.2em] text-xs font-bold py-7 px-8 border-2 border-gold shadow-xl transition-all duration-300 group cursor-pointer">
                    Ver Programa Completo e Itinerario 
                    <ArrowRight size={18} className="ml-3 group-hover:translate-x-2 transition-transform text-gold" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Columna de Flyers Oficiales Visuales */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Flyer 1 */}
                <Link href="/festividad" className="group">
                  <div className="bg-white border-2 border-gold p-2 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 relative">
                    <div className="relative aspect-[2/3] overflow-hidden bg-slate-100">
                      <Image 
                        src="/Festividad Flyer completo.jpg" 
                        alt="Cartel Oficial Festividad Nochixtlán 2026"
                        fill
                        sizes="(max-width: 768px) 100vw, 300px"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[1px]">
                        <span className="bg-white text-primary text-xs font-serif font-bold uppercase tracking-widest px-4 py-2 border border-gold shadow-md flex items-center gap-2">
                          <ZoomIn size={16} /> Ver Cartel
                        </span>
                      </div>
                    </div>
                    <div className="bg-primary text-gold text-center py-2 mt-2 font-serif text-xs font-bold uppercase tracking-widest">
                      Programa Municipal
                    </div>
                  </div>
                </Link>

                {/* Flyer 2 */}
                <Link href="/festividad" className="group">
                  <div className="bg-white border-2 border-gold p-2 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 relative">
                    <div className="relative aspect-[2/3] overflow-hidden bg-slate-100">
                      <Image 
                        src="/Festividad Flyer mercado.jpg" 
                        alt="Cartel Oficial Mercado Benito Juárez"
                        fill
                        sizes="(max-width: 768px) 100vw, 300px"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[1px]">
                        <span className="bg-white text-primary text-xs font-serif font-bold uppercase tracking-widest px-4 py-2 border border-gold shadow-md flex items-center gap-2">
                          <ZoomIn size={16} /> Ver Cartel
                        </span>
                      </div>
                    </div>
                    <div className="bg-primary text-gold text-center py-2 mt-2 font-serif text-xs font-bold uppercase tracking-widest">
                      Programa Mercado
                    </div>
                  </div>
                </Link>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Cartografía Turística / Mapa Interactivo */}
      <section id="mapa" className="py-24 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 text-center mb-16">
          <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Geolocalización</span>
          <h2 className="text-4xl font-serif font-bold text-primary mb-4">Cartografía Turística</h2>
          <div className="h-0.5 w-24 bg-accent mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-slate-600 font-serif leading-relaxed">
            Explore los tesoros de nuestra jurisdicción. Cada marcador representa un legado histórico o una maravilla natural de la Mixteca Alta.
          </p>
        </div>
        <div className="container mx-auto px-4">
          <InteractiveMap locations={mapLocations} />
        </div>
      </section>

      {/* Tesoros Regionales */}
      <TesorosRegionales />

      {/* Sección Directorio y Servicios Comercial */}
      <section className="py-20 bg-[#EFECE6] border-t border-slate-300">
        <div className="container mx-auto px-4 max-w-4xl text-center space-y-6">
          <Building2 size={44} className="mx-auto text-gold" />
          <h3 className="text-3xl font-serif font-bold text-primary">¿Busca hospedaje o la mejor gastronomía?</h3>
          <p className="text-slate-600 font-serif max-w-2xl mx-auto leading-relaxed text-lg">
            Consulte nuestro **Directorio Comercial Oficial** para localizar hoteles tradicionales, los mejores restaurantes de barbacoa mixteca, cafeterías y servicios verificados en Asunción Nochixtlán.
          </p>
          <div className="pt-4">
            <Link href="/directorio">
              <Button size="lg" className="rounded-none bg-primary hover:bg-accent text-white font-serif uppercase tracking-[0.2em] text-xs font-bold py-7 px-10 border-2 border-gold shadow-md transition-all cursor-pointer">
                Explorar Directorio Comercial <ArrowRight size={16} className="ml-3 text-gold" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}