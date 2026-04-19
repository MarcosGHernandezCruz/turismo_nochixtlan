"use client";
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Componente SVG: Nopal (Identidad)
const NopalIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2C11.79 2 10 3.79 10 6V18C10 20.21 11.79 22 14 22C16.21 22 18 20.21 18 18V6C18 3.79 16.21 2 14 2ZM6 7C4.34 7 3 8.34 3 10V12C3 13.66 4.34 15 6 15C7.1 15 8.04 14.4 8.6 13.5V8.5C8.04 7.6 7.1 7 6 7ZM22 12V10C22 8.34 20.66 7 19 7C17.9 7 16.96 7.6 16.4 8.5V13.5C16.96 14.4 17.9 15 19 15C20.66 15 22 13.66 22 12Z" />
  </svg>
);

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-300 bg-[#F8F5F0]/95 backdrop-blur supports-backdrop-filter:bg-[#F8F5F0]/80">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        
        {/* Logo Institucional */}
        <Link href="/" className="flex items-center space-x-3 group" onClick={closeMenu}>
          <div className="w-10 h-10 bg-white border border-primary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors rounded-none shadow-sm">
            <NopalIcon className="w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-serif font-bold text-primary tracking-tight leading-none">Explora</span>
            <span className="text-sm font-bold text-accent tracking-widest uppercase leading-none mt-1">Nochixtlán</span>
          </div>
        </Link>

        {/* Navegación Desktop */}
        <nav className="hidden md:flex gap-8 items-center">
          <Link href="/" className="text-sm font-serif font-bold text-slate-700 hover:text-primary transition-colors uppercase tracking-wider">Inicio</Link>
          <Link href="/historia" className="text-sm font-serif font-bold text-slate-700 hover:text-primary transition-colors uppercase tracking-wider">Historia</Link>
          <Link href="/directorio" className="text-sm font-serif font-bold text-slate-700 hover:text-primary transition-colors uppercase tracking-wider">Directorio</Link>
        </nav>

        {/* Botón Desktop Alta Negocios */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/contacto">
            <Button variant="outline" className="rounded-none border-primary text-primary hover:bg-primary/10 font-serif uppercase text-xs tracking-widest font-bold">
              Alta de Negocios
            </Button>
          </Link>
        </div>

        {/* Botón Menú Hamburguesa (Mobile) */}
        <button className="md:hidden p-2 text-primary hover:bg-primary/10 active:bg-primary/20 transition-all rounded-lg min-h-12 min-w-12 flex items-center justify-center focus-visible:ring-2 focus-visible:ring-primary/50" onClick={toggleMenu} aria-label="Menú principal" aria-expanded={isMenuOpen}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menú Desplegable Mobile */}
      <div className={`md:hidden fixed top-20 left-0 right-0 w-screen bg-[#F8F5F0] border-b border-slate-300 shadow-2xl flex flex-col px-4 py-6 space-y-2 z-30 max-h-[calc(100vh-80px)] overflow-y-auto transition-all duration-200 ease-out ${
        isMenuOpen 
          ? 'opacity-100 visible translate-y-0' 
          : 'opacity-0 invisible -translate-y-2'
      }`}>
        <Link href="/" onClick={closeMenu} className="text-lg font-serif font-bold text-primary uppercase tracking-wider px-4 py-3 min-h-12 flex items-center hover:bg-primary/5 active:bg-primary/10 transition-colors rounded-lg border-b border-slate-200 mb-2">
          Inicio
        </Link>
        <Link href="/historia" onClick={closeMenu} className="text-lg font-serif font-bold text-primary uppercase tracking-wider px-4 py-3 min-h-12 flex items-center hover:bg-primary/5 active:bg-primary/10 transition-colors rounded-lg border-b border-slate-200 mb-2">
          Historia
        </Link>
        <Link href="/directorio" onClick={closeMenu} className="text-lg font-serif font-bold text-primary uppercase tracking-wider px-4 py-3 min-h-12 flex items-center hover:bg-primary/5 active:bg-primary/10 transition-colors rounded-lg border-b border-slate-200 mb-4">
          Directorio Comercial
        </Link>
        <Link href="/contacto" onClick={closeMenu}>
          <Button className="w-full rounded-lg bg-primary text-white font-serif uppercase tracking-widest py-3 shadow-md hover:bg-primary/90 active:scale-95 transition-all min-h-12">
            Alta de Negocios
          </Button>
        </Link>
      </div>
    </header>
  );
}