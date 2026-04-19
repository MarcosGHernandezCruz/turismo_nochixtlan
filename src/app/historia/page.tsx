import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Droplet, Flag, Shield, Users } from "lucide-react";

export default function HistoriaPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8F5F0]">
      
      {/* Hero Histórico */}
      <section className="relative w-full bg-[#EFECE6] border-b border-slate-300 py-24">
        <div className="container mx-auto px-4 text-center z-10 relative">
          <span className="text-accent text-sm font-bold tracking-widest uppercase mb-6 block">
            Memoria de la Mixteca
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary mb-8">
            Historia de Asunción Nochixtlán
          </h1>
          <p className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto font-serif leading-relaxed">
            Desde sus orígenes prehispánicos bajo el nombre de Nuanduco, hasta convertirse en el epicentro comercial de la Mixteca Alta. Conoce el legado del lugar donde florece la grana cochinilla.
          </p>
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none overflow-hidden text-primary">
          <span className="font-serif text-[20rem] font-black">1527</span>
        </div>
      </section>

      {/* Línea de Tiempo */}
      <section className="py-24 container mx-auto px-4 max-w-4xl">
        <div className="space-y-16">
          
          {/* Época Prehispánica */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/4 flex flex-col items-center md:items-end text-center md:text-right pt-2">
              <span className="text-3xl font-serif font-bold text-primary">909 d.C.</span>
              <span className="text-sm font-semibold text-accent uppercase tracking-wider mt-1 block">Fundación</span>
            </div>
            <div className="hidden md:flex flex-col items-center">
              <div className="w-12 h-12 bg-white border-2 border-primary flex items-center justify-center text-primary z-10 rounded-none shadow-sm">
                <BookOpen size={20} />
              </div>
              <div className="w-px h-full bg-slate-300 mt-4"></div>
            </div>
            <Card className="md:w-3/4 rounded-none border-l-4 border-l-primary border-y border-r border-slate-200 bg-white shadow-none">
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif font-bold text-primary mb-4">El Viejo Nochixtlán</h3>
                <p className="text-slate-700 leading-relaxed font-serif text-lg">
                  Según los códices mixtecos y la tradición oral, el asentamiento original fue fundado por el dirigente Ndazahuidandaa como una guarnición militar estratégica para proteger el valle de la Mixteca Alta.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* El Oro Rojo */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/4 flex flex-col items-center md:items-end text-center md:text-right pt-2">
              <span className="text-3xl font-serif font-bold text-primary">Origen</span>
              <span className="text-sm font-semibold text-accent uppercase tracking-wider mt-1 block">Toponimia</span>
            </div>
            <div className="hidden md:flex flex-col items-center">
              <div className="w-12 h-12 bg-white border-2 border-accent flex items-center justify-center text-accent z-10 rounded-none shadow-sm">
                <Droplet size={20} />
              </div>
              <div className="w-px h-full bg-slate-300 mt-4"></div>
            </div>
            <Card className="md:w-3/4 rounded-none border-l-4 border-l-accent border-y border-r border-slate-200 bg-white shadow-none">
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif font-bold text-accent mb-4">Lugar de la Grana Cochinilla</h3>
                <p className="text-slate-700 leading-relaxed font-serif text-lg">
                  En mixteco, el territorio es conocido como <span className="font-bold italic">Nuanduco</span>. Su nombre en náhuatl proviene de las raíces <span className="italic">Nochiztli</span> (grana) y <span className="italic">tlan</span> (lugar de). Este diminuto insecto que crece en los nopales produce un tinte natural carmín que se convirtió en uno de los principales aportes de México al mundo.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Refundación */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/4 flex flex-col items-center md:items-end text-center md:text-right pt-2">
              <span className="text-3xl font-serif font-bold text-primary">1527</span>
              <span className="text-sm font-semibold text-accent uppercase tracking-wider mt-1 block">Colonia</span>
            </div>
            <div className="hidden md:flex flex-col items-center">
              <div className="w-12 h-12 bg-white border-2 border-primary flex items-center justify-center text-primary z-10 rounded-none shadow-sm">
                <Flag size={20} />
              </div>
              <div className="w-px h-full bg-slate-300 mt-4"></div>
            </div>
            <Card className="md:w-3/4 rounded-none border-l-4 border-l-primary border-y border-r border-slate-200 bg-white shadow-none">
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif font-bold text-primary mb-4">La Nueva Asunción Nochixtlán</h3>
                <p className="text-slate-700 leading-relaxed font-serif text-lg">
                  Tras el abandono del asentamiento original entre 1521 y 1522 a causa de epidemias, Francisco de Orozco junto con un grupo de 59 mixtecos refundaron la ciudad bajo el nombre eclesiástico de Asunción Nochixtlán, dando paso posteriormente a la construcción del majestuoso Templo de Santo Domingo.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Batalla Militar */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/4 flex flex-col items-center md:items-end text-center md:text-right pt-2">
              <span className="text-3xl font-serif font-bold text-primary">1866</span>
              <span className="text-sm font-semibold text-accent uppercase tracking-wider mt-1 block">Defensa</span>
            </div>
            <div className="hidden md:flex flex-col items-center">
              <div className="w-12 h-12 bg-white border-2 border-accent flex items-center justify-center text-accent z-10 rounded-none shadow-sm">
                <Shield size={20} />
              </div>
              {/* Línea que conecta a los sucesos de 2016 */}
              <div className="w-px h-full bg-slate-300 mt-4"></div>
            </div>
            <Card className="md:w-3/4 rounded-none border-l-4 border-l-accent border-y border-r border-slate-200 bg-white shadow-none">
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif font-bold text-accent mb-4">Batalla de las Tres Cruces</h3>
                <p className="text-slate-700 leading-relaxed font-serif text-lg">
                  El 23 de septiembre de 1866, hombres y mujeres de la región respondieron al llamado del General Porfirio Díaz. En un acto de valentía, las tropas mixtecas lograron una de las primeras y más significativas derrotas contra el ejército intervencionista europeo.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Sucesos Contemporáneos */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/4 flex flex-col items-center md:items-end text-center md:text-right pt-2">
              <span className="text-3xl font-serif font-bold text-primary">2016</span>
              <span className="text-sm font-semibold text-accent uppercase tracking-wider mt-1 block">Memoria</span>
            </div>
            <div className="hidden md:flex flex-col items-center">
              <div className="w-12 h-12 bg-white border-2 border-primary flex items-center justify-center text-primary z-10 rounded-none shadow-sm">
                <Users size={20} />
              </div>
            </div>
            <Card className="md:w-3/4 rounded-none border-l-4 border-l-primary border-y border-r border-slate-200 bg-white shadow-none">
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif font-bold text-primary mb-4">Los Sucesos del 19 de Junio</h3>
                <p className="text-slate-700 leading-relaxed font-serif text-lg">
                  El 19 de junio de 2016, Asunción Nochixtlán fue escenario de un trágico enfrentamiento derivado de protestas magisteriales y sociales. Este doloroso suceso dejó una profunda huella en la memoria colectiva del municipio. Hoy en día, esta fecha es recordada con solemnidad como un día de luto, reflexión y un llamado constante a la justicia, el diálogo y la paz social.
                </p>
              </CardContent>
            </Card>
          </div>

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
            <div className="flex flex-col md:flex-row gap-6 bg-white p-8 border border-slate-200 rounded-none shadow-sm">
              <div className="md:w-1/3 flex-shrink-0">
                <div className="aspect-[3/4] bg-slate-100 border-2 border-primary p-1 rounded-none overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1550565118-3a14e8d0386f?q=80&w=400" 
                    alt="Abraham Castellanos"
                    className="w-full h-full object-cover filter grayscale sepia"
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <h4 className="text-xs font-bold text-accent uppercase tracking-tighter mb-2">Pedagogo y Escritor</h4>
                <h3 className="text-2xl font-serif font-bold text-primary mb-3">Abraham Castellanos</h3>
                <p className="text-slate-700 font-serif leading-relaxed text-sm">
                  (1871–1918) Uno de los educadores más destacados de México. Originario de Nochixtlán, fue un ferviente defensor de la educación indígena y autor de obras fundamentales como "El Rayo de Luz". Su pensamiento pedagógico ayudó a cimentar las bases de la educación moderna en el país.
                </p>
              </div>
            </div>

            {/* Daniel C. Pineda */}
            <div className="flex flex-col md:flex-row gap-6 bg-white p-8 border border-slate-200 rounded-none shadow-sm">
              <div className="md:w-1/3 flex-shrink-0">
                <div className="aspect-[3/4] bg-slate-100 border-2 border-primary p-1 rounded-none overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=400" 
                    alt="Música Tradicional"
                    className="w-full h-full object-cover filter grayscale sepia"
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <h4 className="text-xs font-bold text-accent uppercase tracking-tighter mb-2">Músico y Compositor</h4>
                <h3 className="text-2xl font-serif font-bold text-primary mb-3">Daniel C. Pineda</h3>
                <p className="text-slate-700 font-serif leading-relaxed text-sm">
                  Célebre compositor cuya obra musical ha trascendido generaciones. Es autor del emblemático vals <span className="italic font-bold">"Nochixtlán"</span>, una pieza que se ha convertido en el himno sentimental de la región y que evoca la nostalgia y el orgullo de la tierra mixteca.
                </p>
              </div>
            </div>

          </div>

          {/* Mención a los Defensores de la Patria */}
          <div className="mt-16 max-w-3xl mx-auto text-center border-t border-slate-300 pt-12">
            <h3 className="text-xl font-serif font-bold text-foreground mb-4 italic">
              "A los héroes anónimos de 1866"
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