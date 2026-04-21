"use client";
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Send, CheckCircle, AlertTriangle } from 'lucide-react';

export default function FormularioContacto() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  // SUSTITUYE ESTA URL CON TU ENDPOINT DE FORMSPREE
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xgorlyda"; 

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-white p-12 border-2 border-primary text-center space-y-4 shadow-xl">
        <CheckCircle className="mx-auto text-accent" size={48} />
        <h3 className="text-2xl font-serif font-bold text-primary uppercase">¡Mensaje Enviado!</h3>
        <p className="font-serif text-slate-600 mb-6">Hemos recibido su solicitud y la turnaremos al área correspondiente.</p>
        <Button onClick={() => setStatus('idle')} variant="outline" className="rounded-none border-primary text-primary hover:bg-primary hover:text-white font-serif uppercase tracking-widest text-xs">
          Enviar otra solicitud
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 border border-slate-200 shadow-xl space-y-6">
      
      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 text-red-700 p-4 flex items-center gap-3 rounded-none font-serif text-sm">
          <AlertTriangle size={20} className="shrink-0" />
          <p>Ocurrió un error al enviar el formulario. Por favor, intente de nuevo.</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Nombre Completo</label>
          <input name="nombre" required className="w-full border-b-2 border-slate-200 focus:border-primary outline-none py-2 font-serif" placeholder="Ej. Juan Pérez" />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Correo Electrónico</label>
          <input type="email" name="email" required className="w-full border-b-2 border-slate-200 focus:border-primary outline-none py-2 font-serif" placeholder="correo@ejemplo.com" />
        </div>
      </div>
      
      <div className="space-y-2">
        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Asunto de interés</label>
        <select name="asunto" className="w-full border-b-2 border-slate-200 focus:border-primary outline-none py-2 font-serif bg-transparent">
          <option>Alta de Negocio en Directorio</option>
          <option>Información Turística</option>
          <option>Sugerencias Ciudadanas</option>
          <option>Contacto Comercial</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Mensaje o Detalles</label>
        <textarea name="mensaje" required rows={4} className="w-full border-2 border-slate-100 focus:border-primary outline-none p-3 font-serif resize-none" placeholder="Escriba su mensaje aquí..." />
      </div>

      {/* Campo oculto opcional para Formspree: Evita respuestas automáticas vacías al usuario */}
      <input type="hidden" name="_subject" value="Nuevo contacto desde Explora Nochixtlán" />

      <Button 
        type="submit" 
        disabled={status === 'loading'}
        className="w-full bg-primary hover:bg-primary/90 text-white rounded-none py-8 font-serif uppercase tracking-[0.3em] text-xs font-bold transition-all"
      >
        {status === 'loading' ? 'Procesando Envío...' : <><Send size={16} className="mr-3" /> Enviar Solicitud Oficial</>}
      </Button>
    </form>
  );
}