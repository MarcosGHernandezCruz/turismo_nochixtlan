import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { nombre, email, mensaje, asunto } = await req.json();

    const data = await resend.emails.send({
      from: 'Explora Nochixtlán <onboarding@resend.dev>', // Cámbialo por tu dominio cuando lo tengas
      to: ['tu-correo-personal@gmail.com'], // Aquí llegará el correo
      subject: `Nuevo contacto: ${asunto}`,
      html: `
        <div style="font-family: serif; color: #004182; padding: 20px;">
          <h1 style="border-bottom: 2px solid #AD1D3C;">Nueva Solicitud de Información</h1>
          <p><strong>Nombre:</strong> ${nombre}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Asunto:</strong> ${asunto}</p>
          <p><strong>Mensaje:</strong></p>
          <p style="background: #f4f4f4; padding: 15px;">${mensaje}</p>
          <hr />
          <p style="font-size: 10px; color: #666;">Enviado desde el portal Explora Nochixtlán (VIKOTECH Engine)</p>
        </div>
      `
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Error al enviar el correo' }, { status: 500 });
  }
}