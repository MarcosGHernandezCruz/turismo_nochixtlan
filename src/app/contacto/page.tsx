import { MapPin, Mail, Phone, Building, Briefcase, Cpu, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ContactoPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8F5F0]">
      
      {/* Hero B2B / Institucional */}
      <section className="relative w-full bg-[#EFECE6] border-b border-slate-300 py-20">
        <div className="container mx-auto px-4 text-center z-10 relative">
          <span className="text-accent text-sm font-bold tracking-widest uppercase mb-6 block">
            Crecimiento Local
          </span>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-6">
            Impulsa tu Negocio en la Mixteca
          </h1>
          <p className="text-lg md:text-xl text-slate-700 max-w-2xl mx-auto font-serif leading-relaxed">
            Forma parte del directorio turístico más avanzado de Asunción Nochixtlán. Atrae a más visitantes y moderniza tu presencia digital.
          </p>
        </div>
      </section>

      <section className="py-20 container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Columna Izquierda: Propuesta de Valor */}
          <div className="lg:w-5/12 space-y-12">
            <div>
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">
                ¿Por qué unirte a Explora Nochixtlán?
              </h2>
              <div className="h-0.5 w-16 bg-accent mb-8"></div>
              
              <div className="space-y-8">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-white border border-primary flex items-center justify-center text-primary rounded-none shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg text-foreground">Visibilidad Total</h3>
                    <p className="text-slate-600 font-serif leading-relaxed text-sm">
                      Aparece en nuestro mapa interactivo y directorio oficial. Los turistas sabrán exactamente dónde estás y cómo llegar.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-white border border-accent flex items-center justify-center text-accent rounded-none shrink-0">
                    <Building size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg text-foreground">Perfil Profesional</h3>
                    <p className="text-slate-600 font-serif leading-relaxed text-sm">
                      Muestra fotos de alta calidad, horarios de atención y la historia detrás de tu establecimiento o servicios.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-white border border-primary flex items-center justify-center text-primary rounded-none shrink-0">
                    <Cpu size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg text-foreground">Integración con IA</h3>
                    <p className="text-slate-600 font-serif leading-relaxed text-sm">
                      Nuestro Guía Virtual recomendará tu negocio automáticamente a los turistas que busquen opciones como la tuya.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Información de Contacto Directo */}
            <div className="bg-[#EFECE6] p-8 border border-slate-300">
              <h3 className="font-serif font-bold text-primary mb-4">Atención Directa</h3>
              <ul className="space-y-4 text-slate-700 font-serif text-sm">
                <li className="flex items-center gap-3">
                  <Phone size={16} className="text-accent" />
                  <span>+52 951 XXX XXXX</span> {/* Reemplaza con tu número */}
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={16} className="text-accent" />
                  <span>contacto@vikotech.com</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Columna Derecha: Formulario de Registro */}
          <div className="lg:w-7/12">
            <div className="bg-white p-8 md:p-12 border-t-4 border-t-primary border-x border-b border-slate-200 shadow-sm">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-2">Solicitud de Inscripción</h3>
              <p className="text-slate-500 font-serif text-sm mb-8">
                Completa este formulario y nuestro equipo de ingeniería se pondrá en contacto para digitalizar tu negocio.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Nombre del Propietario</label>
                    <Input placeholder="Ej. Juan Pérez" className="rounded-none border-slate-300 focus-visible:ring-primary font-serif" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Nombre del Negocio</label>
                    <Input placeholder="Ej. Hotel Mixteca" className="rounded-none border-slate-300 focus-visible:ring-primary font-serif" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Teléfono / WhatsApp</label>
                    <Input type="tel" placeholder="10 dígitos" className="rounded-none border-slate-300 focus-visible:ring-primary font-serif" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Categoría</label>
                    <select className="flex h-10 w-full border border-slate-300 bg-background px-3 py-2 text-sm font-serif focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50 rounded-none text-slate-600">
                      <option value="">Selecciona un giro...</option>
                      <option value="hospedaje">Hospedaje</option>
                      <option value="gastronomia">Gastronomía y Restaurantes</option>
                      <option value="artesania">Artesanía y Productos Locales</option>
                      <option value="servicios">Servicios Turísticos</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Cuéntanos sobre tu negocio</label>
                  <textarea 
                    className="flex min-h-30 w-full border border-slate-300 bg-background px-3 py-2 text-sm font-serif focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-none resize-none"
                    placeholder="¿Dónde estás ubicado? ¿Qué te hace especial?"
                  ></textarea>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-none py-6 font-serif text-lg tracking-wide">
                  Enviar Solicitud
                </Button>
              </form>
            </div>
          </div>

        </div>
      </section>

      {/* Sección de Créditos B2G / Autoría Tecnológica */}
      <section className="py-16 bg-white border-t border-slate-200 mt-auto">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="inline-flex items-center justify-center p-3 bg-[#F8F5F0] border border-slate-200 rounded-none mb-6">
            <Code2 size={24} className="text-primary" />
          </div>
          <h2 className="text-xl font-serif font-bold text-foreground mb-4">
            Arquitectura y Desarrollo Tecnológico
          </h2>
          <p className="text-slate-600 font-serif leading-relaxed mb-8 max-w-2xl mx-auto">
            Esta plataforma es una iniciativa de digitalización regional, diseñada con arquitectura en la nube e Inteligencia Artificial para potenciar el desarrollo económico de la Mixteca Oaxaqueña.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
            <div className="text-center md:text-right">
              <p className="text-xs font-bold text-accent uppercase tracking-widest mb-1">Ingeniero Principal</p>
              <p className="text-lg font-serif font-bold text-primary">Marcos Gael</p>
              <p className="text-sm text-slate-500 font-serif">Ingeniero en IA Certificado por Microsoft</p>
            </div>
            
            <div className="hidden md:block w-px h-16 bg-slate-300"></div>
            
            <div className="text-center md:text-left">
              <p className="text-xs font-bold text-accent uppercase tracking-widest mb-1">Agencia Desarrolladora</p>
              <p className="text-lg font-serif font-bold text-primary">VIKOTECH Solutions</p>
              <p className="text-sm text-slate-500 font-serif">Soluciones de Software y Automatización B2B</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}