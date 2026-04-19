import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <div className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-primary">
      {/* Fondo y superposiciones */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?q=80&w=2000" 
          alt="Paisaje de Nochixtlán" 
          className="w-full h-full object-cover opacity-40 grayscale-[0.3]"
        />
        <div className="absolute inset-0 bg-linear-to-t from-primary/90 via-primary/50 to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center mt-16">
        <span className="text-accent font-bold tracking-[0.4em] uppercase text-sm md:text-base mb-6 block drop-shadow-md">
          Bienvenidos a la Mixteca Alta
        </span>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 leading-tight drop-shadow-lg">
          La Tierra de la <br className="hidden md:block"/> <span className="text-transparent bg-clip-text bg-linear-to-r from-[#F8F5F0] to-accent">grana o cochinilla</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-200 font-serif mb-12 leading-relaxed drop-shadow">
          Descubra el legado histórico, la riqueza natural y la vitalidad comercial de la Ciudad de Asunción Nochixtlán.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 px-2">
          <Link href="#mapa">
            <Button size="lg" className="w-full sm:w-auto rounded-none bg-accent hover:bg-accent/90 text-white font-serif uppercase tracking-widest px-8 py-6 shadow-xl">
              Sitios Históricos
            </Button>
          </Link>
          
          {/* AQUÍ ESTÁ LA CORRECCIÓN: Link envolviendo el botón hacia el directorio */}
          <Link href="/directorio">
            <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-none border-white text-white hover:bg-white hover:text-primary font-serif uppercase tracking-widest px-8 py-6 backdrop-blur-sm bg-white/5">
              Directorio Comercial <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}