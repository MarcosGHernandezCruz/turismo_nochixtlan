"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Globe, MapPin, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    categoria: "Gastronomía",
    direccion: "",
    telefono: "",
    horarios: "",
    descripcion: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Formatear el mensaje de WhatsApp de forma legible
    const textoMensaje = `*SOLICITUD DE ALTA - EXPLORA NOCHIXTLÁN*\n\n` +
      `• *Nombre del Negocio:* ${formData.nombre}\n` +
      `• *Categoría/Giro:* ${formData.categoria}\n` +
      `• *Dirección:* ${formData.direccion}\n` +
      `• *Teléfono:* ${formData.telefono}\n` +
      `• *Horarios:* ${formData.horarios}\n` +
      `• *Descripción:* ${formData.descripcion}\n\n` +
      `_(Nota: Adjuntaré las fotografías de mi establecimiento de forma individual a continuación)_`;

    const mensajeEncoded = encodeURIComponent(textoMensaje);
    const urlWhatsApp = `https://wa.me/529511130366?text=${mensajeEncoded}`;
    
    window.open(urlWhatsApp, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#F8F5F0] pb-24">
      
      {/* Hero Independiente */}
      <div className="bg-primary text-white py-16 border-b-4 border-accent">
        <div className="container mx-auto px-4 max-w-6xl">
          <Link href="/">
            <Button variant="ghost" className="mb-8 text-white hover:bg-white/10 rounded-none font-serif text-sm px-0">
              <ArrowLeft size={16} className="mr-2" /> Volver al inicio
            </Button>
          </Link>
          <span className="text-accent font-bold tracking-[0.3em] uppercase mb-4 block text-xs">
            Afiliación Comercial
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
            Únete al Directorio de Explora Nochixtlán
          </h1>
          <p className="text-slate-300 font-serif max-w-2xl text-lg leading-relaxed">
            Completa la ficha técnica de tu negocio en el formulario. Al finalizar, el sistema generará tu mensaje y podrás enviarlo directamente por WhatsApp junto con tus fotos.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl -mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Columna Lateral: Información de Contacto */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white border border-slate-200 shadow-sm p-8 rounded-none">
              <h3 className="font-serif font-bold text-primary text-xl mb-6 border-b border-slate-100 pb-4">
                Información de Registro
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 text-slate-600 font-serif">
                  <Globe size={24} className="text-accent shrink-0" />
                  <div>
                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Proyecto</span>
                    <p className="text-sm">Plataforma Digital Explora Nochixtlán.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 text-slate-600 font-serif">
                  <MapPin size={24} className="text-accent shrink-0" />
                  <div>
                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Región</span>
                    <p className="text-sm">Asunción Nochixtlán, Oaxaca, México.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 text-slate-600 font-serif">
                  <Phone size={24} className="text-gold shrink-0" />
                  <div>
                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Atención Oficial</span>
                    <p className="text-sm font-bold text-primary">951 113 0366</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#EFECE6] border border-slate-300 p-8 rounded-none">
              <h4 className="font-bold text-xs uppercase tracking-widest text-primary mb-3">Instrucciones de Fotos</h4>
              <p className="text-sm font-serif text-slate-700 leading-relaxed">
                Por motivos de peso y calidad, las fotos de tu negocio no se cargan en este formulario. 
                Una vez que envíes este formulario y se abra tu chat de WhatsApp, **envía de 1 a 3 fotos claras de tu local o productos estrella de forma individual**.
              </p>
            </div>
          </div>

          {/* Columna Principal: Formulario Inteligente */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 border border-slate-200 shadow-xl space-y-6 rounded-none">
              <div>
                <h2 className="text-3xl font-serif font-bold text-primary mb-2">Ficha Técnica del Negocio</h2>
                <p className="text-slate-600 font-serif text-sm">Completa los campos a continuación para armar tu solicitud de registro.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Nombre del Negocio</label>
                  <input 
                    type="text" 
                    name="nombre" 
                    required 
                    value={formData.nombre}
                    onChange={handleChange}
                    className="w-full border-b-2 border-slate-200 focus:border-primary outline-none py-2 font-serif text-slate-800" 
                    placeholder="Ej. Cafetería La Asunción" 
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Categoría / Giro</label>
                  <select 
                    name="categoria" 
                    value={formData.categoria}
                    onChange={handleChange}
                    className="w-full border-b-2 border-slate-200 focus:border-primary outline-none py-2 font-serif bg-transparent text-slate-800"
                  >
                    <option value="Gastronomía">Gastronomía (Café, Rest., Antojitos)</option>
                    <option value="Hospedaje">Hospedaje (Hotel, Hostal, Posada)</option>
                    <option value="Comercio">Comercio (Tienda, Ropa, Artesanías)</option>
                    <option value="Servicios">Servicios (Salud, Talleres, Transporte)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Dirección Completa</label>
                  <input 
                    type="text" 
                    name="direccion" 
                    required 
                    value={formData.direccion}
                    onChange={handleChange}
                    className="w-full border-b-2 border-slate-200 focus:border-primary outline-none py-2 font-serif text-slate-800" 
                    placeholder="Calle, Número, Barrio o Colonia" 
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Teléfono de Atención</label>
                  <input 
                    type="tel" 
                    name="telefono" 
                    required 
                    value={formData.telefono}
                    onChange={handleChange}
                    className="w-full border-b-2 border-slate-200 focus:border-primary outline-none py-2 font-serif text-slate-800" 
                    placeholder="Ej. 951 123 4567" 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Horarios de Servicio</label>
                <input 
                  type="text" 
                  name="horarios" 
                  required 
                  value={formData.horarios}
                  onChange={handleChange}
                  className="w-full border-b-2 border-slate-200 focus:border-primary outline-none py-2 font-serif text-slate-800" 
                  placeholder="Ej. Lunes a Sábado de 9:00 AM a 8:00 PM" 
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Descripción del Negocio</label>
                <textarea 
                  name="descripcion" 
                  required 
                  rows={4} 
                  value={formData.descripcion}
                  onChange={handleChange}
                  className="w-full border-2 border-slate-100 focus:border-primary outline-none p-3 font-serif resize-none text-slate-800" 
                  placeholder="Cuéntanos qué vendes o qué servicios ofreces..." 
                />
              </div>

              {/* Botón enviar */}
              <div className="pt-4">
                <Button 
                  type="submit" 
                  className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-none py-8 font-serif uppercase tracking-[0.2em] text-xs font-bold shadow-md flex items-center justify-center gap-2"
                >
                  <MessageCircle size={16} /> Enviar Registro por WhatsApp
                </Button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}