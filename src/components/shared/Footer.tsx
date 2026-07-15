import Link from 'next/link';
import { Code2, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white border-t-2 border-gold py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
        
        {/* Info Explora */}
        <div className="flex items-center gap-2">
          <MapPin className="text-gold w-5 h-5" />
          <span className="font-serif font-bold text-lg text-white">Explora Nochixtlán</span>
          <span className="text-xs text-slate-400 font-serif border-l border-slate-700 pl-2 hidden sm:inline">
            Tierra del Oro Rojo • Oaxaca
          </span>
        </div>

        {/* Enlaces Rápidos */}
        <nav className="flex gap-6 font-serif text-slate-300">
          <Link href="/" className="hover:text-gold transition-colors">Inicio</Link>
          <Link href="/historia" className="hover:text-gold transition-colors">Historia</Link>
          <Link href="/directorio" className="hover:text-gold transition-colors">Directorio</Link>
          <Link href="/contacto" className="hover:text-gold transition-colors">Registro</Link>
        </nav>

        {/* Desarrollado por */}
        <div className="flex items-center gap-3 text-xs text-slate-400 font-serif">
          <span>Desarrollado por</span>
          <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1 border border-white/10">
            <Code2 size={12} className="text-gold" />
            <span className="font-bold text-white">Marcos Gael Hernández</span>
          </div>
          <span className="text-xs text-slate-500">• Ing. de AI & ML</span>
        </div>

      </div>

      <div className="container mx-auto px-4 mt-6 pt-4 border-t border-slate-800 text-center text-xs text-slate-500 font-serif">
        <p>&copy; {new Date().getFullYear()} Marcos Gael Hernández. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}