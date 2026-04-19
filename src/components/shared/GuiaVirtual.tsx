"use client";
import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Mensaje {
  role: "user" | "assistant";
  content: string;
}

export default function GuiaVirtual() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Mensaje[]>([]);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const manejarEnvio = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const nuevosMensajes = [...messages, { role: "user" as const, content: input }];
    setMessages(nuevosMensajes);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nuevosMensajes }),
      });

      if (!res.ok) throw new Error("Error en la conexión");
      const data = await res.json();
      setMessages((prev) => [...prev, { role: "assistant", content: data.text }]);
    } catch (error) {
      setMessages((prev) => [...prev, { role: "assistant", content: "Disculpe, mis sistemas están temporalmente fuera de servicio." }]);
    } finally {
      setIsLoading(false);
    }
  };

  // Auto-scroll al último mensaje
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  return (
    <>
      {/* Botón Flotante */}
      <div className="fixed bottom-24 md:bottom-6 right-4 md:right-6 z-50">
        <Button 
          onClick={() => setIsOpen(!isOpen)}
          className="h-14 w-14 md:w-auto md:px-6 md:h-auto bg-primary hover:bg-primary/90 text-white rounded-lg shadow-2xl border border-primary/20 flex items-center justify-center gap-3 transition-all active:scale-95 hover:scale-105"
        >
          {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
          <span className="font-serif uppercase tracking-widest text-xs font-bold hidden md:inline">
            {isOpen ? 'Cerrar Guía' : 'Guía Virtual AI'}
          </span>
        </Button>
      </div>

      {/* Ventana del Chat */}
      <div className={`fixed bottom-32 md:bottom-24 left-2 right-2 md:left-auto md:right-6 w-auto md:w-96 h-[calc(100vh-160px)] md:h-96 bg-white border-2 border-primary shadow-2xl z-40 flex flex-col rounded-lg overflow-hidden transition-all duration-200 ease-out ${
        isOpen 
          ? 'opacity-100 visible scale-100' 
          : 'opacity-0 invisible scale-95 pointer-events-none'
      }`}>
            
            <div className="bg-primary text-white p-3 md:p-4 flex items-center justify-between border-b border-accent">
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-10 h-10 bg-white/10 flex items-center justify-center rounded-lg border border-white/20">
                  <MapPin size={20} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-base md:text-lg leading-tight">Guía de Nochixtlán</h3>
                  <p className="text-[10px] uppercase tracking-widest text-white/70">Asistente Virtual</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white p-2 rounded-lg transition-colors"
                aria-label="Cerrar chat"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
              <div className="flex justify-start">
                <div className="bg-white border border-slate-200 text-slate-800 p-3 rounded-lg max-w-[85%] font-serif text-sm leading-relaxed shadow-sm">
                  Sea usted bienvenido. Soy su guía virtual de la Ciudad de Asunción Nochixtlán. ¿En qué le puedo asistir?
                </div>
              </div>

              {messages.map((m, idx) => (
                <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`p-3 rounded-lg max-w-[85%] font-serif text-sm leading-relaxed border shadow-sm
                    ${m.role === 'user' 
                      ? 'bg-primary text-white border-primary' 
                      : 'bg-white border-slate-200 text-slate-800'}`}
                  >
                    {m.content}
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-slate-200 p-3 rounded-lg">
                    <span className="flex gap-1">
                      <span className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                      <span className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                      <span className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                    </span>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            <form onSubmit={manejarEnvio} className="p-3 bg-slate-50 border-t border-slate-200 flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Escribe aquí..."
                className="flex-1 bg-white border border-slate-300 px-3 py-2 text-sm font-serif rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-slate-800"
              />
              <Button 
                type="submit" 
                disabled={isLoading || !input.trim()} 
                className="bg-accent hover:bg-accent/90 text-white rounded-lg px-3 py-2 transition-all disabled:opacity-40 min-h-10 min-w-10 flex items-center justify-center"
              >
                <Send size={18} />
              </Button>
            </form>
      </div>
    </>
  );
}