/* El prompt con el que arranca cada persona del taller.
   Se pega tal cual en el agente: instala las skills y no diseña hasta
   conocer a quien tiene el portafolio. */

export const TALLER = "¿Cómo armar mi portfolio y no perder el estilo en el intento?";

export const anfitriones = [
  { handle: "@mauri.h.m", href: "https://www.instagram.com/mauri.h.m/" },
  { handle: "@chicatech.mza", href: "https://www.instagram.com/chicatech.mza/" },
] as const;

export const lineaComandoTaller =
  '- git clone https://github.com/MatiasBoldrini/dotcursor.git && cp dotcursor/commands/research-ui-component.md ~/.cursor/commands/';

export const promptArranque = `Hola. Voy a armar mi portafolio web en el taller "¿Cómo armar mi portfolio y no perder el estilo en el intento? 💅🧠" (CuyoConnect x Chicatech Mza). Mi objetivo es salir con un portafolio publicado en Vercel que tenga mi estilo propio y no parezca una plantilla genérica.

PASO 1 — Instalá las skills de diseño (si tu entorno tiene terminal y Node.js; pedime aprobación cuando haga falta):
- npx skills add https://github.com/anthropics/skills --skill frontend-design
- npx skills add https://github.com/vercel-labs/agent-skills --skill web-design-guidelines
- npx skills add https://github.com/Leonxlnx/taste-skill --skill "design-taste-frontend"
- npx impeccable install
${lineaComandoTaller}
Después de instalar, ejecutá /impeccable init y confirmame qué quedó instalado. Si algún comando falla, decime el error y seguí con el resto. Si no podés ejecutar comandos, avisame y usá igual los principios de estas skills (dirección estética distintiva, tipografía y color con intención, accesibilidad, responsive, motion con propósito).

PASO 2 — Conocerme antes de diseñar:
Pedime mi CV (te lo voy a pegar o adjuntar) y hacéme 5 preguntas cortas sobre mi perfil, mi público objetivo (reclutadores, clientes, comunidad) y las personas o sitios de portafolio que me gustan. Con eso armá una "cartilla de estilos" para mí: 3 direcciones visuales con paleta de colores, tipografías, tono y nivel de animación. Mostrámelas y dejame elegir una.

Hablame en español, en pasos cortos.`;
