import Link from 'next/link';
import { Code2, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#4A0E17] text-white border-t-4 border-gold">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Columna 1: Identidad */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold flex items-center gap-2 text-white">
              <MapPin className="text-gold" />
              Explora Nochixtlán
            </h3>
            <p className="text-white/80 font-serif leading-relaxed text-sm max-w-sm">
              Plataforma de promoción turística, cultural y comercial de la Heroica Ciudad de Asunción Nochixtlán, Oaxaca. Un recorrido por la Tierra del Oro Rojo.
            </p>
          </div>

          {/* Columna 2: Navegación Rápida */}
          <div>
            <h4 className="font-bold uppercase tracking-widest text-gold text-xs mb-6">Navegación</h4>
            <ul className="space-y-3 font-serif text-white/95">
              <li><Link href="/" className="hover:text-gold transition-colors">Inicio & Directorio</Link></li>
              <li><Link href="/historia" className="hover:text-gold transition-colors">Memoria Histórica</Link></li>
              <li><Link href="/contacto" className="hover:text-gold transition-colors">Registro para Negocios</Link></li>
            </ul>
          </div>

          {/* Columna 3: Firma B2B */}
          <div>
            <h4 className="font-bold uppercase tracking-widest text-gold text-xs mb-6">Desarrollo Tecnológico</h4>
            <div className="bg-white/5 p-6 border-l-4 border-gold shadow-md">
              <div className="flex items-center gap-3 mb-3">
                <Code2 size={20} className="text-gold" />
                <span className="font-serif font-bold text-lg text-white">VIKOTECH Solutions</span>
              </div>
              <p className="text-[10px] text-white/60 mb-1 uppercase tracking-wider font-bold">Ingeniero Principal</p>
              <p className="text-sm font-serif text-white/90">Marcos Gael Hernández Cruz</p>
              <p className="text-xs font-serif text-gold">IA & Software Developer</p>
            </div>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center text-xs text-white/50 font-serif">
          <p>&copy; {new Date().getFullYear()} VIKOTECH Solutions. Desarrollado con orgullo mexicano.</p>
        </div>
      </div>
    </footer>
  );
}