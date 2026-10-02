import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "¿Cómo armar mi portfolio y no perder el estilo en el intento?",
  description:
    "Taller de CuyoConnect y Chicatech Mza. Cartilla de estilos de portafolio y el prompt para arrancar el desarrollo con un agente.",
};

export const viewport: Viewport = {
  themeColor: "#131a17",
};

/**
 * El contrato de dirección. Va como comentario HTML en el markup emitido, no
 * como comentario de JSX: el compilador borra los de JSX y el contrato tiene
 * que poder auditarse sobre el build.
 */
const CONTRACT = `<!--
THESIS: Un muestrario de pinturas para estilos de portafolio: cada sitio es una ficha que se gira para leer su receta. Rehúsa la galería oscura con hover-scale y el índice blanco de hairlines.
OWN-WORLD: Tablero #131a17 a sangre con grano fino; stock #e6e9e4 sólo dentro de la ficha o de una ventana punzada; nueve tintas de mazo saturadas que ocupan regiones enteras; remache de latón #b08d3e; Archivo variable (eje de ancho) en etiquetas y Atkinson para leer de lejos.
STORY: Quien entra reconoce el estilo que quiere, gira la ficha, entiende por qué se ve así y se lleva el prompt para pedirlo.
FIRST VIEWPORT: Tablero completo; título en Archivo expandido a sangre izquierda; a la derecha el abanico de nueve mazos con su tinta y su cuenta; abajo asoma la primera hilera de fichas.
FORM: Muestrario de fichas abanicadas, candidato 6 de mi lista ordenada por resonancia; seed key a2d72ef2.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
-->`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>
        <div hidden dangerouslySetInnerHTML={{ __html: CONTRACT }} />
        {children}
      </body>
    </html>
  );
}
