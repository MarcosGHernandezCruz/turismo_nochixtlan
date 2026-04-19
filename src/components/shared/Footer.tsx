import Link from 'next/link';
import { Code2, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white border-t-4 border-accent">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Columna 1: Identidad */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4 flex items-center gap-2">
              <MapPin className="text-accent" />
              Explora Nochixtlán
            </h3>
            <p className="text-primary-foreground/80 font-serif leading-relaxed text-sm max-w-xs">
              Plataforma de promoción turística, cultural y comercial de la Heroica Ciudad de Asunción Nochixtlán, Oaxaca.
            </p>
          </div>

          {/* Columna 2: Navegación Rápida */}
          <div>
            <h4 className="font-bold uppercase tracking-widest text-accent text-xs mb-6">Navegación</h4>
            <ul className="space-y-3 font-serif text-primary-foreground/90">
              <li><Link href="/" className="hover:text-white transition-colors">Inicio & Directorio</Link></li>
              <li><Link href="/historia" className="hover:text-white transition-colors">Memoria Histórica</Link></li>
              <li><Link href="/contacto" className="hover:text-white transition-colors">Registro para Negocios</Link></li>
            </ul>
          </div>

          {/* Columna 3: Firma B2B */}
          <div>
            <h4 className="font-bold uppercase tracking-widest text-accent text-xs mb-6">Desarrollo Tecnológico</h4>
            <div className="bg-white/10 p-6 border border-white/20">
              <div className="flex items-center gap-3 mb-3">
                <Code2 size={20} className="text-accent" />
                <span className="font-serif font-bold text-lg">VIKOTECH Solutions</span>
              </div>
              <p className="text-xs text-primary-foreground/70 mb-1 uppercase tracking-wider">Ingeniero Principal</p>
              <p className="text-sm font-serif text-white">Marcos Gael Hernández Cruz • IA & Software developer</p>
            </div>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-white/20 text-center text-xs text-primary-foreground/60 font-serif">
          <p>&copy; {new Date().getFullYear()} VIKOTECH Solutions.</p>
        </div>
      </div>
    </footer>
  );
}