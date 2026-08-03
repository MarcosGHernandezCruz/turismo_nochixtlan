"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, MapPin, Music, Landmark, Heart, ZoomIn, X } from "lucide-react";
import Image from "next/image";

// Imágenes de la calenda
const galeriaCalenda = [
  { src: "/calenda1.jpg", alt: "Canastas florales y convite en las calles" },
  { src: "/calenda2.jpg", alt: "Marmotas gigantes y bandas de viento mixtecas" },
  { src: "/calenda3.jpg", alt: "Monos de calenda tradicionales bailando" },
  { src: "/calenda4.jpg", alt: "Participación masiva en la calenda de Nochixtlán" },
  { src: "/calenda5.jpg", alt: "Guelaguetza y gala tradicional mixteca" }
];

// Cronograma Unificado (Todo el pueblo)
const diasFestividad = [
  {
    key: "ago1", date: "01 Ago", label: "Apertura", title: "Primer Anuncio Festivo",
    description: "La comunidad y los locatarios anuncian con júbilo el inicio del mes de nuestra Santa Patrona.",
    events: [
      { time: "07:00 AM", title: "Alegres Mañanitas", location: "Mercado Municipal", desc: "Alborada con el Mariachi Ñuu Savi para despertar al pueblo." },
      { time: "10:00 AM", title: "Misa y Solemne Procesión", location: "Calles Principales", desc: "Recorrido de fe con la sagrada imagen de la Virgen de la Asunción." }
    ]
  },
  {
    key: "velaciones", date: "04-12 Ago", label: "Velaciones", title: "El Solemne Novenario",
    description: "Días de recogimiento y tradición, donde el fervor de nuestras familias se hace presente.",
    events: [
      { time: "07:00 PM", title: "Rosarios y Velaciones", location: "Diferentes Sectores", desc: "Ceremonias vespertinas ofrendadas con devoción por las distintas familias y sectores de la comunidad." }
    ]
  },
  {
    key: "dom9", date: "09 Ago", label: "Expoferia", title: "Inauguración de la Gran Expoferia",
    description: "Arranca nuestra magna feria con adrenalina deportiva y el primer gran encuentro musical.",
    events: [
      { time: "10:00 AM", title: "Gran Carrera de Motocross", location: "Pista atrás del recinto", desc: "Evento deportivo para los amantes de la adrenalina." },
      { time: "03:00 PM", title: "Apertura de la Expo Emprendedores", location: "Recinto ferial", desc: "Muestra artesanal, comercial y gastronómica." },
      { time: "05:00 PM", title: "Primera Calenda de Bandas", location: "Recinto ferial", desc: "Las bandas recorren invitando a la población a unirse al festejo." },
      { time: "05:30 PM", title: "Corte de Listón de la Expoferia", location: "Recinto ferial", desc: "Inauguración oficial de las festividades cívicas." },
      { time: "06:30 PM", title: "Encuentro de Bandas y Marmoteros", location: "Recinto ferial", desc: "Duelo musical y baile de marmotas tradicionales." },
      { time: "09:00 PM", title: "Baile con Centenarios del Norte", location: "Recinto ferial", desc: "Primera gran noche musical de la feria." }
    ]
  },
  {
    key: "lun10", date: "10 Ago", label: "Folclor", title: "Tarde de Épocas y Tradición",
    description: "Rendimos tributo a nuestra identidad mixteca a través del color de nuestra ropa y la belleza de nuestras danzas.",
    events: [
      { time: "03:00 PM", title: "Expo Emprendedores", location: "Recinto ferial", desc: "Continúa la venta de productos locales." },
      { time: "05:00 PM", title: "Desfile del Traje Nochixtleco", location: "Recinto ferial", desc: "Demostración de nuestra indumentaria tradicional." },
      { time: "05:30 PM", title: "Ensamble Casa de la Cultura", location: "Recinto ferial", desc: "El talento joven de Nochixtlán en el escenario." },
      { time: "06:00 PM", title: "Danza Sangre Oaxaqueña", location: "Recinto ferial", desc: "Espectáculo folclórico representativo." },
      { time: "07:30 PM", title: "Tardeada con el Grupo Épocas", location: "Recinto ferial", desc: "Música del recuerdo para convivir en familia." }
    ]
  },
  {
    key: "mar11", date: "11 Ago", label: "Identidad", title: "Orgullo Nochixtleco y Rock",
    description: "Reconocemos a quienes llevan el nombre de Nochixtlán a lo alto y cerramos con energía juvenil.",
    events: [
      { time: "03:00 PM", title: "Expo Emprendedores", location: "Recinto ferial", desc: "Artesanías y gastronomía mixteca." },
      { time: "05:00 PM", title: "Presentación Muladhara Danza", location: "Recinto ferial", desc: "Arte y expresión dancística." },
      { time: "06:30 PM", title: "Banda Casa de la Cultura", location: "Recinto ferial", desc: "Concierto de viento." },
      { time: "07:00 PM", title: "Homenaje a la Delegación Nochixtleca", location: "Recinto ferial", desc: "Reconocimiento a nuestra representación en la máxima fiesta, la Guelaguetza." },
      { time: "07:30 PM", title: "Noche de Rock con Pipperyta", location: "Recinto ferial", desc: "Una dosis de energía para la juventud." }
    ]
  },
  {
    key: "mie12", date: "12 Ago", label: "Coronación", title: "Reinado y Magia Nocturna",
    description: "Día de elegancia y diversión. Arrancamos a caballo y terminamos coronando a nuestra reina.",
    events: [
      { time: "08:30 AM", title: "Magna Cabalgata Tradicional", location: "Campo Los Azulejos", desc: "Con cientos de jinetes recorriendo la región." },
      { time: "03:00 PM", title: "Expo Emprendedores", location: "Recinto ferial", desc: "" },
      { time: "06:30 PM", title: "Coronación de la Reina de la Fiesta", location: "Recinto ferial", desc: "El momento más esperado, engalanando nuestras noches de feria." },
      { time: "07:00 PM", title: "Show Cómico con Lalo España", location: "Recinto ferial", desc: "Risas garantizadas con el actor estelar." },
      { time: "09:00 PM", title: "Gran Baile de Coronación", location: "Recinto ferial", desc: "Sonido La Changa, DJ Víctor Estrella de Polymarch y Manuel La Voz Master." }
    ]
  },
  {
    key: "jue13", date: "13 Ago", label: "Magna Calenda", title: "El Gran Desfile de la Comunidad",
    description: "Por la tarde, el espectacular recorrido por las calles llenas de música, y en la noche, el folclor de gala.",
    events: [
      { time: "01:30 PM", title: "Bendición de la Tradicional Calenda", location: "Parroquia / Mercado", desc: "Acto de fe previo al gran recorrido." },
      { time: "02:00 PM", title: "Magna Calenda de Locatarios y Comunidad", location: "Principales Calles", desc: "El pueblo se viste de fiesta. Más de 5 bandas, majestuosas canasteras y los icónicos monos de calenda desbordan alegría." },
      { time: "06:00 PM", title: "Identidad: Orgullo Romerense", location: "Recinto ferial", desc: "Muestra de identidad." },
      { time: "07:00 PM", title: "Gala: Compañía Espacio Danza Colima", location: "Recinto ferial", desc: "Intercambio cultural espectacular con el estado de Colima." }
    ]
  },
  {
    key: "vie14", date: "14 Ago", label: "Flores y Luces", title: "Día de las Magnas Calendas",
    description: "La cumbre de la alegría. Todo Nochixtlán sale a las calles en una muestra inigualable de color y pirotecnia.",
    events: [
      { time: "02:30 PM", title: "Monumental Calenda de Flores", location: "Atrio Parroquial", desc: "La calenda más grande de la región. Un mar de mujeres con canastas, bandas de viento y monos gigantes recorriendo el pueblo." },
      { time: "05:00 PM", title: "Divertido Concurso de Disfraces", location: "Explanada Municipal", desc: "Creatividad al máximo en familia." },
      { time: "06:00 PM", title: "Tradicional Brindis de Calenda", location: "Explanada Municipal", desc: "Se comparte el mezcal y el tepache como símbolo de hermandad." },
      { time: "08:30 PM", title: "Espectacular Calenda de Luces", location: "Atrio Parroquial", desc: "La noche se enciende con gigantescos faroles de celofán y un torrente de pólvora y luz." },
      { time: "09:00 PM", title: "Baile Popular de Calenda", location: "Explanada Municipal", desc: "A cargo de Proyecto Show y los mejores DJ's locales." }
    ]
  },
  {
    key: "sab15", date: "15 Ago", label: "Día Mayor", title: "El Día Solemnísimo de la Asunción",
    description: "El corazón de nuestra fiesta. Veneramos a la Patrona, disfrutamos del deporte extremo y cerramos con un majestuoso baile de gala.",
    events: [
      { time: "00:00 AM", title: "Mañanitas a la Virgen de la Asunción", location: "Templo Parroquial", desc: "Al primer minuto del día, el pueblo le canta a su Patrona." },
      { time: "08:00 AM", title: "Misa Solemne de Función", location: "Templo Parroquial", desc: "La liturgia central en honor a Nuestra Señora." },
      { time: "09:00 AM", title: "Feria Gastronómica: Sabores con Tradiciones", location: "Recinto ferial", desc: "Degustación de lo mejor de nuestra cocina mixteca." },
      { time: "11:00 AM", title: "Competencia Off Road Nochixtlán", location: "Pista Extrema", desc: "Velocidad y motores en un circuito desafiante." },
      { time: "03:00 PM", title: "Espectacular Jaripeo Ranchero", location: "Campo 2", desc: "Toros de la Reserva 55 y montas al límite amenizadas por la Banda Estrella Dorada." },
      { time: "09:00 PM", title: "Quema de Castillo y Show Piromusical", location: "Atrio Parroquial", desc: "El cielo se ilumina al ritmo de la música y la tradición." },
      { time: "09:30 PM", title: "Baile de Gala: Internacional Carro Show", location: "Explanada Municipal", desc: "El romanticismo y sabor para celebrar en grande la noche principal." }
    ]
  },
  {
    key: "dom16", date: "16 Ago", label: "Clausura", title: "Deporte y el Megabaile de Clausura",
    description: "Despedimos las fiestas cívicas con el milenario juego de pelota mixteca y el baile más multitudinario del año.",
    events: [
      { time: "08:00 AM", title: "Arrancones Cuarto de Milla", location: "Ctra. Internacional 190", desc: "Fórmula de velocidad para despertar." },
      { time: "10:00 AM", title: "Torneos de Fútbol y Básquetbol", location: "Unidad Deportiva", desc: "Competencias con grandes bolsas de premios." },
      { time: "11:00 AM", title: "Encuentro de Pelota Mixteca", location: "Campo Pelota Mixteca", desc: "Orgullo prehispánico: Selección Nochixtlán vs. Oaxaca." },
      { time: "12:00 PM", title: "Solemne Procesión de Despedida", location: "Calles Principales", desc: "Acompañando a la imagen por última vez en las calles." },
      { time: "04:00 PM", title: "Concierto de la Banda de la Policía Estatal", location: "Atrio Parroquial", desc: "Espectáculo cultural para amenizar la tarde." },
      { time: "09:00 PM", title: "Gran Baile de Cierre de Fiestas", location: "Campo 2 Unidad Deportiva", desc: "VAGÓN CHICANO, Capaz de Juan Gómez y Los del Roble. ¡El evento masivo que despide la feria!" }
    ]
  },
  {
    key: "ago22", date: "22 Ago", label: "Octava", title: "La Octava de Acción de Gracias",
    description: "La culminación definitiva de las festividades, dando gracias por todas las bendiciones recibidas.",
    events: [
      { time: "10:00 PM", title: "Misa de Culminación", location: "Templo Parroquial", desc: "Eucaristía solemne de acción de gracias." }
    ]
  }
];

export default function FestividadPage() {
  const [activeTab, setActiveTab] = useState("vie14");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const activeDia = diasFestividad.find(d => d.key === activeTab) || diasFestividad[0];

  return (
    <div className="flex flex-col min-h-screen bg-[#F8F5F0]">
      
      {/* Hero de la Festividad */}
      <section className="relative w-full bg-[#EFECE6] border-b-2 border-gold py-28 overflow-hidden">
        <div className="container mx-auto px-4 text-center z-10 relative">
          <span className="text-accent text-sm font-bold tracking-[0.3em] uppercase mb-6 block">
            Nuestra Máxima Fiesta
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary mb-8 leading-tight">
            Festividad de Agosto Nochixtlán
          </h1>
          <p className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto font-serif leading-relaxed">
            Un encuentro de fe, comunidad y orgullo mixteco. Celebramos unidos en una sola voz la grandeza de nuestro pueblo y la devoción a nuestra patrona.
          </p>
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none text-primary">
          <Music size={500} />
        </div>
      </section>

      {/* Introducción Histórica (Sin Mascaritas) */}
      <section className="py-20 container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <span className="text-accent text-xs font-bold tracking-widest uppercase mb-4 block">Legado Vivo</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">Orígenes y Tradición Cofrade</h2>
          <div className="h-0.5 w-24 bg-accent mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white border-2 border-gold p-8 shadow-sm space-y-4 rounded-none">
            <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center border border-gold">
              <Landmark size={24} />
            </div>
            <h3 className="font-serif font-bold text-xl text-primary">Fundación y Templo (1624)</h3>
            <p className="text-slate-600 font-serif text-sm leading-relaxed">
              La devoción mariana nace con la refundación de Asunción Nochixtlán en 1527. Los frailes dominicos consolidaron la fe comunitaria edificando el majestuoso templo parroquial de cantera, concluido en 1624, que sigue siendo el corazón espiritual de nuestra fiesta.
            </p>
          </div>

          <div className="bg-white border-2 border-gold p-8 shadow-sm space-y-4 rounded-none">
            <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center border border-gold">
              <Heart size={24} />
            </div>
            <h3 className="font-serif font-bold text-xl text-primary">Hermandad y Velaciones</h3>
            <p className="text-slate-600 font-serif text-sm leading-relaxed">
              Días antes del 15 de agosto, la comunidad se une en "Las Velaciones", un novenario solemne donde familias y sectores comerciales ofrendan ceras y flores. Es la más profunda manifestación de hermandad y fervor que nos une como Nochixtlecos.
            </p>
          </div>
        </div>
      </section>

      {/* Galería de Carteles Oficiales */}
      <section className="py-16 bg-[#EFECE6] border-y border-slate-300">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-primary">Carteleras Oficiales de la Festividad</h2>
            <div className="h-0.5 w-16 bg-accent mx-auto mt-4"></div>
            <p className="text-slate-600 font-serif mt-4 text-sm">Nuestra programación cívica y eclesiástica para el disfrute de todos los visitantes y pobladores.</p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center gap-10 items-center">
            {/* Poster 1 */}
            <div className="relative w-full max-w-sm group cursor-pointer" onClick={() => setLightboxImage("/Festividad Flyer completo.jpg")}>
              <div className="absolute inset-0 bg-gold translate-x-3 translate-y-3"></div>
              <div className="relative bg-white border-2 border-primary p-2 overflow-hidden z-10 transition-transform duration-300 group-hover:-translate-y-2 group-hover:-translate-x-2">
                <div className="relative aspect-[2/3]">
                  <Image src="/Festividad Flyer completo.jpg" alt="Cartel Programa General" fill className="object-cover" sizes="(max-width: 768px) 100vw, 400px" />
                </div>
                <div className="absolute inset-0 bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[1px]">
                  <div className="bg-white p-3 rounded-full text-primary shadow-xl"><ZoomIn size={24} /></div>
                </div>
              </div>
            </div>

            {/* Poster 2 */}
            <div className="relative w-full max-w-sm group cursor-pointer" onClick={() => setLightboxImage("/Festividad Flyer mercado.jpg")}>
              <div className="absolute inset-0 bg-gold translate-x-3 translate-y-3"></div>
              <div className="relative bg-white border-2 border-primary p-2 overflow-hidden z-10 transition-transform duration-300 group-hover:-translate-y-2 group-hover:-translate-x-2">
                <div className="relative aspect-[2/3]">
                  <Image src="/Festividad Flyer mercado.jpg" alt="Cartel Mercado y Calenda" fill className="object-cover" sizes="(max-width: 768px) 100vw, 400px" />
                </div>
                <div className="absolute inset-0 bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[1px]">
                  <div className="bg-white p-3 rounded-full text-primary shadow-xl"><ZoomIn size={24} /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Unificado */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          
          <div className="text-center mb-12">
            <span className="text-accent text-xs font-bold tracking-widest uppercase mb-4 block">Agenda Día a Día</span>
            <h2 className="text-4xl font-serif font-bold text-primary">Línea de Tiempo del Festejo</h2>
            <div className="h-0.5 w-16 bg-accent mx-auto mt-4"></div>
          </div>

          <div className="bg-[#F8F5F0] border border-slate-200 p-6 md:p-10 shadow-inner">
            
            {/* Tabs de Días (Horizontal Scrollable) */}
            <div className="flex overflow-x-auto pb-6 mb-8 gap-3 snap-x scrollbar-thin scrollbar-thumb-gold scrollbar-track-transparent">
              {diasFestividad.map((dia) => {
                const isActive = dia.key === activeTab;
                return (
                  <button
                    key={dia.key}
                    onClick={() => setActiveTab(dia.key)}
                    className={`shrink-0 snap-start px-6 py-4 text-xs font-serif font-bold uppercase tracking-widest border-2 transition-all duration-300 rounded-none cursor-pointer
                      ${isActive 
                        ? 'bg-primary border-gold text-gold shadow-md scale-105' 
                        : 'bg-white border-slate-300 text-slate-500 hover:border-gold hover:text-primary'}`}
                  >
                    <span className="block text-[14px]">{dia.date}</span>
                    <span className="mt-1 font-sans font-normal opacity-80">{dia.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Contenido del Día (Línea de Tiempo Visual) */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDia.key}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <div className="border-b-2 border-gold pb-6 text-center md:text-left">
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-3">
                    {activeDia.title}
                  </h2>
                  <p className="text-slate-600 font-serif text-lg leading-relaxed">
                    {activeDia.description}
                  </p>
                </div>

                <div className="pl-4 md:pl-0 mt-8 relative before:absolute before:inset-0 before:ml-[15px] md:before:ml-[19px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-gold before:via-gold/50 before:to-transparent">
                  {activeDia.events.map((event, idx) => {
                    const isEven = idx % 2 === 0;
                    const isVagon = event.title.includes("VAGÓN CHICANO");
                    return (
                      <div key={idx} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group w-full pb-12 last:pb-0`}>
                        
                        {/* Timeline Node */}
                        <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white border-4 border-gold shadow-md flex items-center justify-center z-10 group-hover:scale-125 group-hover:border-accent transition-transform duration-300">
                          <Clock size={16} className="text-primary" />
                        </div>

                        {/* Card */}
                        <div className={`w-full ml-10 md:ml-0 md:w-[45%] ${isEven ? 'md:pr-12' : 'md:pl-12'} transition-all duration-300 group-hover:-translate-y-2`}>
                          <div className={`bg-white border-t-4 p-6 shadow-sm group-hover:shadow-xl relative overflow-hidden ${isVagon ? 'border-accent' : 'border-gold'}`}>
                            
                            {isVagon && (
                              <div className="absolute top-0 right-0 bg-accent text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5">
                                ¡Evento Magno!
                              </div>
                            )}

                            <div className="flex flex-col gap-3">
                              <span className={`inline-block font-serif font-bold text-lg px-3 py-1 w-fit border ${isVagon ? 'bg-accent/10 text-accent border-accent/20' : 'bg-primary/5 text-primary border-primary/10'}`}>
                                {event.time}
                              </span>
                              
                              <h4 className={`text-xl md:text-2xl font-serif font-bold leading-tight ${isVagon ? 'text-accent' : 'text-primary'}`}>
                                {event.title}
                              </h4>
                              
                              <div className="flex items-center gap-2 text-xs text-slate-500 font-serif uppercase tracking-wider">
                                <MapPin size={14} className="text-gold shrink-0" />
                                <span>{event.location}</span>
                              </div>
                              
                              {event.desc && (
                                <p className="text-slate-600 font-serif text-sm leading-relaxed pt-2 border-t border-slate-100">
                                  {event.desc}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>

                      </div>
                    );
                  })}
                </div>

              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Galería de la Calenda */}
      <section className="py-24 container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-accent text-xs font-bold tracking-widest uppercase mb-4 block">Capturas Reales</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">Instantes de Alegría y Tradición</h2>
          <div className="h-0.5 w-24 bg-accent mx-auto mt-4"></div>
          <p className="text-slate-600 font-serif mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            Explora las postales reales de nuestra celebración: el color de las canastas de flores, la inmensidad de las marmotas y la magia de estar unidos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galeriaCalenda.map((img, idx) => {
            let gridSpan = "col-span-1";
            if (idx === 1 || idx === 4) gridSpan = "col-span-1 md:col-span-2";
            
            return (
              <div key={idx} className={`relative aspect-[4/3] border-2 border-gold p-1.5 bg-white shadow-md hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 overflow-hidden group ${gridSpan}`}>
                <div className="w-full h-full relative overflow-hidden">
                  <Image src={img.src} alt={img.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white text-xs font-serif italic">{img.alt}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Lightbox Modal para los Flyers */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-10 backdrop-blur-sm"
            onClick={() => setLightboxImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-gold transition-colors z-50 p-2 bg-black/50 rounded-full cursor-pointer"
              onClick={() => setLightboxImage(null)}
            >
              <X size={32} />
            </button>
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full bg-black/20 rounded-lg overflow-hidden shadow-2xl">
                <Image 
                  src={lightboxImage}
                  alt="Cartel Oficial Expandido"
                  fill
                  sizes="(max-width: 1024px) 100vw, 90vw"
                  className="object-contain"
                  quality={100}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
