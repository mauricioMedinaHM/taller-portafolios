/**
 * Lexicón de estilos del taller.
 *
 * Los items de `portfolios.json` traen un campo `style` corto y críptico
 * ("terminal mono", "R3F portales surreal", "Next.js+Tailwind+TS").
 * Este módulo lo descompone en términos atómicos y explica cada uno en
 * castellano, para que en el taller se pueda leer el porqué de cada decisión.
 *
 * El lexicón describe SOLO técnicas y estéticas genéricas. No contiene
 * afirmaciones sobre personas ni sobre sitios en particular.
 */

export type StyleTerm = {
  term: string;
  label: string;
  blurb: string;
  kind: "estetica" | "tecnica" | "stack" | "disciplina";
};

export const styleLexicon: Record<string, StyleTerm> = {
  // ─────────────────────────────── ESTÉTICAS ───────────────────────────────
  oscuro: {
    term: "oscuro",
    label: "Modo oscuro",
    blurb:
      "Fondo casi negro con texto claro: hace que las imágenes y los acentos de color resalten, y comunica perfil técnico.",
    kind: "estetica",
  },
  acentos: {
    term: "acentos",
    label: "Color de acento",
    blurb:
      "Un solo color fuerte sobre una base neutra. Guía el ojo hacia los links y botones importantes sin ensuciar el diseño.",
    kind: "estetica",
  },
  amarillo: {
    term: "amarillo",
    label: "Acento amarillo",
    blurb:
      "El amarillo grita sin ser agresivo: funciona como acento memorable, pero exige cuidado con el contraste sobre fondo claro.",
    kind: "estetica",
  },
  cream: {
    term: "cream",
    label: "Paleta crema",
    blurb:
      "Blancos rotos y beiges en lugar de blanco puro. Baja el cansancio visual y da una sensación cálida, editorial.",
    kind: "estetica",
  },
  light: {
    term: "light",
    label: "Modo claro",
    blurb:
      "Fondo claro y mucho aire. Es la opción más legible y la más difícil de hacer memorable: todo depende de la tipografía.",
    kind: "estetica",
  },
  clean: {
    term: "clean",
    label: "Limpio",
    blurb:
      "Pocos elementos, mucho espacio en blanco y una sola idea por pantalla. La opción más segura cuando el trabajo habla solo.",
    kind: "estetica",
  },
  minimal: {
    term: "minimal",
    label: "Minimalista",
    blurb:
      "Saca todo lo que no sea imprescindible. Obliga a que la jerarquía y la tipografía carguen con todo el peso expresivo.",
    kind: "estetica",
  },
  simple: {
    term: "simple",
    label: "Simple",
    blurb:
      "Estructura sin trucos: un layout previsible que se entiende de una pasada y se mantiene sin dolor a lo largo del tiempo.",
    kind: "estetica",
  },
  editorial: {
    term: "editorial",
    label: "Editorial",
    blurb:
      "Se lee como una revista: grillas, títulos grandes, columnas de texto y ritmo entre imagen y palabra bien calculado.",
    kind: "estetica",
  },
  bold: {
    term: "bold",
    label: "Tipografía bold",
    blurb:
      "Títulos enormes y pesados que ocupan la pantalla. Da personalidad inmediata y funciona incluso sin imágenes buenas.",
    kind: "estetica",
  },
  syne: {
    term: "syne",
    label: "Tipografía display tipo Syne",
    blurb:
      "Tipografías display de formas raras y anchas. Marcan carácter en los títulos, pero conviene dejar el cuerpo en algo neutro.",
    kind: "estetica",
  },
  mono: {
    term: "mono",
    label: "Monoespaciada",
    blurb:
      "Todos los caracteres ocupan lo mismo, como en un editor de código. Señal instantánea de perfil técnico y ordenado.",
    kind: "estetica",
  },
  terminal: {
    term: "terminal",
    label: "Estilo terminal",
    blurb:
      "Interfaz que imita una consola: tipografía monoespaciada, prompt y cursor. Señala perfil técnico sin necesidad de imágenes.",
    kind: "estetica",
  },
  ide: {
    term: "ide",
    label: "Estilo editor de código",
    blurb:
      "Imita un editor: pestañas, panel lateral, resaltado de sintaxis. Es un guiño al oficio que se lee sin explicación.",
    kind: "estetica",
  },
  os: {
    term: "os",
    label: "Interfaz tipo sistema operativo",
    blurb:
      "Escritorio con ventanas, íconos y barra de tareas. Convierte el portafolio en algo para explorar en vez de scrollear.",
    kind: "estetica",
  },
  room: {
    term: "room",
    label: "Habitación virtual",
    blurb:
      "Una habitación 3D donde cada objeto abre una sección. Mezcla espacio doméstico y navegación, y se recuerda muy fácil.",
    kind: "estetica",
  },
  isla: {
    term: "isla",
    label: "Isla / escenario aislado",
    blurb:
      "Un pedazo de mundo flotando en el vacío. Limita la escena 3D a algo liviano y aún así memorable de recorrer.",
    kind: "estetica",
  },
  flotante: {
    term: "flotante",
    label: "Elementos flotantes",
    blurb:
      "Objetos suspendidos sin piso ni horizonte. Da liviandad y evita tener que modelar un entorno completo y costoso.",
    kind: "estetica",
  },
  espacial: {
    term: "espacial",
    label: "Estética espacial",
    blurb:
      "Fondo negro, estrellas y escala enorme. Aprovecha que el vacío es barato de renderizar y muy fácil de hacer lucir bien.",
    kind: "estetica",
  },
  cozy: {
    term: "cozy",
    label: "Cozy / acogedor",
    blurb:
      "Colores cálidos, formas redondeadas y luz suave. Baja la barrera emocional y hace que la visita se sienta amable.",
    kind: "estetica",
  },
  cyberpunk: {
    term: "cyberpunk",
    label: "Cyberpunk",
    blurb:
      "Neones, brillos y tipografía técnica sobre oscuridad. Estética de ciencia ficción que encaja con demos de gráficos y juegos.",
    kind: "estetica",
  },
  voxel: {
    term: "voxel",
    label: "Voxel",
    blurb:
      "Gráfica hecha de cubitos, como los píxeles pero en 3D. Es liviana de producir y arrastra una simpatía inmediata.",
    kind: "estetica",
  },
  minecraft: {
    term: "minecraft",
    label: "Estética de bloques",
    blurb:
      "Mundos hechos con bloques cúbicos y texturas de baja resolución. Referencia cultural fuerte que se lee de una sola mirada.",
    kind: "estetica",
  },
  surreal: {
    term: "surreal",
    label: "Surrealismo",
    blurb:
      "Escenas imposibles, escalas raras, objetos fuera de contexto. Sorprende y se recuerda, aunque conviene no perder la navegación.",
    kind: "estetica",
  },
  coleccionable: {
    term: "coleccionable",
    label: "Lógica de colección",
    blurb:
      "Objetos que se juntan o se desbloquean mientras se recorre. Convierte al visitante en jugador y estira el tiempo de visita.",
    kind: "estetica",
  },
  exploratorio: {
    term: "exploratorio",
    label: "Exploratorio",
    blurb:
      "No hay un camino único: se descubre paseando. Premia la curiosidad, pero necesita pistas claras para que nadie se pierda.",
    kind: "estetica",
  },
  "open world": {
    term: "open world",
    label: "Mundo abierto",
    blurb:
      "Espacio libre sin recorrido impuesto, como en los videojuegos. Máxima libertad y máximo riesgo de que no se encuentre nada.",
    kind: "estetica",
  },
  mundo: {
    term: "mundo",
    label: "Mundo navegable",
    blurb:
      "El sitio es un lugar, no una lista de páginas. Cada sección ocupa una zona del espacio y se llega caminando.",
    kind: "estetica",
  },
  tour: {
    term: "tour",
    label: "Recorrido guiado",
    blurb:
      "Un camino fijo que lleva de una escena a la siguiente. Conserva el control narrativo y evita que alguien se pierda.",
    kind: "estetica",
  },
  cinematic: {
    term: "cinematic",
    label: "Cinematográfico",
    blurb:
      "Encuadres, luz y ritmo prestados del cine: planos amplios, profundidad de campo y transiciones que respiran.",
    kind: "estetica",
  },
  premium: {
    term: "premium",
    label: "Acabado premium",
    blurb:
      "Todo se siente caro: tiempos de animación pulidos, tipografía cuidada y cero detalles sueltos. Se nota en las transiciones.",
    kind: "estetica",
  },
  award: {
    term: "award",
    label: "Estilo premiado",
    blurb:
      "Portafolios pensados para ganar premios de diseño web: mucho efecto, mucha producción y pantallas de presentación espectaculares.",
    kind: "estetica",
  },
  heavy: {
    term: "heavy",
    label: "Cargado / heavy",
    blurb:
      "Mucho recurso en pantalla: videos, 3D, animaciones. Impacta fuerte, pero hay que vigilar peso, batería y accesibilidad.",
    kind: "estetica",
  },
  playful: {
    term: "playful",
    label: "Juguetón",
    blurb:
      "Interacciones inesperadas, rebotes y guiños. Muestra soltura técnica y hace que la persona quiera seguir haciendo clic.",
    kind: "estetica",
  },
  colorido: {
    term: "colorido",
    label: "Colorido",
    blurb:
      "Paleta amplia y saturada usada sin miedo. Diferencia al instante, pero necesita reglas claras para no volverse ruido.",
    kind: "estetica",
  },
  color: {
    term: "color",
    label: "Trabajo de color",
    blurb:
      "El color como tema central: paletas construidas a mano, contrastes medidos y decisiones que se sostienen en todo el sitio.",
    kind: "estetica",
  },
  corporate: {
    term: "corporate",
    label: "Corporativo",
    blurb:
      "Lenguaje visual de empresa: sobrio, confiable y previsible. Prioriza claridad del mensaje sobre expresión personal.",
    kind: "estetica",
  },
  modern: {
    term: "modern",
    label: "UI moderna",
    blurb:
      "Bordes redondeados, sombras suaves, gradientes sutiles y mucho espacio. El look por defecto del producto digital de hoy.",
    kind: "estetica",
  },
  experimental: {
    term: "experimental",
    label: "Experimental",
    blurb:
      "Rompe convenciones a propósito para probar ideas. Sirve como carta de presentación creativa, no como plantilla reutilizable.",
    kind: "estetica",
  },
  deep: {
    term: "deep",
    label: "Oscuro profundo",
    blurb:
      "Negros muy cerrados, casi sin grises intermedios. Dramatiza el contenido y hace que un solo acento de color alcance.",
    kind: "estetica",
  },

  // ─────────────────────────────── TÉCNICAS ────────────────────────────────
  "3d": {
    term: "3d",
    label: "3D en el navegador",
    blurb:
      "Geometría, luces y cámara renderizadas en vivo en la web. Alto impacto, alto costo de performance y de tiempo de producción.",
    kind: "tecnica",
  },
  webgl: {
    term: "webgl",
    label: "WebGL",
    blurb:
      "La API que le da al navegador acceso a la placa de video. Es la base de casi todo el 3D web.",
    kind: "tecnica",
  },
  webgpu: {
    term: "webgpu",
    label: "WebGPU",
    blurb:
      "El sucesor de WebGL: más control y mejor rendimiento. Todavía es nuevo, así que conviene tener un plan B para navegadores viejos.",
    kind: "tecnica",
  },
  shaders: {
    term: "shaders",
    label: "Shaders",
    blurb:
      "Programas cortos que corren en la placa de video y definen cada píxel. Son la herramienta fina para efectos propios.",
    kind: "tecnica",
  },
  generative: {
    term: "generative",
    label: "Arte generativo",
    blurb:
      "Las formas las produce código con algo de azar controlado. Cada visita puede ver algo distinto sin trabajo manual extra.",
    kind: "tecnica",
  },
  fluid: {
    term: "fluid",
    label: "Simulación de fluidos",
    blurb:
      "El cursor deforma una capa que se comporta como líquido o humo. Efecto vistoso que se resuelve enteramente en shaders.",
    kind: "tecnica",
  },
  ribbons: {
    term: "ribbons",
    label: "Cintas / trazos 3D",
    blurb:
      "Tiras de geometría que dejan una estela siguiendo el movimiento. Dan sensación de gesto y fluidez con muy poca geometría.",
    kind: "tecnica",
  },
  portales: {
    term: "portales",
    label: "Portales",
    blurb:
      "Ventanas dentro de la escena que muestran otro espacio. Permiten encadenar mundos sin cortar el recorrido con una carga.",
    kind: "tecnica",
  },
  overlay: {
    term: "overlay",
    label: "Capa superpuesta",
    blurb:
      "Interfaz en HTML apoyada sobre el canvas 3D. Así el texto queda legible y accesible mientras el fondo hace el show.",
    kind: "tecnica",
  },
  scroll: {
    term: "scroll",
    label: "Animación por scroll",
    blurb:
      "El avance de la rueda controla la animación. Da sensación de control y funciona como guion para contar algo por partes.",
    kind: "tecnica",
  },
  motion: {
    term: "motion",
    label: "Motion design",
    blurb:
      "Transiciones y micro animaciones con intención. Bien dosificadas explican jerarquía y suman calidad percibida enseguida.",
    kind: "tecnica",
  },
  interactivo: {
    term: "interactivo",
    label: "Interactivo",
    blurb:
      "La página responde a lo que hace la persona: arrastrar, apuntar, escribir. Genera recuerdo mucho más fuerte que mirar.",
    kind: "tecnica",
  },
  jugable: {
    term: "jugable",
    label: "Jugable",
    blurb:
      "Se navega con mecánicas de videojuego: moverse, saltar, interactuar. Demuestra habilidad técnica y engancha, pero excluye a quien no juega.",
    kind: "tecnica",
  },
  walkable: {
    term: "walkable",
    label: "Espacio caminable",
    blurb:
      "Se recorre en primera o tercera persona con el teclado. Cada zona del mapa cumple el rol de una sección del sitio.",
    kind: "tecnica",
  },
  fps: {
    term: "fps",
    label: "Cámara en primera persona",
    blurb:
      "Se mira desde los ojos del visitante, con mouse para girar. Muy inmersivo y bastante exigente en controles y performance.",
    kind: "tecnica",
  },
  vr: {
    term: "vr",
    label: "Realidad virtual (WebXR)",
    blurb:
      "El sitio se puede ver con visor desde el navegador. Nicho, pero suma muchísimo si el trabajo es justamente inmersivo.",
    kind: "tecnica",
  },
  inmersivo: {
    term: "inmersivo",
    label: "Inmersivo",
    blurb:
      "Busca que la persona se olvide de que está en una web: sonido, pantalla completa y poca interfaz visible.",
    kind: "tecnica",
  },
  narrativo: {
    term: "narrativo",
    label: "Narrativo / storytelling",
    blurb:
      "El contenido se ordena como un relato con principio y final. Guía el recorrido y le da sentido a cada efecto.",
    kind: "tecnica",
  },
  tipo: {
    term: "tipo",
    label: "Tipografía como recurso",
    blurb:
      "La tipografía es el elemento principal del diseño: escala, interletrado y contraste hacen todo el trabajo visual.",
    kind: "tecnica",
  },
  fonts: {
    term: "fonts",
    label: "Trabajo con fuentes",
    blurb:
      "Elección, carga y ajuste fino de tipografías web, incluyendo fuentes variables y evitar saltos al cargar la página.",
    kind: "tecnica",
  },
  a11y: {
    term: "a11y",
    label: "Accesibilidad",
    blurb:
      "Que el sitio funcione con teclado, lector de pantalla y buen contraste. No es opcional: es parte del oficio.",
    kind: "tecnica",
  },
  componentes: {
    term: "componentes",
    label: "Componentes reutilizables",
    blurb:
      "Piezas de interfaz independientes que se combinan. Acelera el armado y mantiene coherencia visual en todo el portafolio.",
    kind: "tecnica",
  },
  kits: {
    term: "kits",
    label: "Kits de UI",
    blurb:
      "Colecciones de componentes listos para copiar y pegar. Ahorran semanas, pero conviene retocarlos para no parecer una plantilla.",
    kind: "tecnica",
  },
  custom: {
    term: "custom",
    label: "Hecho a medida",
    blurb:
      "Sin framework de estilos ni plantilla: todo escrito a mano. Más control y menos peso, a cambio de más horas.",
    kind: "tecnica",
  },
  "cube css": {
    term: "cube css",
    label: "CUBE CSS",
    blurb:
      "Metodología que organiza el CSS en composición, utilidades, bloques y excepciones. Ordena hojas de estilo sin recurrir a frameworks.",
    kind: "tecnica",
  },
  eng: {
    term: "eng",
    label: "Design engineering",
    blurb:
      "Perfil que diseña y programa la misma interfaz. El portafolio muestra las dos cosas: criterio visual y código prolijo.",
    kind: "tecnica",
  },
  demos: {
    term: "demos",
    label: "Demos interactivas",
    blurb:
      "Pequeños ejemplos manipulables en vez de capturas. Prueban que lo que se cuenta funciona de verdad, ahí mismo.",
    kind: "tecnica",
  },

  // ───────────────────────────────── STACK ─────────────────────────────────
  html: {
    term: "html",
    label: "HTML",
    blurb:
      "El esqueleto de toda página. Bien escrito, resuelve gratis accesibilidad y posicionamiento antes de tocar una línea de JavaScript.",
    kind: "stack",
  },
  css: {
    term: "css",
    label: "CSS",
    blurb:
      "El lenguaje de estilos del navegador. Hoy resuelve solo layouts, animaciones y temas que antes pedían librerías enteras.",
    kind: "stack",
  },
  svg: {
    term: "svg",
    label: "SVG",
    blurb:
      "Gráficos vectoriales que escalan sin perder nitidez y se animan con CSS o JavaScript. Ideales para íconos e ilustración.",
    kind: "stack",
  },
  javascript: {
    term: "javascript",
    label: "JavaScript",
    blurb:
      "El lenguaje que corre en el navegador. Es el piso común: todo framework que aparezca abajo termina siendo JavaScript.",
    kind: "stack",
  },
  typescript: {
    term: "typescript",
    label: "TypeScript",
    blurb:
      "JavaScript con tipos. Avisa errores mientras se escribe y hace que un proyecto grande siga siendo manejable meses después.",
    kind: "stack",
  },
  "vanilla js": {
    term: "vanilla js",
    label: "JavaScript puro",
    blurb:
      "Sin frameworks ni librerías: solo APIs del navegador. Carga rapidísimo y obliga a entender de verdad qué pasa abajo.",
    kind: "stack",
  },
  react: {
    term: "react",
    label: "React",
    blurb:
      "Librería para armar interfaces con componentes. Es el estándar del mercado, así que también es señal de empleabilidad.",
    kind: "stack",
  },
  "next.js": {
    term: "next.js",
    label: "Next.js",
    blurb:
      "Framework de React con rutas, renderizado en servidor e imágenes optimizadas. La opción más común para un portafolio hoy.",
    kind: "stack",
  },
  astro: {
    term: "astro",
    label: "Astro",
    blurb:
      "Framework que entrega HTML casi sin JavaScript y suma interactividad solo donde hace falta. Excelente para portafolios con blog.",
    kind: "stack",
  },
  gatsby: {
    term: "gatsby",
    label: "Gatsby",
    blurb:
      "Generador de sitios estáticos con React, muy usado años atrás. Verlo suele indicar un portafolio de una generación anterior.",
    kind: "stack",
  },
  vite: {
    term: "vite",
    label: "Vite",
    blurb:
      "Herramienta de desarrollo y empaquetado muy rápida. Hoy es el punto de partida por defecto para un proyecto desde cero.",
    kind: "stack",
  },
  webpack: {
    term: "webpack",
    label: "Webpack",
    blurb:
      "Empaquetador clásico, potentísimo y verborrágico de configurar. Aparece en proyectos anteriores a la ola de herramientas rápidas.",
    kind: "stack",
  },
  cra: {
    term: "cra",
    label: "Create React App",
    blurb:
      "La forma vieja de arrancar un proyecto React. Está discontinuada: para algo nuevo conviene Vite o Next.js.",
    kind: "stack",
  },
  tailwind: {
    term: "tailwind",
    label: "Tailwind CSS",
    blurb:
      "Estilos con clases utilitarias escritas en el propio HTML. Acelera muchísimo el armado y mantiene el diseño consistente.",
    kind: "stack",
  },
  mdx: {
    term: "mdx",
    label: "MDX",
    blurb:
      "Markdown que además acepta componentes. Permite escribir un caso de estudio y meterle demos interactivas en el medio.",
    kind: "stack",
  },
  "three.js": {
    term: "three.js",
    label: "Three.js",
    blurb:
      "La librería más usada para 3D en la web. Le pone una capa amable a WebGL: escenas, materiales, luces y cámaras.",
    kind: "stack",
  },
  r3f: {
    term: "r3f",
    label: "React Three Fiber",
    blurb:
      "Three.js expresado como componentes de React. Permite armar escenas 3D con la misma lógica que el resto de la interfaz.",
    kind: "stack",
  },
  gsap: {
    term: "gsap",
    label: "GSAP",
    blurb:
      "Librería de animación con control preciso de tiempos y secuencias. El estándar cuando el motion es protagonista.",
    kind: "stack",
  },
  wordpress: {
    term: "wordpress",
    label: "WordPress",
    blurb:
      "Gestor de contenidos clásico con panel de administración. Conviene si hay que actualizar seguido sin tocar código.",
    kind: "stack",
  },

  // ──────────────────────────── DISCIPLINAS / PERFIL ───────────────────────
  frontend: {
    term: "frontend",
    label: "Frontend",
    blurb:
      "El lado de la interfaz: lo que se ve y se toca en el navegador. Ahí se juega casi todo portafolio.",
    kind: "disciplina",
  },
  design: {
    term: "design",
    label: "Diseño",
    blurb:
      "Las decisiones sobre forma y función antes de escribir código: jerarquía, ritmo, color y sistema visual.",
    kind: "disciplina",
  },
  ui: {
    term: "ui",
    label: "Interfaz (UI)",
    blurb:
      "Cómo se ve y se comporta cada elemento con el que se interactúa: botones, tipografía, espaciado, estados.",
    kind: "disciplina",
  },
  ux: {
    term: "ux",
    label: "Experiencia (UX)",
    blurb:
      "El recorrido completo y el porqué de cada paso. En un portafolio se muestra contando decisiones, no solo pantallas lindas.",
    kind: "disciplina",
  },
  research: {
    term: "research",
    label: "Investigación",
    blurb:
      "Entrevistas, pruebas con usuarios y datos que justifican el diseño. Es lo que separa una opinión de una decisión.",
    kind: "disciplina",
  },
  product: {
    term: "product",
    label: "Diseño de producto",
    blurb:
      "Diseñar sistemas que se usan seguido, no piezas sueltas. Pide mostrar contexto, restricciones y resultado medible.",
    kind: "disciplina",
  },
  "case study": {
    term: "case study",
    label: "Caso de estudio",
    blurb:
      "Un proyecto contado con problema, proceso y resultado. Es el formato que más convence en una entrevista de trabajo.",
    kind: "disciplina",
  },
  craft: {
    term: "craft",
    label: "Oficio / craft",
    blurb:
      "Obsesión por el detalle fino: medio píxel, curva de animación, foco del teclado. Se nota aunque nadie sepa nombrarlo.",
    kind: "disciplina",
  },
  creativo: {
    term: "creativo",
    label: "Perfil creativo",
    blurb:
      "El portafolio es en sí mismo la pieza creativa. Prioriza expresión y sorpresa por encima de la convención.",
    kind: "disciplina",
  },
  digital: {
    term: "digital",
    label: "Creatividad digital",
    blurb:
      "Trabajo nacido para pantalla: web, instalaciones, motion. El medio interactivo es parte del concepto, no solo el soporte.",
    kind: "disciplina",
  },
  art: {
    term: "art",
    label: "Arte / dirección de arte",
    blurb:
      "Decisiones estéticas con intención autoral: referencias, paleta y composición sostenidas como un criterio propio.",
    kind: "disciplina",
  },
  brand: {
    term: "brand",
    label: "Marca",
    blurb:
      "Identidad aplicada de punta a punta: logo, tipografía, color y tono de voz coherentes en todo el sitio.",
    kind: "disciplina",
  },
  studio: {
    term: "studio",
    label: "Estudio",
    blurb:
      "Sitio de un equipo, no de una persona. Sirve como referencia de nivel de producción, aunque tenga otro presupuesto.",
    kind: "disciplina",
  },
  lab: {
    term: "lab",
    label: "Laboratorio",
    blurb:
      "Sección aparte para experimentos sin terminar. Deja mostrar curiosidad sin ensuciar la parte formal del portafolio.",
    kind: "disciplina",
  },
  experiments: {
    term: "experiments",
    label: "Experimentos",
    blurb:
      "Pruebas técnicas publicadas tal cual. Valen como evidencia de práctica constante, más que como proyectos cerrados.",
    kind: "disciplina",
  },
  portfolio: {
    term: "portfolio",
    label: "Portafolio",
    blurb:
      "Selección curada de trabajo con un objetivo concreto: conseguir cliente o empleo. Menos proyectos y mejor contados rinde más.",
    kind: "disciplina",
  },
  showreel: {
    term: "showreel",
    label: "Showreel",
    blurb:
      "Montaje breve con lo mejor del trabajo, sin explicaciones. Funciona como anzuelo antes de entrar en los detalles.",
    kind: "disciplina",
  },
  landing: {
    term: "landing",
    label: "Landing page",
    blurb:
      "Una sola página con un objetivo claro y una acción principal. Buen formato cuando el portafolio recién empieza.",
    kind: "disciplina",
  },
  blog: {
    term: "blog",
    label: "Blog",
    blurb:
      "Escribir sobre lo que se hace acumula autoridad y tráfico con el tiempo. Suele traer más oportunidades que la galería.",
    kind: "disciplina",
  },
  notes: {
    term: "notes",
    label: "Notas / jardín digital",
    blurb:
      "Apuntes breves publicados sin la formalidad de un artículo. Baja la fricción para escribir seguido y mostrar proceso.",
    kind: "disciplina",
  },
  essay: {
    term: "essay",
    label: "Ensayo",
    blurb:
      "Texto largo que desarrolla una idea con argumento propio. Demuestra pensamiento, no solo ejecución.",
    kind: "disciplina",
  },
  recipes: {
    term: "recipes",
    label: "Recetas",
    blurb:
      "Soluciones cortas y copiables a problemas concretos. Formato muy útil para otros y muy bueno para posicionarse.",
    kind: "disciplina",
  },
  education: {
    term: "education",
    label: "Educación",
    blurb:
      "Contenido armado para enseñar, con ejemplos y progresión. Enseñar lo que se sabe es la mejor carta de presentación.",
    kind: "disciplina",
  },
  community: {
    term: "community",
    label: "Comunidad",
    blurb:
      "El sitio funciona como punto de encuentro: charlas, recursos, gente. Suma red de contactos además de vidriera.",
    kind: "disciplina",
  },
  festival: {
    term: "festival",
    label: "Festival / evento",
    blurb:
      "Sitio de un evento con fecha límite. Buen laboratorio de ideas gráficas fuertes que después se pueden reciclar.",
    kind: "disciplina",
  },
  platform: {
    term: "platform",
    label: "Plataforma",
    blurb:
      "Producto con cuentas, datos y secciones internas. Aparece cuando el portafolio también sirve de herramienta.",
    kind: "disciplina",
  },
  tech: {
    term: "tech",
    label: "Perfil técnico",
    blurb:
      "Pone el foco en el cómo: arquitectura, rendimiento y decisiones de código, antes que en la presentación visual.",
    kind: "disciplina",
  },
  engineering: {
    term: "engineering",
    label: "Ingeniería",
    blurb:
      "Mirada de sistemas: rendimiento, trade-offs y mantenibilidad. Lo que se muestra es criterio de decisión, no solo resultado.",
    kind: "disciplina",
  },
  personal: {
    term: "personal",
    label: "Sitio personal",
    blurb:
      "Espacio propio sin normas de nadie: mezcla trabajo, intereses y voz. Es lo que lo hace difícil de olvidar.",
    kind: "disciplina",
  },
  opinionado: {
    term: "opinionado",
    label: "Con opinión",
    blurb:
      "Toma posición y la defiende por escrito. Filtra público, pero atrae mucho mejor a quien comparte esa manera de trabajar.",
    kind: "disciplina",
  },
  contenido: {
    term: "contenido",
    label: "Orientado a contenido",
    blurb:
      "Lo que importa es el texto y su lectura, no el efecto. El diseño se limita a no estorbar y a ordenar.",
    kind: "disciplina",
  },
  anual: {
    term: "anual",
    label: "Rediseño anual",
    blurb:
      "Versión nueva cada año, dejando las viejas accesibles. El archivo muestra la evolución mejor que cualquier currículum.",
    kind: "disciplina",
  },
  principiante: {
    term: "principiante",
    label: "Nivel principiante",
    blurb:
      "Referencia alcanzable con HTML, CSS y poco JavaScript. Buen punto de partida para la primera versión del portafolio.",
    kind: "disciplina",
  },
  intermedio: {
    term: "intermedio",
    label: "Nivel intermedio",
    blurb:
      "Pide manejar un framework, componentes y algo de animación. Es el salto donde el portafolio empieza a diferenciarse.",
    kind: "disciplina",
  },
  avanzado: {
    term: "avanzado",
    label: "Nivel avanzado",
    blurb:
      "Requiere 3D, shaders o motion fino. Impresiona, pero conviene encararlo recién cuando lo básico ya está resuelto.",
    kind: "disciplina",
  },

  // ─────────────────────── CONTEXTO REGIONAL / IDIOMA ──────────────────────
  latam: {
    term: "latam",
    label: "Latinoamérica",
    blurb:
      "Referencia de la región: sirve para comparar con un contexto de mercado y presupuesto parecido al propio.",
    kind: "disciplina",
  },
  ar: {
    term: "ar",
    label: "Argentina",
    blurb:
      "Referencia local: útil para ver qué nivel se pide acá y cómo se presenta el trabajo en el mercado argentino.",
    kind: "disciplina",
  },
  br: {
    term: "br",
    label: "Brasil",
    blurb:
      "Escena brasileña, muy fuerte en frontend y motion. Buena fuente de referencias regionales con estándar internacional.",
    kind: "disciplina",
  },
  mx: {
    term: "mx",
    label: "México",
    blurb:
      "Escena mexicana, con mucho cruce entre diseño gráfico y web. Referencia cercana en idioma y en tipo de cliente.",
    kind: "disciplina",
  },
  fr: {
    term: "fr",
    label: "Francia",
    blurb:
      "Escena francesa, histórica en sitios interactivos y premiados. Referencia obligada si el objetivo es trabajo creativo 3D.",
    kind: "disciplina",
  },
  es: {
    term: "es",
    label: "En español",
    blurb:
      "El contenido está en castellano. Importa para ver cómo se resuelven títulos y textos largos sin copiar el inglés.",
    kind: "disciplina",
  },
};

/** Alias → clave canónica del lexicón. */
const aliases: Record<string, string> = {
  // idioma / variantes
  dark: "oscuro",
  "dark mode": "oscuro",
  creative: "creativo",
  front: "frontend",
  content: "contenido",
  immersive: "inmersivo",
  interactivas: "interactivo",
  interactiva: "interactivo",
  interactive: "interactivo",
  playable: "jugable",
  world: "mundo",
  worlds: "mundo",
  zones: "walkable",
  storytelling: "narrativo",
  story: "narrativo",
  tipografia: "tipo",
  tipografía: "tipo",
  typography: "tipo",
  study: "case study",
  "case-study": "case study",
  casestudy: "case study",
  gen: "generative",
  generativo: "generative",
  "design eng": "eng",
  "design-eng": "eng",
  "ui-eng": "eng",
  "design engineering": "eng",
  // stack
  next: "next.js",
  nextjs: "next.js",
  three: "three.js",
  threejs: "three.js",
  "react three fiber": "r3f",
  ts: "typescript",
  js: "javascript",
  tw: "tailwind",
  "tailwind css": "tailwind",
  vanilla: "vanilla js",
  "create react app": "cra",
  cube: "cube css",
  "web gl": "webgl",
  "web gpu": "webgpu",
  shader: "shaders",
  // estética
  cubes: "voxel",
  "open-world": "open world",
  openworld: "open world",
  accesibilidad: "a11y",
  accessibility: "a11y",
  demo: "demos",
  kit: "kits",
  component: "componentes",
  components: "componentes",
  font: "fonts",
  tipografias: "fonts",
};

/**
 * Términos sin valor didáctico: conectores, muletillas y nombres propios de
 * proyectos. Se ignoran para no generar entradas vacías ni afirmar cosas
 * sobre sitios concretos.
 */
const ignored = new Set([
  "a",
  "al",
  "actual",
  "con",
  "de",
  "del",
  "determinado",
  "el",
  "en",
  "ish",
  "la",
  "las",
  "los",
  "mas",
  "no",
  "para",
  "por",
  "un",
  "una",
  "y",
  "paris",
  "ryos",
  "v4",
  "vibe",
  "web",
]);

/** Normaliza un texto: sin acentos, en minúsculas, con `+` `/` `-` como separadores. */
function normalize(input: string): string {
  return input
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9.]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** Resuelve un candidato (ya normalizado) a una entrada del lexicón. */
function resolve(candidate: string): StyleTerm | undefined {
  const key = aliases[candidate] ?? candidate;
  return styleLexicon[key];
}

const MAX_NGRAM = 3;

/**
 * Parte un string de `style` en términos conocidos y devuelve los que matchean.
 * El matching es por término, case-insensitive y tolerante a `+`, `/`, `-` y espacios.
 * Prioriza las frases más largas (así "cube css" no se lee como "css" suelto)
 * y no repite entradas.
 */
export function explainStyle(style: string): StyleTerm[] {
  if (!style) return [];

  const words = normalize(style).split(" ").filter(Boolean);
  const found: StyleTerm[] = [];
  const seen = new Set<string>();

  let i = 0;
  while (i < words.length) {
    let matched = false;

    for (let n = Math.min(MAX_NGRAM, words.length - i); n >= 1; n--) {
      const candidate = words.slice(i, i + n).join(" ");
      if (n === 1 && ignored.has(candidate)) break;

      const entry = resolve(candidate);
      if (entry) {
        if (!seen.has(entry.term)) {
          seen.add(entry.term);
          found.push(entry);
        }
        i += n;
        matched = true;
        break;
      }
    }

    if (!matched) i += 1;
  }

  return found;
}

/** Todos los términos del lexicón, ordenados por etiqueta. */
export const allStyleTerms: StyleTerm[] = Object.values(styleLexicon).sort((a, b) =>
  a.label.localeCompare(b.label, "es")
);

export const styleKindLabels: Record<StyleTerm["kind"], string> = {
  estetica: "Estética",
  tecnica: "Técnica",
  stack: "Stack",
  disciplina: "Disciplina",
};
