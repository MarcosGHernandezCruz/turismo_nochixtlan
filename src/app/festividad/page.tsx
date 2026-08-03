"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, MapPin, Music, HelpCircle, Landmark, ShieldAlert, Sparkles, Heart } from "lucide-react";
import Image from "next/image";

// Imágenes reales de la calenda proporcionadas por el usuario
const galeriaCalenda = [
  { src: "/calenda1.jpg", alt: "Canastas florales y convite en las calles" },
  { src: "/calenda2.jpg", alt: "Marmotas gigantes y bandas de viento mixtecas" },
  { src: "/calenda3.jpg", alt: "Monos de calenda tradicionales bailando" },
  { src: "/calenda4.jpg", alt: "Participación masiva en la calenda de Nochixtlán" },
  { src: "/calenda5.jpg", alt: "Guelaguetza y gala tradicional mixteca" }
];

const diasFestividad = [
  {
    key: "dom9",
    date: "09 Ago",
    label: "Apertura",
    title: "Inauguración de la Expoferia",
    description: "Iniciamos nuestra gran celebración con la apertura de la feria, deporte extremo y el primer encuentro de bandas.",
    events: [
      { time: "10:00 AM", title: "Motocross", location: "Pista atrás del recinto", desc: "" },
      { time: "03:00 PM", title: "Expo emprendedores", location: "Recinto ferial", desc: "De 3:00 a 8:00 p.m." },
      { time: "05:00 PM", title: "Calenda de Bandas", location: "Recinto ferial", desc: "" },
      { time: "05:30 PM", title: "Inauguración Expoferia", location: "Recinto ferial", desc: "" },
      { time: "06:30 PM", title: "Encuentro de Bandas y Marmoteros", location: "Recinto ferial", desc: "" },
      { time: "09:00 PM", title: "Centenarios del Norte", location: "Recinto ferial", desc: "Presentación musical." }
    ]
  },
  {
    key: "lun10",
    date: "10 Ago",
    label: "Épocas",
    title: "Tradición y Épocas Nochixtlecas",
    description: "Una tarde dedicada a destacar nuestra vestimenta, danza y los recuerdos musicales de la región.",
    events: [
      { time: "03:00 PM", title: "Expo emprendedores", location: "Recinto ferial", desc: "De 3:00 a 8:00 p.m." },
      { time: "05:00 PM", title: "Presentación del traje nochixtleco", location: "Recinto ferial", desc: "Por mujeres nochixtlecas." },
      { time: "05:30 PM", title: "Ensamble Casa de la Cultura", location: "Recinto ferial", desc: "" },
      { time: "06:00 PM", title: "Grupo de danza Sangre Oaxaqueña", location: "Recinto ferial", desc: "" },
      { time: "07:30 PM", title: "Grupo Épocas", location: "Recinto ferial", desc: "Presentación musical." }
    ]
  },
  {
    key: "mar11",
    date: "11 Ago",
    label: "Identidad",
    title: "Danza, Folclor y Rock",
    description: "Reconocimiento a nuestra delegación que nos representó en la Guelaguetza y mucha más cultura.",
    events: [
      { time: "03:00 PM", title: "Expo emprendedores", location: "Recinto ferial", desc: "De 3:00 a 8:00 p.m." },
      { time: "05:00 PM", title: "Muladhara Danza", location: "Recinto ferial", desc: "" },
      { time: "06:30 PM", title: "Banda Casa de la Cultura", location: "Recinto ferial", desc: "" },
      { time: "07:00 PM", title: "Presentación de la Delegación Nochixtleca", location: "Recinto ferial", desc: "Reconocimiento por participación en la Guelaguetza." },
      { time: "07:30 PM", title: "Pipperyta Rock", location: "Recinto ferial", desc: "Presentación musical." }
    ]
  },
  {
    key: "mie12",
    date: "12 Ago",
    label: "Coronación",
    title: "Coronación y Gran Baile de la Reina",
    description: "El tradicional día de la reina con cabalgata matutina, coronación, comedia y el primer gran baile.",
    events: [
      { time: "08:30 AM", title: "Cabalgata Tradicional", location: "Campo Los Azulejos", desc: "" },
      { time: "03:00 PM", title: "Expo emprendedores", location: "Recinto ferial", desc: "De 3:00 a 8:00 p.m." },
      { time: "05:30 PM", title: "Presentación de la Reina de la fiesta", location: "Recinto ferial", desc: "" },
      { time: "06:30 PM", title: "Coronación de la Reina", location: "Recinto ferial", desc: "" },
      { time: "07:00 PM", title: "Show de Lalo España", location: "Recinto ferial", desc: "Show cómico estelar." },
      { time: "09:00 PM", title: "Baile de Coronación", location: "Recinto ferial", desc: "Sonido la Changa, DJ Víctor Estrella de Polymarch y Manuel La Voz Master." }
    ]
  },
  {
    key: "jue13",
    date: "13 Ago",
    label: "Cultural",
    title: "Danza e Identidad Romerense",
    description: "Intercambio cultural con la Compañía Espacio Danza de Colima y representaciones folclóricas.",
    events: [
      { time: "03:00 PM", title: "Expo emprendedores", location: "Recinto ferial", desc: "De 3:00 a 8:00 p.m." },
      { time: "05:00 PM", title: "Casa de Cultura Ballet", location: "Recinto ferial", desc: "" },
      { time: "06:00 PM", title: "Orgullo Romerense", location: "Recinto ferial", desc: "" },
      { time: "06:30 PM", title: "Orgullo de mi identidad", location: "Recinto ferial", desc: "" },
      { time: "07:00 PM", title: "Compañía espacio Danza de Colima", location: "Recinto ferial", desc: "" }
    ]
  },
  {
    key: "vie14",
    date: "14 Ago",
    label: "Calendas",
    title: "Día de Grandes Calendas (Flores y Luces)",
    description: "El evento más concurrido. Dos calendas emblemáticas que llenan de flores, colores y luces a la población.",
    events: [
      { time: "02:30 PM", title: "Mega Calenda de Flores", location: "Atrio Parroquial", desc: "Inicio de la calenda más grande del estado." },
      { time: "05:00 PM", title: "Concurso de Disfraces", location: "Explanada Municipal", desc: "" },
      { time: "06:00 PM", title: "Brindis de Calenda", location: "Explanada Municipal", desc: "" },
      { time: "08:30 PM", title: "Calenda de Luces", location: "Atrio Parroquial", desc: "Recorrido nocturno espectacular." },
      { time: "09:00 PM", title: "Baile de Calenda", location: "Explanada Municipal", desc: "Proyecto Show y DJ's locales." }
    ]
  },
  {
    key: "sab15",
    date: "15 Ago",
    label: "Día Mayor",
    title: "Día de la Virgen y Jaripeo",
    description: "Día central litúrgico y de tradiciones extremas como el off road y el jaripeo ranchero, culminando con el Carro Show.",
    events: [
      { time: "00:00 AM", title: "Mañanitas a la virgen de la Asunción", location: "Templo Parroquial", desc: "" },
      { time: "09:00 AM", title: "Feria Gastronómica", location: "Recinto ferial", desc: "Sabores con Tradiciones (De 9:00 a.m. a 5:00 p.m.)." },
      { time: "09:00 AM", title: "Show de las escandalosas", location: "Recinto ferial", desc: "" },
      { time: "11:00 AM", title: "Off Road Nochixtlán", location: "Parte posterior del recinto", desc: "" },
      { time: "03:00 PM", title: "Jaripeo Ranchero: Reserve 55", location: "Campo 2", desc: "Jinetes del niño de San Miguel, Banda Estrella Dorada." },
      { time: "09:00 PM", title: "Tradicional Castillo y Piromusical", location: "Atrio Parroquial", desc: "" },
      { time: "09:30 PM", title: "Baile de Gala: Internacional Carro Show", location: "Explanada Municipal", desc: "Presentación estelar." }
    ]
  },
  {
    key: "dom16",
    date: "16 Ago",
    label: "Clausura",
    title: "Deportes Tradicionales y Baile Estelar",
    description: "Cierre deportivo, la Danza de Mascaritas y el gran baile masivo de feria clausurando nuestras festividades.",
    events: [
      { time: "08:00 AM", title: "Arrancones Cuarto de Milla", location: "Ctra. Internacional 190", desc: "" },
      { time: "09:00 AM", title: "Feria Gastronómica", location: "Recinto ferial", desc: "Sabores con Tradiciones (De 9:00 a.m. a 5:00 p.m.)." },
      { time: "09:00 AM", title: "Torneo Hexagonal de Fútbol (Bolsa 150 mil)", location: "Campo 1", desc: "" },
      { time: "10:00 AM", title: "Torneo Básquetbol (Bolsa 113 mil) / Veteranos y Femenil", location: "Cancha Bicentenario", desc: "" },
      { time: "11:00 AM", title: "Pelota Mixteca 2a Fuerza (Nochixtlán vs. Oaxaca)", location: "Campo Pelota Mixteca", desc: "Varonil Juvenil Sub 18 (11:00 a.m.)" },
      { time: "12:00 PM", title: "Celebración Eucarística y Procesión", location: "Atrio Parroquial", desc: "" },
      { time: "01:00 PM", title: "Pelota Mixteca 1a Fuerza", location: "Campo Pelota Mixteca", desc: "" },
      { time: "02:00 PM", title: "Presentación de las Mascaritas", location: "Atrio Parroquial", desc: "Tradicional danza mixteca." },
      { time: "04:00 PM", title: "Concierto Banda de la Policía Estatal", location: "Atrio Parroquial", desc: "" },
      { time: "09:00 PM", title: "Gran Baile de Cierre de Fiesta", location: "Campo 2 Unidad Deportiva", desc: "Presentación de Los del Roble, VAGÓN CHICANO y Capaz de Juan Gómez." }
    ]
  }
];

export default function FestividadPage() {
  const [activeTab, setActiveTab] = useState("vie14");
  const activeDia = diasFestividad.find(d => d.key === activeTab) || diasFestividad[5];

  return (
    <div className="flex flex-col min-h-screen bg-[#F8F5F0]">
      
      {/* Hero de la Festividad */}
      <section className="relative w-full bg-[#EFECE6] border-b-2 border-gold py-28 overflow-hidden">
        <div className="container mx-auto px-4 text-center z-10 relative">
          <span className="text-accent text-sm font-bold tracking-[0.3em] uppercase mb-6 block">
            Patrimonio, Fe y Tradición
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary mb-8 leading-tight">
            Festividad de Agosto Nochixtlán
          </h1>
          <p className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto font-serif leading-relaxed">
            Un encuentro con el alma de la Mixteca Alta en honor a la Virgen de la Asunción. Vive la majestuosidad de la calenda más grande de Oaxaca, danzas ancestrales y un fervor comunitario único.
          </p>
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none text-primary">
          <Music size={500} />
        </div>
      </section>

      {/* Introducción Histórica e Identitaria */}
      <section className="py-20 container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-accent text-xs font-bold tracking-widest uppercase mb-4 block">Legado Vivo</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">Orígenes y Tradición Cofrade</h2>
          <div className="h-0.5 w-24 bg-accent mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white border-2 border-gold p-8 shadow-sm space-y-4 rounded-none">
            <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center border border-gold">
              <Landmark size={24} />
            </div>
            <h3 className="font-serif font-bold text-xl text-primary">Fundación y Templo (1624)</h3>
            <p className="text-slate-600 font-serif text-sm leading-relaxed">
              La devoción mariana nace con la refundación de Asunción Nochixtlán en 1527. Los frailes dominicos consolidaron la fe comunitaria edificando el templo parroquial de cantera, concluido en 1624, centro solemne de toda la celebración.
            </p>
          </div>

          <div className="bg-white border-2 border-gold p-8 shadow-sm space-y-4 rounded-none">
            <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center border border-gold">
              <Heart size={24} />
            </div>
            <h3 className="font-serif font-bold text-xl text-primary">Comisiones y Velaciones</h3>
            <p className="text-slate-600 font-serif text-sm leading-relaxed">
              La festividad es coordinada por la Honorable Comisión de Festejos. Previo al 15 de agosto, se celebran \"Las Velaciones\", un novenario donde veladores tradicionales ofrendan cera, flores y frutas representando a los doce apóstoles.
            </p>
          </div>

          <div className="bg-white border-2 border-gold p-8 shadow-sm space-y-4 rounded-none">
            <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center border border-gold">
              <Sparkles size={24} />
            </div>
            <h3 className="font-serif font-bold text-xl text-primary">Danza de las Mascaritas</h3>
            <p className="text-slate-600 font-serif text-sm leading-relaxed">
              Expresión folclórica imperdible. Danzantes ataviados con trajes tradicionales de manta y máscaras talladas de viejitos tejen listones multicolores alrededor de un poste al ritmo melancólico y festivo de violines mixtecos.
            </p>
          </div>
        </div>
      </section>

      {/* Navegación y Cronograma de Actividades */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-5xl">
          
          <div className="text-center mb-12">
            <span className="text-accent text-xs font-bold tracking-widest uppercase mb-4 block">Calendario Oficial</span>
            <h2 className="text-3xl font-serif font-bold text-primary">Ruta de la Festividad</h2>
            <div className="h-0.5 w-16 bg-accent mx-auto mt-3"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16 border-b border-slate-200 pb-6">
            {diasFestividad.map((dia) => {
              const isActive = dia.key === activeTab;
              return (
                <button
                  key={dia.key}
                  onClick={() => setActiveTab(dia.key)}
                  className={`px-4 py-3 md:px-6 md:py-4 text-sm font-serif font-bold uppercase tracking-wider border-2 transition-all duration-300 rounded-none shadow-sm cursor-pointer
                    ${isActive 
                      ? 'bg-primary border-gold text-gold scale-105' 
                      : 'bg-white border-slate-300 text-slate-500 hover:border-gold hover:text-primary'}`}
                >
                  <span className="block text-xs text-accent font-sans font-bold tracking-widest">{dia.date}</span>
                  <span className="mt-1 block">{dia.label}</span>
                </button>
              );
            })}
          </div>

          {/* Detalles del día seleccionado */}
          <div className="min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDia.key}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-10"
              >
                {/* Encabezado del Día */}
                <div className="bg-[#F8F5F0] border-2 border-gold p-8 md:p-12 shadow-sm">
                  <span className="text-xs font-bold text-accent uppercase tracking-widest bg-accent/10 px-3 py-1 inline-block mb-4">
                    {activeDia.date} - Programa Oficial
                  </span>
                  <h2 className="text-3xl font-serif font-bold text-primary mb-4">
                    {activeDia.title}
                  </h2>
                  <div className="h-0.5 w-16 bg-gold mb-6"></div>
                  <p className="text-slate-600 font-serif text-lg leading-relaxed max-w-3xl">
                    {activeDia.description}
                  </p>
                </div>

                {/* Eventos del Día */}
                <div className="space-y-6">
                  <h3 className="text-lg font-serif font-bold text-slate-700 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Calendar size={18} className="text-gold" /> Cronograma de Actividades
                  </h3>
                  
                  {activeDia.events.map((event, idx) => (
                    <div 
                      key={idx} 
                      className="bg-white border border-slate-200 p-6 md:p-8 flex flex-col md:flex-row gap-6 shadow-sm hover:shadow-md transition-shadow duration-300 rounded-none relative overflow-hidden"
                    >
                      {event.title.includes("VAGÓN CHICANO") && (
                        <div className="absolute top-0 right-0 bg-accent text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rotate-0">
                          ¡Baile Estelar!
                        </div>
                      )}
                      
                      {/* Hora */}
                      <div className="md:w-1/4 flex items-center gap-2 text-primary font-bold font-serif shrink-0">
                        <Clock size={16} className="text-accent" />
                        <span className="text-lg tracking-wider">{event.time}</span>
                      </div>
                      
                      {/* Detalles */}
                      <div className="md:w-3/4 space-y-3">
                        <h4 className={`text-xl font-serif font-bold ${event.title.includes("VAGÓN CHICANO") ? 'text-accent' : 'text-primary'}`}>
                          {event.title}
                        </h4>
                        <div className="flex items-center gap-2 text-xs text-slate-500 font-serif">
                          <MapPin size={14} className="text-gold" />
                          <span>{event.location}</span>
                        </div>
                        <p className="text-slate-600 font-serif text-sm leading-relaxed pt-1">
                          {event.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* Galería de la Calenda (Imágenes de Usuario) */}
      <section className="py-24 container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-accent text-xs font-bold tracking-widest uppercase mb-4 block">Capturas del Festejo</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">Instantes de la Calenda Monumental</h2>
          <div className="h-0.5 w-24 bg-accent mx-auto mt-4"></div>
          <p className="text-slate-600 font-serif mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            Explora las postales reales de nuestra celebración: el color de las canastas de flores, la música mixteca y la participación de nuestra gente.
          </p>
        </div>

        {/* Masonry-like Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galeriaCalenda.map((img, idx) => {
            // Estilos de grid dinámicos para simular un diseño de collage/masonry
            let gridSpan = "col-span-1";
            if (idx === 1 || idx === 4) gridSpan = "col-span-1 md:col-span-2";
            
            return (
              <div 
                key={idx} 
                className={`relative aspect-[4/3] border-2 border-gold p-1.5 bg-white shadow-md hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 overflow-hidden group ${gridSpan}`}
              >
                <div className="w-full h-full relative overflow-hidden">
                  <Image 
                    src={img.src} 
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white text-xs font-serif italic">{img.alt}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Banner de Invitación o Nota */}
      <section className="bg-[#EFECE6] border-t border-slate-300 py-16">
        <div className="container mx-auto px-4 max-w-3xl text-center space-y-6">
          <HelpCircle size={36} className="mx-auto text-gold" />
          <h3 className="text-2xl font-serif font-bold text-primary">¿Quieres conocer más detalles del programa?</h3>
          <p className="text-slate-600 font-serif leading-relaxed">
            Este programa es preliminar y se actualiza gradualmente. Si eres organizador, artesano o tienes alguna participación en la calenda de este año y deseas publicarla, comunícate con nosotros.
          </p>
          <div className="pt-2">
            <a href="https://wa.me/529511130366?text=Hola!%20Tengo%20informacion%20o%20dudas%20sobre%20el%20programa%20de%20la%20Festividad%20de%20Agosto." target="_blank" rel="noopener noreferrer">
              <button className="bg-primary hover:bg-accent text-white px-8 py-4 font-serif font-bold uppercase tracking-wider text-xs border-2 border-gold shadow-md transition-all cursor-pointer">
                Enviar Información por WhatsApp
              </button>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
