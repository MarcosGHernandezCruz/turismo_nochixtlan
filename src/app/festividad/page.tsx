"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, MapPin, Music, HelpCircle, Landmark, Sparkles, Heart, ImageIcon, ZoomIn, X } from "lucide-react";
import Image from "next/image";

// Imágenes reales de la calenda proporcionadas por el usuario
const galeriaCalenda = [
  { src: "/calenda1.jpg", alt: "Canastas florales y convite en las calles" },
  { src: "/calenda2.jpg", alt: "Marmotas gigantes y bandas de viento mixtecas" },
  { src: "/calenda3.jpg", alt: "Monos de calenda tradicionales bailando" },
  { src: "/calenda4.jpg", alt: "Participación masiva en la calenda de Nochixtlán" },
  { src: "/calenda5.jpg", alt: "Guelaguetza y gala tradicional mixteca" }
];

const diasMunicipio = [
  {
    key: "dom9", date: "09 Ago", label: "Apertura", title: "Inauguración de la Expoferia",
    description: "Iniciamos nuestra gran celebración con la apertura de la feria, deporte extremo y el primer encuentro de bandas.",
    events: [
      { time: "10:00 AM", title: "Motocross", location: "Pista atrás del recinto", desc: "Evento deportivo para los amantes de la adrenalina." },
      { time: "03:00 PM", title: "Expo emprendedores", location: "Recinto ferial", desc: "Muestra artesanal, comercial y gastronómica. De 3:00 a 8:00 p.m." },
      { time: "05:00 PM", title: "Calenda de Bandas", location: "Recinto ferial", desc: "Primer recorrido musical invitando a la población." },
      { time: "05:30 PM", title: "Inauguración Expoferia", location: "Recinto ferial", desc: "Corte de listón oficial." },
      { time: "06:30 PM", title: "Encuentro de Bandas y Marmoteros", location: "Recinto ferial", desc: "Exhibición de marmotas y bandas tradicionales." },
      { time: "09:00 PM", title: "Centenarios del Norte", location: "Recinto ferial", desc: "Gran presentación musical para cerrar el día." }
    ]
  },
  {
    key: "lun10", date: "10 Ago", label: "Épocas", title: "Tradición y Épocas Nochixtlecas",
    description: "Una tarde dedicada a destacar nuestra vestimenta, danza y los recuerdos musicales de la región.",
    events: [
      { time: "03:00 PM", title: "Expo emprendedores", location: "Recinto ferial", desc: "Continúa la exhibición comercial." },
      { time: "05:00 PM", title: "Presentación del traje nochixtleco", location: "Recinto ferial", desc: "Portado con orgullo por mujeres nochixtlecas." },
      { time: "05:30 PM", title: "Ensamble Casa de la Cultura", location: "Recinto ferial", desc: "Demostración de talento local y juvenil." },
      { time: "06:00 PM", title: "Grupo de danza Sangre Oaxaqueña", location: "Recinto ferial", desc: "Bailes representativos del estado de Oaxaca." },
      { time: "07:30 PM", title: "Grupo Épocas", location: "Recinto ferial", desc: "Presentación musical con clásicos del recuerdo." }
    ]
  },
  {
    key: "mar11", date: "11 Ago", label: "Identidad", title: "Danza, Folclor y Rock",
    description: "Reconocimiento a nuestra delegación que nos representó en la Guelaguetza y mucha más cultura.",
    events: [
      { time: "03:00 PM", title: "Expo emprendedores", location: "Recinto ferial", desc: "Exposición de productores locales." },
      { time: "05:00 PM", title: "Muladhara Danza", location: "Recinto ferial", desc: "Presentación artística y dancística." },
      { time: "06:30 PM", title: "Banda Casa de la Cultura", location: "Recinto ferial", desc: "Concierto de viento con los jóvenes talentos del municipio." },
      { time: "07:00 PM", title: "Presentación de la Delegación Nochixtleca", location: "Recinto ferial", desc: "Reconocimiento oficial por su digna participación en los Lunes del Cerro de la Guelaguetza." },
      { time: "07:30 PM", title: "Pipperyta Rock", location: "Recinto ferial", desc: "Concierto de rock pop para la juventud." }
    ]
  },
  {
    key: "mie12", date: "12 Ago", label: "Coronación", title: "Coronación y Gran Baile de la Reina",
    description: "El tradicional día de la reina con cabalgata matutina, coronación, comedia y el primer gran baile.",
    events: [
      { time: "08:30 AM", title: "Cabalgata Tradicional", location: "Campo Los Azulejos", desc: "Recorrido a caballo por jinetes de la región." },
      { time: "03:00 PM", title: "Expo emprendedores", location: "Recinto ferial", desc: "Productores locales y visitantes." },
      { time: "05:30 PM", title: "Presentación de la Reina de la fiesta", location: "Recinto ferial", desc: "Nuestra soberana de las fiestas patronales." },
      { time: "06:30 PM", title: "Coronación de la Reina", location: "Recinto ferial", desc: "Ceremonia oficial de coronación por parte de las autoridades." },
      { time: "07:00 PM", title: "Show de Lalo España", location: "Recinto ferial", desc: "Espectáculo cómico estelar, trayendo risas y alegría." },
      { time: "09:00 PM", title: "Baile de Coronación", location: "Recinto ferial", desc: "Con la participación de Sonido la Changa, DJ Víctor Estrella de Polymarch y Manuel La Voz Master." }
    ]
  },
  {
    key: "jue13", date: "13 Ago", label: "Cultural", title: "Danza e Identidad Romerense",
    description: "Intercambio cultural con la Compañía Espacio Danza de Colima y representaciones folclóricas.",
    events: [
      { time: "03:00 PM", title: "Expo emprendedores", location: "Recinto ferial", desc: "Venta de productos artesanales." },
      { time: "05:00 PM", title: "Casa de Cultura Ballet", location: "Recinto ferial", desc: "Bailes clásicos y regionales." },
      { time: "06:00 PM", title: "Orgullo Romerense", location: "Recinto ferial", desc: "Muestra de identidad y tradición cultural." },
      { time: "06:30 PM", title: "Orgullo de mi identidad", location: "Recinto ferial", desc: "Representación escénica de nuestras raíces." },
      { time: "07:00 PM", title: "Compañía espacio Danza de Colima", location: "Recinto ferial", desc: "Presentación estelar de intercambio cultural estatal." }
    ]
  },
  {
    key: "vie14", date: "14 Ago", label: "Calendas", title: "Día de Grandes Calendas (Flores y Luces)",
    description: "El evento más concurrido. Dos calendas emblemáticas que llenan de flores, colores y luces a la población.",
    events: [
      { time: "02:30 PM", title: "Mega Calenda de Flores", location: "Atrio Parroquial", desc: "Inicio de la calenda más grande del estado con bandas, marmotas, monos gigantes y mujeres con canastas florales." },
      { time: "05:00 PM", title: "Concurso de Disfraces", location: "Explanada Municipal", desc: "Creatividad y folclor en un divertido certamen." },
      { time: "06:00 PM", title: "Brindis de Calenda", location: "Explanada Municipal", desc: "Convivencia comunitaria compartiendo mezcal y tepache." },
      { time: "08:30 PM", title: "Calenda de Luces", location: "Atrio Parroquial", desc: "Impresionante recorrido nocturno iluminado por faroles de celofán, carros alegóricos y pirotecnia." },
      { time: "09:00 PM", title: "Baile de Calenda", location: "Explanada Municipal", desc: "A cargo de Proyecto Show y DJ's locales." }
    ]
  },
  {
    key: "sab15", date: "15 Ago", label: "Día Mayor", title: "Día de la Virgen y Jaripeo",
    description: "Día central litúrgico y de tradiciones extremas como el off road y el jaripeo ranchero, culminando con el Carro Show.",
    events: [
      { time: "00:00 AM", title: "Mañanitas a la virgen de la Asunción", location: "Templo Parroquial", desc: "Canto devocional a nuestra patrona." },
      { time: "09:00 AM", title: "Feria Gastronómica", location: "Recinto ferial", desc: "Sabores con Tradiciones. Barbacoa, masita y platillos típicos (De 9:00 a.m. a 5:00 p.m.)." },
      { time: "09:00 AM", title: "Show de las escandalosas", location: "Recinto ferial", desc: "Entretenimiento matutino." },
      { time: "11:00 AM", title: "Off Road Nochixtlán", location: "Parte posterior del recinto", desc: "Competencia extrema de vehículos todo terreno." },
      { time: "03:00 PM", title: "Jaripeo Ranchero: Reserve 55", location: "Campo 2", desc: "Con los valientes Jinetes del niño de San Miguel y la Banda Estrella Dorada." },
      { time: "09:00 PM", title: "Tradicional Castillo y Piromusical", location: "Atrio Parroquial", desc: "Espectáculo visual de fuegos artificiales al ritmo de la música." },
      { time: "09:30 PM", title: "Baile de Gala: Internacional Carro Show", location: "Explanada Municipal", desc: "Presentación estelar para bailar toda la noche." }
    ]
  },
  {
    key: "dom16", date: "16 Ago", label: "Clausura", title: "Deportes Tradicionales y Baile Estelar",
    description: "Cierre deportivo, la Danza de Mascaritas y el gran baile masivo de feria clausurando nuestras festividades.",
    events: [
      { time: "08:00 AM", title: "Arrancones Cuarto de Milla", location: "Ctra. Internacional 190", desc: "Competencia de velocidad." },
      { time: "09:00 AM", title: "Feria Gastronómica", location: "Recinto ferial", desc: "Último día de Sabores con Tradiciones." },
      { time: "09:00 AM", title: "Torneo Hexagonal de Fútbol (Bolsa 150 mil)", location: "Campo 1", desc: "Los mejores equipos disputando el campeonato local." },
      { time: "10:00 AM", title: "Torneo Básquetbol (Bolsa 113 mil)", location: "Cancha Bicentenario", desc: "Categorías Veteranos y Femenil." },
      { time: "11:00 AM", title: "Pelota Mixteca (Nochixtlán vs. Oaxaca)", location: "Campo Pelota Mixteca", desc: "Deporte de origen prehispánico (2a Fuerza y Varonil Juvenil Sub 18)." },
      { time: "12:00 PM", title: "Celebración Eucarística y Procesión", location: "Atrio Parroquial", desc: "Misa de clausura y recorrido de fe." },
      { time: "01:00 PM", title: "Pelota Mixteca 1a Fuerza", location: "Campo Pelota Mixteca", desc: "Encuentros de máximo nivel." },
      { time: "02:00 PM", title: "Presentación de las Mascaritas", location: "Atrio Parroquial", desc: "Nuestra máxima expresión folclórica danzando al son de los violines." },
      { time: "04:00 PM", title: "Concierto Banda de la Policía Estatal", location: "Atrio Parroquial", desc: "Música de viento para amenizar la tarde." },
      { time: "09:00 PM", title: "Gran Baile de Cierre de Fiesta", location: "Campo 2 Unidad Deportiva", desc: "Presentación de Los del Roble, VAGÓN CHICANO y Capaz de Juan Gómez." }
    ]
  }
];

const diasMercado = [
  {
    key: "ago1", date: "01 Ago", label: "Apertura", title: "Anuncio de la Festividad",
    description: "Organización Benito Juárez y Comisión de Festejos anuncian el inicio de las festividades del Mercado Municipal.",
    events: [
      { time: "07:00 AM", title: "Alegres Mañanitas", location: "Mercado Municipal", desc: "Acompañados por el Mariachi Ñuu Savi, donado por H. Ayuntamiento." },
      { time: "10:00 AM", title: "Misa de Inicio", location: "Mercado Municipal", desc: "Para dar inicio a la festividad en honor a nuestra Madre Santísima." },
      { time: "11:30 AM", title: "Procesión de la Imagen", location: "Calles Principales", desc: "Procesión solemne con la imagen de la Santísima Virgen de la Asunción y velas ofrecidas por devotos." }
    ]
  },
  {
    key: "velaciones", date: "04-12 Ago", label: "Velaciones", title: "Novenario y Velaciones del Mercado",
    description: "Tradicionales rezos vespertinos organizados por las distintas familias y sectores del mercado.",
    events: [
      { time: "07:00 PM", title: "Rezo de Rosarios", location: "Mercado Municipal", desc: "Del 4 al 12 de agosto, ofrendado diariamente por distintas familias (Ej: Familia López Cruz, Frutas y Legumbres Esmeralda, Mesa Directiva del Mercado)." }
    ]
  },
  {
    key: "ago13", date: "13 Ago", label: "Calenda Locatarios", title: "Magna Calenda del Mercado Municipal",
    description: "La tradición más esperada por los locatarios. Desfile, música y convite con participación de más de 20 agrupaciones y donadores.",
    events: [
      { time: "12:00 PM", title: "Ofrecimiento de Velas", location: "Mercado Municipal", desc: "Representación solemne por la Niña Xana Valeria López Alvarado." },
      { time: "01:30 PM", title: "Bendición", location: "Mercado Municipal", desc: "Bendición oficial de la Tradicional Calenda." },
      { time: "02:00 PM", title: "Partida de la Tradicional Calenda", location: "Principales calles de la población", desc: "Participan 5 Bandas (La Única, Corazón Fiestero, La Lujosa, Peña Blanca, Sembradores), Cuadros de Canasteras, Monos de calenda y Carros Alegóricos con júbilo desbordante." }
    ]
  },
  {
    key: "ago15", date: "15 Ago", label: "Día Mayor", title: "Celebración Central a la Patrona",
    description: "El día más solemne para los locatarios del Mercado Benito Juárez.",
    events: [
      { time: "07:00 AM", title: "Alegres Mañanitas", location: "Mercado Municipal", desc: "Acompañado por el Mariachi San Gabriel." },
      { time: "08:00 AM", title: "Solemne Misa de Función", location: "Mercado Municipal", desc: "Ofrecida por devotos y la familia Celix (Antojitos Celix)." }
    ]
  },
  {
    key: "ago22", date: "22 Ago", label: "Culminación", title: "Misa de Acción de Gracias",
    description: "Clausura oficial de los festejos del Mercado Municipal.",
    events: [
      { time: "10:00 PM", title: "Solemne Misa", location: "Mercado Municipal", desc: "Agradecimiento a la virgen por las festividades, con mención especial a todas las donaciones y personas de buen corazón." }
    ]
  }
];

export default function FestividadPage() {
  const [activeProgram, setActiveProgram] = useState<"municipio" | "mercado">("municipio");
  const [activeTabMunicipio, setActiveTabMunicipio] = useState("vie14");
  const [activeTabMercado, setActiveTabMercado] = useState("ago13");
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const currentProgramData = activeProgram === "municipio" ? diasMunicipio : diasMercado;
  const currentActiveTab = activeProgram === "municipio" ? activeTabMunicipio : activeTabMercado;
  const flyerImage = activeProgram === "municipio" ? "/Festividad Flyer completo.jpg" : "/Festividad Flyer mercado.jpg";
  
  const activeDia = currentProgramData.find(d => d.key === currentActiveTab) || currentProgramData[0];

  const handleTabChange = (key: string) => {
    if (activeProgram === "municipio") setActiveTabMunicipio(key);
    else setActiveTabMercado(key);
  };

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
              La festividad es coordinada por la Honorable Comisión de Festejos. Previo al 15 de agosto, se celebran "Las Velaciones", un novenario donde veladores tradicionales ofrendan cera, flores y frutas representando a los doce apóstoles.
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

      {/* Programas Interactivos */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-7xl">
          
          <div className="text-center mb-10">
            <span className="text-accent text-xs font-bold tracking-widest uppercase mb-4 block">Cartelera 2026</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">Programas Oficiales</h2>
            <div className="h-0.5 w-16 bg-accent mx-auto mt-4"></div>
          </div>

          {/* Selector de Programa */}
          <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveProgram("municipio")}
              className={`px-8 py-4 font-serif font-bold uppercase tracking-wider text-sm border-2 transition-all duration-300 rounded-none shadow-sm cursor-pointer
                ${activeProgram === "municipio" ? "bg-primary border-gold text-gold" : "bg-white border-slate-300 text-slate-600 hover:border-gold hover:text-primary"}`}
            >
              H. Ayuntamiento (9-16 Ago)
            </button>
            <button
              onClick={() => setActiveProgram("mercado")}
              className={`px-8 py-4 font-serif font-bold uppercase tracking-wider text-sm border-2 transition-all duration-300 rounded-none shadow-sm cursor-pointer
                ${activeProgram === "mercado" ? "bg-primary border-gold text-gold" : "bg-white border-slate-300 text-slate-600 hover:border-gold hover:text-primary"}`}
            >
              Mercado Municipal (1-22 Ago)
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Columna Izquierda: Flyer Visual */}
            <div className="lg:col-span-5 h-full relative">
              <div className="sticky top-24 bg-white border-4 border-gold p-2 shadow-xl group">
                <div 
                  className="relative w-full aspect-[2/3] overflow-hidden cursor-pointer bg-[#F8F5F0]"
                  onClick={() => setIsLightboxOpen(true)}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={flyerImage}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0"
                    >
                      <Image 
                        src={flyerImage} 
                        alt="Cartel Oficial" 
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-contain group-hover:scale-105 transition-transform duration-700" 
                      />
                    </motion.div>
                  </AnimatePresence>
                  {/* Overlay interactivo */}
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/90 text-primary p-3 rounded-full shadow-lg backdrop-blur-sm">
                      <ZoomIn size={32} />
                    </div>
                  </div>
                </div>
                <div className="bg-primary text-gold text-center py-3 font-serif font-bold text-sm tracking-widest uppercase">
                  Clic para ver el póster oficial
                </div>
              </div>
            </div>

            {/* Columna Derecha: Línea de Tiempo Interactiva */}
            <div className="lg:col-span-7 bg-[#F8F5F0] border border-slate-200 p-6 md:p-10 shadow-inner min-h-[600px]">
              
              {/* Tabs de Días (Horizontal Scrollable) */}
              <div className="flex overflow-x-auto pb-4 mb-8 gap-2 snap-x scrollbar-thin scrollbar-thumb-gold scrollbar-track-transparent">
                {currentProgramData.map((dia) => {
                  const isActive = dia.key === currentActiveTab;
                  return (
                    <button
                      key={dia.key}
                      onClick={() => handleTabChange(dia.key)}
                      className={`shrink-0 snap-start px-5 py-3 text-xs font-serif font-bold uppercase tracking-widest border-2 transition-all duration-300 rounded-none cursor-pointer
                        ${isActive 
                          ? 'bg-primary border-gold text-gold shadow-md' 
                          : 'bg-white border-slate-300 text-slate-500 hover:border-gold hover:text-primary'}`}
                    >
                      <span className="block">{dia.date}</span>
                      <span className="mt-1 font-sans font-normal opacity-80">{dia.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Contenido del Día (Línea de Tiempo) */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeDia.key}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8"
                >
                  <div className="border-b-2 border-gold pb-6">
                    <h2 className="text-3xl font-serif font-bold text-primary mb-3">
                      {activeDia.title}
                    </h2>
                    <p className="text-slate-600 font-serif text-lg leading-relaxed">
                      {activeDia.description}
                    </p>
                  </div>

                  {/* Timeline Events */}
                  <div className="pl-4 mt-8 relative before:absolute before:inset-0 before:ml-[15px] md:before:ml-[19px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-gold before:via-gold/50 before:to-transparent">
                    {activeDia.events.map((event, idx) => (
                      <div key={idx} className="relative pl-10 md:pl-12 pb-10 last:pb-0 group">
                        
                        {/* Timeline Node */}
                        <div className="absolute left-0 top-2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white border-4 border-gold shadow-md flex items-center justify-center z-10 group-hover:scale-110 group-hover:border-accent transition-all duration-300">
                          <Clock size={16} className="text-primary" />
                        </div>

                        {/* Event Card */}
                        <div className="bg-white border border-slate-200 p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 rounded-none relative overflow-hidden group-hover:-translate-y-1">
                          {event.title.includes("VAGÓN CHICANO") && (
                            <div className="absolute top-0 right-0 bg-accent text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 shadow-sm">
                              ¡Baile Estelar!
                            </div>
                          )}
                          
                          <div className="flex flex-col gap-3">
                            <span className="inline-block bg-primary/5 text-primary font-serif font-bold text-lg px-3 py-1 w-fit border border-primary/10">
                              {event.time}
                            </span>
                            
                            <h4 className={`text-xl md:text-2xl font-serif font-bold ${event.title.includes("VAGÓN CHICANO") ? 'text-accent' : 'text-primary'}`}>
                              {event.title}
                            </h4>
                            
                            <div className="flex items-center gap-2 text-xs md:text-sm text-slate-500 font-serif border-b border-slate-100 pb-3">
                              <MapPin size={16} className="text-gold" />
                              <span className="tracking-wide uppercase">{event.location}</span>
                            </div>
                            
                            {event.desc && (
                              <p className="text-slate-600 font-serif leading-relaxed pt-2">
                                {event.desc}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>
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
            Este programa puede sufrir actualizaciones. Si eres organizador, artesano o tienes alguna participación en la calenda de este año y deseas publicarla, comunícate con nosotros.
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

      {/* Lightbox Modal para los Flyers */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-10 backdrop-blur-sm"
            onClick={() => setIsLightboxOpen(false)}
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-gold transition-colors z-50 p-2 bg-black/50 rounded-full cursor-pointer"
              onClick={() => setIsLightboxOpen(false)}
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
                  src={flyerImage}
                  alt="Cartel Oficial Full Size"
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
