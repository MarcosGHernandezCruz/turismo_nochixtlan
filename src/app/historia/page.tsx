"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Droplet, Flag, Shield, Users } from "lucide-react";
import Image from "next/image";

const hitos = [
  {
    id: "prehispanica",
    year: "909 d.C.",
    title: "El Viejo Nochixtlán",
    subtitle: "Fundación",
    icon: BookOpen,
    content: "Según los códices mixtecos y la tradición oral, el asentamiento original fue fundado por el dirigente Ndazahuidandaa como una guarnición militar estratégica para proteger el valle de la Mixteca Alta."
  },
  {
    id: "toponimia",
    year: "Origen",
    title: "Lugar de la Grana Cochinilla",
    subtitle: "Toponimia",
    icon: Droplet,
    content: "En mixteco, el territorio es conocido como Nuanduco. Su nombre en náhuatl proviene de las raíces Nochiztli (grana) y tlan (lugar de). Este diminuto insecto que crece en los nopales produce un tinte natural carmín que se convirtió en uno de los principales aportes de México al mundo."
  },
  {
    id: "colonia",
    year: "1527",
    title: "La Nueva Asunción Nochixtlán",
    subtitle: "Colonia",
    icon: Flag,
    content: "Tras el abandono del asentamiento original entre 1521 y 1522 a causa de epidemias, Francisco de Orozco junto con un grupo de 59 mixtecos refundaron la ciudad bajo el nombre eclesiástico de Asunción Nochixtlán, dando paso posteriormente a la construcción del majestuoso Templo de Santo Domingo."
  },
  {
    id: "defensa",
    year: "1866",
    title: "Batalla de las Tres Cruces",
    subtitle: "Defensa",
    icon: Shield,
    content: "El 23 de septiembre de 1866, hombres y mujeres de la región respondieron al llamado del General Porfirio Díaz. En un acto de valentía, las tropas mixtecas lograron una de las primeras y más y más significativas derrotas contra el ejército intervencionista europeo."
  },
  {
    id: "memoria",
    year: "2016",
    title: "Los Sucesos del 19 de Junio",
    subtitle: "Memoria",
    icon: Users,
    content: "El 19 de junio de 2016, Asunción Nochixtlán fue escenario de un trágico enfrentamiento derivado de protestas magisteriales y sociales. Este doloroso suceso dejó una profunda huella en la memoria colectiva del municipio. Hoy en día, esta fecha es recordada con solemnidad como un día de luto, reflexión y un llamado constante a la justicia, el diálogo y la paz social."
  }
];

export default function HistoriaPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeEra = hitos[activeIndex];
  const IconComponent = activeEra.icon;

  return (
    <div className="flex flex-col min-h-screen bg-[#F8F5F0]">
      
      {/* Hero Histórico */}
      <section className="relative w-full bg-[#EFECE6] border-b-2 border-gold py-24">
        <div className="container mx-auto px-4 text-center z-10 relative">
          <span className="text-accent text-sm font-bold tracking-[0.3em] uppercase mb-6 block">
            Memoria de la Mixteca
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary mb-8 leading-tight">
            Historia de Asunción Nochixtlán
          </h1>
          <p className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto font-serif leading-relaxed">
            Desde sus orígenes prehispánicos bajo el nombre de Nuanduco, hasta convertirse en el epicentro comercial de la Mixteca Alta. Conoce el legado del lugar donde florece la grana cochinilla.
          </p>
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none overflow-hidden text-primary">
          <span className="font-serif text-[20rem] font-black">1866</span>
        </div>
      </section>

      {/* Línea de Tiempo Interactiva */}
      <section className="py-24 container mx-auto px-4">
        
        {/* Selector de Línea de Tiempo */}
        <div className="relative max-w-3xl mx-auto mb-16 px-4">
          {/* Línea conectora */}
          <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-slate-200 -translate-y-1/2 z-0"></div>
          {/* Línea activa conectora */}
          <div 
            className="absolute top-1/2 left-4 h-0.5 bg-gold -translate-y-1/2 z-0 transition-all duration-500 hidden md:block"
            style={{ width: `${(activeIndex / (hitos.length - 1)) * 92}%` }}
          ></div>
          
          <div className="relative flex justify-between items-center z-10">
            {hitos.map((hito, idx) => {
              const IsActive = idx === activeIndex;
              const HitoIcon = hito.icon;
              return (
                <button
                  key={hito.id}
                  onClick={() => setActiveIndex(idx)}
                  className="flex flex-col items-center focus:outline-none group"
                >
                  <div 
                    className={`w-12 h-12 flex items-center justify-center border-2 transition-all duration-300 rounded-none shadow-md cursor-pointer
                      ${IsActive 
                        ? 'bg-primary border-gold text-gold scale-110' 
                        : 'bg-white border-slate-300 text-slate-400 hover:border-gold hover:text-primary'}`}
                  >
                    <HitoIcon size={20} />
                  </div>
                  <span className={`text-xs font-serif font-bold uppercase tracking-wider mt-3 px-2 py-1 border transition-all duration-300
                    ${IsActive 
                      ? 'text-primary border-gold bg-[#EFECE6]' 
                      : 'text-slate-500 border-transparent bg-transparent group-hover:text-primary'}`}
                  >
                    {hito.year}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Contenedor del Hito Activo */}
        <div className="max-w-4xl mx-auto px-4 min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeEra.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white border-2 border-gold shadow-xl p-8 md:p-12 relative rounded-none"
            >
              {/* Sello decorativo de fondo */}
              <div className="absolute right-8 bottom-4 opacity-[0.03] text-primary pointer-events-none select-none">
                <span className="font-serif text-8xl md:text-9xl font-black">{activeEra.year}</span>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
                <div className="w-16 h-16 bg-[#6F1827] border-2 border-gold flex items-center justify-center text-gold shrink-0">
                  <IconComponent size={32} />
                </div>
                <div className="space-y-4 flex-1">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-accent uppercase tracking-widest bg-accent/10 px-3 py-1">
                      {activeEra.subtitle}
                    </span>
                    <span className="text-sm font-serif font-bold text-slate-400">
                      Hito {activeIndex + 1} de {hitos.length}
                    </span>
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-primary leading-tight">
                    {activeEra.title}
                  </h3>
                  <div className="h-0.5 w-16 bg-gold"></div>
                  <p className="text-slate-700 leading-relaxed font-serif text-lg pt-2">
                    {activeEra.content}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </section>

      {/* Sección de Personajes Ilustres */}
      <section className="py-24 bg-[#EFECE6] border-t border-slate-300">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-accent text-sm font-bold tracking-widest uppercase mb-4 block">
              Legado e Identidad
            </span>
            <h2 className="text-4xl font-serif font-bold text-primary">Personajes Ilustres</h2>
            <div className="h-0.5 w-24 bg-accent mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            
            {/* Abraham Castellanos */}
            <div className="flex flex-col md:flex-row gap-6 bg-white p-8 border-2 border-gold rounded-none shadow-md">
              <div className="md:w-1/3 flex-shrink-0">
                <div className="aspect-[3/4] bg-slate-100 border-2 border-gold p-1 rounded-none overflow-hidden relative">
                  <Image 
                    src="https://images.unsplash.com/photo-1550565118-3a14e8d0386f?q=80&w=400" 
                    alt="Abraham Castellanos"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover filter grayscale sepia"
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <h4 className="text-xs font-bold text-accent uppercase tracking-tighter mb-2">Pedagogo y Escritor</h4>
                <h3 className="text-2xl font-serif font-bold text-primary mb-3">Abraham Castellanos</h3>
                <p className="text-slate-700 font-serif leading-relaxed text-sm">
                  (1871–1918) Uno de los educadores más destacados de México. Originario de Nochixtlán, fue un ferviente defensor de la educación indígena y autor de obras fundamentales como \"El Rayo de Luz\". Su pensamiento pedagógico ayudó a cimentar las bases de la educación moderna en el país.
                </p>
              </div>
            </div>

            {/* Daniel C. Pineda */}
            <div className="flex flex-col md:flex-row gap-6 bg-white p-8 border-2 border-gold rounded-none shadow-md">
              <div className="md:w-1/3 flex-shrink-0">
                <div className="aspect-[3/4] bg-slate-100 border-2 border-gold p-1 rounded-none overflow-hidden relative">
                  <Image 
                    src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=400" 
                    alt="Música Tradicional"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover filter grayscale sepia"
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <h4 className="text-xs font-bold text-accent uppercase tracking-tighter mb-2">Músico y Compositor</h4>
                <h3 className="text-2xl font-serif font-bold text-primary mb-3">Daniel C. Pineda</h3>
                <p className="text-slate-700 font-serif leading-relaxed text-sm">
                  Célebre compositor cuya obra musical ha trascendido generaciones. Es autor del emblemático vals <span className="italic font-bold">\"Nochixtlán\"</span>, una pieza que se ha convertido en el himno sentimental de la región y que evoca la nostalgia y el orgullo de la tierra mixteca.
                </p>
              </div>
            </div>

          </div>

          {/* Mención a los Defensores de la Patria */}
          <div className="mt-16 max-w-3xl mx-auto text-center border-t border-slate-300 pt-12">
            <h3 className="text-xl font-serif font-bold text-foreground mb-4 italic">
              \"A los héroes anónimos de 1866\"
            </h3>
            <p className="text-slate-600 font-serif leading-relaxed">
              Nochixtlán también honra la memoria de los ciudadanos que, sin nombres en los libros de texto, tomaron las armas en la Batalla de las Tres Cruces para defender la soberanía nacional bajo el mando del General Porfirio Díaz.
            </p>
          </div>
        </div>
      </section>
      
    </div>
  );
}