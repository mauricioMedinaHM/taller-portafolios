import { allPortfolios, type Portfolio } from "./data";

/* ==========================================================================
   Los mazos del muestrario.
   El eje es estético: alguien del taller mira un mazo y dice "quiero que el
   mío se vea así". Cada mazo tiene su tinta, su explicación de qué resuelve
   y para quién conviene, y la lista de señales por las que se reconoce.
   El reparto es por regla sobre el campo `style`, no a mano: cuando el
   listado crezca, los items nuevos caen solos en su mazo.
   ========================================================================== */

export type DeckId =
  | "oscuro"
  | "limpio"
  | "editorial"
  | "terminal"
  | "craft"
  | "motion"
  | "tridi"
  | "playful"
  | "arranque";

export interface Deck {
  id: DeckId;
  /** Nombre del mazo, como el nombre de una familia de color. */
  name: string;
  /** Referencia impresa al pie del cartón. */
  code: string;
  /** La tinta del mazo. */
  ink: string;
  /** Color del texto que va encima de la tinta. */
  onInk: "stock" | "board";
  /** Una línea: qué es este estilo. */
  thesis: string;
  /** Qué problema resuelve y a quién le conviene. Material de taller. */
  brief: string;
  /** Cómo se reconoce de un vistazo. */
  tells: string[];
  /** El error típico de quien lo copia sin entenderlo. */
  pitfall: string;
  /** Cuánto cuesta llegar a algo así. */
  effort: "Accesible" | "Intermedio" | "Exigente";
}

export const decks: Deck[] = [
  {
    id: "oscuro",
    name: "Oscuro y contraste",
    code: "OSC",
    ink: "var(--color-deck-oscuro)",
    onInk: "stock",
    thesis:
      "Fondo casi negro, un acento que hace todo el trabajo y mucho aire entre bloques.",
    brief:
      "Es el estilo más frecuente en portafolios de desarrollo, y por una razón práctica: el fondo oscuro perdona. Una captura de pantalla, un logo suelto o una foto mediocre se integran solos, mientras que sobre blanco cada elemento queda expuesto. Te deja mostrar trabajo sin tener que dirigir arte.",
    tells: [
      "Un solo color saturado para enlaces, foco y estados activos",
      "Bordes de 1px casi invisibles en lugar de sombras",
      "Bloques separados por espacio, no por cajas",
      "Tipografía de sistema o una sans neutra en dos pesos",
    ],
    pitfall:
      "Poner el texto secundario en gris medio sobre negro: baja del contraste mínimo y se vuelve ilegible en un proyector o al sol.",
    effort: "Accesible",
  },
  {
    id: "limpio",
    name: "Claro y limpio",
    code: "LIM",
    ink: "var(--color-deck-limpio)",
    onInk: "board",
    thesis:
      "Fondo claro, una grilla que se respeta y nada de más. El contenido tiene que aguantar solo.",
    brief:
      "Lo opuesto al oscuro y bastante más difícil: sobre claro no hay dónde esconderse, así que cada imagen, cada alineación y cada espacio queda a la vista. Conviene cuando tu trabajo ya es fuerte visualmente y el sitio sólo tiene que presentarlo, o cuando apuntás a clientes corporativos que leen el blanco como seriedad.",
    tells: [
      "Ancho de lectura acotado y centrado",
      "Escala de grises corta: dos o tres niveles de texto",
      "El color aparece sólo en el trabajo mostrado",
      "Márgenes generosos y consistentes en todo el sitio",
    ],
    pitfall:
      "Confundir limpio con vacío. Sin jerarquía tipográfica clara, un sitio claro no se lee minimalista: se lee sin terminar.",
    effort: "Intermedio",
  },
  {
    id: "editorial",
    name: "Editorial y caso de estudio",
    code: "EDI",
    ink: "var(--color-deck-editorial)",
    onInk: "stock",
    thesis:
      "El sitio se lee como una revista: titulares grandes, texto largo y el proceso contado en orden.",
    brief:
      "Acá el protagonista es lo que escribís, no lo que programás. Es el formato de quien trabaja en UX, producto o investigación, donde el valor está en cómo pensaste el problema y no en la captura final. Un caso de estudio bien contado convence más que veinte miniaturas.",
    tells: [
      "Un titular que ocupa media pantalla",
      "Columna de texto angosta, entre 65 y 75 caracteres",
      "Contraste fuerte de escala entre título, bajada y cuerpo",
      "Imágenes intercaladas con epígrafe, no en grilla",
    ],
    pitfall:
      "Escribir el caso como una lista de tareas. Si no hay decisión, tensión ni resultado, el formato editorial deja el vacío más expuesto todavía.",
    effort: "Intermedio",
  },
  {
    id: "terminal",
    name: "Terminal y mono",
    code: "TRM",
    ink: "var(--color-deck-terminal)",
    onInk: "stock",
    thesis:
      "La interfaz imita una consola o un sistema operativo: monoespaciada, con prompt y cursor.",
    brief:
      "Declara perfil técnico sin una sola imagen, lo que lo vuelve ideal si no tenés material visual para mostrar. Funciona porque el público al que le hablás vive en esa ventana todo el día y la reconoce al instante. Es el estilo con mejor relación entre esfuerzo y carácter.",
    tells: [
      "Una sola familia monoespaciada en todo el sitio",
      "Comandos, rutas o prompt como recurso de navegación",
      "Cursor que parpadea, texto que se escribe solo",
      "Paleta de tres o cuatro colores tipo esquema de terminal",
    ],
    pitfall:
      "Usar mono para todo el texto largo. La monoespaciada se lee bien en líneas cortas y cansa en párrafos; dejala para código, datos y etiquetas.",
    effort: "Accesible",
  },
  {
    id: "craft",
    name: "Craft de CSS",
    code: "CFT",
    ink: "var(--color-deck-craft)",
    onInk: "stock",
    thesis:
      "El sitio es la demostración: cada componente prueba algo que sabés hacer con CSS.",
    brief:
      "En lugar de contar que dominás el detalle, lo ejercés en la propia página. Es el formato de quien busca trabajo de front-end o design engineering, donde quien te va a contratar abre las herramientas de desarrollo antes de leer tu bio. El sitio deja de ser un catálogo y pasa a ser la muestra.",
    tells: [
      "Demos y laboratorios de componentes navegables",
      "Efectos hechos con CSS puro donde se esperaría JavaScript",
      "Detalle obsesivo en foco, selección y estados",
      "Notas técnicas al lado de cada experimento",
    ],
    pitfall:
      "Acumular efectos sin propósito. Veinte trucos sueltos leen como práctica; tres resueltos con criterio leen como oficio.",
    effort: "Exigente",
  },
  {
    id: "motion",
    name: "Motion y scroll",
    code: "MOV",
    ink: "var(--color-deck-motion)",
    onInk: "stock",
    thesis:
      "El scroll dirige la película: los elementos entran, se anclan y se transforman a medida que bajás.",
    brief:
      "Convierte una página en un recorrido con tiempo propio, y es lo que separa un portafolio que se recuerda de uno que se hojea. Conviene si trabajás en dirección de arte, animación o branding, donde el ritmo es parte de lo que vendés. Pedís paciencia al visitante, así que el recorrido tiene que devolverle algo.",
    tells: [
      "Secciones ancladas que retienen la pantalla mientras cambian",
      "Transiciones entre páginas sin recarga",
      "Cursor propio que reacciona al contenido",
      "Curvas de animación lentas al final, nunca lineales",
    ],
    pitfall:
      "No respetar prefers-reduced-motion. Para parte del público el scroll animado no es estilo, es mareo; siempre dejá una versión quieta.",
    effort: "Exigente",
  },
  {
    id: "tridi",
    name: "3D y WebGL",
    code: "3DW",
    ink: "var(--color-deck-tridi)",
    onInk: "stock",
    thesis:
      "Hay una escena tridimensional real corriendo en el navegador, y a veces es todo el sitio.",
    brief:
      "El techo técnico del muestrario: desde un objeto que gira hasta un mundo caminable. Es una decisión de alto riesgo, porque un tiempo de carga largo o una escena que no corre en un teléfono cuesta más visitas de las que gana. Cuando sale bien, no hay formato que impresione más rápido.",
    tells: [
      "Una escena que responde al mouse desde el primer pantallazo",
      "Pantalla de carga con porcentaje, porque hace falta",
      "Iluminación, materiales y sombras que cambian con la cámara",
      "Navegación espacial en lugar de menú",
    ],
    pitfall:
      "Enviar la escena sin versión alternativa. Si el visitante entra desde un teléfono modesto y sólo ve una pantalla negra, no quedó impresionado: se fue.",
    effort: "Exigente",
  },
  {
    id: "playful",
    name: "Playful y color",
    code: "PLY",
    ink: "var(--color-deck-playful)",
    onInk: "board",
    thesis:
      "Color saturado, formas blandas, cosas que responden al toque y humor en los textos.",
    brief:
      "El estilo que más se acuerdan y el que menos gente usa, justamente porque expone. Sirve si trabajás en ilustración, producto de consumo o educación, y si tu personalidad es parte de la oferta. El color acá no decora: ocupa regiones enteras de la pantalla.",
    tells: [
      "Dos o tres colores fuertes conviviendo sin gris que los calme",
      "Ilustración o personaje propio en lugar de fotos",
      "Micro-recompensas al hacer clic o pasar el mouse",
      "Textos escritos en primera persona y con chiste",
    ],
    pitfall:
      "Saturar sin jerarquía. Si todo grita, nada se lee primero; incluso lo más colorido necesita un orden de lectura evidente.",
    effort: "Intermedio",
  },
  {
    id: "arranque",
    name: "Punto de partida",
    code: "ARR",
    ink: "var(--color-deck-arranque)",
    onInk: "stock",
    thesis:
      "Plantillas y repositorios abiertos: en vez de mirarlos, los clonás y los hacés tuyos.",
    brief:
      "El mazo que te saca de la pantalla en blanco. Lo más rápido es tomar una base que ya resuelve el estructural (rutas, contenido, despliegue) y gastar tu tiempo en lo único que nadie puede hacer por vos: qué mostrás y cómo lo contás. Empezar de cero es la forma más común de no terminar nunca.",
    tells: [
      "Código abierto con instrucciones de instalación",
      "El contenido separado en archivos de texto o Markdown",
      "Despliegue en un clic",
      "Elecciones de stack ya tomadas y documentadas",
    ],
    pitfall:
      "Publicarla sin tocar nada más que el nombre. Una plantilla reconocible sin una sola decisión propia dice menos que una página fea pero tuya.",
    effort: "Accesible",
  },
];

export const deckById = Object.fromEntries(decks.map((d) => [d.id, d])) as Record<
  DeckId,
  Deck
>;

/* --------------------------------------------------------------------------
   Reparto por regla. Se evalúa en orden: la primera regla que matchea gana,
   así que las señales más específicas van arriba.
   -------------------------------------------------------------------------- */

const rules: { deck: DeckId; match: RegExp }[] = [
  // Plantillas y stack: lo dice la fuente del listado, no la estética.
  { deck: "arranque", match: /\b(astro|next|gatsby|vite|wordpress|vanilla|webpack|cra)\b/i },
  // 3D antes que motion: una escena WebGL con scroll sigue siendo 3D.
  { deck: "tridi", match: /\b(3d|webgl|webgpu|r3f|three|voxel|open-world|isla|mundo|espacial|inmersiv|immersive|portales|walkable|room os|tour)\b/i },
  { deck: "terminal", match: /\b(terminal|mono|ide|os experimental|ryos)\b/i },
  { deck: "craft", match: /\b(css|craft|lab|demos|experiment|shaders|generativ|recipes|cube|a11y|kits)\b/i },
  { deck: "motion", match: /\b(motion|scroll|showreel|gsap|animat)\b/i },
  { deck: "editorial", match: /\b(editorial|tipo|tipograf|essay|case-study|case study|ux|product design|research|narrativ|contenido|content)\b/i },
  { deck: "playful", match: /\b(playful|colorido|color|festival|amarillo|cozy|surreal|juga|playable|cream)\b/i },
  { deck: "oscuro", match: /\b(oscuro|dark|deep dark)\b/i },
  { deck: "limpio", match: /\b(clean|limpio|minimal|light|corporate|clara|brand|ui)\b/i },
];

export function deckFor(item: Portfolio): DeckId {
  const source = (item.source ?? "").toLowerCase();
  if (source.includes("starter") || source.includes("repos") || source.includes("stack")) {
    return "arranque";
  }
  const haystack = `${item.style ?? ""} ${item.stack ?? ""} ${item.libs ?? ""}`;
  for (const rule of rules) {
    if (rule.match.test(haystack)) return rule.deck;
  }
  // Sin señal utilizable: el mazo más neutro, nunca un mazo inventado.
  return "limpio";
}

export interface DeckGroup {
  deck: Deck;
  items: Portfolio[];
}

export function groupByDeck(items: Portfolio[]): DeckGroup[] {
  const map = new Map<DeckId, Portfolio[]>(decks.map((d) => [d.id, []]));
  for (const item of items) {
    map.get(deckFor(item))!.push(item);
  }
  return decks.map((deck) => ({ deck, items: map.get(deck.id)! }));
}

/** Cuántas fichas tiene cada mazo con el listado completo. */
export const deckCounts: Record<DeckId, number> = Object.fromEntries(
  groupByDeck(allPortfolios).map(({ deck, items }) => [deck.id, items.length])
) as Record<DeckId, number>;

/** El código impreso de una ficha: OSC-04, 3DW-17. Estable por mazo. */
export function chipCode(item: Portfolio, indexInDeck: number): string {
  return `${deckById[deckFor(item)].code}-${String(indexInDeck + 1).padStart(2, "0")}`;
}
