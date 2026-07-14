import type { Metadata } from "next";
// Importamos las fuentes de Google (opcional, pero recomendado para la estética)
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

// 1. Importamos nuestros componentes globales
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import GuiaVirtual from "@/components/shared/GuiaVirtual";

// Configuración de tipografías
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });

// Metadatos globales para SEO
export const metadata: Metadata = {
  title: "Explora Nochixtlán | La Tierra del Oro Rojo",
  description: "Directorio turístico, histórico y comercial de la Heroica Ciudad de Asunción Nochixtlán, Oaxaca.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased flex flex-col min-h-screen bg-[#F8F5F0]`}>
        
        {/* El Navbar aparece en la parte superior de todas las páginas */}
        <Navbar />
        
        {/* Aquí es donde Next.js inyecta el contenido de page.tsx (Inicio, Historia, etc.) */}
        <main className="grow">
          {children}
        </main>
        
        {/* El Footer aparece en la parte inferior de todas las páginas */}
        <Footer />
        
        {/* Guía Virtual AI desactivado temporalmente por seguridad de API */}
        {/* <GuiaVirtual /> */}
        
      </body>
    </html>
  );
}