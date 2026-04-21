export async function POST(req: Request) {
  try {
    const { email, message, subject } = await req.json();

    // Validación básica
    if (!email || !message || !subject) {
      return new Response(
        JSON.stringify({ error: 'Faltan campos requeridos: email, message, subject' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // TODO: Implementar envío de correo (nodemailer, Resend, SendGrid, etc.)
    console.log('Mensaje recibido:', { email, subject, message });

    return new Response(
      JSON.stringify({ 
        success: true,
        message: 'Mensaje enviado correctamente'
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  } catch (error: any) {
    console.error('Error en send/route.ts:', error.message);
    return new Response(
      JSON.stringify({ error: 'Error al procesar la solicitud' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
