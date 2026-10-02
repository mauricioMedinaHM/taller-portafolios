/* Librerías de componentes React con animación.
   El ranking es el del taller: diez sitios verificados, para elegir
   una caja de piezas antes de escribir el portafolio. */

export interface Libreria {
  id: string;
  rank: number;
  name: string;
  href: string;
  host: string;
  blurb: string;
  /** Qué se encuentra adentro, para elegir sin abrir el sitio. */
  finds: string[];
  tags: string[];
  ink: string;
  onInk: "stock" | "board";
  taller?: boolean;
  /** Pieza destacada del taller: ocupa más lugar en la grilla. */
  destacada?: boolean;
}

export const librerias: Libreria[] = [
  {
    id: "research-ui",
    rank: 0,
    name: "/research-ui-component",
    href: "https://github.com/MatiasBoldrini/dotcursor/blob/main/commands/research-ui-component.md",
    host: "github.com/MatiasBoldrini/dotcursor",
    blurb:
      "Comando de Cursor del taller. Antes de inventar un componente, busca si ya existe en React Bits, Magic UI, Aceternity, 21st.dev o shadcn.",
    finds: [
      "Busca patrones y demos en la web",
      "Primera parada: Aceternity, React Bits, Magic UI, 21st.dev, shadcn",
      "Te lista candidatos, riesgos y una recomendación",
      "Abre las URLs y te deja elegir antes de codear",
    ],
    tags: ["Cursor", "comando", "taller"],
    ink: "var(--color-rivet)",
    onInk: "board",
    taller: true,
    destacada: true,
  },
  {
    id: "react-bits",
    rank: 1,
    name: "React Bits",
    href: "https://reactbits.dev",
    host: "reactbits.dev",
    blurb: "Más de 110 componentes, sobre todo efectos. Se instala con la CLI de shadcn.",
    finds: [
      "Efectos de texto animado",
      "Fondos y auroras",
      "Cursores y microinteracciones",
      "Versiones JS/TS y CSS/Tailwind",
    ],
    tags: ["shadcn CLI", "GSAP", "Tailwind"],
    ink: "var(--color-deck-motion)",
    onInk: "stock",
    taller: true,
  },
  {
    id: "magic-ui",
    rank: 2,
    name: "Magic UI",
    href: "https://magicui.design",
    host: "magicui.design",
    blurb: "Más de 150 piezas de marketing. Se pega o se agrega con shadcn add.",
    finds: [
      "Animated Beam y Marquee",
      "Globe y Text Reveal",
      "Partículas y héroes de landing",
      "Templates listos para copiar",
    ],
    tags: ["Motion", "Tailwind", "shadcn"],
    ink: "var(--color-deck-playful)",
    onInk: "board",
    taller: true,
  },
  {
    id: "aceternity",
    rank: 3,
    name: "Aceternity UI",
    href: "https://ui.aceternity.com",
    host: "ui.aceternity.com",
    blurb: "Efectos dramáticos para landings. Usa Motion y Tailwind. Una parte es paga.",
    finds: [
      "Tarjetas 3D y spotlight",
      "Beams y fondos de luz",
      "Scroll animado",
      "Blocks y templates de página",
    ],
    tags: ["Motion", "Tailwind", "3D"],
    ink: "var(--color-deck-oscuro)",
    onInk: "stock",
    taller: true,
  },
  {
    id: "motion",
    rank: 4,
    name: "Motion",
    href: "https://motion.dev",
    host: "motion.dev",
    blurb: "El motor detrás de casi todas las demás. Se instala con npm install motion.",
    finds: [
      "Hover y gestos",
      "Animación de layout",
      "Scroll-triggered",
      "Props como whileHover",
    ],
    tags: ["npm", "whileHover", "layout"],
    ink: "var(--color-deck-editorial)",
    onInk: "stock",
  },
  {
    id: "gsap",
    rank: 5,
    name: "GSAP con React",
    href: "https://gsap.com/resources/React",
    host: "gsap.com",
    blurb: "La opción para control fino del scroll, con el hook useGSAP.",
    finds: [
      "Timelines profesionales",
      "ScrollTrigger",
      "Hook useGSAP",
      "Guía oficial para React",
    ],
    tags: ["useGSAP", "ScrollTrigger"],
    ink: "var(--color-deck-craft)",
    onInk: "stock",
  },
  {
    id: "motion-primitives",
    rank: 6,
    name: "Motion Primitives",
    href: "https://motion-primitives.com",
    host: "motion-primitives.com",
    blurb: "Bloques chicos con Motion y Tailwind, para armar sin una librería entera.",
    finds: [
      "Text Effect",
      "Dock",
      "Morphing Dialog",
      "Piezas sueltas para copiar",
    ],
    tags: ["Motion", "Tailwind"],
    ink: "var(--color-deck-terminal)",
    onInk: "stock",
  },
  {
    id: "cult-ui",
    rank: 7,
    name: "Cult UI",
    href: "https://www.cult-ui.com",
    host: "cult-ui.com",
    blurb: "Componentes muy interactivos que se agregan con la CLI de shadcn.",
    finds: [
      "3D Carousel",
      "Floating Panel",
      "Dock",
      "Piezas para la CLI de shadcn",
    ],
    tags: ["shadcn CLI", "3D"],
    ink: "var(--color-deck-tridi)",
    onInk: "stock",
  },
  {
    id: "animata",
    rank: 8,
    name: "Animata",
    href: "https://animata.design",
    host: "animata.design",
    blurb: "Efectos de hover, texto y fondos. Se copian y se pegan con Tailwind.",
    finds: [
      "Hovers de botones y cards",
      "Efectos de texto",
      "Fondos animados",
      "Copy-paste con Tailwind",
    ],
    tags: ["copy-paste", "Tailwind"],
    ink: "var(--color-deck-limpio)",
    onInk: "board",
  },
  {
    id: "uiverse",
    rank: 9,
    name: "Uiverse",
    href: "https://uiverse.io",
    host: "uiverse.io",
    blurb: "Piezas de la comunidad, rapidísimas de copiar. La calidad varía según el autor.",
    finds: [
      "Botones",
      "Loaders",
      "Cards",
      "HTML/CSS, Tailwind o React",
    ],
    tags: ["comunidad", "copy-paste"],
    ink: "var(--color-deck-arranque)",
    onInk: "stock",
  },
  {
    id: "21st",
    rank: 10,
    name: "21st.dev",
    href: "https://21st.dev",
    host: "21st.dev",
    blurb: "Directorio con previews en vivo. Sirve para comparar antes de elegir.",
    finds: [
      "Previews en vivo",
      "Aceternity, Magic UI, Cult UI",
      "Varias librerías juntas",
      "Comparar sin instalar",
    ],
    tags: ["directorio", "previews"],
    ink: "var(--color-board-raised)",
    onInk: "stock",
  },
];
