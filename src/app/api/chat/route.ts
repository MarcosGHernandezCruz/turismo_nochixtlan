import { generateText } from 'ai';
import { google } from '@ai-sdk/google';
import turismoData from '@/data/turismo.json';
import negociosData from '@/data/negocios.json';

export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    // 1. VALIDACIÓN DE SEGURIDAD (Verificamos si existe la clave)
    if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
      throw new Error("CRÍTICO: No se encontró la variable GOOGLE_GENERATIVE_AI_API_KEY en el archivo .env.local");
    }

    const { messages } = await req.json();
    const contextoTurismo = JSON.stringify(turismoData);
    const contextoNegocios = JSON.stringify(negociosData);

    const systemPrompt = `
      Eres el Guía Virtual Institucional de la Ciudad de Asunción Nochixtlán, Oaxaca.
      Tu tono debe ser respetuoso, formal y acogedor. (Usa usted).
      
      REGLAS:
      1. SOLO puedes recomendar lugares, historias y negocios que estén en tu BASE DE DATOS.
      2. Si te preguntan por algo que no está en la base de datos, pide disculpas y sugiere revisar el directorio.
      3. Nunca inventes información.
      4. Respuestas concisas .

      BASE DE DATOS:
      - SITIOS: ${contextoTurismo}
      - NEGOCIOS: ${contextoNegocios}
    `;

    // 2. LLAMADA A LA API
    const result = await generateText({
      model: google('gemini-2.5-flash'),
      system: systemPrompt,
      messages,
      temperature: 0.3,
    });

    return new Response(JSON.stringify({ text: result.text }), {
      headers: { 'Content-Type': 'application/json' },
      status: 200
    });
    
  } catch (error: any) {
    // 3. CAPTURA DEL ERROR REAL
    console.error("🔥 ERROR REAL EN BACKEND:", error.message || error);
    
    // Enviamos el error detallado al frontend para que lo leas en pantalla
    return new Response(
      JSON.stringify({ 
        text: `Error de Servidor: ${error.message || "Revisa la consola de VS Code (Terminal)."}` 
      }), 
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}